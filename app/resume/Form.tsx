import * as React from "react";
import Captcha from "./Captcha";
const useState = React.useState;
import { NavLink } from "react-router-dom";

interface FormProps {
  onPost: any;
}
export default function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [captcha, setCaptcha] = useState("");

  function validateButton() {
    return name && email && institution && captcha;
  }

  return (
    <div className="resume-form">
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Name (required)"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="Email (required)"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            value={institution}
            onChange={e => {
              setInstitution(e.target.value);
            }}
            type="text"
            placeholder="Institution (required)"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-university" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="Message" />
        </div>
      </div>
      <Captcha onVerify={setCaptcha} />
      <div className="button_row">
        <button
          style={{ marginTop: "15px", marginRight: "15px" }}
          disabled={!validateButton()}
          className="button is-primary"
          onClick={() => props.onPost({ name, email, institution, captcha })}
        >
          Download Résumé
        </button>
        <NavLink to="/" title="go back home.">
          <button style={{ marginTop: "15px" }} className="button">
            <span className="icon is-small">
              <i className="fas fa-home" />
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
