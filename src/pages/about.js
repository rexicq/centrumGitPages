import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import Header from 'components/header';
import { Heading1, Heading2, DefaultP } from '../components/utils/style';
import Gallery from '../components/gallery'
import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';
import { Colors } from '../constants/theme';

const { DESKTOP, TABLET } = breakpoints;

const Content = styled.div`
  padding: 5rem;
  text-align: center;
  grid-column: center-start / center-end;
  text-align: initial;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${DESKTOP}px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${TABLET}px) {
  grid-column: 1 / -1;
  }

`

const Text = styled(DefaultP)`
  color: black;
  margin: 2rem 0;
  font-size: 2rem;
`

const Heading = styled(Heading2)`
  text-align: initial;
  margin: 2rem auto;
`

const About = ({ data }) => (
  <Layout header={"small"}>
    <Head description={data.aboutJson.description} pageTitle={data.aboutJson.title} />
    <Header bg={data.aboutJson.header} to={"contact/#location"}>
      <Heading1>О Нас</Heading1>
    </Header>
    <Content>
    <Heading color='black'>
      Узнайте больше про нас
    </Heading>
      <div>
      <Text >
        УЗИ "Центрум"-медицинский кабинет ,который начал работать с января 2019 года.
        Приём пациентов ведут:Локошко Андрей Анатольевич,врач УЗД первой категории с 23-летним стажем работы и Локошко Таисия Федоровна,врач гастроэнтеролог высшей категории со стажем работы более 20 лет.
      </Text>
        <Text >
        В кабинете сделан ремонт современными материалами,оснащен всей необходимой бытовой и медицинской техникой. Обследования проводятся на аппарате японского производства эксперт класса Toshiba Aplio XG.
        Для безопасности пациентов и сотрудников установлен бактерицидный рециркулятор "Бактосфера",который обеззараживает воздух от бактерий и вирусов.
      </Text>
        <Text color='black'>
        Для удобства пациентов санузел расположен в офисе.
        Уборка в помещении производится 2 раза в день:до и после окончания работы.
        Для обследования бесплатно предоставляются бахилы, одноразовые простыни и полотенца.
        </Text>
        <Text color='black'>
        После приема выдаётся заключение,снимки; даются рекомендации и назначения.
        Уютная обстановка,внимательные и квалифицированные сотрудники ждут Вас в медицинском кабинете УЗИ "Центрум"!
      </Text>
      </div>
    </Content>
    <Gallery bg={'#c1c1c1'} imgs={data.aboutJson.gallery}/>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      description
      gallery {
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
      image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
