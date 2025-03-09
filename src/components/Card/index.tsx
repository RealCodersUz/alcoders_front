import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";

interface CardProps {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  included: string;
  price: number;
  discount: number;
}

const Cards: React.FC<CardProps> = ({
  id,
  url,
  title,
  subtitle,
  included,
  price,
  discount,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-secondary card shadow-lg rounded-lg transition-all duration-500 hover:shadow-2xl bordered mb-4 w-100">
        <img src={url} alt="cd_img" style={{ objectFit: "cover" }} />
        <div className="p-4 text-white text-center">
          <h4>{title}</h4>
          <p className="fs-6">{subtitle}</p>
          <p className="fs-6 fw-bold">
            {t("services.includes")}: {included}
          </p>

          {discount > 0 ? (
            <p className="fs-5">
              <span className="text-danger fw-bold">-{discount}%</span>{" "}
              <del>${price}</del> ${price - (price * discount) / 100}
            </p>
          ) : (
            <p className="fs-5">${price}</p>
          )}
        </div>
      </div>
      <Button variant="outline-secondary mb-5 w-100">
        <Link
          to={`/contact?id=${id}`}
          className="text-black fw-bold fs-4 text-decoration-none d-flex justify-content-center flex-row w-100"
        >
          {t("services.makeOrder")}
        </Link>
      </Button>
    </div>
  );
};

export default Cards;
