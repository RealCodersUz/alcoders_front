import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Card,
  Container,
  Row,
  Col,
  Pagination,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const NewsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0 });

    fetch("https://api.alcoders.uz/news")
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const formattedNews = data.data.map((item: any) => ({
            id: item._id,
            title: item[`name_${i18n.language}`] || item.name_uz,
            description:
              item[`description_${i18n.language}`] || item.description_uz,
            image: item.image,
          }));
          setNews(formattedNews);
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [i18n.language]);

  const handleShowModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">{t("news.title")}</h2>
      <Row className="g-4">
        {currentNews.map((item) => (
          <Col md={6} lg={4} key={item.id} data-aos="fade-up">
            <Card
              className="shadow-lg border-0"
              onClick={() => handleShowModal(item)}
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      {selectedNews && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedNews.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-100 mb-3"
              style={{ borderRadius: "10px" }}
            />
            <p>{selectedNews.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleCloseModal}>
              {t("news.close")}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default NewsPage;
