import React from "react";
import { Col, Container } from "reactstrap";
import Slider from "nouislider";
import wNumb from "wnumb";

class CharityEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: props.end
    };

    this.sliderRef = React.createRef();
  }

  updateSlider = (values, _) => {
    this.setState({
      year: parseInt(values[0])
    });
  }

  componentDidMount() {
    Slider.create(this.sliderRef.current, {
      start: [this.props.end],
      connect: [true, false],
      step: 1,
      range: { min: this.props.start, max: this.props.end },
      tooltips: true,
      format: wNumb({
        decimals: 0
      })
    }).on("update", this.updateSlider);
  }

  render() {
    return (
      <>
        <Container className="py-lg-md d-flex">
          <Col></Col>
          <Col lg="5" sm="8" >
            <div className="slider" ref={this.sliderRef} />
          </Col>
          <Col></Col>
        </Container>
        <Container className="py-lg-md d-flex">
          <Col></Col>
          <p>{this.props.start}</p>
          <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
          <Col className="mt-4 mt-md-0" lg="2" sm="2"></Col>
          <p>{this.props.end}</p>
          <Col></Col>
        </Container>
      </>
    );
  }
}

export default CharityEvents;
