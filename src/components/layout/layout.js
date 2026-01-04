import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Head from "components/head";
import TopMenu from "components/menu";
import GlobalStyle from "global.css.js";
import { Container } from "./layout.css";
import Footer from "components/footer/footer.js";
import useWindowDimensions from "../../helpers/PageWidth";
import { InView } from "react-intersection-observer";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ data, children, header }) => {
  let sizes = { width: 900 };
  let nav = false;

  sizes = useWindowDimensions();
  if (typeof navigator !== "undefined") {
    // eslint-disable-next-line global-require
    nav = navigator.userAgent.includes("Googlebot");
  }
  console.log("width: ", sizes.width);
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { width: sizes.width, nav })
  );
  return (
    <Container header={header}>
      <GlobalStyle />
      <Head />
      <InView>
        {({ inView, ref }) => (
          <TopMenu
            inView={inView}
            referrer={ref}
            width={sizes.width}
            title={data.site.siteMetadata.siteTitle}
          />
        )}
      </InView>
      {childrenWithProps}
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutWithQuery;
