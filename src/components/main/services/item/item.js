import React, { Component } from 'react';
import { Container, Avatar, TitleWrapper, SVGRect, Back, Video, GIF } from './item.css.js';
import posed from 'react-pose';
import { Colors } from '../../../../constants/theme';
import { Button } from '../../../utils';
import ReactCardFlip from 'react-card-flip';
import { graphql } from 'gatsby';

const RectAnimate = posed.path({
  init: {
    pathLength: 0,
    strokeWidth: 0,
    zIndex: 100,
    transition: {
      delay: 200,
      duration: 1100,
      easing: 'linear',
    },
  },
  hover: {
    pathLength: 1,
    strokeWidth: 3,
    transition: {
      delay: 0,
      duration: 1000,
      easing: 'linear',
    },
  },
});

export default class item extends Component {
  state = {
    hovered: false,
    clicked: true
  };
  componentDidMount() {
    !this.props.nav && this.setState({clicked: false})

    this.isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
  }

  render() {
    const { image } = this.props;
    return (
      <Container
        onClick={() => this.setState({ clicked: !this.state.clicked })}
        onMouseEnter={() => {
          !this.isTouch &&  this.setState({ hovered: true })}}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <TitleWrapper>
          <p>{image.title}</p>
        </TitleWrapper>

        <ReactCardFlip isFlipped={this.state.clicked} flipDirection="horizontal">
          <div key="front">
            {image.image && image.image.childImageSharp ? <Avatar fluid={image.image.childImageSharp.fluid} alt={image.title}/> : <GIF videoSrcURL={image.image.publicURL} title={image.title} alt={image.title} />}
          </div>
          <Back key="back">
            <p>
              {image.description}

            </p>
          </Back>

        </ReactCardFlip>
        <SVGRect viewBox={'0 0 330 220'}>
          <RectAnimate
            pose={this.state.clicked && 'hover' || this.state.hovered ? 'hover' : 'init'}
            d={
              'M0.5000053670707592,0.437500018879291 L329.49999818466944,0.437500018879291 L329.49999818466944,219.43750907822405 L0.5000053670707592,219.43750907822405 L0.5000053670707592,0.437500018879291 z'
            }
            fill={'transparent'}
            stroke={Colors.primaryColorDarken}
            viewBox={''}
          />
        </SVGRect>
      </Container>
    );
  }
}

export const query = graphql`
{
  allFile(filter: {extension: {eq: "gif"}}){
    edges{
      node{
        publicURL
      }
    }
  }
}`
