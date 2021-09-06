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

/* import ScriptTag from 'react-script-tag';
 */
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

/* class Demo extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src="../views/data/EventsAnimation.js"/>);
    }
} */



class Events extends React.Component {

  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
  }

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "../views/EventsAnimation.js";
    script.async = true;
    document.body.appendChild(script);
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
  /* componentDidMount () {
    const script = document.createElement("script");
    script.src = "../views/data/EventsAnimation.js";
    script.async = true;
    document.body.appendChild(script);
  } */
  

  
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
            <h1 class="animate__animated animate__zoomIn animate__fast"><h2 className="display-1">EVENTS</h2></h1>
            </Col>                
          </Row>
          
          <Container className="py-lg-md d-flex">
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <p className="lead text-muted">
                  At Co-op Soc, our top aims are to socialise and meet new people. We facilitate this through a wide range of social events, including our highly anticipated annual camp and ball.
                </p>
              </Col>
            </Row>
            </Container>
            <br></br>
         
        </section>

        <div class="test-container">
          {/* Events Slider */}
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
                    <div  /* class= "outer" */>
                      <div class="eventcard-slider__content">
                        <span class="eventcard-slider__code">27th August</span>
                        <div class="eventcard-slider__title">Co-op Ball 2021</div>
                        <div class="eventcard-slider__text">Our annual Co-op Ball is back! A bedazzling night in Spring’s essence; with charming co-op company - we promise it's not a night to be missed.</div>
                        {/*<a href="#" class="eventcard-slider__button">READ MORE</a>*/}
                      </div>
                    </div>
                    
                  </div>
                  {/*EVENT 2*/}
                  <div class="eventcard-slider__item swiper-slide">
                    <div class="eventcard-slider__img">
                      <img src={ILFCaseComp} alt="ILF Case Comp 2021"/>
                    </div>
                    <div class="eventcard-slider__content">
                      <span class="eventcard-slider__code">2nd July - 23rd July</span>
                      <div class="eventcard-slider__title">Charity Case Competition 2021</div>
                      <div class="eventcard-slider__text"> This year we’ve partnered with The Indigenous Literacy Foundation, a national book industry charity committed to lifting literacy levels in remote Indigenous communities for children across Australia.</div>
                      {/*<a href="#" class="eventcard-slider__button">Find out more</a>*/}
                    </div>
                  </div>
                  {/*END EVENT CARDS*/}
                  
                </div>
                <div class="eventcard-slider__pagination"></div>
              </div>

            </Col> 
            </Row>
          </section>

          {/* image gallery */}
          <section className="section cards_container1">
            <div className="card_scroll_row" >
              <ul className="row1_content">
                  {/* ONE */}
                  <li>
                        <div className="display_card" >
                                  <img
                                    src={require("assets/img/home/camp.jpg")}
                                    class="w-100 shadow-1-strong rounded class-lift--hover"
                                    alt=""
                                  />
                                  <p class="card_text shadow-1-strong rounded card-img">1</p>
                                </div>
                  </li>
                  <li>
                        {/* TWO */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/gals.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">2</p>
                          </div>
                  </li>
                  <li>
                        {/* THREE */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/ytb.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">3</p>
                          </div>
                  </li>
                  {/* FOUR */}
                  <li>
                        <div className="display_card">
                                  <img
                                    src={require("assets/img/home/funRun2.jpg")}
                                    class="w-100 shadow-1-strong rounded class-lift--hover"
                                    alt=""
                                  />
                                  <p class="card_text shadow-1-strong rounded card-img">4</p>
                                </div>
                  </li>
                  <li>
                        {/* FIVE */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/gals2.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">5</p>
                          </div>
                  </li>
                  <li>
                        {/* SIX */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/funRun.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">6</p>
                          </div>
                  </li>
              </ul>
            </div>
          </section>


          <section className="section cards_container2">
            <div className="card_scroll_row">
              <ul className="row2_content">
                  {/* ONE */}
                  <li>
                        <div className="display_card class-lift--hover" >
                                  <img
                                    src={require("assets/img/home/camp.jpg")}
                                    class="w-100 shadow-1-strong rounded class-lift--hover"
                                    alt=""
                                  />
                                  <p class="card_text shadow-1-strong rounded">EVENT 1</p>
                                </div>
                  </li>
                  <li>
                        {/* TWO */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/gals.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">EVENT 2</p>
                          </div>
                  </li>
                  <li>
                        {/* THREE */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/ytb.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">EVENT 3</p>
                          </div>
                  </li>
                  {/* FOUR */}
                  <li>
                        <div className="display_card">
                                  <img
                                    src={require("assets/img/home/funRun2.jpg")}
                                    class="w-100 shadow-1-strong rounded class-lift--hover"
                                    alt=""
                                  />
                                  <p class="card_text shadow-1-strong rounded">EVENT 4</p>
                                </div>
                  </li>
                  <li>
                        {/* FIVE */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/gals2.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">EVENT 5</p>
                          </div>
                  </li>
                  <li>
                        {/* SIX */}
                          <div className="display_card">
                            <img
                              src={require("assets/img/home/funRun.jpg")}
                              class="w-100 shadow-1-strong rounded class-lift--hover"
                              alt=""
                            />
                            <p class="card_text shadow-1-strong rounded">EVENT 6</p>
                          </div>
                  </li>
              </ul>
            </div>
          </section>

          {/* <Container>
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

                <div class="col">
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
            </Container> */}

        </div>
        


      </main>
      <SimpleFooter />
    </>
  );
  }

  
}


export default Events;
