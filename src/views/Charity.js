import React from "react";

// core components
import Header from "components/Header";
import Navigation from "components/Navigation";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// yess let's get those animations
import "animate.css";

// reactstrap components
import {
  Card,
  Container,
  Col,
  Row,
  Modal,
  Button
} from "reactstrap";

import CharityEvents from "components/charity/CharityEvents";
import CharityList from "components/charity/CharityList";
import CharityModal from "components/charity/CharityModal";
import CharityUpcoming from "components/charity/CharityUpcoming";


import { START, END, EVENTS } from "./data/CharityData.jsx";


class Charity extends React.Component {

  
  constructor(props) {
    super(props);

    this.state = {
      // State for the modal
      showModal: false,
      goFundMePopUp: true,
      currentEvent: {},
    };

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;

  }

  // Given a charity event, display its details in the modal.
  displayInfo = (event) => {
    this.setState({
      showModal: true,
      currentEvent: event,
    });
  }

  // Toggle the modal on or off.
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  // Toggle the movie night pop up on or off.
  toggleModal = () => {
    this.setState({
      goFundMePopUp: !this.state.goFundMePopUp
    });
  }
  

  render() {
    return (
      <>
        <Navigation />
        <main ref={this.mainRef}>
          <Header />

          <section className="section">
            
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

          {/* Temporary card for movie night */}
          {/* <Container>
            <div class="container"><hr /></div>
              <Card className="bg-gradient-neutral shadow-lg">
                <Row style={{ padding: "20px" }}>
                  <Col lg="8" className="text-center">
                    <h5>Our upcoming movie night is being run in support of One In Five! Donate to our GoFundMe campaign now!</h5>
                  </Col>
                  <Col lg="4">
                    <div class="gfm-embed" data-url="https://www.gofundme.com/f/Co-op-Soc-charity-movie-night/widget/medium/"></div>
                  </Col>
                </Row>
              </Card>
            </Container> */}

          {/* Interactive carousel for events */}
          
          <section className="section">
            <div class="container"><hr /></div>
            <Row className="justify-content-center text-center mb-lg">
              <h2>Our Events</h2>
            </Row>

            <CharityEvents
              start={START}
              end={END}
              events={EVENTS}
              onClick={this.displayInfo} />
          </section>

          {/* List of supported charities */}
          
          <section className="section">
          <div class="container"><hr /></div>
            <Row className="justify-content-center text-center mb-lg">
              <h2>Charities Supported</h2>
            </Row>

            <CharityList />
          </section>

          {/* List of upcoming events */}
          
          {/* <section className="section">
            <div class="container"><hr /></div>
            <Row className="justify-content-center text-center mb-lg">
              <h2>Upcoming Community Events</h2>
            </Row>

            <CharityUpcoming />
          </section> */}

          <CharityModal
            isOpen={this.state.showModal}
            toggle={this.toggleModal}
            event={this.state.currentEvent} />

            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.goFundMePopUp}
              toggle={this.toggleModal}
            >
              <div className="modal-body">
                <Row style={{ padding: "20px" }} className="justify-content-center text-center">
                <h5>Our upcoming movie night is being run in support of One In Five! Donate to our GoFundMe campaign now!</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <div class="gfm-embed" data-url="https://www.gofundme.com/f/Co-op-Soc-charity-movie-night/widget/large/"></div>
                </Row>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("goFundMePopUp")}
                >
                  Close
                </Button>
              </div>
            </Modal>
            
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Charity;
