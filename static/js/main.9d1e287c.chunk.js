(this["webpackJsonppf-react-ts-hooks-redux"]=this["webpackJsonppf-react-ts-hooks-redux"]||[]).push([[0],{104:function(e,n,t){},105:function(e,n,t){},257:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(12),o=t.n(r),c=(t(104),t(22)),l=t(13),s=(t(105),Object(a.createContext)({})),u=t(90),m={id:"",title:"",body:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[m],n=arguments.length>1?arguments[1]:void 0;return n.type,e},d=t(57),f={name:"",period:"",proficiency:0,interest:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[f],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SORT_INTEREST":return e.sort((function(e,n){return(e=e.interest)<(n=n.interest)?1:e>n?-1:0})),Object(d.a)(e);case"SORT_PROFICIENCY":return e.sort((function(e,n){return(e=e.proficiency)<(n=n.proficiency)?1:e>n?-1:0})),Object(d.a)(e);case"SORT_NAME":return e.sort((function(e,n){return(e=e.name.toLowerCase())<(n=n.name.toLowerCase())?-1:e>n?1:0})),Object(d.a)(e);default:return Object(d.a)(e)}},b=Object(u.a)({introductions:p,skill:h}),g=t(16),v=t(24),E=t(9);function y(){var e=Object(l.a)(["\n  width: 220px;\n  height: 220px;\n  path {\n    fill: url(#human_grad);\n  }\n  #human_stop1 {\n    animation: human-change-color1 3s ease-in-out infinite alternate;\n  }\n  #human_stop2 {\n    animation: human-change-color2 3s ease-in-out infinite alternate;\n  }\n  @keyframes human-change-color1 {\n    0% {\n      stop-color: yellow;\n    }\n    100% {\n      stop-color: lime;\n    }\n  }\n  @keyframes human-change-color2 {\n    0% {\n      stop-color: purple;\n    }\n    100% {\n      stop-color: aqua;\n    }\n  }\n"]);return y=function(){return e},e}var x=Object(E.c)((function(e){var n=e.className;return i.a.createElement("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"human_grad",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{id:"human_stop1",offset:"0%"}),i.a.createElement("stop",{id:"human_stop2",offset:"100%"}))),i.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"}))}))(y());function w(){var e=Object(l.a)(["\n  width: 220px;\n  height: 220px;\n  path {\n    fill: url(#grad1);\n  }\n  #stop1 {\n    animation: change-color1 3s ease-in-out infinite alternate;\n  }\n  #stop2 {\n    animation: change-color2 3s ease-in-out infinite alternate;\n  }\n  @keyframes change-color1 {\n    0% {\n      stop-color: purple;\n    }\n    100% {\n      stop-color: aqua;\n    }\n  }\n  @keyframes change-color2 {\n    0% {\n      stop-color: fuchsia;\n    }\n    100% {\n      stop-color: olive;\n    }\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(l.a)(["\n  width: 220px;\n  height: 220px;\n  path {\n    fill: url(#grad1);\n  }\n  #stop1 {\n    animation: change-color1 3s ease-in-out infinite alternate;\n  }\n  #stop2 {\n    animation: change-color2 3s ease-in-out infinite alternate;\n  }\n  @keyframes change-color1 {\n    0% {\n      stop-color: fuchsia;\n    }\n    100% {\n      stop-color: red;\n    }\n  }\n  @keyframes change-color2 {\n    0% {\n      stop-color: blue;\n    }\n    100% {\n      stop-color: green;\n    }\n  }\n"]);return O=function(){return e},e}E.c.svg(O());var j=Object(E.c)((function(e){var n=e.className;return i.a.createElement("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"grad1",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{id:"stop1",offset:"0%"}),i.a.createElement("stop",{id:"stop2",offset:"100%"}))),i.a.createElement("path",{d:"M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"}))}))(w());function k(){var e=Object(l.a)(['\n  padding: 10px 30px;\n  width: 40%;\n  min-width: 300px;\n  &:hover {\n    opacity: 0.8;\n  }\n  h2 {\n    margin-top: 15px;\n    font-family: "Open Sans", sans-serif;\n    font-weight: bold;\n    font-size: 26px;\n  }\n  p {\n    margin-top: 10px;\n    font-size: 15px;\n  }\n']);return k=function(){return e},e}var N=Object(E.c)((function(e){var n=e.introduction,t=e.className;return i.a.createElement("li",{className:t},i.a.createElement(v.b,{to:"/".concat(n.title)},"Profile"===n.title&&i.a.createElement(x,null),"Skill"===n.title&&i.a.createElement(j,null),i.a.createElement("h2",null,n.title),i.a.createElement("p",null,n.body)))}))(k()),S=t(48),_=t(35);function P(){var e=Object(l.a)(["\n  max-width: 1000px;\n  margin: 50px auto 0;\n  padding-bottom: 8%;\n  transition: 2s;\n  /* opacity: 0; */\n  opacity: ",';\n  &_title {\n    h1 {\n      margin-top: 20px;\n      font-size: 50px;\n      font-weight: bold;\n      font-family: "Open Sans", sans-serif;\n    }\n    h2 {\n      margin-top: 30px;\n      font-size: 20px;\n    }\n    p {\n      margin-top: 5px;\n      font-size: 20px;\n    }\n  }\n  &_dsc {\n    margin-top: 50px;\n    font-size: 16px;\n    line-height: 2.3;\n    letter-spacing: 0.025em;\n  }\n  &_introductionCards {\n    margin-top: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n']);return P=function(){return e},e}function z(){var e=Object(l.a)(["\n  opacity: 0;\n  transition: 2s;\n  opacity: ",";\n"]);return z=function(){return e},e}var C=E.c.div(z(),(function(e){return e.inView&&"1"})),I=Object(E.c)((function(e){var n=e.className,t=Object(a.useContext)(s);console.log(t);Object(a.useEffect)((function(){return document.title="ABOUT ME",window.scrollTo(0,0),function(){document.title="ReactApp"}}),[]);var r=Object(S.a)({}),o=Object(c.a)(r,2),l=o[0],u=o[1],m=Object(S.a)({}),p=Object(c.a)(m,2),d=p[0],f=p[1],h=Object(S.a)({}),b=Object(c.a)(h,2),g=b[0],v=b[1];return i.a.createElement(_.b.div,{animate:t.isIPhone?{x:0,opacity:1}:{rotateY:0,opacity:1},initial:t.isIPhone?{x:500,opacity:1}:{rotateY:90,opacity:1},exit:t.isIPhone?{x:-500,opacity:1}:{rotateY:-90,opacity:1},transition:{duration:.5}},i.a.createElement("div",{className:n},i.a.createElement("div",{className:"".concat(n,"_aboutMe")},i.a.createElement(C,{inView:u,ref:l,className:"".concat(n,"_title")},i.a.createElement("h1",null,"ABOUT ME"),i.a.createElement("h2",null,"\u5e02\u6a4b \u512a\u609f"),i.a.createElement("p",null,"Yugo Ichihashi")),i.a.createElement(C,{inView:f,ref:d,className:"".concat(n,"_dsc")},i.a.createElement("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u30b9\u30dd\u30fc\u30c4\u30d6\u30e9\u30f3\u30c9\u306eWeb\u5236\u4f5c\u30fb\u904b\u7528\u696d\u52d9\u306b\u53d6\u308a\u7d44\u3093\u3067\u304a\u308a\u307e\u3057\u305f\u3002",i.a.createElement("br",null),"\u30c7\u30a3\u30ec\u30af\u30bf\u30fc\u3084\u9867\u5ba2\u3068\u9023\u643a\u3057\u3001HTML/CSS/JavaScript\u3068\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u305f",i.a.createElement("br",null),"\u30ea\u30c3\u30c1\u306a\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306e\u5236\u4f5c\u3092\u884c\u3046\u306e\u304c\u4e3b\u306a\u696d\u52d9\u3067\u3059\u3002",i.a.createElement("br",null),"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30fbWeb\u30c7\u30b6\u30a4\u30f3\u306e\u6280\u8853\u3078\u306e\u95a2\u5fc3\u304c\u5f37\u304b\u3063\u305f\u3053\u3068\u3084",i.a.createElement("br",null),"\u751f\u7523\u7ba1\u7406\u306e\u7d4c\u9a13\u306b\u3088\u308b\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u7ba1\u7406\u306e\u59ff\u52e2\u304c\u8a55\u4fa1\u3055\u308c\u3001",i.a.createElement("br",null),"\u6280\u8853\u30ea\u30fc\u30c0\u30fc\u3068\u3057\u3066\u30c1\u30fc\u30e0\u3092\u727d\u5f15\u3057\u3066\u304a\u308a\u307e\u3057\u305f\u3002",i.a.createElement("br",null),"React.js\u3084Vue.js\u306a\u3069\u306e\u30e2\u30c0\u30f3\u6280\u8853\u3092\u7528\u3044\u305f\u958b\u767a\u306b\u8208\u5473\u3092\u6301\u3061",i.a.createElement("br",null),"\u72ec\u5b66\u3092\u59cb\u3081\u305f\u3053\u3068\u3092\u304d\u3063\u304b\u3051\u306b\u8ee2\u8077\u6d3b\u52d5\u3092\u884c\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002"))),i.a.createElement(C,{className:"".concat(n,"_introductionCards"),inView:v,ref:g},t.stateProvided.introductions.map((function(e,n){return i.a.createElement(N,{key:n,introduction:e})})))))}))(P(),(function(e){return e.inView&&"1"}));function T(){var e=Object(l.a)(['\n  margin: 0 auto;\n  display: flex;\n  &_logoWrap {\n    min-width: 200px;\n    > img {\n      width: 180px;\n      height: 180px;\n      padding: 20px;\n    }\n  }\n  &_skillLevel {\n    min-width: 200px;\n    h3 {\n      margin-top: 15px;\n      font-weight: bold;\n      font-size: 20px;\n    }\n    p {\n      margin-top: 10px;\n    }\n  }\n  &_skillBar {\n    margin-top: 10px;\n    width: 100%;\n    height: 1rem;\n    background: #fff;\n    position: relative;\n    border-radius: 10px;\n    box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);\n    transition: 1s;\n    &::after {\n      content: "";\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 100%;\n      border-radius: 10px;\n      background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);\n    }\n  }\n']);return T=function(){return e},e}function R(){var e=Object(l.a)(["\n  &::after {\n    transition: 2s;\n    width: 10%;\n    width: ",";\n  }\n"]);return R=function(){return e},e}function V(){var e=Object(l.a)(["\n  transition: 2s;\n  opacity: 0;\n  opacity: ",";\n"]);return V=function(){return e},e}var M=E.c.div(V(),(function(e){return e.inView&&"1"})),A=E.c.div(R(),(function(e){return e.inView&&20*e.width+"%"})),B=Object(E.c)((function(e){var n=e.skill,t=e.className,a=Object(S.a)({threshold:0}),r=Object(c.a)(a,2),o=r[0],l=r[1];return i.a.createElement(M,{inView:l,ref:o,className:t},i.a.createElement("div",{className:"".concat(t,"_logoWrap")},i.a.createElement("img",{src:"".concat("/pf-react-ts-hooks-redux","/icons/").concat(n.name,".svg")})),i.a.createElement("div",{className:"".concat(t,"_skillLevel")},i.a.createElement("h3",null,n.name),i.a.createElement("p",null,"\u7fd2\u719f\u30ec\u30d9\u30eb:",n.proficiency),i.a.createElement(A,{className:"".concat(t,"_skillBar"),inView:l,width:n.proficiency}),i.a.createElement("p",null,"\u8208\u5473\u30ec\u30d9\u30eb:",n.interest),i.a.createElement(A,{className:"".concat(t,"_skillBar"),inView:l,width:n.interest})))}))(T()),Y=t(290),L=t(297),U=t(298),W=t(296),q=t(293),H=t(295);function J(){var e=Object(l.a)(['\n  max-width: 960px;\n  margin: 50px auto 0;\n  padding-bottom: 8%;\n  h1 {\n    margin-top: 20px;\n    font-size: 30px;\n    font-weight: bold;\n    font-family: "Open Sans", sans-serif;\n  }\n  &_sort {\n    /* text-align: right; */\n  }\n  &_skillUl {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n']);return J=function(){return e},e}var F=Object(Y.a)((function(e){return Object(L.a)({button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}})})),G=Object(E.c)((function(e){var n=e.className,t=F(),r=Object(a.useContext)(s),o=Object(g.f)().pathname.split("/"),l=Object(c.a)(o,2),u=(l[0],l[1]);return Object(a.useEffect)((function(){return document.title=u,window.scrollTo(0,0),function(){document.title="ReactApp"}}),[]),i.a.createElement(_.b.div,{animate:r.isIPhone?{x:0,opacity:1}:{rotateY:0,opacity:1},initial:r.isIPhone?{x:500,opacity:1}:{rotateY:90,opacity:1},exit:r.isIPhone?{x:-500,opacity:1}:{rotateY:-90,opacity:1},transition:{duration:.5}},i.a.createElement("div",{className:n},i.a.createElement("h1",null,"Skill"),i.a.createElement("div",{className:"".concat(n,"_sort")},i.a.createElement(q.a,{className:t.formControl},i.a.createElement(U.a,{id:"demo-controlled-open-select-label"},"Sort"),i.a.createElement(H.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",onChange:function(e){r.dispatchProvided({type:e.target.value})}},i.a.createElement(W.a,{value:"SORT_INTEREST"},"\u8208\u5473\u5ea6\u9806"),i.a.createElement(W.a,{value:"SORT_PROFICIENCY"},"\u7fd2\u719f\u5ea6\u9806"),i.a.createElement(W.a,{value:"SORT_NAME"},"\u540d\u524d\u9806(A\u2192Z)")))),i.a.createElement("div",{className:"".concat(n,"_skillUl")},r.stateProvided.skill.map((function(e,n){return i.a.createElement(B,{key:n,skill:e})})))))}))(J());function X(){var e=Object(l.a)(['\n  margin: 50px auto 0;\n  padding-bottom: 8%;\n  h1 {\n    margin-top: 20px;\n    font-size: 30px;\n    font-weight: bold;\n    font-family: "Open Sans", sans-serif;\n  }\n']);return X=function(){return e},e}var D=Object(E.c)((function(e){var n=e.className,t=Object(a.useContext)(s),r=Object(g.f)().pathname.split("/"),o=Object(c.a)(r,2),l=(o[0],o[1]);return Object(a.useEffect)((function(){return document.title=l,window.scrollTo(0,0),function(){document.title="ReactApp"}})),i.a.createElement(_.b.div,{animate:t.isIPhone?{x:0,opacity:1}:{rotateY:0,opacity:1},initial:t.isIPhone?{x:500,opacity:1}:{rotateY:90,opacity:1},exit:t.isIPhone?{x:-500,opacity:1}:{rotateY:-90,opacity:1},transition:{duration:.5}},i.a.createElement("div",{className:n},i.a.createElement("h1",null,"Profile"),i.a.createElement("p",null,"1994\u5e74\u751f\u307e\u308c\u3001\u5927\u962a\u80b2\u3061\u3002",i.a.createElement("br",null),"\u7acb\u547d\u9928\u5927\u5b66\u60c5\u5831\u7406\u5de5\u5b66\u90e8\u5352\u696d\u5f8c\u3001\u51f8\u7248\u5370\u5237\u682a\u5f0f\u4f1a\u793e\u3078\u5165\u793e\u3002\u751f\u7523\u7ba1\u7406\u3068\u3057\u3066\u3001\u7d04\uff12\u5e74\u5f93\u4e8b\u3002\u30ab\u30bf\u30ed\u30b0\u3084\u30d1\u30f3\u30d5\u30ec\u30c3\u30c8\u306a\u3069\u306e\u88fd\u9020\u5de5\u7a0b\u306e\u7ba1\u7406\u3092\u62c5\u5f53\u3002",i.a.createElement("br",null),"\u305d\u306e\u5f8c\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u30c7\u30b6\u30a4\u30ca\u30fc\u3078\u8ee2\u8077\u3002Web\u30a8\u30f3\u30b8\u30cb\u30a2/Web\u30c7\u30b6\u30a4\u30ca\u30fc\u3068\u3057\u3066\u7d041\u5e74\u534a\u5f93\u4e8b\u3002\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306e\u5236\u4f5c\u306a\u3069\u3092\u62c5\u5f53\u3002"),i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u5728\u7c4d"),i.a.createElement("th",null,"\u5e74\u5ea6"),i.a.createElement("th",null,"\u6982\u8981")),i.a.createElement("tr",null,i.a.createElement("td",null,"\u7acb\u547d\u9928\u5927\u5b66"),i.a.createElement("td",null,"2013/4-2017/3"),i.a.createElement("td",null,"\u60c5\u5831\u7406\u5de5\u5b66\u90e8\u60c5\u5831\u30b7\u30b9\u30c6\u30e0\u5b66\u79d1\u306b\u3066\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u77e5\u8b58\u3092\u4e3b\u306b\u5c02\u653b\u3057\u307e\u3057\u305f\u3002")),i.a.createElement("tr",null,i.a.createElement("td",null,"\u51f8\u7248\u5370\u5237"),i.a.createElement("td",null,"2017/4-2019/2"),i.a.createElement("td",null,"\u30d1\u30f3\u30d5\u30ec\u30c3\u30c8\u3001\u30ab\u30bf\u30ed\u30b0\u306a\u3069\u306e\u751f\u7523\u3092\u4e3b\u3068\u3057\u305fA\u8f2a\u8ee2\u6a5f\u3001B\u8f2a\u8ee2\u6a5f\u306e\u751f\u7523\u7ba1\u7406\u3002\u55b6\u696d\u90e8\u9580\u3001\u8cc7\u6750\u90e8\u9580\u3001\u6280\u8853\u90e8\u9580\u3001\u5de5\u5834\u306a\u3069\u591a\u304f\u306e\u90e8\u9580\u3068\u60c5\u5831\u3092\u5171\u6709\u3057\u3001\u88fd\u54c1\u304c\u9867\u5ba2\u306e\u5143\u3078\u5c4a\u304f\u307e\u3067\u306e\u5168\u30b9\u30c6\u30c3\u30d7\u3092\u7ba1\u7406\u3002")),i.a.createElement("tr",null,i.a.createElement("td",null,"\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u30c7\u30b6\u30a4\u30ca\u30fc"),i.a.createElement("td",null,"2019/2-2020/7"),i.a.createElement("td",null,"HTML/CSS/JavaScript\u3068\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u305f\u30ea\u30c3\u30c1\u306a\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306e\u5236\u4f5c\u3092\u62c5\u5f53"))),i.a.createElement("h4",null,"Hobby"),i.a.createElement("p",null,"\u30c0\u30fc\u30c4\u30fb\u8aad\u66f8\u30fb\u30e9\u30f3\u30cb\u30f3\u30b0")))}))(X());function Z(){var e=Object(l.a)(["\n  background-color: rgba(38, 46, 49, 1);\n  width: 100%;\n  height: 70px;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  z-index: 10000;\n  a {\n    color: #fff;\n  }\n  > ul {\n    display: flex;\n    padding-right: 100px;\n    > li {\n      width: 100px;\n      padding: 15px;\n    }\n  }\n"]);return Z=function(){return e},e}var $=Object(E.c)((function(e){var n=e.className,t=Object(a.useContext)(s);return i.a.createElement("nav",{className:n},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.b,{to:""},"top")),t.stateProvided.introductions.map((function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(v.b,{to:"/".concat(e.title)},e.title))}))))}))(Z());function K(){var e=Object(l.a)(["\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  transform: translateX(1000px);\n  transition: 2s;\n  transition-delay: 0.5s;\n  &.visivle {\n    transform: translateX(0);\n    transition-delay: 2s;\n  }\n"]);return K=function(){return e},e}var Q=Object(E.c)((function(e){var n=e.className,t=Object(a.useContext)(s);return i.a.createElement("div",{className:"".concat(n," ").concat(""!==t.key&&"visivle")},i.a.createElement(v.b,{to:"/"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-arrow-circle-left fa-3x"}),"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078\u623b\u308b")))}))(K()),ee=t(112),ne=i.a.memo((function(){return console.log("memo"),navigator.userAgent.indexOf("iPhone"),te})),te=i.a.createElement(ee,{id:"tsparticles",width:"100%",height:"100%",style:{position:"fixed",zIndex:"-1",top:"0",left:"0",minHeight:"100vh"},options:{background:{color:{value:"#efefef"},image:"",position:"50% 50%",repeat:"no-repeat",size:"cover",opacity:1},backgroundMask:{cover:{color:{value:"#fff"},opacity:1},enable:!1},detectRetina:!0,fpsLimit:30,infection:{cure:!1,delay:0,enable:!1,infections:0,stages:[]},interactivity:{detectsOn:"canvas",events:{resize:!0},modes:{attract:{distance:200,duration:.4,speed:1},bubble:{distance:400,duration:2,opacity:.8,color:{value:"#ff0000"},size:40},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:400,links:{opacity:1}},push:{quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,speed:1},slow:{factor:3,radius:200},trail:{delay:1,quantity:1}}},particles:{collisions:{enable:!1,mode:"bounce"},color:{value:"#1b1e34",animation:{enable:!1,speed:1,sync:!0}},links:{blink:!1,color:{value:"#ffffff"},consent:!1,distance:200,enable:!1,opacity:1,shadow:{blur:5,color:{value:"#00ff00"},enable:!1},triangles:{enable:!1},width:2,warp:!1},move:{angle:90,attract:{enable:!1,rotate:{x:600,y:1200}},direction:"none",enable:!0,noise:{delay:{random:{enable:!1,minimumValue:0},value:0},enable:!1},outMode:"out",random:!1,speed:3,straight:!1,trail:{enable:!1,length:10,fillColor:{value:"#000000"}},vibrate:!1,warp:!1},number:{density:{enable:!0,area:800,factor:1e3},limit:0,value:6},opacity:{animation:{enable:!1,minimumValue:.1,speed:1,sync:!1},random:{enable:!0,minimumValue:.3},value:.5},rotate:{animation:{enable:!1,speed:0,sync:!1},direction:"clockwise",path:!1,random:!1,value:0},shadow:{blur:0,color:{value:"#000000"},enable:!1,offset:{x:0,y:0}},shape:{options:{polygon:{nb_sides:6},star:{nb_sides:6},image:{src:"https://cdn.matteobruni.it/images/particles/github.svg",width:100,height:100},images:{src:"https://cdn.matteobruni.it/images/particles/github.svg",width:100,height:100}},type:"polygon"},size:{animation:{destroy:"none",enable:!1,minimumValue:40,speed:5,startValue:"max",sync:!1},random:{enable:!0,minimumValue:100},value:160},stroke:{width:0,color:{value:"#000",animation:{enable:!1,speed:1,sync:!0}}},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}}},pauseOnBlur:!0}}),ae={skill:[{name:"React",period:"0.5",proficiency:2,interest:5},{name:"TypeScript",period:"0.5",proficiency:1,interest:4},{name:"JavaScript",period:"0.5",proficiency:3,interest:4},{name:"HTML5",period:"0.5",proficiency:4,interest:2},{name:"CSS3",period:"0.5",proficiency:4,interest:3},{name:"Python",period:"0.5",proficiency:2,interest:4},{name:"Django",period:"0.5",proficiency:1,interest:3},{name:"Sass",period:"0.5",proficiency:4,interest:4},{name:"Vue.js",period:"0.5",proficiency:1,interest:3}],introductions:[{id:"1",title:"Profile",body:"\u3053\u308c\u307e\u3067\u306e\u7d4c\u6b74\u306a\u3069"},{id:"2",title:"Skill",body:"\u5b9f\u52d9\u3084\u81ea\u5df1\u5b66\u7fd2\u306b\u3088\u308a\u7fd2\u5f97\u3057\u305f\u30b9\u30ad\u30eb\u4e00\u89a7"}]},ie=t(95);function re(){var e=Object(l.a)(["\n  padding-top: 70px;\n"]);return re=function(){return e},e}function oe(){var e=Object(l.a)(["\n  ","\n  *{box-sizing: border-box;}\n  *{color:#000}\n  a{\n    text-decoration: none;\n  }\n  li{list-style: none;}\n"]);return oe=function(){return e},e}var ce=Object(E.a)(oe(),ie.a),le=E.c.section(re()),se=function(){var e=Object(a.useReducer)(b,ae),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(g.f)(),l=o.pathname.split("/"),u=Object(c.a)(l,2),m=(u[0],u[1]),p=function(e){var n=new URLSearchParams(e);return Object.fromEntries(n)}(o.search),d=(Object.keys(p).includes("dialog"),Object(a.useState)(!1)),f=Object(c.a)(d,2),h=f[0],v=f[1];return Object(a.useEffect)((function(){navigator.userAgent.indexOf("iPhone")>0&&v(!0)}),[]),i.a.createElement("div",{className:"App"},i.a.createElement(ce,null),i.a.createElement(s.Provider,{value:{stateProvided:t,dispatchProvided:r,location:o,key:m,isIPhone:h}},i.a.createElement($,null),i.a.createElement(le,null,i.a.createElement(ne,null),i.a.createElement(_.a,{exitBeforeEnter:!0},i.a.createElement(g.c,{location:o,key:m},i.a.createElement(g.a,{exact:!0,path:"/",component:I}),i.a.createElement(g.a,{exact:!0,path:"/skill",component:G}),i.a.createElement(g.a,{exact:!0,path:"/profile",component:D})))),i.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v.a,null,i.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,n,t){e.exports=t(257)}},[[99,1,2]]]);
//# sourceMappingURL=main.9d1e287c.chunk.js.map