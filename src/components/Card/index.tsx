import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
interface CardProps {
  id: string;
  url: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ id, url, title, subtitle }) => {
  return (
    <div data-aos="flip-right">
      <div
        className="bg-secondary card flex flex-row  items-end justify-center shadow-lg rounded-lg transition-all duration-500 hover:shadow-2xl bordered mb-4"
        style={{ height: "400px", width: "600px" }}
      >
        <img
          src={url}
          alt="cd_img"
          width="300px"
          height="400px"
          style={{ objectFit: "cover" }}
        />
        <div className="p-4">
          <h4 className="text-center text-white absolute bottom-5 transition-all duration-500">
            {title}
          </h4>
          <p className="text-center text-white fs-5 p-1 w-100 h-100 bottom-[-100%] w-full bg-secondary transition-all duration-500 align-center align-items-center flex-col items-center">
            {subtitle}
          </p>
        </div>
      </div>
      <Button variant="outline-secondary">
        <Link
          to={`/contact/${id}`}
          className="text-black fw-bold fs-4 text-decoration-none d-flex justify-content-center flex-row w-100"
        >
          Make order
        </Link>
      </Button>
    </div>
  );
};

export default Card;
