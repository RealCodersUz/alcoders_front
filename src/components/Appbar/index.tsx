/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Appbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem("i18nextLng", lng); // LocalStorage orqali tilni saqlash
      window.location.reload(); // Sahifani qayta yuklash
    });
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white shadow-md py-3 opacity-1"
      style={{
        width: "100vw",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Alcoders
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="gap-4">
            <Nav.Link as={Link} to="/">
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              {t("navbar.about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("navbar.contact")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Dropdown style={{borderColor:"#4d4d57"}}>
          <Dropdown.Toggle variant="outline-dark">
            🌐 {i18n.language.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeLanguage("en")}>
              🇬🇧 English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("uz")}>
              🇺🇿 O‘zbek
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("ru")}>
              🇷🇺 Русский
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("uz_cyrl")}>
              🇺🇿 Ўзбек (Кирил)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Appbar;
