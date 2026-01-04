import React, { Component } from "react";
import { Container, Avatar, SVGRect } from "./item.css.js";
import posed from "react-pose";
import { Colors } from "../../../../constants/theme";
import { Button } from "../../../utils";
import { SVGLoader } from "../../../../constants/svg";
import { DefaultText, Heading3 } from "../../../utils/style";

const RectAnimate = posed.path({
  init: {
    pathLength: 1,
    strokeWidth: 1,
    zIndex: 100,
    transition: {
      delay: 200,
      duration: 1100,
      easing: "linear"
    }
  },
  hover: {
    pathLength: 0,
    transition: {
      delay: 0,
      duration: 1000,
      easing: "linear"
    }
  }
});

const AnimatedContainer = posed(Container)({
  init: {
    scale: 1
  },
  scale: {
    scale: 0.7
  },
  clicked: {
    scale: 1.3
  }
});

export default class item extends Component {
  state = {
    hovered: false,
    clicked: false
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const { clicked } = nextProps;
    this.setState({ clicked });
  }

  render() {
    const { margin, title, text, name, onClickHandler, number } = this.props;
    return (
      <AnimatedContainer
        className={margin ? "featuresfix" : ""}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => onClickHandler(number)}
        pose={
          this.state.clicked === "scale"
            ? "scale"
            : this.state.clicked
            ? "clicked"
            : "init"
        }
      >
        <div>
          <SVGLoader name={name} width={9} />
        </div>
        <Heading3>{title}</Heading3>
        <DefaultText>{text}</DefaultText>
        <SVGRect viewBox={"0 0 320 120"}>
          <RectAnimate
            pose={this.state.hovered ? "hover" : "init"}
            d={
              "M1.4999923706054688,-0.06249765679240228 L318.5,-0.06249765679240228 L318.5,119.9375023432076 L1.4999923706054688,119.9375023432076 L1.4999923706054688,-0.06249765679240228 z"
            }
            fill={"transparent"}
            stroke={Colors.primaryColorDarken}
            viewBox={""}
          />
        </SVGRect>
      </AnimatedContainer>
    );
  }
}
