import React, { Component } from "react";
import { Container } from "./posts.css";
import { Link } from "gatsby";
import { InView } from "react-intersection-observer";
import { Button } from "../../utils";
import { Heading2 } from "../../utils/style";
import Post from "../../BlogPosts/Post";

export default class Posts extends Component {
  state = {mounted: false}
  componentDidMount(props) {
    
    setTimeout(() => this.setState({ mounted: true }), 100)

  }
  render() {
  const { posts, multiImage } = this.props


  let viewed = true;
  const viewedOn = function() {
    viewed = true;
  };

  const ssr = typeof window === "undefined"
  return (
    <InView threshold={0.1}>
      {({ inView, ref }) => (
        <Container ref={ref} 
        pose={ ssr || inView || !this.state.mounted  ? "visible" : "invisible"}>
          <Heading2 style={{ gridColumn: "1 / -1" }}>Последние посты</Heading2>
          {inView && viewedOn()}
          {viewed &&
            posts.map(({ node }, i) => {
              return (
                <Post
                  multiImage={multiImage}
                  i={i}
                  config={{ imageHeight: "20rem" }}
                  key={node.id}
                  description={node.description.description}
                  image={node.image}
                  imageArr={node.imageTest}
                  title={node.title}
                />
              );
            })}
          <Link to={"/blog"} style={{ width: "100%", gridColumn: "1/ -1" }}>
            <Button size="2rem" height="5rem" width={"80%"} margin={"auto"}>
              <span>Наш блог</span>
            </Button>
          </Link>
        </Container>
      )}
    </InView>
  );
          }
}
