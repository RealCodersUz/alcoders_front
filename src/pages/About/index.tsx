import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css"; // Optional for extra styling
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  // eslint-disable-next-line prefer-const
  let navigate = useNavigate();
  return (
    <div className="about-page">
      {/* Hero Section with Video Background */}
      <div className="hero-section">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/aboutbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <Container className="text-center text-white hero-content">
          <h3 className="fw-5" data-aos="fade-down">
            We Empower You to Succeed in the Digital World
          </h3>
          <p className="p-5" data-aos="fade-up">
            "Alcoders" is an IT company that provides its clients with a variety
            of IT services. We talk to each client individually, explaining what
            they want and need to do, and what we can offer. And we create
            projects based on the needs and wishes of our clients.
          </p>
        </Container>
      </div>

      {/* Company Info Section */}
      <Container className="mt-5 p-5">
        <Row className="align-items-center g-5">
          <Col md={6} data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              We specialize in developing high-quality websites, APIs, and
              automation tools to optimize businesses. Our mission is to
              digitize businesses efficiently while ensuring maximum growth and
              impact.
            </p>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-left">
            <img src="/about.svg" alt="About Us" className="img-fluid " />
          </Col>
        </Row>
      </Container>

      {/* Services or Team Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Our Expertise</h2>
        <Row>
          {[
            {
              id: "1",
              title: "Web Development",
              desc: "We create modern, responsive, and high-performance websites.",
            },
            {
              id: "2",
              title: "API & Automation",
              desc: "Building efficient APIs and automating workflows for businesses.",
            },
            {
              id: "3",
              title: "SEO & Optimization",
              desc: "Optimizing websites for better performance and search rankings.",
            },
            {
              id: "4",
              title: "Upgrading Old Websites",
              desc: "Revamping outdated websites with modern designs and improved functionality.",
            },
            {
              id: "5",
              title: "Telegram bots & Web Apps",
              desc: "Modern telegr bots creation and adding web app functionalities",
            },
          ].map((service, index) => (
            <Col md={4} key={index} className="g-5" data-aos="flip-down">
              <Card
                className="text-center p-3 shadow"
                style={{ maxWidth: "400px" }}
                onClick={() => navigate(`/contact/${service.id}`)}
              >
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
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
