import React from "react";
import { Container, CopyRight } from "./footer.css.js";
import { Heading3 } from "../utils/style";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Icons from "../icons/icons";

export default () => {
  return (
    <Container>
      <Icons />
      <span>
        ЧАСЫ РАБОТЫ
        <br />
        Понедельник 8:00 – 15:00
        <br />
        Вторник 8:00 – 15:00
        <br />
        Среда 8:00 – 15:00
        <br />
        Четверг 8:00 – 15:00
        <br />
        Пятница 8:00 – 15:00
        <br />
        <p>
          Закрыто в субботу и воскресение
          <br />
        </p>
        <br />
        <br />
        <p style={{ padding: 0 }}>
          Более детальную информацию для записи на УЗИ Мелитополь узнавайте по
          телефону: <br />
          +7 990 228-30-50
        </p>
        <br />
      </span>
      <ul>
        <li>
          <a href="http://ultrasound.net.ua/" alt="linktousi">
            Украинский Портал УЗИ Диагностики
          </a>
        </li>
        <li>
          <a
            href="https://medportal.ru/enc/gastroenterology/gastritis/gastritis/"
            alt="linktoGastrit"
          >
            Гастрит: причины, диагностика и лечение
          </a>
        </li>
      </ul>

      <CopyRight>&copy; Copyright 2019 by Anatoliy Lokoshko.</CopyRight>
    </Container>
  );
};
