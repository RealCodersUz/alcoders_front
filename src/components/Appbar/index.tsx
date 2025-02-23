import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Appbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem("i18nextLng", lng);
      window.location.reload();
    });
  };

  // Til kodi => Bayroq + Til nomi
  const languageOptions: { [key: string]: { flag: string; label: string } } = {
    en: { flag: "gb", label: "English" },
    uz: { flag: "uz", label: "O‘zbek" },
    ru: { flag: "ru", label: "Русский" },
    uz_cyrl: { flag: "uz", label: "Ўзбек (Кирил)" },
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white shadow-md py-3"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        background: "white",
        zIndex: "1050",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          AlcodersUz
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
            <Nav.Link as={Link} to="/news">
              {t("navbar.news")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Dropdown>
          <Dropdown.Toggle variant="outline-dark">
            <img
              src={`https://flagcdn.com/w40/${
                languageOptions[i18n.language]?.flag
              }.png`}
              alt={i18n.language}
              style={{ width: 20, height: 15, marginRight: 5 }}
            />
            {languageOptions[i18n.language]?.label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.entries(languageOptions).map(([lng, { flag, label }]) => (
              <Dropdown.Item key={lng} onClick={() => changeLanguage(lng)}>
                <img
                  src={`https://flagcdn.com/w40/${flag}.png`}
                  alt={lng}
                  style={{ width: 20, height: 15, marginRight: 5 }}
                />
                {label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Appbar;
