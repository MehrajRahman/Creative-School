import React from "react";
import "./Footer.css";
import logo from "../../images/footer.png";
import { FormControl, InputGroup, Button, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="footer-top">
        <h2>
          Subscribe to our monthly newsletter and stay up to date with all news
          and events.
        </h2>
        <InputGroup id="input" className="mb-3  border-none">
          <FormControl
            className="input-bar"
            placeholder="Enter Your Email Address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" className="input-button" size="lg">
            Subscribe Now
          </Button>{" "}
          {/* <InputGroup.Text id="basic-addon2"></InputGroup.Text> */}
        </InputGroup>
      </div>

      <div className="row footer d-flex align-items-center justify-content-center p-5">
        
          <div className="col-md-4 d-flex align-items-center justify-content-around">
            <div>
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <h4 style={{ color: "white" }}>Citizen School Foundation</h4>
              <p>
                To ensure quality education in our poorer parts of the country.
              </p>
            </div>
          </div>

          <div className="col-md-2 address-footer">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Donate Now</a>
                </li>
                <li>
                  <a href="#">Student Result</a>
                </li>
                <li>
                  <a href="#">Get Involved</a>
                </li>
                <li>
                  <a href="#">Recent Project</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 address-footer">
            <div>
              <h3>ABOUT</h3>
              <ul>
                <li>
                  <a href="#about"> About Us</a>
                </li>
                <li>
                  <a href="">Our Mission</a>
                </li>
                <li>
                  <a href="#">Event</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 address-footer">
            <div>
              <h2>Address</h2>
              <p>
                Kallyanpur, Jhenaidah, <br />
                Sadar-7300
                <br />
                +8801985814055
                <br />
                citizenschoolbd@gmail.com
                <br />
              </p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;
