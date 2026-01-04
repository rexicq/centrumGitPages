import React, { Component } from "react";
import { Container, SecondaryContainer, ScrollButtonDown } from "./header.css";
import { Colors } from "../../constants/theme";
import { toRgba } from "../../helpers/toRgba";
import { ScrollButton, BackgroundSection } from "../utils";
import posed from "react-pose";

const AnimatedContainer = posed(SecondaryContainer)({
  // init: {
  //   y: "-100%",
  //   transition: {
  //     ease: "easeInOut"
  //   }
  // },
  // loaded: {
  //   y: 0,
  //   opacity: 1,
  //   delay: 500,
  //   transition: {
  //     duration: 500,
  //     ease: "easeInOut"
  //   }
  // },
  // initial: {
  //   y: "-100%",
  //   transition: {
  //     ease: "easeInOut"
  //   }
  // }
});

export default class header extends Component {
  state = {
    loading: "initial"
  };
  componentDidMount() {
    this.setState({
      loading: "loaded"
    });
  }
  render() {
    const {
      to,
      nav,
      children,
      inView,
      refLink,
      bg: { image, header },
      Scroll
    } = this.props;
    return (
      <BackgroundSection
        styleName={"imgbg headerbg"}
        title={header}
        img={image}
        overlayColor={`${toRgba({
          hex: Colors.primaryColorDarkest,
          opacity: "0.65"
        })}`}
      >
        <AnimatedContainer
          pose={nav ? "initial" : this.state.loading}
          ref={refLink}
        >
          {children}
        </AnimatedContainer>
        {Scroll && <ScrollButtonDown aria-label="Scroll Button" to={`${to}`} />}
      </BackgroundSection>
    );
  }
}
