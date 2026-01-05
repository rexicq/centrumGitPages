import React, { Component } from "react";
import styled from "styled-components";
import { Heading3, Heading2, Heading1 } from "../utils/style";
import { Colors } from "../../constants/theme";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const isBrowser = typeof window !== "undefined";
export const Button = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "3.5rem"};
  margin: ${({ margin }) => margin || "0"};
  border-radius: 0.5rem;
  border: none;
  background: ${({ color }) => color || Colors.primaryColorDarken};
  color: white; /* текст всегда белый */
  font-size: ${({ size }) => size || "1.6rem"};
  font-weight: ${({ weight }) => weight || 500};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 2;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  span {
    position: relative;
    z-index: 2; /* текст поверх анимации */
    color: white; /* гарантируем белый текст всегда */
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: ${({ hoverColor }) =>
      hoverColor || "rgba(255, 255, 255, 0.1)"}; /* мягкий overlay */
    z-index: 1;
    transition: height 0.3s ease;
  }

  :hover::after {
    height: 100%;
  }

  :active {
    transform: scale(0.97);
  }

  :disabled {
    background: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: ${({ size }) => size || "1.4rem"};
    height: ${({ height }) => height || "3rem"};
  }
`;

Button.defaultProps = {
  color: Colors.primaryColorDarken,
  hoverColor: "rgba(255, 255, 255, 0.1)",
  size: "1.6rem",
  weight: 500,
  width: "100%",
  height: "3.5rem"
};

/* === STYLES === */

const PopupCard = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  width: 480px;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

const PhoneLink = styled.a`
  color: ${Colors.colorBlack};
  font-weight: 600;
  font-size: 2.6rem;
  text-decoration: none;
  display: block;
  margin-top: 0.5rem;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none; /* убираем стандартную обводку */
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2); /* можно добавить свою лёгкую тень вместо стандартной */
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;

/* === COMPONENT === */

export default class Advertising extends Component {
  state = {
    clicked: true,
    isClient: false
  };

  componentDidMount() {
    this.setState({ isClient: true }); // теперь мы точно на клиенте
  }

  render() {
    const { bg } = this.props;
    const { isClient, clicked } = this.state;

    if (!bg || !isClient) return null; // рендерим только на клиенте

    return (
      <Popup
        open={this.state.clicked}
        modal
        closeOnDocumentClick
        contentStyle={{
          padding: 0,
          border: "none",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "70vw"
        }}
      >
        <PopupCard>
          <div>
            <Heading1 color="black">Кабинет УЗИ "ЦЕНТРУМ"!</Heading1>
            <br />
            <Heading2
              fontsize="3"
              fontsizeM="2.5"
              color="black"
              padding="0px"
              lineheight="2"
            >
              Кабинет УЗИ работает в период январских праздников во все дни,
              кроме 1 и 7 января, а также суббот и воскресений.
              <br />
              <br />
              Запись по телефону:
            </Heading2>

            <PhoneLink href="tel:+79902283050">+7 990 228-30-50</PhoneLink>
            <PhoneLink href="tel:+79901557607">+7 990 155-76-07</PhoneLink>

            <ButtonWrapper>
              <Button
                width="100%"
                height="5rem"
                onClick={() => this.setState({ clicked: false })}
              >
                <Heading3 color="white">Спасибо</Heading3>
              </Button>
            </ButtonWrapper>
          </div>
        </PopupCard>
      </Popup>
    );
  }
}
