import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../../../images/stories1.png";
import image2 from "../../../images/stories2.png";
import image3 from "../../../images/stories3.png";

function Stories(props) {
  return (
    <div>
      <Container>
        <h1 className="m-5 text-center">Our Stories</h1>
        <Row className="mb-5">
          <Col className="d-flex pe-5 align-items-center justify-content-end">
            <img
              src={image1}
              width=""
              height="300px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col className="d-flex ps-5 align-items-center justify-content-start">
            <Card style={{ width: "24rem", border: "none", background: "fff" }}>
              <Card.Body>
                <h3 className="p-3">
                  "I want to be a doctor. But, My parents couldn't afford my
                  education. Then I got enrolled to citizen school for free.
                  Now, again I can dream again."
                </h3>

                <p className="text-start">Babul Mia</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h3 className="m-5 text-center">
          LET’S Take action <br /> now to save their future.
        </h3>
        <Row className="mt-5 mb-5">
          <Col className="d-flex pe-2 align-items-center justify-content-end">
            <Card
              style={{ width: "24rem", border: "none", background: "#F1f1f1" }}
            >
              <Card.Body>
                <h3 className="text-end">Support them to grow up</h3>
                <p className="text-end">
                 <small> Support village side children for equal education. Dec 12 at
                  12 AM – Dec 13 at 12 PM</small>
                </p>

                <p className="text-end">Read More</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex ps-5 align-items-center justify-content-start">
            <img
              src={image2}
              width=""
              height="250px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
        </Row>


        <Row className="mt-5 mb-5">
        <Col className="d-flex pe-5 align-items-center justify-content-end">
            <img
              src={image3}
              width=""
              height="250px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          
          <Col className="d-flex p-5 ps-2 align-items-center justify-content-start">
            <Card
              style={{ width: "24rem", border: "none", background: "#F1f1f1" }}
            >
              <Card.Body>
              <Button
                variant="primary"
                className="input-button"
                size="lg"
              >Latest News</Button>{" "}
                <h3 className="text-start pt-4">Successful completion of project floodfall</h3>
                <p className="text-start">
                 <small> Support village side children for equal education. Dec 12 at
                  12 AM – Dec 13 at 12 PM</small>
                </p>

                <p className="text-start">Read More</p>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default Stories;
