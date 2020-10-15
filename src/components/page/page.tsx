import * as React from "react";

import "./page.scss";
import { animated } from "react-spring";

interface PageProps {
  style: any;
}

const Page: React.FunctionComponent<PageProps> = ({ style, children }) => (
  <animated.div className="page" style={style}>
    {children}
  </animated.div>
);

export default Page;
