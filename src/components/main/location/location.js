import GoogleMapReact from "google-map-react";

import React, { Component } from "react";
import { Container, Badge, TextBlock } from "./location.css";
import Img from "gatsby-image";
import { InView } from "react-intersection-observer";

class SimpleMap extends Component {
  state = {
    hovered: false,
    loaded: false
  };
  static defaultProps = {
    center: {
      lat: 46.847385,
      lng: 35.370299
    },
    zoom: 17
  };

  _onChildMouseEnter = (key, childProps) => {
    this.setState({ hovered: true });
  };

  _onChildMouseLeave = (/* key, childProps */) => {
    this.setState({ hovered: false });
  };

  render() {
    const { center, zoom, nav, image, title } = this.props;
    console.log(nav);

    const ssr = typeof window === "undefined";
    return (
      <InView>
        {({ inView, ref }) => (
          <Container ref={ref} id="location">
            {!this.state.loaded && inView && this.setState({ loaded: true })}
            {!nav ? (
              (inView || ssr || this.state.loaded) && (
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyCCa6tEkCsJX1xvTf1voGsSe5czgzxAvpQ"
                  }}
                  defaultCenter={center}
                  defaultZoom={zoom}
                >
                  <Badge
                    onMouseEnter={this._onChildMouseEnter}
                    onMouseLeave={this._onChildMouseLeave}
                    hovered={this.state.hovered}
                    lat={46.847385}
                    lng={35.370299}
                  >
                    <>
                      <p>C</p>
                      {this.state.hovered && (
                        <TextBlock>Centrum Diagnotic</TextBlock>
                      )}
                    </>
                  </Badge>
                </GoogleMapReact>
              )
            ) : (
              <div style={{ width: "100%" }}>
                {" "}
                {image && (
                  <Img alt={title} fluid={image.childImageSharp.fluid} />
                )}{" "}
              </div>
            )}
          </Container>
        )}
      </InView>
    );
  }
}

export default SimpleMap;
