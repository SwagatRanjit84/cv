import * as React from "react";
import { FaHtml5, FaJava, FaPython, FaReact, FaJs } from "react-icons/fa";
import "./portfolio.scss";
const Portfolio: React.FunctionComponent = () => {
  return (
    <div className="main-container">
      <div className="mainClass">
        <span className="mainData">Portfolio</span>
      </div>
      <span className="headerData">Programming skills</span>
      <div className="language">
        <FaPython className="sl-item python" />
        <FaReact className="sl-item react" />
        <FaJava className="sl-item java" />
        <FaHtml5 className="sl-item html" />
        {/* <FaJs className="sl-item html" /> */}
      </div>
      <div className="details">
        <span className="header2">Research paper</span>
        <ul>
          <li>
            <span className="details">
              <a
                href="
                https://ieeexplore.ieee.org/document/8748819"
                target="_blank"
                className="link"
              >
                Foreign Rate Exchange Prediction Using Neural Network and
                Sentiment Analysis , International Conference on Advances in
                Computing, Communication Control and Networking (ICACCCN)
              </a>
            </span>
          </li>
          <li>
            {" "}
            <span className="details">
              <a
                href="
              https://ieeexplore.ieee.org/document/8586826"
                target="_blank"
                className="link"
              >
                'Comparison of algorithms in Foreign Exchange Rate Prediction' ,
                IEEE International College International Conference on
                Computing, Communication and Security (ICCCS).
              </a>
            </span>
          </li>
          <li>
            <span className="details">
              <a
                href="
                http://repository.kln.ac.lk/handle/123456789/17398"
                target="_blank"
                className="link"
              >
                Foreign Exchange Rate Prediction using Artifical Neural Network
                and Sentiment Analysis, Kelaniya International Conference on
                Advances in Computing and Technology, 2017.
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
