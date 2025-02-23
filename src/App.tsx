import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Main/index";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsPage from "./pages/News";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: false, // Bir marta ishlashi uchun
      offset: 200, // 200px pastga tushganda ishga tushadi
      delay: 100,
    });
  }, []);
  return (
    <Router>
      <Appbar />
      <Container className="mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/terms-of-service" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Container>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
