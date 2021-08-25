
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
  Modal,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";

import { Link } from "react-router-dom";


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


// Fas Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faDesktop, faDove, faEdit, faHandsHelping, faMicrophoneAlt, faQuestion, faUserFriends } from "@fortawesome/free-solid-svg-icons";

class Publications extends React.Component {

  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
  }
  
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

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
          <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
              <Col lg="10">
                <p className="lead text-muted">
                A central part of the Co-op society is the Publications portfolio who helps provide additional professional support for our Co-op scholars. Our work includes the First Year Guide, writing blogs and now an upcoming podcast with alumni who have stories to share. Together, our goal is to create a platform in which scholars past and present can share their experiences, learn something new, and stay connected.
                </p>
              </Col>
              
          </Row>
          </Container>
          <br></br>
          <br></br>
          <Container>
              <Row className="justify-content-center ">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        
                      <a href="https://www.coopsoc.com.au/FYG2021.pdf" target="_blank">
                        <CardBody className="py-5 align-items-center">
                        <div>
                          <div className="icon icon-shape icon-shape-index rounded-circle mb-4 ">
                            <FontAwesomeIcon icon={faHandsHelping} size="4x" />
                          </div>
                          <h6 style={{textAlign: "center"}} className="text-index display-4 text-uppercase ">
                          First year Guide
                          </h6>
                          </div>
                        </CardBody>
                        </a>
                       
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                      <Link to={{ pathname: "/blog"}}>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index rounded-circle mb-4">
                          <i class="fa fa-pencil"></i>
                          </div>
                          <h6 style={{textAlign: "center"}} className="text-index display-4 text-uppercase">
                            Blog Posts
                          </h6>
                        </CardBody>
                        </Link>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                      <a href="https://open.spotify.com/show/25fOObrHq0t3hPrmf8B8Dx?si=IYM-tZg-Q0CfufTKVqTqJg&dl_branch=1" target="_blank">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index rounded-circle mb-4">
                          <FontAwesomeIcon icon={faMicrophoneAlt} size="4x" />
                          </div>
                          <h6 style={{textAlign: "center"}} className="text-index display-4 text-uppercase animate__animated animate__pulse animate__fast  animate__repeat-2">
                          Podcast
                          </h6>
                          </CardBody>
                        </a>
                        
                        {/* <iframe src="https://open.spotify.com/embed/show/25fOObrHq0t3hPrmf8B8Dx?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

                        
                        
                      {/* <Link to={{ pathname: "/podcast"}}>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <FontAwesomeIcon icon={faMicrophoneAlt} size="4x" />
                          </div>
                          <h6 style={{textAlign: "center"}} className="text-warning display-4 text-uppercase">
                          Podcast
                          </h6>
                        </CardBody>
                      </Link> */}

                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              
            </Container>
            
      
          </section>
      </main>
      <SimpleFooter />
    </>
  );
  }

}


export default Publications;
