parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VgtN":[function(require,module,exports) {
"use strict";function t(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function a(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Zvezdochki=void 0;var i=function(){function a(e,i){t(this,a),this.ratingEl=e,this.options={activeClass:"active",votes:"votes",starDataAttr:"star",ratingDataAttr:"ratingValue",votedClassName:"star-rating--blocked",voted:!1},e&&i&&(this.options=Object.assign(this.options,i)),this.stars=this.ratingEl.querySelectorAll("[data-"+this.options.starDataAttr+"]"),this.init()}return e(a,[{key:"init",value:function(){this.setInitialRating(),this.options.voted?this.blockVotes():(this.handleHover(),this.addClickHandler())}},{key:"submit",value:function(t){var a=new CustomEvent("vote",{detail:t});this.ratingEl.dispatchEvent(a)}},{key:"blockVotes",value:function(){this.ratingEl.classList.add(this.options.votedClassName),this.options.voted=!0,this.ratingEl.style.pointerEvents=!1}},{key:"setInitialRating",value:function(){var t=this.ratingEl.dataset[this.options.ratingDataAttr.toLowerCase()];this.setActiveStar(t)}},{key:"setActiveStar",value:function(t){this.ratingEl.querySelector("*[data-"+this.options.starDataAttr+'="'+t+'"]').classList.add(this.options.activeClass)}},{key:"handleHover",value:function(){var t=this;this.stars.forEach(function(a){a.addEventListener("mouseenter",function(){t.stars.forEach(function(a){a.classList.remove(t.options.activeClass)})}),a.addEventListener("mouseleave",function(){t.setInitialRating()})})}},{key:"addClickHandler",value:function(){var t=this;this.ratingEl.addEventListener("click",function(a){if(a.preventDefault(),a.stopPropagation(),a.target.dataset[t.options.starDataAttr]&&!t.options.voted){var e=a.target.dataset[t.options.starDataAttr];a.target.classList.add(t.options.activeClass),t.ratingEl.dataset[t.options.ratingDataAttr.toLowerCase()]=e,t.submit(e),t.blockVotes()}})}}]),a}();exports.Zvezdochki=i;
},{}]},{},["VgtN"], null)