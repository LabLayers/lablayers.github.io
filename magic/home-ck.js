// Ze Javascripts.
// -> No coffee here, but before you start reading further,
//    I recommend that you try this:
function handleScroll(){scrollTimer=null;$(".browser").toggleClass("code",$(document).offsetTop>200);$("section").each(function(e,t){var t=$(t);if($(this).offset().top<$(window).scrollTop()+$(window).height()-200&&t.visible(!0)){t.addClass("visible");$(this).find("iframe").not(".loaded").prop("src",function(){$(this).addClass("loaded");return $(this).data("src")})}else t.removeClass("visible")})}function launch(e){var t=document.getElementById(e);t.style.display="block";t.classList.remove("hidden");setTimeout(function(){t.classList.add("visible")},10);setTimeout(function(){t.classList.add("entry")},50);setTimeout(function(){t.classList.add("entry")},50)}function hide(e){var t=document.getElementById(e);t.classList.remove("visible");t.classList.add("hidden");t.style.display="none"}function blast(e){var t=document.getElementById(e);t.classList.remove("visible");t.classList.add("hidden");setTimeout(function(){t.style.display="none"},500)}function toggle_visibility(e){var t=document.getElementById(e);t.style.display=="block"?t.style.display="none":t.style.display="block"}console.log("Hello there! Have you tried the Konami code yet?");document.createElement("modal");document.createElement("window");document.createElement("banner");document.createElement("section");document.createElement("header");document.createElement("footer");document.createElement("figure");document.createElement("menu");document.createElement("tooltip");document.createElement("article");$(".toggler").click(function(){"use strict";var e=$(this).attr("for");$("#"+e).toggle()});(function(e){e.fn.visible=function(t){var n=e(this),r=e(window),i=r.scrollTop(),s=i+r.height(),o=n.offset().top,u=o+n.height(),a=t===!0?u:o,f=t===!0?o:u;return f<=s&&a>=i}})(jQuery);var scrollTimer=null;$(window).scroll(function(){scrollTimer&&clearTimeout(scrollTimer);scrollTimer=setTimeout(handleScroll,20)});$(function(){$('[data-view="mobile"]').change(function(){$("html").toggleClass("mobile",this.checked);$("body").toggleClass("mobile",this.checked)}).change()});$(function(){$('[data-view="1984"]').change(function(){$("body").toggleClass("reset",this.checked)}).change()});var labelID;$("label").click(function(){labelID=$(this).attr("for");$("#"+labelID).trigger("click")});$(document).ready(function(){$('[data-toggle^="menu"]').click(function(){$("body").toggleClass("menu-expanded");$("menu").toggleClass("expanded");$("menu").toggleClass("collapsed")});$("a.assist").click(function(){$("menu#assist").toggle("slow")})});$(document).on("click",'menu.expanded a[href^="#"]',function(){$("body").toggleClass("menu-expanded");$("menu").toggleClass("expanded");$("menu").toggleClass("collapsed")});$(document).ready(function(){if($("menu").height()<470){$("menu").addClass("tiny");$("#top").addClass("tiny")}else{$("menu").removeClass("tiny");$("#top").removeClass("tiny")}});$(window).resize(function(){$("menu").height()<470?$("menu").addClass("tiny"):$("menu").removeClass("tiny")});$(document).on("click",".play",function(){$(".controller .left div").toggleClass("play");$(".controller .left div").toggleClass("pause")});$(document).on("click",".pause",function(){$(".controller .left div").toggleClass("play");$(".controller .left div").toggleClass("pause")});$(document).on("click",'a[href="#music!chiptune"]',function(){$(".controller .left div").removeClass("play");$(".controller .left div").addClass("pause");document.querySelector(".lcd .title").textContent="Chiptune Reel";document.querySelector(".lcd .artist").textContent="Victor Lourng";document.querySelector(".lcd .album").textContent="Chiptune";document.querySelector(".lcd .remaining").textContent="-5:35"});$(document).on("click",'a[href="#music!electro"]',function(){$(".controller .left div").removeClass("play");$(".controller .left div").addClass("pause");document.querySelector(".lcd .title").textContent="Electro Beats";document.querySelector(".lcd .artist").textContent="Victor Lourng";document.querySelector(".lcd .album").textContent="Electro";document.querySelector(".lcd .remaining").textContent="-3:28"});$(document).on("click",'a[href="#music!jazz"]',function(){$(".controller .left div").removeClass("play");$(".controller .left div").addClass("pause");document.querySelector(".lcd .title").textContent="Jazz Reel";document.querySelector(".lcd .artist").textContent="Victor Lourng";document.querySelector(".lcd .album").textContent="Jazz";document.querySelector(".lcd .remaining").textContent="-2:16"});$(document).ready(function(){window.location.hash.indexOf("credits")==1&&launch("credits")});$(document).ready(function(){var e=["Cupcake Shop","Fashion Designer","Savvy Servers","Magic Music","Texas Steakhouse","Lightspeed Fiber","Wicked WordPress Themes","Professional Cartographer","Hardware Store","Bitcoin Convention"],t=e[Math.floor(Math.random()*e.length)];document.querySelector("a.brand").textContent=t;var n=["Almond","Apricot","Aquamarine","Asparagus","Bittersweet","Blizzard","Cadet","Carnation","Chartreuse","Chestnut"],r=n[Math.floor(Math.random()*n.length)];document.querySelector("span.firstname").textContent=r;var i=["Aardvark","Alpaca","Apple","Dromedary","Coati","Argali","Dormouse","Filly","Civet","Aoudad"],s=i[Math.floor(Math.random()*i.length)];document.querySelector("span.lastname").textContent=s;document.getElementById("google").setAttribute("href","http://lmgtfy.com/?q="+s)});$(document).on("click",".shop .span4 a",function(){$(this).parent().appendTo(".cart");$(this).text("Remove")});$(document).on("click","#unicorn .cart .span4 a",function(){$(this).parent().appendTo(".shop");$(this).text("Add to Cart")});$(document).on("click",'a[href^="#"]',function(e){e.preventDefault();var t=this.hash,n=$(t);$("html, body").stop().animate({scrollTop:n.offset().top},800,"swing",function(){window.location.hash=t})});$(document).on("click",".skyward",function(){$("body").addClass("inthetardis");setTimeout(function(){var e="top",t=$("#top");$("html, body").stop().animate({scrollTop:t.offset().top},3e3,"swing",function(){window.location.hash=e})},1e3);setTimeout(function(){$("body").removeClass("inthetardis")},4e3)});var originalTitle=document.title;$(window).focus(function(){document.title=originalTitle}).blur(function(){document.title="I miss you! ♥ "});window.onload=function(){function u(){t.clearRect(0,0,n,r);t.fillStyle="rgba(255, 255, 255, 0.8)";t.beginPath();for(var e=0;e<i;e++){var o=s[e];t.moveTo(o.x,o.y);t.arc(o.x,o.y,o.r,0,Math.PI*2,!0)}t.fill();f()}function f(){a+=.01;for(var e=0;e<i;e++){var t=s[e];t.y+=Math.cos(a+t.d)+1+t.r/2;t.x+=Math.sin(a)*2;if(t.x>n||t.x<0||t.y>r)e%3>0?s[e]={x:Math.random()*n,y:-10,r:t.r,d:t.d}:Math.sin(a)>0?s[e]={x:-5,y:Math.random()*r,r:t.r,d:t.d}:s[e]={x:n+5,y:Math.random()*r,r:t.r,d:t.d}}}var e=document.getElementById("snow"),t=e.getContext("2d"),n=window.innerWidth,r=window.innerHeight;e.width=n;e.height=r;var i=25,s=[];for(var o=0;o<i;o++)s.push({x:Math.random()*n,y:Math.random()*r,r:Math.random()*4+1,d:Math.random()*i});var a=0;setInterval(u,33)};var Konami=function(e){var t={addEvent:function(e,t,n,r){if(e.addEventListener)e.addEventListener(t,n,!1);else if(e.attachEvent){e["e"+t+n]=n;e[t+n]=function(){e["e"+t+n](window.event,r)};e.attachEvent("on"+t,e[t+n])}},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,r){r&&(t=r);t.input+=n?n.keyCode:event.keyCode;t.input.length>t.pattern.length&&(t.input=t.input.substr(t.input.length-t.pattern.length));if(t.input==t.pattern){t.code(e);t.input="";n.preventDefault();return!1}},this);this.iphone.load(e)},code:function(e){window.location=e},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],code:function(e){t.code(e)},load:function(e){this.orig_keys=this.keys;t.addEvent(document,"touchmove",function(e){if(e.touches.length==1&&t.iphone.capture==1){var n=e.touches[0];t.iphone.stop_x=n.pageX;t.iphone.stop_y=n.pageY;t.iphone.tap=!1;t.iphone.capture=!1;t.iphone.check_direction()}});t.addEvent(document,"touchend",function(n){t.iphone.tap==1&&t.iphone.check_direction(e)},!1);t.addEvent(document,"touchstart",function(e){t.iphone.start_x=e.changedTouches[0].pageX;t.iphone.start_y=e.changedTouches[0].pageY;t.iphone.tap=!0;t.iphone.capture=!0})},check_direction:function(e){x_magnitude=Math.abs(this.start_x-this.stop_x);y_magnitude=Math.abs(this.start_y-this.stop_y);x=this.start_x-this.stop_x<0?"RIGHT":"LEFT";y=this.start_y-this.stop_y<0?"DOWN":"UP";result=x_magnitude>y_magnitude?x:y;result=this.tap==1?"TAP":result;result==this.keys[0]&&(this.keys=this.keys.slice(1,this.keys.length));if(this.keys.length==0){this.keys=this.orig_keys;this.code(e)}}}};typeof e=="string"&&t.load(e);if(typeof e=="function"){t.code=e;t.load()}return t},easter_egg=new Konami;easter_egg.code=function(){$(".test").toggleClass("visible");(function(){function e(){var e=document.createElement("link");e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",S);e.setAttribute("class",x);document.body.appendChild(e)}function t(){var e=document.getElementsByClassName(x);for(var t=0;t<e.length;t++)document.body.removeChild(e[t])}function n(){var e=document.createElement("div");e.setAttribute("class",E);document.body.appendChild(e);setTimeout(function(){document.body.removeChild(e)},100)}function r(e){return{height:e.offsetHeight,width:e.offsetWidth}}function i(e){var t=r(e);return t.height>p&&t.height<v&&t.width>d&&t.width<m}function s(e){var t=e,n=0;while(!!t){n+=t.offsetTop;t=t.offsetParent}return n}function o(){var e=document.documentElement;return window.innerWidth?window.innerHeight:e&&!isNaN(e.clientHeight)?e.clientHeight:0}function u(){return window.pageYOffset?window.pageYOffset:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function a(e){var t=s(e);return t>=N&&t<=T+N}function f(){var e=document.createElement("audio");e.setAttribute("class",x);e.src=g;e.loop=!1;e.addEventListener("canplay",function(){setTimeout(function(){l(k)},500);setTimeout(function(){h();n();for(var e=0;e<O.length;e++)c(O[e])},15500)},!0);e.addEventListener("ended",function(){h();t()},!0);e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";document.body.appendChild(e);e.play()}function l(e){e.className+=" "+y+" "+b}function c(e){e.className+=" "+y+" "+w[Math.floor(Math.random()*w.length)]}function h(){var e=document.getElementsByClassName(y),t=new RegExp("\\b"+y+"\\b");for(var n=0;n<e.length;)e[n].className=e[n].className.replace(t,"")}var p=30,d=30,v=350,m=350,g="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3",y="mw-harlem_shake_me",b="im_first",w=["im_drunk","im_baked","im_trippin","im_blown"],E="mw-strobe_light",S="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css",x="mw_added_css",T=o(),N=u(),C=document.getElementsByTagName("*"),k=null;for(var L=0;L<C.length;L++){var A=C[L];if(i(A)&&a(A)){k=A;break}}if(A===null){console.warn("Could not find a node of the right size. Please try a different page.");return}e();f();var O=[];for(var L=0;L<C.length;L++){var A=C[L];i(A)&&O.push(A)}})()};easter_egg.load();(function(e,t,n){function r(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function i(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);e.shiftKey||(t=t.toLowerCase());return t}return d[e.which]?d[e.which]:v[e.which]?v[e.which]:String.fromCharCode(e.which).toLowerCase()}function s(e){e=e||{};var t=!1,n;for(n in E)e[n]?t=!0:E[n]=0;t||(N=!1)}function o(e,t,n,r,i,s){var o,u,a=[],f=n.type;if(!b[e])return[];"keyup"==f&&l(e)&&(t=[e]);for(o=0;o<b[e].length;++o)if(u=b[e][o],!(!r&&u.seq&&E[u.seq]!=u.level||f!=u.action||("keypress"!=f||n.metaKey||n.ctrlKey)&&t.sort().join(",")!==u.modifiers.sort().join(","))){var c=r&&u.seq==r&&u.level==s;(!r&&u.combo==i||c)&&b[e].splice(o,1);a.push(u)}return a}function u(e){var t=[];e.shiftKey&&t.push("shift");e.altKey&&t.push("alt");e.ctrlKey&&t.push("ctrl");e.metaKey&&t.push("meta");return t}function a(e,t,n,r){C.stopCallback(t,t.target||t.srcElement,n,r)||!1!==e(t,n)||(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation?t.stopPropagation():t.cancelBubble=!0)}function f(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=i(e);t&&("keyup"==e.type&&x===t?x=!1:C.handleKey(t,u(e),e))}function l(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function c(e,t,n,r){function o(t){return function(){N=t;++E[e];clearTimeout(S);S=setTimeout(s,1e3)}}function u(t){a(n,t,e);"keyup"!==r&&(x=i(t));setTimeout(s,10)}for(var f=E[e]=0;f<t.length;++f){var l=f+1===t.length?u:o(r||h(t[f+1]).action);p(t[f],l,r,e,f)}}function h(e,t){var n,r,i,s=[];n="+"===e?["+"]:e.split("+");for(i=0;i<n.length;++i)r=n[i],g[r]&&(r=g[r]),t&&"keypress"!=t&&m[r]&&(r=m[r],s.push("shift")),l(r)&&s.push(r);n=r;i=t;if(!i){if(!y){y={};for(var o in d)95<o&&112>o||d.hasOwnProperty(o)&&(y[d[o]]=o)}i=y[n]?"keydown":"keypress"}"keypress"==i&&s.length&&(i="keydown");return{key:r,modifiers:s,action:i}}function p(e,t,n,r,i){w[e+":"+n]=t;e=e.replace(/\s+/g," ");var s=e.split(" ");1<s.length?c(e,s,t,n):(n=h(e,n),b[n.key]=b[n.key]||[],o(n.key,n.modifiers,{type:n.action},r,e,i),b[n.key][r?"unshift":"push"]({callback:t,modifiers:n.modifiers,action:n.action,seq:r,level:i,combo:e}))}var d={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},v={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},m={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},g={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},y,b={},w={},E={},S,x=!1,T=!1,N=!1;for(n=1;20>n;++n)d[111+n]="f"+n;for(n=0;9>=n;++n)d[n+96]=n;r(t,"keypress",f);r(t,"keydown",f);r(t,"keyup",f);var C={bind:function(e,t,n){e=e instanceof Array?e:[e];for(var r=0;r<e.length;++r)p(e[r],t,n);return this},unbind:function(e,t){return C.bind(e,function(){},t)},trigger:function(e,t){w[e+":"+t]&&w[e+":"+t]({},e);return this},reset:function(){b={};w={};return this},stopCallback:function(e,t){return-1<(" "+t.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},handleKey:function(e,t,n){var r=o(e,t,n),i;t={};var u=0,f=!1;for(i=0;i<r.length;++i)r[i].seq&&(u=Math.max(u,r[i].level));for(i=0;i<r.length;++i)r[i].seq?r[i].level==u&&(f=!0,t[r[i].seq]=1,a(r[i].callback,n,r[i].combo,r[i].seq)):f||a(r[i].callback,n,r[i].combo);r="keypress"==n.type&&T;n.type!=N||l(e)||r||s(t);T=f&&"keydown"==n.type}};e.Mousetrap=C;"function"==typeof define&&define.amd&&define(C)})(window,document);Mousetrap.bind("shift shift shift shift shift",function(){alert("Turning on Sticky Keys, eh?")});+function(e){"use strict";function t(n,r){var i,s=e.proxy(this.process,this);this.$element=e(n).is("body")?e(window):e(n);this.$body=e("body");this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s);this.options=e.extend({},t.DEFAULTS,r);this.selector=(this.options.target||(i=e(n).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" menu li > a";this.offsets=e([]);this.targets=e([]);this.activeTarget=null;this.refresh();this.process()}t.DEFAULTS={offset:10};t.prototype.refresh=function(){var t=this.$element[0]==window?"offset":"position";this.offsets=e([]);this.targets=e([]);var n=this,r=this.$body.find(this.selector).map(function(){var r=e(this),i=r.data("target")||r.attr("href"),s=/^#./.test(i)&&e(i);return s&&s.length&&s.is(":visible")&&[[s[t]().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]);n.targets.push(this[1])})};t.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);if(s&&e<=r[0])return s!=(o=i[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])};t.prototype.activate=function(t){this.activeTarget=t;e(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',r=e(n).parents("li").addClass("active");r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active"));r.trigger("activate.bs.scrollspy")};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("bs.scrollspy"),s=typeof n=="object"&&n;i||r.data("bs.scrollspy",i=new t(this,s));typeof n=="string"&&i[n]()})};e.fn.scrollspy.Constructor=t;e.fn.scrollspy.noConflict=function(){e.fn.scrollspy=n;return this};e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(jQuery);