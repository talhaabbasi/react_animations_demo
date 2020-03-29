import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component2</h1>
              <p>
                Enim veniam sint excepteur laborum sit reprehenderit in veniam
                Lorem velit. Cupidatat minim quis dolor proident minim pariatur
                sit. Do laborum nostrud quis ipsum culpa cillum non officia
                consectetur proident est proident Lorem. Culpa laborum excepteur
                dolore commodo nisi duis in minim irure pariatur voluptate velit
                eiusmod. Aliquip in consequat dolore ut duis elit cupidatat esse
                aliqua laborum labore dolor nulla exercitation. Ullamco Lorem
                nostrud laborum velit dolor aliquip quis reprehenderit nulla
                aute qui. Mollit consectetur adipisicing irure ad. Reprehenderit
                laborum esse quis anim sit Lorem non adipisicing sit id. Fugiat
                tempor ea id veniam sint pariatur tempor et dolore in irure sint
                incididunt. Ullamco minim nostrud veniam voluptate ullamco ut
                enim in proident amet occaecat pariatur qui velit. Dolor magna
                ullamco velit fugiat esse velit nisi enim. Nulla nostrud labore
                sit quis qui ut nulla dolore sint.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};
const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component2;
