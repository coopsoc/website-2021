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

// 2021 Team Images
import Kenuka_Image from '../assets/img/2021_exec/Kenuka.jpg'
import Celine_Image from '../assets/img/2021_exec/Celine.jpg'
import Kai_Image from '../assets/img/2021_exec/Kai.jpeg'
import Connor_Image from '../assets/img/2021_exec/Connor.jpg'
import Micah_Image from '../assets/img/2021_exec/Micah.jpg'
import Jasmin_Image from '../assets/img/2021_exec/Jasmin.jpeg'
import Hirun_Image from '../assets/img/2021_exec/Hirun.jpeg'
import Keshmira_Image from '../assets/img/2021_exec/Keshmira.jpg'
import Claire_Image from '../assets/img/2021_exec/Claire.jpg'
import Jack_Image from '../assets/img/2021_exec/Jack.jpg'
import Noa_Image from '../assets/img/2021_exec/Noa.jpg'
import Miah_Image from '../assets/img/2021_exec/Miah.jpg'
import Ronaldo_Image from '../assets/img/2021_exec/Ronaldo.jpg'

// 2020 Team Images
import Jelinna_Image from'../assets/img/2020_exec/Jelinna.jpg'
import Roary_Image from'../assets/img/2020_exec/Roary.jpg'
import Shrey_Image from '../assets/img/2020_exec/Shrey.jpg'
import Xavier_Image from '../assets/img/2020_exec/Xavier.jpg'
import Ian_Image from '../assets/img/2020_exec/Ian.png'
import Stanley_Image from '../assets/img/2020_exec/Stanley.jpeg'
import Hayes_Image from '../assets/img/2020_exec/Hayes.jpeg'
import Emily_Image from '../assets/img/2020_exec/Emily.png'
import Lelland_Image from '../assets/img/2020_exec/Lelland.jpeg'
import Susan_Image from '../assets/img/2020_exec/Susan.jpg'
import Vincent_Image from '../assets/img/2020_exec/Vincent.jpg'


class Team extends React.Component {

    state = {}
    constructor(props) {
        super(props)
        this.state = {
            year : 100,
            dimensions: {}
        };
        this.renderYear = this.renderYear.bind(this);
        this.onImgLoad = this.onImgLoad.bind(this);
        this.imgRef = React.createRef();
    }

    onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    }

    handleResize = e => {
        const img = this.imgRef.current;
        this.setState({dimensions:{height:img.offsetHeight,
            width:img.offsetWidth}});
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
        function(values, handle) {
            this.renderYear(values[0]);
            this.setState({ year: values[0] });
        }.bind(this)
        );

        window.addEventListener("resize", this.handleResize);

    }

    renderYear() {
        var FONT_SIZE = '.9vw';
        const {width, height} = this.state.dimensions;

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

  team_2021(FONT_SIZE) {
    return (
        <>
        <div class="container">
                <Row className="justify-content-center text-center mb-lg">
                <h2>Executives </h2>
                </Row>

                <div class="row justify-content-center">       
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card1 limit" >
                            <img src={Kenuka_Image} ref={this.imgRef} onLoad={this.onImgLoad} class="card-img-top"></img>
                            <p  style={{fontSize:FONT_SIZE}}>Stepping into the role of President, my ultimate goal is to foster a strong community full of everlasting friendships and life-long memories by overseeing all facets of the society. 
                                I want to enhance the cohesion of Co-op Soc by ensuring that the incoming 2021 first-years feel welcomed into the Co-op family, and by also increasing the involvement of third and fourth years. Overall, despite what 2021 throws at us, get keen for a good time!</p>

                            <div class="go-corner">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Kenuka Wijayatunga</h4>
                            <p class="about-role">President</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card2 limit" >
                            <img src={Celine_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>My biggest goal stepping into this position is to facilitate the creation of long lasting memories and aid the development of the strongest community in UNSW - the co-op family. 
                                Not only does this entail running fantastic, consistent events and overseeing an online presence, but it also involves ensuring a key support network is maintained and all voices 
                                are heard, not just within the Executive team but throughout the society.</p>

                            <div class="go-corner2">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Celine Goh</h4>
                            <p class="about-role">Vice President</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card3 limit" >
                            <img src={Kai_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>My number one goal is to make sure everyone is included in Co-op Soc. As secretary, 
                            it is my duty to ensure that communication occurs not only quickly and effectively, but also that it reaches each and every member. 
                            My vision is to not only maintain the society’s health, but to help grow the Co-op community as a whole by keeping track of our historical records, 
                            meetings, goals, plans, contact with external organisations, members, and events to name a few!</p>

                            <div class="go-corner3">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Kai Mashimo</h4>
                            <p class="about-role">Secretary</p>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card4 limit" >
                            <img src={Connor_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>Holistically, I would like to utilise my role to further advance the Co-op family, facilitating strong friendships and unforgettable memories for all. Moreover, I hope to ensure a robust financial position into the future, building upon the work of previous treasurers so as to increase the society’s assets and lay the platform for continued development.</p>

                            <div class="go-corner4">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Connor Pilger</h4>
                            <p class="about-role">Treasurer</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card5 limit" >
                            <img src={Micah_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}> As the Arc Delegate, my goal is to maintain positive communication with Arc and secure all Arc-associates resources. 
                            I will actively update and manage the SpArc page for our society with events, reimbursements and forms, I also plan to liaison with Arc to secure on-campus venues and equipment for Co-op soc events whilst following Arc guidelines when hosting team / general meetings and during administrative changes. </p>

                            <div class="go-corner5">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Micah Wang</h4>
                            <p class="about-role">Arc Delegate</p>
                        </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <hr ></hr>
                <Row className="justify-content-center text-center mb-lg">
                <h2>Directors</h2>
                </Row>

                <div class="row">
                    <div class="col-md-4">
                    <div class="meet-the-execs">
                        <a class="card5 limit" >
                        <img src={Jasmin_Image} class="card-img-top"></img>
                        <p style={{fontSize:FONT_SIZE}}>                                    Over the coming year, my main goal is to cultivate and strengthen the bonds within the Co-op community. Specifically as Social Director, I aim to create, organise and deliver events which can facilitate the building of strong connections and unique memories between the members of the society. I am hoping to organise amazing events that have been run before but also bring new unique events which, holistically, are suited to the diverse group of Co-op society members.                                </p>

                        <div class="go-corner5">
                        <div class="go-arrow">
                            →
                        </div>
                        </div>
                        
                        </a>
                    <div class="card-body text-center">
                        <h4 class="about-name">Jasmin Oren</h4>
                        <p class="about-role">Events</p>
                    </div>
                    </div>
                        
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card1 limit" >
                            <img src={Hirun_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>                                    For 2021, with Kesh, I aim to create an environment where co-ops are provided with a multitude of opportunities to make an impact outside of the corporate world and inside the wider community. In order to achieve this, we will be providing you all with events supporting a range of impactful charities as well as our own initiatives which not only allow co-ops a chance to give back, but also bring us all closer together as we do so.                                 </p>

                            <div class="go-corner">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Hirun Bandara</h4>
                            <p class="about-role">Charity</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                                <a class="card3 limit" >
                                <img src={Keshmira_Image} class="card-img-top"></img>
                                <p style={{fontSize:FONT_SIZE}}> Along with Hirun, my goal as Charity Director for 2021 is to create exciting opportunities for all co-ops to give back to the community. By partnering with various charities and running exciting events, I want to help us make a tangible difference in the lives of others, whilst also bringing our co-op family closer through the spirit of giving.</p>

                                <div class="go-corner3">
                                <div class="go-arrow">
                                    →
                                </div>
                                </div>
                                
                                </a>
                            <div class="card-body text-center">
                                <h4 class="about-name">Keshmira Vijayan</h4>
                                <p class="about-role">Charity</p>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card4 limit" >
                            <img src={Claire_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>                                    My overarching goal for this year is to enrich and enhance the connections within the Co-op community. I believe that the uniqueness of our society lies in our ability to foster tight-knit friendships within and across cohorts. With my position as marketing director, I hope to use the power of social media to reach out to every member and facilitate long-lasting relationships between a diverse range of people, creating valuable memories and a truly unique community.</p>

                            <div class="go-corner4">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Claire Xue</h4>
                            <p class="about-role">Marketing</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card5 limit" >
                            <img src={Jack_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>                                    As the Publications Director, it is my vision to continue to develop and facilitate the UNSW Co-op Society’s online presence through its existing avenues - LinkedIn and the website - as well as new and emerging - potentially Instagram and monthly newsletters. To avoid stale writing and allow multiple perspectives, a substantial goal of mine is to co-lead a combined Pubs/IT Subcom - the first of its kind for our society.                                </p>

                            <div class="go-corner5">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Jack Yin</h4>
                            <p class="about-role">Publications</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card2 limit" >
                            <img src={Noa_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>                                    Over the following year as IT Director, I’m hoping to cultivate the society’s online presence, channelling my creativity and love for tech into the Co-op Soc website. I’m looking forward to co-leading the first Pubs/IT Sub-committee as Jack and I strengthen the partnership between our two roles, introducing Co-op Soc Instagram and monthly newsletters. I’m also planning to introduce a new way to create and display blog posts from within the website.                                </p>

                            <div class="go-corner2">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Noa Challis</h4>
                            <p class="about-role">IT</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <hr ></hr>
                <Row className="justify-content-center text-center mb-lg">
                <h2>First Year Representatives</h2>
                </Row>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card3 limit" >
                            <img src={Miah_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>                                    As a first year representative, I aim to represent the interests of the 2021 Co-op Soc cohort and forge stronger connections between our cohort and the Co-op Soc Executive team. Our responsibilities involve creating and distributing the 2021 Co-op merchandise, as well as contributing to planning events throughout the year. Ultimately, I hope that we are able to create opportunities for our cohort to grow closer together and make the most of their experience within Co-op.</p>

                            <div class="go-corner3">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Miah Panovrakos</h4>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card1 limit" >
                            <img src={Ronaldo_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>                                    As one of the First Year Representatives, my duty is to connect our cohort with the Co-op Executives across a range of events. We are also responsible for designing the 2021 Co-op merchandise and making everyone look amazing! As time goes on, I hope that we get the privilege to call each and every Co-op scholar our second family.</p>

                            <div class="go-corner">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Ronaldo Keng</h4>
                        </div>
                        </div>
                    </div>
                </div>

                <section class="about-section text-center bg-white pb-sm-5">
            <div class="container subcom">
            <hr ></hr>
            <Row className="justify-content-center text-center mb-lg">
            <h2>The Committee</h2>
            </Row>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon icon={faDove} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Charity</h4>
                            <p class="card-text subcom-desc">
                                The Charity portfolio seeks to create awareness, raise funds and drive social change for charities. The committee also compliments the Social portfolio in hosting fun events for a great cause.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Alannah Darling</li>
                                <li class="list-group-item border-0 li-name">Mridul Pant</li>
                                <li class="list-group-item border-0 li-name">Tiana Vincent</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon icon={faBullhorn} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Marketing</h4>
                            <p class="card-text subcom-desc">
                                The marketing portfolio focuses on creating continued engagement with our Co-op Society Facebook platform. Via the creation of digital marketing content, all students are encouraged to participate in fulfilling social events.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Emily Ross</li>
                                <li class="list-group-item border-0 li-name">Himanshu Singh</li>
                                <li class="list-group-item border-0 li-name">Nala Hong</li>
                                <li class="list-group-item border-0 li-name">Nicole Huang</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon icon={faEdit} size="4x" style={{margin: '10px'}}/>
                        <FontAwesomeIcon icon={faDesktop} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Publications/IT</h4>
                            <p class="card-text subcom-desc" >
                                This year, our society has combined the Publications and IT iteams in order to take advantage of the many synergies that exist between the two portfolios. The combined Pubs/IT portfolio is responsible for continuing to develop and facilitate the society's online presence through new and existing avenues, as well as occassional standalone publications such as the First Year Guide.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <br></br>
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Annie Yan</li>
                                <li class="list-group-item border-0 li-name">Hanyuan Li</li>
                                <li class="list-group-item border-0 li-name">Rohan Agarwal</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                    <FontAwesomeIcon icon={faUserFriends} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Social</h4>
                            <p class="card-text subcom-desc">
                                The team is responsible for organising our social calendar, including planning, developing and executing a core suite of events. They ensure all members are given the opportunity to be a part of this vibrant community, through the creation and maintenance of social groups.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                            <ul class="list-group">
                                <br></br>
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Isabella Fang</li>
                                <li class="list-group-item border-0 li-name">Jessica Degeling</li>
                                <li class="list-group-item border-0 li-name">Palaash Rawat</li>
                                
                            </ul>
                        </div>
                    </div>
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
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card1 limit" >
                            <img src={Jelinna_Image} ref={this.imgRef} onLoad={this.onImgLoad} class="card-img-top"></img>
                            <p  style={{fontSize:FONT_SIZE}}>Stepping into the role of President, not only did I want to be the leader who oversees the events and logistics that happen ‘behind the scenes’; I wanted to act as a key support network for not only the executive members on the team but also those in the society as well- ensuring that the goals and voices of the co-op community were being heard and considered. </p>
                            <div class="go-corner">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Jelinna Wang</h4>
                            <p class="about-role">President</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card2 limit" >
                            <img src={Roary_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>I decided to run for Vice President in order to channel my inner Nigel: the fun-loving guy who can bring a room together and give warm welcomes to everyone coming into Co-op Society. Seeing the first-years enjoy camp so much and create long-lasting memories and friendships honestly filled me with joy; it was definitely one of my biggest goals stepping into this position. It’s quite sad that we’ve been kept at home this term, but I’m looking forward to seeing you all in person again, and continuing to facilitate a friendly and fun environment.</p>

                            <div class="go-corner2">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Roary Xu</h4>
                            <p class="about-role">Vice President</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card3 limit" >
                            <img src={Shrey_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>I honestly believe that organisation is a staple to running any society. I applied to be secretary so that I could help be the backbone of the society. Along the way I’ve helped develop the teams’ communication abilities further, whilst simultaneously increasing my ability to work in and lead a team.  My goal is to have everyone working together as a tightly oiled machine, and so far it’s been pretty good!!                          
                                </p>

                            <div class="go-corner3">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Shrey Somaiya</h4>
                            <p class="about-role">Secretary</p>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card4 limit" >
                            <img src={Xavier_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>  Over the year as treasurer I have sought to consistently reduce costs associated with events whilst continuing to improve engagement and attendance. Coming from a shaky financial position previously, gaining a reasonable buffer fund for the society has been my main priority for the past term. My goal is to make a total accrual profit for the year of $1000.</p>

                            <div class="go-corner4">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Xavier Crowley</h4>
                            <p class="about-role">Treasurer</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card5 limit" >
                            <img src={Ian_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}> Coming into the Arc Delegate position, I knew I wanted to do more than becoming a communicator and a signature collector. I wanted to be able to give incoming co-ops the welcoming family experience I received from the society last year. 
                                    I stepped forward to help organise the buddy program to make sure that new scholars would make a strong connection right off the bat with people in the year above them.</p>

                            <div class="go-corner5">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Ian Ng</h4>
                            <p class="about-role">Arc Delegate</p>
                        </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <hr ></hr>
                <Row className="justify-content-center text-center mb-lg">
                <h2>Directors</h2>
                </Row>

                <div class="row">
                    <div class="col-md-4">
                    <div class="meet-the-execs">
                        <a class="card5 limit" >
                        <img src={Stanley_Image} class="card-img-top"></img>
                        <p style={{fontSize:FONT_SIZE}}>Social director and all-round LIFO. The aim for this year was to help y'all work hard, play hard. With COVID-19 in our systems, I’ve tried to help Co-op play hard, whether it be games over zoom, getting inebriated over zoom or finding love over zoom, I wanted to replicate that feeling of in person connection. Once COVID-19 is over, my goal is to throw a term you’ll never forget. </p>

                        <div class="go-corner5">
                        <div class="go-arrow">
                            →
                        </div>
                        </div>
                        
                        </a>
                    <div class="card-body text-center">
                        <h4 class="about-name">stanley Chen</h4>
                        <p class="about-role">Events</p>
                    </div>
                    </div>
                        
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card1 limit" >
                            <img src={Hayes_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>As a Charity co-director I wanted to highlight the philanthropic side of Co-op Soc that our members tend to forget. Given that we’re a privileged bunch, it’s important we give back to the community, and these acts of kindness don’t have to be boring! We’ve already fundraised through the World’s Greatest Shave and started a new case comp initiative to help small charities. Later on we hope to run in the City2Surf and hold our much-anticipated Poker Night.</p>

                            <div class="go-corner">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Hayes Choy</h4>
                            <p class="about-role">Charity</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                                <a class="card3 limit" >
                                <img src={Emily_Image} class="card-img-top"></img>
                                <p style={{fontSize:FONT_SIZE}}>Coming into the Charity Director role, my goal was to organise fun events that allow Co-ops to volunteer first-hand and give back to the community - to do good and feel good. We’ve had the opportunity to hold some great events, such as our upcoming online Case Comp partnering with a real charity to help them tackle a very real issue in our society. Looking forward to launching some of our planned events when in-person activities resume! </p>

                                <div class="go-corner3">
                                <div class="go-arrow">
                                    →
                                </div>
                                </div>
                                
                                </a>
                            <div class="card-body text-center">
                                <h4 class="about-name">Emily Kasovska</h4>
                                <p class="about-role">Charity</p>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card4 limit" >
                            <img src={Lelland_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>Being a marketing director has allowed me to be more creative in the way the society presents itself. 

                                 think that having a strong presence in how we promote ourselves can help us establish us as a better society and engage more Co-ops with events.  </p>

                            <div class="go-corner4">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Lelland Hui</h4>
                            <p class="about-role">Marketing</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card5 limit" >
                            <img src={Susan_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}> As the publications director, my vision is to develop the society’s online presence through the introduction of published articles on our new platform that is the Co-op Soc website. I hope that by establishing a friendly blog environment, these features can inform, amuse and provoke thought in the wider community.</p>

                            <div class="go-corner5">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Susan Sun</h4>
                            <p class="about-role">Publications</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card2 limit" >
                            <img src={Vincent_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}>I came into this role because I wanted to express my creativity and create a website that people would be willing and keen to use. I hope to make something that future Co-op Society members as well as alumni will continue to visit and find out more about how Co-ops are doing and what changes take place from year to year.</p>

                            <div class="go-corner2">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Vincent Chen</h4>
                            <p class="about-role">IT</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <hr ></hr>
                <Row className="justify-content-center text-center mb-lg">
                <h2>First Year Representatives</h2>
                </Row>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card3 limit" >
                            <img src={Celine_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}> As one of two First Year Representatives, I’ve had the opportunity to represent the Co-op Soc 2020 cohort, and function as a channel of communication between us and the Executive Body. My goals stepping into this role were to contribute effectively to the smooth running of the society and actively engage with my cohort, and throughout the year I’ve had the privilege to work on the 2020 Co-op Soc merchandise line, as well as learn from the current executive body.</p>

                            <div class="go-corner3">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Celine Goh</h4>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <a class="card1 limit" >
                            <img src={Kenuka_Image} class="card-img-top"></img>
                            <p style={{fontSize:FONT_SIZE}}> As one of this year’s First Year Representatives, my role has been to bridge the gap between the 2020 Co-op Soc First Year cohort and the Co-op Soc Executive team. I’ve strived to play an active role in the society by engaging with my cohort and working to design and distribute the 2020 Co-op Soc merchandise. After seeing how tightly-knit the second year cohort were, my main goal has been to foster a similar environment and make Co-op Soc a second family for my year.</p>

                            <div class="go-corner">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                            
                            </a>
                        <div class="card-body text-center">
                            <h4 class="about-name">Kenuka Wijayatunga</h4>
                        </div>
                        </div>
                    </div>
                </div>

                <section class="about-section text-center bg-white pb-sm-5">
            <div class="container subcom">
            <hr ></hr>
            <Row className="justify-content-center text-center mb-lg">
            <h2>The Committee</h2>
            </Row>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faBullhorn} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Marketing</h4>
                            <p class="card-text subcom-desc">
                                The marketing portfolio focuses on creating continued engagement with our Co-op Soc Facebook platform. Via the creation of digital marketing content, all students are encouraged to participate in fulfilling social events.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Hayley Gayfer</li>
                                <li class="list-group-item border-0 li-name">Claire Xue</li>
                                <li class="list-group-item border-0 li-name">Piper Workman</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faUserFriends} size="4x" />
                        <div class="card-body text-center">
                            <h4 class="about-name">Social</h4>
                            <p class="card-text subcom-desc" >
                                The team is responsible for organising our social calendar, including planning, developing and executing a core suite of events. They ensure all members are given the opportunity to be a part of this vibrant community, through the creation and maintenance of social groups.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Noa Challis</li>
                                <li class="list-group-item border-0 li-name">Felicity Chan</li>
                                <li class="list-group-item border-0 li-name">Jasmin Oren</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faDove} size="4x" />
                        <div class="card-body text-center">
                            <h4 class="about-name">Charity</h4>
                            <p class="card-text subcom-desc">
                                This portfolio seeks to create awareness, raise funds and drive social change for charities. The Charity subcommittee also compliments the Social portfolio in hosting fun events for a great cause.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Hirun Bandara</li>
                                <li class="list-group-item border-0 li-name">Jack Yin</li>
                                <li class="list-group-item border-0 li-name">Keshmira Vijayan</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </>
    )
  }

}

export default Team;
