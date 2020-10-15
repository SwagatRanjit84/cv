import * as React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

import "./socialLink.scss";

enum profile {
  github = "https://github.com/SwagatRanjit84",
  linkedin = "https://www.linkedin.com/in/swagatranjit/",
  stackoverflow = "https://stackoverflow.com",
  facebook = "https://facebook.com/Nepali.Swagat.Ranjit",
}

const openProfile = (value: profile) => () => {
  window.open(value, "_blank");
};

interface SocialLinkProps {}

const SocialLink: React.FunctionComponent<SocialLinkProps> = () => {
  return (
    <div className="social-link">
      <FaGithub
        className="sl-item github"
        onClick={openProfile(profile.github)}
      />
      <FaLinkedin
        className="sl-item linkedin"
        onClick={openProfile(profile.linkedin)}
      />
      <FaStackOverflow
        className="sl-item stack"
        onClick={openProfile(profile.stackoverflow)}
      />
      <FaFacebook
        className="sl-item facebook"
        onClick={openProfile(profile.facebook)}
      />
    </div>
  );
};

export default SocialLink;
