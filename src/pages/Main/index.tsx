import { useEffect, useRef, useState } from "react";

import "./index.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import AOS from "aos";

import "aos/dist/aos.css";
// import i18n from "../../i18n";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();
  const hdleclick = (id: string): void => {
    navigate(`/contact?id=${id}`);
  };
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.children[0].clientWidth + 22;
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };
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
            marginTop: 30,
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

          {/* <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: "-1",
            }}
          ></div> */}

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
      <section className="position-relative">
        <div className="container pt-5">
          <h3 className="text-center fw-bold fs-1">{t("services.title")}</h3>

          <button
            className="position-absolute top-50 start-0 translate-middle-y btn btn-dark"
            onClick={() => scroll("left")}
            style={{
              zIndex: 10,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            {"<"}
          </button>

          <button
            className="position-absolute top-50 end-0 translate-middle-y btn btn-dark"
            onClick={() => scroll("right")}
            style={{
              zIndex: 10,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            {">"}
          </button>

          <div
            ref={scrollRef}
            className="d-flex gap-4 py-5 overflow-hidden"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              overflowX: "auto",
              display: "flex",
              flexWrap: "nowrap",
              padding: "10px",
            }}
          >
            {service.map((item) => {
              const languageKey =
                i18n.language === "uz_cyrl" ? "kr" : i18n.language;
              const localizedName = getLocalizedText(item, "name", languageKey);
              const localizedDescription = getLocalizedText(
                item,
                "description",
                languageKey
              );
              const localizedIncluded = getLocalizedText(
                item,
                "included",
                languageKey
              );

              const discountedPrice = item.discount
                ? (item.price * (100 - item.discount)) / 100
                : item.price;

              return (
                <div
                  key={item._id}
                  className="col-lg-4 col-md-6 col-12 flex-shrink-0"
                  style={{
                    width: "33%",
                    minWidth: "280px",
                    scrollSnapAlign: "start",
                  }}
                >
                  <Card className="shadow-lg border-0 position-relative">
                    {item.discount > 0 && (
                      <div
                        className="position-absolute fw-bold rounded px-2 py-1 text-white"
                        style={{
                          top: "10px",
                          right: "10px",
                          background: "red",
                          zIndex: 10,
                        }}
                      >
                        -{item.discount}%
                      </div>
                    )}
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={localizedName}
                      style={{ height: "full", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        {localizedName}
                      </Card.Title>
                      <Card.Text>{localizedDescription}</Card.Text>
                      <Card.Text>
                        {localizedIncluded.split(",").map((line, idx) => (
                          <span key={idx} className="d-block">
                            ✅ {line.trim()}
                          </span>
                        ))}
                      </Card.Text>
                      <Card.Text className="fw-bold">
                        💰 {t("services.price")}:{" "}
                        {item.discount > 0 ? (
                          <>
                            <span className="text-muted text-decoration-line-through fs-5">
                              {item.price}$
                            </span>{" "}
                            <span className="text-danger fs-4 fw-bold">
                              {discountedPrice}$
                            </span>
                          </>
                        ) : (
                          <span className="fs-4 fw-bold">{item.price}$</span>
                        )}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          hdleclick(item._id);
                        }}
                      >
                        {t("services.makeOrder")}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="row">
        <h2 className="text-center mb-4 py-5 ">{t("news.title")}</h2>
        <Row className="g-4 d-flex flex-row justify-content-space-between">
          {news.map((item) => (
            <Col md={8} lg={4} key={item._id} data-aos="fade-up" clas>
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
