import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <img
        src="/notfound.svg"
        alt="notfound"
        style={{ width: "100%", height: "60vh" }}
      />
      <Button variant="primary" className="mt-3">
        <Link to="/" className="text-white fs-4 fw-bold text-decoration-none">
          Back to home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
