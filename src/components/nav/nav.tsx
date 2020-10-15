import * as React from "react";
import { useSpring, animated } from "react-spring";

import { pageProps } from "../../App";

import "./nav.scss";

interface NavProps {
  pages: pageProps[];
  onClick: (idx: number) => void;
}
const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Nav: React.FunctionComponent<NavProps> = ({ pages, onClick }) => {
  return (
    <div className="nav">
      {pages.map((page, idx) => {
        const [props, set] = useSpring(() => ({
          xys: [0, 0, 1],
          config: { mass: 1, tension: 350, friction: 40 },
        }));
        return (
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans as any) }}
            className="nav-item"
            onClick={() => onClick(idx)}
          >
            {page.title}
          </animated.div>
        );
      })}
    </div>
  );
};

export default Nav;
