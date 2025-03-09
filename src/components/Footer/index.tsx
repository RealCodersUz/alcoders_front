import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTelegram, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Brend nomi va copyright */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">AlcodersUz</h5>
            <p className="mb-0">
              © {new Date().getFullYear()} {t("footer.rights")}
            </p>
          </Col>

          {/* Ijtimoiy tarmoqlar */}
          <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
            <Link to="https://instagram.com/alcodersuz" target="_blank">
              <FaInstagram className="mx-2 text-white" size={20} />
            </Link>
            <Link to="https://t.me/alCODERSUZ" target="_blank">
              <FaTelegram className="mx-2 text-white" size={20} />
            </Link>
            <FaLinkedinIn className="mx-2 text-white" size={20} />
          </Col>

          {/* Havolalar */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <Link
              to="/privacy-policy"
              className="text-light text-decoration-none mx-2"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to="/terms-of-service"
              className="text-light text-decoration-none mx-2"
            >
              {t("footer.terms")}
            </Link>
            <a
              href="tel:+998200116877"
              className="text-light text-decoration-none mx-2"
            >
              {t("footer.contact")}: +998200116877
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
