/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import '../assets/css/my.css';

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import Header from "components/Header";
import Navigation from "components/Navigation";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import ExecSection from "components/team/ExecSection";
import YearSlider from "components/YearSlider";
import { START, END, MEMBERS } from "../data/TeamData";

// yess let's get those animations
import "animate.css"
import Subcom from "components/team/Subcom";

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: END,
      dimensions: {}
    };

    this.onImgLoad = this.onImgLoad.bind(this);

    this.mainRef = React.createRef();
    this.imgRef = React.createRef();
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  }

  handleResize = e => {
    const img = this.imgRef.current;
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;

    window.addEventListener("resize", this.handleResize);

  }

  getFontSize = () => {
    var FONT_SIZE = '.9vw';
    const { width, height } = this.state.dimensions;

    if (width > 400) {
      FONT_SIZE = 20;
    } else if (width === 210) {
      FONT_SIZE = 8;
    } else if (width === 290) {
      FONT_SIZE = 12;
    } else {
      FONT_SIZE = 13;
    }

    return FONT_SIZE;
  }

  render() {
    const currentYear = this.state.year - START;
    const members = MEMBERS[currentYear];

    return (
      <>
        <Navigation />
        <main ref={this.mainRef}>
          <Header />
          <section className="section section-lg">
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="8">
                <h1 className="animate__animated animate__zoomIn animate__fast"><h2 className="display-1">MEET THE TEAM</h2></h1>
              </Col>
            </Row>

            <YearSlider
              start={START}
              end={END}
              onChange={year => this.setState({
                year: year
              })} />
            <br></br>

            <div className="container">
              {members["exec"].map((section, index) => (
                <ExecSection
                  key={`exec-section${index}`}
                  section={section}
                  fontSize={this.getFontSize()}
                  imgRef={this.imgRef}
                  onImgLoad={this.onImgLoad} />
              ))}

              <section className="about-section text-center bg-white pb-sm-5">
                <div className="container subcom">
                  <hr></hr>
                  <Row className="justify-content-center text-center mb-lg">
                    <h2>The Committee</h2>
                  </Row>
                  {members["subcoms"] ? members["subcoms"].map(portfolio => (
                    <Subcom
                      data={portfolio} />
                  )) : (
                    <h4 className="display-1">Coming soon!</h4>
                  )}
                </div>
              </section>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Team;
