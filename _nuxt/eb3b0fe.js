(window.webpackJsonp=window.webpackJsonp||[]).push([[28,22,23,24,25],{266:function(e,t,o){var content=o(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("92913c80",content,!0,{sourceMap:!1})},267:function(e,t,o){var content=o(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("5b91008e",content,!0,{sourceMap:!1})},268:function(e,t,o){var content=o(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("e08ed2a6",content,!0,{sourceMap:!1})},269:function(e,t,o){var content=o(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("66e9d470",content,!0,{sourceMap:!1})},270:function(e,t,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("11dd1a25",content,!0,{sourceMap:!1})},283:function(e,t,o){"use strict";o(266)},284:function(e,t,o){var r=o(24)(!1);r.push([e.i,".player[data-v-12a7520a]{width:100%}.player[data-v-12a7520a],.youtube-container[data-v-12a7520a]{height:100%}",""]),e.exports=r},285:function(e,t,o){"use strict";o(267)},286:function(e,t,o){var r=o(24)(!1);r.push([e.i,".player[data-v-4f15f5c9]{width:100%}.image[data-v-4f15f5c9],.image-asset-container[data-v-4f15f5c9],.player[data-v-4f15f5c9]{height:100%}.image[data-v-4f15f5c9]{width:100%;-o-object-fit:contain;object-fit:contain}",""]),e.exports=r},287:function(e,t,o){"use strict";o(268)},288:function(e,t,o){var r=o(24)(!1);r.push([e.i,".soundcloud-container[data-v-621f904f]{width:100%;height:100%}",""]),e.exports=r},289:function(e,t,o){"use strict";o(269)},290:function(e,t,o){var r=o(24)(!1);r.push([e.i,".sketchfab-container[data-v-2dc86488]{width:100%;height:100%}",""]),e.exports=r},291:function(e,t,o){"use strict";o(270)},292:function(e,t,o){var r=o(24)(!1);r.push([e.i,".sketchfab-embed-wrapper,.sketchfab-embed-wrapper iframe{width:100%;height:100%}.sketchfab-embed-wrapper p{display:none}",""]),e.exports=r},293:function(e,t,o){var content=o(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("36446cc6",content,!0,{sourceMap:!1})},303:function(e,t,o){"use strict";o.r(t);var r={name:"YouTube",props:{youtubeID:{type:String,default:function(){return"Lhu7zb1hers"}}},computed:{youtubeSourceURL:function(){return"https://www.youtube.com/embed/".concat(this.youtubeID)}}},n=(o(283),o(14)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"youtube-container"},[o("iframe",{staticClass:"player",attrs:{src:e.youtubeSourceURL,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,"12a7520a",null);t.default=component.exports},304:function(e,t,o){"use strict";o.r(t);var r={name:"YouTube",props:{src:{type:String,default:function(){return"https://shared-vps.compositecomputer.club/media/images/system/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-02-01_003939.png"}}}},n=(o(285),o(14)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"image-asset-container"},[o("img",{staticClass:"image",attrs:{src:e.src}})])}),[],!1,null,"4f15f5c9",null);t.default=component.exports},305:function(e,t,o){"use strict";o.r(t);var r={name:"SoundCloud",props:{soundcloudEmbedHTML:{type:String,default:function(){return'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-bugle" title="The Bugle" target="_blank" style="color: #cccccc; text-decoration: none;">The Bugle</a> · <a href="https://soundcloud.com/the-bugle/bugle-179-playas-gon-play" title="Bugle 179 - Playas gon play" target="_blank" style="color: #cccccc; text-decoration: none;">Bugle 179 - Playas gon play</a></div>'}}}},n=(o(287),o(14)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"soundcloud-container",domProps:{innerHTML:e._s(e.soundcloudEmbedHTML)}})}),[],!1,null,"621f904f",null);t.default=component.exports},306:function(e,t,o){"use strict";o.r(t);var r={name:"Sketchfab",props:{sketchfabEmbedHTML:{type:String,default:function(){return'<div class="sketchfab-embed-wrapper"> <iframe title="GLOCK" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4a92e03e98ea42b58a56a8235cee8ddd/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/glock-4a92e03e98ea42b58a56a8235cee8ddd?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> GLOCK </a> by <a href="https://sketchfab.com/h1ggs?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> h1ggs </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'}}}},n=(o(289),o(291),o(14)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"sketchfab-container",domProps:{innerHTML:e._s(e.sketchfabEmbedHTML)}})}),[],!1,null,"2dc86488",null);t.default=component.exports},320:function(e,t,o){"use strict";o(293)},321:function(e,t,o){var r=o(24)(!1);r.push([e.i,".container[data-v-d64d7af4],.wrapper[data-v-d64d7af4]{height:100%}.wrapper[data-v-d64d7af4]{display:flex;flex-direction:column;justify-content:center;align-items:center}.title[data-v-d64d7af4]{text-align:center}",""]),e.exports=r},350:function(e,t,o){"use strict";o.r(t);var r=o(339),n=(o(340),o(303)),c=o(304),l=o(305),d=o(306),f={name:"Viewer",data:function(){return{options:{itemsToShow:1,wheelControl:!1,centerMode:!0,infiniteScroll:!0}}},components:{Hooper:r.a,Slide:r.d,HooperPagination:r.c,HooperNavigation:r.b,YouTube:n.default,ImageAsset:c.default,SoundCloud:l.default,Sketchfab:d.default},props:{mediaAssets:{type:Array,default:function(){return[]}}},created:function(){console.debug(this.mediaAssets)}},h=(o(320),o(14)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("hooper",{staticStyle:{height:"100%"},attrs:{settings:e.options}},[e._l(e.mediaAssets,(function(t){return o("slide",{key:t.id,staticStyle:{width:"100%"}},[null!==t.youtube_video_id?o("you-tube",{attrs:{youtubeID:t.youtube_video_id}}):e._e(),e._v(" "),null!==t.image?o("image-asset",{attrs:{src:t.image}}):e._e(),e._v(" "),""!==t.soundcloud_embed_html?o("sound-cloud",{attrs:{soundcloudEmbedHTML:t.soundcloud_embed_html}}):e._e(),e._v(" "),""!==t.sketchfab_embed_html?o("sketchfab",{attrs:{sketchfabEmbedHTML:t.sketchfab_embed_html}}):e._e()],1)})),e._v(" "),0===e.mediaAssets.length?o("slide",[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"title"},[e._v("アセットがありません")])])]):e._e(),e._v(" "),o("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),e._v(" "),o("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)}),[],!1,null,"d64d7af4",null);t.default=component.exports}}]);