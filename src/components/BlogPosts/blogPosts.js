import React, { Component } from 'react'
import Post from './Post'
import styled from 'styled-components'
import breakpoints from '../../constants/breakpoints';
import AutoLoad from './AutoLoad'

import { InView } from 'react-intersection-observer';
import { Button } from '../utils';
const { DESKTOP, TABLET } = breakpoints;

const Content = styled.div`
  padding: 5rem;
  text-align: center;
  grid-column: center-start / center-end;
  text-align: initial;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: ${DESKTOP}px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${TABLET}px) {
  grid-column: 1 / -1;
  }
`
function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " год(а)";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + ` ${interval === 1 ? "месяц" : " месяц(а, ев)"}`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + ` ${interval === 1 ? "день" : "дн(я, ей)"}`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + ` ${interval === 1 ? "час" : " час(а, ов)"}`;
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + ` ${interval === 1 ? " минута" : " минут(а, ы)"}`;
  }
  return Math.floor(seconds) + " секунд(ы)";
}

export default class blogPosts extends Component {
  state = {
    page: 1,
    chunksPerPage: 2,
    allLoaded: false,
    loading: false
  }

  renderPosts = (posts, multiImage) => {
    var FormatedDate = [...posts]
    let { page, chunksPerPage } = this.state
    
    let ChunkedPosts =  [...FormatedDate.splice(0, page * chunksPerPage )]
    
    return ChunkedPosts.map(
      ({node}) => {
        FormatedDate = timeSince(new Date(node.createdAt))
        
        return <Post 
          key={node.id}
          date={FormatedDate} 
          description={node.description.description}
          multiImage={multiImage}
          imageArr={node.imageTest}
          image={node.image} 
          title={node.title} 
          />
      }
      )
  }

  onLoad = () => {
    let { page, chunksPerPage } = this.state
    let { posts } = this.props
    let allLoaded = (page + 1) * chunksPerPage >= posts.length
    this.setState({ page: page + 1, allLoaded: allLoaded, loading: true })
  }

  render() {
    const {posts, multiImage} = this.props;
    const {allLoaded, loading } = this.state;
    
    return (
      <Content>
        {posts && this.renderPosts(posts, multiImage)}
        <Button height="4rem" width={'80%'} margin={"auto"} onClick={this.onLoad} disabled={allLoaded}>
          <span>Загрузить еще</span>
        </Button>
        <InView>
        {({ inView, ref }) => (
          <AutoLoad
          inView={inView}
          refLink={ref}
          onLoad={this.onLoad}
          loading={loading}
          loadOff={() => this.setState({loading: false})}
        />
        )}
        </InView>
      </Content>
    )
  }
}
