(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("8k0H"),o=a("F5Ag"),l=a("Eg6Q"),c=a("e+rj"),m=a("pEoo"),d=a("WFsk"),s=a("vOnD"),g=a("MnMr"),p=a("oTwq"),h=a("lqS3");const{TABLET:u,DESKTOP:E}=p.a,f=s.c.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${E}px) {
    display: flex;
    flex-direction: column;
  }
`,w=s.c.div`
  height: 80vh;
  background-color: ${g.a.primaryColorDarken};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 80%;
    height: initial;
    color: white;
  }
`,x=s.c.div`
  width: 80%;
  margin: auto;
`,y=s.c.div`
  width: 100%;
  height: 80vh;
  display: flex;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media (max-width: ${u}px) {
      justify-content: start;
    }
  }
`,b=Object(s.c)(c.a)`
  color: black;
  fontsize: 3.5rem;
  padding: 1rem 0;
  @media (max-width: ${u}px) {
    font-size: 3rem;
    line-height: 1.2;
  }
`;t.default=e=>{let{data:t}=e;return i.a.createElement(r.a,{header:"small"},i.a.createElement(o.a,{description:t.contactJson.description,pageTitle:t.contactJson.title}),i.a.createElement(l.a,{bg:t.contactJson.header,to:"contact/#location"},i.a.createElement(c.c,null,"Свяжитесь с нами")),i.a.createElement(f,null,i.a.createElement(y,null,i.a.createElement(h.b,{backg:!0,img:t.contactJson.subheader.image},i.a.createElement(x,null,i.a.createElement(c.d,{padding:"2rem 0",color:"white",fontweight:"600"},"Как нас найти"),i.a.createElement(b,null,'Мы находимся в самом центре города,улица Екатерины Великой (бывшая Интеркультурная) 77/4,офис 59,второй этаж.Рядом с ТЦ "Амстор",300 метров от центральной улицы города-проспектом Б.Хмельницкого.',i.a.createElement("br",null),'Добираться общественным транспортом до остановки "Агроуниверситет"(бывшая "Свердлова") или до ост."Покровская"(бывшая "Луначарского").')))),i.a.createElement(w,null,i.a.createElement(c.d,{padding:"2rem 0",color:"white",fontweight:"600"},"Напишите нам на почту"),i.a.createElement(m.a,{color:"white"}))),i.a.createElement(d.a,{inView:!0,id:"contact",googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCCa6tEkCsJX1xvTf1voGsSe5czgzxAvpQ&v=3.exp&libraries=geometry,drawing,places",loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"600px"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}})}))}},Eg6Q:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a("dI71"),i=a("q1tI"),r=a.n(i),o=a("vOnD"),l=a("lqS3"),c=a("oTwq");const{DESKTOP:m,TABLET:d,PHONE:s}=c.a,g=(Object(o.c)(l.b)`
  animation: none;
`,Object(o.c)(l.g)`
  @media (max-width: ${m}px) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${d}px) {
    margin-bottom: 3rem;
  }
  @media (max-width: ${s}px) {
    margin-bottom: 5rem;
  }
`),p=o.c.div`
  opacity: 1;
  padding: 7rem;
  @media (max-width: ${m}px) {
    padding: 2rem;
  }
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-self: center;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 5;
`;var h=a("MnMr"),u=a("W0JC"),E=a("Efxr");const f=Object(E.b)(p)({});let w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={loading:"initial"},t}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({loading:"loaded"})},a.render=function(){const{to:e,nav:t,children:a,inView:n,refLink:i,bg:{image:o,header:c},Scroll:m}=this.props;return r.a.createElement(l.b,{styleName:"imgbg headerbg",title:c,img:o,overlayColor:""+Object(u.a)({hex:h.a.primaryColorDarkest,opacity:"0.65"})},r.a.createElement(f,{pose:t?"initial":this.state.loading,ref:i},a),m&&r.a.createElement(g,{"aria-label":"Scroll Button",to:""+e}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-js-3e52c3dceec97150c1f6.js.map