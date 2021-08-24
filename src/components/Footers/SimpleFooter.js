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
              <Col lg="8">
              <div class="container">
                <a className="footerLink" href="https://www.coopsoc.com.au/Constitution.pdf">Constitution</a> | <a className="footerLink" href="https://www.coopsoc.com.au/Grievance-Resolution-Policy-Procedure.pdf">Grievance Policy </a>
              </div>
              <div class="container">
                  Copyright&copy; 2021 UNSW Co-op Society
              </div>
              <br></br>
              </Col>              
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
