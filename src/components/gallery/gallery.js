import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import uid from "uid";
import { DefaultP, Heading2 } from "../utils/style";
import Modal from "../../containers/modal";

export const Gallery = styled.section`
  grid-column: full-start / full-end;
  background-color: ${({ bg }) => bg};
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
export const Item = styled.div`
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
`;

class Gallerye extends Component {
  constructor(props) {
    super(props);

    this.position = {
      0: {
        row: "1 / span 3",
        column: "1 / span 3"
      },
      1: {
        row: "1 / span 3",
        column: "4 / span 3"
      },
      2: {
        row: "1 / span 2",
        column: "7 / -1"
      },
      3: {
        row: "4 / span 4",
        column: "1 / span 2"
      },
      4: {
        row: "4 / span 4",
        column: "3 / span 4"
      },
      5: {
        row: "3 / span 1",
        column: "7 / span 2"
      },
      6: {
        row: "8 / span 3",
        column: "1 / span 2"
      },
      7: {
        row: "4 / span 2",
        column: "7 / span 2"
      },
      8: {
        row: "6 / span 5",
        column: "7 / span 2"
      },

      9: {
        row: "8 / span 3",
        column: "3 / span 4"
      }
    };
  }

  state = {
    clicked: false
  };

  render() {
    const { imgs, bg } = this.props;
    const position = this.position;
    return (
      <Gallery bg={bg}>
        {imgs.map(({ image, title }, i) => {
          return (
            <Item row={position[i].row} column={position[i].column}>
              <Modal
                showModals={() => this.setState({ clicked: i })}
                hideModals={() => this.setState({ clicked: false })}
                opened={this.state.clicked === i}
                styleProps={{
                  padding: 0
                }}
                button={<Img fluid={image.childImageSharp.fluid} />}
              >
                {/*<Heading2>{title}</Heading2>*/}
                <Img fluid={image.childImageSharp.fluid} />
              </Modal>
            </Item>
          );
        })}
      </Gallery>
    );
  }
}

export default Gallerye;
