(function(e){function t(t){for(var n,r,l=t[0],s=t[1],c=t[2],u=0,g=[];u<l.length;u++)r=l[u],a[r]&&g.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,l=1;l<i.length;l++){var s=i[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/cocolorico/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},1:function(e,t){},"1e60":function(e,t,i){},2:function(e,t){},"2c50":function(e,t,i){},3:function(e,t){},3148:function(e){e.exports=["Times New Roman","Helvetica","Arial","Courier New","Verdana","Georgia","Palatino","Garamond"]},"3bed":function(e){e.exports={animals:["white-horse","cougar","lapin","chien","oies","lion","baleine","chats","canard","pie","paresseux","cheval","chameau","escargot","limace","vache","autruche","homard","saumon"],sport:["football","basket-player","basketball","basketball-rim","handball","tennis-raquet","tennis-raquet2","volleyball-net"],creatures:["monstre","unicorn","monstre2","flying-dragon","oni","demon","elf","pegase","skull","witch","witch2","tauntaun"],transport:["airplane","car","oldcar","oldcar2","bus","viking","corvette-ship","pirate-boat","at-at-walker","truck","tractor"],furniture:["coffre-fort","lounge-chair","globe","jicjac_couch","computer","post-bed","candelabra","table","table2","ceiling-fan","tabouret"],tools:["shovel","magic-wand","screwdriver","electric_drill","ladder","fork","hammer","hammer2","cutter","rateau","pipe-wrench","double-open-end-wrench"],landscape:["cloud-md","mountain-hi","volcano","capitol","turtle","bedtime","eiffel","clock-tower"],food:["pizza","vegetable","carrot","eggplant","pea","broccoli","chou-fleur","sandwich","tomato","yam","roti"],character:["pirate","armor","knight","magician","scarecrow","scarecrow2","gamorrean","doctor","superman-logo","batman-logo","cartoon-mummy"],effects:["fire","flaming-soccer"]}},4:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=(i("a83d"),i("2c50"),i("5c96")),o=i.n(a),r=i("8f86"),l=i.n(r),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("a",{staticClass:"github-corner",attrs:{href:"https://github.com/evifere/cocolorico","aria-label":"Pork me on GitHub",title:"Fork me on GitHub"}},[i("svg",{staticStyle:{fill:"#FD6C6C",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[i("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),i("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),i("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),i("CocoloricoEditor",{attrs:{msg:"Welcome to cocolorico"}})],1)},c=[],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("el-header",[i("el-menu",{staticClass:"el-menu-navbar",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.addImageFromMenu}},e._l(e.getCategories,function(t){return i("el-submenu",{key:"menu_"+t,attrs:{index:t,"popper-class":"submenu-popup"}},[i("template",{slot:"title"},[i("img",{attrs:{src:"categories/"+t+".png",width:"64",height:"64"}})]),e._l(e.logos[t],function(e){return i("el-menu-item",{key:e,attrs:{label:e,index:e}},[i("img",{attrs:{src:t+"/"+e+".png",width:"48",height:"48"}})])})],2)}),1)],1),i("el-main",[i("el-container",[i("el-aside",{attrs:{width:"96px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse},on:{select:e.handleVerticalMenu}},[i("el-menu-item",{attrs:{index:"addTextBlock"}},[i("img",{attrs:{src:"icons/add-text.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextCssClass("bold"),attrs:{index:"toggleBold"}},[i("img",{attrs:{src:"icons/bold.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextCssClass("italic"),attrs:{index:"toggleItalic"}},[i("img",{attrs:{src:"icons/italic.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextLineCssClass("underline"),attrs:{index:"toggleUnderline"}},[i("img",{attrs:{src:"icons/underline.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextLineCssClass("overline"),attrs:{index:"toggleOverline"}},[i("img",{attrs:{src:"icons/overline.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextLineCssClass("linethrough"),attrs:{index:"toggleLineThrough"}},[i("img",{attrs:{src:"icons/line-through.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextAlignCssClass("left"),attrs:{index:"toggleAlignLeft"}},[i("img",{attrs:{src:"icons/align-left.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextAlignCssClass("center"),attrs:{index:"toggleAlignCenter"}},[i("img",{attrs:{src:"icons/align-center.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextAlignCssClass("justify"),attrs:{index:"toggleAlignJustify"}},[i("img",{attrs:{src:"icons/align-justify.png",width:"48",height:"48"}})]),i("el-menu-item",{class:e.getTextAlignCssClass("right"),attrs:{index:"toggleAlignRight"}},[i("img",{attrs:{src:"icons/align-right.png",width:"48",height:"48"}})])],1)],1),i("el-aside",{directives:[{name:"show",rawName:"v-show",value:!e.isEditable,expression:"!isEditable"}],staticClass:"img-preview",attrs:{width:"1225px"}},[i("img",{ref:"preview",attrs:{width:"1200",height:"800",src:""}})]),i("el-aside",{directives:[{name:"show",rawName:"v-show",value:e.isEditable,expression:"isEditable"}],staticClass:"canvas-board",attrs:{width:"1225px"}},[i("el-col",{staticClass:"col-label col-text-center",attrs:{span:1}},[e._v("T")]),i("canvas",{attrs:{id:"background",tabindex:"0"}})],1),i("el-main",[i("el-header",{staticClass:"title"},[i("img",{attrs:{src:"icons/chicken.png",width:"72",height:"72"}}),i("span",[e._v("Cocolorico !")])]),i("hr"),i("el-container",[i("el-col",{staticClass:"params-panel"},[i("el-row",[i("el-col",{staticClass:"col-label col-text-left label-icon",class:{"text-cmd-disabled":!e.isTextSelected},attrs:{span:2}},[i("img",{attrs:{src:"icons/police.png",width:"48",height:"48"}})]),i("el-col",{attrs:{span:20}},[i("el-select",{attrs:{placeholder:"Police",disabled:!e.isTextSelected||!e.isEditable},model:{value:e.currentTextObjectConfig.fontFamily,callback:function(t){e.$set(e.currentTextObjectConfig,"fontFamily",t)},expression:"currentTextObjectConfig.fontFamily"}},e._l(e.allFonts,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}},[i("span",{style:"font-family:"+t},[e._v(e._s(t))])])}),1)],1)],1),i("el-row",{staticClass:"empty"}),i("el-row",[i("el-col",{staticClass:"col-label col-text-left label-icon",class:{"text-cmd-disabled":!e.isTextSelected&&!e.isImageSelected},attrs:{span:2}},[i("img",{attrs:{src:"icons/fill-color.png",width:"48",height:"48"}})]),i("el-col",{attrs:{span:20}},[i("el-select",{attrs:{placeholder:"Couleur de fond",disabled:(!e.isTextSelected&&!e.isImageSelected)|!e.isEditable},model:{value:e.mainColor,callback:function(t){e.mainColor=t},expression:"mainColor"}},e._l(e.mainColors,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}},[i("el-row",[i("el-col",{attrs:{span:16}},[i("span",[e._v(e._s(t))])]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"color-box",style:"background:"+t+";"})])],1)],1)}),1)],1)],1),i("el-row",[i("el-col",{staticClass:"col-label col-text-left label-icon",class:{"text-cmd-disabled":!e.isTextSelected},attrs:{span:2}},[i("img",{attrs:{src:"icons/text-color.png",width:"48",height:"48"}})]),i("el-col",{attrs:{span:20}},[i("el-select",{attrs:{placeholder:"La couleur du texte",disabled:!e.isTextSelected||!e.isEditable},model:{value:e.currentTextObjectConfig.fill,callback:function(t){e.$set(e.currentTextObjectConfig,"fill",t)},expression:"currentTextObjectConfig.fill"}},e._l(e.mainColors,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}},[i("el-row",[i("el-col",{attrs:{span:16}},[i("span",[e._v(e._s(t))])]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"color-box",style:"background:"+t+";"})])],1)],1)}),1)],1)],1),i("el-row",{staticClass:"empty"}),i("el-row",[i("el-col",{staticClass:"col-label col-text-left",class:{"text-cmd-disabled":!e.isTextSelected},attrs:{span:4}},[i("img",{attrs:{src:"icons/thicken-text.png",width:"48",height:"48"}})]),i("el-col",{attrs:{span:4}},[i("el-color-picker",{attrs:{size:"mini","color-format":"hex"},model:{value:e.currentTextObjectConfig.stroke,callback:function(t){e.$set(e.currentTextObjectConfig,"stroke",t)},expression:"currentTextObjectConfig.stroke"}})],1),i("el-col",{attrs:{span:16}},[i("el-slider",{attrs:{min:0,max:10,step:.1,"show-input":"",disabled:!e.isTextSelected||!e.isEditable},model:{value:e.currentTextObjectConfig.strokeWidth,callback:function(t){e.$set(e.currentTextObjectConfig,"strokeWidth",t)},expression:"currentTextObjectConfig.strokeWidth"}})],1)],1),i("el-row",[i("el-col",{staticClass:"col-label col-text-left",class:{"text-cmd-disabled":!e.isTextSelected},attrs:{span:8}},[i("img",{attrs:{src:"icons/text-height.png",width:"48",height:"48"}})]),i("el-col",{attrs:{span:16}},[i("el-slider",{attrs:{min:1,max:120,step:1,"show-input":"",disabled:!e.isTextSelected||!e.isEditable},model:{value:e.currentTextObjectConfig.fontSize,callback:function(t){e.$set(e.currentTextObjectConfig,"fontSize",t)},expression:"currentTextObjectConfig.fontSize"}})],1)],1),i("el-row",[i("el-col",{staticClass:"col-label col-text-left",class:{"text-cmd-disabled":!e.isTextSelected},attrs:{span:8}},[i("img",{attrs:{src:"icons/line-height.png",width:"48",height:"48"}})]),i("el-col",{attrs:{span:16}},[i("el-slider",{attrs:{min:0,max:10,step:.1,"show-input":"",disabled:!e.isTextSelected||!e.isEditable},model:{value:e.currentTextObjectConfig.lineHeight,callback:function(t){e.$set(e.currentTextObjectConfig,"lineHeight",t)},expression:"currentTextObjectConfig.lineHeight"}})],1)],1),i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:8}},[i("img",{attrs:{src:"icons/bring-forward.png",width:"48",height:"48"},on:{click:e.moveForward}})]),i("el-col",{staticClass:"col-label col-text-center",attrs:{span:4}},[e._v(" ")]),i("el-col",{attrs:{span:8}},[i("img",{attrs:{src:"icons/send-backward.png",width:"48",height:"48"},on:{click:e.moveBackward}})])],1),i("el-row",[i("el-switch",{attrs:{"active-text":"Edition en cours","inactive-text":"Mode Preview"},on:{change:e.saveToPng},model:{value:e.isEditable,callback:function(t){e.isEditable=t},expression:"isEditable"}})],1),i("hr"),i("el-row",[i("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"downloadPng",attrs:{href:"#",download:"cocoloriage.png"}}),i("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.downloadPng}},[e._v("Télécharger")])],1)],1)],1)],1)],1)],1),i("el-footer",{attrs:{align:"right"}},[e._v("copyright 2018-2019 @cocolorico v"+e._s(e.version))])],1)},u=[],g=(i("6762"),i("2fdb"),i("a4bb")),h=i.n(g),f=(i("ac6a"),i("7a94")),m=i("9224"),b=i("0342"),p={name:"CocoloricoEditor",props:{msg:String},data:function(){return{currentTextObjectConfig:{fontFamily:"Times New Roman",fontWeight:"normal",fontStyle:"normal",fontSize:5,underline:!1,linethrough:!1,overline:!1,lineHeight:1.16,textAlign:"left",fill:"white",strokeWidth:1,stroke:"#ffffff"},isTextSelected:!1,isImageSelected:!1,newText:"Tapes ton texte ici !",logo:"logo",externalLogo:"",newImageUrl:"",mainColor:"",logos:i("3bed"),mainColors:i("74d6"),fonts:i("3148"),gofonts:i("e226"),alignments:["Left","Center","Justify","Right"],isEditable:!0,fontStyles:["","normal","italic","oblique"],fontWeights:["bold","normal",400,600,800],version:m["a"],activeIndex:"1",isCollapse:!0}},mounted:function(){this.$canvas=new f["fabric"].Canvas("background",{width:1200,height:800,backgroundColor:"white"}),this.$canvas.upperCanvasEl.setAttribute("tabindex","1"),this.$canvas.upperCanvasEl.addEventListener("keydown",this.onKeyDown);var e=new f["fabric"].Text("Cocoloricopyright 2019",{left:10,top:780,fontSize:10,fontWeight:"bold"});this.$canvas.add(e),this.registerTextWatcher(),this.$canvas.on("selection:cleared",this.onObjectSelected),this.$canvas.on("selection:created",this.onObjectSelected),this.$canvas.on("selection:updated",this.onObjectSelected),this.$canvas.renderAll(),this.saveToPng()},methods:{registerTextWatcher:function(){var e=this;h()(this.currentTextObjectConfig).filter(function(e){return"fontFamily"!==e}).forEach(function(t){return e.$watch("currentTextObjectConfig."+t,function(i){return e.setActiveProp(t,i)})})},onObjectSelected:function(e){var t=this.$canvas.findTarget(e);this.isTextSelected=!1,this.isImageSelected=!1,t&&(this.isTextSelected=!("image"===t.type),this.isImageSelected="image"===t.type,this.currentTextObjectConfig=t.toObject())},onKeyDown:function(e){"Backspace"!==e.code&&"Delete"!==e.code||this.deleteActiveObject()},deleteActiveObject:function(){var e=this.$canvas.getActiveObject();e&&this.$canvas.remove(e)},setActiveProp:function(e,t){var i=this.$canvas.getActiveObject();i&&(i.set(e,t).setCoords(),this.update(),this.$canvas.renderAll())},update:function(){this.$canvas&&(this.$canvas.fire("object:modified"),this.$canvas.requestRenderAll())},loadAndUse:function(e){var t=new b(e),i=this;t.load().then(function(){i.setActiveProp("fontFamily",e)}).catch(function(e){console.error(e)})},saveToPng:function(){this.$refs.preview.src=this.$canvas.toDataURL("image/png")},downloadPng:function(){this.$refs.downloadPng.href=this.$canvas.toDataURL("image/png"),this.$refs.downloadPng.click()},makeLine:function(e,t){return new f["fabric"].Line(e,{fill:t,stroke:t,strokeWidth:5,selectable:!1,originX:"left",originY:"top"})},moveForward:function(){var e=this.$canvas.getActiveObject();e&&(e.bringToFront(),this.update())},moveBackward:function(){var e=this.$canvas.getActiveObject();console.log("moveBackward",e),e&&(e.sendToBack(!0),this.update())},addTextBlock:function(){var e=new f["fabric"].Textbox(this.newText,{left:50,top:400,width:400,fontSize:30,fontStyle:"italic",borderColor:"green",textAlign:"center"});this.$canvas.add(e).setActiveObject(e),this.isTextSelected=!0,this.currentTextObjectConfig=e.toObject()},addImageFromMenu:function(e,t){var i=this,n="http://evifere.lescigales.org/cocolorico/";f["fabric"].Image.fromURL(n+t.join("/")+".png",function(e){e.set("left",125).set("top",100),i.$canvas.add(e).setActiveObject(e),i.isImageSelected=!0,i.isTextSelected=!1},{crossOrigin:"Anonymous"})},toggleAlignLeft:function(){this.currentTextObjectConfig.textAlign="left"},toggleAlignCenter:function(){this.currentTextObjectConfig.textAlign="center"},toggleAlignJustify:function(){this.currentTextObjectConfig.textAlign="justify"},toggleAlignRight:function(){this.currentTextObjectConfig.textAlign="right"},toggleOverline:function(){this.currentTextObjectConfig.overline=!this.currentTextObjectConfig.overline},toggleLineThrough:function(){this.currentTextObjectConfig.linethrough=!this.currentTextObjectConfig.linethrough},toggleUnderline:function(){this.currentTextObjectConfig.underline=!this.currentTextObjectConfig.underline},toggleItalic:function(){this.currentTextObjectConfig.fontStyle="italic"===this.currentTextObjectConfig.fontStyle?"normal":"italic"},toggleBold:function(){this.currentTextObjectConfig.fontWeight="bold"===this.currentTextObjectConfig.fontWeight?"normal":"bold"},handleVerticalMenu:function(e,t){this[e]()}},computed:{allFonts:function(){return this.fonts.concat(this.gofonts)},getCategories:function(){return h()(this.logos)},getTextCssClass:function(){var e=this;return function(t){var i="text-cmd-enabled";if(!e.isTextSelected)return"text-cmd-disabled";switch(t){case"bold":i="bold"===e.currentTextObjectConfig.fontWeight?"text-cmd-selected":"text-cmd-enabled";break;case"italic":i="italic"===e.currentTextObjectConfig.fontStyle?"text-cmd-selected":"text-cmd-enabled";break}return i}},getTextLineCssClass:function(){var e=this;return function(t){if(!e.isTextSelected)return"text-cmd-disabled";var i=e.currentTextObjectConfig[t];return{"text-cmd-selected":i,"text-cmd-enabled":!i}}},getTextAlignCssClass:function(){var e=this;return function(t){if(!e.isTextSelected)return"text-cmd-disabled";var i=e.currentTextObjectConfig.textAlign===t;return{"text-cmd-selected":i,"text-cmd-enabled":!i}}}},watch:{"currentTextObjectConfig.fontFamily":function(){this.gofonts.includes(this.currentTextObjectConfig.fontFamily)?this.loadAndUse(this.currentTextObjectConfig.fontFamily):this.setActiveProp("fontFamily",this.currentTextObjectConfig.fontFamily)},mainColor:function(){this.setActiveProp("textBackgroundColor",this.mainColor),this.setActiveProp("backgroundColor",this.mainColor),this.setActiveProp("stroke",this.mainColor)}}},x=p,v=(i("7bff"),i("7565"),i("2877")),C=Object(v["a"])(x,d,u,!1,null,"e556e2b6",null),w=C.exports,y={name:"app",components:{CocoloricoEditor:w}},k=y,T=(i("034f"),Object(v["a"])(k,s,c,!1,null,null,null)),j=T.exports;n["default"].config.productionTip=!1,n["default"].use(o.a,{locale:l.a}),new n["default"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,i){},"74d6":function(e){e.exports=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]},7565:function(e,t,i){"use strict";var n=i("1e60"),a=i.n(n);a.a},"7bff":function(e,t,i){"use strict";var n=i("e64b"),a=i.n(n);a.a},9224:function(e){e.exports={a:"1.0.0"}},a83d:function(e,t,i){},e226:function(e){e.exports=["Pacifico","VT323","Quicksand","Inconsolata","Ubuntu","Galada","Lobster","Anton","Karla","Righteous","Permanent Marker","Satisfy","Kaushan Script","Luckiest Guy","Alfa Slab One","Bungee Shade","Kumar One","Monoton","Rye","Spicy Rice"]},e64b:function(e,t,i){}});
//# sourceMappingURL=app.6fde6055.js.map