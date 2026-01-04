import React, { Component } from 'react'

import { InView } from 'react-intersection-observer';

export default class AutoLoad extends Component {
  componentWillReceiveProps(nextProps) {
    nextProps.inView && !nextProps.loading && nextProps.onLoad()
    nextProps.loading && !nextProps.inView && nextProps.loadOff()
  }
  render() {
    const {refLink, inView} = this.props
    return (
      <div ref={refLink} style={{ height: '100px'}}>
        
      </div>
    )
  }
}
