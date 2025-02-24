import React, { useState, useEffect } from "react";
import { Modal, Button, Card, Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0 });
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://api.alcoders.uz/news",
      headers: {
        "Content-Type": "application/json",
        "Acces-control-origin": "*",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(JSON.parse(response.data));

        setNews(JSON.parse(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(news);

    // setNews([
    //   {
    //     id: 1,
    //     title: "News 1",
    //     description: "This is news 1",
    //     image: "/pexels-fotios-photos-2363482.jpg",
    //   },
    //   {
    //     id: 2,
    //     title: "News 1",
    //     description: "This is news 1",
    //     image: "/pexels-fotios-photos-2363482.jpg",
    //   },
    //   {
    //     id: 3,
    //     title: "News 1",
    //     description: "This is news 1",
    //     image: "/pexels-fotios-photos-2363482.jpg",
    //   },
    // ]);
  }, []);

  const handleShowModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Latest News</h2>
      <Row className="g-4">
        {news.map((item) => (
          <Col md={4} lg={6} key={item.id} data-aos="fade-up">
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
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default NewsPage;
