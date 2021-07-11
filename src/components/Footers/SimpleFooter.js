/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <br></br>
            <Row className="justify-content-center text-center">
              <Col className="text-lg-center btn-wrapper" lg="6">
                {/* <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="success"
                    href = "tel:61401454303"
                    id="tooltip495507258"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-phone" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip495507258">
                    Phone us
                  </UncontrolledTooltip> */}
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="info"
                    href = "mailto: coopsoc.unsw@gmail.com"
                    id="tooltip495507259"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-envelope" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip495507259">
                    Email us
                  </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/coopsoc.unsw/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="https://www.instagram.com/coopsoc_unsw/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="default"
                  href="https://www.linkedin.com/company/unsw-co-op-society/"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Connect with us
                </UncontrolledTooltip>
                
              </Col>
              </Row>
              <br></br>
              <Row className="justify-content-center text-center">
              <Col lg="8">
              <div class="container">
                <a className="footerLink" href="https://www.coopsoc.com.au/Constitution.pdf">Constitution</a> | <a className="footerLink" href="https://www.coopsoc.com.au/Grievance-Resolution-Policy-Procedure.pdf">Grievance Policy </a>
              </div>
              <div class="container">
                  Copyright &copy; UNSW Co-op Society
              </div>
              </Col>              
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
