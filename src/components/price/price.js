import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'
import { Colors } from '../../constants/theme';
import {Heading2, Heading3} from '../utils/style'
import breakpoints from '../../constants/breakpoints'

const { TABLET, PHONE } = breakpoints;

const sidebarProps = {
  open: {
    y: '10%',
    borderRadius: '25px 25px 0px 0px',
    transition: {
      duration: 600,
      ease: 'linear',
    }
  },
  closed: {
    y: '0%',
    borderRadius: '25px 25px 25px 20px',
    transition: {
      duration: 300,
      ease: 'linear',
    }
  }
};

const contentProps = {
  open: {
    height: 'auto',
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 60,

    transition: {
      duration: 600,
      type: 'spring', stiffness: 100, damping: 15
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 300,
      type: 'spring', stiffness: 200, damping: 210
    },
    delay: 100
}
}

const listProps = {
  open: {
    x: 0,
    height: 'initial',
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 60
  },
  closed: {
    height: 0,
    opacity: 0,
    delay: 500,
    staggerChildren: 20,
  }
}
const itemProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 }
};
const PanelWrapper = styled.div`
  margin: auto;
  background-color: ${Colors.primaryColorDarkest};
  cursor: pointer;
  width: 100%;
  border: 25px;
  height: ${({height}) => height || '7rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;
`
const ItemWrapper = styled.li`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  span {
    color: white;
    font-size: 3rem;
    padding: 0 5rem;
  @media (max-width: ${PHONE}px) {
    padding: 0 2rem;
  }
  }

`
const ListWrapper = styled.ul`
  background-color: grey;
  display: flex;
  flex-direction: column;
  opacity: 0;
  margin-bottom: 3rem;
`
const Container = styled.div`
  //height: 100%;
  width: 100%;
  grid-column: center-start / span 2;
  overflow: hidden;
  h5 {
    font-size: 3rem;
    font-weight: 600;
    color: ${Colors.primaryColorDarkest};
  }
  h6 {
    font-size: 2.8rem;
    color: ${Colors.colorGreyLight3};
    font-style: italic;
  }
  h5, h6 {
    text-align: center;
  }
`
const ContentWrapper = styled.div`
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  padding: 0rem ${({padding}) => padding};
  background-color: white;
  p {
    font-size: 1.9rem;
    line-height: 1.5em;
  padding: ${({padding}) => padding};
  color: ${({color}) => color || '#575f75'};
  }

`

const Panel = posed(PanelWrapper)(sidebarProps)
const Item = posed(ItemWrapper)(itemProps)
const List = posed(ListWrapper)(listProps)
const Content = posed(ContentWrapper)(contentProps)


export class ExpandedWindow extends Component {
  state = { isOpen: false}

  componentDidMount() {
    this.props.nav && this.setState({ isOpen: true })
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const {name, content,color} = this.props
    return (
      <Container>
        <Panel
          height={'5rem'}
          onClick={this.toggle}
          pose={this.state.isOpen ? 'open' : 'closed'}
        >
          <Heading3 lineheight={1.5} color={'white'} padding={'0rem 2rem'} letterSpacing={'1rem'}>{name}</Heading3>
        </Panel>
        <Content color={color} padding={this.state.isOpen ? '1rem' : '0'} pose={this.state.isOpen ? 'open' : 'closed'}>
          <div dangerouslySetInnerHTML={ {__html: content}} />
        </Content>
      </Container>
    )
  }
}

export class PriceList extends Component {
  state = { isOpen: false}

  componentDidMount() {
    this.props.nav && this.setState({ isOpen: true })
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const {items, title} = this.props;

    return (
      <Container>
        <Panel
          height={'5rem'}
          onClick={this.toggle}
          pose={this.state.isOpen ? 'open' : 'closed'}
        >
          <Heading3 color={'white'} letterSpacing={'1rem'}>{title}</Heading3>
        </Panel>
        <List pose={this.state.isOpen ? 'open' : 'closed'}>
          {items.map( (item, i) => <Item pose={this.state.isOpen ? 'open' : 'closed'} key={i}>
              <span>{item.name}</span>
            <span>{item.price}</span>
            </Item>
            )}
        </List>
        </Container>
    )
  }
}
