import * as React from "react";
import axios from "axios";
import Form from "./Form";

export default function Footer() {
  function postForm(formObj) {
    axios
      .post(
        "https://qtb3jd3vrl.execute-api.us-east-2.amazonaws.com/prod/forward_form",
        formObj
      )
      .then(res => {
        window.open("https://qianwan.dev/doc/Qian_Wan_0719.docx");
      });
  }

  return (
    <section className="content fade-in">
      <div className="resume-text">Thank you for your interest.</div>
      <Form onPost={postForm} />
    </section>
  );
}
