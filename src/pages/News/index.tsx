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
import axios from "axios";
import "aos/dist/aos.css";

interface NewsItem {
  _id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  name_kr: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  description_kr: string;
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

    axios
      .get("https://api.alcoders.uz/news", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setNews(response.data.data);
          console.log(response.data.data);
        } else {
          console.error("Invalid response format:", response.data);
        }
      })
      .catch((error) => console.log("API Error:", error));
  }, []);

  const handleShowModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const getLocalizedText = (item: NewsItem, key: "name" | "description") => {
    const langKey = `${key}_${i18n.language}` as keyof NewsItem;
    return item[langKey] ?? item[`name_uz`];
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">{t("news.title")}</h2>
      <Row className="g-4 d-flex flex-row align-items-center justify-content-space-between">
        {currentNews.map((item) => (
          <Col md={4} lg={6} key={item._id} data-aos="fade-up">
            <Card
              className="shadow-lg border-0"
              onClick={() => handleShowModal(item)}
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={getLocalizedText(item, "name")}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{getLocalizedText(item, "name")}</Card.Title>
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
            <Modal.Title>{getLocalizedText(selectedNews, "name")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedNews.image}
              alt={getLocalizedText(selectedNews, "name")}
              className="w-100 mb-3"
              style={{ borderRadius: "10px" }}
            />
            <p>{getLocalizedText(selectedNews, "description")}</p>
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
