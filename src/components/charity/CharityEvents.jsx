import React from "react";
import { Card, Container, Row } from "reactstrap";
import { Slide } from "@mui/material";

import YearSlider from "../YearSlider";
import CharityCard from "./events/CharityCard";

class CharityEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: props.end,
      slideIn: true,
      direction: "left"
    };
  }

  updateYear = (year) => {
    if (year === this.state.year) return;
    
    const dir_check = year > this.state.year;
    const slide_out = dir_check ? "right" : "left";
    const slide_in = dir_check ? "left" : "right";

    this.setState({
      slideIn: false,
      direction: slide_out
    });

    setTimeout(() => {
      this.setState({
        year: year,
        slideIn: true,
        direction: slide_in
      });
    }, 500);
  }

  renderYear = () => {
    const year_index = this.state.year - this.props.start;
    const events = this.props.events[year_index];

    return (
      <Container className={this.state.direction}>
        <Card className="bg-gradient-neutral shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <div class="row">
                {events.map((event, index) => (
                  <CharityCard
                    key={index}
                    event={event}
                    onClick={() => this.props.onClick(event)} />
                ))}
              </div>
            </Row>
          </div>
        </Card>
      </Container>
    );
  }

  render() {
    return (
      <>
        <YearSlider
          start={this.props.start}
          end={this.props.end}
          onChange={year => this.updateYear(year)} />
        <Slide
          in={this.state.slideIn}
          direction={this.state.direction}
          timeout={{ enter: 500, exit: 500 }}>
          <div>
            {this.renderYear()}
          </div>
        </Slide>
      </>
    );
  }
}

export default CharityEvents;
