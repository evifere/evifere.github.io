(function(t){function e(e){for(var a,l,c=e[0],i=e[1],o=e[2],d=0,f=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},s=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4527:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-content",[n("Sacrebleu")],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{staticClass:"d-inline-flex ml-1",attrs:{"text-center":"",wrap:"","max-width":"800"}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Sacrebleu")])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("lettersStack")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.lettersStack,(function(e,n){return a("div",{key:n,staticClass:"subheading mx-3"},t._l(e,(function(e,n){return a("span",{key:n},[t._v(t._s(e))])})),0)})),0)],1),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("currentHand")]),a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.onDrawLetters}},[t._v("Next")]),a("v-btn",{attrs:{small:"",color:"secondary"},on:{click:t.onRestart}},[t._v("Restart")]),t._l(t.currentHand,(function(e,n){return a("span",{key:n,staticClass:"subheading mx-3"},[t._v(t._s(e))])}))],2)],1),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Put letters")]),a("v-layout",{attrs:{"justify-center":""}},[a("v-form",{attrs:{"lazy-validation":!0}},[a("draggable",{model:{value:t.currentHand,callback:function(e){t.currentHand=e},expression:"currentHand"}},[a("transition-group",t._l(t.currentHand,(function(e,n){return a("v-checkbox",{key:"letter"+n+"_"+e,staticClass:"d-inline-flex pa-6 letter",attrs:{label:e,value:e},model:{value:t.selectedLetters,callback:function(e){t.selectedLetters=e},expression:"selectedLetters"}},[t._v(t._s(e))])})),1)],1),a("div",{staticClass:"justify-center ml-12"},[a("v-btn",{staticClass:"d-block ml-12",attrs:{small:"",color:"secondary",disabled:t.canPlay},on:{click:t.onPlay}},[t._v("Play")])],1)],1)],1)],1),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Words")]),a("v-layout",{attrs:{"justify-center":""}},[a("p",t._l(t.wordsStack,(function(e,n){return a("span",{key:n,staticClass:"subheading mx-3 d-block"},[t._v(t._s(e.join(""))+" ✔️")])})),0)])],1)],1)],1)},c=[],i=n("75fc"),o=n("2ef0"),u=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],d={alphabet:u,getChunks:function(t,e){var n=o.chunk(t,e);return n},concatChunks:function(t){var e=t;return e.shift(),o.concat(e)}},f=n("310e"),h=n.n(f),p={name:"Sacrebleu",components:{draggable:h.a},data:function(){return{letters:[],lettersStack:d.getChunks(d.alphabet,7),wordsStack:[],currentChunk:0,letterInput:{value:""},selectedLetters:[]}},computed:{currentHand:{get:function(){return this.letters},set:function(t){this.letters=t}},canPlay:function(){var t=this.selectedLetters.length;return console.log("canPLay len",t,this.letters.length),t<1||t>7||0===this.letters.length}},methods:{onDrawLetters:function(){var t,e;this.lettersStack=d.getChunks((t=_).concat.apply(t,Object(i["a"])(this.lettersStack)),7-this.letters.length),(e=this.letters).push.apply(e,Object(i["a"])(this.lettersStack[0])),this.lettersStack.shift()},onRestart:function(){this.lettersStack=d.getChunks(d.alphabet,7),this.letters=[],this.wordsStack=[],this.selectedLetters=[]},onPlay:function(){var t=_.difference(this.letters,this.selectedLetters),e=this.selectedLetters;this.letters=t,this.wordsStack.push(e),this.selectedLetters=[]}}},v=p,b=(n("7962"),n("2877")),m=n("6544"),y=n.n(m),g=n("8336"),k=n("ac7c"),x=n("a523"),w=n("0e8f"),C=n("4bd4"),j=n("adda"),S=n("a722"),V=Object(b["a"])(v,l,c,!1,null,"59cb84dd",null),L=V.exports;y()(V,{VBtn:g["a"],VCheckbox:k["a"],VContainer:x["a"],VFlex:w["a"],VForm:C["a"],VImg:j["a"],VLayout:S["a"]});var O={name:"App",components:{Sacrebleu:L},data:function(){return{}}},P=O,H=n("7496"),I=n("40dc"),M=n("a75b"),R=n("132d"),A=n("2fa4"),B=Object(b["a"])(P,r,s,!1,null,null,null),T=B.exports;y()(B,{VApp:H["a"],VAppBar:I["a"],VBtn:g["a"],VContent:M["a"],VIcon:R["a"],VImg:j["a"],VSpacer:A["a"]});var $=n("f309");a["a"].use($["a"]);var z=new $["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:z,render:function(t){return t(T)}}).$mount("#app")},7962:function(t,e,n){"use strict";var a=n("4527"),r=n.n(a);r.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.590e92c1.js.map