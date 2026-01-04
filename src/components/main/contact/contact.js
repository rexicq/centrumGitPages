import React, { Component } from "react";
import { Colors } from "../../../constants/theme";
import { Button, RightAnimate, LeftAnimate } from "../../utils/";
import { DefaultText, Section, Heading2 } from "../../utils/style";
import { InView } from "react-intersection-observer";
import { Container, About } from "./contact.css";
import Form from "../../Form";

export default class Contact extends Component {
  state = { mounted: false };
  componentDidMount(props) {
    setTimeout(() => this.setState({ mounted: true }), 100);
  }
  render() {
    const { nav } = this.props;
    const ssr = typeof window === "undefined";
    let viewed = true;
    const viewedOn = function() {
      viewed = true;
    };
    return (
      <InView threshold={0.5}>
        {({ inView, ref }) => (
          <Container ref={ref}>
            {inView && !viewed && viewedOn()}
            {viewed && (
              <>
                <Heading2
                  margin={"auto"}
                  color={Colors.primaryColorDarkest}
                  style={{ gridColumn: "1 / -1" }}
                >
                  СВЯЖИТЕСЬ С НАМИ
                </Heading2>
                <LeftAnimate
                  pose={
                    nav
                      ? "visible"
                      : inView || ssr || !this.state.mounted
                      ? "visible"
                      : "invisible"
                  }
                >
                  <Form />
                </LeftAnimate>
                <RightAnimate
                  pose={
                    nav
                      ? "visible"
                      : inView || ssr || !this.state.mounted
                      ? "visible"
                      : "invisible"
                  }
                >
                  <About>
                    <DefaultText>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{ display: "block", marginBottom: "1rem" }}
                        >
                          Позвоните или свяжитесь с нами через форму контакта
                          для записи на прием.
                        </span>
                        <br />
                        <span>
                          <b style={{ color: Colors.greyColor }}>
                            УЗИ Кабинет:
                          </b>
                          <br />
                          <b>
                            улица Интеркультурная, 77/4, офис 59, Мелитополь,
                            Запорожская область, 72310
                          </b>
                        </span>
                        <br />
                        <span
                          style={{ display: "block", color: Colors.greyColor }}
                        >
                          ​ Почта:
                        </span>
                        <b>lokmedic2005@ukr.net</b>
                        <br />
                        <span
                          style={{ color: Colors.greyColor, display: "block" }}
                        >
                          Телефоны:
                        </span>{" "}
                        <b>+7 990 228-30-50</b>
                      </div>
                    </DefaultText>
                  </About>
                </RightAnimate>
              </>
            )}
          </Container>
        )}
      </InView>
    );
  }
}
