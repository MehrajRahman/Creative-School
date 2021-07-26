import React from "react";
import { Row , Col} from "react-bootstrap";
import image1 from '../../images/recent1.png';
import image2 from '../../images/recent2.png';
import image3 from '../../images/recent3.png';
import './RecentProject.css';

function RecentProject(props) {
  return (
    <div className="recent-project">
      <h1 >Recent Project</h1>
      <Row>
        <Col xs={12} md={5} className="d-flex  mb-5 justify-content-start">
        <img
              src={image1}
              width=""
              height="400px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Col>
        <Col xs={12} md={7} className="d-flex text-recent mb-5 justify-content-start">
        <div >
            <h2> Project-Shopno </h2>
            <p><small>Ariful Islam, a former Van driver  reached out to the project coordinator of Citizen School. Ariful Islam has seen one of the worse days of his lives. His  dream was shattered due to tragic accident.  He was left with 11 fractures and financial crisis. By  receiving treatment he survived this journey with the help of his family member and relatives and now</small></p>
            <p><small>is able to operate an auto van. Soon after recovering he is now dreaming again for a stable future for his family. But the financial loss his family faced, it is now impossible for them to arrange more money for buying an auto van. And that’s where citizen school extended their hand of help. By Facebook posts and also by direct approach the volunteers are trying their best to fulfil the dream of Arif vai. Till now they have managed to collect half of the fund and still trying to manage the full fund. They named this fund raising 'Project Shopno”, as they believe in dreams and they believe, with United effort dreams can become true.</small></p>
        </div>
        </Col>
      </Row>

      <Row>
        
        <Col xs={12} md={7} className="d-flex mt-5 mb-5 text-recent1 justify-content-end">
        <div >
            <h2>Project-Flood Fall </h2>
            <p><small>2020 wasn’t a easy year for Bangladesh. Along with the pandemic situation , we were also affected by flood and cyclone this year. Till now people in Faridpur, Madaripur are still  stuck due to the floor. Many have lost their homes and their belongings as well. Just surviving is a challenge for them now. Citizen school as a humanitarian organization can’t</small></p>
            <p><small>stay put in this situation. The brave volunteers of our team collected donation and even distributed them with their own hands . Massive rain , risky roads , unavailability of transport didn’t stop their good will . Rather they became more string as their hearts cried with the affected ones. We arranged a package of 359 taka and included the essential commodities in that package . We were able to help  40 families in Faridpur and achieved to relieve their stress for few days. We will not stop here , rather we strive for the bigger goal that is to build a country with ideal citizen and no discrimination.</small></p>
        </div>
        </Col>
        <Col xs={12} md={5} className="d-flex mt-5 mb-5 justify-content-end">
        <img
              src={image2}
              width=""
              height="400px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Col>
      </Row>


      <Row>
        <Col xs={12} md={5} className="d-flex mt-5 mb-5 justify-content-start">
        <img
              src={image3}
              width=""
              height="400px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Col>
        <Col xs={12} md={7} className="d-flex mt-5 mb-5 text-recent justify-content-start">
        <div >
            <h2>Project-Eid Smile </h2>
            <p><small>EID means happiness. In our country one of the most popular custom is to celebrate Eid with new dress and it is extremely popular among the children. But this year Eid was different due to the Covid situation. Many lost their job , many families had a financial breakdown. So, celebrating Eid with new dresses was quite a challenge this year. But</small></p>
            <p><small>Citizen school believes that there should be no barrier for happiness. As for our students we arranged a campaign and collected donation to offer them a new dress as a gift . We don’t focus only on the conventional education rather we focus on the mental health of children as well. That’s why there moment of happiness can 't be faded only because of some difficulties. Here we believe happiness knows no bounds and together we can achieve the impossible. </small></p>
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default RecentProject;
