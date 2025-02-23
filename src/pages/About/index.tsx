import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css"; // Optional for extra styling
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero Section with Video Background */}
      <div className="hero-section">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/aboutbg.mp4" type="video/mp4" />
          {t("videoNotSupported")}
        </video>
        <div className="overlay"></div>
        <Container className="text-center text-white hero-content">
          <h3 className="fw-5" data-aos="fade-down">
            {t("about.title")}
          </h3>
          <p className="p-5" data-aos="fade-up">
            {t("about.description")}
          </p>
        </Container>
      </div>

      {/* Company Info Section */}
      <Container className="mt-5 p-5">
        <Row className="align-items-center g-5">
          <Col md={6} data-aos="fade-right">
            <h2>{t("about.WhoWeTitle")}</h2>
            <p>{t("about.WhoWeDescription")}</p>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-left">
            <img src="/about.svg" alt="About Us" className="img-fluid " />
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">{t("about.MissionTitleH2")}</h2>
        <Row>
          {[...Array(6).keys()].map((index) => (
            <Col md={4} key={index} className="g-5" data-aos="flip-down">
              <Card
                className="text-center p-3 shadow"
                style={{ maxWidth: "400px" }}
                onClick={() => navigate(`/contact/${index + 1}`)}
              >
                <Card.Body>
                  <Card.Title>
                    {t(`about.MissionTextTitle${index + 1}`)}
                  </Card.Title>
                  <Card.Text>
                    {t(`about.MissionTextDescription${index + 1}`)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
