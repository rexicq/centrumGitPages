import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  a {
  text-decoration: none;
  }

  html {
    max-width: 100%;
    overflow-x: hidden;
    font-size: 62.5%;
      @media only screen and (max-width: 75em) {
    font-size: 50%;
  }
  
      @media only screen and (max-width: 40em) {
    font-size: 40%;
  }
  }

  body {
    font-family: 'EB Garamond', serif;
    font-display: auto;
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    overflow-x: hidden;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }
  .popup-content {
    width: 400px !important;
  }
  .Cursor {
    font-weight: bold;
    
    animation-name: blinker;
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes blinker {
          0% { opacity: 1.0; }
          50% { opacity: 0.0; }
          100% { opacity: 1.0; }
        }
  }
  .gatsby-image-wrapper {
    opacity: unset !important;
}
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
.badge {
  position: relative;
  width: 40px;
  height: 46px; /* полная высота с треугольником */
  border-radius: 50%;
  background-color: white;
  border: 5px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: red;
}

.badge::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top-color: red;
}

.badge span {
  display:block;
  transform: translateY(-2px);
}

   .imgbg {
    display: grid;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5rem 0;
    grid-column: full-start / full-end;
    grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(6rem, 1fr);
      @media (max-width: ${600}px) {
      
    grid-template-columns: minmax(3rem, 1fr) repeat(8, minmax(min-content, 10rem)) minmax(3rem, 1fr);
    
    padding: 3rem 0;
  }
        @media (max-width: ${400}px) {
      
    grid-template-columns: minmax(1rem, 1fr) repeat(8, min-content) minmax(1rem, 1fr);
    
    padding: 1rem 0;
  }

   }

  .featuresbg {
    display: grid;
    grid-column: 1 / -1;
  }
  
  .satisfactionsbg {
    display: grid;
    background: linear-gradient(rgba(22, 64, 92, 0.65), rgba(64,92,255, 0.65));
    background-size: cover !important;
    grid-column: 1 / -1;
    height: 100vh;
      div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }

  .featuresfix {
    @media (max-width: ${600}px) {
      
    margin-bottom: 3rem;
    }
  }


  @keyframes ZoomInY {
    0% {
      transform: scale3d(1.05, 1.05, 1.05) translate3d(-15px, 0px, 0px);
      animation-timing-function: linear;
    }
    50% {
      transform: scale3d(1.11, 1.11, 1.11) translate3d(-25px, -55px, 0px);
    }
    100% {
      transform: scale3d(1.05, 1.05, 1.05) translate3d(-15px, 0px, 0px);
    }
  }

  .headerbg {
    display: grid;
    grid-row: 1 / 3;
    grid-column: 1 / -1;
    grid-template-rows: 1fr max-content 1fr;
    background: linear-gradient(rgba(64,92,255, 0.65), rgba(22, 64, 92, 0.65));
  
    background-size: cover !important;
    grid-template-columns: 1fr minmax(30vw, 70vw) 1fr;
      @media (max-width: ${900}px) {
      
    animation: none;
    grid-template-columns: 1fr minmax(30vw, 90vw) 1fr;
  }
        @media (max-width: ${400}px) {
      
    grid-template-columns: 1fr minmax(30vw, 100vw) 1fr;
  }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
