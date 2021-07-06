
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// yess let's get those animations
import "animate.css"

// plugin that creates slider
import Slider from "nouislider";

// images
import sixKForWater from '../assets/img/charity/6k-for-water.jpg'
import bloodDrive from '../assets/img/charity/blood-drive.jpg'
import caseComp from '../assets/img/charity/case-comp.jpg'
import greatestShave from '../assets/img/charity/greatest-shave.jpg'
import hscWorkshop from '../assets/img/charity/hsc-workshops.jpg'
import pokerNight from '../assets/img/charity/poker.jpg'
import caseComp2021 from '../assets/img/charity/case-comp2021.png'
import funRun from '../assets/img/charity/funRun.jpg'

class Publications extends React.Component {

  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
  }
  

render() {
  return (
    <>
      <DemoNavbar />
      <main ref="main">
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-100">
            <div className="shape shape-style-1 shape-primary">
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
              </div>
            
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg">
          <Row className="justify-content-center text-center ">
          <Col lg="8">       
              <h1 class="animate__animated animate__fadeInDown animate__fast"><h2 className="display-1">PUBLICATIONS</h2></h1>
            </Col>               
          </Row>
          <Row className="justify-content-center text-center">
              <Col lg="8">
                <p className="lead text-muted">
                A central part of the Co-op society is the Publications portfolio who helps provide additional professional support for our Co-op scholars. Our work includes the First Year Guide, writing blogs and now an upcoming podcast with alumni who have stories to share. Together, our goal is to create a platform in which scholars past and present can share their experiences, learn something new, and stay connected.
                </p>
              </Col>
              
              
          </Row>
      
      
        </section>
      </main>
      <SimpleFooter />
    </>
  );
  }

}


export default Publications;
