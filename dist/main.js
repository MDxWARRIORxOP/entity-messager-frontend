(()=>{var e={924:(e,t,r)=>{"use strict";var o=r(210),n=r(559),a=n(o("String.prototype.indexOf"));e.exports=function(e,t){var r=o(e,!!t);return"function"==typeof r&&a(e,".prototype.")>-1?n(r):r}},559:(e,t,r)=>{"use strict";var o=r(612),n=r(210),a=n("%Function.prototype.apply%"),i=n("%Function.prototype.call%"),p=n("%Reflect.apply%",!0)||o.call(i,a),c=n("%Object.getOwnPropertyDescriptor%",!0),l=n("%Object.defineProperty%",!0),u=n("%Math.max%");if(l)try{l({},"a",{value:1})}catch(e){l=null}e.exports=function(e){var t=p(o,i,arguments);if(c&&l){var r=c(t,"length");r.configurable&&l(t,"length",{value:1+u(0,e.length-(arguments.length-1))})}return t};var f=function(){return p(o,a,arguments)};l?l(e.exports,"apply",{value:f}):e.exports.apply=f},648:e=>{"use strict";var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,o=Object.prototype.toString,n="[object Function]";e.exports=function(e){var a=this;if("function"!=typeof a||o.call(a)!==n)throw new TypeError(t+a);for(var i,p=r.call(arguments,1),c=function(){if(this instanceof i){var t=a.apply(this,p.concat(r.call(arguments)));return Object(t)===t?t:this}return a.apply(e,p.concat(r.call(arguments)))},l=Math.max(0,a.length-p.length),u=[],f=0;f<l;f++)u.push("$"+f);if(i=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(c),a.prototype){var y=function(){};y.prototype=a.prototype,i.prototype=new y,y.prototype=null}return i}},612:(e,t,r)=>{"use strict";var o=r(648);e.exports=Function.prototype.bind||o},210:(e,t,r)=>{"use strict";var o,n=SyntaxError,a=Function,i=TypeError,p=function(e){try{return a('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(e){c=null}var l=function(){throw new i},u=c?function(){try{return l}catch(e){try{return c(arguments,"callee").get}catch(e){return l}}}():l,f=r(405)(),y=Object.getPrototypeOf||function(e){return e.__proto__},s={},d="undefined"==typeof Uint8Array?o:y(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":f?y([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":s,"%AsyncGenerator%":s,"%AsyncGeneratorFunction%":s,"%AsyncIteratorPrototype%":s,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":s,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?y(y([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f?y((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f?y((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?y(""[Symbol.iterator]()):o,"%Symbol%":f?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":u,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet},g=function e(t){var r;if("%AsyncFunction%"===t)r=p("async function () {}");else if("%GeneratorFunction%"===t)r=p("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=p("async function* () {}");else if("%AsyncGenerator%"===t){var o=e("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=e("%AsyncGenerator%");n&&(r=y(n.prototype))}return m[t]=r,r},b={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},h=r(612),v=r(642),S=h.call(Function.call,Array.prototype.concat),j=h.call(Function.apply,Array.prototype.splice),A=h.call(Function.call,String.prototype.replace),O=h.call(Function.call,String.prototype.slice),P=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,w=/\\(\\)?/g,x=function(e){var t=O(e,0,1),r=O(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return A(e,P,(function(e,t,r,n){o[o.length]=r?A(n,w,"$1"):t||e})),o},E=function(e,t){var r,o=e;if(v(b,o)&&(o="%"+(r=b[o])[0]+"%"),v(m,o)){var a=m[o];if(a===s&&(a=g(o)),void 0===a&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:a}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');var r=x(e),o=r.length>0?r[0]:"",a=E("%"+o+"%",t),p=a.name,l=a.value,u=!1,f=a.alias;f&&(o=f[0],j(r,S([0,1],f)));for(var y=1,s=!0;y<r.length;y+=1){var d=r[y],g=O(d,0,1),b=O(d,-1);if(('"'===g||"'"===g||"`"===g||'"'===b||"'"===b||"`"===b)&&g!==b)throw new n("property names with quotes must have matching quotes");if("constructor"!==d&&s||(u=!0),v(m,p="%"+(o+="."+d)+"%"))l=m[p];else if(null!=l){if(!(d in l)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&y+1>=r.length){var h=c(l,d);l=(s=!!h)&&"get"in h&&!("originalValue"in h.get)?h.get:l[d]}else s=v(l,d),l=l[d];s&&!u&&(m[p]=l)}}return l}},405:(e,t,r)=>{"use strict";var o="undefined"!=typeof Symbol&&Symbol,n=r(419);e.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},419:e=>{"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var o=Object.getOwnPropertySymbols(e);if(1!==o.length||o[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(e,t);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},642:(e,t,r)=>{"use strict";var o=r(612);e.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},631:(e,t,r)=>{var o="function"==typeof Map&&Map.prototype,n=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,a=o&&n&&"function"==typeof n.get?n.get:null,i=o&&Map.prototype.forEach,p="function"==typeof Set&&Set.prototype,c=Object.getOwnPropertyDescriptor&&p?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,l=p&&c&&"function"==typeof c.get?c.get:null,u=p&&Set.prototype.forEach,f="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,y="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,s="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,d=Boolean.prototype.valueOf,m=Object.prototype.toString,g=Function.prototype.toString,b=String.prototype.match,h=String.prototype.slice,v=String.prototype.replace,S=String.prototype.toUpperCase,j=String.prototype.toLowerCase,A=RegExp.prototype.test,O=Array.prototype.concat,P=Array.prototype.join,w=Array.prototype.slice,x=Math.floor,E="function"==typeof BigInt?BigInt.prototype.valueOf:null,k=Object.getOwnPropertySymbols,F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,I="function"==typeof Symbol&&"object"==typeof Symbol.iterator,R="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,N=Object.prototype.propertyIsEnumerable,M=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function D(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||A.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var o=e<0?-x(-e):x(e);if(o!==e){var n=String(o),a=h.call(t,n.length+1);return v.call(n,r,"$&_")+"."+v.call(v.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return v.call(t,r,"$&_")}var U=r(654).custom,T=U&&L(U)?U:null;function W(e,t,r){var o="double"===(r.quoteStyle||t)?'"':"'";return o+e+o}function _(e){return v.call(String(e),/"/g,"&quot;")}function B(e){return!("[object Array]"!==H(e)||R&&"object"==typeof e&&R in e)}function L(e){if(I)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!F)return!1;try{return F.call(e),!0}catch(e){}return!1}e.exports=function e(t,r,o,n){var p=r||{};if($(p,"quoteStyle")&&"single"!==p.quoteStyle&&"double"!==p.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if($(p,"maxStringLength")&&("number"==typeof p.maxStringLength?p.maxStringLength<0&&p.maxStringLength!==1/0:null!==p.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=!$(p,"customInspect")||p.customInspect;if("boolean"!=typeof c&&"symbol"!==c)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if($(p,"indent")&&null!==p.indent&&"\t"!==p.indent&&!(parseInt(p.indent,10)===p.indent&&p.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if($(p,"numericSeparator")&&"boolean"!=typeof p.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var m=p.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return q(t,p);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var S=String(t);return m?D(t,S):S}if("bigint"==typeof t){var A=String(t)+"n";return m?D(t,A):A}var x=void 0===p.depth?5:p.depth;if(void 0===o&&(o=0),o>=x&&x>0&&"object"==typeof t)return B(t)?"[Array]":"[Object]";var k,U=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=P.call(Array(e.indent+1)," ")}return{base:r,prev:P.call(Array(t+1),r)}}(p,o);if(void 0===n)n=[];else if(G(n,t)>=0)return"[Circular]";function C(t,r,a){if(r&&(n=w.call(n)).push(r),a){var i={depth:p.depth};return $(p,"quoteStyle")&&(i.quoteStyle=p.quoteStyle),e(t,i,o+1,n)}return e(t,p,o+1,n)}if("function"==typeof t){var V=function(e){if(e.name)return e.name;var t=b.call(g.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),X=K(t,C);return"[Function"+(V?": "+V:" (anonymous)")+"]"+(X.length>0?" { "+P.call(X,", ")+" }":"")}if(L(t)){var Z=I?v.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):F.call(t);return"object"!=typeof t||I?Z:z(Z)}if((k=t)&&"object"==typeof k&&("undefined"!=typeof HTMLElement&&k instanceof HTMLElement||"string"==typeof k.nodeName&&"function"==typeof k.getAttribute)){for(var ee="<"+j.call(String(t.nodeName)),te=t.attributes||[],re=0;re<te.length;re++)ee+=" "+te[re].name+"="+W(_(te[re].value),"double",p);return ee+=">",t.childNodes&&t.childNodes.length&&(ee+="..."),ee+"</"+j.call(String(t.nodeName))+">"}if(B(t)){if(0===t.length)return"[]";var oe=K(t,C);return U&&!function(e){for(var t=0;t<e.length;t++)if(G(e[t],"\n")>=0)return!1;return!0}(oe)?"["+Y(oe,U)+"]":"[ "+P.call(oe,", ")+" ]"}if(function(e){return!("[object Error]"!==H(e)||R&&"object"==typeof e&&R in e)}(t)){var ne=K(t,C);return"cause"in t&&!N.call(t,"cause")?"{ ["+String(t)+"] "+P.call(O.call("[cause]: "+C(t.cause),ne),", ")+" }":0===ne.length?"["+String(t)+"]":"{ ["+String(t)+"] "+P.call(ne,", ")+" }"}if("object"==typeof t&&c){if(T&&"function"==typeof t[T])return t[T]();if("symbol"!==c&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!a||!e||"object"!=typeof e)return!1;try{a.call(e);try{l.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var ae=[];return i.call(t,(function(e,r){ae.push(C(r,t,!0)+" => "+C(e,t))})),J("Map",a.call(t),ae,U)}if(function(e){if(!l||!e||"object"!=typeof e)return!1;try{l.call(e);try{a.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var ie=[];return u.call(t,(function(e){ie.push(C(e,t))})),J("Set",l.call(t),ie,U)}if(function(e){if(!f||!e||"object"!=typeof e)return!1;try{f.call(e,f);try{y.call(e,y)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return Q("WeakMap");if(function(e){if(!y||!e||"object"!=typeof e)return!1;try{y.call(e,y);try{f.call(e,f)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return Q("WeakSet");if(function(e){if(!s||!e||"object"!=typeof e)return!1;try{return s.call(e),!0}catch(e){}return!1}(t))return Q("WeakRef");if(function(e){return!("[object Number]"!==H(e)||R&&"object"==typeof e&&R in e)}(t))return z(C(Number(t)));if(function(e){if(!e||"object"!=typeof e||!E)return!1;try{return E.call(e),!0}catch(e){}return!1}(t))return z(C(E.call(t)));if(function(e){return!("[object Boolean]"!==H(e)||R&&"object"==typeof e&&R in e)}(t))return z(d.call(t));if(function(e){return!("[object String]"!==H(e)||R&&"object"==typeof e&&R in e)}(t))return z(C(String(t)));if(!function(e){return!("[object Date]"!==H(e)||R&&"object"==typeof e&&R in e)}(t)&&!function(e){return!("[object RegExp]"!==H(e)||R&&"object"==typeof e&&R in e)}(t)){var pe=K(t,C),ce=M?M(t)===Object.prototype:t instanceof Object||t.constructor===Object,le=t instanceof Object?"":"null prototype",ue=!ce&&R&&Object(t)===t&&R in t?h.call(H(t),8,-1):le?"Object":"",fe=(ce||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(ue||le?"["+P.call(O.call([],ue||[],le||[]),": ")+"] ":"");return 0===pe.length?fe+"{}":U?fe+"{"+Y(pe,U)+"}":fe+"{ "+P.call(pe,", ")+" }"}return String(t)};var C=Object.prototype.hasOwnProperty||function(e){return e in this};function $(e,t){return C.call(e,t)}function H(e){return m.call(e)}function G(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1}function q(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return q(h.call(e,0,t.maxStringLength),t)+o}return W(v.call(v.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,V),"single",t)}function V(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+S.call(t.toString(16))}function z(e){return"Object("+e+")"}function Q(e){return e+" { ? }"}function J(e,t,r,o){return e+" ("+t+") {"+(o?Y(r,o):P.call(r,", "))+"}"}function Y(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+P.call(e,","+r)+"\n"+t.prev}function K(e,t){var r=B(e),o=[];if(r){o.length=e.length;for(var n=0;n<e.length;n++)o[n]=$(e,n)?t(e[n],e):""}var a,i="function"==typeof k?k(e):[];if(I){a={};for(var p=0;p<i.length;p++)a["$"+i[p]]=i[p]}for(var c in e)$(e,c)&&(r&&String(Number(c))===c&&c<e.length||I&&a["$"+c]instanceof Symbol||(A.call(/[^\w$]/,c)?o.push(t(c,e)+": "+t(e[c],e)):o.push(c+": "+t(e[c],e))));if("function"==typeof k)for(var l=0;l<i.length;l++)N.call(e,i[l])&&o.push("["+t(i[l])+"]: "+t(e[i[l]],e));return o}},798:e=>{"use strict";var t=String.prototype.replace,r=/%20/g,o="RFC3986";e.exports={default:o,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:o}},129:(e,t,r)=>{"use strict";var o=r(261),n=r(235),a=r(798);e.exports={formats:a,parse:n,stringify:o}},235:(e,t,r)=>{"use strict";var o=r(769),n=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},p=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t,r,o){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,p=r.depth>0&&/(\[[^[\]]*])/.exec(a),l=p?a.slice(0,p.index):a,u=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var f=0;r.depth>0&&null!==(p=i.exec(a))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,p[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(p[1])}return p&&u.push("["+a.slice(p.index)+"]"),function(e,t,r,o){for(var n=o?t:c(t,r),a=e.length-1;a>=0;--a){var i,p=e[a];if("[]"===p&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var l="["===p.charAt(0)&&"]"===p.charAt(p.length-1)?p.slice(1,-1):p,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&p!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:"__proto__"!==l&&(i[l]=n):i={0:n}}n=i}return n}(u,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:i.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,l={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,y=u.split(t.delimiter,f),s=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<y.length;++r)0===y[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===y[r]?d="utf-8":"utf8=%26%2310003%3B"===y[r]&&(d="iso-8859-1"),s=r,r=y.length);for(r=0;r<y.length;++r)if(r!==s){var m,g,b=y[r],h=b.indexOf("]="),v=-1===h?b.indexOf("="):h+1;-1===v?(m=t.decoder(b,i.decoder,d,"key"),g=t.strictNullHandling?null:""):(m=t.decoder(b.slice(0,v),i.decoder,d,"key"),g=o.maybeMap(c(b.slice(v+1),t),(function(e){return t.decoder(e,i.decoder,d,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===d&&(g=p(g)),b.indexOf("[]=")>-1&&(g=a(g)?[g]:g),n.call(l,m)?l[m]=o.combine(l[m],g):l[m]=g}return l}(e,r):e,f=r.plainObjects?Object.create(null):{},y=Object.keys(u),s=0;s<y.length;++s){var d=y[s],m=l(d,u[d],r,"string"==typeof e);f=o.merge(f,m,r)}return!0===r.allowSparse?f:o.compact(f)}},261:(e,t,r)=>{"use strict";var o=r(478),n=r(769),a=r(798),i=Object.prototype.hasOwnProperty,p={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=String.prototype.split,u=Array.prototype.push,f=function(e,t){u.apply(e,c(t)?t:[t])},y=Date.prototype.toISOString,s=a.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:s,formatter:a.formatters[s],indices:!1,serializeDate:function(e){return y.call(e)},skipNulls:!1,strictNullHandling:!1},m={},g=function e(t,r,a,i,p,u,y,s,g,b,h,v,S,j,A){for(var O,P=t,w=A,x=0,E=!1;void 0!==(w=w.get(m))&&!E;){var k=w.get(t);if(x+=1,void 0!==k){if(k===x)throw new RangeError("Cyclic object value");E=!0}void 0===w.get(m)&&(x=0)}if("function"==typeof y?P=y(r,P):P instanceof Date?P=b(P):"comma"===a&&c(P)&&(P=n.maybeMap(P,(function(e){return e instanceof Date?b(e):e}))),null===P){if(i)return u&&!S?u(r,d.encoder,j,"key",h):r;P=""}if("string"==typeof(O=P)||"number"==typeof O||"boolean"==typeof O||"symbol"==typeof O||"bigint"==typeof O||n.isBuffer(P)){if(u){var F=S?r:u(r,d.encoder,j,"key",h);if("comma"===a&&S){for(var I=l.call(String(P),","),R="",N=0;N<I.length;++N)R+=(0===N?"":",")+v(u(I[N],d.encoder,j,"value",h));return[v(F)+"="+R]}return[v(F)+"="+v(u(P,d.encoder,j,"value",h))]}return[v(r)+"="+v(String(P))]}var M,D=[];if(void 0===P)return D;if("comma"===a&&c(P))M=[{value:P.length>0?P.join(",")||null:void 0}];else if(c(y))M=y;else{var U=Object.keys(P);M=s?U.sort(s):U}for(var T=0;T<M.length;++T){var W=M[T],_="object"==typeof W&&void 0!==W.value?W.value:P[W];if(!p||null!==_){var B=c(P)?"function"==typeof a?a(r,W):r:r+(g?"."+W:"["+W+"]");A.set(t,x);var L=o();L.set(m,A),f(D,e(_,B,a,i,p,u,y,s,g,b,h,v,S,j,L))}}return D};e.exports=function(e,t){var r,n=e,l=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!i.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=a.formatters[r],n=d.filter;return("function"==typeof e.filter||c(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:n,format:r,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"==typeof l.filter?n=(0,l.filter)("",n):c(l.filter)&&(r=l.filter);var u,y=[];if("object"!=typeof n||null===n)return"";u=t&&t.arrayFormat in p?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=p[u];r||(r=Object.keys(n)),l.sort&&r.sort(l.sort);for(var m=o(),b=0;b<r.length;++b){var h=r[b];l.skipNulls&&null===n[h]||f(y,g(n[h],h,s,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.format,l.formatter,l.encodeValuesOnly,l.charset,m))}var v=y.join(l.delimiter),S=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?S+="utf8=%26%2310003%3B&":S+="utf8=%E2%9C%93&"),v.length>0?S+v:""}},769:(e,t,r)=>{"use strict";var o=r(798),n=Object.prototype.hasOwnProperty,a=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),p=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:p,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],p=Object.keys(i),c=0;c<p.length;++c){var l=p[c],u=i[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r,n,a){if(0===e.length)return e;var p=e;if("symbol"==typeof e?p=Symbol.prototype.toString.call(e):"string"!=typeof e&&(p=String(e)),"iso-8859-1"===r)return escape(p).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",l=0;l<p.length;++l){var u=p.charCodeAt(l);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===o.RFC1738&&(40===u||41===u)?c+=p.charAt(l):u<128?c+=i[u]:u<2048?c+=i[192|u>>6]+i[128|63&u]:u<55296||u>=57344?c+=i[224|u>>12]+i[128|u>>6&63]+i[128|63&u]:(l+=1,u=65536+((1023&u)<<10|1023&p.charCodeAt(l)),c+=i[240|u>>18]+i[128|u>>12&63]+i[128|u>>6&63]+i[128|63&u])}return c},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(t(e[o]));return r}return t(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(a(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var i=t;return a(t)&&!a(r)&&(i=p(t,o)),a(t)&&a(r)?(r.forEach((function(r,a){if(n.call(t,a)){var i=t[a];i&&"object"==typeof i&&r&&"object"==typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),i)}}},478:(e,t,r)=>{"use strict";var o=r(210),n=r(924),a=r(631),i=o("%TypeError%"),p=o("%WeakMap%",!0),c=o("%Map%",!0),l=n("WeakMap.prototype.get",!0),u=n("WeakMap.prototype.set",!0),f=n("WeakMap.prototype.has",!0),y=n("Map.prototype.get",!0),s=n("Map.prototype.set",!0),d=n("Map.prototype.has",!0),m=function(e,t){for(var r,o=e;null!==(r=o.next);o=r)if(r.key===t)return o.next=r.next,r.next=e.next,e.next=r,r};e.exports=function(){var e,t,r,o={assert:function(e){if(!o.has(e))throw new i("Side channel does not contain "+a(e))},get:function(o){if(p&&o&&("object"==typeof o||"function"==typeof o)){if(e)return l(e,o)}else if(c){if(t)return y(t,o)}else if(r)return function(e,t){var r=m(e,t);return r&&r.value}(r,o)},has:function(o){if(p&&o&&("object"==typeof o||"function"==typeof o)){if(e)return f(e,o)}else if(c){if(t)return d(t,o)}else if(r)return function(e,t){return!!m(e,t)}(r,o);return!1},set:function(o,n){p&&o&&("object"==typeof o||"function"==typeof o)?(e||(e=new p),u(e,o,n)):c?(t||(t=new c),s(t,o,n)):(r||(r={key:{},next:null}),function(e,t,r){var o=m(e,t);o?o.value=r:e.next={key:t,next:e.next,value:r}}(r,o,n))}};return o}},654:()=>{}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}(()=>{const e=io("https://fierce-ridge-30030.herokuapp.com/"),t=r(129),o=document.getElementById("sendForm"),n=document.getElementById("messageInput"),a=document.querySelector(".messages"),i=document.querySelector(".users");o.addEventListener("submit",(t=>{t.preventDefault();const r=n.value;p(s.name,r),e.emit("sendMessage",{name:s.name,message:r,room:s.room}),n.value=""}));let p=(e,t)=>{if(!t.includes("has joined the chat!")){if(!t)return;if(t.length>85)return void window.alert("Please dont send msgs with more than 85 characters")}let r=document.createElement("div");r.classList.add("message");let o=new Date,n=`<span id="messageName">${e}</span> <span id="messageTime">&#32; at ${o.getHours()}:${o.getMinutes()}</span><br>\n  <span id="messageMessage">${t}</span>`;r.innerHTML=n,a.append(r)},c=location.search.split("?"),l=t.parse(c[1]),u=t.stringify(l).split("&"),f=u[0].split("="),y=u[1].split("=");const s={name:f[1],room:y[1],id:e.id};e.emit("newUserJoined",s),e.on("userJoin",(e=>{p("Team Yayai",`${e.name} has joined the chat!`),(e=>{let t=document.createElement("p");t.innerHTML=e,i.append(t)})(e.name)})),e.on("userLeave",(e=>{p("Team Yayai",`${e} has left the chat!`)})),e.on("receiveMessage",(e=>{p(e.name,e.message)}))})()})();