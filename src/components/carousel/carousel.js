import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import styled from "styled-components";
import { Colors } from "../../constants/theme";
import { SVGLoader } from "../../constants/svg";
import { InView } from "react-intersection-observer";
import { AnimatedContainer } from "../utils";
import breakpoints from "../../constants/breakpoints";

const { DESKTOP, TABLET } = breakpoints;
const Container = styled.div`
position: relative;
  grid-column: full-start / full-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${Colors.primaryColor};
  height: 30rem;
  width: 100%;
  @media (max-width: ${TABLET}px) {
    height: 40rem;
  }
  ul {
    grid-column: center-start / center-end;
  }
`;

const Wrapper = styled(AnimatedContainer)`
  display: flex;
  flex-direction: column;
  
margin: 0rem 5rem;
  max-height: 30rem;
`;

const CarouselWrapper = styled(Carousel)`
  grid-column: center-start / center-end;
  
position: relative;
  font-size: 2rem;
  color: white;
  line-height: 1.5;
`;

const Head = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 2rem;
  grid-column: center-start / center-end;
  ::before {
    content: "\\201C";
    position: absolute;
    top: 0rem;
    left: 1rem;
    line-height: 1;
    font-size: 20rem;
    @media (max-width: ${TABLET}px) {
      font-size: 20rem;
    }
    color: grey;
    font-family: sans-serif;
    z-index: 1;
  }
`;

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      slides: [<p>Checl</p>],
      viewed: true,
      mounted: false
    };
  }

  componentDidMount() {
    // this.setState((state, props) => {
    //   return { slides: props.slides };
    // });
    
    setTimeout(() => this.setState({ mounted: true }), 100)
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, viewed } = this.state;
    const { nav } = this.props;
    const ssr = typeof window === "undefined";
    
    // this.setState({ slides: this.props.slides });
    const {slides} = this.props;
    console.log(slides, 'slides')
    return (
      <InView threshold={0.8}>
        {({ inView, ref }) => (
          <Container ref={ref}>
              <Wrapper
              pose={nav ? "visible" : inView || ssr || !this.state.mounted ? "visible" : "invisible"}
              >
                <Head>{this.props.head}</Head>
                <CarouselWrapper
                  onChange={this.onChange}
                  slidesPerScroll={1}
                  value={value}
                  slides={slides}
                  autoPlay={8000}
                  animationSpeed={1000}
                  infinite
                />
                <Dots
                  value={value}
                  onChange={this.onChange}
                  number={slides.length}
                />
              </Wrapper>
          </Container>
        )}
      </InView>
    );
  }
}
