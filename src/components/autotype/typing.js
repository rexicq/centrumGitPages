import React, { Component } from 'react';
import uid from 'uid';
import { Wrapper, Container,Check } from './typing.css';
import { DefaultP } from '../utils/style';
import Typist from 'react-typist';


export default class Typing extends Component {
  state = {
    typistIndex: 1,
  };
  render() {
    const { typistIndex } = this.state;
    const {data} = this.props;
    return (
      <Container>
        <p>Мы гарантируем</p>
        <Check
          key={typistIndex}
          onTypingDone={() =>
            this.setState(state => ({ typistIndex: state.typistIndex + 1 }))
          }
        >
          {data.map(
            word => [
              <div key={uid()}> {word}</div>,
              <Typist.Backspace key={uid()} count={word.length} delay={2000} />,
            ]
          )}
        </Check>
      </Container>
    );
  }
}
