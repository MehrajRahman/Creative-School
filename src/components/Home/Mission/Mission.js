import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image1 from "../../../images/mission1.png";
import './Mission.css'
import image2 from "../../../images/mission2.png";

function Mission(props) {
  return (
    <div className="mission">
        <h4>Our mission is ensure quality education with the combination of technological & moral education to every last children even living in the remote village. </h4>
      <Container>

        <Row >
          <Col className=" cards d-flex mt-5 align-items-center justify-content-center">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" height="250px" src={image1} />
              <Card.Body>
                <Card.Title>Model School</Card.Title>
                <Card.Text className=" cards-text">
                At present we have a model school situated in Kallyanpur village of Jhenaidah district. Presently, 50 village children are getting direct quality education in four class (Play, KG, One & Two) under the observation of six regular teachers with one additional religious teacher.  
                </Card.Text>
                <p>Read More</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" cards d-flex mt-5 align-items-center justify-content-center">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top"  height="250px"  src={image2} />
              <Card.Body>
                <Card.Title>Board Exam Prep</Card.Title>
                <Card.Text className=" cards-text">
                We have some courses for the PSC, JSC, SSC and HSC Candidates as they don’t get better opportunity to learn from the village. lorem  JSC, SSC and HSC Candidates as they don’t get better opportunity to learn from the village. lorem
                </Card.Text>
                <p>Read More</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mission;
