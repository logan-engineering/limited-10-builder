var bagb=webpackJsonpbagb([1,2],{167:function(t,e,n){"use strict";var r=n(171);n.d(e,"c",function(){return r.a});var i=n(175);n.d(e,"a",function(){return i.a});var o=n(172);n.d(e,"d",function(){return o.a});var s=n(178);n.d(e,"b",function(){return s.a})},169:function(t,e,n){n(429);var r=n(31)(n(180),n(449),null,null);t.exports=r.exports},171:function(t,e,n){"use strict";var r=n(126),i=n.n(r),o=n(59),s=n.n(o),c=n(66),u=n.n(c),a=n(176),l=n(173);n.d(e,"a",function(){return d});var d=function(){function t(e,n,r){s()(this,t),this.config=e,this.client=n,this.cache=r}return u()(t,[{key:"init",value:function(){var t=this,e=new a.a(this.config),n=this.cache.get("store");this.linkedOptions=new l.a(this);var r=function(n){t.state=e.createState(n),t.linkedOptions.init(t.config.products.linkedOptions)};return new i.a(function(e){n?(r(n),e()):t.client.fetch().then(function(n){t.cache.set("store",n,t.config.cacheLifetime),r(n),e()})})}},{key:"getSelectedVariant",value:function(t){var e=this,n=t.options.map(function(t){return e.state.selections[t.id]}).join(" / ");return t.variants.find(function(t){return t.title===n})}}]),t}()},172:function(t,e,n){"use strict";var r=n(59),i=n.n(r),o=n(66),s=n.n(o);n.d(e,"a",function(){return c});var c=function(){function t(e,n){i()(this,t),this.store=e,this.client=n}return s()(t,[{key:"updateSelection",value:function(t,e){this.store.state.selections[t]=e,this.store.linkedOptions.sync(t)}},{key:"addToCart",value:function(){var t=this,e=this.store.state.products.map(function(e){return t.store.getSelectedVariant(e)});return this.client.addToCart(e,this.store.state.quantity).then(function(t){window.parent!==window?window.parent.postMessage({message:"order-complete",checkoutUrl:t.checkoutUrl},"*"):window.location=t.checkoutUrl})}}]),t}()},173:function(t,e,n){"use strict";var r=n(193),i=n.n(r),o=n(196),s=n.n(o),c=n(59),u=n.n(c),a=n(66),l=n.n(a);n.d(e,"a",function(){return d});var d=function(){function t(e){u()(this,t),this.store=e}return l()(t,[{key:"init",value:function(t){var e=this,n=this.store.state.products,r={},o=[],c=function(t){var e=t.split("."),r=s()(e,2),i=r[0],o=r[1],c=n.find(function(t){return t.title===i});if(!c)return void console.warn("Invalid linkedOptions setting '"+t+"'");var u=c.options.find(function(t){return t.name===o});return u?u:void console.warn("Invalid linkedOptions setting '"+t+"'")};i()(t).forEach(function(e){var n=c(e),i=t[e].map(function(t){return c(t)}).filter(function(t){return!!t});o=o.concat(i.map(function(t){return t.id})),r[n.id]=i}),this.controllers=r,this.servants=o,i()(this.controllers).forEach(function(t){return e.sync(t)})}},{key:"sync",value:function(t){var e=this;this.controllers[t]&&this.controllers[t].forEach(function(n){e.store.state.selections[n.id]=e.store.state.selections[t]})}}]),t}()},174:function(t,e,n){"use strict";var r=n(125),i=n.n(r),o=n(59),s=n.n(o);n.d(e,"a",function(){return u});var c=function(t,e){return t.find(function(t){return t===e})},u=function t(e){s()(this,t);var n=this;i()(n,e),n.variants.forEach(function(t){t.option_values.forEach(function(t,n){var r=e.options[n].values;t=t.value,r||(r=e.options[n].values=[]),c(r,t)||r.push(t)})})}},175:function(t,e,n){"use strict";function r(t){var e={},n=c.a.buildClient(t.client),r=void 0;n.createCart().then(function(t){r=t});var i=function(){return e.products&&e.collection},s=function(t){return t.slice(0)},u=function(){if(t.products.sortOrder){var n=s(t.products.sortOrder),r=s(t.products.sortOrder),i=[];n.forEach(function(t,e){n[e]=t.toLowerCase(),r[e]=t.toLowerCase()});var o=function(t,e){var o=t.title.toLowerCase(),s=e.title.toLowerCase(),c=n.indexOf(o),u=n.indexOf(s);return c===-1?(c=n.length,i.includes(o)||i.push(o)):r.includes(o)&&r.splice(r.indexOf(o),1),u===-1&&(u=n.length,i.includes(s)||i.push(s)),c-u};e.products.sort(o),r.length&&console.warn('Could not sort "'+r.join(",")+"\" because they're not in the product list."),i.length&&console.warn('Could not sort "'+i.join(",")+'" because their order is not configured.')}};this.fetch=function(){return new o.a(function(r,o){var s=function(){i()&&r(e)},c=function(t){return t.map(function(t){return t.attrs})};n.fetchCollection(t.collection.id).then(function(t){e.collection=c([t])[0],s()}).catch(o),n.fetchQueryProducts({collection_id:t.collection.id}).then(function(t){e.products=c(t),u(),s()}).catch(o)})},this.addToCart=function(t,e){var n=t.map(function(t){return{variant:t,quantity:e}});return r.addVariants.apply(r,n)}}var i=n(126),o=n.n(i),s=n(435),c=n.n(s);e.a=r},176:function(t,e,n){"use strict";var r=n(125),i=n.n(r),o=n(59),s=n.n(o),c=n(66),u=n.n(c),a=n(174);n.d(e,"a",function(){return l});var l=function(){function t(e){s()(this,t),this.config=e}return u()(t,[{key:"createState",value:function(t){var e=d;return i()(e.collection,t.collection),t.products.forEach(function(t,n){var r=new a.a(t);e.products.push(r),e.productsById[r.product_id]=r,r.options.forEach(function(t){e.optionsById[t.id]=t,e.selections[t.id]=t.values[0]}),e.variants=e.variants.concat(r.variants)}),e}}]),t}(),d={collection:{title:""},products:[],productsById:{},optionsById:{},variants:[],selections:{},quantity:1}},177:function(t,e,n){"use strict";var r={};e.a={setter:function(t,e){r[t]=e},getter:function(t){return void 0!==r[t]?r[t]:null},purger:function(t){return delete r[t],null}}},178:function(t,e,n){"use strict";function r(t){var e=null,n=!0,r="__BC_",i=function(){throw new Error("ERROR: Backend setter not defined!")},s=function(){throw new Error("ERROR: Backend getter not defined!")},l=function(){throw new Error("ERROR: Backend purger not defined!")},d=function(t){return t="object"==typeof t?t:{},r=void 0!==t.keyNamespace?t.keyNamespace:r,n=void 0!==t.preferLocalStorage?t.preferLocalStorage:n,e=n&&f()?u.a:a.a,i=e.setter,s=e.getter,l=e.purger,!0},f=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}};return this.set=function(t,e,n){var s="undefined"==typeof e?"undefined":c()(e);if(void 0!==t&&void 0!==e&&"function"!==s){t=r+t,n="number"==typeof n&&n>=0?n:0;var u=o()({e:0===n?0:(new Date).getTime()+n,d:o()(e)});return i(t,u)}return null},this.get=function(t){if("string"==typeof t){t=r+t;var e=s(t);if(null!==e){var n=JSON.parse(e);return 0===n.e||n.e>=(new Date).getTime()?JSON.parse(n.d):(l(t),null)}}return null},this.purge=function(t){return"string"==typeof t?(t=r+t,l(t)):null},d(t)}var i=n(191),o=n.n(i),s=n(197),c=n.n(s),u=n(179),a=n(177);e.a=r},179:function(t,e,n){"use strict";var r=window.localStorage;e.a={setter:function(t,e){return r.setItem(t,e)},getter:function(t){return r.getItem(t)},purger:function(t){return r.removeItem(t)}}},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(438),i=n.n(r),o=n(439),s=n.n(o),c=n(443),u=n.n(c),a=n(436),l=n.n(a),d=n(437),f=n.n(d);e.default={name:"app",props:{store:{type:Object,required:!0}},components:{collection:i.a,productList:s.a,quantitySelector:u.a,buyButton:l.a,collectionPrice:f.a},data:function(){return{collection:this.store.state.collection,products:this.store.state.products}}}},181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{store:Object},data:function(){return{isBuying:!1}},methods:{handleClick:function(){this.isBuying=!0,this.store.addToCart()}}}},182:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{store:Object},computed:{totalPrice:function(){var t=this;try{var e=this.store.state.products.map(function(e){return t.$getSelectedVariant(e).price}),n=e.reduce(function(t,e){return t+Number(e)},0);return"$ "+n.toFixed(2)}catch(t){return"Invalid options selected"}}}}},183:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{model:Object}}},184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(442),i=n.n(r);e.default={props:{products:Array},components:{product:i.a}}},185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{option:Object},computed:{selection:{get:function(){return this.$store.state.selections[this.option.id]},set:function(t){this.$dispatcher.updateSelection(this.option.id,t)}}}}},186:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_large.gif";e.default={props:{product:Object},computed:{selectedVariantImage:function(){if(!this.product.images||0===this.product.images.length)return r;var t=this.$getSelectedVariant(this.product);if(!t)return r;var e=t.id,n=this.product.images.find(function(t){return t.variant_ids.find(function(t){return t===e})});return n?n.src:r}}}},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(440),i=n.n(r),o=n(441),s=n.n(o);e.default={props:{product:Object},components:{productOptions:i.a,productThumbnail:s.a},computed:{selectedVariantPrice:function(){var t=this.$getSelectedVariant(this.product);return t?t.price:"Unavailable"}},methods:{isLinked:function(t){return this.$store.linkedOptions.servants.indexOf(t.id)>-1}}}},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{store:Object}}},426:function(t,e){},427:function(t,e){},428:function(t,e){},429:function(t,e){},430:function(t,e){},436:function(t,e,n){var r=n(31)(n(181),n(445),null,null);t.exports=r.exports},437:function(t,e,n){n(430);var r=n(31)(n(182),n(452),"data-v-e0f0adf2",null);t.exports=r.exports},438:function(t,e,n){var r=n(31)(n(183),n(451),null,null);t.exports=r.exports},439:function(t,e,n){n(428);var r=n(31)(n(184),n(448),null,null);t.exports=r.exports},440:function(t,e,n){var r=n(31)(n(185),n(447),null,null);t.exports=r.exports},441:function(t,e,n){n(426);var r=n(31)(n(186),n(444),null,null);t.exports=r.exports},442:function(t,e,n){n(427);var r=n(31)(n(187),n(446),null,null);t.exports=r.exports},443:function(t,e,n){var r=n(31)(n(188),n(450),null,null);t.exports=r.exports},444:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"grid-link__image grid-link__image--product"},[n("span",{staticClass:"grid-link__image-centered"},[n("img",{attrs:{src:t.selectedVariantImage}})])])},staticRenderFns:[]}},445:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("button",{staticClass:"btn",attrs:{disabled:t.isBuying},on:{click:function(e){t.handleClick()}}},[t._v("Take my money!")])])},staticRenderFns:[]}},446:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-product grid__item medium--one-third post-large--one-third"},[n("product-thumbnail",{attrs:{product:t.product}}),t._v(" "),n("p",{staticClass:"grid-link__title"},[t._v(t._s(t.product.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.product.body_html)}}),t._v(" "),t._l(t.product.options,function(e){return t.isLinked(e)?t._e():n("product-options",{attrs:{option:e}})}),t._v(" "),n("p",{staticClass:"grid-link__meta"},[t._v("\n        Cost: "+t._s(t.selectedVariantPrice)+"\n")])],2)},staticRenderFns:[]}},447:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selector-wrapper"},[n("label",[t._v(t._s(t.option.name)+"\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selection,expression:"selection"}],staticClass:"single-option-selector",on:{change:function(e){t.selection=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},t._l(t.option.values,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}))])])},staticRenderFns:[]}},448:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-uniform"},t._l(t.products,function(t){return n("product",{attrs:{product:t}})}))},staticRenderFns:[]}},449:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid__item",attrs:{id:"app"}},[n("collection",{attrs:{model:t.collection}}),t._v(" "),n("product-list",{attrs:{products:t.products}}),t._v(" "),n("quantity-selector",{attrs:{store:t.store.state}}),t._v(" "),n("div",[n("collection-price",{attrs:{store:t.store}}),t._v(" "),n("buy-button",{attrs:{store:t.store}})],1)],1)},staticRenderFns:[]}},450:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-single__quantity"},[n("label",[t._v("Quantity\n    "),n("input",{staticClass:"quantity-selector",attrs:{type:"number",name:"quantity",value:"1",min:"1",model:t.store.quantity}})])])},staticRenderFns:[]}},451:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-header section-header--small"},[n("h2",{staticClass:"section-header__title"},[t._v("\n    "+t._s(t.model.title)+"\n  ")])])},staticRenderFns:[]}},452:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"price-wrapper"},[n("span",{staticClass:"price-label"},[t._v("Total cost:")]),t._v(" "),n("span",{staticClass:"price-value"},[t._v(t._s(t.totalPrice))])])},staticRenderFns:[]}},454:function(t,e){},455:function(t,e,n){"use strict";function r(t,e){var n=new u.a(e),r=new u.b,i=new u.c(e,n,r),s=new u.d(i,n);i.init().then(function(){o.a.use({install:function(t,e){t.prototype.$dispatcher=s,t.prototype.$getSelectedVariant=i.getSelectedVariant.bind(i),t.prototype.$store=i}}),new o.a({el:t,template:'<App :store="store"></App>',components:{App:c.a},data:{store:i}})})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(170),o=n.n(i),s=n(169),c=n.n(s),u=n(167),a=n(168);n.n(a);e.build=r}},[455]);
//# sourceMappingURL=BadAssGunBuilder.js.map