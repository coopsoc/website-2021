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
import { Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import NominationsData from "./data/NominationsData";

// yess let's get those animations
import "animate.css"
import NomineeCard from "components/nominations/NomineeCard";

class Nominations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {}
    };

    this.imgRef = React.createRef();
    this.mainRef = React.createRef();
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
  }

  handleResize = e => {
    const img = this.imgRef.current;
    if (img != null) {
      this.setState({
        dimensions: {
          height: img.offsetHeight,
          width: img.offsetWidth
        }
      });
    }
  };

  render() {
    let FONT_SIZE = '.9vw';
    const { width, height } = this.state.dimensions;

    if (width > 400) {
      FONT_SIZE = 20;
    } else if (width == 210) {
      FONT_SIZE = 8;
    } else if (width == 290) {
      FONT_SIZE = 12;
    } else {
      FONT_SIZE = 13;
    }

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
            {/* Title */}
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="8">
                <h1 class="animate__animated animate__zoomIn animate__fast">
                  <h2 className="display-1">AGM NOMINATIONS</h2>
                </h1>
              </Col>
            </Row>
            <br />
            {/* Rendering all nominees using map functions */}
            <div class="container">
              {/* Iterate over every role */}
              {NominationsData.map(role => (
                <>
                  <Row className="justify-content-center text-center mb-lg">
                    <h2>{role.role}</h2>
                  </Row>
                  <div class="row justify-content-center">
                    {/* Iterate over every nominee going for that role */}
                    {role.nominees.map(nominee => (
                      <NomineeCard
                        data={nominee}
                        fontSize={FONT_SIZE}
                        imageRef={this.imgRef}
                        onImageLoad={this.onImgLoad} />
                    ))}
                  </div>
                </>
              ))}
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Nominations;
