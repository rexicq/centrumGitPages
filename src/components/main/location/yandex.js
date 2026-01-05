import React, { Component } from "react";
import { Container, Badge, TextBlock } from "./location.css";
import Img from "gatsby-image";
import { InView } from "react-intersection-observer";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

class YandexMap extends Component {
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
    const badgeSvg = (color = "red") => `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="46">
  <!-- Круг -->
  <circle cx="20" cy="20" r="18" fill="white" stroke="${color}" stroke-width="5"/>

  <!-- Буква С по центру -->
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="24" fill="${color}" font-family="Arial, sans-serif">С</text>

</svg>
`;

    const ssr = typeof window === "undefined";
    return (
      <InView>
        {({ inView, ref }) => (
          <Container ref={ref} id="location">
            {!this.state.loaded && inView && this.setState({ loaded: true })}
            {!nav ? (
              (inView || ssr || this.state.loaded) && (
                <YMaps
                  query={{
                    ns: "use-load-option",
                    load:
                      "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon"
                  }}
                >
                  <Map
                    defaultState={{
                      center: [46.847385, 35.370299],
                      zoom: 17,
                      controls: ["zoomControl", "fullscreenControl"]
                    }}
                    width="100vw"
                    height="100%"
                  >
                    <Placemark
                      geometry={[46.847051, 35.370304]}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: `data:image/svg+xml;utf8,${encodeURIComponent(
                          badgeSvg("red")
                        )}`,
                        iconImageSize: [40, 46],
                        iconImageOffset: [-20, -46]
                      }}
                    />
                  </Map>
                </YMaps>
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

export default YandexMap;
