import React,{Component} from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// yess let's get those animations
import "animate.css"

// Effects
import Typewriter from 'typewriter-effect';

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


// images
import ball from '../assets/img/events/ball.jpg'
import camp from '../assets/img/events/camp.jpg'
import peer_mentoring from '../assets/img/events/peer_mentoring.jpg'
import Ball2021 from '../assets/img/upcomingEvents/co-op_ball.jpg'
import ILFCaseComp from '../assets/img/upcomingEvents/ILF_case_comp.jpg'

// Import Swiper React components
//import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper bundle with all modules installed
//import Swiper from 'swiper/bundle';

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


class Events extends React.Component {

  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
  }

  componentDidMount() {
    var swiper = new Swiper('.eventcard-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.eventcard-slider__pagination',
        clickable: true,
      }
    });
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
              <h1 class="animate__animated animate__fadeInDown animate__fast"><h2 className="display-1">EVENTS</h2></h1>
            </Col>                
          </Row>
          {/*
          <Row className="justify-content-center text-center">
              <Col lg="8">
                <p className="lead text-muted">
                  Fun events YAY!
                </p>
              </Col>            
          </Row>
          */}
        </section>
        <section class="eventcard-bg-wrapper section section-lg">
          <Row className="justify-content-center text-center">
              <Col lg="8">
                <h1 class="title-1">Upcoming Events</h1>
              </Col>            
          </Row>
          <Row>
          <Col>
            <div class="eventcard-slider eventcard-bg-wrapper" >
              <div class="eventcard-slider__wrp swiper-wrapper container">
                {/*<div class="title-upcoming-events">
                  <h1 class="title-1">Upcoming Events</h1>
                </div>*/}

                {/*EVENT 1*/}
                <div class="eventcard-slider__item swiper-slide">
                  <div class="eventcard-slider__img">
                    <img src={Ball2021} alt="Ball 2021"/>
                  </div>
                  <div class="eventcard-slider__content">
                    <span class="eventcard-slider__code">27 August 2021</span>
                    <div class="eventcard-slider__title">Co-op Ball</div>
                    <div class="eventcard-slider__text">Our annual Co-op Ball is back!</div>
                    {/*<a href="#" class="eventcard-slider__button">READ MORE</a>*/}

                  </div>
                </div>
                {/*EVENT 2*/}
                <div class="eventcard-slider__item swiper-slide">
                  <div class="eventcard-slider__img">
                    <img src={ILFCaseComp} alt="ILF Case Comp 2021"/>
                  </div>
                  <div class="eventcard-slider__content">
                    <span class="eventcard-slider__code">27 August 2021</span>
                    <div class="eventcard-slider__title">The Indigenous Literacy Foundation x Co-op Soc: 2021 Charity Case Competition</div>
                    <div class="eventcard-slider__text">Our annual charity case comp ...</div>
                    {/*<a href="#" class="eventcard-slider__button">Find out more</a>*/}
                  </div>
                </div>
                {/*EVENT 3*/}
                <div class="eventcard-slider__item swiper-slide">
                  <div class="eventcard-slider__img">
                    <img src={ball} alt="Ball 2021"/>
                  </div>
                  <div class="eventcard-slider__content">
                    <span class="eventcard-slider__code">27 August 2021</span>
                    <div class="eventcard-slider__title">Co-op Ball</div>
                    <div class="eventcard-slider__text">Our annual Co-op Ball is back!</div>
                    {/*<a href="#" class="eventcard-slider__button">READ MORE</a>*/}

                  </div>
                </div>
                {/*END EVENT CARDS*/}
                
              </div>
              <div class="eventcard-slider__pagination"></div>
            </div>

          </Col> 
          </Row>
        </section>

        <section className="section section-md">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={camp}     
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>First Years Camp</h3>
                    <p>
                    Our annual event provides the opportunity for you to have fun and create lasting social connections.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              ADD HERE
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">ADD HERE</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            ADD HERE
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-10 bg-gradient-primary ">
            <Container>
              <Row className="row-grid align-items-center " >
                <Col className="order-lg-1 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ball}
                    />
                  </div>
                </Col>
                <Col className="order-lg-2" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Ball</h4>
                      <p className="text-white">
                        An unforgettable night of food, drinks and dressing up fancy.
                      </p>
                    </div>
                  </div>
                  <Row className="row-grid align-items-center " ></Row>
                  
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={peer_mentoring}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Peer Mentoring</h3>
                    <p>
                    Facilitating the development of social and professional networks.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              ADD HERE
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">ADD HERE</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            ADD HERE
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
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


export default Events;
