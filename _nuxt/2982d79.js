(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5,10],{262:function(t,e,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3329ae12",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r.r(e);r(63);var n={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},o=(r(264),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tag",class:{selected:t.selected,deletable:t.deletable,small:t.small,"extra-small":t.extraSmall},style:t.outline?t.outlineStyle:t.style},[r("div",{staticClass:"bold"},[t._v("\n\t\t"+t._s(t.tag.name)+"\n\t")]),t._v(" "),t.deletable?r("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(e){return t.$emit("delete",t.tag)}}}):t._e()],1)}),[],!1,null,"b2ce6a06",null);e.default=component.exports},264:function(t,e,r){"use strict";r(262)},265:function(t,e,r){var n=r(21)(!1);n.push([t.i,".tag[data-v-b2ce6a06]{display:flex;flex-direction:row;flex-wrap:nowrap;white-space:nowrap;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-b2ce6a06],.small[data-v-b2ce6a06]{font-size:12px}.extra-small[data-v-b2ce6a06]{padding:3px 12px}.delete-button[data-v-b2ce6a06]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-b2ce6a06]{opacity:1}",""]),t.exports=n},266:function(t,e,r){"use strict";var n=r(9),o=r(5),l=r(89),c=r(16),d=r(10),f=r(42),v=r(184),x=r(64),m=r(4),h=r(55),w=r(65).f,_=r(36).f,y=r(15).f,k=r(267).trim,N="Number",C=o.Number,I=C.prototype,E=f(h(I))==N,S=function(t){var e,r,n,o,l,c,d,code,f=x(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(l(N,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,F=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof F&&(E?m((function(){I.valueOf.call(r)})):f(r)!=N)?v(new C(S(e)),r,F):S(e)},j=n?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;j.length>M;M++)d(C,A=j[M])&&!d(F,A)&&y(F,A,_(C,A));F.prototype=I,I.constructor=F,c(o,N,F)}},267:function(t,e,r){var n=r(23),o="["+r(268)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},268:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},269:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("393995fd",content,!0,{sourceMap:!1})},270:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7ac10294",content,!0,{sourceMap:!1})},277:function(t,e,r){"use strict";r(269)},278:function(t,e,r){var n=r(21)(!1);n.push([t.i,".card-link[data-v-60c0e89d]{margin:15px;text-decoration:none;color:#000}.card[data-v-60c0e89d]{width:300px;height:380px;border-radius:10px;box-shadow:0 0 10px 0 rgba(0,0,0,.24);transition:.3s;cursor:pointer;overflow:hidden}.card[data-v-60c0e89d]:hover{box-shadow:0 0 20px 2px rgb(0 0 0/50%)}.content[data-v-60c0e89d]{height:270px;padding:10px 15px;overflow:hidden}.content[data-v-60c0e89d],.thumbnail[data-v-60c0e89d]{position:relative;width:300px}.thumbnail[data-v-60c0e89d]{height:220px;-o-object-fit:cover;object-fit:cover}.title[data-v-60c0e89d]{font-size:18px;margin-bottom:5px;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tag_wrap[data-v-60c0e89d]{overflow:hidden;overflow-x:auto;cursor:default}.tag_wrap[data-v-60c0e89d]::-webkit-scrollbar{height:7px}.tag_wrap[data-v-60c0e89d]::-webkit-scrollbar-thumb{background:#dbdbdb;border-radius:3px}.tag_wrap[data-v-60c0e89d]::-webkit-scrollbar-track{background:hsla(0,0%,86.7%,.219)}.tag[data-v-60c0e89d]{display:flex;flex-direction:row;justify-content:flex-start;margin-right:3px;margin-bottom:4px}.description[data-v-60c0e89d]{position:relative;font-size:12px;margin-top:6px;display:-webkit-box;-webkit-line-clamp:3;text-overflow:ellipsis;white-space:normal;overflow:hidden;-webkit-box-orient:vertical}",""]),t.exports=n},279:function(t,e,r){"use strict";r.r(e);r(266);var n=r(263),o={data:function(){return{style:!0,isHoverFlag:!1}},props:{title:{type:String,required:!0,default:"hoge"},team:{type:Object,required:!0},tags:{type:Array,required:!0},description:{type:String,required:!0,default:"enpty"},card_image:{type:String,required:!0,default:"enpty"},work_id:{type:Number,require:!0},genre_id:{type:String,require:!0},key:{type:Number,require:!0}},components:{Tag:n.default},computed:{workPath:function(){return"/works/".concat(this.work_id)}}},l=(r(277),r(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"card-link",attrs:{to:t.workPath}},[r("article",{staticClass:"card"},[r("img",{staticClass:"thumbnail",attrs:{src:t.card_image,alt:"thumbnail",title:"thumbnail"}}),t._v(" "),t.isHoverFlag?r("div",{staticClass:"tag_viewer1"}):t._e(),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"tag_wrap"},[r("div",{staticClass:"tag",on:{mouseover:function(e){t.isHoverFlag=!0},mouseleave:function(e){t.isHoverFlag=!1}}},t._l(t.tags,(function(t){return r("Tag",{key:t.id,attrs:{extraSmall:"",outline:"",tag:t}})})),1)]),t._v(" "),r("div",{staticClass:"description"},[t._v(t._s(t.description))])])])])}),[],!1,null,"60c0e89d",null);e.default=component.exports;installComponents(component,{Tag:r(263).default})},281:function(t,e,r){"use strict";r(270)},282:function(t,e,r){var n=r(21)(!1);n.push([t.i,".card-list[data-v-09a8290e]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;align-items:center;width:100%;max-width:1400px;margin:auto}@media screen and (min-width:0px) and (max-width:700px){.card-list[data-v-09a8290e]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}}",""]),t.exports=n},307:function(t,e,r){"use strict";r.r(e);var n={components:{Card:r(279).default},props:{card_items:{type:Array,required:!0}}},o=(r(281),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-list"},t._l(t.card_items,(function(t){return r("card",{key:t.id,staticClass:"card",attrs:{title:t.title,team:t.team,tags:t.tags,description:t.description,card_image:t.thumbnail,work_id:t.id,genre_id:t.genre.title}})})),1)}),[],!1,null,"09a8290e",null);e.default=component.exports}}]);