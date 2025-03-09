import { useEffect, useState } from "react";
import Cards from "../../components/Card";
import "./index.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
// import i18n from "../../i18n";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
interface ServiceItem {
  _id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  name_kr: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  description_kr: string;
  included_uz: string;
  included_ru: string;
  included_en: string;
  included_kr: string;
  price: number;
  type: string;
  discount: number;
  image: string;
}

const getLocalizedText = (
  item: ServiceItem,
  key: "name" | "description" | "included",
  lang: string
): string => {
  const langKey = `${key}_${lang}` as keyof ServiceItem;
  return String(item[langKey] ?? item["name_uz"]); // Majburan stringga o‘girish
};
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
const Home = () => {
  const [service, setService] = useState<ServiceItem[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { i18n, t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 100, offset: 0, delay: 0 });

    axios
      .get("https://api.alcoders.uz/products")
      .then((response) => setService(response.data.data))
      .catch((error) => console.log(error));
    console.log(service, "service");

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

  const getLocalizedTextForNews = (
    item: NewsItem,
    key: "name" | "description"
  ) => {
    const langKey = `${key}_${i18n.language}` as keyof NewsItem;
    return item[langKey] ?? item[`name_uz`];
  };

  const handleShowModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <section className="d-flex flex-row justify-content-center g-4 align-item-center mt-5">
        <div data-aos="fade-right" className="container mt-5 w-75 my-5">
          <h3>{t("welcome")}</h3>
          <h2 className="my-5 fs-1">{t("slogan")}</h2>
          <h5>{t("subtitle")}</h5>
        </div>
        <img src="/hero.jpg" alt="hero" width="800px" className="heroimg" />
      </section>
      <section>
        {/* <div className="container mt-5 w-75 my-5">
          {/* <h3>{t("about")}</h3> 
          <h3
            className="text-center"
            style={{ fontSize: "5rem", fontWeight: "bold" }}
          >
            We empower you to succeed in the digital world
          </h3>

          <p className="text-center text-secondary fs-5 p-5">
            AlcodersUz is an IT company that provides its clients with a variety
            of IT services. We talk to each client individually, explaining what
            they want and need to do, and what we can offer. And we create
            projects based on the needs and wishes of our clients. The main
            thing for us is to digitize your business or work and provide you
            with the most profitable projects you want.
          </p>
        </div> */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source src="/backvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: "-1",
            }}
          ></div>

          <div style={{ position: "relative", zIndex: "1", maxWidth: "800px" }}>
            <h1
              style={{ fontSize: "3rem", fontWeight: "bold", margin: "0" }}
              data-aos="zoom-in-up"
            >
              <h3>{t("about.title")}</h3>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "20px",
                paddingTop: "4rem",
              }}
              data-aos="zoom-out"
            >
              <h3>{t("about.description")}</h3>
            </p>

            {/* <div style={{ marginTop: "20px" }}>
            
              <img
                src="/service.jpg"
                alt="About Us"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "10px",
                }}
              />
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-5 w-100 ">
          <h3 className="text-center">{t("services.title")}</h3>
          {/* <h3 className="text-center pb-5">{t("services")}</h3> */}
          <div className="coni gap-5 py-5 ">
            {Array.isArray(service) &&
              service.map((item) => (
                <Cards
                  key={item._id}
                  id={item._id}
                  url={item.image}
                  title={getLocalizedText(item, "name", i18n.language)}
                  subtitle={getLocalizedText(
                    item,
                    "description",
                    i18n.language
                  )}
                  included={getLocalizedText(item, "included", i18n.language)}
                  price={item.price}
                  discount={item.discount}
                />
              ))}
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center mb-4 py-5">{t("news.title")}</h2>
        <Row className="g-4 d-flex flex-row align-items-center justify-content-space-between">
          {news.map((item) => (
            <Col md={4} lg={6} key={item._id} data-aos="fade-up">
              <Card
                className="shadow-lg border-0"
                onClick={() => handleShowModal(item)}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={getLocalizedTextForNews(item, "name")}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>
                    {getLocalizedTextForNews(item, "name")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {selectedNews && (
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                {getLocalizedTextForNews(selectedNews, "name")}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedNews.image}
                alt={getLocalizedTextForNews(selectedNews, "name")}
                className="w-100 mb-3"
                style={{ borderRadius: "10px" }}
              />
              <p>{getLocalizedTextForNews(selectedNews, "description")}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleCloseModal}>
                {t("news.close")}
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </section>
    </>
  );
};

export default Home;
