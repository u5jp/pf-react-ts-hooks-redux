(this["webpackJsonppf-react-ts-hooks-redux"]=this["webpackJsonppf-react-ts-hooks-redux"]||[]).push([[0],{31:function(e,n,t){e.exports=t(44)},36:function(e,n,t){},37:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(24),o=t.n(i),c=(t(36),t(7)),l=t(2),u=(t(37),Object(a.createContext)({})),s=t(25),p={id:"",title:"",body:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[p],n=arguments.length>1?arguments[1]:void 0;return n.type,e},f=t(13),d={name:"",period:"",proficiency:0,interest:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[d],n=arguments.length>1?arguments[1]:void 0;switch(console.log(e),n.type){case"SORT_INTEREST":return e.sort((function(e,n){return(e=e.interest)<(n=n.interest)?1:e>n?-1:0})),Object(f.a)(e);case"SORT_PROFICIENCY":return e.sort((function(e,n){return(e=e.proficiency)<(n=n.proficiency)?1:e>n?-1:0})),Object(f.a)(e);case"SORT_NAME":return e.sort((function(e,n){return(e=e.name.toLowerCase())<(n=n.name.toLowerCase())?-1:e>n?1:0})),Object(f.a)(e);default:return Object(f.a)(e)}},E=Object(s.a)({introductions:m,skill:h}),b=t(3),v=t(5),g=t(1);function x(){var e=Object(l.a)(["\n  width: 220px;\n  height: 220px;\n  path {\n    fill: url(#grad1);\n  }\n  #stop1 {\n    animation: change-color1 3s ease-in-out infinite alternate;\n  }\n  #stop2 {\n    animation: change-color2 3s ease-in-out infinite alternate;\n  }\n  @keyframes change-color1 {\n    0% {\n      stop-color: fuchsia;\n    }\n    100% {\n      stop-color: red;\n    }\n  }\n  @keyframes change-color2 {\n    0% {\n      stop-color: purple;\n    }\n    100% {\n      stop-color: green;\n    }\n  }\n"]);return x=function(){return e},e}var y=g.c.svg(x()),w=function(){return r.a.createElement(y,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"grad1",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{id:"stop1",offset:"0%"}),r.a.createElement("stop",{id:"stop2",offset:"100%"}))),r.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"}))};function O(){var e=Object(l.a)(["\n  width: 220px;\n  height: 220px;\n  path {\n    fill: url(#grad1);\n  }\n  #stop1 {\n    animation: change-color1 3s ease-in-out infinite alternate;\n  }\n  #stop2 {\n    animation: change-color2 3s ease-in-out infinite alternate;\n  }\n  @keyframes change-color1 {\n    0% {\n      stop-color: fuchsia;\n    }\n    100% {\n      stop-color: red;\n    }\n  }\n  @keyframes change-color2 {\n    0% {\n      stop-color: purple;\n    }\n    100% {\n      stop-color: green;\n    }\n  }\n"]);return O=function(){return e},e}var j=g.c.svg(O()),k=function(){return r.a.createElement(j,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"grad1",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{id:"stop1",offset:"0%"}),r.a.createElement("stop",{id:"stop2",offset:"100%"}))),r.a.createElement("path",{d:"M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"}))};function S(){var e=Object(l.a)(['\n  width: 30%;\n  &:hover {\n    opacity: 0.8;\n  }\n  h2 {\n    font-family: "Open Sans", sans-serif;\n    font-weight: bold;\n    font-size: 26px;\n  }\n  p {\n    font-size: 18px;\n  }\n']);return S=function(){return e},e}var C=g.c.li(S()),z=function(e){var n=e.introduction;return console.log(n),r.a.createElement(C,null,r.a.createElement(v.b,{to:"/".concat(n.title)},"profile"==n.title&&r.a.createElement(w,null),"skill"==n.title&&r.a.createElement(k,null),r.a.createElement("h2",null,n.title),r.a.createElement("p",null,n.body)))},P=t(15),R=t(8);function T(){var e=Object(l.a)(["\n  margin-top: 50px;\n  display: flex;\n  justify-content: space-around;\n"]);return T=function(){return e},e}function Y(){var e=Object(l.a)(['\n  margin-top: 50px;\n  h1 {\n    margin-top: 20px;\n    font-size: 30px;\n    font-weight: bold;\n    font-family: "Open Sans", sans-serif;\n  }\n  h2 {\n    margin-top: 20px;\n    font-size: 20px;\n  }\n']);return Y=function(){return e},e}function V(){var e=Object(l.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  transition: 2s;\n  opacity: 0;\n  opacity: ",";\n"]);return V=function(){return e},e}var I=g.c.div(V(),(function(e){return e.inView&&"1"})),M=g.c.div(Y()),N=g.c.ul(T()),L=function(){var e=Object(a.useContext)(u),n=Object(P.a)({threshold:0}),t=Object(c.a)(n,2),i=t[0],o=t[1];return r.a.createElement(R.b.div,{animate:{rotateY:0,opacity:1},initial:{rotateY:90,opacity:0},exit:{rotateY:-90,opacity:0},transition:{duration:.5}},r.a.createElement(I,{inView:o,ref:i},r.a.createElement(M,null,r.a.createElement("div",null,r.a.createElement("h1",null,"(\u5236\u4f5c\u4e2d)about me"),r.a.createElement("h2",null,"\u5e02\u6a4b \u512a\u609f"),r.a.createElement("p",null,"Yugo Ichihashi")),r.a.createElement("div",null,r.a.createElement("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u30b9\u30dd\u30fc\u30c4\u30d6\u30e9\u30f3\u30c9\u306eWeb\u5236\u4f5c\u30fb\u904b\u7528\u696d\u52d9\u306b\u53d6\u308a\u7d44\u3093\u3067\u304a\u308a\u307e\u3057\u305f\u3002\u30c7\u30a3\u30ec\u30af\u30bf\u30fc\u3084\u9867\u5ba2\u3068\u9023\u643a\u3057\u3001HTML/CSS/JavaScript\u3068\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u305f\u30ea\u30c3\u30c1\u306a\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306e\u5236\u4f5c\u3092\u884c\u3046\u306e\u304c\u4e3b\u306a\u696d\u52d9\u3067\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30fbWeb\u30c7\u30b6\u30a4\u30f3\u306e\u6280\u8853\u3078\u306e\u95a2\u5fc3\u304c\u5f37\u304b\u3063\u305f\u3053\u3068\u3084\u751f\u7523\u7ba1\u7406\u306e\u7d4c\u9a13\u306b\u3088\u308b\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u7ba1\u7406\u306e\u59ff\u52e2\u304c\u8a55\u4fa1\u3055\u308c\u3001\u6280\u8853\u30ea\u30fc\u30c0\u30fc\u3068\u3057\u3066\u30c1\u30fc\u30e0\u3092\u727d\u5f15\u3057\u3066\u304a\u308a\u307e\u3057\u305f\u3002React.js\u3084Vue.js\u306a\u3069\u306e\u30e2\u30c0\u30f3\u6280\u8853\u3092\u7528\u3044\u305f\u958b\u767a\u306b\u8208\u5473\u3092\u6301\u3061\u72ec\u5b66\u3092\u59cb\u3081\u305f\u3053\u3068\u3092\u304d\u3063\u304b\u3051\u306b\u8ee2\u8077\u6d3b\u52d5\u3092\u884c\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002"))),r.a.createElement(N,null,e.stateProvided.introductions.map((function(e,n){return r.a.createElement(z,{key:n,introduction:e})})))))};function W(){var e=Object(l.a)(['\n  margin-top: 10px;\n  width: 100%;\n  height: 1rem;\n  background: #fff;\n  position: relative;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);\n  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);\n  transition: 1s;\n  &::after {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 10%;\n    transition: 2s;\n    width: ',";\n    background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);\n  }\n"]);return W=function(){return e},e}function _(){var e=Object(l.a)(["\n  width: 180px;\n  height: 180px;\n  padding: 20px;\n"]);return _=function(){return e},e}function B(){var e=Object(l.a)(["\n  min-width: 200px;\n"]);return B=function(){return e},e}function U(){var e=Object(l.a)(["\n  min-width: 200px;\n  h3 {\n    margin-top: 15px;\n    font-weight: bold;\n    font-size: 20px;\n  }\n  p {\n    margin-top: 10px;\n  }\n"]);return U=function(){return e},e}function J(){var e=Object(l.a)(["\n  margin: 0 auto;\n  display: flex;\n  transition: 2s;\n  opacity: 0;\n  opacity: ",";\n"]);return J=function(){return e},e}var A=g.c.li(J(),(function(e){return e.inView&&"1"})),H=g.c.div(U()),F=g.c.div(B()),G=g.c.img(_()),D=g.c.div(W(),(function(e){return e.inView&&20*e.width+"%"})),$=function(e){var n=e.skill,t=Object(P.a)({threshold:0}),a=Object(c.a)(t,2),i=a[0],o=a[1];return r.a.createElement(A,{inView:o,ref:i},r.a.createElement(F,null,r.a.createElement(G,{src:"".concat("/pf-react-ts-hooks-redux","/icons/").concat(n.name,".svg")})),r.a.createElement(H,null,r.a.createElement("h3",null,n.name),r.a.createElement("p",null,"\u7fd2\u719f\u30ec\u30d9\u30eb:",n.proficiency),r.a.createElement(D,{inView:o,width:n.proficiency}),r.a.createElement("p",null,"\u8208\u5473\u30ec\u30d9\u30eb:",n.interest),r.a.createElement(D,{inView:o,width:n.interest})))};function q(){var e=Object(l.a)(["\n  max-width: 960px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 960px;\n  margin: 0 auto;\n"]);return q=function(){return e},e}function K(){var e=Object(l.a)(['\n  margin-top: 50px;\n  h1 {\n    margin-top: 20px;\n    font-size: 30px;\n    font-weight: bold;\n    font-family: "Open Sans", sans-serif;\n  }\n']);return K=function(){return e},e}var Q=g.c.div(K()),X=g.c.ul(q()),Z=function(){var e=Object(a.useContext)(u);return r.a.createElement(R.b.div,{animate:{rotateY:0,opacity:1},initial:{rotateY:90,opacity:0},exit:{rotateY:-90,opacity:0},transition:{duration:.5}},r.a.createElement(Q,null,r.a.createElement("h1",null,"Skill"),r.a.createElement("button",{onClick:function(){return e.dispatchProvided({type:"SORT_NAME"})}},"\u30bd\u30fc\u30c8\u30c6\u30b9\u30c8"),r.a.createElement("button",{onClick:function(){return e.dispatchProvided({type:"SORT_PROFICIENCY"})}},"\u7fd2\u719f\u5ea6\u9806"),r.a.createElement("button",{onClick:function(){return e.dispatchProvided({type:"SORT_INTEREST"})}},"\u8208\u5473\u5ea6\u9806"),r.a.createElement(X,null,e.stateProvided.skill.map((function(e,n){return r.a.createElement($,{key:n,skill:e})}))),r.a.createElement(v.b,{to:"/"},"\u623b\u308b")))};function ee(){var e=Object(l.a)(['\n  margin-top: 50px;\n  h1 {\n    margin-top: 20px;\n    font-size: 30px;\n    font-weight: bold;\n    font-family: "Open Sans", sans-serif;\n  }\n']);return ee=function(){return e},e}var ne=g.c.div(ee()),te=function(){return r.a.createElement(R.b.div,{animate:{rotateY:0,opacity:1},initial:{rotateY:90,opacity:0},exit:{rotateY:-90,opacity:0},transition:{duration:.5}},r.a.createElement(ne,null,r.a.createElement("h1",null,"Profile"),r.a.createElement("p",null,"1994\u5e74\u751f\u307e\u308c\u3001\u5927\u962a\u80b2\u3061\u3002",r.a.createElement("br",null),"\u7acb\u547d\u9928\u5927\u5b66\u60c5\u5831\u7406\u5de5\u5b66\u90e8\u5352\u696d\u5f8c\u3001\u51f8\u7248\u5370\u5237\u682a\u5f0f\u4f1a\u793e\u3078\u5165\u793e\u3002\u751f\u7523\u7ba1\u7406\u3068\u3057\u3066\u3001\u7d04\uff12\u5e74\u5f93\u4e8b\u3002\u30ab\u30bf\u30ed\u30b0\u3084\u30d1\u30f3\u30d5\u30ec\u30c3\u30c8\u306a\u3069\u306e\u88fd\u9020\u5de5\u7a0b\u306e\u7ba1\u7406\u3092\u62c5\u5f53\u3002",r.a.createElement("br",null),"\u305d\u306e\u5f8c\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u30c7\u30b6\u30a4\u30ca\u30fc\u3078\u8ee2\u8077\u3002Web\u30a8\u30f3\u30b8\u30cb\u30a2/Web\u30c7\u30b6\u30a4\u30ca\u30fc\u3068\u3057\u3066\u7d041\u5e74\u534a\u5f93\u4e8b\u3002\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306e\u5236\u4f5c\u306a\u3069\u3092\u62c5\u5f53\u3002"),r.a.createElement("h3",null,"TimeLine"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"2013/04")," ",r.a.createElement("span",null,"\u7acb\u547d\u9928\u5927\u5b66\u60c5\u5831\u7406\u5de5\u5b66\u90e8\u5165\u5b66")),r.a.createElement("li",null,r.a.createElement("span",null,"2017/03")," ",r.a.createElement("span",null,"\u7acb\u547d\u9928\u5927\u5b66\u60c5\u5831\u7406\u5de5\u5b66\u90e8\u5352\u696d")),r.a.createElement("li",null,"2017/04 \u51f8\u7248\u5370\u5237\u5165\u793e"),r.a.createElement("li",null,"2019/02 \u51f8\u7248\u5370\u5237\u9000\u793e")),r.a.createElement("h4",null,"Hobby"),r.a.createElement("p",null,"\u30c0\u30fc\u30c4\u30fb\u8aad\u66f8\u30fb\u30e9\u30f3\u30cb\u30f3\u30b0"),r.a.createElement(v.b,{to:"/"},"\u623b\u308b")))};function ae(){var e=Object(l.a)(["\n  background-color: rgba(38, 46, 49, 1);\n  width: 100%;\n  height: 70px;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  z-index: 10000;\n  a {\n    color: #fff;\n  }\n  > ul {\n    display: flex;\n    padding-right: 100px;\n    > li {\n      width: 100px;\n      padding: 15px;\n    }\n  }\n"]);return ae=function(){return e},e}var re=g.c.nav(ae()),ie=function(){var e=Object(a.useContext)(u),n=Object(b.f)(),t=n.pathname.split("/"),i=Object(c.a)(t,2);i[0],i[1];return console.log(n),r.a.createElement(re,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{to:""},"top")),e.stateProvided.introductions.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(v.b,{to:"/".concat(e.title)},e.title))}))))},oe={skill:[{name:"React",period:"0.5",proficiency:2,interest:5},{name:"HTML5",period:"0.5",proficiency:4,interest:2},{name:"CSS3",period:"0.5",proficiency:4,interest:3},{name:"Python",period:"0.5",proficiency:2,interest:4},{name:"JavaScript",period:"0.5",proficiency:3,interest:4},{name:"Django",period:"0.5",proficiency:1,interest:3},{name:"Sass",period:"0.5",proficiency:4,interest:4},{name:"Vue.js",period:"0.5",proficiency:1,interest:3}],introductions:[{id:"1",title:"profile",body:"\u3053\u308c\u307e\u3067\u306e\u7d4c\u6b74\u306a\u3069"},{id:"2",title:"skill",body:"\u5b9f\u52d9\u3084\u81ea\u5df1\u5b66\u7fd2\u306b\u3088\u308a\u7fd2\u5f97\u3057\u305f\u30b9\u30ad\u30eb\u4e00\u89a7\u306a\u3069"}]},ce=t(30);function le(){var e=Object(l.a)(["\n  padding-top: 70px;\n"]);return le=function(){return e},e}function ue(){var e=Object(l.a)(["\n  ","\n  a{\n    text-decoration: none;\n    color:#000;\n  }\n  *{box-sizing: border-box;}\n  /* other styles */\n"]);return ue=function(){return e},e}var se=Object(g.a)(ue(),ce.a),pe=g.c.section(le());var me=function(){var e=Object(a.useReducer)(E,oe),n=Object(c.a)(e,2),t=n[0],i=n[1];console.log("appinitiaasta",oe);var o=Object(b.f)(),l=o.pathname.split("/"),s=Object(c.a)(l,2),p=(s[0],s[1]),m=function(e){var n=new URLSearchParams(e);return Object.fromEntries(n)}(o.search);return Object.keys(m).includes("dialog"),r.a.createElement("div",{className:"App"},r.a.createElement(se,null),r.a.createElement(u.Provider,{value:{stateProvided:t,dispatchProvided:i}},r.a.createElement(ie,null),r.a.createElement(pe,null,r.a.createElement(R.a,{exitBeforeEnter:!0},r.a.createElement(b.c,{location:o,key:p},r.a.createElement(b.a,{exact:!0,path:"/",component:L}),r.a.createElement(b.a,{exact:!0,path:"/skill",component:Z}),r.a.createElement(b.a,{path:"/profile",component:te}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a673e2cf.chunk.js.map