import React, { Component } from 'react';
import { Title, ButtonWrapper, Wrapper, StyledSpan } from './services.css';
import Item from './item/item';
import { BackgroundSection, Button } from '../../utils';
import { InView } from 'react-intersection-observer';
import { Link } from 'gatsby';
import uid from 'uid'

export default class services extends Component {

  constructor() {
    super()
    this.state = {
      viewed: true,
      mounted: false
    }
  }

  componentDidMount() {
    console.log('mounted')
    setTimeout(() => this.setState({ mounted: true }), 100)
  }

  render() {
    const { bg, nav } = this.props;
    const { viewed } = this.state;
    
  const ssr = typeof window === "undefined"
    return (
      <InView threshold={0.1}>
        {({ inView, ref }) => (
          <BackgroundSection
            styleName={'imgbg featuresbg'}
            img={bg.bg.image}
          >
            <Wrapper
              id={"services"}
              ref={ref}
              {...this.props}
              
              pose={nav ? "visible" : ( ssr || inView || !this.state.mounted ) ? "visible" : "invisible"}
            >
                {!viewed && inView && this.setState({ viewed: true })}
                {viewed && <>
                <Title key={uid()}>Услуги УЗИ</Title>
                {bg.avatars.map((item, i) => (
                  <Item nav={nav} key={uid()} image={item} alt={''} />
                ))}
                <ButtonWrapper key={uid()}>
                  <Link to={'/service'} style={{width: '100%'}}>
                  <Button height="4rem" width={'80%'}>
                    <StyledSpan>Все услуги &rarr;</StyledSpan>
                  </Button>
                  </Link>
                </ButtonWrapper>
                </>}
            </Wrapper>
          </BackgroundSection>
        )}
      </InView>
    );
  }
}
