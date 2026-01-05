import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import { graphql } from "gatsby";
import Header from "components/header";
import Features from "components/main/features/features.js";
import Satisfaction from "components/main/satisfaction/satisfaction";
import Team from "components/main/team/team";

import Posts from "components/main/posts";
import Services from "components/main/services/services";
import MyMapComponent from "components/main/location/location.js";
import YandexMap from "components/main/location/yandex.js";

import Advertising from "components/advertising/advertising.js";
import Contact from "components/main/contact/contact.js";
import { ScrollTop } from "../components/utils";
import { FaChevronUp } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import { Heading1 } from "../components/utils/style";
import Typing from "../components/autotype/typing";
import MyCarousel from "../components/carousel/carousel";
import { SVGLoader } from "../constants/svg";
import styled from "styled-components";
import Img from "gatsby-image";

const Author = styled.p`
  align-self: center;
  margin-top: 2rem;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <Advertising bg={data.homeJson.advertising} />
      <InView>
        {({ inView, ref }) => (
          <>
            <Header
              Scroll={true}
              to={"#services"}
              inView={inView}
              refLink={ref}
              bg={data.homeJson.header}
            >
              <div>
                <Heading1 marginBottom={10}>
                  {data.homeJson.header.title}
                </Heading1>
                <Typing data={data.homeJson.header.autotype} />
              </div>
            </Header>
            {!inView && (
              <ScrollTop to={"#header"}>
                <FaChevronUp />
              </ScrollTop>
            )}
          </>
        )}
      </InView>
      <Services bg={data.homeJson.services} />
      <Posts posts={data.blogs.edges} multiImage={data.homeJson.multiImage} />
      <MyCarousel
        content={data.homeJson.content}
        head={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3rem",
              height: "4rem",
              width: "12rem"
            }}
          >
            <SVGLoader name="usd" width={"4"} />
            <SVGLoader name="usd" width={"4"} />
            <SVGLoader name="usd" width={"4"} />
          </div>
        }
        slides={data.homeJson.comments.map(({ comment }) => {
          return (
            <Comment>
              <p>{comment.childMarkdownRemark.frontmatter.content}</p>
              <Author>{comment.childMarkdownRemark.frontmatter.author}</Author>
            </Comment>
          );
        })}
      />
      <Team info={data.homeJson.team} />
      <Features bg={data.homeJson.features} />
      <Contact />
      <YandexMap
        referrer={""}
        image={data.homeJson.location.image}
        title={data.homeJson.location.title}
        inView={true}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Satisfaction bg={data.homeJson.satisfaction} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    blogs: allContentfulBlogPost(
      sort: { fields: createdAt, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
          createdAt
          imageTest {
            fluid(maxWidth: 2500) {
              ...GatsbyContentfulFluid
            }
          }
          image {
            fluid(maxWidth: 2500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    homeJson {
      multiImage {
        publicURL
      }
      location {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }

      comments {
        comment {
          childMarkdownRemark {
            frontmatter {
              content
              author
            }
          }
        }
      }
      header {
        title
        autotype
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      title
      team {
        title
        subtitle
        about
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      services {
        avatars {
          title
          description
          image {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        bg {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      advertising {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      features {
        title
        items {
          name
          title
          text
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      satisfaction {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
