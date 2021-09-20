import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// yess let's get those animations
import "animate.css";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";

// plugin that creates slider
import Slider from "nouislider";

import CharityModal from "components/charity/CharityModal";

import CharityData from "./data/CharityData.jsx";

class Charity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // State for the slider and animations
      dirToggle: false,
      prev: CharityData.end,
      year: CharityData.end,

      // State for the modal
      showModal: false,
      current: {},
    };

    this.mainRef = React.createRef();
    this.sliderRef = React.createRef();
    this.cardsRef = React.createRef();
  }

  updateSlider = (values, handle) => {
    const value = parseInt(values[0]);

    const prev_dir = this.state.year - this.state.prev;
    const curr_dir = value - this.state.year;
    let toggle = this.state.dirToggle;

    if (Math.sign(prev_dir) === Math.sign(curr_dir)) {
      toggle = !toggle;
    }

    this.setState({
      dirToggle: toggle,
      prev: this.state.year,
      year: value
    });
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;

    Slider.create(this.sliderRef.current, {
      start: [CharityData.end],
      connect: [true, false],
      step: 1,
      range: { min: CharityData.start, max: CharityData.end }
    }).on("update", this.updateSlider);
  }

  displayInfo(data) {
    this.setState({
      showModal: true,
      current: data,
    });
  }

  renderCharity(data, index) {
    return (
      <div key={index} class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
        <img src={data["image"]} alt={data["title"]} class="card-img-top" onClick={() => this.displayInfo(data)}></img>
      </div>
    );
  }

  renderYear = () => {
    const year = this.state.year - CharityData.start;
    const direction = this.state.year - this.state.prev;
    let direction_str = "";

    if (direction < 0) {
      direction_str = "Right";
    } else if (direction > 0) {
      direction_str = "Left";
    }

    direction_str += this.state.dirToggle ? "1" : "2";

    return (
      <Container className={direction === 0 ? "" : `animate__animated animate__fadeIn${direction_str}`}>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <div class="row">
                {CharityData.data[year].map((data, index) => this.renderCharity(data, index))}
              </div>
            </Row>
          </div>
        </Card>
      </Container>
    );
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref={this.mainRef}>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-100">
              <div className="shape shape-style-1 shape-primary">
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
                <span className="floating" />
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
                <h1 class="animate__animated animate__zoomIn animate__fast"><h2 className="display-1">CHARITY</h2></h1>
              </Col>
            </Row>

            <Container className="py-lg-md d-flex">
              <Row className="justify-content-center text-center">
                <Col lg="8">
                  <p className="lead text-muted">
                    Co-op Soc merged with the Co-op Soc Charitable Society (CSCS) in
                    2018, and since then, the charity portfolio has been an integral
                    way for Co-op scholars to give back to the community. We organise
                    fun events to support a diverse range of charities and social
                    issues, providing various avenues for social impact. Beyond having
                    a positive impact on society, our core aims are to socialise, meet
                    new people and above all, contribute with a giving heart.
                  </p>
                </Col>
              </Row>
            </Container>
            <br></br>

            <Container className="py-lg-md d-flex">
              <Col></Col>
              <Col lg="5" sm="8" >
                <div className="slider" ref={this.sliderRef} />
              </Col>
              <Col></Col>
            </Container>
            <Container className="py-lg-md d-flex">
              <Col></Col>
              <p>2019</p>
              <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
              <p>2020</p>
              <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
              <p>2021</p>
              <Col></Col>

            </Container>
            <br></br>
            <br></br>
            {this.renderYear()}
          </section>

          <CharityModal
            isOpen={this.state.showModal}
            toggle={this.toggleModal}
            event={this.state.current} />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Charity;
