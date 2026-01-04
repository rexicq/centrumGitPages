import { Heading1 } from '../utils/style';
import Typing from './header';
import { BackgroundSection } from '../utils';
import Header from './header'

import React, { Component } from 'react'

export default class mainHeader extends Component {
  render() {
    return (
      <Header {...this.props}>
        <Heading1 marginBottom={10}>
          добро пожаловать в медицинский центр
        </Heading1>
        <Typing />
      </Header>
    )
  }
}
