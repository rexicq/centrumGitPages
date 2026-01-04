import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Img from "gatsby-image";

const Thumbnails = styled.img`
  max-height: 20vh;
`;

const BigImages = styled.img`
  max-height: 70vh;
  border-radius: 3px;
  margin: 2rem 0;
`;

const ImageWrapper = styled.div`
  max-height: 70vh;
  padding-bottom: 15%;
`;

class MultiImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      thumbnails: props.images.map(({ fluid }, i) => (
        <div>
          <BigImages key={i} src={fluid.src} />{" "}
          <p className="legend">{props.children}</p>{" "}
        </div>
      ))
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const { images, length } = this.props;
    const MultiImage = length > 1;

    return (
      <div>
        {/* <input
          type="number"
          value={this.state.value}
          onChange={e => this.onChange(parseInt(e.target.value || 0))}
        /> */}

        <Carousel
          dynamicHeight={true}
          showThumbs={MultiImage}
          showIndicators={MultiImage}
        >
          {images.map(({ fluid }, i) => (
            <ImageWrapper key={i}>
              <img src={fluid.src} />
              {/* <p className="legend">{this.props.children}</p> */}
            </ImageWrapper>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default MultiImages;
