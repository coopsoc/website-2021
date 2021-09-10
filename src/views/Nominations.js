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

<<<<<<< HEAD
  renderYear() {
    var FONT_SIZE = '.9vw';
=======
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
>>>>>>> e4b43c4ab7ff0df87bbf187356c0fec2621ec416
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
<<<<<<< HEAD
    
    
    return this.nominations_2022(FONT_SIZE);
  }

    handleResize = e => {
        const img = this.imgRef.current;
        if (img!= null){
            this.setState({dimensions:{height:img.offsetHeight,
                width:img.offsetWidth}});
        }
        
      };
   

  seededRandom(s) {
    let hash = 0;
    if (s.length === 0) return hash;

    for (let i = 0; i < s.length; i++) {
      const chr = s.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
=======
>>>>>>> e4b43c4ab7ff0df87bbf187356c0fec2621ec416

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
<<<<<<< HEAD
            <Row className="justify-content-center text-center mb-lg">  
            <Col lg="8">       
              <h1 class="animate__animated animate__zoomIn animate__fast"><h2 className="display-1">Nominations for 2022 Exec</h2></h1>
            </Col>  
            </Row>
            {this.renderYear()}

=======
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
>>>>>>> e4b43c4ab7ff0df87bbf187356c0fec2621ec416
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
<<<<<<< HEAD

  nominations_2022(FONT_SIZE) {
    return (
      <>
        <div class="container">

          <hr />
          <Row className="justify-content-center text-center mb-lg">
            <h2>President</h2>
          </Row>

        <div className="nominations_scroll">
            <div class="row-fluid">
                {this.renderExec(2020, "Jelinna", FONT_SIZE)}
                {this.renderExec(2020, "Roary", FONT_SIZE)}
                {this.renderExec(2020, "Shrey", FONT_SIZE)}
                {this.renderExec(2020, "Xavier", FONT_SIZE)}
                {this.renderExec(2020, "Ian", FONT_SIZE)}
            </div>
        </div>
          <hr ></hr>
          <Row className="justify-content-center text-center mb-lg">
            <h2>Vice-President</h2>
          </Row>

          <div class="row">
            {this.renderExec(2020, "Stanley", FONT_SIZE)}
            {this.renderExec(2020, "Hayes", FONT_SIZE)}
            {this.renderExec(2020, "Emily", FONT_SIZE)}
          </div>
          <div class="row">
            {this.renderExec(2020, "Lelland", FONT_SIZE)}
            {this.renderExec(2020, "Susan", FONT_SIZE)}
            {this.renderExec(2020, "Vincent", FONT_SIZE)}
          </div>
          <hr ></hr>
          <Row className="justify-content-center text-center mb-lg">
            <h2>First Year Representatives</h2>
          </Row>
          <div class="row justify-content-center">
            {this.renderExec(2020, "Celine", FONT_SIZE, true)}
            {this.renderExec(2020, "Kenuka", FONT_SIZE, true)}
          </div>
        </div>
      </>
    )
  }

  renderExec(year, name, font_size, fyp, cardColour = false) {
    const data = teamData[year]["exec"][name];
    const random = Math.abs(this.seededRandom(name) % 5) + 1;
    const colour = teamData[year]["exec"][name]["cardColour"];

    return (
      <div className="col-md-4" className="col-lg-3">
        <div className="meet-the-execs">
          <img src={data["image"]} ref={this.imgRef} onLoad={this.onImgLoad} className="card-img-top"></img>
        </div>
        <div className="card-body text-center">
          <h5 className="about-name">{data["name"]}</h5>
        </div>
      </div>
    );
  }
  
=======
>>>>>>> e4b43c4ab7ff0df87bbf187356c0fec2621ec416
}

export default Nominations;
