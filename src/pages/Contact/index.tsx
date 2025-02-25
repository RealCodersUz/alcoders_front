import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // URL query param'dan ID olish

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = JSON.stringify({
      name,
      phone,
      productname: id,
      message: desc,
    });

    try {
      console.log(id, "id bu");
      console.log(data);

      const response = await axios.post("https://api.alcoders.uz/send", data, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(t("contact.success"));
      console.log(response.data);
    } catch (error) {
      toast.error(t("contact.error"));
      console.error(error);
    }
  };

  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            <div className="contact-card p-4 text-center">
              <h2 className="mb-3">{t("contact.title")}</h2>
              <p>{t("contact.description")}</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder={t("contact.name")}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <PhoneInput
                    country={"uz"}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    containerStyle={{ width: "100%" }}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={t("contact.message")}
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  {t("contact.submit")}
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={4} className="d-none d-lg-block">
            <Image
              src="/send.svg"
              alt={t("contact.imageAlt")}
              fluid
              className="contact-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
