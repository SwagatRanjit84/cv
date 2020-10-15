import React, { useContext, useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

import "./contact.scss";

interface SocialLinkProps {}

const COntact: React.FunctionComponent<SocialLinkProps> = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const onPhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  const onMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const confirmData = (e: any) => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("Thank you for the response");
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="wrapper">
          <div className="form form-d">
            <div className="form-heading">
              <h2 className="title">Contact me</h2>
            </div>
            <div className="form-body">
              <div className="form-row">
                <div className="name">Name</div>
                <div className="value">
                  <input
                    className="inputStyle"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="name">Email Address</div>
                <div className="value">
                  <input
                    className="inputStyle"
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={onEmailChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="name">Mobile Number</div>
                <div className="value">
                  <input
                    className="inputStyle"
                    type="text"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={onPhoneChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="name">Message</div>
                <div className="value">
                  <textarea
                    className="inputStyle"
                    placeholder="Message"
                    value={message}
                    onChange={onMessageChange}
                  />
                </div>
              </div>
              <div className="footer">
                <button
                  className="btn btn--radius-2 btn--blue-2"
                  onClick={confirmData}
                >
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COntact;
