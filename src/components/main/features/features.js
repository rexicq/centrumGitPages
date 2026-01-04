import { SVGS, Heading } from "./features.css.js";
import { Heading2 } from "../../utils/style";
import React, { Component } from "react";
import { BackgroundSection } from "../../utils";
import { InView } from "react-intersection-observer";
import Item from "./item";

export default class features extends Component {
  state = {
    clicked: false,
    viewed: true,
    mounted: false
  };
  onClick = i => {
    this.state.clicked === i
      ? this.setState({ clicked: false })
      : this.setState({ clicked: i });
  };

  componentDidMount() {
    console.log('mounted')
    setTimeout(() => this.setState({ mounted: true }), 100)
  }
  render() {
    const {
      nav,
      bg: { image, items }
    } = this.props;
  const ssr = typeof window === "undefined"
    return (
      <InView threshold={0.3}>
        {({ inView, ref }) => (
          <BackgroundSection
          zIndex={"0"}
            styleName={"imgbg featuresbg"}
            img={image}
            overlayColor={"rgba(255, 255, 255, 0.1)"}
            onClick={() => this.setState({ clicked: false })}
          >
            <div 
            ref={ref} style={{position: 'absolute', height: '100%', width: '100%'}}></div>
            <SVGS
              pose={nav ? "visible" : ( ssr || inView || !this.state.mounted ) ? "visible" : "invisible"}
              id={"features"}
            >
              {!this.state.viewed && inView && this.setState({ viewed: true })}
              {console.log(inView, this.state.mounted)}
              {this.state.viewed && (
                <>
                  <Heading>ПОЧЕМУ МЫ?</Heading>
                  {items.map(({ name, title, text }, i) => {
                    return (
                      <Item
                        key={i}
                        number={i}
                        margin={items.length - 1 === i}
                        clicked={
                          this.state.clicked === i
                            ? this.state.clicked === i
                            : !this.state.clicked && this.state.clicked !== 0
                            ? false
                            : "scale"
                        }
                        onClickHandler={this.onClick}
                        name={name}
                        title={title}
                        text={text}
                      />
                    );
                  })}
                </>
              )}
            </SVGS>
          </BackgroundSection>
        )}
      </InView>
    );
  }
}
