(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.audioWarning=t.AudioContext=t.hasAnyWebAudioSupport=t.hasLatestWebAudioSupport=void 0;var a=o(n(20)),i=o(n(25)),u=o(n(26));function o(e){return e&&e.__esModule?e:{default:e}}var r="AudioContext"in window;t.hasLatestWebAudioSupport=r;var s=r||"webkitAudioContext"in window;t.hasAnyWebAudioSupport=s;var c=window.AudioContext||window.webkitAudioContext;t.AudioContext=c;t.audioWarning="This browser does not support the latest Web Audio API. Some sounds may be disabled.";var l={Synth:new a.default,Single:new i.default,Accessible:new u.default("accessible"),Extensible:new u.default("extensible")};t.default=l},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(21)),i=o(n(22)),u=o(n(23));function o(e){return e&&e.__esModule?e:{default:e}}var r={fetchAudioBuffer:a.default,methodPatch:i.default,reverseBuffer:u.default};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(38)),i=u(n(39));function u(e){return e&&e.__esModule?e:{default:e}}var o={Cubes:a.default,Faces:i.default,Tracks:[3,15,23,16]};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(30)),i=n(31),u=c(n(32)),o=c(n(33)),r=c(n(34)),s=c(n(35));function c(e){return e&&e.__esModule?e:{default:e}}var l={arrayContainsArray:a.default,debounce:i.debounce,debounceDuration:i.debounceDuration,randomIntBetweenRange:u.default,shuffleArray:o.default,shuffleArrayOnce:r.default,generateUniqueString:s.default};t.default=l},,function(e,t,n){"use strict";function a(e){var t=document.createElement("div");return t.classList.add("ShootingStar","ShootingStar--index".concat(e)),t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.createElement("div");e.classList.add("Stars"),["Small","Medium","Large"].forEach((function(t){e.appendChild(function(e){var t=document.createElement("div");t.classList.add("StarField","StarField--size".concat(e));var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("width","100%"),n.setAttribute("height","100%");var a=document.createElementNS("http://www.w3.org/2000/svg","rect");return a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill","url(#Stars".concat(e,"Pattern)")),n.appendChild(a),t.appendChild(n),t}(t))}));for(var t=1;t<=12;t++)e.appendChild(a(t));return e}},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(){window.dataLayer.push(arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.gtag=i,t.default=void 0;var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements=t,this.ua=n}var t,n,u;return t=e,(n=[{key:"init",value:function(){var e=this;"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname?this._appendScript().then((function(){return window.dataLayer=window.dataLayer||[],i("js",new Date),i("config",e.ua),e.elements.forEach((function(t){e._clickHandler(t),e._auxHandler(t)})),window.dataLayer})).catch((function(e){return console.warn(e)})):console.log("🤖 Analytics disabled in local development.")}},{key:"_appendScript",value:function(){var e=this;return new Promise((function(t,n){var a=document.createElement("script");document.body.appendChild(a),a.onload=t,a.onerror=n,a.async=!0,a.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.ua)}))}},{key:"_trackEvent",value:function(e){var t=this;"auxclick"!==e.type&&e.preventDefault(),window.ga&&window.ga.create?i("event","click",{event_category:this.dataset.gtagCategory,event_label:this.title,transport_type:"beacon",event_callback:function(){"auxclick"!==e.type&&(document.location=t.href)}}):"auxclick"!==e.type&&(document.location=this.href)}},{key:"_clickHandler",value:function(e){e.addEventListener("click",this._trackEvent)}},{key:"_auxHandler",value:function(e){e.addEventListener("auxclick",this._trackEvent)}}])&&a(t.prototype,n),u&&a(t,u),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(2))&&a.__esModule?a:{default:a};function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.context=t,this.source=this.context.createBufferSource(),this.source.buffer=this.context.createBuffer(1,1,22050),this.source.connect(this.context.destination),this._startSource=this._startSource.bind(this)}var t,n,a;return t=e,(n=[{key:"init",value:function(){this._patchSourceMethods(),window.addEventListener("touchstart",this._startSource)}},{key:"isUnlocked",value:function(){var e=this.source.playbackState===this.source.PLAYING_STATE,t=this.source.playbackState===this.source.FINISHED_STATE;return e||t}},{key:"_startSource",value:function(){var e=this;this.source.start(),setTimeout((function(){window.removeEventListener("touchstart",e._startSource)}),60)}},{key:"_patchSourceMethods",value:function(){this.source.start=i.default.methodPatch.start(this.source)}}])&&u(t.prototype,n),a&&u(t,a),e}();t.default=o},function(e,t,n){"use strict";n(10);var a=u(n(6)),i=u(n(12));function u(e){return e&&e.__esModule?e:{default:e}}i.default.Tracking();var o=document.getElementById("Error404");o?o.appendChild((0,a.default)()):(i.default.ServiceWorker(),i.default.Draggables(),i.default.Features(),i.default.Audio())},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(13)),i=s(n(16)),u=s(n(17)),o=s(n(43)),r=s(n(49));function s(e){return e&&e.__esModule?e:{default:e}}var c={ServiceWorker:a.default,Tracking:i.default,Draggables:u.default,Features:o.default,Audio:r.default};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){i.default.register()}))};var a,i=(a=n(14))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(15))&&a.__esModule?a:{default:a};function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,r=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){s=!0,u=e},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw u}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var r={register:function(){navigator.serviceWorker.register("service-worker.js").then((function(e){return function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){switch(t.state){case"installed":navigator.serviceWorker.controller&&(e=new i.default("Site updates are available. Tap to refresh."),document.body.appendChild(e.getNotification()));break;case"redundant":console.warn("The installing service worker became redundant.")}var e}}}(e)})).catch((function(e){console.warn("Error during service worker registration: ".concat(e.message))}))},unregister:function(){navigator.serviceWorker.getRegistrations().then((function(e){var t,n=u(e);try{for(n.s();!(t=n.n()).done;){t.value.unregister()}}catch(e){n.e(e)}finally{n.f()}return e})).catch((function(e){console.warn("Error unregistering service worker: ".concat(e.message))}))}};t.default=r},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.getElementById("NotificationTemplate");this.notification=n.content.cloneNode(!0),this.message=t,this._setMessage()}var t,n,i;return t=e,(n=[{key:"getNotification",value:function(){return this.notification}},{key:"_setMessage",value:function(){this.notification.querySelector(".NotificationMessage").textContent=this.message}}])&&a(t.prototype,n),i&&a(t,i),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll("[data-gtag-category]");if(e.length){new i.default(e,"UA-107063633-1").init()}};var a,i=(a=n(7))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new i.default(document.getElementById("Hero"));e.init(),a.default.Hero(i.default,e),a.default.Basics(),a.default.Swappable(),a.default.Sortable(),a.default.Collidable()};var a=u(n(18)),i=u(n(37));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(19)),i=s(n(27)),u=s(n(28)),o=s(n(29)),r=s(n(36));function s(e){return e&&e.__esModule?e:{default:e}}var c={Basics:a.default,Collidable:i.default,Hero:u.default,Sortable:o.default,Swappable:r.default};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll(".CubesFrame--idBasics"),t=new i.Droppable(e,{dropzone:".Cube--typeDropzone",mirror:{appendTo:".CubesFrame--idBasics"},plugins:[i.Plugins.Snappable]}),n={justLifted:!1,snappedIn:!1,snappedOut:!1},a=null;return t.on("drag:start",(function(e){u.default.Single.play("cubeUp"),n.justLifted=!0,a=e.source.parentNode})),t.on("drag:stop",(function(){n.snappedIn||u.default.Single.play("cubeDown"),n.justLifted=!1,n.snappedIn=!1,n.snappedOut=!1})),t.on("snap:out",(function(){n.justLifted||(u.default.Single.play("cubeUp"),n.snappedIn=!1,n.snappedOut=!0)})),t.on("snap:in",(function(e){n.snappedIn||e.snappable.parentNode===a?e.cancel():(u.default.Single.play("cubeDown"),n.justLifted=!1,n.snappedIn=!0,a=null)})),t.on("drag:over",(function(e){"BasicsCube10"===e.source.id&&"BasicsCube11"===e.over.id&&e.cancel(),"BasicsCube11"===e.source.id&&"BasicsCube10"===e.over.id&&e.cancel()})),t.on("droppable:dropped",(function(e){"BasicsCube10"===e.dragEvent.source.id&&"BasicsCube3"===e.dropzone.id&&e.cancel(),"BasicsCube11"===e.dragEvent.source.id&&"BasicsCube7"===e.dropzone.id&&e.cancel()})),t};var a,i=n(1),u=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(2)),i=r(n(8)),u=r(n(24)),o=n(0);function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c,l,d,f=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!o.hasAnyWebAudioSupport)return this.play=function(){return null},null;this.context=new o.AudioContext,this.mobileAudio=new i.default(this.context),this.mobileAudio.init()}var t,n,r;return t=e,(n=[{key:"play",value:function(t){if(!e.synthKeys.includes(t))return Error("The requested sound is not available: ".concat(t));var n=u.default[t];this._buildTone(n),this._patchOscillatorMethods(),this.oscillator.start();var a=this.context.currentTime+n.duration;return this._stop(a)}},{key:"_buildTone",value:function(e){this.oscillator=this.context.createOscillator(),this.gainNode=this.context.createGain(),this.oscillator.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.oscillator.type=e.wave,this.oscillator.frequency.setValueAtTime(e.freq.start,this.context.currentTime),this.oscillator.frequency.exponentialRampToValueAtTime(e.freq.end,this.context.currentTime+e.duration/2),this.gainNode.gain.setValueAtTime(.001,this.context.currentTime),this.gainNode.gain.exponentialRampToValueAtTime(e.volume,this.context.currentTime+e.duration/6)}},{key:"_patchOscillatorMethods",value:function(){this.oscillator.start=a.default.methodPatch.start(this.oscillator),this.oscillator.stop=a.default.methodPatch.stop(this.oscillator)}},{key:"_stop",value:function(e){this.gainNode.gain.exponentialRampToValueAtTime(.001,e),this.oscillator.stop(e)}}])&&s(t.prototype,n),r&&s(t,r),e}();t.default=f,c=f,l="synthKeys",d=Object.keys(u.default),l in c?Object.defineProperty(c,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[l]=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=new Request(e);return fetch(n).then((function(e){return e.arrayBuffer()})).then((function(e){return t.decodeAudioData(e)})).catch((function(e){throw Error("Asset failed to load: ".concat(e.message))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={start:function(e){return e.start?e.start:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e.noteOn(t)}},stop:function(e){return e.stop?e.stop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e.noteOff(t)}}};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=t.createBuffer(e.numberOfChannels,e.length,e.sampleRate),a=0;a<e.numberOfChannels;a++)for(var i=n.getChannelData(a),u=e.getChannelData(a),o=0;o<e.length;o++)i[o]=u[e.length-o];return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={up:{wave:"sine",freq:{start:392,end:493.88},volume:1,duration:.2},downBad:{wave:"sine",freq:{start:587.33,end:392},volume:1,duration:.1},downGood:{wave:"sine",freq:{start:493.88,end:698.46},volume:1,duration:.1},swap:{wave:"sine",freq:{start:880,end:1760},volume:.2,duration:.06},powerOn:{wave:"triangle",freq:{start:146.83,end:185},volume:1,duration:1},powerOff:{wave:"triangle",freq:{start:185,end:110},volume:1,duration:1.2}};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(2)),i=o(n(8)),u=n(0);function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s,c,l,d={heroSuccess:"assets/audio/hero-success.mp3",cubeUp:"assets/audio/cube-up.mp3",cubeDown:"assets/audio/cube-down.mp3",cubeOver:"assets/audio/cube-over.mp3",cubeSort:"assets/audio/cube-sort.mp3",cubeCollide:"assets/audio/cube-collide.mp3",interactionHover:"assets/audio/interaction-hover.mp3",interactionActive:"assets/audio/interaction-active.mp3",animationUp1:"assets/audio/animation-up-1.mp3",animationUp2:"assets/audio/animation-up-2.mp3",animationUp3:"assets/audio/animation-up-3.mp3",animationDown1:"assets/audio/animation-down-1.mp3",animationDown2:"assets/audio/animation-down-2.mp3",animationDown3:"assets/audio/animation-down-3.mp3"},f=function(){function e(){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!u.hasAnyWebAudioSupport)return this.play=function(){return null},null;this.context=new u.AudioContext,this.gainNode=this.context.createGain(),this.source=null,this.sounds={},e.singleKeys.forEach((function(e){a.default.fetchAudioBuffer(d[e],t.context).then((function(n){return t.sounds[e]=n,t.sounds[e]})).catch((function(){t.sounds[e]=null}))})),this.mobileAudio=new i.default(this.context),this.mobileAudio.init()}var t,n,o;return t=e,(n=[{key:"play",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.singleKeys.includes(t)?this._startSource(this.sounds[t],n):Error("The requested sound is not available: ".concat(t))}},{key:"_startSource",value:function(e,t){e&&(this.source=this.context.createBufferSource(),this.source.buffer=t?a.default.reverseBuffer(e,this.context):e,this._patchSourceMethods(),this._setGain(t,this.source.buffer.duration),this.source.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.source.start())}},{key:"_setGain",value:function(e,t){this.gainNode.gain.setValueAtTime(.5,this.context.currentTime),e&&this.gainNode.gain.exponentialRampToValueAtTime(.2,this.context.currentTime+t)}},{key:"_patchSourceMethods",value:function(){this.source.start=a.default.methodPatch.start(this.source)}}])&&r(t.prototype,n),o&&r(t,o),e}();t.default=f,s=f,c="singleKeys",l=Object.keys(d),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(2))&&a.__esModule?a:{default:a},u=n(0);function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=.2,s=.3,c=1e3*s+10,l={accessible:["assets/audio/accessible-hover.wav","assets/audio/accessible-active.wav"],extensible:["assets/audio/extensible.wav"]},d=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!u.hasLatestWebAudioSupport)return this.play=function(){return null},null;if(!e.loopKeys.includes(t))return Error("The requested sound is not available: ".concat(t));this.context=new u.AudioContext,this.trackCount=l[t].length,this.sources={},this.gainNodes={},this.hasStarted=!1,this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.resume=this.resume.bind(this),this.speed=this.speed.bind(this);for(var a=function(e){n._createGainNodes(e),i.default.fetchAudioBuffer(l[t][e],n.context).then((function(t){return n._connectSource(t,e)})).catch((function(){return null}))},o=0;o<this.trackCount;o++)a(o)}var t,n,a;return t=e,(n=[{key:"mute",value:function(e){this.gainNodes["node".concat(e)].gain.exponentialRampToValueAtTime(.001,this.context.currentTime+s)}},{key:"unmute",value:function(e){this.gainNodes["node".concat(e)].gain.exponentialRampToValueAtTime(.3,this.context.currentTime+r)}},{key:"play",value:function(){if(!this.hasStarted){for(var e=0;e<this.trackCount;e++)this.sources["source".concat(e)].start();return this.unmute(0),void(this.hasStarted=!0)}this.resume()}},{key:"pause",value:function(){for(var e=this,t=0;t<this.trackCount;t++)this.mute(t);setTimeout((function(){e.context.suspend()}),c)}},{key:"resume",value:function(){var e=this;this.context.resume().then((function(){return e.unmute(0)})).catch((function(e){return console.warn("Something went wrong with resuming playback: ".concat(e))}))}},{key:"speed",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=e>1?r:s,n=0;n<this.trackCount;n++)this.sources["source".concat(n)].playbackRate.exponentialRampToValueAtTime(e,this.context.currentTime+t)}},{key:"_connectSource",value:function(e,t){if(e){var n="source".concat(t);this.sources[n]=this.context.createBufferSource(),this.sources[n].buffer=e,this.sources[n].loop=!0,this.sources[n].connect(this.gainNodes["node".concat(t)]).connect(this.context.destination)}}},{key:"_createGainNodes",value:function(e){var t="node".concat(e);this.gainNodes[t]=this.context.createGain(),this.gainNodes[t].gain.setValueAtTime(.001,this.context.currentTime)}}])&&o(t.prototype,n),a&&o(t,a),e}();t.default=d,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(d,"loopKeys",Object.keys(l))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll(".CubesFrame--idCollidable"),t=new i.Droppable(e,{dropzone:".Cube--typeDropzone",mirror:{appendTo:".CubesFrame--idCollidable"},collidables:"".concat(".CubesFrame--idCollidable"," .CollisionWall"),plugins:[i.Plugins.Collidable]}),n=!1;return t.on("drag:start",(function(){u.default.Single.play("cubeUp")})),t.on("drag:over",(function(){n&&u.default.Single.play("cubeOver")})),t.on("drag:out",(function(){n=!0})),t.on("drag:stop",(function(){u.default.Single.play("cubeDown"),n=!1})),t.on("collidable:in",(function(e){var t=e.collidingElement;u.default.Single.play("cubeCollide"),t.classList.add("isColliding")})),t.on("collidable:out",(function(e){e.collidingElement.classList.remove("isColliding")})),t};var a,i=n(1),u=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=document.querySelectorAll(".CubesFrame--idHero .Cube"),a=new i.Swappable(n),o=null;return a.on("drag:start",(function(e){e.sensorEvent.originalEvent.preventDefault(),u.default.Synth.play("up")})),a.on("drag:over",(function(e){e.source.getAttribute("data-face")!==e.over.getAttribute("data-face")&&e.cancel()})),a.on("swappable:swapped",(function(e){var t=e.swappedElement;o=t,u.default.Synth.play("swap")})),a.on("drag:stop",(function(n){if(o&&!n.sourceContainer.contains(n.source)){var i=e.getSwapData(t.progress,n.source,o);u.default.Synth.play("downGood"),t.updateProgress(i),t.checkSolutions(a),o=null}else u.default.Synth.play("downBad")})),a};var a,i=n(1),u=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll(".CubesFrame--idSortable"),t=new a.Sortable(e,{mirror:{appendTo:".CubesFrame--idSortable"}});return t.on("drag:start",(function(){i.default.Single.play("cubeUp")})),t.on("sortable:sorted",u.default.debounce((function(){i.default.Single.play("cubeSort")}),60)),t.on("drag:stop",(function(){i.default.Single.play("cubeDown")})),t};var a=n(1),i=o(n(0)),u=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t.every((function(t){return e.indexOf(t)>=0}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=function(e,t){var n=null;return function(){for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];var o=this;clearTimeout(n),n=setTimeout((function(){return e.apply(o,i)}),t)}},t.debounceDuration=void 0;t.debounceDuration=360},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-n+1))+n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,a=e.length;for(;0!==a;)t=Math.floor(Math.random()*a),n=e[a-=1],e[a]=e[t],e[t]=n;return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=Math.floor(Math.random()*e.length),n=e.length-1,a=e[n];return e[n]=e[t],e[t]=a,e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return"".concat(e.prefix).concat(Math.random().toString(36).substr(2,e.length-1))};var a={prefix:"_",length:"10"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll(".CubesFrame--idSwappable .Cube"),t=new i.Swappable(e),n=null;return t.on("drag:start",(function(){u.default.Synth.play("up")})),t.on("swappable:swapped",(function(e){var t=e.swappedElement;n=t,u.default.Synth.play("swap")})),t.on("drag:stop",(function(){n?u.default.Synth.play("downGood"):u.default.Synth.play("downBad"),n=null})),t};var a,i=n(1),u=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(4)),i=l(n(6)),u=l(n(0)),o=n(7),r=l(n(3)),s=l(n(40)),c=l(n(42));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var f=["track-0-solved","track-1-solved","track-2-solved","track-3-solved"],p="Section--isLoading",b="CubesFrame--idHero",h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=t,this.container=t.querySelector(".".concat(b)),this.progress=(0,s.default)(),this.cubes=null,this.tracks=null,this.solved=!1,this._successEvent=this._successEvent.bind(this),this._checkFaces=this._checkFaces.bind(this),this._checkTracks=this._checkTracks.bind(this)}var t,n,l;return t=e,l=[{key:"getParentCube",value:function(e,t,n){var a=null;return e.forEach((function(e,i){for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&u===t&&Object.keys(e[u])[0]===n&&(a=i)})),a}},{key:"getSwapData",value:function(t,n,a){var i=n.getAttribute("data-face"),u=n.id,o=a.id;return{face:i,source:{id:u,originalCube:e.getParentCube(t,i,u)},swapped:{id:o,originalCube:e.getParentCube(t,i,o)}}}},{key:"isIdentical",value:function(e,t){var n=e.piece===t.piece,a=e.angle===t.angle;return n&&a}}],(n=[{key:"init",value:function(){this.container.appendChild((0,c.default)(this.progress)),this.cubes=this.container.children,this.node.classList.remove(p),this.checkSolutions(null)}},{key:"updateProgress",value:function(e){var t=e.source.originalCube,n=e.swapped.originalCube,a=this.progress[t][e.face],i=this.progress[n][e.face];this.progress[t][e.face]=i,this.progress[n][e.face]=a}},{key:"checkSolutions",value:function(e){this.tracks=[0,0,0,0],this.progress.forEach(this._checkFaces),this.tracks.forEach(this._checkTracks),a.default.arrayContainsArray(this.tracks,r.default.Tracks)&&this._successEvent(e)}},{key:"_sendAnalytics",value:function(){window.dataLayer=window.dataLayer||[],(0,o.gtag)("event","puzzle_solved",{event_category:"Hero puzzle",event_label:"Solved the hero puzzle",transport_type:"beacon",event_callback:function(){console.log("Rm9yIGV2ZXJ5IGFjdGlvbiwgdGhlcmUgaXMgYW4gZXF1YWwgYW5kIG9wcG9zaXRlIHJlYWN0aW9uLg==")}})}},{key:"_successEvent",value:function(e){e.destroy(),this.solved=!0,this.node.classList.add("Hero--isCompleted"),this.node.appendChild((0,i.default)()),u.default.Single.play("heroSuccess"),this._sendAnalytics()}},{key:"_checkFaces",value:function(t,n){for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=Object.keys(t[a])[0],u=t[a][i],o=r.default.Cubes[n][a].face,s=r.default.Faces[a][o];(i===o||e.isIdentical(u,s))&&this.tracks[s.track]++}}},{key:"_checkTracks",value:function(e,t){var n=this.tracks[t]===r.default.Tracks[t],a=this.container.classList.contains(f[t]);n&&!1===a?(u.default.Synth.play("powerOn"),this.container.classList.add(f[t])):!1===n&&a&&(u.default.Synth.play("powerOff"),this.container.classList.remove(f[t]))}}])&&d(t.prototype,n),l&&d(t,l),e}();t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{top:{face:"KubusEenBo"}},{top:{face:"KubusTweeBoonst"},right:{face:"KubusTweeRegs"}},{top:{face:"KubusDrieBo"},right:{face:"KubusDrieRegs"},left:{face:"KubusDrieLinks"}},{top:{face:"KubusVierBoonst"},left:{face:"KubusVierOor"}},{right:{face:"KubusVyfRegs"}},{left:{face:"KubusSesOor"}},{top:{face:"KubusSeweBoonste"},right:{face:"KubusSeweRegs"}},{top:{face:"KubusBoonste"},right:{face:"KubusAgtRegs"},left:{face:"KubusAgtOo"}},{right:{face:"KubusNegeRegs"}},{right:{face:"KubusTienReg"},left:{face:"KubusTienOor"}},{top:{face:"KubusElfBo"},right:{face:"KubusElfRegs"},left:{face:"KubusElfOor"}},{top:{face:"KubusTwaalfBo"},left:{face:"KubusTwaalfOor"}},{top:{face:"KubusDertienBo"},right:{face:"KubusDertienRegs"}},{right:{face:"KubusVeertienRegs"}},{right:{face:"KubusVyftienRegs"},left:{face:"KubusVyftienOor"}},{top:{face:"KubusSestienBo"},right:{face:"KubusSestienRegs"},left:{face:"KubusSestienOor"}},{right:{face:"KubusSewentienRegs"},left:{face:"KubusSewentienOor"}},{top:{face:"KubusAgtienBo"},right:{face:"KubusAgtienRegs"},left:{face:"KubusAgtienOor"}},{top:{face:"KubusNegentienBo"},right:{face:"KubusNegentienRegs"},left:{face:"KubusNegentienOor"}},{top:{face:"KubusTwintigBokant"},right:{face:"KubusTwintigRegs"}},{left:{face:"KubusEenEnTwintigOor"}},{right:{face:"KubusTweeEnTwintigRegs"},left:{face:"KubusTweeEnTwintigOor"}},{right:{face:"KubusDrieEnTwintigRegs"},left:{face:"KubusDrieEnTwintigOor"}},{top:{face:"KubusVierEnTwintigBokant"},right:{face:"KubusVierEnTwintigRegs"},left:{face:"KubusVierEnTwintigOor"}},{top:{face:"KubusVyfEnTwintigBokant"},left:{face:"KubusVyfEnTwintigOor"}},{top:{face:"KubusSesEnTwintigBokant"},right:{face:"KubusSesEnTwintigRegs"},left:{face:"KubusSesEnTwintigOor"}},{top:{face:"KubusSeweEnTwintigBo"},right:{face:"KubusSeweEnTwintigRegs"},left:{face:"KubusSeweEnTwintigOor"}}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={top:{KubusEenBo:{piece:"Elbow",angle:270,track:2},KubusTweeBoonst:{piece:"Elbow",angle:180,track:2},KubusDrieBo:{piece:"Gee",angle:90,track:2},KubusVierBoonst:{piece:"Bowl",angle:270,track:2},KubusSeweBoonste:{piece:"Line",track:3},KubusBoonste:{piece:"Cap",angle:180,track:3},KubusElfBo:{piece:"Lanes",angle:90,track:2},KubusTwaalfBo:{piece:"Elbow",angle:180,track:2},KubusDertienBo:{piece:"Cap",track:2},KubusSestienBo:{piece:"Elbow",angle:90,track:2},KubusAgtienBo:{piece:"Loop",angle:90,track:3},KubusNegentienBo:{piece:"Elbow",angle:180,track:3},KubusTwintigBokant:{piece:"Line",track:1},KubusVierEnTwintigBokant:{piece:"Snake",track:1},KubusVyfEnTwintigBokant:{piece:"Snake",angle:90,track:2},KubusSesEnTwintigBokant:{piece:"Elbow",angle:90,track:2},KubusSeweEnTwintigBo:{piece:"Drie",angle:180,track:0}},right:{KubusTweeRegs:{piece:"Split",track:2},KubusDrieRegs:{piece:"Vier",track:0},KubusVyfRegs:{piece:"Elbow",angle:270,track:1},KubusSeweRegs:{piece:"Cap",angle:270,track:1},KubusAgtRegs:{piece:"Elbow",angle:90,track:1},KubusNegeRegs:{piece:"Elbow",angle:270,track:2},KubusTienReg:{piece:"Split",angle:90,track:2},KubusElfRegs:{piece:"Fork",track:2},KubusDertienRegs:{piece:"Elbow",angle:180,track:3},KubusVeertienRegs:{piece:"Elbow",angle:270,track:3},KubusVyftienRegs:{piece:"Snake",track:3},KubusSestienRegs:{piece:"Elbow",angle:90,track:3},KubusSewentienRegs:{piece:"Elbow",angle:270,track:3},KubusAgtienRegs:{piece:"Line",track:3},KubusNegentienRegs:{piece:"Elbow",track:3},KubusTwintigRegs:{piece:"Cap",angle:270,track:2},KubusTweeEnTwintigRegs:{piece:"Line",track:2},KubusDrieEnTwintigRegs:{piece:"Line",track:2},KubusVierEnTwintigRegs:{piece:"Elbow",angle:90,track:2},KubusSesEnTwintigRegs:{piece:"Line",angle:90,track:1},KubusSeweEnTwintigRegs:{piece:"Snake",angle:90,track:2}},left:{KubusDrieLinks:{piece:"Elbow",angle:90,track:2},KubusVierOor:{piece:"Elbow",track:1},KubusSesOor:{piece:"Elbow",angle:270,track:2},KubusAgtOo:{piece:"Elbow",angle:90,track:2},KubusTienOor:{piece:"Cap",angle:270,track:1},KubusElfOor:{piece:"Elbow",angle:90,track:1},KubusTwaalfOor:{piece:"Elbow",track:3},KubusVyftienOor:{piece:"Line",angle:90,track:3},KubusSestienOor:{piece:"Elbow",angle:90,track:3},KubusSewentienOor:{piece:"Elbow",angle:270,track:3},KubusAgtienOor:{piece:"Cap",angle:90,track:3},KubusNegentienOor:{piece:"Agt",angle:270,track:0},KubusEenEnTwintigOor:{piece:"Elbow",angle:270,track:1},KubusTweeEnTwintigOor:{piece:"Fork",angle:270,track:1},KubusDrieEnTwintigOor:{piece:"Fork",angle:90,track:1},KubusVierEnTwintigOor:{piece:"Line",angle:90,track:1},KubusVyfEnTwintigOor:{piece:"Line",track:1},KubusSesEnTwintigOor:{piece:"Snake",track:1},KubusSeweEnTwintigOor:{piece:"Elbow",track:2}}};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=[];return a.default.Cubes.forEach((function(t,n){for(var i in e.push({}),t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=r[i].shift(),s=a.default.Faces[i][u];e[n][i]=o({},u,s)}})),e};var a=u(n(3)),i=u(n(41));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={top:(0,i.default)("top",!1),right:(0,i.default)("right",!1),left:(0,i.default)("left",!1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];return i.default.Cubes.forEach((function(t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&a===e&&n.push(t[a].face)})),t?a.default.shuffleArrayOnce(n):a.default.shuffleArray(n)};var a=u(n(4)),i=u(n(3));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createDocumentFragment(),n=document.getElementById("HeroCubeTemplate").content;return e.forEach((function(e){t.appendChild(function(e,t){var n=t.cloneNode(!0);for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&u(a,e[a],n);return n}(e,n))})),t};var a,i=(a=n(3))&&a.__esModule?a:{default:a};function u(e,t,n){var a,u,o,r,s,c=Object.keys(t)[0],l=i.default.Faces[e][c],d=n.querySelector('[data-face="'.concat(e,'"]')),f=d.querySelector(".Face");d.id=c,d.classList.add("draggable-source"),0===l.track&&f.classList.add("Face--isBlank"),l.piece&&f.appendChild((a=l.piece,u=l.angle,o=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","use"),(s=["Svg"]).push(u?"Svg--rotate".concat(u):null),o.setAttribute("viewBox","0 0 80 80"),o.setAttribute("class",s.join(" ")),r.setAttributeNS("http://www.w3.org/1999/xlink","href","#SVGPiece".concat(a)),o.appendChild(r),o))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){u.hasLatestWebAudioSupport?(i.default.Accessible(),i.default.Extensible(),i.default.Interaction(),i.default.Animation()):console.warn(u.audioWarning)};var a,i=(a=n(44))&&a.__esModule?a:{default:a},u=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(45)),i=r(n(46)),u=r(n(47)),o=r(n(48));function r(e){return e&&e.__esModule?e:{default:e}}var s={Accessible:a.default,Extensible:i.default,Interaction:u.default,Animation:o.default};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("AccessibleFeature");return e.addEventListener("mouseenter",(function(){i.default.Accessible.play()})),e.addEventListener("mouseleave",(function(){i.default.Accessible.pause()})),e.addEventListener("mousedown",(function(){i.default.Accessible.unmute(1)})),e.addEventListener("mouseup",(function(){i.default.Accessible.mute(1)})),e};var a,i=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("ExtensibleFeature");return e.addEventListener("mouseenter",(function(){i.default.Extensible.play()})),e.addEventListener("mouseleave",(function(){i.default.Extensible.pause()})),e.addEventListener("mousedown",(function(){i.default.Extensible.speed(1.5)})),e.addEventListener("mouseup",(function(){i.default.Extensible.speed(1)})),e};var a,i=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("InteractionFeature");return e.addEventListener("mouseenter",(function(){i.default.Single.play("interactionHover")})),e.addEventListener("mouseleave",(function(){i.default.Single.play("interactionHover",!0)})),e.addEventListener("mousedown",(function(){i.default.Single.play("interactionActive")})),e.addEventListener("mouseup",(function(){i.default.Single.play("interactionActive",!0)})),e};var a,i=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("AnimationCube1"),t=document.getElementById("AnimationCube2"),n=document.getElementById("AnimationCube3");e.addEventListener("mouseenter",(function(){i.default.Single.play("animationUp1")})),t.addEventListener("mouseenter",(function(){i.default.Single.play("animationUp2")})),n.addEventListener("mouseenter",(function(){i.default.Single.play("animationUp3")})),e.addEventListener("mousedown",(function(){i.default.Single.play("animationDown1")})),t.addEventListener("mousedown",(function(){i.default.Single.play("animationDown2")})),n.addEventListener("mousedown",(function(){i.default.Single.play("animationDown3")}))};var a,i=(a=n(0))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("SoundToggle");new a.default(e,i.default).init()};var a=u(n(50)),i=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(){return null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.activator=t,this.sounds=n,this.keys=Object.keys(n),this.backups={},this.label={disable:this.activator.dataset.labelDisable,enable:this.activator.dataset.labelEnable}}var t,n,u;return t=e,(n=[{key:"init",value:function(){this._setState(this.activator.dataset.enabled),this.activator.addEventListener("click",this.toggle.bind(this))}},{key:"toggle",value:function(){var e=this,t="true"===this.activator.dataset.enabled?"false":"true";this._setState(t),0===Object.keys(this.backups).length&&this._backupPlayMethods(),this.keys.forEach((function(t){e.sounds[t].play=e.enabled?e.backups[t]:i}))}},{key:"_backupPlayMethods",value:function(){var e=this;this.keys.forEach((function(t){e.backups[t]=e.sounds[t].play}))}},{key:"_setState",value:function(e){this.enabled="true"===e,this.activator.dataset.enabled=this.enabled,this.activator.textContent=this.enabled?this.label.disable:this.label.enable}}])&&a(t.prototype,n),u&&a(t,u),e}();t.default=u}],[[9,1,2]]]);
//# sourceMappingURL=app.js.map