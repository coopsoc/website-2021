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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Team from "views/Team.js";
import Events from  "views/Events.js"
import Blog from "views/Blog.js";
import Publications from "views/Publications.js";
import Podcast from "views/Podcast.jsx";
import Charity from "views/Charity.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route path="/team" exact render={props => <Team {...props} />} />
      <Route path="/charity" exact render={props => <Charity {...props} />} />
      <Route path="/publications" exact render={props => <Publications {...props} />} />
      <Route path="/podcast" excct render={props => <Podcast {...props} />} />
      <Route path="/events" exact render={props => <Events {...props} />} />
      <Route path="/blog" exact render={props => <Blog {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
