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
  CardLink,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavLink,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";

// import css
import '../assets/css/my.css'; 

// Effects
import Typewriter from 'typewriter-effect';

// FYG
// FIX Slider

class Index extends React.Component {
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
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-primary">
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>

              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                <br></br>
                  <Row>
                  <Col lg="8" className="typeWriter">
                    <Typewriter
                      options={{
                        loop: false,
                      }}
                      onInit={(typewriter) => {
                        typewriter.typeString('UNSW CO-OP SOCIETY')
                          .start();
                      }}
                    />
                    <p className="lead text-white">
                        A society for co-ops, by co-ops.
                    </p>
                  </Col>
                  </Row>
                </div>
                
              </Container>
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-calendar-grid-58" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Social Events
                          </h6>
                          <p className="description mt-3">
                          At the core of the society, our aims are to socialise and meet new people. We facilitate this through a wide range of social events,
                           including an annual camp and ball.
                          </p>
                          <br></br>
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="primary"
                            href="#/events"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                          <i class="fa fa-pencil"></i>
                          </div>
                          <h6 className="text-danger text-uppercase">
                            Publications
                          </h6>
                          <p className="description mt-3">
                          Our goal is to create a platform in which scholars past and present can share their experiences, learn something new, and stay connected.

                          </p>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                            Guides
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                            Blog Posts
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                            Podcast
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="danger"
                            href="#/publications"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="fa fa-heart" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Charity Events
                          </h6>
                          <p className="description mt-3">
                          The charity portfolio is an integral way for Co-op scholars to give back to the community through events
                          that raise awareness for a diverse range of charities and social issues.
                          </p>
                          <br></br>
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="warning"
                            href="#/charity"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <br></br>
            <br></br>
            <br></br>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={require("assets/img/home/camp.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <img
                src={require("assets/img/home/gals.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <img
                src={require("assets/img/home/funRun.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src={require("assets/img/home/galsBall.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <img
                src={require("assets/img/home/campWhole.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <img
                src={require("assets/img/home/ball2.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src={require("assets/img/home/gals2.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <img
                src={require("assets/img/home/funRun2.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />

              <img
                src={require("assets/img/home/ytb.jpg")}
                class="w-100 shadow-1-strong rounded mb-4 card-lift--hover"
                alt=""
              />
            </div>
          </div>
          </Container>
          </section>


        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
