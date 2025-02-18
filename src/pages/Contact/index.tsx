import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          {/* Rasm faqat katta ekranda ko‘rinadi */}

          {/* Forma har doim ko‘rinadi */}
          <Col xs={12} lg={6}>
            <div className="contact-card p-4 text-center">
              <h2 className="mb-3">Get in Touch</h2>
              <p>
                Feel free to contact us for any inquiries or collaborations.
              </p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    placeholder="Phone number"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={4} className="d-none d-lg-block">
            <Image
              src="/send.svg"
              alt="Contact Us"
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
