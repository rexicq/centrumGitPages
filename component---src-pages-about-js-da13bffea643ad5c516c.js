(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("8k0H"),o=a("F5Ag"),c=a("Eg6Q"),i=a("e+rj"),s=a("dI71"),m=a("vOnD"),d=a("9eSz"),p=a.n(d),u=(a("jpbM"),a("bwEH"));const g=m.c.section`
  grid-column: full-start / full-end;
  background-color: ${e=>{let{bg:t}=e;return t}};
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,w=m.c.div`
  grid-row: ${e=>{let{row:t}=e;return t}};
  grid-column: ${e=>{let{column:t}=e;return t}};
`;var b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={clicked:!1},a.position={0:{row:"1 / span 3",column:"1 / span 3"},1:{row:"1 / span 3",column:"4 / span 3"},2:{row:"1 / span 2",column:"7 / -1"},3:{row:"4 / span 4",column:"1 / span 2"},4:{row:"4 / span 4",column:"3 / span 4"},5:{row:"3 / span 1",column:"7 / span 2"},6:{row:"8 / span 3",column:"1 / span 2"},7:{row:"4 / span 2",column:"7 / span 2"},8:{row:"6 / span 5",column:"7 / span 2"},9:{row:"8 / span 3",column:"3 / span 4"}},a}return Object(s.a)(t,e),t.prototype.render=function(){const{imgs:e,bg:t}=this.props,a=this.position;return r.a.createElement(g,{bg:t},e.map((e,t)=>{let{image:n,title:l}=e;return r.a.createElement(w,{row:a[t].row,column:a[t].column},r.a.createElement(u.a,{showModals:()=>this.setState({clicked:t}),hideModals:()=>this.setState({clicked:!1}),opened:this.state.clicked===t,styleProps:{padding:0},button:r.a.createElement(p.a,{fluid:n.childImageSharp.fluid})},r.a.createElement(p.a,{fluid:n.childImageSharp.fluid})))}))},t}(n.Component),h=a("oTwq");a("MnMr");const{DESKTOP:E,TABLET:f}=h.a,k=m.c.div`
  padding: 5rem;
  text-align: center;
  grid-column: center-start / center-end;
  text-align: initial;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${E}px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${f}px) {
  grid-column: 1 / -1;
  }

`,v=Object(m.c)(i.a)`
  color: black;
  margin: 2rem 0;
  font-size: 2rem;
`,x=Object(m.c)(i.d)`
  text-align: initial;
  margin: 2rem auto;
`;t.default=e=>{let{data:t}=e;return r.a.createElement(l.a,{header:"small"},r.a.createElement(o.a,{description:t.aboutJson.description,pageTitle:t.aboutJson.title}),r.a.createElement(c.a,{bg:t.aboutJson.header,to:"contact/#location"},r.a.createElement(i.c,null,"О Нас")),r.a.createElement(k,null,r.a.createElement(x,{color:"black"},"Узнайте больше про нас"),r.a.createElement("div",null,r.a.createElement(v,null,'УЗИ "Центрум"-медицинский кабинет ,который начал работать с января 2019 года. Приём пациентов ведут:Локошко Андрей Анатольевич,врач УЗД первой категории с 23-летним стажем работы и Локошко Таисия Федоровна,врач гастроэнтеролог высшей категории со стажем работы более 20 лет.'),r.a.createElement(v,null,'В кабинете сделан ремонт современными материалами,оснащен всей необходимой бытовой и медицинской техникой. Обследования проводятся на аппарате японского производства эксперт класса Toshiba Aplio XG. Для безопасности пациентов и сотрудников установлен бактерицидный рециркулятор "Бактосфера",который обеззараживает воздух от бактерий и вирусов.'),r.a.createElement(v,{color:"black"},"Для удобства пациентов санузел расположен в офисе. Уборка в помещении производится 2 раза в день:до и после окончания работы. Для обследования бесплатно предоставляются бахилы, одноразовые простыни и полотенца."),r.a.createElement(v,{color:"black"},'После приема выдаётся заключение,снимки; даются рекомендации и назначения. Уютная обстановка,внимательные и квалифицированные сотрудники ждут Вас в медицинском кабинете УЗИ "Центрум"!'))),r.a.createElement(b,{bg:"#c1c1c1",imgs:t.aboutJson.gallery}))}},jpbM:function(e,t){e.exports=function(e){return e=e||7,Math.random().toString(35).substr(2,e)}}}]);
//# sourceMappingURL=component---src-pages-about-js-da13bffea643ad5c516c.js.map