(self.webpackChunkmaxpou_fr=self.webpackChunkmaxpou_fr||[]).push([[20],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9100:function(e,t,n){var r=n(9489),o=n(7067);function i(t,n,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},6837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(3222);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o,a=f(c);function c(){return u(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(t.prototype,n),o&&s(t,o),c}(r.default.Component);t.CommentCount=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},9888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(7294)),o=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,o,i=l(a);function a(){return c(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(t.prototype,n),o&&u(t,o),a}(r.default.Component);t.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},1629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(3222);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,o,a=p(c);function c(){return s(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),h.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),c}(r.default.Component);t.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},7202:function(e,t,n){"use strict";t.ZP=void 0;var r=n(6837),o=n(9888),i=n(1629),a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.ZP=a},3222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var u=r.value;if("object"===i(t[u])){if(e(t[u],n[u]))return!0}else if(t[u]!==n[u]&&!c(t[u]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},3395:function(e,t,n){var r=n(9100),o=n(319),i=n(9713),a=n(7316);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(7294),l=n(4983).mdx,f=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=a(e,["scope","children"]),c=f(t),p=s.useMemo((function(){if(!n)return null;var e=u({React:s,mdx:l},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return s.createElement(p,u({},i))}},4244:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(3552),o=n(7294),i=n(9),a=n(2044),c=n(5444),u=i.ZP.div.withConfig({displayName:"Translations__TranslationContainer",componentId:"sc-1mxuvxf-0"})(["border-radius:5px;padding:10px;margin-top:10px;background-color:var(--color-lightYellow);border:1px solid var(--color-grey700);"]),s=i.ZP.span.withConfig({displayName:"Translations__InfoText",componentId:"sc-1mxuvxf-1"})(["color:var(--color-grey900);"]),l=i.ZP.a.withConfig({displayName:"Translations__TranslationLink",componentId:"sc-1mxuvxf-2"})(["color:var(--color-grey900);text-decoration:underline;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.translations;return o.createElement(u,null,o.createElement(s,null,"This article also exists in: "),e.map((function(t,n){return o.createElement(o.Fragment,{key:"translation-"+n},o.createElement(l,{href:(0,c.withPrefix)(t.link)},t.language),n<e.length-1?", ":"")})))},t}(o.Component),p=i.ZP.time.withConfig({displayName:"Time__TimeContainer",componentId:"hoimeu-0"})(["color:var(--color-textSecondary);"]),d=function(e){var t=e.date,n=new Date(t),r=n.toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"numeric"}).split("/").reverse().join("-"),i=n.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"});return o.createElement(p,{datetime:r},i)},m=n(8578),h=i.ZP.header.withConfig({displayName:"ContentHeader__Header",componentId:"snwgmv-0"})(["margin-bottom:2rem;color:var(--color-textSecondary);font-size:0.9em;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags,r=e.translations;return o.createElement(h,null,t&&o.createElement(d,{date:t}),t&&Array.isArray(n)&&n.length>0&&o.createElement(m.fU,null),Array.isArray(n)&&n.length>0&&o.createElement(o.Fragment,null,o.createElement(a.Z,{tags:n})),r&&o.createElement(f,{translations:r}))},t}(o.Component),g=n(3395),b=n.n(g),v=i.ZP.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-1hjk74l-0"})(["line-height:1.6;& > h2{color:var(--color-h2);padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{fill:var(--color-text);box-shadow:0 2px 0 0 var(--color-secondary);&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}h1 .anchor svg,h2 .anchor svg,h3 .anchor svg,h4 .anchor svg,h5 .anchor svg,h6 .anchor svg{visibility:hidden;margin-left:-16px;}h1:hover .anchor svg,h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg,h1 .anchor:focus svg,h2 .anchor:focus svg,h3 .anchor:focus svg,h4 .anchor:focus svg,h5 .anchor:focus svg,h6 .anchor:focus svg{visibility:visible;}& > blockquote{box-sizing:border-box;background-color:var(--color-secondaryContentBackground);border-left:5px solid var(--color-secondary);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em -1.5em;@media (max-width:500px){border-radius:0;margin-left:-25px;margin-right:-25px;}}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}& .gatsby-highlight-code-line{background-color:var(--color-darkBlue);display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid var(--color-yellow);}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:var(--color-beige);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;word-wrap:break-word;}& code{word-wrap:break-word;}& table{margin-top:1em;margin-bottom:1em;border-collapse:collapse;overflow:hidden;& th,& td{padding:0.5em;background-color:var(--color-secondaryContentBackground);}& tr{border-bottom:2px solid var(--color-white);}& tbody tr:last-child{border-bottom:none;}}"]),w=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.content,n=e.date,r=e.tags,i=e.translations;return o.createElement("section",null,(r||n||i)&&o.createElement(y,{date:n,tags:r,translations:i}),o.createElement(v,null,o.createElement(b(),null,t)))},t}(o.Component)},8991:function(e,t,n){"use strict";var r=n(7294),o=n(7202),i=n(4826);t.Z=function(e){var t=(0,i.Z)(),n=t.disqusShortname,a=t.disqusSiteUrl;if(!n)return null;var c={url:""+a+e.slug,title:e.title};return r.createElement(o.ZP.DiscussionEmbed,{shortname:n,config:c})}},3270:function(e,t,n){"use strict";var r=n(7294),o=n(9),i=n(4826),a=n(5738),c=o.ZP.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1nqmuvx-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),u=o.ZP.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1nqmuvx-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),s=o.ZP.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1nqmuvx-2"})(["font-weight:700;font-size:3rem;margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]),l=o.ZP.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-1nqmuvx-3"})(["margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]);t.Z=function(e){var t=(0,i.Z)().siteCover,n=(0,a.Z)(t).fluid,o=e.heroImg||n.src;return r.createElement(c,{style:{backgroundImage:'url("'+o+'")'}},r.createElement(u,null,r.createElement(s,null,e.title),e.subTitle&&r.createElement(l,null,e.subTitle)))}},2044:function(e,t,n){"use strict";var r=n(3552),o=n(7294),i=n(5444),a=n(9),c=a.ZP.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-1areet5-0"})(["display:inline;color:var(--color-textSecondary);"]),u=(0,a.ZP)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-1areet5-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),s=a.ZP.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-1areet5-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.noLink;return o.createElement(c,null,t.map((function(e,r){return o.createElement(o.Fragment,{key:"tag-list-"+r},!n&&o.createElement(u,{to:"/tags/"+e},e),n&&o.createElement(s,{to:"/tags/"+e},e),r<t.length-1?", ":"")})))},t}(o.Component);t.Z=l}}]);
//# sourceMappingURL=6dae301c9709e8c5899acc3516b7dd8f43382179-c88d0cb3236380bee7fa.js.map