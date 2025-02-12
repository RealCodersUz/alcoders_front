import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 pt-5 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Chap tomonda: Brend va Huquqlar */}
          <Col md={4} className="text-md-start text-center mb-3 mb-md-0">
            <h5 className="fw-bold">Alcoders</h5>
            <p className="mb-0">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>

          {/* Markazda: Ijtimoiy tarmoqlar */}
          <Col md={4} className="text-center">
            <FaFacebookF className="mx-2" size={20} />
            <FaTwitter className="mx-2" size={20} />
            <FaLinkedinIn className="mx-2" size={20} />
          </Col>

          {/* O'ng tomonda: Linklar */}
          <Col md={4} className="text-md-end text-center">
            <Link
              to="/privacy-policy"
              className="text-light text-decoration-none mx-2"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-light text-decoration-none mx-2"
            >
              Terms of Service
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
