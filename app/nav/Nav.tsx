import * as React from "react";
import useToggle from "./useToggle";

export default function Nav(props) {
  const [toggleState, toggle] = useToggle();

  function toggleNight() {
    toggle();
    const element = document.querySelector("html");
    const bgColor = !toggleState ? "#191b1e" : "white";
    element.setAttribute("style", `background-color : ${bgColor}`);
  }
  return (
    <header className="container">
      <section className="header-top">
        <img
          title="Click me."
          onClick={toggleNight}
          src="./dist/me.png"
          alt="me"
        />
        <h1 className="title">Qian Wan</h1>
        <h2 className="subtitle">
          <span>Software Engineer</span>
        </h2>
        <section>
          <IconLink
            classNames="fab fa-github fa-lg"
            link="https://github.com/TechieQian"
            title="github"
          />
          <IconLink
            classNames="fab fa-linkedin fa-lg"
            link="https://www.linkedin.com/in/qianwan08/"
            title="linkedin"
          />
          <IconLink
            classNames="fa fa-envelope fa-lg"
            link="mailto:qiansan@gmail.com"
            title="email me"
          />
          <IconLink
            classNames="fab fa-twitter fa-lg"
            link="https://twitter.com/qiancodes"
            title="twitter"
          />
        </section>
      </section>
    </header>
  );
}

function IconLink(props) {
  return (
    <span className="icon">
      <a title={props.title} href={props.link} target="_blank">
        <i className={props.classNames} />
      </a>
    </span>
  );
}
