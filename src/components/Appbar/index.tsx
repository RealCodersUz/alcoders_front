import { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger va X iconlar
import "./index.css";

const Appbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // Navbar holatini boshqarish

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem("i18nextLng", lng);
    });
  };

  const languageOptions: { [key: string]: { flag: string; label: string } } = {
    en: { flag: "gb", label: "English" },
    uz: { flag: "uz", label: "O‘zbek" },
    ru: { flag: "ru", label: "Русский" },
    uz_cyrl: { flag: "uz", label: "Ўзбек (Кирил)" },
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white shadow-md py-3 fixed-top sm-p-0"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          AlcodersUz
        </Navbar.Brand>

        {/* Custom Toggle button with X */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FiX size={28} /> : <FiMenu size={28} />}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="navbar-nav"
          onSelect={() => setExpanded(false)} // Link bosilganda menyu yopiladi
        >
          <Nav className="ms-auto gap-4 d-flex align-items-center justify-content-between">
            <Nav.Item className="d-lg-flex align-items-lg-center gap-lg-4 d-md-flex d-inline-block">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                {t("navbar.contact")}
              </Nav.Link>
              <Nav.Link as={Link} to="/news" onClick={() => setExpanded(false)}>
                {t("navbar.news")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-dark"
                  className="d-flex align-items-center gap-1"
                >
                  <img
                    src={`/${languageOptions[i18n.language]?.flag}.png`}
                    alt={i18n.language}
                    style={{ width: 20, height: 15 }}
                  />
                  {languageOptions[i18n.language]?.label}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {Object.entries(languageOptions).map(
                    ([lng, { flag, label }]) => (
                      <Dropdown.Item
                        key={lng}
                        onClick={() => {
                          changeLanguage(lng);
                          setExpanded(false); // Tilni tanlaganda ham menyu yopiladi
                        }}
                      >
                        <img
                          src={`/${flag}.png`}
                          alt={lng}
                          style={{ width: 20, height: 15, marginRight: 5 }}
                        />
                        {label}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
