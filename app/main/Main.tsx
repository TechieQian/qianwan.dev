import * as React from "react";
import * as ReactDOM from "react-dom";
import Nav from "../nav/Nav";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Resume from "../resume/Resume";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import "./main.scss";
import "bulma/css/bulma.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Nav />
        <article className="body">
          <Switch>
            <Route exact path="/resume" component={Resume} />
            <Route component={Body} />
          </Switch>
        </article>

        <Footer />
      </>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("app")
);
