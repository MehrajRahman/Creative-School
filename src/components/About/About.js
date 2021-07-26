import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
function About(props) {
    return (
        <div>
      <h1>To ensure quality education in our poorer parts of the country.</h1>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Our Aim</Card.Title>
              
              <Card.Text>
              We want to ensure quality education to everyone irrespective of their status or place to stay. We want to bridge the gap between the education of village and cities by providing similar standard. We want to reach every child who do not get standard education in every corner of our country.
              </Card.Text>
              
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Our Journey</Card.Title>
    
    <Card.Text>
    Citizen School has started its journey from 29th December 2016 with the vision to ensure quality education with the combination of technological & moral education to the every last children even living in the remote village. CITIZEN School is the Education project under Citizen Foundation in order to connect the city & village to ensure equal opportunities for the village children and let them dream big. 
    </Card.Text>
   
  </Card.Body>
</Card>
        </Col>
        <Col><Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Our Programs</Card.Title>
  
    <Card.Text>
     
      - Bridge the gap between city & village through quality education.  <br/>
- Provide regular primary education from play to class two.  <br/>
- Mentorship program for PSC, JSC, SSC, HSC & Admission Candidate.  <br/>
- Manage financial aid for any education related issue. <br/>
- Connect students with any types of government or non-government education related training or scholarship Opportunity.
- Research & implement about children moral & psychological development 
- Consultation to all the parents for any types of problem.
- Interest free micro credit support to the parents for stable earning source. 
- Support students & their family members in any emergency crisis like treatment or natural calamities.

      
      <pre>
      Citizen School has started its journey from 29th December 2016 with the vision to ensure quality education with the combination of technological & moral education to the every last children even living in the remote village. CITIZEN School is the Education project under Citizen Foundation in order to connect the city & village to ensure equal opportunities for the village children and let them dream big. 
      </pre>
    </Card.Text>
  
  </Card.Body>
</Card></Col>
      </Row>
    </div>
    );
}

export default About;