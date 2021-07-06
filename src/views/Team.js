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
// nodejs library that concatenates classes
import classnames from "classnames";
import '../assets/css/my.css';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// Fas Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faDesktop, faDove, faEdit, faUserFriends } from "@fortawesome/free-solid-svg-icons";

// plugin that creates slider
import Slider from "nouislider";

import teamData from "./data/TeamData.jsx";

class Team extends React.Component {

  state = {};

  constructor(props) {
    super(props)
    this.state = {
      year: 100,
      dimensions: {}
    };
    this.renderYear = this.renderYear.bind(this);
    this.onImgLoad = this.onImgLoad.bind(this);
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
    this.refs.main.scrollTop = 0;
    var slider1 = this.refs.slider1;

    Slider.create(slider1, {
      start: [100],
      connect: [true, false],
      step: 100,
      range: { min: 0, max: 100 }
    }).on(
      "update",
      function (values, handle) {
        this.renderYear(values[0]);
        this.setState({ year: values[0] });
      }.bind(this)
    );

    window.addEventListener("resize", this.handleResize);

  }

  renderYear() {
    var FONT_SIZE = '.9vw';
    const { width, height } = this.state.dimensions;

    if (width > 400) {
      FONT_SIZE = 20;
    } else if (width == 210) {
      FONT_SIZE = 8;
    } else if (width == 290) {
      FONT_SIZE = 12;
    } else if (width == 317) {
      FONT_SIZE = 13;
    }

    if (this.state.year == 100) {
      return this.team_2021(FONT_SIZE);
    } else {
      return this.team_2020(FONT_SIZE);
    }
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

    return hash;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
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
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="8">
                <h2 className="display-3">MEET THE TEAM</h2>
              </Col>

            </Row>
            <Row className="justify-content-center text-center ">
              <Col className="mt-4 mt-md-0" lg="5" sm="2">
                <div className="slider" ref="slider1" />
                <Row className="mt-3 d-none">
                  <span className="range-slider-value">
                    {this.state.simpleValue}
                  </span>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center text-center mb-lg">
              <p>2020</p>
              <Col className="mt-4 mt-md-0" lg="4" sm="2"></Col>
              <p>2021</p>
            </Row>
            {this.renderYear()}

          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }

  renderExec(year, name, font_size, fyp = false) {
    const data = teamData[year]["exec"][name];
    const random = Math.abs(this.seededRandom(name) % 5) + 1;

    return (
      <div className="col-md-4">
        <div className="meet-the-execs">
          <a className={`card${random} limit`} >
            <img src={data["image"]} ref={this.imgRef} onLoad={this.onImgLoad} className="card-img-top"></img>
            <p style={{ fontSize: font_size }}>{data["description"]}</p>
            <div className={`go-corner${random}`}>
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
        <div className="card-body text-center">
          <h4 className="about-name">{data["name"]}</h4>
          {!fyp ? <p className="about-role">{data["role"]}</p> : null}
        </div>
      </div>
    );
  }

  renderSubcom(year, name) {
    const data = teamData[year]["subcoms"][name];
    const n_icons = data["icon"].length;

    return (
      <div class="row">
        <div class="col-sm-8">
          {data["icon"].map((icon, index) => {
            if (index == n_icons - 1) {
              return <FontAwesomeIcon icon={icon} size="4x" />;
            } else {
              return <FontAwesomeIcon icon={icon} size="4x" style={{ margin: "10px" }} />;
            }
          })}
          <FontAwesomeIcon icon={data["icon"]} size="4x" />
          <div class="card-body text-center">
            <h4 class="about-name">{data["name"]}</h4>
            <p class="card-text subcom-desc">{data["description"]}</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-body text-center">
            <ul class="list-group">
              <li class="list-group-item border-0 li-name"><b>Members:</b></li>
              {data["members"].map(name => <li class="list-group-item border-0 li-name">{name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  team_2021(FONT_SIZE) {
    return (
      <>
        <div class="container">
          <Row className="justify-content-center text-center mb-lg">
            <h2>Executives </h2>
          </Row>
          <div class="row justify-content-center">
            {this.renderExec(2021, "Kenuka", FONT_SIZE)}
            {this.renderExec(2021, "Celine", FONT_SIZE)}
          </div>
          <div class="row">
            {this.renderExec(2021, "Kai", FONT_SIZE)}
            {this.renderExec(2021, "Connor", FONT_SIZE)}
            {this.renderExec(2021, "Micah", FONT_SIZE)}
          </div>
          <br></br>
          <hr></hr>
          <Row className="justify-content-center text-center mb-lg">
            <h2>Directors</h2>
          </Row>
          <div class="row">
            {this.renderExec(2021, "Jasmin", FONT_SIZE)}
            {this.renderExec(2021, "Hirun", FONT_SIZE)}
            {this.renderExec(2021, "Keshmira", FONT_SIZE)}
          </div>
          <div class="row">
            {this.renderExec(2021, "Claire", FONT_SIZE)}
            {this.renderExec(2021, "Jack", FONT_SIZE)}
            {this.renderExec(2021, "Noa", FONT_SIZE)}
          </div>
          <hr></hr>
          <Row className="justify-content-center text-center mb-lg">
            <h2>First Year Representatives</h2>
          </Row>
          <div class="row justify-content-center">
            {this.renderExec(2021, "Miah", FONT_SIZE, true)}
            {this.renderExec(2021, "Ronaldo", FONT_SIZE, true)}
          </div>

          <section class="about-section text-center bg-white pb-sm-5">
            <div class="container subcom">
              <hr></hr>
              <Row className="justify-content-center text-center mb-lg">
                <h2>The Committee</h2>
              </Row>
              <br></br>
              {this.renderSubcom(2021, "Charity")}
              <br></br>
              {this.renderSubcom(2021, "Marketing")}
              <br></br>
              {this.renderSubcom(2021, "Pubs/IT")}
              <br></br>
              {this.renderSubcom(2021, "Social")}
            </div>
          </section>


        </div>
      </>
    )
  }

  team_2020(FONT_SIZE) {
    return (
      <>
        <div class="container">
          <Row className="justify-content-center text-center mb-lg">
            <h2>Executives </h2>
          </Row>

          <div class="row justify-content-center">
            {this.renderExec(2020, "Jelinna", FONT_SIZE)}
            {this.renderExec(2020, "Roary", FONT_SIZE)}
          </div>
          <div class="row">
            {this.renderExec(2020, "Shrey", FONT_SIZE)}
            {this.renderExec(2020, "Xavier", FONT_SIZE)}
            {this.renderExec(2020, "Ian", FONT_SIZE)}
          </div>
          <br></br>
          <hr ></hr>
          <Row className="justify-content-center text-center mb-lg">
            <h2>Directors</h2>
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

          <section class="about-section text-center bg-white pb-sm-5">
            <div class="container subcom">
              <hr ></hr>
              <Row className="justify-content-center text-center mb-lg">
                <h2>The Committee</h2>
              </Row>
              <br></br>
              {this.renderSubcom(2020, "Marketing")}
              <br></br>
              {this.renderSubcom(2020, "Social")}
              <br></br>
              {this.renderSubcom(2020, "Charity")}
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Team;
