import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Container, WrapperEl } from './nav.css';
import { MenuButton, SpanLines } from '../../utils/MenuButton';
import Media from 'react-media';
import { Colors } from '../../../constants/theme';

export default class nav extends Component {
  state = {
    isVisible: false,
  };
  render() {
    const { path } = this.props;
    const { isVisible } = this.state;
    return (
      <Container path={path === '/' && true}>
        <ul>
          <WrapperEl path={path === '/' && true}>
            <Link to="/">Главная</Link>
          </WrapperEl>
          <WrapperEl path={path === '/about' && true}>
            <Link to="/about">О нас</Link>
          </WrapperEl>
          <WrapperEl path={path === '/service' && true}>
            <Link to="/service">Услуги</Link>
          </WrapperEl>
          <WrapperEl path={path === '/contact' && true}>
            <Link to="/contact">контакты</Link>
          </WrapperEl>
          <WrapperEl path={path === '/blog' && true}>
            <Link to="/blog">блог</Link>
          </WrapperEl>
          {/*<li>*/}
          {/*<Link to="/#cold-pressed">Cold Pressed</Link>*/}
          {/*</li>*/}
        </ul>
      </Container>
    );
  }
}
