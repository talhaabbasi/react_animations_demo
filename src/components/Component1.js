import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component1</h1>
            <p>
              Enim veniam sint excepteur laborum sit reprehenderit in veniam
              Lorem velit. Cupidatat minim quis dolor proident minim pariatur
              sit. Do laborum nostrud quis ipsum culpa cillum non officia
              consectetur proident est proident Lorem. Culpa laborum excepteur
              dolore commodo nisi duis in minim irure pariatur voluptate velit
              eiusmod. Aliquip in consequat dolore ut duis elit cupidatat esse
              aliqua laborum labore dolor nulla exercitation. Ullamco Lorem
              nostrud laborum velit dolor aliquip quis reprehenderit nulla aute
              qui. Mollit consectetur adipisicing irure ad. Reprehenderit
              laborum esse quis anim sit Lorem non adipisicing sit id. Fugiat
              tempor ea id veniam sint pariatur tempor et dolore in irure sint
              incididunt. Ullamco minim nostrud veniam voluptate ullamco ut enim
              in proident amet occaecat pariatur qui velit. Dolor magna ullamco
              velit fugiat esse velit nisi enim. Nulla nostrud labore sit quis
              qui ut nulla dolore sint.
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};
