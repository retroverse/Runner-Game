/*EDITS MADE FOR THIS PROJECT:
	-Canvas Size is updated Dynamically

*/


console.log("JSGMF LINKING");

//HOWLER DEFINITION (AUDIO)
/*! howler.js v2.0.0-beta12 | (c) 2013-2016, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),"undefined"!=typeof e&&e>=0&&1>=e){o._volume=e,n.usingWebAudio&&(n.masterGain.gain.value=e);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),u=0;u<r.length;u++){var a=o._howls[t]._soundById(r[u]);a&&a._node&&(a._node.volume=a._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o._muted=e,n.usingWebAudio&&(n.masterGain.gain.value=e?0:o._volume);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),u=0;u<r.length;u++){var a=o._howls[t]._soundById(r[u]);a&&a._node&&(a._node.muted=e?!0:a._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&"undefined"!=typeof e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e]},_setup:function(){var e=this||n;return e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=new Audio;if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),u=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(u||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||n,o=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(n._navigator&&n._navigator.userAgent),t=!!("ontouchend"in window||n._navigator&&n._navigator.maxTouchPoints>0||n._navigator&&n._navigator.msMaxTouchPoints>0);if(!n.ctx||!e._mobileEnabled&&o&&t){e._mobileEnabled=!1,44100!==n.ctx.sampleRate&&n.unload(),e._scratchBuffer=n.ctx.createBuffer(1,1,22050);var r=function(){var o=n.ctx.createBufferSource();o.buffer=e._scratchBuffer,o.connect(n.ctx.destination),"undefined"==typeof o.start?o.noteOn(0):o.start(0),o.onended=function(){o.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchend",r,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&"undefined"!=typeof e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&"undefined"!=typeof e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.state="resuming",e.ctx.resume().then(function(){e.state="running"}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;return e.src&&0!==e.src.length?void n.init(e):void console.error("An array of source files must be passed with any new Howl.")};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"==typeof e.preload?e.preload:!0,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._webAudio=n.usingWebAudio&&!o._html5,"undefined"!=typeof n.ctx&&n.ctx&&n.mobileAutoEnable&&n._enableMobileAudio(),n._howls.push(o),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var a,d;if(e._format&&e._format[r])a=e._format[r];else{if(d=e._src[r],"string"!=typeof d){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}a=/^data:audio\/([^;,]+);/i.exec(d),a||(a=/\.([^.]+)$/.exec(d.split("?",1)[0])),a&&(a=a[1].toLowerCase())}if(n.codecs(a)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&u(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e){var o=this,t=arguments,r=null;if("number"==typeof e)r=e,e=null;else if("undefined"==typeof e){e="__default";for(var u=0,a=0;a<o._sounds.length;a++)o._sounds[a]._paused&&!o._sounds[a]._ended&&(u++,r=o._sounds[a]._id);1===u?e=null:r=null}var d=r?o._soundById(r):o._inactiveSound();if(!d)return null;if(r&&!e&&(e=d._sprite||"__default"),"loaded"!==o._state&&!o._sprite[e])return o._queue.push({event:"play",action:function(){o.play(o._soundById(d._id)?d._id:void 0)}}),d._id;if(r&&!d._paused)return t[1]||setTimeout(function(){o._emit("play",d._id)},0),d._id;o._webAudio&&n._autoResume();var i=d._seek>0?d._seek:o._sprite[e][0]/1e3,_=(o._sprite[e][0]+o._sprite[e][1])/1e3-i,s=1e3*_/Math.abs(d._rate);s!==1/0&&(o._endTimers[d._id]=setTimeout(o._ended.bind(o,d),s)),d._paused=!1,d._ended=!1,d._sprite=e,d._seek=i,d._start=o._sprite[e][0]/1e3,d._stop=(o._sprite[e][0]+o._sprite[e][1])/1e3,d._loop=!(!d._loop&&!o._sprite[e][2]);var l=d._node;if(o._webAudio){var f=function(){o._refreshBuffer(d);var e=d._muted||o._muted?0:d._volume*n.volume();l.gain.setValueAtTime(e,n.ctx.currentTime),d._playStart=n.ctx.currentTime,"undefined"==typeof l.bufferSource.start?d._loop?l.bufferSource.noteGrainOn(0,i,86400):l.bufferSource.noteGrainOn(0,i,_):d._loop?l.bufferSource.start(0,i,86400):l.bufferSource.start(0,i,_),o._endTimers[d._id]||s===1/0||(o._endTimers[d._id]=setTimeout(o._ended.bind(o,d),s)),t[1]||setTimeout(function(){o._emit("play",d._id)},0)};"loaded"===o._state?f():(o.once("load",f,d._id),o._clearTimer(d._id))}else{var c=function(){l.currentTime=i,l.muted=d._muted||o._muted||n._muted||l.muted,l.volume=d._volume*n.volume(),l.playbackRate=d._rate,setTimeout(function(){l.play(),t[1]||o._emit("play",d._id)},0)},p="loaded"===o._state&&(window&&window.ejecta||!l.readyState&&n._navigator.isCocoonJS);if(4===l.readyState||p)c();else{var m=function(){s!==1/0&&(o._endTimers[d._id]=setTimeout(o._ended.bind(o,d),s)),c(),l.removeEventListener(n._canPlayEvent,m,!1)};l.addEventListener(n._canPlayEvent,m,!1),o._clearTimer(d._id)}}return d._id},pause:function(e){var n=this;if("loaded"!==n._state)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused){if(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node)if(n._webAudio){if(!r._node.bufferSource)return n;"undefined"==typeof r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r._id)}}return n},stop:function(e){var n=this;if("loaded"!==n._state)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=r._start||0,r._rateSeek=0,r._paused=!0,r._ended=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)return n;"undefined"==typeof r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||(r._node.pause(),r._node.currentTime=r._start||0);r&&n._emit("stop",r._id)}return n},mute:function(e,o){var t=this;if("loaded"!==t._state)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if("undefined"==typeof o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),u=0;u<r.length;u++){var a=t._soundById(r[u]);a&&(a._muted=e,t._webAudio&&a._node?a._node.gain.setValueAtTime(e?0:a._volume*n.volume(),n.ctx.currentTime):a._node&&(a._node.muted=n._muted?!0:e),t._emit("mute",a._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length){var u=t._getSoundIds(),a=u.indexOf(r[0]);a>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var d;if(!("undefined"!=typeof e&&e>=0&&1>=e))return d=o?t._soundById(o):t._sounds[0],d?d._volume:0;if("loaded"!==t._state)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;"undefined"==typeof o&&(t._volume=e),o=t._getSoundIds(o);for(var i=0;i<o.length;i++)d=t._soundById(o[i]),d&&(d._volume=e,r[2]||t._stopFade(o[i]),t._webAudio&&d._node&&!d._muted?d._node.gain.setValueAtTime(e*n.volume(),n.ctx.currentTime):d._node&&!d._muted&&(d._node.volume=e*n.volume()),t._emit("volume",d._id));return t},fade:function(e,o,t,r){var u=this,a=Math.abs(e-o),d=e>o?"out":"in",i=a/.01,_=t/i;if("loaded"!==u._state)return u._queue.push({event:"fade",action:function(){u.fade(e,o,t,r)}}),u;u.volume(e,r);for(var s=u._getSoundIds(r),l=0;l<s.length;l++){var f=u._soundById(s[l]);if(f){if(r||u._stopFade(s[l]),u._webAudio&&!f._muted){var c=n.ctx.currentTime,p=c+t/1e3;f._volume=e,f._node.gain.setValueAtTime(e,c),f._node.gain.linearRampToValueAtTime(o,p)}var m=e;f._interval=setInterval(function(e,n){m+="in"===d?.01:-.01,m=Math.max(0,m),m=Math.min(1,m),m=Math.round(100*m)/100,u._webAudio?("undefined"==typeof r&&(u._volume=m),n._volume=m):u.volume(m,e,!0),m===o&&(clearInterval(n._interval),n._interval=null,u.volume(m,e),u._emit("fade",e))}.bind(u,s[l],f),_)}}return u},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return o=t._soundById(parseInt(r[0],10)),o?o._loop:!1;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var u=t._getSoundIds(n),a=0;a<u.length;a++)o=t._soundById(u[a]),o&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var u=t._getSoundIds(),a=u.indexOf(r[0]);a>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var d;if("number"!=typeof e)return d=t._soundById(o),d?d._rate:t._rate;if("loaded"!==t._state)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;"undefined"==typeof o&&(t._rate=e),o=t._getSoundIds(o);for(var i=0;i<o.length;i++)if(d=t._soundById(o[i])){d._rateSeek=t.seek(o[i]),d._playStart=n.ctx.currentTime,d._rate=e,t._webAudio&&d._node&&d._node.bufferSource?d._node.bufferSource.playbackRate.value=e:d._node&&(d._node.playbackRate=e);var _=t.seek(o[i]),s=(t._sprite[d._sprite][0]+t._sprite[d._sprite][1])/1e3-_,l=1e3*s/Math.abs(d._rate);t._clearTimer(o[i]),t._endTimers[o[i]]=setTimeout(t._ended.bind(t,d),l),t._emit("rate",d._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var u=t._getSoundIds(),a=u.indexOf(r[0]);a>=0?o=parseInt(r[0],10):(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if("undefined"==typeof o)return t;if("loaded"!==t._state)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var d=t._soundById(o);if(d){if(!(e>=0)){if(t._webAudio){var i=t.playing(o)?n.ctx.currentTime-d._playStart:0,_=d._rateSeek?d._rateSeek-d._seek:0;return d._seek+(_+i*Math.abs(d._rate))}return d._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),d._seek=e,d._ended=!1,t._clearTimer(o),s&&t.play(o,!0),t._emit("seek",o)}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return o?!o._paused:!1}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this;n._soundById(e)||n._sounds[0];return n._duration},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++){o[t]._paused||(e.stop(o[t]._id),e._emit("end",o[t]._id)),e._webAudio||(o[t]._node.src="",o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1)),delete o[t]._node,e._clearTimer(o[t]._id);var u=n._howls.indexOf(e);u>=0&&n._howls.splice(u,1)}return r&&delete r[e._src],e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,u=r["_on"+e];return"function"==typeof n&&u.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e];if(n){for(var u=0;u<r.length;u++)if(n===r[u].fn&&o===r[u].id){r.splice(u,1);break}}else if(e)t["_on"+e]=[];else for(var a=Object.keys(t),u=0;u<a.length;u++)0===a[u].indexOf("_on")&&Array.isArray(t[a[u]])&&(t[a[u]]=[]);return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],u=r.length-1;u>=0;u--)r[u].id&&r[u].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[u].fn),0),r[u].once&&t.off(e,r[u].fn,r[u].id));return t},_loadQueue:function(){var e=this;if(e._queue.length>0){var n=e._queue[0];e.once(n.event,function(){e._queue.shift(),e._loadQueue()}),n.action()}return e},_ended:function(e){var o=this,t=e._sprite,r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var u=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),u)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id),o},_clearTimer:function(e){var n=this;return n._endTimers[e]&&(clearTimeout(n._endTimers[e]),delete n._endTimers[e]),n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(n>=o)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if("undefined"==typeof e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.value=e._rate,o},_cleanBuffer:function(e){var n=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(o){}}return e.bufferSource=null,n}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._muted=n._muted,e._rate=n._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=Math.round(Date.now()*Math.random()),n._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume*n.volume();return o._webAudio?(e._node="undefined"==typeof n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t,e._node.load()),e},reset:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._muted=n._muted,e._rate=n._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=Math.round(Date.now()*Math.random()),e},_errorListener:function(){var e=this;e._node.error&&4===e._node.error.code&&(n.noAudio=!0),e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorListener,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),o._autoplay&&o.play(),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},u=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void i(e);if(/^data:[^;]+;base64,/.test(n)){window.atob=window.atob||function(e){for(var n,o,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r=String(e).replace(/=+$/,""),u=0,a=0,d="";o=r.charAt(a++);~o&&(n=u%4?64*n+o:o,u++%4)?d+=String.fromCharCode(255&n>>(-2*u&6)):0)o=t.indexOf(o);return d};for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),u=0;u<o.length;++u)t[u]=o.charCodeAt(u);d(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];return"0"!==n&&"2"!==n&&"3"!==n?void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+"."):void d(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},a(_)}},a=function(e){try{e.send()}catch(n){e.onerror()}},d=function(e,o){n.ctx.decodeAudioData(e,function(e){e&&o._sounds.length>0&&(r[o._src]=e,i(o,e))},function(){o._emit("loaderror",null,"Decoding audio data failed.")})},i=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),e._autoplay&&e.play()},_=function(){n.noAudio=!1;try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}if(!n.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;"undefined"==typeof o.oncanplaythrough&&(n._canPlayEvent="canplay")}catch(e){n.noAudio=!0}else n.noAudio=!0;try{var o=new Audio;o.muted&&(n.noAudio=!0)}catch(e){}var t=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),r=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=r?parseInt(r[1],10):null;if(t&&u&&9>u){var a=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!a||n._navigator&&!n._navigator.standalone&&!a)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain="undefined"==typeof n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.value=1,n.masterGain.connect(n.ctx.destination)),n._setup()};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
/*! Effects Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype._velocity=[0,0,0],HowlerGlobal.prototype._listenerAttr={dopplerFactor:1,speedOfSound:343.3},HowlerGlobal.prototype.pos=function(e,n,t){var o=this;return o.ctx&&o.ctx.listener?(n="number"!=typeof n?o._pos[1]:n,t="number"!=typeof t?o._pos[2]:t,"number"!=typeof e?o._pos:(o._pos=[e,n,t],o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]),o)):o},HowlerGlobal.prototype.orientation=function(e,n,t,o,r,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var p=a._orientation;return n="number"!=typeof n?p[1]:n,t="number"!=typeof t?p[2]:t,o="number"!=typeof o?p[3]:o,r="number"!=typeof r?p[4]:r,i="number"!=typeof i?p[5]:i,"number"!=typeof e?p:(a._orientation=[e,n,t,o,r,i],a.ctx.listener.setOrientation(e,n,t,o,r,i),a)},HowlerGlobal.prototype.velocity=function(e,n,t){var o=this;return o.ctx&&o.ctx.listener?(n="number"!=typeof n?o._velocity[1]:n,t="number"!=typeof t?o._velocity[2]:t,"number"!=typeof e?o._velocity:(o._velocity=[e,n,t],o.ctx.listener.setVelocity(o._velocity[0],o._velocity[1],o._velocity[2]),o)):o},HowlerGlobal.prototype.listenerAttr=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;var t=n._listenerAttr;return e?(n._listenerAttr={dopplerFactor:"undefined"!=typeof e.dopplerFactor?e.dopplerFactor:t.dopplerFactor,speedOfSound:"undefined"!=typeof e.speedOfSound?e.speedOfSound:t.speedOfSound},n.ctx.listener.dopplerFactor=t.dopplerFactor,n.ctx.listener.speedOfSound=t.speedOfSound,n):t},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._pos=n.pos||null,t._velocity=n.velocity||[0,0,0],t._pannerAttr={coneInnerAngle:"undefined"!=typeof n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:"undefined"!=typeof n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:"undefined"!=typeof n.coneOuterGain?n.coneOuterGain:0,distanceModel:"undefined"!=typeof n.distanceModel?n.distanceModel:"inverse",maxDistance:"undefined"!=typeof n.maxDistance?n.maxDistance:1e4,panningModel:"undefined"!=typeof n.panningModel?n.panningModel:"HRTF",refDistance:"undefined"!=typeof n.refDistance?n.refDistance:1,rolloffFactor:"undefined"!=typeof n.rolloffFactor?n.rolloffFactor:1},t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t._onvelocity=n.onvelocity?[{fn:n.onvelocity}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.pos=function(n,t,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,o,r)}}),i;if(t="number"!=typeof t?0:t,o="number"!=typeof o?-.5:o,"undefined"==typeof r){if("number"!=typeof n)return i._pos;i._pos=[n,t,o]}for(var a=i._getSoundIds(r),p=0;p<a.length;p++){var l=i._soundById(a[p]);if(l){if("number"!=typeof n)return l._pos;l._pos=[n,t,o],l._node&&(l._panner||e(l),l._panner.setPosition(n,t,o)),i._emit("pos",l._id)}}return i},Howl.prototype.orientation=function(n,t,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,o,r)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,o="number"!=typeof o?i._orientation[2]:o,"undefined"==typeof r){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,o]}for(var a=i._getSoundIds(r),p=0;p<a.length;p++){var l=i._soundById(a[p]);if(l){if("number"!=typeof n)return l._orientation;l._orientation=[n,t,o],l._node&&(l._panner||(l._pos||(l._pos=i._pos||[0,0,-.5]),e(l)),l._panner.setOrientation(n,t,o)),i._emit("orientation",l._id)}}return i},Howl.prototype.velocity=function(n,t,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"velocity",action:function(){i.velocity(n,t,o,r)}}),i;if(t="number"!=typeof t?i._velocity[1]:t,o="number"!=typeof o?i._velocity[2]:o,"undefined"==typeof r){if("number"!=typeof n)return i._velocity;i._velocity=[n,t,o]}for(var a=i._getSoundIds(r),p=0;p<a.length;p++){var l=i._soundById(a[p]);if(l){if("number"!=typeof n)return l._velocity;l._velocity=[n,t,o],l._node&&(l._pos||(l._pos=i._pos||[0,0,-.5]),l._panner||e(l),l._panner.setVelocity(n,t,o)),i._emit("velocity",l._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,o,r=this,i=arguments;if(!r._webAudio)return r;if(0===i.length)return r._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return o=r._soundById(parseInt(i[0],10)),o?o._pannerAttr:r._pannerAttr;n=i[0],"undefined"==typeof t&&(r._pannerAttr={coneInnerAngle:"undefined"!=typeof n.coneInnerAngle?n.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:"undefined"!=typeof n.coneOuterAngle?n.coneOuterAngle:r._coneOuterAngle,coneOuterGain:"undefined"!=typeof n.coneOuterGain?n.coneOuterGain:r._coneOuterGain,distanceModel:"undefined"!=typeof n.distanceModel?n.distanceModel:r._distanceModel,maxDistance:"undefined"!=typeof n.maxDistance?n.maxDistance:r._maxDistance,panningModel:"undefined"!=typeof n.panningModel?n.panningModel:r._panningModel,refDistance:"undefined"!=typeof n.refDistance?n.refDistance:r._refDistance,rolloffFactor:"undefined"!=typeof n.rolloffFactor?n.rolloffFactor:r._rolloffFactor})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=r._getSoundIds(t),p=0;p<a.length;p++)if(o=r._soundById(a[p])){var l=o._pannerAttr;l={coneInnerAngle:"undefined"!=typeof n.coneInnerAngle?n.coneInnerAngle:l.coneInnerAngle,coneOuterAngle:"undefined"!=typeof n.coneOuterAngle?n.coneOuterAngle:l.coneOuterAngle,coneOuterGain:"undefined"!=typeof n.coneOuterGain?n.coneOuterGain:l.coneOuterGain,distanceModel:"undefined"!=typeof n.distanceModel?n.distanceModel:l.distanceModel,maxDistance:"undefined"!=typeof n.maxDistance?n.maxDistance:l.maxDistance,panningModel:"undefined"!=typeof n.panningModel?n.panningModel:l.panningModel,refDistance:"undefined"!=typeof n.refDistance?n.refDistance:l.refDistance,rolloffFactor:"undefined"!=typeof n.rolloffFactor?n.rolloffFactor:l.rolloffFactor};var c=o._panner;c?(c.coneInnerAngle=l.coneInnerAngle,c.coneOuterAngle=l.coneOuterAngle,c.coneOuterGain=l.coneOuterGain,c.distanceModel=l.distanceModel,c.maxDistance=l.maxDistance,c.panningModel=l.panningModel,c.refDistance=l.refDistance,c.rolloffFactor=l.rolloffFactor):(o._pos||(o._pos=r._pos||[0,0,-.5]),e(o))}return r},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._pos=t._pos,n._velocity=t._velocity,n._pannerAttr=t._pannerAttr,e.call(this),n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._pos=t._pos,n._velocity=t._velocity,n._pannerAttr=t._pannerAttr,e.call(this)}}(Sound.prototype.reset);var e=function(e){e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.panningModel=e._pannerAttr.panningModel,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2]),e._panner.setVelocity(e._velocity[0],e._velocity[1],e._velocity[2]),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id)}}();
console.log("HOWLER ADDED");

//JSGMF DEFINITION

function game_background(){return 'white';}
function game_wbackground(){return 'black';}
function game_title(){return 'NEW GAME';}
function game_width(){return 1000;}
function game_height(){return 1000;}
function game_padding(){return 0;}

function game_draw() {
	console.log("NO DRAW OVER-RIDE");
};

function game_init() {
	console.log("NO INIT OVER-RIDE");
};

class JSGMF {

	//INIT SUPPRESSED KEYS
	static initSuppressed() {
		this.suppressed = this.suppressed || [];
	}

	static suppress(x) {
		if (this.suppressed.indexOf(x) == -1)
			this.suppressed.push(x);
	}

	static isSuppressed(x) {
		return (this.suppressed.indexOf(x) == -1)
	}

	//AUDIO
	static initAudio() {
		this.audio = [];
	}

	static addAudio(name, srcd, local) {
		///ADD AND IGNORE ERROR (ERROR IS OUT OF DATE)
		try {
			var sound = new Howl({
				  src: [srcd],
				  html5: !local ? true : false
			});
			this.audio[name] = sound;
		}
		catch(e){return e}
	}

	static getAudio(name) {
		if (this.audio[name] != undefined){return this.audio[name]}else{console.warn("NO SUCH AUDIO:"+name)}
	}

	static playAudio(name) {
		if (this.audio[name] != undefined){this.audio[name].play();}else{console.warn("NO SUCH AUDIO:"+name)}
	}

	//CORE

	static createCanvas() {
		var can = document.createElement('canvas');

		can.id = "canvas";
		can.oncontextmenu = "return false";
		can.width = 1000;
		can.height = 1000;
		can.style = "background-color: white;";

		document.body.appendChild(can);
	}

	static set() {
		function engine_draw()
		{
			if (document.getElementById('canvas').getContext)
			{var ctx = document.getElementById('canvas').getContext('2d');}
			else
			{alert("BROWSER UNSUPPORTED");}
			document.getElementById('canvas').width = game_width();
			document.getElementById('canvas').height = game_height();
			document.body.style = "background-color:"+game_wbackground()+";"
			ctx.fillStyle = game_background();
			ctx.fillRect(0,0,document.getElementById('canvas').width,document.getElementById('canvas').height);
			game_draw(ctx,window.game);
			JSGMF.updatePressed();
			JSGMF.updateMouse();
			document.body.style.margin = game_padding();
			window.requestAnimationFrame(engine_draw);
		}

		function engine_init()
		{
			game_init(window.game);
			engine_draw();
		}

		document.body.style = "background-color: black;";
		document.body.addEventListener("load",engine_init());
	}

	static setNoCanvas() {
		function engine_draw()
		{
			game_draw(window.game);
			updatePressed();
			updateMouse();
			window.requestAnimationFrame(engine_draw);
		}

		function engine_init()
		{
			document.body.style = "background-color:"+game_wbackground()+";"
			game_init(window.game);
			engine_draw();
		}

		document.body.style = "background-color: black;";
		document.body.addEventListener("load",engine_init());
	}

	static getKey(x)
	{
		if (typeof x == typeof "")
			var c = x.charCodeAt(0)-32;
		else
			var c = +x;
		return window.game.keys[c] > 0;
	}

	static press(x)
	{
		var c = x.charCodeAt(0)-32;
		window.game.keys[c] = 2;
	}

	static unPress(x)
	{
		var c = x.charCodeAt(0)-32;
		window.game.keys[c] = 0;
	}

	static getKeyPressed(x)
	{
		if (typeof x == typeof "")
			var c = x.charCodeAt(0)-32;
		else
			var c = +x;
		return window.game.keys[c] == 2 ? true : false;
	}

	static updatePressed(x)
	{
		for (var i=0;i<300;i++){
			window.game.keys[i] = window.game.keys[i] == 2 ? 1 : window.game.keys[i];
		}
	}

	static updateMouse()
	{
		document.mouse.left = document.mouse.left == 2 ? 1 : document.mouse.left;
		document.mouse.middle = document.mouse.middle == 2 ? 1 : document.mouse.middle;
		document.mouse.right = document.mouse.right == 2 ? 1 : document.mouse.right;
	}

	static init(useCanvas) {

		useCanvas = true || useCanvas;

		/*BONUS FUNCTION*/
		window.log = function(x){console.log(x);}

		//AUDIO
		JSGMF.initAudio();

		//Suppressed keys
		JSGMF.initSuppressed();

		//SET PADDING
		document.body.style.margin = 0;

		/*INITIALIZE GAME*/
		window.game = {};
		window.game.keys = new Array();

		/*KEYBOARD CHECKING*/
		for (var i=0;i<300;i++){window.game.keys[i]=false;}
		document.onkeydown = function (e) {
			e = e || window.event;
			var code = e.keyCode;
			if (JSGMF.suppressed.indexOf(code) != -1)
				e.preventDefault();
			if (window.game.keys[code] == 0)
			{window.game.keys[code] = 2;}
			game.keys.last = code;
		};

		document.onkeyup = function (e) {
			e = e || window.event;
			var code = e.keyCode;
			window.game.keys[code] = 0;
		};

		/* MOUSE CHECKING */
		document.mouse = {x:0, y:0, left: 0, right: 0, middle: 0};

		document.onmousemove = function(e){
			document.mouse.x = e.pageX;
			document.mouse.y = e.pageY;
		}

		document.onmousedown = function(e)
		{
			if (e.button == 0 && document.mouse.left == 0){document.mouse.left = 2;}
			if (e.button == 1 && document.mouse.middle == 0){document.mouse.middle = 2;}
			if (e.button == 2 && document.mouse.right == 0){document.mouse.right = 2;}
		}

		document.onmouseup = function(e)
		{
			if (e.button == 0){document.mouse.left = 0;}
			if (e.button == 1){document.mouse.middle = 0;}
			if (e.button == 2){document.mouse.right = 0;}
		}

		document.title = game_title();

		if (useCanvas){JSGMF.set();}else{JSGMF.setNoCanvas();}
	}

}

console.log("JSGMF LINKED");
