
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// nodejs library that concatenates classes
import classnames from "classnames";

import connected from '../assets/img/pubs/connected.jpg'
import placement from '../assets/img/pubs/placement.jpg'

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
  Col,
  UncontrolledAlert
} from "reactstrap";

import { Link } from "react-router-dom";


// yess let's get those animations
import "animate.css"


class Blog extends React.Component {

  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
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
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
                <span className="floating"/>
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
          
              <h1 class="animate__animated animate__fadeInDown animate__fast"><h2 className="display-1">BLOG POSTS</h2></h1>
            </Col>               
          </Row>
          
          </section>
          <br></br>
          <br></br>
          <section className="section section-lg mt--200 ">
          <Row className="justify-content-center text-center ">
            <Col lg="5">       
                <div class="card" style={{height: '580px'}}>
                    <img src={connected} class="card-img-top"></img>
                    <div class="card-body">
                        <h5 class="card-title"><b>Social Distancing Without the Socially Distant.</b></h5>
                        <p class="card-text">How can we stay connected during isolation?</p><br />
                        <Link class="btn btn-neutral" to="/Publications/stayingConnected">Read more</Link>
                    </div>
                </div>
            </Col>    
            <Col lg="5">  
                <div class="card" style={{height: '580px'}}>
                    <img src={placement} class="card-img-top"></img>
                    <div class="card-body">
                        <h5 class="card-title"><b>First Placement Experiences</b></h5>
                        <br></br>
                        <p class="card-text">Worried about placement and not sure what to expect? We've got you covered.</p>
                        <Link class="btn btn-neutral" to="/Publications/placementExperience">Read more</Link>
                    </div>
              </div>
            </Col>           
          </Row>
          </section>
      </main>
      <SimpleFooter />
    </>
  );
  }

}


export default Blog;
