/*! For license information please see component---src-pages-service-js-83f4551560a2185fd2ca.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{C331:function(e,t,n){"use strict";var r="bfred-it:object-fit-images",i=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,a="undefined"==typeof Image?{style:{"object-position":1}}:new Image,o="object-fit"in a.style,c="object-position"in a.style,l="background-size"in a.style,s="string"==typeof a.currentSrc,d=a.getAttribute,m=a.setAttribute,p=!1;function u(e,t,n){var r="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";d.call(e,"src")!==r&&m.call(e,"src",r)}function g(e,t){e.naturalWidth?t(e):setTimeout(g,100,e,t)}function f(e){var t=function(e){for(var t,n=getComputedStyle(e).fontFamily,r={};null!==(t=i.exec(n));)r[t[1]]=t[2];return r}(e),n=e[r];if(t["object-fit"]=t["object-fit"]||"fill",!n.img){if("fill"===t["object-fit"])return;if(!n.skipTest&&o&&!t["object-position"])return}if(!n.img){n.img=new Image(e.width,e.height),n.img.srcset=d.call(e,"data-ofi-srcset")||e.srcset,n.img.src=d.call(e,"data-ofi-src")||e.src,m.call(e,"data-ofi-src",e.src),e.srcset&&m.call(e,"data-ofi-srcset",e.srcset),u(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var t={get:function(t){return e[r].img[t||"src"]},set:function(t,n){return e[r].img[n||"src"]=t,m.call(e,"data-ofi-"+n,t),f(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}(e)}catch(a){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!s&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(n.img),e.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?g(n.img,(function(){n.img.naturalWidth>e.width||n.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(n.img,(function(t){u(e,t.naturalWidth,t.naturalHeight)}))}function h(e,t){var n=!p&&!e;if(t=t||{},e=e||"img",c&&!t.skipTest||!l)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var i=0;i<e.length;i++)e[i][r]=e[i][r]||{skipTest:t.skipTest},f(e[i]);n&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&h(e.target,{skipTest:t.skipTest})}),!0),p=!0,e="img"),t.watchMQ&&window.addEventListener("resize",h.bind(null,e,{skipTest:t.skipTest}))}h.supportsObjectFit=o,h.supportsObjectPosition=c,function(){function e(e,t){return e[r]&&e[r].img&&("src"===t||"srcset"===t)?e[r].img:e}c||(HTMLImageElement.prototype.getAttribute=function(t){return d.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,n){return m.call(e(this,t),t,String(n))})}(),e.exports=h},Eg6Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("dI71"),i=n("q1tI"),a=n.n(i),o=n("vOnD"),c=n("lqS3"),l=n("oTwq");const{DESKTOP:s,TABLET:d,PHONE:m}=l.a,p=(Object(o.c)(c.b)`
  animation: none;
`,Object(o.c)(c.g)`
  @media (max-width: ${s}px) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${d}px) {
    margin-bottom: 3rem;
  }
  @media (max-width: ${m}px) {
    margin-bottom: 5rem;
  }
`),u=o.c.div`
  opacity: 1;
  padding: 7rem;
  @media (max-width: ${s}px) {
    padding: 2rem;
  }
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-self: center;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 5;
`;var g=n("MnMr"),f=n("W0JC"),h=n("Efxr");const b=Object(h.b)(u)({});let y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={loading:"initial"},t}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({loading:"loaded"})},n.render=function(){const{to:e,nav:t,children:n,inView:r,refLink:i,bg:{image:o,header:l},Scroll:s}=this.props;return a.a.createElement(c.b,{styleName:"imgbg headerbg",title:l,img:o,overlayColor:""+Object(f.a)({hex:g.a.primaryColorDarkest,opacity:"0.65"})},a.a.createElement(b,{pose:t?"initial":this.state.loading,ref:i},n),s&&a.a.createElement(p,{"aria-label":"Scroll Button",to:""+e}))},t}(i.Component)},abFe:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("8k0H"),o=n("F5Ag"),c=n("Eg6Q"),l=n("e+rj"),s=(n("9eSz"),n("vOnD")),d=n("ciIH"),m=n.n(d),p=n("oTwq");const{TABLET:u,DESKTOP:g,PHONE:f}=p.a,h=s.c.div`
  @media (max-width: ${f}px) {
 grid-column: 2 / 3;
  }
 grid-column: 2 / 10;
`,b=s.c.div`

  grid-column: 1 / -1;
  background-color: ${e=>{let{color:t}=e;return t||"#abb2c5"}};
  padding: 5rem 0;
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) [center-start] repeat(8, minmax(min-content, 14rem)) [center-end] minmax(6rem, 1fr);
  @media (max-width: ${g}px) {
    padding: 2rem 0rem;
  }
  @media (max-width: ${u}px) {
    padding: 1rem 0rem;
   grid-template-columns:  minmax(2rem, 1fr) [center-start] repeat(8, minmax(min-content, 8rem)) [center-end]  minmax(2rem, 1fr);
  }

  @media (max-width: ${f}px) {
    padding: 1rem 0rem;
   grid-template-columns:  minmax(2rem, 1fr) [center-start] 90vw [center-end]  minmax(2rem, 1fr);
  }

`,y=s.c.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 5rem;
    @media (max-width: ${f}px) {
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 1rem;
  }
`,x=s.c.div`
  grid-column: 1 / 2;
  font-size: 2.5rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=Object(s.c)(m.a)`
  height: 30rem;
  width: 100%;
  grid-column: 2 / 3;
  margin: 0px auto;
`,w=Object(s.c)(l.d)`
  margin: auto;
  text-align: center;
    padding: 5rem 2rem;
  @media (max-width: ${g}px) {
    padding: 2rem 2rem;
  }
  @media (max-width: ${u}px) {
    padding: 0rem 0rem;
  letter-spacing: initial;
  }
`;var j=n("dI71"),E=n("Efxr"),O=n("MnMr");const{TABLET:S,PHONE:k}=p.a,T=s.c.div`
  margin: auto;
  background-color: ${O.a.primaryColorDarkest};
  cursor: pointer;
  width: 100%;
  border: 25px;
  height: ${e=>{let{height:t}=e;return t||"7rem"}};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;
`,C=s.c.li`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  span {
    color: white;
    font-size: 3rem;
    padding: 0 5rem;
  @media (max-width: ${k}px) {
    padding: 0 2rem;
  }
  }

`,$=s.c.ul`
  background-color: grey;
  display: flex;
  flex-direction: column;
  opacity: 0;
  margin-bottom: 3rem;
`,I=s.c.div`
  //height: 100%;
  width: 100%;
  grid-column: center-start / span 2;
  overflow: hidden;
  h5 {
    font-size: 3rem;
    font-weight: 600;
    color: ${O.a.primaryColorDarkest};
  }
  h6 {
    font-size: 2.8rem;
    color: ${O.a.colorGreyLight3};
    font-style: italic;
  }
  h5, h6 {
    text-align: center;
  }
`,M=s.c.div`
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  padding: 0rem ${e=>{let{padding:t}=e;return t}};
  background-color: white;
  p {
    font-size: 1.9rem;
    line-height: 1.5em;
  padding: ${e=>{let{padding:t}=e;return t}};
  color: ${e=>{let{color:t}=e;return t||"#575f75"}};
  }

`,P=Object(E.b)(T)({open:{y:"10%",borderRadius:"25px 25px 0px 0px",transition:{duration:600,ease:"linear"}},closed:{y:"0%",borderRadius:"25px 25px 25px 20px",transition:{duration:300,ease:"linear"}}}),R=Object(E.b)(C)({open:{opacity:1,y:0},closed:{opacity:0,y:20}}),z=Object(E.b)($)({open:{x:0,height:"initial",opacity:1,delayChildren:300,staggerChildren:60},closed:{height:0,opacity:0,delay:500,staggerChildren:20}}),A=Object(E.b)(M)({open:{height:"auto",opacity:1,delayChildren:300,staggerChildren:60,transition:{duration:600,type:"spring",stiffness:100,damping:15}},closed:{height:0,opacity:0,transition:{duration:300,type:"spring",stiffness:200,damping:210},delay:100}});let F=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={isOpen:!1},t.toggle=()=>t.setState({isOpen:!t.state.isOpen}),t}Object(j.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.nav&&this.setState({isOpen:!0})},n.render=function(){const{name:e,content:t,color:n}=this.props;return i.a.createElement(I,null,i.a.createElement(P,{height:"5rem",onClick:this.toggle,pose:this.state.isOpen?"open":"closed"},i.a.createElement(l.e,{lineheight:1.5,color:"white",padding:"0rem 2rem",letterSpacing:"1rem"},e)),i.a.createElement(A,{color:n,padding:this.state.isOpen?"1rem":"0",pose:this.state.isOpen?"open":"closed"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))},t}(r.Component),H=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={isOpen:!1},t.toggle=()=>t.setState({isOpen:!t.state.isOpen}),t}Object(j.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.nav&&this.setState({isOpen:!0})},n.render=function(){const{items:e,title:t}=this.props;return i.a.createElement(I,null,i.a.createElement(P,{height:"5rem",onClick:this.toggle,pose:this.state.isOpen?"open":"closed"},i.a.createElement(l.e,{color:"white",letterSpacing:"1rem"},t)),i.a.createElement(z,{pose:this.state.isOpen?"open":"closed"},e.map((e,t)=>i.a.createElement(R,{pose:this.state.isOpen?"open":"closed",key:t},i.a.createElement("span",null,e.name),i.a.createElement("span",null,e.price)))))},t}(r.Component);var D=n("jpbM"),L=n.n(D),q=e=>{let{name:t,image:n,items:r,priceTitle:a,color:o,contents:c,textcolor:l,nav:s}=e;return i.a.createElement(b,{color:o},i.a.createElement(h,null,i.a.createElement(w,null,t),i.a.createElement(y,null,i.a.createElement(x,null,c.map(e=>{let{content:t,name:n}=e;return i.a.createElement(F,{nav:s,key:L()(35),color:l,name:n,content:t.childMarkdownRemark.html})})),i.a.createElement(v,{objectFit:"contain",fluid:n.childImageSharp.fluid})),i.a.createElement(H,{title:a,items:r,nav:s})))};t.default=e=>{let{data:t}=e;return i.a.createElement(a.a,{header:"small"},i.a.createElement(o.a,{description:t.serviceJson.description,pageTitle:t.serviceJson.title}),i.a.createElement(c.a,{bg:t.serviceJson.header,to:"contact/#location"},i.a.createElement(l.c,null,"Услуги")),t.serviceJson.services.map(e=>i.a.createElement(q,{key:L()(),color:e.color,items:e.prices,name:e.name,image:e.image,priceTitle:e.priceTitle,contents:e.contents,textcolor:e.textcolor})))}},ciIH:function(e,t,n){"use strict";var r=n("284h"),i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("pVnL")),o=i(n("8OQS")),c=i(n("284h")),l=i(n("VbXa")),s=r(n("q1tI")),d=i(n("17x9")),m=i(n("9eSz")),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).imageRef=t.props.innerRef||(0,s.createRef)(),t.placeholderRef=(0,s.createRef)(),t}(0,l.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this,t=document.createElement("img");void 0!==t.style.objectFit&&void 0!==t.style.objectPosition||Promise.resolve().then((function(){return(0,c.default)(n("C331"))})).then((function(t){var n=t.default;n(e.imageRef.current.imageRef.current),n(e.placeholderRef.current)}))},r.render=function(){var e=this.props,t=e.objectFit,n=e.objectPosition,r=(0,o.default)(e,["objectFit","objectPosition"]),i={objectFit:t,objectPosition:n,fontFamily:'"object-fit: '+t+"; object-position: "+n+'"'};return s.default.createElement(m.default,(0,a.default)({ref:this.imageRef,placeholderRef:this.placeholderRef},r,{imgStyle:(0,a.default)({},r.imgStyle,i),placeholderStyle:(0,a.default)({},r.placeholderStyle,i)}))},t}(s.Component);p.propTypes={objectFit:d.default.string,objectPosition:d.default.string},p.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var u=(0,s.forwardRef)((function(e,t){return s.default.createElement(p,(0,a.default)({},e,{innerRef:t}))}));t.default=u},jpbM:function(e,t){e.exports=function(e){return e=e||7,Math.random().toString(35).substr(2,e)}}}]);
//# sourceMappingURL=component---src-pages-service-js-83f4551560a2185fd2ca.js.map