(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{SKz9:function(e,t,o){},Vd7R:function(e,t,o){"use strict";o.r(t),o.d(t,"Button",(function(){return w})),o.d(t,"default",(function(){return x}));var n=o("dI71"),r=o("q1tI"),i=o.n(r),a=o("vOnD"),l=o("e+rj"),c=o("MnMr"),u=o("i8i4"),s=o.n(u);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var f="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,p={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},v=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],h=function(e,t,o,n,r){var i=r.offsetX,a=r.offsetY,l=n?8:0,c=o.split(" "),u=e.top+e.height/2,s=e.left+e.width/2,d=t.height,f=t.width,p=u-d/2,v=s-f/2,h="",m="0%",g="0%";switch(c[0]){case"top":p-=d/2+e.height/2+l,h="rotate(180deg)  translateX(50%)",m="100%",g="50%";break;case"bottom":p+=d/2+e.height/2+l,h="rotate(0deg) translateY(-100%) translateX(-50%)",g="50%";break;case"left":v-=f/2+e.width/2+l,h=" rotate(90deg)  translateY(50%) translateX(-25%)",g="100%",m="50%";break;case"right":v+=f/2+e.width/2+l,h="rotate(-90deg)  translateY(-150%) translateX(25%)",m="50%"}switch(c[1]){case"top":p=e.top,m=e.height/2+"px";break;case"bottom":p=e.top-d+e.height,m=d-e.height/2+"px";break;case"left":v=e.left,g=e.width/2+"px";break;case"right":v=e.left-f+e.width,g=f-e.width/2+"px"}return{top:p="top"===c[0]?p-a:p+a,left:v="left"===c[0]?v-i:v+i,transform:h,arrowLeft:g,arrowTop:m}},m=function(e,t,o,n,r,i){var a=r.offsetX,l=r.offsetY,c={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},u=0,s=function(e){var t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if("string"==typeof e){var o=document.querySelector(e);0,null!==o&&(t=o.getBoundingClientRect())}return t}(i),d=Array.isArray(o)?o:[o];for((i||Array.isArray(o))&&(d=[].concat(d,v));u<d.length;){var f={top:(c=h(e,t,d[u],n,{offsetX:a,offsetY:l})).top,left:c.left,width:t.width,height:t.height};if(!(f.top<=s.top||f.left<=s.left||f.top+f.height>=s.top+s.height||f.left+f.width>=s.left+s.width))break;u++}return c},g=0,b=Object(r.forwardRef)((function(e,t){var o=e.trigger,n=void 0===o?null:o,a=e.onOpen,l=void 0===a?function(){}:a,c=e.onClose,u=void 0===c?function(){}:c,v=e.defaultOpen,h=void 0!==v&&v,b=e.open,w=void 0===b?void 0:b,y=e.disabled,E=void 0!==y&&y,k=e.nested,x=void 0!==k&&k,O=e.closeOnDocumentClick,C=void 0===O||O,j=e.repositionOnResize,z=void 0===j||j,L=e.closeOnEscape,A=void 0===L||L,S=e.on,T=void 0===S?["click"]:S,D=e.contentStyle,R=void 0===D?{}:D,B=e.arrowStyle,I=void 0===B?{}:B,X=e.overlayStyle,$=void 0===X?{}:X,M=e.className,Y=void 0===M?"":M,P=e.position,N=void 0===P?"bottom center":P,F=e.modal,q=void 0!==F&&F,H=e.lockScroll,K=void 0!==H&&H,J=e.arrow,V=void 0===J||J,W=e.offsetX,G=void 0===W?0:W,Q=e.offsetY,U=void 0===Q?0:Q,Z=e.mouseEnterDelay,_=void 0===Z?100:Z,ee=e.mouseLeaveDelay,te=void 0===ee?100:ee,oe=e.keepTooltipInside,ne=void 0!==oe&&oe,re=e.children,ie=Object(r.useState)(w||h),ae=ie[0],le=ie[1],ce=Object(r.useRef)(null),ue=Object(r.useRef)(null),se=Object(r.useRef)(null),de=Object(r.useRef)(null),fe=Object(r.useRef)("popup-"+ ++g),pe=!!q||!n,ve=Object(r.useRef)(0);f((function(){return ae?(de.current=document.activeElement,je(),xe(),Ee()):ke(),function(){clearTimeout(ve.current)}}),[ae]),Object(r.useEffect)((function(){"boolean"==typeof w&&(w?he():me())}),[w,E]);var he=function(e){ae||E||(le(!0),setTimeout((function(){return l(e)}),0))},me=function(e){var t;ae&&!E&&(le(!1),pe&&(null===(t=de.current)||void 0===t||t.focus()),setTimeout((function(){return u(e)}),0))},ge=function(e){null==e||e.stopPropagation(),ae?me(e):he(e)},be=function(e){clearTimeout(ve.current),ve.current=setTimeout((function(){return he(e)}),_)},we=function(e){null==e||e.preventDefault(),ge()},ye=function(e){clearTimeout(ve.current),ve.current=setTimeout((function(){return me(e)}),te)},Ee=function(){pe&&K&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},ke=function(){pe&&K&&(document.getElementsByTagName("body")[0].style.overflow="auto")},xe=function(){var e,t=null==ue||null===(e=ue.current)||void 0===e?void 0:e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),o=Array.prototype.slice.call(t)[0];null==o||o.focus()};Object(r.useImperativeHandle)(t,(function(){return{open:function(){he()},close:function(){me()},toggle:function(){ge()}}}));var Oe,Ce,je=function(){if(!pe&&ae&&(null==ce?void 0:ce.current)&&(null==ce?void 0:ce.current)&&(null==ue?void 0:ue.current)){var e,t,o=ce.current.getBoundingClientRect(),n=ue.current.getBoundingClientRect(),r=m(o,n,N,V,{offsetX:G,offsetY:U},ne);if(ue.current.style.top=r.top+window.scrollY+"px",ue.current.style.left=r.left+window.scrollX+"px",V&&se.current)se.current.style.transform=r.transform,se.current.style.setProperty("-ms-transform",r.transform),se.current.style.setProperty("-webkit-transform",r.transform),se.current.style.top=(null===(e=I.top)||void 0===e?void 0:e.toString())||r.arrowTop,se.current.style.left=(null===(t=I.left)||void 0===t?void 0:t.toString())||r.arrowLeft}};Oe=me,void 0===(Ce=A)&&(Ce=!0),Object(r.useEffect)((function(){if(Ce){var e=function(e){"Escape"===e.key&&Oe(e)};return document.addEventListener("keyup",e),function(){Ce&&document.removeEventListener("keyup",e)}}}),[Oe,Ce]),function(e,t){void 0===t&&(t=!0),Object(r.useEffect)((function(){if(t){var o=function(t){if(9===t.keyCode){var o,n=null==e||null===(o=e.current)||void 0===o?void 0:o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),r=Array.prototype.slice.call(n);if(1===r.length)return void t.preventDefault();var i=r[0],a=r[r.length-1];t.shiftKey&&document.activeElement===i?(t.preventDefault(),a.focus()):document.activeElement===a&&(t.preventDefault(),i.focus())}};return document.addEventListener("keydown",o),function(){t&&document.removeEventListener("keydown",o)}}}),[e,t])}(ue,ae&&pe),function(e,t){void 0===t&&(t=!0),Object(r.useEffect)((function(){if(t){var o=function(){e()};return window.addEventListener("resize",o),function(){t&&window.removeEventListener("resize",o)}}}),[e,t])}(je,z),function(e,t,o){void 0===o&&(o=!0),Object(r.useEffect)((function(){if(o){var n=function(o){var n=Array.isArray(e)?e:[e],r=!1;n.forEach((function(e){e.current&&!e.current.contains(o.target)||(r=!0)})),o.stopPropagation(),r||t(o)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){o&&(document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n))}}}),[e,t,o])}(n?[ue,ce]:[ue],me,C&&!x);var ze,Le=function(){return i.a.createElement("div",Object.assign({},(e=pe?p.popupContent.modal:p.popupContent.tooltip,t={className:"popup-content "+(""!==Y?Y.split(" ").map((function(e){return e+"-content"})).join(" "):""),style:d({},e,R,{pointerEvents:"auto"}),ref:ue,onClick:function(e){e.stopPropagation()}},!q&&T.indexOf("hover")>=0&&(t.onMouseEnter=be,t.onMouseLeave=ye),t),{key:"C",role:pe?"dialog":"tooltip",id:fe.current}),V&&!pe&&i.a.createElement("div",{ref:se,style:p.popupArrow},i.a.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(""!==Y?Y.split(" ").map((function(e){return e+"-arrow"})).join(" "):""),viewBox:"0 0 32 16",style:d({position:"absolute"},I)},i.a.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),re&&"function"==typeof re?re(me,ae):re);var e,t},Ae=!(T.indexOf("hover")>=0),Se=pe?p.overlay.modal:p.overlay.tooltip,Te=[Ae&&i.a.createElement("div",{key:"O","data-testid":"overlay","data-popup":pe?"modal":"tooltip",className:"popup-overlay "+(""!==Y?Y.split(" ").map((function(e){return e+"-overlay"})).join(" "):""),style:d({},Se,$,{pointerEvents:C&&x||pe?"auto":"none"}),onClick:C&&x?me:void 0,tabIndex:-1},pe&&Le()),!pe&&Le()];return i.a.createElement(i.a.Fragment,null,function(){for(var e={key:"T",ref:ce,"aria-describedby":fe.current},t=Array.isArray(T)?T:[T],o=0,r=t.length;o<r;o++)switch(t[o]){case"click":e.onClick=ge;break;case"right-click":e.onContextMenu=we;break;case"hover":e.onMouseEnter=be,e.onMouseLeave=ye;break;case"focus":e.onFocus=be,e.onBlur=ye}if("function"==typeof n){var a=n(ae);return!!n&&i.a.cloneElement(a,e)}return!!n&&i.a.cloneElement(n,e)}(),ae&&s.a.createPortal(Te,(null===(ze=document.getElementById("popup-root"))&&((ze=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(ze)),ze)))}));o("SKz9");const w=a.c.button`
  display: block;
  position: relative;
  overflow: hidden;
  width: ${e=>{let{width:t}=e;return t||"100%"}};
  height: ${e=>{let{height:t}=e;return t||"3.5rem"}};
  margin: ${e=>{let{margin:t}=e;return t||"0"}};
  border-radius: 0.5rem;
  border: none;
  background: ${e=>{let{color:t}=e;return t||c.a.primaryColorDarken}};
  color: white; /* текст всегда белый */
  font-size: ${e=>{let{size:t}=e;return t||"1.6rem"}};
  font-weight: ${e=>{let{weight:t}=e;return t||500}};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 2;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  span {
    position: relative;
    z-index: 2; /* текст поверх анимации */
    color: white; /* гарантируем белый текст всегда */
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: ${e=>{let{hoverColor:t}=e;return t||"rgba(255, 255, 255, 0.1)"}}; /* мягкий overlay */
    z-index: 1;
    transition: height 0.3s ease;
  }

  :hover::after {
    height: 100%;
  }

  :active {
    transform: scale(0.97);
  }

  :disabled {
    background: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: ${e=>{let{size:t}=e;return t||"1.4rem"}};
    height: ${e=>{let{height:t}=e;return t||"3rem"}};
  }
`;w.defaultProps={color:c.a.primaryColorDarken,hoverColor:"rgba(255, 255, 255, 0.1)",size:"1.6rem",weight:500,width:"100%",height:"3.5rem"};const y=a.c.div`
  max-width: 90vw;
  max-height: 90vh;
  width: 480px;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    width: 90vw;
    padding: 1.5rem;
  }
`,E=a.c.a`
  color: ${c.a.colorBlack};
  font-weight: 600;
  font-size: 2.6rem;
  text-decoration: none;
  display: block;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none; /* убираем стандартную обводку */
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2); /* можно добавить свою лёгкую тень вместо стандартной */
  }
`,k=a.c.div`
  margin-top: 3rem;
`;let x=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={clicked:!0,isClient:!1},t}Object(n.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.setState({isClient:!0})},o.render=function(){const{bg:e}=this.props,{isClient:t,clicked:o}=this.state;return e&&t?i.a.createElement(b,{open:this.state.clicked,modal:!0,closeOnDocumentClick:!0,contentStyle:{padding:0,border:"none",background:"transparent"}},i.a.createElement(y,null,i.a.createElement("div",null,i.a.createElement(l.c,{color:"black"},'Кабинет УЗИ "ЦЕНТРУМ"!'),i.a.createElement("br",null),i.a.createElement(l.e,{color:"black",padding:"0px",lineheight:"2"},"Кабинет УЗИ работает в период январских праздников во все дни, кроме 1 и 7 января, а также суббот и воскресений.",i.a.createElement("br",null),i.a.createElement("br",null),"Запись по телефону:"),i.a.createElement(E,{href:"tel:+79902283050"},"+7 990 228-30-50"),i.a.createElement(k,null,i.a.createElement(w,{width:"100%",height:"5rem",onClick:()=>this.setState({clicked:!1})},i.a.createElement(l.e,{color:"white"},"Спасибо")))))):null},t}(r.Component)}}]);
//# sourceMappingURL=17-61a700d01d950950b681.js.map