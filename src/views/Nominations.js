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

// yess let's get those animations
import "animate.css"

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import NomineeCard from "components/nominations/NomineeCard";
import NomineeModal from "components/nominations/NomineeModal";

import NominationsData from "./data/NominationsData";

class Nominations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {},
      toggleModal: false,
      nominee: {
        name: "",
        image: "",
        description: "",
        cardColour: ""
      },
    };

    this.imgRef = React.createRef();
    this.mainRef = React.createRef();
  }

  handleResize = _ => {
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

  getFontSize = () => {
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

    return FONT_SIZE;
  }

  // Given a person's name, returns all roles they're nominated for
  getNominatedRoles = (name) => {
    const roles = [];

    for (const role of NominationsData) {
      const role_name = role.role;

      for (const data of role.nominees) {
        if (data.name === name) {
          roles.push(role_name);
          break;
        }
      }
    }

    return roles;
  }

  clickNominee = (nominee) => {
    this.setState({
      nominee: nominee,
      toggleModal: true
    });
  }

  setModal = () => {
    this.setState({toggleModal: !this.state.toggleModal});
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;
  }

  render() {
    const font_size = this.getFontSize();

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
                        fontSize={font_size}
                        imageRef={this.imgRef}
                        onImageLoad={this.onImgLoad}
                        onClick={() => this.clickNominee(nominee)} />
                    ))}
                  </div>
                </>
              ))}
            </div>
          </section>
          {console.log(`Modal active: ${this.state.toggleModal}`)}
          <NomineeModal
            data={this.state.nominee}
            roles={this.getNominatedRoles(this.state.nominee.name)}
            isOpen={this.state.toggleModal}
            toggle={this.setModal} />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Nominations;
