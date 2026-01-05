import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import {
  Container,
  GridWrapper,
  SmallInfo,
  InfoWrapper,
  AnimatedContainer,
  MobileContainer,
  NavWrapper
} from "./menu.css";
import Nav from "components/menu/nav";
import LogoAnimation from "./logo";
import { BackgroundSection, MenuButton, SpanLines } from "../utils";
import { WrapperEl } from "./nav/nav.css";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
import Icons from "../../components/icons/icons";
import { Consumer } from "store/createContext";

export default class TopMenu extends Component {
  state = {
    isVisible: false,
    width: 900
  };

  componentDidMount() {
    this.setState((state, props) => {
      return { width: props.width };
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    nextProps.width !== this.state.width &&
      this.setState({ width: nextProps.width });
  }

  render() {
    const { width, isVisible } = this.state;
    const { referrer, inView = true } = this.props;
    const ssr = typeof window === "undefined";
    return (
      <Consumer>
        {({ open }) =>
          width >= 600 ? (
            <Container ref={referrer} id={"header"}>
              {!open && (
                <SmallInfo isVisible={ssr || inView}>
                  <InfoWrapper>
                    <span>
                      <b style={{ color: "#797979" }}>
                        <span style={{ color: "red" }}>&#8962;</span>
                      </b>{" "}
                      ул. Екатерины Великой 77/4, офиc 59, Мелитополь{" "}
                    </span>
                    <span>
                      <b style={{ color: "#797979" }}>&#128222;</b> +7 990
                      228-30-50
                    </span>

                    <span>
                      <b style={{ color: "#797979" }}>&#128222;</b> +7 990
                      155-76-07
                    </span>
                    <Icons height="2rem" />
                  </InfoWrapper>
                </SmallInfo>
              )}
              <GridWrapper>
                <InView>
                  {({ inView, ref }) => (
                    <LogoAnimation referrer={ref} isVisible={ssr || inView} />
                  )}
                </InView>
                <AnimatedContainer>
                  <Location>
                    {({ location }) => {
                      return <Nav path={location.pathname} />;
                    }}
                  </Location>
                </AnimatedContainer>
              </GridWrapper>
            </Container>
          ) : (
            <MobileContainer id={"header"}>
              {!open && width > 250 && (
                <SmallInfo ref={referrer} isVisible={false}>
                  <InfoWrapper>
                    <span>
                      <b style={{ color: "#797979" }}>&#8962;</b> ул.Екатерины
                      Великой 77/4, офиc 59
                    </span>
                    <span>
                      <b style={{ color: "#797979" }}>&#128222;</b> +7 990
                      228-30-50
                    </span>
                    <span>
                      <b style={{ color: "#797979" }}>&#128222;</b> +7 990
                      155-76-07
                    </span>
                    {width > 450 && <Icons height="1.6rem" />}
                  </InfoWrapper>
                </SmallInfo>
              )}
              <InView>
                {({ inView, ref }) => (
                  <LogoAnimation
                    referrer={ref}
                    padding={"4rem 1rem 5rem 0"}
                    isVisible={ssr || inView}
                  />
                )}
              </InView>
              {!open && (
                <MenuButton
                  isVisible={isVisible}
                  onClick={() => this.setState({ isVisible: !isVisible })}
                >
                  <SpanLines isVisible={isVisible} />
                </MenuButton>
              )}
              }}
              <NavWrapper path={true} isVisible={isVisible}>
                <div />
                <ul>
                  <WrapperEl path={true}>
                    <Link to="/">Главная</Link>
                  </WrapperEl>
                  <WrapperEl path={true}>
                    <Link to="/blog">Блог</Link>
                  </WrapperEl>
                  <WrapperEl path={true}>
                    <Link to="/about">О НАС</Link>
                  </WrapperEl>
                  <WrapperEl path={true}>
                    <Link to="/service">УСЛУГИ</Link>
                  </WrapperEl>
                  <WrapperEl path={true}>
                    <Link to="/contact">КОНТАКТЫ</Link>
                  </WrapperEl>
                </ul>
              </NavWrapper>
            </MobileContainer>
          )
        }
      </Consumer>
    );
  }
}

TopMenu.propTypes = {
  title: PropTypes.string.isRequired
};
