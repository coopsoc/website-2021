import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// nodejs library that concatenates classes
import classnames from "classnames";

// yess let's get those animations
import "animate.css";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// plugin that creates slider
import Slider from "nouislider";

import charityData from "./data/CharityData.jsx";

class Charity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirToggle: false,
      prev: charityData.end,
      year: charityData.end,

      showModal: false,
      current: {
        "title": "",
        "image": "",
        "description": "",
        "link": "",
        "image2": ""
      },
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
      start: [charityData.end],
      connect: [true, false],
      step: 1,
      range: { min: charityData.start, max: charityData.end }
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
    const year = this.state.year - charityData.start;
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
                {charityData.data[year].map((data, index) => this.renderCharity(data, index))}
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
                <h1 class="animate__animated animate__fadeIn animate__slow"><h2 className="display-1">CHARITY</h2></h1>
              </Col>
            </Row>

            <Container className="py-lg-md d-flex">
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
              <Col className="mt-4 mt-md-0"lg="2" sm="2"></Col>
              <p>2020</p>
              <Col className="mt-4 mt-md-0"lg="2" sm="2"></Col>
              <p>2021</p>
              <Col></Col>     

             </Container>
             <br></br>
             <br></br>
            {this.renderYear()}
          </section>

          <Modal isOpen={this.state.showModal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg">
            <ModalHeader toggle={this.toggleModal}>{this.state.current["title"]}</ModalHeader>
            <ModalBody className="charityBody">
              <div style={{textAlign: 'center'}}>
              <img src={this.state.current["image"]} alt={this.state.current["title"]} style={{ width: "50%" }} />
              </div>
              <hr></hr>
              {this.state.current["description"].split("\n").map(line => <p>{line}</p>)}

              {/* Case Comp Winners  */}
              { (this.state.current["title"] === "Case Comp 2021") 
                ?
                  <div >
                    <hr></hr>
                    <Row className="text-center">
                      <Col >
                      <div className='verticalAlignTextDiv'>
                        <p > Congratulations to our winning team, Ignite Consulting, for their incredible solution. Well done Annie Yan, Nicole Huang, Jerry Yeh and Ethan Wong! </p>
                      </div>
                      </Col> 
                      <Col>       
                        <img src={this.state.current["image2"]} alt={this.state.current["title"]} style={{ width: "100%" }} />
                      </Col>                
                    </Row>
                  </div> 
                :
                  null 
              }

            </ModalBody>
            <ModalFooter>
              <a target="_blank" href={this.state.current["link"]}>
                <Button color="index" style={{minWidth: '100px'}} onClick={this.toggleModal}>Visit</Button>
              </a>
              <Button color="secondary" style={{minWidth: '100px'}} onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Charity;
