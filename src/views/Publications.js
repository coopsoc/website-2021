import React from "react";

// core components
import Header from "components/Header";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import { Link } from "react-router-dom";

// yess let's get those animations
import "animate.css";

// Fas Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

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
        <Navigation />
        <main ref="main">
          <Header />
          <section className="section section-lg">

            <Row className="justify-content-center text-center ">
              <Col lg="8">
                <h1 class="animate__animated animate__zoomIn animate__fast"><h2 className="display-1">PUBLICATIONS</h2></h1>
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
                              <div className="icon icon-shape icon-shape-index1 rounded-circle mb-4 ">
                                <FontAwesomeIcon icon={faHandsHelping} size="4x" />
                              </div>
                              <h6 style={{ textAlign: "center" }} className="display-4 text-uppercase ">
                                First year Guide
                              </h6>
                            </div>
                          </CardBody>
                        </a>

                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Link to={{ pathname: "/blog" }}>
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-index2 rounded-circle mb-4">
                              <i class="fa fa-pencil"></i>
                            </div>
                            <h6 style={{ textAlign: "center" }} className="display-4 text-uppercase">
                              Blog Posts
                            </h6>
                          </CardBody>
                        </Link>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <Link to={{ pathname: "/podcast" }}>
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-index3 rounded-circle mb-4">
                              <FontAwesomeIcon icon={faMicrophoneAlt} size="4x" />
                            </div>
                            <h6 style={{ textAlign: "center" }} className=" display-4 text-uppercase animate__animated animate__pulse animate__fast ">
                              Podcast
                            </h6>
                          </CardBody>
                        </Link>

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
        <Footer />
      </>
    );
  }
}

export default Publications;
