import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Head from "components/head";
import Header from "components/header";
import { Heading1, Heading2, DefaultP } from "../components/utils/style";
import Form from "../components/Form";
import YandexMap from "components/main/location/yandex.js";

import styled from "styled-components";
import { Colors } from "../constants/theme";
import breakpoints from "../constants/breakpoints";
import { BackgroundSection } from "../components/utils";

const { TABLET, DESKTOP } = breakpoints;

const Container = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${DESKTOP}px) {
    display: flex;
    flex-direction: column;
  }
`;

const RightSide = styled.div`
  height: 80vh;
  background-color: ${Colors.primaryColorDarken};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 80%;
    height: initial;
    color: white;
  }
`;

const About = styled.div`
  width: 80%;
  margin: auto;
`;

const BackWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media (max-width: ${TABLET}px) {
      justify-content: start;
    }
  }
`;

const Paragraph = styled(DefaultP)`
  color: black;
  fontsize: 3.5rem;
  padding: 1rem 0;
  @media (max-width: ${TABLET}px) {
    font-size: 3rem;
    line-height: 1.2;
  }
`;

const Contact = ({ data }) => (
  <Layout header={"small"}>
    <Head
      description={data.contactJson.description}
      pageTitle={data.contactJson.title}
    />
    <Header bg={data.contactJson.header} to={"contact/#location"}>
      <Heading1>Свяжитесь с нами</Heading1>
    </Header>
    <Container>
      <BackWrapper>
        <BackgroundSection backg img={data.contactJson.subheader.image}>
          <About>
            <Heading2 padding={"2rem 0"} color={"white"} fontweight={"600"}>
              Как нас найти
            </Heading2>
            <Paragraph>
              Мы находимся в самом центре города,улица Екатерины Великой (бывшая
              Интеркультурная) 77/4,офис 59,второй этаж.Рядом с ТЦ "Амстор",300
              метров от центральной улицы города-проспектом Б.Хмельницкого.
              <br />
              Добираться общественным транспортом до остановки
              "Агроуниверситет"(бывшая "Свердлова") или до
              ост."Покровская"(бывшая "Луначарского").
            </Paragraph>
          </About>
        </BackgroundSection>
      </BackWrapper>
      <RightSide>
        <Heading2 padding={"2rem 0"} color={"white"} fontweight={"600"}>
          Напишите нам на почту
        </Heading2>
        <Form color={"white"} />
      </RightSide>
    </Container>
    <YandexMap
      inView={true}
      id="contact"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `600px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    {/*<Box>*/}
    {/*<div*/}
    {/*dangerouslySetInnerHTML={{*/}
    {/*__html: data.aboutJson.content.childMarkdownRemark.html,*/}
    {/*}}*/}
    {/*/>*/}
    {/*</Box>*/}
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export default Contact;

export const query = graphql`
  query ContactPageQuery {
    contactJson {
      title
      description
      subheader {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      header {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
