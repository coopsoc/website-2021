
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// nodejs library that concatenates classes
import classnames from "classnames";

// yess let's get those animations
import "animate.css"

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

class Charity extends React.Component {

  state = {}

  constructor(props) {
      super(props)
      this.state = {year : 100};
      this.renderYear = this.renderYear.bind(this);
  }
 
  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
      var slider1 = this.refs.slider1;

      Slider.create(slider1, {
      start: [100],
      connect: [true, false],
      step: 50,
      range: { min: 0, max: 100 }
      }).on(
      "update",
      function(values, handle) {
          this.renderYear(values[0]);
          this.setState({ year: values[0] });
      }.bind(this)
      );

  }

  renderYear() {
      if (this.state.year == 100) {
          return this.charity_2021();
      } else if (this.state.year == 50) {
          return this.charity_2020();
      } else {
         return this.charity_2019();
    }
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
              <h1 class="animate__animated animate__rubberBand animate__fast"><h2 className="display-1">CHARITY</h2></h1>
              </Col>              
          </Row>
          <Row className="justify-content-center text-center">
              <Col lg="8">
                <p className="lead text-muted">
                  Co-op Soc merged with the Co-op Soc Charitable Society (CSCS) in 2018, and since then, the charity 
                  portfolio has been an integral way for Co-op scholars to give back to the community. We organise fun events 
                  to raise awareness for a diverse range of charities and social issues, encouraging collective participation 
                  through events such as the World’s Greatest Shave. Beyond having a positive impact on society, our core aims are to 
                  socialise, meet new people and above all, contribute with a giving heart.
                </p>
              </Col>
              
              
          </Row>
          <Row className="justify-content-center text-center ">
              <Col className="mt-4 mt-md-0" lg="5" sm="2">
              <div className="slider" ref="slider1" />
                  <Row className="mt-3 d-none">
                      <span className="range-slider-value">
                          {this.state.simpleValue}
                      </span> 
                  </Row>            
              </Col>
              </Row>   
              <Row className="justify-content-center text-center mb-lg">
                  <p>2019</p>
                  <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
                  <p>2020</p>
                  <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
                  <p>2021</p>
              </Row>   
          {this.renderYear()}  
      
        </section>
      </main>
      <SimpleFooter />
    </>
  );
  }

  charity_2021() {
    return (
      <>
      <Container>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <div class="row">
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a target="_blank" href="https://www.facebook.com/events/343320683808154/">
                        <img src={caseComp2021} class="card-img-top"></img>
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a target="_blank" href="https://www.facebook.com/events/286927249456511/">
                        <img src={funRun} class="card-img-top"></img>
                    </a>
                </div>
            </div>
            </Row>
          </div>
        </Card>
      </Container>
      </>
    )
  }

  charity_2020() {
    return (
      <>
      <Container>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
            <div class="row">
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/1464813253706083/">
                        <img src={caseComp} class="card-img-top"></img>
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/311139309863383/">
                        <img src={greatestShave} class="card-img-top"></img>
                    </a>
                </div>
            </div>
            </Row>
          </div>
        </Card>
      </Container>
      </>
  )
  }

  charity_2019() {
    return (
      <>
      <Container>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
            <div class="row">
            <div class="row">
              <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                  <a href="https://www.facebook.com/events/1190826104438705/">
                  <img src={pokerNight} class="card-img-top"></img>
                  </a>
              </div>
              <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                  <a href="https://www.facebook.com/events/870944186595660/">
                      <img src={bloodDrive} class="card-img-top"></img>
                  </a>
              </div>
              <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                  <a href="https://www.facebook.com/events/440597310021840/">
                      <img src={sixKForWater} class="card-img-top"></img>
                  </a>
              </div>
              <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
              <a href="https://www.facebook.com/events/2137899859788914/">
                  <img src={hscWorkshop} class="img-fluid" />
              </a>
              </div>
          </div>
            </div>
            </Row>
          </div>
        </Card>
      </Container>

      </>
  )
  }
}


export default Charity;
