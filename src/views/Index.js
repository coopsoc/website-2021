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
import { Link } from "react-router-dom";

// import css
import '../assets/css/my.css'; 


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
                  <Row>
                    <Col lg="6">
                      <h1 className="display-2 text-white">
                        UNSW CO-OP SOCIETY{" "}
                      </h1>
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
                          <div>
                            <br></br>
                          </div>'
                          <Link className="homeLink" to="/events">
                            <Button
                             variant="contained"
                              className="mt-4"
                              color="primary" 
                              onClick={e => e.preventDefault()}
                            >
                             Learn more
                            </Button>
                            </Link>
                          
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
                          <br></br>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                              Releases
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
                            onClick={e => e.preventDefault()}
                          >
                            <Link className="homeLink" to="/blogs">Learn more</Link>
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
                          <div>
                            <br></br>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            onClick={e => e.preventDefault()}
                          >
                            <Link className="homeLink" to="/charity">Learn more</Link>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={require("assets/img/home/camp.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src={require("assets/img/home/gals.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src={require("assets/img/home/funRun.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src={require("assets/img/home/galsBall.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src={require("assets/img/home/campWhole.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src={require("assets/img/home/ball2.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src={require("assets/img/home/gals2.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src={require("assets/img/home/funRun2.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src={require("assets/img/home/ytb.jpg")}
                class="w-100 shadow-1-strong rounded mb-4"
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
