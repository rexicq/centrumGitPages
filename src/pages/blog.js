import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import Header from 'components/header';
import { Heading1, Heading2, DefaultP } from '../components/utils/style';
import BlogPosts from '../components/BlogPosts/blogPosts'

const Blog = ({data}) => (
  <Layout header={"small"}>
  <Head description={'Узи Центрум Мелитополь Блог'} pageTitle={'Head'} />
  <Header bg={data.blog.header} to={"contact/#blog"}>
    <Heading1>Наш Блог</Heading1>
  </Header>
  <BlogPosts posts={data.blogs.edges} multiImage={data.blog.multiImage}/>
  </Layout>
)

export default Blog

export const query = graphql`
{
    blog: blogJson{
      multiImage {
        publicURL
      }
      header {
        image{
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    },
    blogs:   allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          title
          description {
            description
          }
          createdAt
          imageTest{
            fluid(maxWidth: 2500) {
              ...GatsbyContentfulFluid
              }
          }
          image{
            fluid(maxWidth: 2500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
        }
      }
      }
    }
  }
`