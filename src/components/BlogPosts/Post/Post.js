import React, {Component} from 'react'
import Img from 'gatsby-image';
import styled from 'styled-components'
import Modal from '../../../containers/modal';
import { Heading3, Heading2, HoryzontalLine,DefaultP } from '../../utils/style';
import breakpoints from '../../../constants/breakpoints';
import MultiImages from './MultiImages'
import { Colors } from '../../../constants/theme';
const { DESKTOP, PHONE, TABLET } = breakpoints;


const MultiIcon = styled.span`
  background: url( ${({url}) => url || '50rem'}) center center no-repeat;
  background-size: 65px 65px;
  background-position: 0 0
  position: absolute;
  width: 30px;
  height: 30px;
  top: 3px;
  right: 3px;
`;

const Heading = styled(Heading3)`
  height: 4rem;
  display: flex;
  align-items: end;
  @media (max-width: ${TABLET}px) {
    height: auto;
  }
`;

const ImageBlock = styled(Img)`
  height: ${({height}) => height || '50rem'};
  
  @media (max-width: ${DESKTOP}px) {
    height: 30rem;
  }
  width: 100%;
  border-radius: 3px;
  margin: 2rem 0;
`;

const BigImageBlock = styled(Img)`
  height: 80vh;
  width: 100%;
  border-radius: 3px;
  margin: 2rem 0;
`;

const PostContainer = styled.div`
  margin-bottom: ${({padding}) => padding || '5rem'};
`

const DateFormat = styled.div`
  color: ${Colors.coloGreyLight2};
  margin-top: 1rem;
`

export default class Post extends Component {
  state = {
    clicked: false
  }
  handleDescription = (desc, config) => {
    if (config && desc.length > 50) {
      return `${desc.substring(0, 50)}...`
    }
    return desc
  }
  onClickHandler = (i) => {
    this.setState({clicked: i})
  }
  render() {
    const {title, image, description, date, config, imageArr, i,multiImage}= this.props;
    
    return (
      <PostContainer padding={config && '1rem'} >
        <div style={{display: 'flex', justifyContent: 'center'}} >
        {config ? <Heading  padding={'0rem'} >{title}</Heading> : <Heading2>{title}</Heading2>}
        </div>
        {/* {date} */}
        <div style={{position: 'relative'}} onClick={() => this.setState({clicked: i})}>
          
        {imageArr ? 
        <>
        <ImageBlock height={config && config.imageHeight} fluid={imageArr[0].fluid}></ImageBlock>
        { imageArr.length > 1 && <div style={{position: 'absolute', top: '0', right: '0'}}>
          <MultiIcon url={this.props.multiImage.publicURL} />
        </div> }
        </>
        : <ImageBlock height={config && config.imageHeight} fluid={image.fluid}/>
        }
        </div> 
        
        <DefaultP color='black' fontSize={config ? '1.5rem' :'2.2rem'}>
          {this.handleDescription(description, config)}
        </DefaultP>
        <Modal
              showModals={() => this.setState({clicked: i})}
              hideModals={() => this.setState({clicked: false})}
              opened={this.state.clicked === i}
              styleProps={{
                padding: '10rem'
              }}
              button={
              <div style={{fontSize: '1.7rem'}}>Посмотреть 	&rarr;</div>
            }>
              <Heading2 color={"black"} fontweight={'400'} padding={'2rem 0rem 1rem 0rem'}>{title}</Heading2>
          {imageArr ? 
          <MultiImages length={imageArr.length} images={imageArr} description={description}> 
          </MultiImages>
          : <MultiImages  description={description} length={1} height={config && config.imageHeight} images={[image]}/> }
        
        <DefaultP color='black' fontSize='2.2rem'>
              {description}
        </DefaultP>
            </Modal>
        {date && <DateFormat>
        Андрей Локошко | {date} назад
        </DateFormat>}
      </PostContainer>
    )
  }
}
