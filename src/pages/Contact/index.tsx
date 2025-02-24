import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");

  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          {/* Forma */}
          <Col xs={12} lg={6}>
            <div className="contact-card p-4 text-center">
              <h2 className="mb-3">{t("contact.title")}</h2>
              <p>{t("contact.description")}</p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder={t("contact.name")}
                    required
                  />
                </Form.Group>

                {/* Davlat kodi bilan telefon raqami kiritish */}
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
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                  {t("contact.submit")}
                </Button>
              </Form>
            </div>
          </Col>

          {/* Katta ekranda ko‘rinadigan rasm */}
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
