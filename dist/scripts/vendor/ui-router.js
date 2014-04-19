typeof module!="undefined"&&typeof exports!="undefined"&&module.exports===exports&&(module.exports="ui.router"),function(e,t,n){"use strict";function c(e,t){return f(new(f(function(){},{prototype:e})),t)}function h(e){return a(arguments,function(t){t!==e&&a(t,function(t,n){e.hasOwnProperty(n)||(e[n]=t)})}),e}function p(e,t){var n=[];for(var r in e.path){if(e.path[r]!==t.path[r])break;n.push(e.path[r])}return n}function d(e){if(Object.keys)return Object.keys(e);var n=[];return t.forEach(e,function(e,t){n.push(t)}),n}function v(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var n=e.length>>>0,r=Number(arguments[2])||0;r=r<0?Math.ceil(r):Math.floor(r),r<0&&(r+=n);for(;r<n;r++)if(r in e&&e[r]===t)return r;return-1}function m(e,t,n,r){var i=p(n,r),s,o={},u=[];for(var a in i){if(!i[a].params||!i[a].params.length)continue;s=i[a].params;for(var l in s){if(v(u,s[l])>=0)continue;u.push(s[l]),o[s[l]]=e[s[l]]}}return f({},o,t)}function g(e,t){var n={};return a(e,function(e){var r=t[e];n[e]=r!=null?String(r):null}),n}function y(e,t,n){if(!n){n=[];for(var r in e)n.push(r)}for(var i=0;i<n.length;i++){var s=n[i];if(e[s]!=t[s])return!1}return!0}function b(e,t){var n={};return a(e,function(e){n[e]=t[e]}),n}function w(e,t){var i=1,u=2,l={},c=[],p=l,d=f(e.when(l),{$$promises:l,$$values:l});this.study=function(l){function y(e,n){if(g[n]===u)return;m.push(n);if(g[n]===i)throw m.splice(0,m.indexOf(n)),new Error("Cyclic dependency: "+m.join(" -> "));g[n]=i;if(s(e))v.push(n,[function(){return t.get(e)}],c);else{var r=t.annotate(e);a(r,function(e){e!==n&&l.hasOwnProperty(e)&&y(l[e],e)}),v.push(n,e,r)}m.pop(),g[n]=u}function b(e){return o(e)&&e.then&&e.$$promises}if(!o(l))throw new Error("'invocables' must be an object");var v=[],m=[],g={};return a(l,y),l=m=g=null,function(i,s,u){function E(){--y||(w||h(g,s.$$values),c.$$values=g,c.$$promises=!0,l.resolve(g))}function S(e){c.$$failure=e,l.reject(e)}function N(n,s,o){function h(e){f.reject(e),S(e)}function p(){if(r(c.$$failure))return;try{f.resolve(t.invoke(s,u,g)),f.promise.then(function(e){g[n]=e,E()},h)}catch(e){h(e)}}var f=e.defer(),l=0;a(o,function(e){m.hasOwnProperty(e)&&!i.hasOwnProperty(e)&&(l++,m[e].then(function(t){g[e]=t,--l||p()},h))}),l||p(),m[n]=f.promise}b(i)&&u===n&&(u=s,s=i,i=null);if(!i)i=p;else if(!o(i))throw new Error("'locals' must be an object");if(!s)s=d;else if(!b(s))throw new Error("'parent' must be a promise returned by $resolve.resolve()");var l=e.defer(),c=l.promise,m=c.$$promises={},g=f({},i),y=1+v.length/3,w=!1;if(r(s.$$failure))return S(s.$$failure),c;s.$$values?(w=h(g,s.$$values),E()):(f(m,s.$$promises),s.then(E,S));for(var x=0,T=v.length;x<T;x+=3)i.hasOwnProperty(v[x])?E():N(v[x],v[x+1],v[x+2]);return c}},this.resolve=function(e,t,n,r){return this.study(e)(t,n,r)}}function E(e,t,n){this.fromConfig=function(e,t,n){return r(e.template)?this.fromString(e.template,t):r(e.templateUrl)?this.fromUrl(e.templateUrl,t):r(e.templateProvider)?this.fromProvider(e.templateProvider,t,n):null},this.fromString=function(e,t){return i(e)?e(t):e},this.fromUrl=function(n,r){return i(n)&&(n=n(r)),n==null?null:e.get(n,{cache:t}).then(function(e){return e.data})},this.fromProvider=function(e,t,r){return n.invoke(e,null,r||{params:t})}}function S(e){function f(t){if(!/^\w+(-+\w+)*$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(n[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");n[t]=!0,u.push(t)}function l(e){return e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var t=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,n={},r="^",i=0,s,o=this.segments=[],u=this.params=[];this.source=e;var c,h,p;while(s=t.exec(e)){c=s[2]||s[3],h=s[4]||(s[1]=="*"?".*":"[^/]*"),p=e.substring(i,s.index);if(p.indexOf("?")>=0)break;r+=l(p)+"("+h+")",f(c),o.push(p),i=t.lastIndex}p=e.substring(i);var d=p.indexOf("?");if(d>=0){var v=this.sourceSearch=p.substring(d);p=p.substring(0,d),this.sourcePath=e.substring(0,i+d),a(v.substring(1).split(/[&?]/),f)}else this.sourcePath=e,this.sourceSearch="";r+=l(p)+"$",o.push(p),this.regexp=new RegExp(r),this.prefix=o[0]}function x(){this.compile=function(e){return new S(e)},this.isMatcher=function(e){return o(e)&&i(e.exec)&&i(e.format)&&i(e.concat)},this.$get=function(){return this}}function T(e){function o(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return t!=null?t[1].replace(/\\(.)/g,"$1"):""}function a(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,n){return t[n==="$"?0:Number(n)]})}function l(e,t,n){if(!n)return!1;var i=e.invoke(t,t,{$match:n});return r(i)?i:!0}var t=[],n=null;this.rule=function(e){if(!i(e))throw new Error("'rule' must be a function");return t.push(e),this},this.otherwise=function(e){if(s(e)){var t=e;e=function(){return t}}else if(!i(e))throw new Error("'rule' must be a function");return n=e,this},this.when=function(t,n){var r,c=s(n);s(t)&&(t=e.compile(t));if(!c&&!i(n)&&!u(n))throw new Error("invalid 'handler' in when()");var h={matcher:function(t,n){return c&&(r=e.compile(n),n=["$match",function(e){return r.format(e)}]),f(function(e,r){return l(e,n,t.exec(r.path(),r.search()))},{prefix:s(t.prefix)?t.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return c&&(r=t,t=["$match",function(e){return a(r,e)}]),f(function(n,r){return l(n,t,e.exec(r.path()))},{prefix:o(e)})}},p={matcher:e.isMatcher(t),regex:t instanceof RegExp};for(var d in p)if(p[d])return this.rule(h[d](t,n));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(e,r,i){function o(r){function o(t){var n=t(i,e);return n?(s(n)&&e.replace().url(n),!0):!1}if(r&&r.defaultPrevented)return;var u=t.length,a;for(a=0;a<u;a++)if(o(t[a]))return;n&&o(n)}return r.$on("$locationChangeSuccess",o),{sync:function(){o()}}}]}function N(e,h,p){function T(e){return e.indexOf(".")===0||e.indexOf("^")===0}function N(e,t){var r=s(e),i=r?e:e.name,o=T(i);if(o){if(!t)throw new Error("No reference point given for path '"+i+"'");var u=i.split("."),a=0,f=u.length,l=t;for(;a<f;a++){if(u[a]===""&&a===0){l=t;continue}if(u[a]==="^"){if(!l.parent)throw new Error("Path '"+i+"' not valid for state '"+t.name+"'");l=l.parent;continue}break}u=u.slice(a).join("."),i=l.name+(l.name&&u?".":"")+u}var c=v[i];return c&&(r||!r&&(c===e||c.self===e))?c:n}function C(e,t){E[e]||(E[e]=[]),E[e].push(t)}function k(t){t=c(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var n=t.name;if(!s(n)||n.indexOf("@")>=0)throw new Error("State must have a valid name");if(v.hasOwnProperty(n))throw new Error("State '"+n+"'' is already defined");var r=n.indexOf(".")!==-1?n.substring(0,n.lastIndexOf(".")):s(t.parent)?t.parent:"";if(r&&!v[r])return C(r,t.self);for(var o in x)i(x[o])&&(t[o]=x[o](t,x.$delegates[o]));v[n]=t,!t[S]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,n){(w.$current.navigable!=t||!y(e,n))&&w.transitionTo(t,e,{location:!1})}]);if(E[n])for(var u=0;u<E[n].length;u++)k(E[n][u]);return t}function L(e){return e.indexOf("*")>-1}function A(e){var t=e.split("."),n=w.$current.name.split(".");t[0]==="**"&&(n=n.slice(n.indexOf(t[1])),n.unshift("**")),t[t.length-1]==="**"&&(n.splice(n.indexOf(t[t.length-2])+1,Number.MAX_VALUE),n.push("**"));if(t.length!=n.length)return!1;for(var r=0,i=t.length;r<i;r++)t[r]==="*"&&(n[r]="*");return n.join("")===t.join("")}function O(e,t){return s(e)&&!r(t)?x[e]:!i(t)||!s(e)?this:(x[e]&&!x.$delegates[e]&&(x.$delegates[e]=x[e]),x[e]=t,this)}function M(e,t){return o(e)?t=e:t.name=e,k(t),this}function _(e,o,h,E,x,T,C,k,O){function F(){C.url()!==B&&(C.url(B),C.replace())}function I(e,n,r,s,f){var l=r?n:b(e.params,n),c={$stateParams:l};f.resolve=x.resolve(e.resolve,c,f.resolve,e);var p=[f.resolve.then(function(e){f.globals=e})];return s&&p.push(s),a(e.views,function(n,r){var s=n.resolve&&n.resolve!==e.resolve?n.resolve:{};s.$template=[function(){return h.load(r,{view:n,locals:c,params:l,notify:!1})||""}],p.push(x.resolve(s,c,f.resolve,e).then(function(o){if(i(n.controllerProvider)||u(n.controllerProvider)){var a=t.extend({},s,c);o.$$controller=E.invoke(n.controllerProvider,null,a)}else o.$$controller=n.controller;o.$$state=e,o.$$controllerAs=n.controllerAs,f[r]=o}))}),o.all(p).then(function(e){return f})}var M=o.reject(new Error("transition superseded")),_=o.reject(new Error("transition prevented")),P=o.reject(new Error("transition aborted")),H=o.reject(new Error("transition failed")),B=C.url(),j=O.baseHref();return d.locals={resolve:null,globals:{$stateParams:{}}},w={params:{},current:d.self,$current:d,transition:null},w.reload=function(){w.transitionTo(w.current,T,{reload:!0,inherit:!1,notify:!1})},w.go=function(t,n,r){return this.transitionTo(t,n,f({inherit:!0,relative:w.$current},r))},w.transitionTo=function(n,i,s){i=i||{},s=f({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},s||{});var u=w.$current,a=w.params,h=u.path,p,v=N(n,s.relative);if(!r(v)){var b={to:n,toParams:i,options:s};p=e.$broadcast("$stateNotFound",b,u.self,a);if(p.defaultPrevented)return F(),P;if(p.retry){if(s.$retry)return F(),H;var x=w.transition=o.when(p.retry);return x.then(function(){return x!==w.transition?M:(b.options.$retry=!0,w.transitionTo(b.to,b.toParams,b.options))},function(){return P}),F(),x}n=b.to,i=b.toParams,s=b.options,v=N(n,s.relative);if(!r(v))throw s.relative?new Error("Could not resolve '"+n+"' from state '"+s.relative+"'"):new Error("No such state '"+n+"'")}if(v[S])throw new Error("Cannot transition to abstract state '"+n+"'");s.inherit&&(i=m(T,i||{},w.$current,v)),n=v;var k=n.path,L,A,O=d.locals,j=[];for(L=0,A=k[L];A&&A===h[L]&&y(i,a,A.ownParams)&&!s.reload;L++,A=k[L])O=j[L]=A.locals;if(D(n,u,O,s))return n.self.reloadOnSearch!==!1&&F(),w.transition=null,o.when(w.current);i=g(n.params,i||{});if(s.notify){p=e.$broadcast("$stateChangeStart",n.self,i,u.self,a);if(p.defaultPrevented)return F(),_}var q=o.when(O);for(var R=L;R<k.length;R++,A=k[R])O=j[R]=c(O),q=I(A,i,A===n,q,O);var U=w.transition=q.then(function(){var t,r,o;if(w.transition!==U)return M;for(t=h.length-1;t>=L;t--)o=h[t],o.self.onExit&&E.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(t=L;t<k.length;t++)r=k[t],r.locals=j[t],r.self.onEnter&&E.invoke(r.self.onEnter,r.self,r.locals.globals);if(w.transition!==U)return M;w.$current=n,w.current=n.self,w.params=i,l(w.params,T),w.transition=null;var f=n.navigable;return s.location&&f&&(C.url(f.url.format(f.locals.globals.$stateParams)),s.location==="replace"&&C.replace()),s.notify&&e.$broadcast("$stateChangeSuccess",n.self,i,u.self,a),B=C.url(),w.current},function(t){return w.transition!==U?M:(w.transition=null,e.$broadcast("$stateChangeError",n.self,i,u.self,a,t),F(),o.reject(t))});return U},w.is=function(i,s){var o=N(i);return r(o)?w.$current!==o?!1:r(s)&&s!==null?t.equals(T,s):!0:n},w.includes=function(i,o){if(s(i)&&L(i)){if(!A(i))return!1;i=w.$current.name}var u=N(i);if(!r(u))return n;if(!r(w.$current.includes[u.name]))return!1;var a=!0;return t.forEach(o,function(e,t){if(!r(T[t])||T[t]!==e)a=!1}),a},w.href=function(t,n,i){i=f({lossy:!0,inherit:!1,absolute:!1,relative:w.$current},i||{});var s=N(t,i.relative);if(!r(s))return null;n=m(T,n||{},w.$current,s);var o=s&&i.lossy?s.navigable:s,u=o&&o.url?o.url.format(g(s.params,n||{})):null;return!p.html5Mode()&&u&&(u="#"+p.hashPrefix()+u),j!=="/"&&(p.html5Mode()?u=j.slice(0,-1)+u:i.absolute&&(u=j.slice(1)+u)),i.absolute&&u&&(u=C.protocol()+"://"+C.host()+(C.port()==80||C.port()==443?"":":"+C.port())+(!p.html5Mode()&&u?"/":"")+u),u},w.get=function(e,t){if(!r(e)){var n=[];return a(v,function(e){n.push(e.self)}),n}var i=N(e,t);return i&&i.self?i.self:null},w}function D(e,t,n,r){if(e===t&&(n===t.locals&&!r.reload||e.self.reloadOnSearch===!1))return!0}var d,v={},w,E={},S="abstract",x={parent:function(e){if(r(e.parent)&&e.parent)return N(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?N(t[1]):d},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=f({},e.parent.data,e.data)),e.data},url:function(e){var t=e.url;if(s(t))return t.charAt(0)=="^"?h.compile(t.substring(1)):(e.parent.navigable||d).url.concat(t);if(h.isMatcher(t)||t==null)return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},params:function(e){if(!e.params)return e.url?e.url.parameters():e.parent.params;if(!u(e.params))throw new Error("Invalid params in state '"+e+"'");if(e.url)throw new Error("Both params and url specicified in state '"+e+"'");return e.params},views:function(e){var t={};return a(r(e.views)?e.views:{"":e},function(n,r){r.indexOf("@")<0&&(r+="@"+e.parent.name),t[r]=n}),t},ownParams:function(e){if(!e.parent)return e.params;var t={};a(e.params,function(e){t[e]=!0}),a(e.parent.params,function(n){if(!t[n])throw new Error("Missing required parameter '"+n+"' in state '"+e.name+"'");t[n]=!1});var n=[];return a(t,function(e,t){e&&n.push(t)}),n},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?f({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};d=k({name:"",url:"^",views:null,"abstract":!0}),d.navigable=null,this.decorator=O,this.state=M,this.$get=_,_.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function C(){function e(e,t){return{load:function(r,i){var s,o={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return i=f(o,i),i.view&&(s=t.fromConfig(i.view,i.params,i.locals)),s&&i.notify&&e.$broadcast("$viewContentLoading",i),s}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function k(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,n){return e?t:function(e){n(function(){e[0].scrollIntoView()},0,!1)}}]}function L(e,n,r){function i(){return n.has?function(e){return n.has(e)?n.get(e):null}:function(e){try{return n.get(e)}catch(t){return null}}}function a(e,t){var n=function(){return{enter:function(e,t,n){t.after(e),n()},leave:function(e,t){e.remove(),t()}}};if(u)return{enter:function(e,t,n){u.enter(e,null,t,n)},leave:function(e,t){u.leave(e,t)}};if(o){var r=o&&o(t,e);return{enter:function(e,t,n){r.enter(e,null,t),n()},leave:function(e,t){r.leave(e),t()}}}return n()}var s=i(),o=s("$animator"),u=s("$animate"),f={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(n,i,s){return function(n,i,o){function v(){u&&(u.remove(),u=null),l&&(l.$destroy(),l=null),f&&(d.leave(f,function(){u=null}),u=f,f=null)}function m(o){var u=n.$new(),a=f&&f.data("$uiViewName"),m=a&&e.$current&&e.$current.locals[a];if(!o&&m===c)return;var g=s(u,function(e){d.enter(e,i,function(){(t.isDefined(p)&&!p||n.$eval(p))&&r(e)}),v()});c=e.$current.locals[g.data("$uiViewName")],f=g,l=u,l.$emit("$viewContentLoaded"),l.$eval(h)}var u,f,l,c,h=o.onload||"",p=o.autoscroll,d=a(o,n);n.$on("$stateChangeSuccess",function(){m(!1)}),n.$on("$viewContentLoading",function(){m(!1)}),m(!0)}}};return f}function A(e,t,n){return{restrict:"ECA",priority:-400,compile:function(r){var i=r.html();return function(r,s,o){var u=o.uiView||o.name||"",a=s.inheritedData("$uiView");u.indexOf("@")<0&&(u=u+"@"+(a?a.state.name:"")),s.data("$uiViewName",u);var f=n.$current,l=f&&f.locals[u];if(!l)return;s.data("$uiView",{name:u,state:l.$$state}),s.html(l.$template?l.$template:i);var c=e(s.contents());if(l.$$controller){l.$scope=r;var h=t(l.$$controller,l);l.$$controllerAs&&(r[l.$$controllerAs]=h),s.data("$ngControllerController",h),s.children().data("$ngControllerController",h)}c(r)}}}}function O(e){var t=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!t||t.length!==4)throw new Error("Invalid state ref '"+e+"'");return{state:t[1],paramExpr:t[3]||null}}function M(e){var t=e.parent().inheritedData("$uiView");if(t&&t.state&&t.state.name)return t.state}function _(e,n){var r=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(i,s,o,u){var a=O(o.uiSref),f=null,l=null,c=M(s)||e.$current,h=s[0].nodeName==="FORM",p=h?"action":"href",d=!0,v={relative:c},m=i.$eval(o.uiSrefOpts)||{};t.forEach(r,function(e){e in m&&(v[e]=m[e])});var g=function(t){t&&(f=t);if(!d)return;var n=e.href(a.state,f,v);u&&u.$$setStateInfo(a.state,f);if(!n)return d=!1,!1;s[0][p]=n};a.paramExpr&&(i.$watch(a.paramExpr,function(e,t){e!==f&&g(e)},!0),f=i.$eval(a.paramExpr)),g();if(h)return;s.bind("click",function(t){var r=t.which||t.button;r>1||t.ctrlKey||t.metaKey||t.shiftKey||s.attr("target")||(n(function(){e.go(a.state,f,v)}),t.preventDefault())})}}}function D(e,t,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(r,i,s){function f(){e.$current.self===o&&l()?i.addClass(a):i.removeClass(a)}function l(){return!u||y(u,t)}var o,u,a;a=n(s.uiSrefActive||"",!1)(r),this.$$setStateInfo=function(t,n){o=e.get(t,M(i)),u=n,f()},r.$on("$stateChangeSuccess",f)}]}}function P(e){return function(t){return e.is(t)}}function H(e){return function(t){return e.includes(t)}}function B(e,t){function o(e){this.locals=e.locals.globals,this.params=this.locals.$stateParams}function u(){this.locals=null,this.params=null}function a(n,a){if(a.redirectTo!=null){var f=a.redirectTo,l;if(s(f))l=f;else{if(!i(f))throw new Error("Invalid 'redirectTo' in when()");l=function(e,t){return f(e,t.path(),t.search())}}t.when(n,l)}else e.state(c(a,{parent:null,name:"route:"+encodeURIComponent(n),url:n,onEnter:o,onExit:u}));return r.push(a),this}function f(e,t,i){function o(e){return e.name!==""?e:n}var s={routes:r,params:i,current:n};return t.$on("$stateChangeStart",function(e,n,r,i,s){t.$broadcast("$routeChangeStart",o(n),o(i))}),t.$on("$stateChangeSuccess",function(e,n,r,i,u){s.current=o(n),t.$broadcast("$routeChangeSuccess",o(n),o(i)),l(r,s.params)}),t.$on("$stateChangeError",function(e,n,r,i,s,u){t.$broadcast("$routeChangeError",o(n),o(i),u)}),s}var r=[];o.$inject=["$$state"],this.when=a,this.$get=f,f.$inject=["$state","$rootScope","$routeParams"]}var r=t.isDefined,i=t.isFunction,s=t.isString,o=t.isObject,u=t.isArray,a=t.forEach,f=t.extend,l=t.copy;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),w.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",w),E.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",E),S.prototype.concat=function(e){return new S(this.sourcePath+e+this.sourceSearch)},S.prototype.toString=function(){return this.source},S.prototype.exec=function(e,t){var n=this.regexp.exec(e);if(!n)return null;var r=this.params,i=r.length,s=this.segments.length-1,o={},u;if(s!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(u=0;u<s;u++)o[r[u]]=n[u+1];for(;u<i;u++)o[r[u]]=t[r[u]];return o},S.prototype.parameters=function(){return this.params},S.prototype.format=function(e){var t=this.segments,n=this.params;if(!e)return t.join("");var r=t.length-1,i=n.length,s=t[0],o,u,a;for(o=0;o<r;o++)a=e[n[o]],a!=null&&(s+=encodeURIComponent(a)),s+=t[o+1];for(;o<i;o++)a=e[n[o]],a!=null&&(s+=(u?"&":"?")+n[o]+"="+encodeURIComponent(a),u=!0);return s},t.module("ui.router.util").provider("$urlMatcherFactory",x),T.$inject=["$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",T),N.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],t.module("ui.router.state").value("$stateParams",{}).provider("$state",N),C.$inject=[],t.module("ui.router.state").provider("$view",C),t.module("ui.router.state").provider("$uiViewScroll",k),L.$inject=["$state","$injector","$uiViewScroll"],A.$inject=["$compile","$controller","$state"],t.module("ui.router.state").directive("uiView",L),t.module("ui.router.state").directive("uiView",A),_.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",_).directive("uiSrefActive",D),P.$inject=["$state"],H.$inject=["$state"],t.module("ui.router.state").filter("isState",P).filter("includedByState",H),B.$inject=["$stateProvider","$urlRouterProvider"],t.module("ui.router.compat").provider("$route",B).directive("ngView",L)}(window,window.angular);