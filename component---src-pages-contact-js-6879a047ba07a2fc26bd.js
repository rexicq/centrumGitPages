(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"Cuy+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("8k0H"),l=n("F5Ag"),o=n("Eg6Q"),c=n("e+rj"),d=n("pEoo"),m=n("LAuT"),s=n("vOnD"),g=n("MnMr"),h=n("oTwq"),p=n("lqS3");const{TABLET:u,DESKTOP:E}=h.a,f=s.c.div`
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
`,b=s.c.div`
  width: 80%;
  margin: auto;
`,x=s.c.div`
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
`,y=Object(s.c)(c.a)`
  color: black;
  fontsize: 3.5rem;
  padding: 1rem 0;
  @media (max-width: ${u}px) {
    font-size: 3rem;
    line-height: 1.2;
  }
`;t.default=e=>{let{data:t}=e;return i.a.createElement(r.a,{header:"small"},i.a.createElement(l.a,{description:t.contactJson.description,pageTitle:t.contactJson.title}),i.a.createElement(o.a,{bg:t.contactJson.header,to:"contact/#location"},i.a.createElement(c.c,null,"Свяжитесь с нами")),i.a.createElement(f,null,i.a.createElement(x,null,i.a.createElement(p.b,{backg:!0,img:t.contactJson.subheader.image},i.a.createElement(b,null,i.a.createElement(c.d,{padding:"2rem 0",color:"white",fontweight:"600"},"Как нас найти"),i.a.createElement(y,null,'Мы находимся в самом центре города,улица Екатерины Великой (бывшая Интеркультурная) 77/4,офис 59,второй этаж.Рядом с ТЦ "Амстор",300 метров от центральной улицы города-проспектом Б.Хмельницкого.',i.a.createElement("br",null),'Добираться общественным транспортом до остановки "Агроуниверситет"(бывшая "Свердлова") или до ост."Покровская"(бывшая "Луначарского").')))),i.a.createElement(w,null,i.a.createElement(c.d,{padding:"2rem 0",color:"white",fontweight:"600"},"Напишите нам на почту"),i.a.createElement(d.a,{color:"white"}))),i.a.createElement(m.a,{inView:!0,id:"contact",loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"600px"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}})}))}},Eg6Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),l=n("vOnD"),o=n("lqS3"),c=n("oTwq");const{DESKTOP:d,TABLET:m,PHONE:s}=c.a,g=(Object(l.c)(o.b)`
  animation: none;
`,Object(l.c)(o.g)`
  @media (max-width: ${d}px) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${m}px) {
    margin-bottom: 3rem;
  }
  @media (max-width: ${s}px) {
    margin-bottom: 5rem;
  }
`),h=l.c.div`
  opacity: 1;
  padding: 7rem;
  @media (max-width: ${d}px) {
    padding: 2rem;
  }
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-self: center;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 5;
`;var p=n("MnMr"),u=n("W0JC"),E=n("Efxr");const f=Object(E.b)(h)({});let w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={loading:"initial"},t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({loading:"loaded"})},n.render=function(){const{to:e,nav:t,children:n,inView:a,refLink:i,bg:{image:l,header:c},Scroll:d}=this.props;return r.a.createElement(o.b,{styleName:"imgbg headerbg",title:c,img:l,overlayColor:""+Object(u.a)({hex:p.a.primaryColorDarkest,opacity:"0.65"})},r.a.createElement(f,{pose:t?"initial":this.state.loading,ref:i},n),d&&r.a.createElement(g,{"aria-label":"Scroll Button",to:""+e}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-js-6879a047ba07a2fc26bd.js.map