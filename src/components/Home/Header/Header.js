import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import image from "../../../images/header.png";
import './Header.css';

function Header(props) {
  return (
    <div style={{background:"linear-gradient(40deg,#7AB1FA, #fff) "}}>
      <Container >
        <Row calssName="p-5  ">
          <Col  className="d-flex align-items-center justify-content-center">
            <div className="header">
              <h1>
                To ensure quality <br/> education <br/> in our poorer parts <br/> of the country.
              </h1>
              <Button
                variant="primary"
                className="input-button"
                size="lg"
              >Read More</Button>{" "}
            </div>
          </Col>
          <Col>
            <div style={{ backgroundImage: "url(../../../images/headerbg.png)" }}>
            <img
              src={image}
              width=""
              height="400px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
