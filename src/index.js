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
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";


import Index from "views/Index.js";
import Team from "views/Team.js";
import Events from  "views/Events.js"
import Blog from  "views/Blog.js"
import Publications from "views/Publications.js";
import Charity from "views/Charity";
<<<<<<< HEAD
import Nominations from "views/Nominations.js";
=======
import Nominations from "views/Nominations";
>>>>>>> e4b43c4ab7ff0df87bbf187356c0fec2621ec416

ReactDOM.render(
  <HashRouter basename="/" >
    <Switch >
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Index {...props} />}
      />
      <Route path="/team" exact render={props => <Team {...props} />} />
      <Route
        path="/team"
        exact
        render={props => <Team {...props} />}
      />
      <Route path="/charity" exact render={props => <Charity {...props} />} />
      <Route
        path="/charity"
        exact
        render={props => <Charity {...props} />}
      />
      <Route path="/publications" exact render={props => <Publications {...props} />} />
      <Route
        path="/publications"
        exact
        render={props => <Publications {...props} />}
      />
      <Route path="/events" exact render={props => <Events {...props} />} />
      <Route
        path="/events"
        exact
        render={props => <Events {...props} />}
      />
      <Route path="/blog" exact render={props => <Blog {...props} />} />
      <Route
        path="/blog"
        exact
        render={props => <Blog {...props} />}
      />
      <Route path="/nominations" exact render={props => <Nominations {...props} />} />
      <Route
        path="/nominations"
        exact
<<<<<<< HEAD
        render={props => <Nominations {...props} />}
=======
        render={props => <Blog {...props} />}
>>>>>>> e4b43c4ab7ff0df87bbf187356c0fec2621ec416
      />

      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
