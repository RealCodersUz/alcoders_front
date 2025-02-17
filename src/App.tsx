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

function App() {
  return (
    <Router>
      <Appbar />
      <Container className="mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Container>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
