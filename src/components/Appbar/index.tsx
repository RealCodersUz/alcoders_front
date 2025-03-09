import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";

const Appbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem("i18nextLng", lng);
      // window.location.reload();
    });
  };

  const languageOptions: { [key: string]: { flag: string; label: string } } = {
    en: { flag: "gb", label: "English" },
    uz: { flag: "uz", label: "O‘zbek" },
    ru: { flag: "ru", label: "Русский" },
    uz_cyrl: { flag: "uz", label: "Ўзбек (Кирил)" },
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-md py-3 fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          AlcodersUz
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-4 d-flex align-items-center justify-content-between">
            <Nav.Item className="d-lg-flex align-items-lg-center gap-lg-4 d-md-flex d-inline-block">
              <Nav.Link as={Link} to="/">
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                {t("navbar.contact")}
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
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
                        onClick={() => changeLanguage(lng)}
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
