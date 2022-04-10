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
import { Link } from "react-router-dom";
//import { NavLink } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


class Navigation extends React.Component {

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  getNavLinkClass = (path) => {
    return window.location.href.split("#")[1] === path ? "active" : "navbar-hover navbar-nav-hover align-items-lg-center" ;
  }
  
  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };
  

  render() {

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/logo_white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/logo_small.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar >
                  <NavItem >
                  <NavLink 
                    to="/team" 
                      className={this.getNavLinkClass("/team")}
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">THE  TEAM</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.getNavLinkClass("/events")}
                      to="/events" 
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">EVENTS</span>
                    </NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink
                      // activeClassName="nav-active"
                      className={this.getNavLinkClass("/publications")}
                      to="/publications" 
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">PUBLICATIONS</span>
                    </NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink
                      // activeClassName="nav-active"
                      
                      className={this.getNavLinkClass("/charity")}
                      to="/charity" 
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">CHARITY</span>
                    </NavLink>
                  </NavItem>
                  
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav >
                      <NavLink
                        // activeClassName="nav-active"
                        // className="navbar-hover navbar-nav-hover" 
                        tag={Link}
                        to="/publications" 
                        activeClassName="active"
                      >
                        <span className="nav-link-inner--text">Publications</span>
                      </NavLink>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                      <a className="linkNone" href="https://www.coopsoc.com.au/FYG2021.pdf" target="_blank">
                        First Year Guide
                      </a>
                      </DropdownItem>
                      <DropdownItem to="/blog" tag={Link}>                
                        Blog Posts
                      </DropdownItem>
                      <DropdownItem>
                      <a className="linkNone" href="https://open.spotify.com/show/25fOObrHq0t3hPrmf8B8Dx?si=IYM-tZg-Q0CfufTKVqTqJg&dl_branch=1" target="_blank">
                        Podcast
                      </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                  
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/coopsoc.unsw/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        FACEBOOK
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href = "mailto: coopsoc.unsw@gmail.com"
                      id="tooltip356643867"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        EMAIL
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356643867">
                      Email us
                    </UncontrolledTooltip>
                    </NavItem>
                    <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/coopsoc_unsw/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        INSTAGRAM
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/company/unsw-co-op-society/"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                      LINKEDIN
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Connect on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Navigation;
