import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// yess let's get those animations
import "animate.css";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import CharityEvents from "components/charity/CharityEvents";
import CharityList from "components/charity/CharityList";
import CharityModal from "components/charity/CharityModal";

import CharityData from "./data/CharityData.jsx";

class Charity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // State for the modal
      showModal: false,
      current: {},
    };

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;
  }

  displayInfo = (event) => {
    this.setState({
      showModal: true,
      current: event,
    });
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
          </section>

          <section className="section section-lg">
            <Row className="justify-content-center text-center mb-lg">
              <h2>Charities supported</h2>
            </Row>
            
            <CharityList
              sponsors={CharityData.sponsors} />
          </section>

          <section className="section section-lg">
            <Row className="justify-content-center text-center mb-lg">
              <h2>Our events!</h2>
            </Row>
            <CharityEvents
              start={CharityData.start}
              end={CharityData.end}
              events={CharityData.events}
              onClick={this.displayInfo} />
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
