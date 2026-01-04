import React, { Component } from 'react';
import {
  Container,
  AvatarOne,
  AvatarTwo,
  TextBlock,
  Caption,
  TextBlockSecond,
} from './team.css';

import Modal from '../../../containers/modal';
import { Heading3, Heading2, HoryzontalLine,DefaultP } from '../../utils/style';
import { RightAnimate, LeftAnimate } from '../../utils/';
import posed from 'react-pose';
import { Colors } from '../../../constants/theme';
import Media from 'react-media';
import breakpoint from '../../../constants/breakpoints';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Wrapper } from '../services/services.css';

const ImgAnimate = posed.div({
  unhovered: { filter: 'grayscale(0%)  brightness(100%)', },
  hovered: {
    filter: 'grayscale(80%) brightness(40%)',
    transition: {
      duration: 500,
      easing: 'linear',
    },
  },
});


const AnimeCaption = posed(Caption)({
  initial: {
    x: '-100px',
    opacity: 0,
    transition: {
      duration: 1000,
      easing: 'linear'
    }
  },
  moved: {
    x: 0,
    color: '#fff',
    opacity: 1,
    transition: {
      duration: 1000,
      easing: 'linear'
    }
  }
})


export default class Team extends Component {
  state = {
    Img1: false,
    Img2: false,
    width: 900,
    clicked: false,
    viewedOn: true,
    mounted: false
  };

  componentDidMount(props) {
    
    this.setState((state, props) => {
      return {width: props.width}
    })
    
    setTimeout(() => this.setState({ mounted: true }), 100)

  }

  componentWillReceiveProps(nextProps, nextContext) {
    
    this.setState({width: nextProps.width})
  }

  aboutHandling(about, title, subtitle) {
    if (about.length < 550) {
      return about
    } else {
      return <>{about.substring(0, 540)} {

        <Modal 
          showModals={() => this.setState({clicked: true})}
          hideModals={() => this.setState({clicked: false})}
          opened={this.state.clicked }
          button={
          <div>Посмотреть</div>
        }
      >
          <div style={{padding: '2rem'}}>
          <Heading2>{title}</Heading2>
            <DefaultP color='black' fontSize='2.2rem'>
            {about}
            </DefaultP>
            </div>

        </Modal>}
      </>
    }
  }

  viewedOn() {
    this.setState({viewedOn: true})
  }

  render() {
    const {info, nav} = this.props;
    const { Img1, Img2, width } = this.state;
    
    const ssr = typeof window === "undefined"
    return (
      <InView threshold={0.3}>
        {({ inView, ref }) => (
          <Container ref={ref}>   
          {!this.state.viewedOn && inView && this.setState({viewedOn: true})}
            <Heading2 style={{ gridColumn: '1 / -1' }}>Наши врачи</Heading2>
            {width < 900 && <>
              <div style={{display: 'contents'}}>
                <TextBlock>
                  <Heading3>{info[0].title}</Heading3>
                  <HoryzontalLine color={Colors.primaryColor}/>
                  <h4>{info[0].subtitle}</h4>
                  <span>
                          <p>
                            {this.aboutHandling(info[0].about,info[0].title,info[0].subtitle )}
                          </p>
                        </span>
                </TextBlock>
                <div
                  onMouseEnter={event => this.setState({ Img1: true })}
                  onMouseLeave={event => this.setState({ Img1: false })}>
                  <AnimeCaption pose={ nav ? 'visible' : (Img1 ? 'moved' : 'initial')}>+380676005170</AnimeCaption>
                  <ImgAnimate pose={Img1 ? 'hovered' : 'unhovered'}>
                    {this.state.viewedOn && <AvatarOne
                      fluid={info[0].image.childImageSharp.fluid}
                      alt={info[0].title}
  /> }
                  </ImgAnimate>
                </div>
              </div>
              <div style={{display: 'contents'}}>
                <TextBlockSecond>
                  <Heading3>{info[1].title}</Heading3>
                  <HoryzontalLine color={Colors.primaryColor}/>
                  <h4>{info[1].subtitle}</h4>
                  <p>
                    {this.aboutHandling(info[1].about,info[1].title,info[1].subtitle )}
                  </p>
                </TextBlockSecond>
                <div
                  onMouseEnter={event => this.setState({ Img2: true })}
                  onMouseLeave={event => this.setState({ Img2: false })}
                >
                  <AnimeCaption pose={Img2 ? 'moved' : 'initial'}>+380963250379</AnimeCaption>
                  <ImgAnimate pose={Img2 ? 'hovered' : 'unhovered'}>
                    {this.state.viewedOn && <AvatarTwo
                      fluid={info[1].image.childImageSharp.fluid}
                      alt={info[1].title}
  /> }
                  </ImgAnimate>
                </div>
              </div>
            </>
            }
            {width >= 900 && <>
              <LeftAnimate 
              pose={nav ? "visible" : ( ssr || inView || !this.state.mounted ) ? "visible" : "invisible"}>
                <div
                  onMouseEnter={event => this.setState({ Img1: true })}
                  onMouseLeave={event => this.setState({ Img1: false })}>

                  {<AnimeCaption pose={Img1 ? 'moved' : 'initial'}>+380676005170</AnimeCaption>}
                  <ImgAnimate pose={Img1 ? 'hovered' : 'unhovered'}
                  >
                    {this.state.viewedOn && <AvatarOne
                      fluid={info[0].image.childImageSharp.fluid}
                      alt={info[0].title}
  /> } 
                  </ImgAnimate>
                </div>
                <TextBlockSecond>
                  <HoryzontalLine color={Colors.primaryColor}/>
                  <Heading3>{info[1].title}</Heading3>
                  <h4>{info[1].subtitle}</h4>
                  <p>
                    {this.aboutHandling(info[1].about,info[1].title,info[1].subtitle )}
                  </p>
                </TextBlockSecond>
              </LeftAnimate>
              <RightAnimate  
              pose={nav ? "visible" : ( ssr || inView || !this.state.mounted ) ? "visible" : "invisible"}>
                <TextBlock>
                  <HoryzontalLine color={Colors.primaryColor}/>
                  <Heading3>{info[0].title}</Heading3>
                  <h4>{info[0].subtitle}</h4>
                  <span>
                          <p>
                            {this.aboutHandling(info[0].about,info[0].title,info[0].subtitle )}
                          </p>
                        </span>
                </TextBlock>
                <div
                  onMouseEnter={event => this.setState({ Img2: true })}
                  onMouseLeave={event => this.setState({ Img2: false })}>
                  {<AnimeCaption pose={Img2 ? 'moved' : 'initial'}>+380963250379</AnimeCaption>}
                  <ImgAnimate pose={Img2 ? 'hovered' : 'unhovered'}
                  >
                    {this.state.viewedOn &&  <AvatarTwo
                      fluid={info[1].image.childImageSharp.fluid}
                      alt={info[1].title}
  /> }
                  </ImgAnimate>
                </div>
              </RightAnimate>
            </>
            }
          </Container>
        )}
      </InView>
    );
  }
}
