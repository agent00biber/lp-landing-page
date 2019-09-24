(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-539f9310"],{1696:function(t,e,s){"use strict";var a=s("3abc"),i=s.n(a);i.a},"3abc":function(t,e,s){},a6e6:function(t,e,s){},b73e:function(t,e,s){"use strict";var a=s("ecbb"),i=s.n(a);i.a},e440:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"development"},[s("terminal",{attrs:{id:"js-terminal"}}),s("section",{staticClass:"sticky-wrapper"},[s("div",{staticClass:"sticky-content"},[s("div",{staticClass:"editor-container"},[s("editor",{staticClass:"editor-layout-main active ",attrs:{id:"js-editor"}},[s("p",{staticClass:"editor-text comment-text"},[t._v("//web development toolbox")]),s("div",{staticClass:"editor-text text-grouping"},[s("p",{staticClass:"require-text"},[t._v("\n              require("),s("span",{staticClass:"require-text--inside"},[t._v("ES6, advanced CSS")]),t._v(")\n            ")]),s("p",{staticClass:"editor-text import-text"},[t._v("\n              import "),s("span",{staticClass:"import-text--inside"},[t._v("Vue")]),t._v(" from\n              "),s("span",{staticClass:"import-text--inside"},[t._v('"vue"')])])]),s("p",{staticClass:"editor-text create-text"},[t._v("\n            create "),s("span",{staticClass:"import-text--inside"},[t._v("webApp")])])]),s("editor",{staticClass:"editor-layout-1"}),s("editor",{staticClass:"editor-layout-2"}),s("editor",{staticClass:"editor-layout-3"}),s("editor",{staticClass:"editor-layout-4"}),s("editor",{staticClass:"editor-layout-5"}),s("editor",{staticClass:"editor-layout-6"}),s("editor",{staticClass:"editor-layout-7"})],1)])]),s("section",{staticClass:"main-content"},[t._m(0),t._m(1),t._m(2),t._m(3),s("footer",{staticClass:"footer"},[s("router-link",{attrs:{to:{name:"home"}}},[t._v("Back home")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"headline-wrapper"},[s("h1",{staticClass:"main--headline"},[t._v("Creative web development")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("h2",{staticClass:"headline"},[t._v("\n        Why do I understand the development department?\n      ")]),s("p",{staticClass:"text"},[t._v("\n        I bring engaging web apps and prototypes from designs to live with vue\n        and javascript. I have to implement the given specs and need to\n        consider performance and security.\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("h2",{staticClass:"headline"},[t._v("Always one puzzle away")]),s("p",{staticClass:"text"},[t._v("\n        I enjoy coding and the art of solving a problem in different ways. For\n        me its a series of puzzles needing to solved\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("h2",{staticClass:"headline"},[t._v("My Projects")]),s("p",{staticClass:"text"},[t._v("\n        Here are some projects I did to showcase skill and get familar with\n        different topics and website types.\n      ")]),s("div",{staticClass:"text-box--small"},[s("a",{staticClass:"link",attrs:{href:"#"}},[t._v("Feedback Creator")])]),s("div",{staticClass:"text-box--small"},[s("a",{staticClass:"link",attrs:{href:"#"}},[t._v("T-shirt store")])])])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editor"},[t._m(0),s("div",{staticClass:"editor--text-wrapper"},[t._t("default")],2)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editor--headline"},[s("div",{staticClass:"dots"},[s("div",{staticClass:"dot red"}),s("div",{staticClass:"dot orange"}),s("div",{staticClass:"dot green"})])])}],o=(s("1696"),s("2877")),c={},l=Object(o["a"])(c,n,r,!1,null,"ce156ac0",null),d=l.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"overlay"},[s("div",{staticClass:"overlay-container container0"},[s("span",{staticClass:"overlay-start"},[t._v("//")]),s("p",{staticClass:"overlay-text"},[t._v("CREATIVE WEB DEVELOPMENT")])]),s("div",{staticClass:"overlay-container container1"},[s("span",{staticClass:"overlay-start"},[t._v(">")]),s("p",{staticClass:"overlay-text"},[t._v("I AM SORRY DAVE, I AM AFRAID I CANT DO THAT")])]),s("div",{staticClass:"overlay-container container2"},[s("span",{staticClass:"overlay-start"},[t._v(">")]),s("p",{staticClass:"overlay-text"},[t._v("JUST SCROLL DOWN")])]),s("div",{staticClass:"overlay-container container3"},[s("span",{staticClass:"overlay-start"},[t._v(">")]),s("p",{staticClass:"overlay-text"},[t._v("|")])])])}],p={components:{},props:[],name:"terminal",data:function(){return{}},methods:{goTo:function(t){this.$router.push({name:t})}},computed:{},created:function(){},activated:function(){}},m=p,C=(s("b73e"),Object(o["a"])(m,v,u,!1,null,"fa91543e",null)),f=C.exports,_={components:{editor:d,terminal:f},props:[],name:"development",data:function(){return{scaleValue:5}},methods:{scrollEditor:function(){var t=document.querySelector("#js-editor"),e=document.querySelector("#js-terminal"),s=Math.max(window.scrollY)/window.innerHeight;s>0?e.style.opacity=1-3*s>0?3*s>0:0:s>.5?e.style.display="none":(e.style.opacity=1,e.style.display="grid"),s>1?t.classList.add("visible"):t.classList.remove("visible");var a=this.scaleValue-3*s;t.style.transform="scale( ".concat(a>1?a:1," )")}},computed:{},created:function(){},activated:function(){},mounted:function(){var t=document.getElementById("js-editor");t.style.transform="scale( ".concat(this.scaleValue," )"),window.addEventListener("scroll",this.scrollEditor)},destroyed:function(){window.removeEventListener("scroll",this.scrollEditor)}},y=_,h=(s("e4af"),Object(o["a"])(y,a,i,!1,null,"54ab3932",null));e["default"]=h.exports},e4af:function(t,e,s){"use strict";var a=s("a6e6"),i=s.n(a);i.a},ecbb:function(t,e,s){}}]);
//# sourceMappingURL=chunk-539f9310.18cac718.js.map