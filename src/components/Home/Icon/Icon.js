import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import book from '../../../images/book.png';
import donate from '../../../images/donate.png';
import share from '../../../images/share.png';
import volunteer from '../../../images/volunteer.png';
import './Icon.css'

function Icon(props) {
  return (
    <div className="icon">
        <Container  >
      <Row className="m-5 p-5 ">
        <Col xs={6} md={3} className="text-center">
            <div>
            <img
              src={book}
              width=""
              height=""
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h3>Learn</h3>
            <p><small>Get the facts about this issue and how we’re helping.</small></p>
            </div>
        </Col>
        <Col xs={6} md={3} className="text-center">
        <div>
        <img
              src={book}
              width=""
              height=""
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </div>
        <h3>Volunteer</h3>
        <p><small>Find out about upcoming events that need your help.</small></p>
        
        </Col>
        <Col xs={6} md={3} className="text-center">
        <div>
        <img
              src={book}
              width=""
              height=""
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h3>Share</h3>
            <p><small>Let your social media networks know about this important cause.</small></p>
        </div>
        </Col>
        <Col xs={6} md={3} className="text-center">
        <div>
        <img
              src={book}
              width=""
              height=""
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h3>Donate</h3>
            <p><small>Help us raise money to make a big difference with this issue.</small></p>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Icon;
