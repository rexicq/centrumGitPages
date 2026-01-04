import React from 'react'
import Img from 'gatsby-image';
import {HeadTitle, WrapperDiag, About, ImgBlock, Container, FlexWrapper} from './servicePrice.css'
import { PriceList, ExpandedWindow } from '../../components/price'
import uid from 'uid'

export default ({name, image, items, priceTitle, color, contents, textcolor, nav}) => {
  return (
    <Container color={color}>
    <FlexWrapper>
      <HeadTitle>{name}</HeadTitle>
      <WrapperDiag>
        <About>
          {contents.map(({content, name}) => {
            return  <ExpandedWindow
              nav={nav}
              key={uid(35)}
              color={textcolor}
              name={name}
              content={content.childMarkdownRemark.html}/>
          })}
        </About>
          <ImgBlock objectFit='contain' fluid={image.childImageSharp.fluid}/>
      </WrapperDiag>
      <PriceList title={priceTitle} items={items} nav={nav}/>
    </FlexWrapper>
    </Container>
  )
}
