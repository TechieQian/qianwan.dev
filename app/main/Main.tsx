import * as React from "react";
import * as ReactDOM from "react-dom";
import Nav from "../nav/Nav";
import Body from "../body/Body";
import Footer from "../footer/Footer";

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
        {/* <Menu /> */}
        <Body />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
