import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  UncontrolledAlert,
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

// images
import Ball2021 from '../assets/img/upcomingEvents/co-op_ball.jpg'
import ILFCaseComp from '../assets/img/upcomingEvents/ILF_case_comp.jpg'

// Import Swiper styles
import 'swiper/swiper.scss';
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import 'swiper/swiper-bundle.css';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);


class Index extends React.Component {

  state = {};

  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };



  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;   
    
    window.addEventListener("resize", this.handleResize);
  }

  renderTitle() {
    var FONT_SIZE = '.9vw';
    const { windowWidth } = this.state; 

    if (windowWidth > 8000) {
      FONT_SIZE = 50;
    } else if (windowWidth > 500) {
      FONT_SIZE = 40;
    } else {
      FONT_SIZE = 30;
    }

    return (
      <>
      <Row>
        <Col lg="8" className="typeWriter"  style={{ fontSize: FONT_SIZE }}>
          <Typewriter
            options={{
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('UNSW CO-OP SOCIETY')
                .start();
            }}
          />
          <p className="lead text-white" style={{fontWeight : 'normal'}}>
              A society for co-ops, by co-ops. {windowWidth}
          </p>
        </Col>
      </Row>
      </>
    )
  
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
                {this.renderTitle()}
                  
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
                          <div className="icon icon-shape icon-shape-index1 rounded-circle mb-4">
                          <i className="ni ni-calendar-grid-58" />
                          </div>
                          <div className="justify-content-center text-center ">
                          <h6 className="text-uppercase">
                          Social Events
                          </h6>
                          <p className="description mt-3">
                          At the core of the society, our aims are to socialise and meet new people. We facilitate this through a wide range of social events,
                           including an annual camp and ball.
                          </p>
                          <br></br>
                          </div>
                          <div className="justify-content-center text-center ">
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="index1"
                            href="#/events"
                          >
                            Learn more
                          </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index2 rounded-circle mb-4">
                          <i class="fa fa-pencil"></i>
                          </div>
                          <div className="justify-content-center text-center ">
                          <h6 className="text-uppercase">
                            Publications
                          </h6>
                          <p className="description mt-3">
                          Our goal is to create a platform in which scholars past and present can share their experiences, learn something new, and stay connected.

                          </p>
                          <br></br>
                          </div>
                          <div className="justify-content-center text-center ">
                          <Button
                            className="mt-4"
                            color="index2"
                            href="#/publications"
                          >
                            Learn more
                          </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-index3 rounded-circle mb-4">
                          <i className="fa fa-heart" />
                          </div>
                          <div className="justify-content-center text-center ">
                          <h6 className="text-uppercase">
                          Charity Events
                          </h6>
                          <p className="description mt-3">
                          The charity portfolio is an integral way for Co-op scholars to give back to the community through events
                          that raise awareness for a diverse range of charities and social issues.
                          </p>
                          <br></br>
                          </div>
                          <div className="justify-content-center text-center ">
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="index3"
                            href="#/charity"
                          >
                            Learn more
                          </Button>
                          </div>
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

          
          <section className="section section-lg pt-lg-0 mt--200">
          
          <Container>

          

          {/* <hr></hr>
          <section class="section section-lg">
          <Row>
          <Col>
          <Row className="justify-content-center text-center ">
            <Col lg="8">       
              <h2 className="display-3">UPCOMING EVENTS</h2>
              <br></br>
            </Col>                
          </Row>
            <div class="eventcard-slider eventcard-bg-wrapper" >
              <div class="eventcard-slider__wrp swiper-wrapper container">

                <div class="eventcard-slider__item swiper-slide">
                  <div class="eventcard-slider__img">
                    <img src={ILFCaseComp} alt="ILF Case Comp 2021"/>
                  </div>
                  <div class="eventcard-slider__content">
                    <span class="eventcard-slider__code">On now!</span>
                    <div class="eventcard-slider__title">The Indigenous Literacy Foundation x Co-op Soc: 2021 Charity Case Competition</div>
                    <div class="eventcard-slider__text">Our annual charity case comp.</div>
   
                  </div>
                </div>

                <div class="eventcard-slider__item swiper-slide">
                  <div class="eventcard-slider__img">
                    <img src={Ball2021} alt="Ball 2021"/>
                  </div>
                  <div class="eventcard-slider__content">
                    <span class="eventcard-slider__code">27 August 2021</span>
                    <div class="eventcard-slider__title">Co-op Ball</div>
                    <div class="eventcard-slider__text">Our annual Co-op Ball is back!</div>


                  </div>
                </div>
              </div>
              <div class="eventcard-slider__pagination"></div>
            </div>

          </Col> 
          </Row>
        </section> */}
          {/* <hr></hr> */}
          {/* <iframe src="https://open.spotify.com/embed/show/25fOObrHq0t3hPrmf8B8Dx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
          
          </Container>
          </section>


        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
