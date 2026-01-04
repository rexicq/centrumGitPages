import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import Header from 'components/header';
import { Heading1 } from '../components/utils/style';
import ServicePrice from '../components/servicePrice/ServicesPrice';
import uid from 'uid'

const Service = ({ data }) => {
  return (
    <Layout header={'small'}>
      <Head description={data.serviceJson.description} pageTitle={data.serviceJson.title} />
      <Header bg={data.serviceJson.header} to={'contact/#location'}>
        <Heading1>Услуги</Heading1>
      </Header>
      {data.serviceJson.services.map( service => {
        return <ServicePrice
          key={uid()}
          color={service.color}
          items={service.prices}
          name={service.name}
          image={service.image}
          priceTitle={service.priceTitle}
          contents={service.contents}
          textcolor={service.textcolor}
        />;
      })}
    </Layout>
  );
};

Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Service;

export const query = graphql`
  query ServiceQuery {
    serviceJson {
      title
      description
      services {
        color
        textcolor
        name
        priceTitle
        prices {
          name
          price
        }
        contents {
          name
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        image {
          childImageSharp {
            fluid {
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
    }
  }
`;

// export const query = graphql`
//   query ServiceQuery {
//     serviceJson {
//       title
//       pricesSON {
//         name
//         price
//       }
//       machines {
//          image {
//           childImageSharp {
//             fluid(maxWidth: 2000) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//       pricesGAS {
//         name
//         price
//       }
//       header {
//       image {
//           childImageSharp {
//             fluid(maxWidth: 2000) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//         }
//     }
//   }
// `;
