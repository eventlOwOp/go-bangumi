import{i as hn,b as At,d as zo,F as To,t as fn,u as qo,c as ct,o as Oo,e as Do}from"./index-e907892f.js";import{c as jo,g as Po}from"./_commonjsHelpers-725317a4.js";import{a as Ro}from"./axios-4a70c6fc.js";const Yo=fn('<div class="sidebar"><div class="item-control-wrap"><span class="item item-control">返回</span><span class="item item-control">更新'),Mo=fn('<span class="item">');function Fo(N){const[_,ee]=N.videoSignal;return(()=>{const Q=Yo(),v=Q.firstChild,W=v.firstChild,y=W.nextSibling;return W.addEventListener("click",()=>location.href="/"),y.addEventListener("click",()=>location.href="/add?s="+encodeURIComponent(N.name)),hn(Q,At(To,{get each(){return N.file()},children:b=>(()=>{const u=Mo();return u.addEventListener("click",()=>ee(b.file)),hn(u,()=>b.name),zo(()=>u.classList.toggle("active",b.file===_())),u})()}),null),Q})()}var ut={exports:{}};(function(N,_){(function(ee,Q){N.exports=Q()})(self,()=>(()=>{var ee={916:(y,b,u)=>{var B=u(471);y.exports=function(w){var g,p="",k=(w=w||{}).video,I=w.options,m=B.$escape,z=w.tran,O=w.icons,L=w.index,j=B.$each;return w.$value,w.$index,p+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,g=u(568)(k),p+=g,p+=`
    `,I.logo&&(p+=`
    <div class="dplayer-logo">
        <img src="`,p+=m(I.logo),p+=`">
    </div>
    `),p+=`
    <div class="dplayer-danmaku"`,I.danmaku&&I.danmaku.bottom&&(p+=' style="margin-bottom:',p+=m(I.danmaku.bottom),p+='"'),p+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,I.danmaku&&(p+=`
        <span class="dplayer-danloading">`,p+=m(z("danmaku-loading")),p+=`</span>
        `),p+=`
        <span class="diplayer-loading-icon">`,p+=O.loading,p+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,p+=m(z("setting")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=O.pallette,p+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,p+=m(z("set-danmaku-color")),p+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=m(L),p+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=m(L),p+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=m(L),p+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=m(L),p+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=m(L),p+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,p+=m(L),p+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,p+=m(z("set-danmaku-type")),p+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=m(L),p+=`" value="1">
                    <span>`,p+=m(z("top")),p+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=m(L),p+=`" value="0" checked>
                    <span>`,p+=m(z("rolling")),p+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,p+=m(L),p+=`" value="2">
                    <span>`,p+=m(z("bottom")),p+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,p+=m(z("input-danmaku-enter")),p+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,p+=m(z("send")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=O.send,p+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,p+=O.play,p+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,p+=O.volumeDown,p+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,p+=m(I.theme),p+=`;">
                        <span class="dplayer-thumb" style="background: `,p+=m(I.theme),p+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,I.live&&(p+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,p+=m(I.theme),p+=';"></span>',p+=m(z("live")),p+=`</span>
        `),p+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,I.video.quality&&(p+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,p+=m(I.video.quality[I.video.defaultQuality].name),p+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,j(I.video.quality,function(D,K){p+=`
                    <div class="dplayer-quality-item" data-index="`,p+=m(K),p+='">',p+=m(D.name),p+=`</div>
                `}),p+=`
                </div>
            </div>
        </div>
        `),p+=`
        `,I.screenshot&&(p+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,p+=m(z("screenshot")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=O.camera,p+=`</span>
        </div>
        `),p+=`
        `,I.airplay&&(p+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,p+=m(z("airplay")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=O.airplay,p+=`</span>
        </div>
        `),p+=`
        `,I.chromecast&&(p+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,p+=m(z("chromecast")),p+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,p+=O.chromecast,p+=`</span>
        </div>
        `),p+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,p+=m(z("send-danmaku")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=O.comment,p+=`</span>
            </button>
        </div>
        `,I.subtitle&&(p+=`
        `,typeof I.subtitle.url=="string"?(p+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,p+=m(z("hide-subs")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=O.subtitle,p+=`</span>
            </button>
        </div>
        `):(p+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,p+=m(z("subtitle")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=O.subtitle,p+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,j(I.subtitle.url,function(D,K){p+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,p+=m(D.url),p+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,p+=m(D.lang?D.name?D.name+" ("+z(D.lang)+")":z(D.lang):D.name),p+=`</span>
                        </div>
                    `}),p+=`
                </div>
            </div>
        </div>
        `),p+=`
        `),p+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,p+=m(z("setting")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=O.setting,p+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,p+=m(z("speed")),p+=`</span>
                        <div class="dplayer-toggle">`,p+=O.right,p+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,p+=m(z("loop")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,p+=m(z("show-danmaku")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,p+=m(z("unlimited-danmaku")),p+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,p+=m(z("opacity-danmaku")),p+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,j(I.playbackSpeed,function(D,K){p+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,p+=m(D),p+=`">
                            <span class="dplayer-label">`,p+=m(D===1?z("normal"):D),p+=`</span>
                        </div>
                    `}),p+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,p+=m(z("web-fullscreen")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=O.fullWeb,p+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,p+=m(z("fullscreen")),p+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,p+=O.full,p+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,p+=m(I.theme),p+=`">
                <span class="dplayer-thumb" style="background: `,p+=m(I.theme),p+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,I.danmaku&&(p+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),p+=`
</div>
<div class="dplayer-menu">
    `,j(I.contextmenu,function(D,K){p+=`
        <div class="dplayer-menu-item">
            <a`,D.link&&(p+=' target="_blank"'),p+=' href="',p+=m(D.link||"javascript:void(0);"),p+='">',D.key&&(p+=" ",p+=m(z(D.key))),D.text&&(p+=" ",p+=m(D.text)),p+=`</a>
        </div>
    `}),p+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,p+=O.play,p+=`
</button>`}},568:(y,b,u)=>{var B=u(471);y.exports=function(w){var g="",p=(w=w||{}).enableSubtitle,k=w.subtitle,I=w.current,m=w.airplay,z=w.pic,O=B.$escape,L=w.screenshot,j=w.preload,D=w.url;return p=k&&k.type==="webvtt",g+=`
<video
    class="dplayer-video `,I&&(g+="dplayer-video-current"),g+=`"
    webkit-playsinline
    `,m&&(g+=' x-webkit-airplay="allow" '),g+=`
    playsinline
    `,z&&(g+='poster="',g+=O(z),g+='"'),g+=`
    `,(L||p)&&(g+='crossorigin="anonymous"'),g+=`
    `,j&&(g+='preload="',g+=O(j),g+='"'),g+=`
    `,m?g+=`
    nosrc
    `:D&&(g+=`
    src="`,g+=O(D),g+=`"
    `),g+=`
    >
    `,m&&(g+=`
    <source src="`,g+=O(D),g+=`">
    `),g+=`
    `,p&&(g+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,g+=O(typeof k.url=="string"?k.url:k.url[k.index].url),g+=`"></track>
    `),g+`
</video>`}},49:(y,b,u)=>{u.d(b,{Z:()=>k});var B=u(415),w=u.n(B),g=u(352),p=u.n(g)()(w());p.push([y.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const k=p},685:(y,b,u)=>{u.d(b,{Z:()=>j});var B=u(415),w=u.n(B),g=u(352),p=u.n(g),k=u(49),I=u(80),m=u.n(I),z=new URL(u(831),u.b),O=p()(w());O.i(k.Z);var L=m()(z);O.push([y.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+L+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const j=O},856:y=>{var b=[];function u(g){for(var p=-1,k=0;k<b.length;k++)if(b[k].identifier===g){p=k;break}return p}function B(g,p){for(var k={},I=[],m=0;m<g.length;m++){var z=g[m],O=p.base?z[0]+p.base:z[0],L=k[O]||0,j="".concat(O," ").concat(L);k[O]=L+1;var D=u(j),K={css:z[1],media:z[2],sourceMap:z[3],supports:z[4],layer:z[5]};if(D!==-1)b[D].references++,b[D].updater(K);else{var ne=w(K,p);p.byIndex=m,b.splice(m,0,{identifier:j,updater:ne,references:1})}I.push(j)}return I}function w(g,p){var k=p.domAPI(p);return k.update(g),function(I){if(I){if(I.css===g.css&&I.media===g.media&&I.sourceMap===g.sourceMap&&I.supports===g.supports&&I.layer===g.layer)return;k.update(g=I)}else k.remove()}}y.exports=function(g,p){var k=B(g=g||[],p=p||{});return function(I){I=I||[];for(var m=0;m<k.length;m++){var z=u(k[m]);b[z].references--}for(var O=B(I,p),L=0;L<k.length;L++){var j=u(k[L]);b[j].references===0&&(b[j].updater(),b.splice(j,1))}k=O}}},370:y=>{var b={};y.exports=function(u,B){var w=function(g){if(b[g]===void 0){var p=document.querySelector(g);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}b[g]=p}return b[g]}(u);if(!w)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");w.appendChild(B)}},278:y=>{y.exports=function(b){var u=document.createElement("style");return b.setAttributes(u,b.attributes),b.insert(u,b.options),u}},458:(y,b,u)=>{y.exports=function(B){var w=u.nc;w&&B.setAttribute("nonce",w)}},470:y=>{y.exports=function(b){var u=b.insertStyleElement(b);return{update:function(B){(function(w,g,p){var k="";p.supports&&(k+="@supports (".concat(p.supports,") {")),p.media&&(k+="@media ".concat(p.media," {"));var I=p.layer!==void 0;I&&(k+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),k+=p.css,I&&(k+="}"),p.media&&(k+="}"),p.supports&&(k+="}");var m=p.sourceMap;m&&typeof btoa<"u"&&(k+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(m))))," */")),g.styleTagTransform(k,w,g.options)})(u,b,B)},remove:function(){(function(B){if(B.parentNode===null)return!1;B.parentNode.removeChild(B)})(u)}}}},488:y=>{y.exports=function(b,u){if(u.styleSheet)u.styleSheet.cssText=b;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(b))}}},251:y=>{y.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:y=>{y.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:y=>{y.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:y=>{y.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(y,b,u)=>{var B=typeof self<"u"?self:typeof window<"u"?window:u.g!==void 0?u.g:{},w=Object.create(B),g=/["&'<>]/;function p(k){return typeof k!="string"&&(k=k==null?"":typeof k=="function"?p(k.call(k)):JSON.stringify(k)),k}w.$escape=function(k){return function(I){var m=""+I,z=g.exec(m);if(!z)return I;var O="",L=void 0,j=void 0,D=void 0;for(L=z.index,j=0;L<m.length;L++){switch(m.charCodeAt(L)){case 34:D="&#34;";break;case 38:D="&#38;";break;case 39:D="&#39;";break;case 60:D="&#60;";break;case 62:D="&#62;";break;default:continue}j!==L&&(O+=m.substring(j,L)),j=L+1,O+=D}return j!==L?O+m.substring(j,L):O}(p(k))},w.$each=function(k,I){if(Array.isArray(k))for(var m=0,z=k.length;m<z;m++)I(k[m],m);else for(var O in k)I(k[O],O)},y.exports=w},471:(y,b,u)=>{y.exports=u(897)},352:y=>{y.exports=function(b){var u=[];return u.toString=function(){return this.map(function(B){var w="",g=B[5]!==void 0;return B[4]&&(w+="@supports (".concat(B[4],") {")),B[2]&&(w+="@media ".concat(B[2]," {")),g&&(w+="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {")),w+=b(B),g&&(w+="}"),B[2]&&(w+="}"),B[4]&&(w+="}"),w}).join("")},u.i=function(B,w,g,p,k){typeof B=="string"&&(B=[[null,B,void 0]]);var I={};if(g)for(var m=0;m<this.length;m++){var z=this[m][0];z!=null&&(I[z]=!0)}for(var O=0;O<B.length;O++){var L=[].concat(B[O]);g&&I[L[0]]||(k!==void 0&&(L[5]===void 0||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=k),w&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=w),p&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=p):L[4]="".concat(p)),u.push(L))}},u}},80:y=>{y.exports=function(b,u){return u||(u={}),b&&(b=String(b.__esModule?b.default:b),/^['"].*['"]$/.test(b)&&(b=b.slice(1,-1)),u.hash&&(b+=u.hash),/["'() \t\n]|(%20)/.test(b)||u.needQuotes?'"'.concat(b.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):b)}},415:y=>{y.exports=function(b){var u=b[1],B=b[3];if(!B)return u;if(typeof btoa=="function"){var w=btoa(unescape(encodeURIComponent(JSON.stringify(B)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(w),p="/*# ".concat(g," */");return[u].concat([p]).join(`
`)}return[u].join(`
`)}},937:y=>{function b(u){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},b(u)}y.exports=(typeof self>"u"?"undefined":b(self))=="object"?self.FormData:window.FormData},831:y=>{y.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},Q={};function v(y){var b=Q[y];if(b!==void 0)return b.exports;var u=Q[y]={id:y,exports:{}};return ee[y](u,u.exports,v),u.exports}v.m=ee,v.n=y=>{var b=y&&y.__esModule?()=>y.default:()=>y;return v.d(b,{a:b}),b},v.d=(y,b)=>{for(var u in b)v.o(b,u)&&!v.o(y,u)&&Object.defineProperty(y,u,{enumerable:!0,get:b[u]})},v.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),v.o=(y,b)=>Object.prototype.hasOwnProperty.call(y,b),v.b=document.baseURI||self.location.href,v.nc=void 0;var W={};return(()=>{v.d(W,{default:()=>Lo});var y=v(856),b=v.n(y),u=v(470),B=v.n(u),w=v(370),g=v.n(w),p=v(458),k=v.n(p),I=v(278),m=v.n(I),z=v(488),O=v.n(z),L=v(685),j={};j.styleTagTransform=O(),j.setAttributes=k(),j.insert=g().bind(null,"head"),j.domAPI=B(),j.insertStyleElement=m(),b()(L.Z,j),L.Z&&L.Z.locals&&L.Z.locals;function D(n){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(n)}function K(n,t){this.name="AggregateError",this.errors=n,this.message=t||""}K.prototype=Error.prototype;function ne(n){return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ne(n)}var yt=setTimeout;function bn(n){return!!(n&&n.length!==void 0)}function mt(){}function Y(n){if(!(this instanceof Y))throw new TypeError("Promises must be constructed via new");if(typeof n!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],vn(n,this)}function gn(n,t){for(;n._state===3;)n=n._value;n._state!==0?(n._handled=!0,Y._immediateFn(function(){var r=n._state===1?t.onFulfilled:t.onRejected;if(r!==null){var e;try{e=r(n._value)}catch(a){return void ce(t.promise,a)}Ve(t.promise,e)}else(n._state===1?Ve:ce)(t.promise,n._value)})):n._deferreds.push(t)}function Ve(n,t){try{if(t===n)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(ne(t)==="object"||typeof t=="function")){var r=t.then;if(t instanceof Y)return n._state=3,n._value=t,void Xe(n);if(typeof r=="function")return void vn((e=r,a=t,function(){e.apply(a,arguments)}),n)}n._state=1,n._value=t,Xe(n)}catch(o){ce(n,o)}var e,a}function ce(n,t){n._state=2,n._value=t,Xe(n)}function Xe(n){n._state===2&&n._deferreds.length===0&&Y._immediateFn(function(){n._handled||Y._unhandledRejectionFn(n._value)});for(var t=0,r=n._deferreds.length;t<r;t++)gn(n,n._deferreds[t]);n._deferreds=null}function ht(n,t,r){this.onFulfilled=typeof n=="function"?n:null,this.onRejected=typeof t=="function"?t:null,this.promise=r}function vn(n,t){var r=!1;try{n(function(e){r||(r=!0,Ve(t,e))},function(e){r||(r=!0,ce(t,e))})}catch(e){if(r)return;r=!0,ce(t,e)}}Y.prototype.catch=function(n){return this.then(null,n)},Y.prototype.then=function(n,t){var r=new this.constructor(mt);return gn(this,new ht(n,t,r)),r},Y.prototype.finally=function(n){var t=this.constructor;return this.then(function(r){return t.resolve(n()).then(function(){return r})},function(r){return t.resolve(n()).then(function(){return t.reject(r)})})},Y.all=function(n){return new Y(function(t,r){if(!bn(n))return r(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(n);if(e.length===0)return t([]);var a=e.length;function o(l,s){try{if(s&&(ne(s)==="object"||typeof s=="function")){var d=s.then;if(typeof d=="function")return void d.call(s,function(c){o(l,c)},r)}e[l]=s,--a==0&&t(e)}catch(c){r(c)}}for(var i=0;i<e.length;i++)o(i,e[i])})},Y.any=function(n){var t=this;return new t(function(r,e){if(!n||n.length===void 0)return e(new TypeError("Promise.any accepts an array"));var a=Array.prototype.slice.call(n);if(a.length===0)return e();for(var o=[],i=0;i<a.length;i++)try{t.resolve(a[i]).then(r).catch(function(l){o.push(l),o.length===a.length&&e(new K(o,"All promises were rejected"))})}catch(l){e(l)}})},Y.allSettled=function(n){return new this(function(t,r){if(!n||n.length===void 0)return r(new TypeError(D(n)+" "+n+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var e=Array.prototype.slice.call(n);if(e.length===0)return t([]);var a=e.length;function o(l,s){if(s&&(D(s)==="object"||typeof s=="function")){var d=s.then;if(typeof d=="function")return void d.call(s,function(c){o(l,c)},function(c){e[l]={status:"rejected",reason:c},--a==0&&t(e)})}e[l]={status:"fulfilled",value:s},--a==0&&t(e)}for(var i=0;i<e.length;i++)o(i,e[i])})},Y.resolve=function(n){return n&&ne(n)==="object"&&n.constructor===Y?n:new Y(function(t){t(n)})},Y.reject=function(n){return new Y(function(t,r){r(n)})},Y.race=function(n){return new Y(function(t,r){if(!bn(n))return r(new TypeError("Promise.race accepts an array"));for(var e=0,a=n.length;e<a;e++)Y.resolve(n[e]).then(t,r)})},Y._immediateFn=typeof setImmediate=="function"&&function(n){setImmediate(n)}||function(n){yt(n,0)},Y._unhandledRejectionFn=function(n){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",n)};const ft=Y;var Ye=/mobile/i.test(window.navigator.userAgent);const T={secondToTime:function(n){if((n=n||0)===0||n===1/0||n.toString()==="NaN")return"00:00";var t=Math.floor(n/3600),r=Math.floor((n-3600*t)/60),e=Math.floor(n-3600*t-60*r);return(t>0?[t,r,e]:[r,e]).map(function(a){return a<10?"0"+a:""+a}).join(":")},getElementViewLeft:function(n){var t=n.offsetLeft,r=n.offsetParent,e=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;r!==null&&r!==n;)t+=r.offsetLeft,r=r.offsetParent;else for(;r!==null;)t+=r.offsetLeft,r=r.offsetParent;return t-e},getBoundingClientRectViewLeft:function(n){var t=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(n.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var r=document.createElement("div");r.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(r),this.getBoundingClientRectViewLeft.offset=-r.getBoundingClientRect().top-t,document.body.removeChild(r),r=null}var e=n.getBoundingClientRect(),a=this.getBoundingClientRectViewLeft.offset;return e.left+a}return this.getElementViewLeft(n)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(n){var t=n.left,r=t===void 0?0:t,e=n.top,a=e===void 0?0:e;this.isFirefox?(document.documentElement.scrollLeft=r,document.documentElement.scrollTop=a):window.scrollTo(r,a)},isMobile:Ye,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(n,t){localStorage.setItem(n,t)},get:function(n){return localStorage.getItem(n)}},nameMap:{dragStart:Ye?"touchstart":"mousedown",dragMove:Ye?"touchmove":"mousemove",dragEnd:Ye?"touchend":"mouseup"},color2Number:function(n){return n[0]==="#"&&(n=n.substr(1)),n.length===3&&(n="".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])),parseInt(n,16)+0&16777215},number2Color:function(n){return"#"+("00000"+n.toString(16)).slice(-6)},number2Type:function(n){switch(n){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function xn(n,t){return function(){return n.apply(t,arguments)}}function Ae(n){return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ae(n)}var Je,En=Object.prototype.toString,$e=Object.getPrototypeOf,Ge=(Je=Object.create(null),function(n){var t=En.call(n);return Je[t]||(Je[t]=t.slice(8,-1).toLowerCase())}),V=function(n){return n=n.toLowerCase(),function(t){return Ge(t)===n}},Me=function(n){return function(t){return Ae(t)===n}},oe=Array.isArray,ue=Me("undefined"),wn=V("ArrayBuffer"),bt=Me("string"),te=Me("function"),Cn=Me("number"),en=function(n){return n!==null&&Ae(n)==="object"},Fe=function(n){if(Ge(n)!=="object")return!1;var t=$e(n);return!(t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.toStringTag in n||Symbol.iterator in n)},gt=V("Date"),vt=V("File"),xt=V("Blob"),Et=V("FileList"),wt=V("URLSearchParams");function ye(n,t){var r,e,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=a.allOwnKeys,i=o!==void 0&&o;if(n!=null)if(Ae(n)!=="object"&&(n=[n]),oe(n))for(r=0,e=n.length;r<e;r++)t.call(null,n[r],r,n);else{var l,s=i?Object.getOwnPropertyNames(n):Object.keys(n),d=s.length;for(r=0;r<d;r++)l=s[r],t.call(null,n[l],l,n)}}function kn(n,t){t=t.toLowerCase();for(var r,e=Object.keys(n),a=e.length;a-- >0;)if(t===(r=e[a]).toLowerCase())return r;return null}var nn,Bn,Sn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:jo,In=function(n){return!ue(n)&&n!==Sn},Ct=(nn=typeof Uint8Array<"u"&&$e(Uint8Array),function(n){return nn&&n instanceof nn}),kt=V("HTMLFormElement"),Ln=(Bn=Object.prototype.hasOwnProperty,function(n,t){return Bn.call(n,t)}),Bt=V("RegExp"),zn=function(n,t){var r=Object.getOwnPropertyDescriptors(n),e={};ye(r,function(a,o){t(a,o,n)!==!1&&(e[o]=a)}),Object.defineProperties(n,e)};const A={isArray:oe,isArrayBuffer:wn,isBuffer:function(n){return n!==null&&!ue(n)&&n.constructor!==null&&!ue(n.constructor)&&te(n.constructor.isBuffer)&&n.constructor.isBuffer(n)},isFormData:function(n){var t="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||En.call(n)===t||te(n.toString)&&n.toString()===t)},isArrayBufferView:function(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&wn(n.buffer)},isString:bt,isNumber:Cn,isBoolean:function(n){return n===!0||n===!1},isObject:en,isPlainObject:Fe,isUndefined:ue,isDate:gt,isFile:vt,isBlob:xt,isRegExp:Bt,isFunction:te,isStream:function(n){return en(n)&&te(n.pipe)},isURLSearchParams:wt,isTypedArray:Ct,isFileList:Et,forEach:ye,merge:function n(){for(var t=In(this)&&this||{},r=t.caseless,e={},a=function(l,s){var d=r&&kn(e,s)||s;Fe(e[d])&&Fe(l)?e[d]=n(e[d],l):Fe(l)?e[d]=n({},l):oe(l)?e[d]=l.slice():e[d]=l},o=0,i=arguments.length;o<i;o++)arguments[o]&&ye(arguments[o],a);return e},extend:function(n,t,r){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=e.allOwnKeys;return ye(t,function(o,i){r&&te(o)?n[i]=xn(o,r):n[i]=o},{allOwnKeys:a}),n},trim:function(n){return n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n},inherits:function(n,t,r,e){n.prototype=Object.create(t.prototype,e),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),r&&Object.assign(n.prototype,r)},toFlatObject:function(n,t,r,e){var a,o,i,l={};if(t=t||{},n==null)return t;do{for(o=(a=Object.getOwnPropertyNames(n)).length;o-- >0;)i=a[o],e&&!e(i,n,t)||l[i]||(t[i]=n[i],l[i]=!0);n=r!==!1&&$e(n)}while(n&&(!r||r(n,t))&&n!==Object.prototype);return t},kindOf:Ge,kindOfTest:V,endsWith:function(n,t,r){n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=t.length;var e=n.indexOf(t,r);return e!==-1&&e===r},toArray:function(n){if(!n)return null;if(oe(n))return n;var t=n.length;if(!Cn(t))return null;for(var r=new Array(t);t-- >0;)r[t]=n[t];return r},forEachEntry:function(n,t){for(var r,e=(n&&n[Symbol.iterator]).call(n);(r=e.next())&&!r.done;){var a=r.value;t.call(n,a[0],a[1])}},matchAll:function(n,t){for(var r,e=[];(r=n.exec(t))!==null;)e.push(r);return e},isHTMLForm:kt,hasOwnProperty:Ln,hasOwnProp:Ln,reduceDescriptors:zn,freezeMethods:function(n){zn(n,function(t,r){if(te(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;var e=n[r];te(e)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:function(n,t){var r={},e=function(a){a.forEach(function(o){r[o]=!0})};return oe(n)?e(n):e(String(n).split(t)),r},toCamelCase:function(n){return n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,r,e){return r.toUpperCase()+e})},noop:function(){},toFiniteNumber:function(n,t){return n=+n,Number.isFinite(n)?n:t},findKey:kn,global:Sn,isContextDefined:In,toJSONObject:function(n){var t=new Array(10);return function r(e,a){if(en(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[a]=e;var o=oe(e)?[]:{};return ye(e,function(i,l){var s=r(i,a+1);!ue(s)&&(o[l]=s)}),t[a]=void 0,o}}return e}(n,0)}};function re(n,t,r,e,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),e&&(this.request=e),a&&(this.response=a)}A.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Tn=re.prototype,qn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(n){qn[n]={value:n}}),Object.defineProperties(re,qn),Object.defineProperty(Tn,"isAxiosError",{value:!0}),re.from=function(n,t,r,e,a,o){var i=Object.create(Tn);return A.toFlatObject(n,i,function(l){return l!==Error.prototype},function(l){return l!=="isAxiosError"}),re.call(i,n.message,t,r,e,a),i.cause=n,i.name=n.name,o&&Object.assign(i,o),i};const P=re,St=v(937);function tn(n){return tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tn(n)}function an(n){return A.isPlainObject(n)||A.isArray(n)}function On(n){return A.endsWith(n,"[]")?n.slice(0,-2):n}function Dn(n,t,r){return n?n.concat(t).map(function(e,a){return e=On(e),!r&&a?"["+e+"]":e}).join(r?".":""):t}var It=A.toFlatObject(A,{},null,function(n){return/^is[A-Z]/.test(n)});const Ue=function(n,t,r){if(!A.isObject(n))throw new TypeError("target must be an object");t=t||new(St||FormData);var e,a=(r=A.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,E){return!A.isUndefined(E[C])})).metaTokens,o=r.visitor||c,i=r.dots,l=r.indexes,s=(r.Blob||typeof Blob<"u"&&Blob)&&(e=t)&&A.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator];if(!A.isFunction(o))throw new TypeError("visitor must be a function");function d(C){if(C===null)return"";if(A.isDate(C))return C.toISOString();if(!s&&A.isBlob(C))throw new P("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(C)||A.isTypedArray(C)?s&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function c(C,E,f){var S=C;if(C&&!f&&tn(C)==="object"){if(A.endsWith(E,"{}"))E=a?E:E.slice(0,-2),C=JSON.stringify(C);else if(A.isArray(C)&&function(q){return A.isArray(q)&&!q.some(an)}(C)||A.isFileList(C)||A.endsWith(E,"[]")&&(S=A.toArray(C)))return E=On(E),S.forEach(function(q,U){!A.isUndefined(q)&&q!==null&&t.append(l===!0?Dn([E],U,i):l===null?E:E+"[]",d(q))}),!1}return!!an(C)||(t.append(Dn(f,E,i),d(C)),!1)}var h=[],x=Object.assign(It,{defaultVisitor:c,convertValue:d,isVisitable:an});if(!A.isObject(n))throw new TypeError("data must be an object");return function C(E,f){if(!A.isUndefined(E)){if(h.indexOf(E)!==-1)throw Error("Circular reference detected in "+f.join("."));h.push(E),A.forEach(E,function(S,q){(!(A.isUndefined(S)||S===null)&&o.call(t,S,A.isString(q)?q.trim():q,f,x))===!0&&C(S,f?f.concat(q):[q])}),h.pop()}}(n),t};function jn(n){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Pn(n,t){this._pairs=[],n&&Ue(n,this,t)}var Rn=Pn.prototype;Rn.append=function(n,t){this._pairs.push([n,t])},Rn.toString=function(n){var t=n?function(r){return n.call(this,r,jn)}:jn;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};const Yn=Pn;function Lt(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Mn(n,t,r){if(!t)return n;var e,a=r&&r.encode||Lt,o=r&&r.serialize;if(e=o?o(t,r):A.isURLSearchParams(t)?t.toString():new Yn(t,r).toString(a)){var i=n.indexOf("#");i!==-1&&(n=n.slice(0,i)),n+=(n.indexOf("?")===-1?"?":"&")+e}return n}function me(n){return me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(n)}function zt(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(me(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(me(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),me(a)==="symbol"?a:String(a)),e)}var a}var Tt=function(){function n(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,n),this.handlers=[]}var t,r;return t=n,r=[{key:"use",value:function(e,a,o){return this.handlers.push({fulfilled:e,rejected:a,synchronous:!!o&&o.synchronous,runWhen:o?o.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){A.forEach(this.handlers,function(a){a!==null&&e(a)})}}],r&&zt(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Fn=Tt,Un={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:Yn,Ot=FormData;var on,Dt=(typeof navigator>"u"||(on=navigator.product)!=="ReactNative"&&on!=="NativeScript"&&on!=="NS")&&typeof window<"u"&&typeof document<"u",jt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const Z={isBrowser:!0,classes:{URLSearchParams:qt,FormData:Ot,Blob},isStandardBrowserEnv:Dt,isStandardBrowserWebWorkerEnv:jt,protocols:["http","https","file","blob","url","data"]},Wn=function(n){function t(e,a,o,i){var l=e[i++],s=Number.isFinite(+l),d=i>=e.length;return l=!l&&A.isArray(o)?o.length:l,d?(A.hasOwnProp(o,l)?o[l]=[o[l],a]:o[l]=a,!s):(o[l]&&A.isObject(o[l])||(o[l]=[]),t(e,a,o[l],i)&&A.isArray(o[l])&&(o[l]=function(c){var h,x,C={},E=Object.keys(c),f=E.length;for(h=0;h<f;h++)C[x=E[h]]=c[x];return C}(o[l])),!s)}if(A.isFormData(n)&&A.isFunction(n.entries)){var r={};return A.forEachEntry(n,function(e,a){t(function(o){return A.matchAll(/\w+|\[(\w*)]/g,o).map(function(i){return i[0]==="[]"?"":i[1]||i[0]})}(e),a,r,0)}),r}return null};var Pt={"Content-Type":void 0},We={transitional:Un,adapter:["xhr","http"],transformRequest:[function(n,t){var r,e=t.getContentType()||"",a=e.indexOf("application/json")>-1,o=A.isObject(n);if(o&&A.isHTMLForm(n)&&(n=new FormData(n)),A.isFormData(n))return a&&a?JSON.stringify(Wn(n)):n;if(A.isArrayBuffer(n)||A.isBuffer(n)||A.isStream(n)||A.isFile(n)||A.isBlob(n))return n;if(A.isArrayBufferView(n))return n.buffer;if(A.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();if(o){if(e.indexOf("application/x-www-form-urlencoded")>-1)return function(l,s){return Ue(l,new Z.classes.URLSearchParams,Object.assign({visitor:function(d,c,h,x){return Z.isNode&&A.isBuffer(d)?(this.append(c,d.toString("base64")),!1):x.defaultVisitor.apply(this,arguments)}},s))}(n,this.formSerializer).toString();if((r=A.isFileList(n))||e.indexOf("multipart/form-data")>-1){var i=this.env&&this.env.FormData;return Ue(r?{"files[]":n}:n,i&&new i,this.formSerializer)}}return o||a?(t.setContentType("application/json",!1),function(l,s,d){if(A.isString(l))try{return(0,JSON.parse)(l),A.trim(l)}catch(c){if(c.name!=="SyntaxError")throw c}return(0,JSON.stringify)(l)}(n)):n}],transformResponse:[function(n){var t=this.transitional||We.transitional,r=t&&t.forcedJSONParsing,e=this.responseType==="json";if(n&&A.isString(n)&&(r&&!this.responseType||e)){var a=!(t&&t.silentJSONParsing)&&e;try{return JSON.parse(n)}catch(o){if(a)throw o.name==="SyntaxError"?P.from(o,P.ERR_BAD_RESPONSE,this,null,this.response):o}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Z.classes.FormData,Blob:Z.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};A.forEach(["delete","get","head"],function(n){We.headers[n]={}}),A.forEach(["post","put","patch"],function(n){We.headers[n]=A.merge(Pt)});const rn=We;var Rt=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function he(n){return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(n)}function Nn(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function _n(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(he(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(he(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),he(a)==="symbol"?a:String(a)),e)}var a}var Hn=Symbol("internals");function fe(n){return n&&String(n).trim().toLowerCase()}function Ne(n){return n===!1||n==null?n:A.isArray(n)?n.map(Ne):String(n)}function Qn(n,t,r,e){return A.isFunction(e)?e.call(this,t,r):A.isString(t)?A.isString(e)?t.indexOf(e)!==-1:A.isRegExp(e)?e.test(t):void 0:void 0}var _e=function(n,t){function r(i){(function(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")})(this,r),i&&this.set(i)}var e,a,o;return e=r,a=[{key:"set",value:function(i,l,s){var d=this;function c(q,U,M){var R=fe(U);if(!R)throw new Error("header name must be a non-empty string");var G=A.findKey(d,R);(!G||d[G]===void 0||M===!0||M===void 0&&d[G]!==!1)&&(d[G||U]=Ne(q))}var h,x,C,E,f,S=function(q,U){return A.forEach(q,function(M,R){return c(M,R,U)})};return A.isPlainObject(i)||i instanceof this.constructor?S(i,l):A.isString(i)&&(i=i.trim())&&!/^[-_a-zA-Z]+$/.test(i.trim())?S((f={},(h=i)&&h.split(`
`).forEach(function(q){E=q.indexOf(":"),x=q.substring(0,E).trim().toLowerCase(),C=q.substring(E+1).trim(),!x||f[x]&&Rt[x]||(x==="set-cookie"?f[x]?f[x].push(C):f[x]=[C]:f[x]=f[x]?f[x]+", "+C:C)}),f),l):i!=null&&c(l,i,s),this}},{key:"get",value:function(i,l){if(i=fe(i)){var s=A.findKey(this,i);if(s){var d=this[s];if(!l)return d;if(l===!0)return function(c){for(var h,x=Object.create(null),C=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;h=C.exec(c);)x[h[1]]=h[2];return x}(d);if(A.isFunction(l))return l.call(this,d,s);if(A.isRegExp(l))return l.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(i,l){if(i=fe(i)){var s=A.findKey(this,i);return!(!s||l&&!Qn(0,this[s],s,l))}return!1}},{key:"delete",value:function(i,l){var s=this,d=!1;function c(h){if(h=fe(h)){var x=A.findKey(s,h);!x||l&&!Qn(0,s[x],x,l)||(delete s[x],d=!0)}}return A.isArray(i)?i.forEach(c):c(i),d}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(i){var l=this,s={};return A.forEach(this,function(d,c){var h=A.findKey(s,c);if(h)return l[h]=Ne(d),void delete l[c];var x=i?function(C){return C.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(E,f,S){return f.toUpperCase()+S})}(c):String(c).trim();x!==c&&delete l[c],l[x]=Ne(d),s[x]=!0}),this}},{key:"concat",value:function(){for(var i,l=arguments.length,s=new Array(l),d=0;d<l;d++)s[d]=arguments[d];return(i=this.constructor).concat.apply(i,[this].concat(s))}},{key:"toJSON",value:function(i){var l=Object.create(null);return A.forEach(this,function(s,d){s!=null&&s!==!1&&(l[d]=i&&A.isArray(s)?s.join(", "):s)}),l}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(i){var l,s,d=(s=2,function(c){if(Array.isArray(c))return c}(l=i)||function(c,h){var x=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(x!=null){var C,E,f,S,q=[],U=!0,M=!1;try{if(f=(x=x.call(c)).next,h===0){if(Object(x)!==x)return;U=!1}else for(;!(U=(C=f.call(x)).done)&&(q.push(C.value),q.length!==h);U=!0);}catch(R){M=!0,E=R}finally{try{if(!U&&x.return!=null&&(S=x.return(),Object(S)!==S))return}finally{if(M)throw E}}return q}}(l,s)||function(c,h){if(c){if(typeof c=="string")return Nn(c,h);var x=Object.prototype.toString.call(c).slice(8,-1);return x==="Object"&&c.constructor&&(x=c.constructor.name),x==="Map"||x==="Set"?Array.from(c):x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)?Nn(c,h):void 0}}(l,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return d[0]+": "+d[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],o=[{key:"from",value:function(i){return i instanceof this?i:new this(i)}},{key:"concat",value:function(i){for(var l=new this(i),s=arguments.length,d=new Array(s>1?s-1:0),c=1;c<s;c++)d[c-1]=arguments[c];return d.forEach(function(h){return l.set(h)}),l}},{key:"accessor",value:function(i){var l=(this[Hn]=this[Hn]={accessors:{}}).accessors,s=this.prototype;function d(c){var h=fe(c);l[h]||(function(x,C){var E=A.toCamelCase(" "+C);["get","set","has"].forEach(function(f){Object.defineProperty(x,f+E,{value:function(S,q,U){return this[f].call(this,C,S,q,U)},configurable:!0})})}(s,c),l[h]=!0)}return A.isArray(i)?i.forEach(d):d(i),this}}],a&&_n(e.prototype,a),o&&_n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),r}();_e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),A.freezeMethods(_e.prototype),A.freezeMethods(_e);const X=_e;function ln(n,t){var r=this||rn,e=t||r,a=X.from(e.headers),o=e.data;return A.forEach(n,function(i){o=i.call(r,o,a.normalize(),t?t.status:void 0)}),a.normalize(),o}function Kn(n){return!(!n||!n.__CANCEL__)}function Zn(n,t,r){P.call(this,n??"canceled",P.ERR_CANCELED,t,r),this.name="CanceledError"}A.inherits(Zn,P,{__CANCEL__:!0});const He=Zn,Yt=Z.isStandardBrowserEnv?{write:function(n,t,r,e,a,o){var i=[];i.push(n+"="+encodeURIComponent(t)),A.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),A.isString(e)&&i.push("path="+e),A.isString(a)&&i.push("domain="+a),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Vn(n,t){return n&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(r,e){return e?r.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):r}(n,t):t}const Mt=Z.isStandardBrowserEnv?function(){var n,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function e(a){var o=a;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=e(window.location.href),function(a){var o=A.isString(a)?e(a):a;return o.protocol===n.protocol&&o.host===n.host}}():function(){return!0};function Xn(n,t){var r=0,e=function(a,o){a=a||10;var i,l=new Array(a),s=new Array(a),d=0,c=0;return o=o!==void 0?o:1e3,function(h){var x=Date.now(),C=s[c];i||(i=x),l[d]=h,s[d]=x;for(var E=c,f=0;E!==d;)f+=l[E++],E%=a;if((d=(d+1)%a)===c&&(c=(c+1)%a),!(x-i<o)){var S=C&&x-C;return S?Math.round(1e3*f/S):void 0}}}(50,250);return function(a){var o=a.loaded,i=a.lengthComputable?a.total:void 0,l=o-r,s=e(l);r=o;var d={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:s||void 0,estimated:s&&i&&o<=i?(i-o)/s:void 0,event:a};d[t?"download":"upload"]=!0,n(d)}}var sn={http:null,xhr:typeof XMLHttpRequest<"u"&&function(n){return new Promise(function(t,r){var e,a=n.data,o=X.from(n.headers).normalize(),i=n.responseType;function l(){n.cancelToken&&n.cancelToken.unsubscribe(e),n.signal&&n.signal.removeEventListener("abort",e)}A.isFormData(a)&&(Z.isStandardBrowserEnv||Z.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);var s=new XMLHttpRequest;if(n.auth){var d=n.auth.username||"",c=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+c))}var h=Vn(n.baseURL,n.url);function x(){if(s){var S=X.from("getAllResponseHeaders"in s&&s.getAllResponseHeaders());(function(q,U,M){var R=M.config.validateStatus;M.status&&R&&!R(M.status)?U(new P("Request failed with status code "+M.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(M.status/100)-4],M.config,M.request,M)):q(M)})(function(q){t(q),l()},function(q){r(q),l()},{data:i&&i!=="text"&&i!=="json"?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:S,config:n,request:s}),s=null}}if(s.open(n.method.toUpperCase(),Mn(h,n.params,n.paramsSerializer),!0),s.timeout=n.timeout,"onloadend"in s?s.onloadend=x:s.onreadystatechange=function(){s&&s.readyState===4&&(s.status!==0||s.responseURL&&s.responseURL.indexOf("file:")===0)&&setTimeout(x)},s.onabort=function(){s&&(r(new P("Request aborted",P.ECONNABORTED,n,s)),s=null)},s.onerror=function(){r(new P("Network Error",P.ERR_NETWORK,n,s)),s=null},s.ontimeout=function(){var S=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",q=n.transitional||Un;n.timeoutErrorMessage&&(S=n.timeoutErrorMessage),r(new P(S,q.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,n,s)),s=null},Z.isStandardBrowserEnv){var C=(n.withCredentials||Mt(h))&&n.xsrfCookieName&&Yt.read(n.xsrfCookieName);C&&o.set(n.xsrfHeaderName,C)}a===void 0&&o.setContentType(null),"setRequestHeader"in s&&A.forEach(o.toJSON(),function(S,q){s.setRequestHeader(q,S)}),A.isUndefined(n.withCredentials)||(s.withCredentials=!!n.withCredentials),i&&i!=="json"&&(s.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&s.addEventListener("progress",Xn(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",Xn(n.onUploadProgress)),(n.cancelToken||n.signal)&&(e=function(S){s&&(r(!S||S.type?new He(null,n,s):S),s.abort(),s=null)},n.cancelToken&&n.cancelToken.subscribe(e),n.signal&&(n.signal.aborted?e():n.signal.addEventListener("abort",e)));var E,f=(E=/^([-+\w]{1,25})(:?\/\/|:)/.exec(h))&&E[1]||"";f&&Z.protocols.indexOf(f)===-1?r(new P("Unsupported protocol "+f+":",P.ERR_BAD_REQUEST,n)):s.send(a||null)})}};A.forEach(sn,function(n,t){if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});function pn(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new He(null,n)}function Jn(n){return pn(n),n.headers=X.from(n.headers),n.data=ln.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),function(t){for(var r,e,a=(t=A.isArray(t)?t:[t]).length,o=0;o<a&&(r=t[o],!(e=A.isString(r)?sn[r.toLowerCase()]:r));o++);if(!e)throw e===!1?new P("Adapter ".concat(r," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(A.hasOwnProp(sn,r)?"Adapter '".concat(r,"' is not available in the build"):"Unknown adapter '".concat(r,"'"));if(!A.isFunction(e))throw new TypeError("adapter is not a function");return e}(n.adapter||rn.adapter)(n).then(function(t){return pn(n),t.data=ln.call(n,n.transformResponse,t),t.headers=X.from(t.headers),t},function(t){return Kn(t)||(pn(n),t&&t.response&&(t.response.data=ln.call(n,n.transformResponse,t.response),t.response.headers=X.from(t.response.headers))),Promise.reject(t)})}var $n=function(n){return n instanceof X?n.toJSON():n};function ie(n,t){t=t||{};var r={};function e(d,c,h){return A.isPlainObject(d)&&A.isPlainObject(c)?A.merge.call({caseless:h},d,c):A.isPlainObject(c)?A.merge({},c):A.isArray(c)?c.slice():c}function a(d,c,h){return A.isUndefined(c)?A.isUndefined(d)?void 0:e(void 0,d,h):e(d,c,h)}function o(d,c){if(!A.isUndefined(c))return e(void 0,c)}function i(d,c){return A.isUndefined(c)?A.isUndefined(d)?void 0:e(void 0,d):e(void 0,c)}function l(d,c,h){return h in t?e(d,c):h in n?e(void 0,d):void 0}var s={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:function(d,c){return a($n(d),$n(c),!0)}};return A.forEach(Object.keys(n).concat(Object.keys(t)),function(d){var c=s[d]||a,h=c(n[d],t[d],d);A.isUndefined(h)&&c!==l||(r[d]=h)}),r}function Qe(n){return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qe(n)}var dn={};["object","boolean","number","function","string","symbol"].forEach(function(n,t){dn[n]=function(r){return Qe(r)===n||"a"+(t<1?"n ":" ")+n}});var Gn={};dn.transitional=function(n,t,r){function e(a,o){return"[Axios v1.2.3] Transitional option '"+a+"'"+o+(r?". "+r:"")}return function(a,o,i){if(n===!1)throw new P(e(o," has been removed"+(t?" in "+t:"")),P.ERR_DEPRECATED);return t&&!Gn[o]&&(Gn[o]=!0,console.warn(e(o," has been deprecated since v"+t+" and will be removed in the near future"))),!n||n(a,o,i)}};const cn={assertOptions:function(n,t,r){if(Qe(n)!=="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);for(var e=Object.keys(n),a=e.length;a-- >0;){var o=e[a],i=t[o];if(i){var l=n[o],s=l===void 0||i(l,o,n);if(s!==!0)throw new P("option "+o+" must be "+s,P.ERR_BAD_OPTION_VALUE)}else if(r!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}},validators:dn};function be(n){return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(n)}function Ft(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(be(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(be(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),be(a)==="symbol"?a:String(a)),e)}var a}var J=cn.validators,Ke=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.defaults=e,this.interceptors={request:new Fn,response:new Fn}}var t,r;return t=n,(r=[{key:"request",value:function(e,a){typeof e=="string"?(a=a||{}).url=e:a=e||{};var o,i=a=ie(this.defaults,a),l=i.transitional,s=i.paramsSerializer,d=i.headers;l!==void 0&&cn.assertOptions(l,{silentJSONParsing:J.transitional(J.boolean),forcedJSONParsing:J.transitional(J.boolean),clarifyTimeoutError:J.transitional(J.boolean)},!1),s!==void 0&&cn.assertOptions(s,{encode:J.function,serialize:J.function},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase(),(o=d&&A.merge(d.common,d[a.method]))&&A.forEach(["delete","get","head","post","put","patch","common"],function(R){delete d[R]}),a.headers=X.concat(o,d);var c=[],h=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(a)===!1||(h=h&&R.synchronous,c.unshift(R.fulfilled,R.rejected))});var x,C=[];this.interceptors.response.forEach(function(R){C.push(R.fulfilled,R.rejected)});var E,f=0;if(!h){var S=[Jn.bind(this),void 0];for(S.unshift.apply(S,c),S.push.apply(S,C),E=S.length,x=Promise.resolve(a);f<E;)x=x.then(S[f++],S[f++]);return x}E=c.length;var q=a;for(f=0;f<E;){var U=c[f++],M=c[f++];try{q=U(q)}catch(R){M.call(this,R);break}}try{x=Jn.call(this,q)}catch(R){return Promise.reject(R)}for(f=0,E=C.length;f<E;)x=x.then(C[f++],C[f++]);return x}},{key:"getUri",value:function(e){return Mn(Vn((e=ie(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}])&&Ft(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();A.forEach(["delete","get","head","options"],function(n){Ke.prototype[n]=function(t,r){return this.request(ie(r||{},{method:n,url:t,data:(r||{}).data}))}}),A.forEach(["post","put","patch"],function(n){function t(r){return function(e,a,o){return this.request(ie(o||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:e,data:a}))}}Ke.prototype[n]=t(),Ke.prototype[n+"Form"]=t(!0)});const Ze=Ke;function ge(n){return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(n)}function et(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(ge(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(ge(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),ge(a)==="symbol"?a:String(a)),e)}var a}var Ut=function(){function n(a){if(function(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")}(this,n),typeof a!="function")throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(l){o=l});var i=this;this.promise.then(function(l){if(i._listeners){for(var s=i._listeners.length;s-- >0;)i._listeners[s](l);i._listeners=null}}),this.promise.then=function(l){var s,d=new Promise(function(c){i.subscribe(c),s=c}).then(l);return d.cancel=function(){i.unsubscribe(s)},d},a(function(l,s,d){i.reason||(i.reason=new He(l,s,d),o(i.reason))})}var t,r,e;return t=n,r=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(a){this.reason?a(this.reason):this._listeners?this._listeners.push(a):this._listeners=[a]}},{key:"unsubscribe",value:function(a){if(this._listeners){var o=this._listeners.indexOf(a);o!==-1&&this._listeners.splice(o,1)}}}],e=[{key:"source",value:function(){var a;return{token:new n(function(o){a=o}),cancel:a}}}],r&&et(t.prototype,r),e&&et(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Wt=Ut;function nt(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var An={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(An).forEach(function(n){var t,r,e=(r=2,function(i){if(Array.isArray(i))return i}(t=n)||function(i,l){var s=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(s!=null){var d,c,h,x,C=[],E=!0,f=!1;try{if(h=(s=s.call(i)).next,l===0){if(Object(s)!==s)return;E=!1}else for(;!(E=(d=h.call(s)).done)&&(C.push(d.value),C.length!==l);E=!0);}catch(S){f=!0,c=S}finally{try{if(!E&&s.return!=null&&(x=s.return(),Object(x)!==x))return}finally{if(f)throw c}}return C}}(t,r)||function(i,l){if(i){if(typeof i=="string")return nt(i,l);var s=Object.prototype.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?nt(i,l):void 0}}(t,r)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),a=e[0],o=e[1];An[o]=a});const Nt=An;var F=function n(t){var r=new Ze(t),e=xn(Ze.prototype.request,r);return A.extend(e,Ze.prototype,r,{allOwnKeys:!0}),A.extend(e,r,null,{allOwnKeys:!0}),e.create=function(a){return n(ie(t,a))},e}(rn);F.Axios=Ze,F.CanceledError=He,F.CancelToken=Wt,F.isCancel=Kn,F.VERSION="1.2.3",F.toFormData=Ue,F.AxiosError=P,F.Cancel=F.CanceledError,F.all=function(n){return Promise.all(n)},F.spread=function(n){return function(t){return n.apply(null,t)}},F.isAxiosError=function(n){return A.isObject(n)&&n.isAxiosError===!0},F.mergeConfig=ie,F.AxiosHeaders=X,F.formToJSON=function(n){return Wn(A.isHTMLForm(n)?new FormData(n):n)},F.HttpStatusCode=Nt,F.default=F;const tt=F,_t={send:function(n){tt.post(n.url,n.data).then(function(t){var r=t.data;r&&r.code===0?n.success&&n.success(r):n.error&&n.error(r&&r.msg)}).catch(function(t){console.error(t),n.error&&n.error()})},read:function(n){tt.get(n.url).then(function(t){var r=t.data;r&&r.code===0?n.success&&n.success(r.data.map(function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}})):n.error&&n.error(r&&r.msg)}).catch(function(t){console.error(t),n.error&&n.error()})}};function un(n){return un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},un(n)}function Ht(n){var t=this;this.lang=n,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(r){return r=r.toLowerCase(),le[t.lang]&&le[t.lang][r]?le[t.lang][r]:le[t.fallbackLang]&&le[t.fallbackLang][r]?le[t.fallbackLang][r]:yn[r]?yn[r]:r}}var yn={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},le={en:yn,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Qt=v(730),Kt=v.n(Qt),Zt=v(74),Vt=v.n(Zt),Xt=v(437),Jt=v.n(Xt),$t=v(644),Gt=v.n($t),ea=v(324),na=v.n(ea),ta=v(574),aa=v.n(ta),oa=v(300),ra=v.n(oa),ia=v(934),la=v.n(ia),sa=v(428),pa=v.n(sa),da=v(807),ca=v.n(da),Aa=v(338),ua=v.n(Aa),ya=v(254),ma=v.n(ya),ha=v(965),fa=v.n(ha),ba=v(113),ga=v.n(ba),va=v(251),xa=v.n(va),Ea=v(410),wa=v.n(Ea),Ca=v(182),ka=v.n(Ca),Ba=v(193),Sa=v.n(Ba);const H={play:Kt(),pause:Vt(),volumeUp:Jt(),volumeDown:Gt(),volumeOff:na(),full:aa(),fullWeb:ra(),setting:la(),right:pa(),comment:ca(),commentOff:ua(),send:ma(),pallette:fa(),camera:ga(),subtitle:wa(),loading:ka(),airplay:xa(),chromecast:Sa()};var Ia=v(916),La=v.n(Ia);function ve(n){return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(n)}function at(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(ve(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(ve(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),ve(a)==="symbol"?a:String(a)),e)}var a}var za=function(){function n(a){(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=a.container,this.options=a.options,this.index=a.index,this.tran=a.tran,this.init()}var t,r,e;return t=n,e=[{key:"NewNotice",value:function(a,o,i){var l=document.createElement("div");return l.classList.add("dplayer-notice"),l.style.opacity=o,l.innerText=a,i&&(l.id="dplayer-notice-".concat(i)),l}}],(r=[{key:"init",value:function(){this.container.innerHTML=La()({options:this.options,index:this.index,tran:this.tran,icons:H,mobile:T.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!T.isSafari||T.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&at(t.prototype,r),e&&at(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const ot=za;function se(n){return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(n)}function Ta(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(se(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(se(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),se(a)==="symbol"?a:String(a)),e)}var a}var qa=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=e,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var t,r;return t=n,r=[{key:"load",value:function(){var e,a=this;e=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var o=(this.options.api.addition||[]).slice(0);o.push(e),this.events&&this.events.trigger("danmaku_load_start",o),this._readAllEndpoints(o,function(i){a.dan=[].concat.apply([],i).sort(function(l,s){return l.time-s.time}),window.requestAnimationFrame(function(){a.frame()}),a.options.callback(),a.events&&a.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(e){this.options.api=e,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(e,a){for(var o=this,i=[],l=0,s=function(c){o.options.apiBackend.read({url:e[c],success:function(h){i[c]=h,++l===e.length&&a(i)},error:function(h){o.options.error(h||o.options.tran("danmaku-failed")),i[c]=[],++l===e.length&&a(i)}})},d=0;d<e.length;++d)s(d)}},{key:"send",value:function(e,a){var o=this,i={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:e.text,color:e.color,type:e.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:i,success:a,error:function(s){o.options.error(s||o.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,i),this.danIndex++;var l={text:this.htmlEncode(i.text),color:i.color,type:i.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(l),this.events&&this.events.trigger("danmaku_send",i)}},{key:"frame",value:function(){var e=this;if(this.dan.length&&!this.paused&&this.showing){for(var a=this.dan[this.danIndex],o=[];a&&this.options.time()>parseFloat(a.time);)o.push(a),a=this.dan[++this.danIndex];this.draw(o)}window.requestAnimationFrame(function(){e.frame()})}},{key:"opacity",value:function(e){if(e!==void 0){for(var a=this.container.getElementsByClassName("dplayer-danmaku-item"),o=0;o<a.length;o++)a[o].style.opacity=e;this._opacity=e,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(e){var a=this;if(this.showing){var o=this.options.height,i=this.container.offsetWidth,l=this.container.offsetHeight,s=parseInt(l/o),d=function(f){var S=f.offsetWidth||parseInt(f.style.width),q=f.getBoundingClientRect().right||a.container.getBoundingClientRect().right+S;return a.container.getBoundingClientRect().right-q},c=function(f){return(i+f)/5},h=function(f,S,q){for(var U=i/c(q),M=function(ae){var de=a.danTunnel[S][ae+""];if(!de||!de.length)return a.danTunnel[S][ae+""]=[f],f.addEventListener("animationend",function(){a.danTunnel[S][ae+""].splice(0,1)}),{v:ae%s};if(S!=="right")return"continue";for(var Re=0;Re<de.length;Re++){var dt=d(de[Re])-10;if(dt<=i-U*c(parseInt(de[Re].style.width))||dt<=0)break;if(Re===de.length-1)return a.danTunnel[S][ae+""].push(f),f.addEventListener("animationend",function(){a.danTunnel[S][ae+""].splice(0,1)}),{v:ae%s}}},R=0;a.unlimited||R<s;R++){var G=M(R);if(G!=="continue"&&se(G)==="object")return G.v}return-1};Object.prototype.toString.call(e)!=="[object Array]"&&(e=[e]);for(var x=document.createDocumentFragment(),C=function(){e[E].type=T.number2Type(e[E].type),e[E].color||(e[E].color=16777215);var f=document.createElement("div");f.classList.add("dplayer-danmaku-item"),f.classList.add("dplayer-danmaku-".concat(e[E].type)),e[E].border?f.innerHTML='<span style="border:'.concat(e[E].border,'">').concat(e[E].text,"</span>"):f.innerHTML=e[E].text,f.style.opacity=a._opacity,f.style.color=T.number2Color(e[E].color),f.addEventListener("animationend",function(){a.container.removeChild(f)});var S,q=a._measure(e[E].text);switch(e[E].type){case"right":(S=h(f,e[E].type,q))>=0&&(f.style.width=q+1+"px",f.style.top=o*S+"px",f.style.transform="translateX(-".concat(i,"px)"));break;case"top":(S=h(f,e[E].type))>=0&&(f.style.top=o*S+"px");break;case"bottom":(S=h(f,e[E].type))>=0&&(f.style.bottom=o*S+"px");break;default:console.error("Can't handled danmaku type: ".concat(e[E].type))}S>=0&&(f.classList.add("dplayer-danmaku-move"),f.style.animationDuration=a._danAnimation(e[E].type),x.appendChild(f))},E=0;E<e.length;E++)C();return this.container.appendChild(x),x}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(e){if(!this.context){var a=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=a.getPropertyValue("font")}return this.context.measureText(e).width}},{key:"seek",value:function(){this.clear();for(var e=0;e<this.dan.length;e++){if(this.dan[e].time>=this.options.time()){this.danIndex=e;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var e=this.container.offsetWidth,a=this.container.getElementsByClassName("dplayer-danmaku-item"),o=0;o<a.length;o++)a[o].style.transform="translateX(-".concat(e,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(e){this.unlimited=e}},{key:"speed",value:function(e){this.options.api.speedRate=e}},{key:"_danAnimation",value:function(e){var a=this.options.api.speedRate||1,o=!!this.player.fullScreen.isFullScreen();return{top:"".concat((o?6:4)/a,"s"),right:"".concat((o?8:5)/a,"s"),bottom:"".concat((o?6:4)/a,"s")}[e]}}],r&&Ta(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Oa=qa;function xe(n){return xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(n)}function Da(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(xe(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(xe(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),xe(a)==="symbol"?a:String(a)),e)}var a}const ja=function(){function n(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,n),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var t,r;return t=n,(r=[{key:"on",value:function(e,a){this.type(e)&&typeof a=="function"&&(this.events[e]||(this.events[e]=[]),this.events[e].push(a))}},{key:"trigger",value:function(e,a){if(this.events[e]&&this.events[e].length)for(var o=0;o<this.events[e].length;o++)this.events[e][o](a)}},{key:"type",value:function(e){return this.playerEvents.indexOf(e)!==-1?"player":this.videoEvents.indexOf(e)!==-1?"video":(console.error("Unknown event name: ".concat(e)),null)}}])&&Da(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function Ee(n){return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ee(n)}function Pa(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Ee(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Ee(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Ee(a)==="symbol"?a:String(a)),e)}var a}var Ra=function(){function n(e){var a=this;(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){a.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){a.player.resize(),T.setScrollPosition(a.lastScrollPosition)}),this.fullscreenchange=function(){a.player.resize(),a.isFullScreen("browser")?a.player.events.trigger("fullscreen"):(T.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var o=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;o&&o!==a.player.container||(a.player.resize(),o?a.player.events.trigger("fullscreen"):(T.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var t,r;return t=n,r=[{key:"isFullScreen",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",a=e==="browser"?"web":"browser",o=this.isFullScreen(a);switch(o||(this.lastScrollPosition=T.getScrollPosition()),e){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}o&&this.cancel(a)}},{key:"cancel",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(e)?this.cancel(e):this.request(e)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],r&&Pa(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Ya=Ra;function we(n){return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},we(n)}function Ma(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(we(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(we(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),we(a)==="symbol"?a:String(a)),e)}var a}var Fa=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:e.options.hasOwnProperty("volume")?e.options.volume:.7,unlimited:(e.options.danmaku&&e.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var t,r;return t=n,(r=[{key:"init",value:function(){for(var e in this.storageName){var a=this.storageName[e];this.data[e]=parseFloat(T.storage.get(a)||this.default[e])}}},{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,a){this.data[e]=a,T.storage.set(this.storageName[e],a)}}])&&Ma(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Ua=Fa;function Ce(n){return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ce(n)}function Wa(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Ce(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Ce(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Ce(a)==="symbol"?a:String(a)),e)}var a}var Na=function(){function n(e,a,o,i){(function(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e,this.video=a,this.options=o,this.events=i,this.init()}var t,r;return t=n,r=[{key:"init",value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var a=this.video.textTracks[0];a.oncuechange=function(){var o=a.activeCues[a.activeCues.length-1];if(e.container.innerHTML="",o){var i=document.createElement("div");i.appendChild(o.getCueAsHTML());var l=i.innerHTML.split(/\r?\n/).map(function(s){return"<p>".concat(s,"</p>")}).join("");e.container.innerHTML=l}e.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],r&&Wa(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const _a=Na;function ke(n){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke(n)}function Ha(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(ke(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(ke(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),ke(a)==="symbol"?a:String(a)),e)}var a}var Qa=function(){function n(e){var a=this;(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){a.adaptiveHeight(),a.show()});for(var o=this.player.template.subtitlesItem.length-1,i=function(s){a.player.template.subtitlesItem[s].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==s&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src=a.player.template.subtitlesItem[s].dataset.subtitle,a.player.options.subtitle.index=s,a.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&a.subContainerShow())})},l=0;l<o;l++)i(l);this.player.template.subtitlesItem[o].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==o&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src="",a.player.options.subtitle.index=o,a.subContainerHide())})}var t,r;return t=n,(r=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var e=30*this.player.template.subtitlesItem.length+14,a=.8*this.player.template.videoWrap.offsetHeight;e>=a-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=a-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=a-50+"px")}}])&&Ha(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Ka=Qa;function Be(n){return Be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Be(n)}function Za(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Be(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Be(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Be(a)==="symbol"?a:String(a)),e)}var a}var Va=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.elements={},this.elements.volume=e.volumeBar,this.elements.played=e.playedBar,this.elements.loaded=e.loadedBar,this.elements.danmaku=e.danmakuOpacityBar}var t,r;return t=n,(r=[{key:"set",value:function(e,a,o){a=Math.max(a,0),a=Math.min(a,1),this.elements[e].style[o]=100*a+"%"}},{key:"get",value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&Za(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Xa=Va;function Se(n){return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Se(n)}function Ja(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Se(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Se(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Se(a)==="symbol"?a:String(a)),e)}var a}var $a=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},this.types=["loading","info","fps"],this.init()}var t,r;return t=n,(r=[{key:"init",value:function(){var e=this;this.types.map(function(a){return a!=="fps"&&e["init".concat(a,"Checker")](),a})}},{key:"initloadingChecker",value:function(){var e=this,a=0,o=0,i=!1;this.loadingChecker=setInterval(function(){e.enableloadingChecker&&(o=e.player.video.currentTime,i||o!==a||e.player.video.paused||(e.player.container.classList.add("dplayer-loading"),i=!0),i&&o>a&&!e.player.video.paused&&(e.player.container.classList.remove("dplayer-loading"),i=!1),a=o)},100)}},{key:"initfpsChecker",value:function(){var e=this;window.requestAnimationFrame(function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var a=new Date;a-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(a-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var e=this;this.infoChecker=setInterval(function(){e.enableinfoChecker&&e.player.infoPanel.update()},1e3)}},{key:"enable",value:function(e){this["enable".concat(e,"Checker")]=!0,e==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable".concat(e,"Checker")]=!1}},{key:"destroy",value:function(){var e=this;this.types.map(function(a){return e["enable".concat(a,"Checker")]=!1,e["".concat(a,"Checker")]&&clearInterval(e["".concat(a,"Checker")]),a})}}])&&Ja(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Ga=$a;function Ie(n){return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ie(n)}function eo(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Ie(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Ie(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Ie(a)==="symbol"?a:String(a)),e)}var a}const no=function(){function n(e){var a=this;(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e,this.container.addEventListener("animationend",function(){a.container.classList.remove("dplayer-bezel-transition")})}var t,r;return t=n,(r=[{key:"switch",value:function(e){this.container.innerHTML=e,this.container.classList.add("dplayer-bezel-transition")}}])&&eo(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function Le(n){return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(n)}function to(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Le(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Le(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Le(a)==="symbol"?a:String(a)),e)}var a}var ao=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e.container,this.barWidth=e.barWidth,this.container.style.backgroundImage="url('".concat(e.url,"')"),this.events=e.events}var t,r;return t=n,(r=[{key:"resize",value:function(e,a,o){this.container.style.width="".concat(e,"px"),this.container.style.height="".concat(a,"px"),this.container.style.top="".concat(2-a,"px"),this.barWidth=o}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(e){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(e/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&to(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const oo=ao;function ze(n){return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ze(n)}function ro(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(ze(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(ze(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),ze(a)==="symbol"?a:String(a)),e)}var a}var $,rt=!0,mn=!1,io=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.autoHideTimer=0,T.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),T.isMobile||this.initVolumeButton()}var t,r;return t=n,(r=[{key:"initPlayButton",value:function(){var e=this;this.player.template.playButton.addEventListener("click",function(){e.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){e.player.toggle()}),T.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){e.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){e.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.player.toggle()}))}},{key:"initHighlights",value:function(){var e=this;this.player.on("durationchange",function(){if(e.player.video.duration!==1&&e.player.video.duration!==1/0&&e.player.options.highlight){var a=e.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(a,0).forEach(function(l){e.player.template.playedBarWrap.removeChild(l)});for(var o=0;o<e.player.options.highlight.length;o++)if(e.player.options.highlight[o].text&&e.player.options.highlight[o].time){var i=document.createElement("div");i.classList.add("dplayer-highlight"),i.style.left=e.player.options.highlight[o].time/e.player.video.duration*100+"%",i.innerHTML='<span class="dplayer-highlight-text">'+e.player.options.highlight[o].text+"</span>",e.player.template.playedBarWrap.insertBefore(i,e.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new oo({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var e=this,a=function(i){var l=((i.clientX||i.changedTouches[0].clientX)-T.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;l=Math.max(l,0),l=Math.min(l,1),e.player.bar.set("played",l,"width"),e.player.template.ptime.innerHTML=T.secondToTime(l*e.player.video.duration)},o=function i(l){document.removeEventListener(T.nameMap.dragEnd,i),document.removeEventListener(T.nameMap.dragMove,a);var s=((l.clientX||l.changedTouches[0].clientX)-T.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;s=Math.max(s,0),s=Math.min(s,1),e.player.bar.set("played",s,"width"),e.player.seek(e.player.bar.get("played")*e.player.video.duration),e.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(T.nameMap.dragStart,function(){e.player.timer.disable("progress"),document.addEventListener(T.nameMap.dragMove,a),document.addEventListener(T.nameMap.dragEnd,o)}),this.player.template.playedBarWrap.addEventListener(T.nameMap.dragMove,function(i){if(e.player.video.duration){var l=e.player.template.playedBarWrap.getBoundingClientRect().left,s=(i.clientX||i.changedTouches[0].clientX)-l;if(s<0||s>e.player.template.playedBarWrap.offsetWidth)return;var d=e.player.video.duration*(s/e.player.template.playedBarWrap.offsetWidth);T.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(s),e.player.template.playedBarTime.style.left="".concat(s-(d>=3600?25:20),"px"),e.player.template.playedBarTime.innerText=T.secondToTime(d),e.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(T.nameMap.dragEnd,function(){T.isMobile&&e.thumbnails&&e.thumbnails.hide()}),T.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var e=this;this.player.template.browserFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var e=this,a=function(i){var l=i||window.event,s=((l.clientX||l.changedTouches[0].clientX)-T.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(s)},o=function i(){document.removeEventListener(T.nameMap.dragEnd,i),document.removeEventListener(T.nameMap.dragMove,a),e.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(i){var l=i||window.event,s=((l.clientX||l.changedTouches[0].clientX)-T.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(s)}),this.player.template.volumeBarWrapWrap.addEventListener(T.nameMap.dragStart,function(){document.addEventListener(T.nameMap.dragMove,a),document.addEventListener(T.nameMap.dragEnd,o),e.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"width")):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=H.volumeOff,e.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(a){a.target.classList.contains("dplayer-quality-item")&&e.player.switchQuality(a.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var a,o=document.createElement("canvas");o.width=e.player.video.videoWidth,o.height=e.player.video.videoHeight,o.getContext("2d").drawImage(e.player.video,0,0,o.width,o.height),o.toBlob(function(i){a=URL.createObjectURL(i);var l=document.createElement("a");l.href=a,l.download="DPlayer.png",l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a),e.player.events.trigger("screenshot",a)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(e){e.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var e=window.document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(e),window.__onGCastApiAvailable=function(a){if(a){var o=new($=window.chrome.cast).SessionRequest($.media.DEFAULT_MEDIA_RECEIVER_APP_ID),i=new $.ApiConfig(o,function(){},function(l){l===$.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",l)});$.initialize(i,function(){})}}}},{key:"initChromecastButton",value:function(){var e=this;if(this.player.options.chromecast){rt&&(rt=!1,this.initChromecast());var a=function(i,l){e.currentMedia=l},o=function(i){console.error("Error launching media",i)};this.player.template.chromecastButton.addEventListener("click",function(){mn?(mn=!1,e.currentMedia.stop(),e.session.stop(),e.initChromecast()):(mn=!0,$.requestSession(function(i){var l,s,d;e.session=i,l=e.player.options.video.url,s=new $.media.MediaInfo(l),d=new $.media.LoadRequest(s),e.session?e.session.loadMedia(d,a.bind(e,"loadMedia"),o).play():window.open(l)},function(i){i.code==="cancel"?e.session=void 0:console.error("Error selecting a cast device",i)}))})}}},{key:"initSubtitleButton",value:function(){var e=this;this.player.events.on("subtitle_show",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("hide-subs"),e.player.template.subtitleButtonInner.style.opacity="",e.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("show-subs"),e.player.template.subtitleButtonInner.style.opacity="0.4",e.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){e.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){T.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&ro(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const lo=io;function Te(n){return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(n)}function so(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Te(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Te(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Te(a)==="symbol"?a:String(a)),e)}var a}var po=function(){function n(e){var a=this;(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.settingButton.addEventListener("click",function(){a.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){a.player.template.loopToggle.checked=!a.player.template.loopToggle.checked,a.player.template.loopToggle.checked?a.loop=!0:a.loop=!1,a.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){a.player.template.showDanmakuToggle.checked=!a.player.template.showDanmakuToggle.checked,a.player.template.showDanmakuToggle.checked?(a.showDanmaku=!0,a.player.danmaku.show()):(a.showDanmaku=!1,a.player.danmaku.hide()),a.player.user.set("danmaku",a.showDanmaku?1:0),a.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){a.player.template.unlimitDanmakuToggle.checked=!a.player.template.unlimitDanmakuToggle.checked,a.player.template.unlimitDanmakuToggle.checked?(a.unlimitDanmaku=!0,a.player.danmaku.unlimit(!0)):(a.unlimitDanmaku=!1,a.player.danmaku.unlimit(!1)),a.player.user.set("unlimited",a.unlimitDanmaku?1:0),a.hide()}),this.player.template.speed.addEventListener("click",function(){a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var o=function(d){a.player.template.speedItem[d].addEventListener("click",function(){a.player.speed(a.player.template.speedItem[d].dataset.speed),a.hide()})},i=0;i<this.player.template.speedItem.length;i++)o(i);if(this.player.danmaku){this.player.on("danmaku_opacity",function(d){a.player.bar.set("danmaku",d,"width"),a.player.user.set("opacity",d)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var l=function(d){var c=d||window.event,h=((c.clientX||c.changedTouches[0].clientX)-T.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;h=Math.max(h,0),h=Math.min(h,1),a.player.danmaku.opacity(h)},s=function d(){document.removeEventListener(T.nameMap.dragEnd,d),document.removeEventListener(T.nameMap.dragMove,l),a.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(d){var c=d||window.event,h=((c.clientX||c.changedTouches[0].clientX)-T.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;h=Math.max(h,0),h=Math.min(h,1),a.player.danmaku.opacity(h)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(T.nameMap.dragStart,function(){document.addEventListener(T.nameMap.dragMove,l),document.addEventListener(T.nameMap.dragEnd,s),a.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var t,r;return t=n,(r=[{key:"hide",value:function(){var e=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&so(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const co=po;function qe(n){return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(n)}function Ao(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(qe(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(qe(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),qe(a)==="symbol"?a:String(a)),e)}var a}var uo=function(){function n(e){var a=this;(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.commentButton.addEventListener("click",function(){a.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){a.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(a.player.template.commentColorSettingBox.querySelector("input:checked+span")){var o=a.player.template.commentColorSettingBox.querySelector("input:checked").value;a.player.template.commentSettingFill.style.fill=o,a.player.template.commentInput.style.color=o,a.player.template.commentSendFill.style.fill=o}}),this.player.template.commentInput.addEventListener("click",function(){a.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(o){(o||window.event).keyCode===13&&a.send()}),this.player.template.commentSendButton.addEventListener("click",function(){a.send()})}var t,r;return t=n,(r=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var e=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:T.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){e.player.template.commentInput.value="",e.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Ao(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const yo=uo;function Oe(n){return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(n)}function mo(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(Oe(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(Oe(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),Oe(a)==="symbol"?a:String(a)),e)}var a}var ho=function(){function n(e){(function(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var t,r;return t=n,(r=[{key:"doHotKey",value:function(e){if(this.player.focus){var a=document.activeElement.tagName.toUpperCase(),o=document.activeElement.getAttribute("contenteditable");if(a!=="INPUT"&&a!=="TEXTAREA"&&o!==""&&o!=="true"){var i,l=e||window.event;switch(l.keyCode){case 32:l.preventDefault(),this.player.toggle();break;case 37:if(l.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(l.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:l.preventDefault(),i=this.player.volume()+.1,this.player.volume(i);break;case 40:l.preventDefault(),i=this.player.volume()-.1,this.player.volume(i)}}}}},{key:"cancelFullScreen",value:function(e){(e||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&mo(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const fo=ho;function De(n){return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De(n)}function bo(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(De(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(De(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),De(a)==="symbol"?a:String(a)),e)}var a}var go=function(){function n(e){var a=this;(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(o,i){a.player.options.contextmenu[i].click&&o.addEventListener("click",function(){a.player.options.contextmenu[i].click(a.player),a.hide()})}),this.contextmenuHandler=function(o){if(a.shown)a.hide();else{var i=o||window.event;i.preventDefault();var l=a.player.container.getBoundingClientRect();a.show(i.clientX-l.left,i.clientY-l.top),a.player.template.mask.addEventListener("click",function(){a.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var t,r;return t=n,(r=[{key:"show",value:function(e,a){this.player.template.menu.classList.add("dplayer-menu-show");var o=this.player.container.getBoundingClientRect();e+this.player.template.menu.offsetWidth>=o.width?(this.player.template.menu.style.right=o.width-e+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=e+"px",this.player.template.menu.style.right="initial"),a+this.player.template.menu.offsetHeight>=o.height?(this.player.template.menu.style.bottom=o.height-a+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=a+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&bo(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const vo=go;function je(n){return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(n)}function xo(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(o,i){if(je(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var s=l.call(o,"string");if(je(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(e.key),je(a)==="symbol"?a:String(a)),e)}var a}var Eo=function(){function n(e){var a=this;(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e.template.infoPanel,this.template=e.template,this.video=e.video,this.player=e,this.template.infoPanelClose.addEventListener("click",function(){a.hide()})}var t,r;return t=n,(r=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(e){this.template.infoFPS.innerHTML="".concat(e.toFixed(1))}}])&&xo(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();const wo=Eo;var Co=v(568),ko=v.n(Co);function Pe(n){return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(n)}function it(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,e)}return r}function Bo(n,t,r){return(t=st(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function lt(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,st(e.key),e)}}function st(n){var t=function(r,e){if(Pe(r)!=="object"||r===null)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var o=a.call(r,"string");if(Pe(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(n);return Pe(t)==="symbol"?t:String(t)}var pt=0,pe=[],So=function(){function n(a){var o=this;(function(i,l){if(!(i instanceof l))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=function(i){var l={container:i.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:_t,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var s in l)l.hasOwnProperty(s)&&!i.hasOwnProperty(s)&&(i[s]=l[s]);return i.video&&!i.video.type&&(i.video.type="auto"),un(i.danmaku)==="object"&&i.danmaku&&!i.danmaku.user&&(i.danmaku.user="DIYgod"),i.subtitle&&(!i.subtitle.type&&(i.subtitle.type="webvtt"),!i.subtitle.fontSize&&(i.subtitle.fontSize="20px"),!i.subtitle.bottom&&(i.subtitle.bottom="40px"),!i.subtitle.color&&(i.subtitle.color="#fff")),i.video.quality&&(i.video.url=i.video.quality[i.video.defaultQuality].url),i.lang&&(i.lang=i.lang.toLowerCase()),i.contextmenu=i.contextmenu.concat([{key:"video-info",click:function(d){d.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),i}(function(i){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?it(Object(s),!0).forEach(function(d){Bo(i,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):it(Object(s)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(s,d))})}return i}({preload:a.video.type==="webtorrent"?"none":"metadata"},a)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Ht(this.options.lang).tran,this.events=new ja,this.user=new Ua(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),T.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(i){return i.lang===o.options.subtitle.defaultSubtitle||i.name===o.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(i){return i.lang===o.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new ot({container:this.container,options:this.options,index:pt,tran:this.tran}),this.video=this.template.video,this.bar=new Xa(this.template),this.bezel=new no(this.template.bezel),this.fullScreen=new Ya(this),this.controller=new lo(this),this.options.danmaku&&(this.danmaku=new Oa({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){o.template.danmakuLoading.style.display="none",o.options.autoplay&&o.play()},0)},error:function(i){o.notice(i)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return o.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(i){return o.tran(i)}}),this.comment=new yo(this)),this.setting=new co(this),this.plugins={},this.docClickFun=function(){o.focus=!1},this.containerClickFun=function(){o.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Ga(this),this.hotkey=new fo(this),this.contextmenu=new vo(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new wo(this),!this.danmaku&&this.options.autoplay&&this.play(),pt++,pe.push(this)}var t,r,e;return t=n,r=[{key:"seek",value:function(a){a=Math.max(a,0),this.video.duration&&(a=Math.min(a,this.video.duration)),this.video.currentTime<a?this.notice("".concat(this.tran("ff").replace("%s",(a-this.video.currentTime).toFixed(0)))):this.video.currentTime>a&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-a).toFixed(0)))),this.video.currentTime=a,this.danmaku&&this.danmaku.seek(),this.bar.set("played",a/this.video.duration,"width"),this.template.ptime.innerHTML=T.secondToTime(a)}},{key:"play",value:function(a){var o=this;if(this.paused=!1,this.video.paused&&!T.isMobile&&this.bezel.switch(H.play),this.template.playButton.innerHTML=H.pause,this.template.mobilePlayButton.innerHTML=H.pause,a||ft.resolve(this.video.play()).catch(function(){o.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var i=0;i<pe.length;i++)this!==pe[i]&&pe[i].pause()}},{key:"pause",value:function(a){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||T.isMobile||this.bezel.switch(H.pause),this.template.playButton.innerHTML=H.play,this.template.mobilePlayButton.innerHTML=H.play,a||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=H.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=H.volumeDown:this.template.volumeIcon.innerHTML=H.volumeOff}},{key:"volume",value:function(a,o,i){if(a=parseFloat(a),!isNaN(a)){a=Math.max(a,0),a=Math.min(a,1),this.bar.set("volume",a,"width");var l="".concat((100*a).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=l,o||this.user.set("volume",a),i||this.notice("".concat(this.tran("volume")," ").concat((100*a).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=a,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(a,o){this.events.on(a,o)}},{key:"switchVideo",value:function(a,o){this.pause(),this.video.poster=a.pic?a.pic:"",this.video.src=a.url,this.initMSE(this.video,a.type||"auto"),o&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:o.id,address:o.api,token:o.token,maximum:o.maximum,addition:o.addition,user:o.user}))}},{key:"initMSE",value:function(a,o){var i=this;if(this.type=o,this.options.video.customType&&this.options.video.customType[o])Object.prototype.toString.call(this.options.video.customType[o])==="[object Function]"?this.options.video.customType[o](this.video,this):console.error("Illegal customType: ".concat(o));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(a.src)?this.type="hls":/.flv(#|\?|$)/i.exec(a.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(a.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(a.canPlayType("application/x-mpegURL")||a.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var l=this.options.pluginOptions.hls,s=new window.Hls(l);this.plugins.hls=s,s.loadSource(a.src),s.attachMedia(a),this.events.on("destroy",function(){s.destroy(),delete i.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var d=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:a.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=d,d.attachMediaElement(a),d.load(),this.events.on("destroy",function(){d.unload(),d.detachMediaElement(),d.destroy(),delete i.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var c=window.dashjs.MediaPlayer().create().initialize(a,a.src,!1),h=this.options.pluginOptions.dash;c.updateSettings(h),this.plugins.dash=c,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete i.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var x=this.options.pluginOptions.webtorrent,C=new window.WebTorrent(x);this.plugins.webtorrent=C;var E=a.src;a.src="",a.preload="metadata",a.addEventListener("durationchange",function(){return i.container.classList.remove("dplayer-loading")},{once:!0}),C.add(E,function(f){f.files.find(function(S){return S.name.endsWith(".mp4")}).renderTo(i.video,{autoplay:i.options.autoplay,controls:!1})}),this.events.on("destroy",function(){C.remove(E),C.destroy(),delete i.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(a,o){var i=this;this.initMSE(a,o),this.on("durationchange",function(){a.duration!==1&&a.duration!==1/0&&(i.template.dtime.innerHTML=T.secondToTime(a.duration))}),this.on("progress",function(){var d=a.buffered.length?a.buffered.end(a.buffered.length-1)/a.duration:0;i.bar.set("loaded",d,"width")}),this.on("error",function(){i.video.error&&i.tran&&i.notice&&i.type!=="webtorrent"&&i.notice(i.tran("video-failed"))}),this.on("ended",function(){i.bar.set("played",1,"width"),i.setting.loop?(i.seek(0),i.play()):i.pause(),i.danmaku&&(i.danmaku.danIndex=0)}),this.on("play",function(){i.paused&&i.play(!0)}),this.on("pause",function(){i.paused||i.pause(!0)}),this.on("timeupdate",function(){i.bar.set("played",i.video.currentTime/i.video.duration,"width");var d=T.secondToTime(i.video.currentTime);i.template.ptime.innerHTML!==d&&(i.template.ptime.innerHTML=d)});for(var l=function(d){a.addEventListener(i.events.videoEvents[d],function(c){i.events.trigger(i.events.videoEvents[d],c)})},s=0;s<this.events.videoEvents.length;s++)l(s);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new _a(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Ka(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(a){var o=this;if(a=typeof a=="string"?parseInt(a):a,this.qualityIndex!==a&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=a,this.switchingQuality=!0,this.quality=this.options.video.quality[a],this.template.qualityButton.innerHTML=this.quality.name;var i=this.video.paused;this.video.pause();var l=ko()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),s=new DOMParser().parseFromString(l,"text/html").body.firstChild;this.template.videoWrap.insertBefore(s,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=s,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(o.prevVideo){if(o.video.currentTime!==o.prevVideo.currentTime)return void o.seek(o.prevVideo.currentTime);o.template.videoWrap.removeChild(o.prevVideo),o.video.classList.add("dplayer-video-current"),i||o.video.play(),o.prevVideo=null,o.notice("".concat(o.tran("switched-quality").replace("%q",o.quality.name)),void 0,void 0,"switch-quality"),o.switchingQuality=!1,o.events.trigger("quality_end")}}),this.on("error",function(){o.video.error&&o.prevVideo&&(o.template.videoWrap.removeChild(o.video),o.video=o.prevVideo,i||o.video.play(),o.qualityIndex=o.prevIndex,o.quality=o.options.video.quality[o.qualityIndex],o.noticeTime=setTimeout(function(){o.template.notice.style.opacity=0,o.events.trigger("notice_hide")},3e3),o.prevVideo=null,o.switchingQuality=!1)})}}},{key:"notice",value:function(a){var o,i,l,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,c=arguments.length>3?arguments[3]:void 0;if(c&&((o=document.getElementById("dplayer-notice-".concat(c)))&&(o.innerHTML=a),this.noticeList[c]&&(clearTimeout(this.noticeList[c]),this.noticeList[c]=null)),!o){var h=ot.NewNotice(a,d,c);this.template.noticeList.appendChild(h),o=h}this.events.trigger("notice_show",o),s>0&&(this.noticeList[c]=setTimeout((i=o,l=this,function(){i.addEventListener("animationend",function(){l.template.noticeList.removeChild(i)}),i.classList.add("remove-notice"),l.events.trigger("notice_hide"),l.noticeList[c]=null}),s))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(a){this.video.playbackRate=a}},{key:"destroy",value:function(){pe.splice(pe.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],e=[{key:"version",get:function(){return"1.27.1"}}],r&&lt(t.prototype,r),e&&lt(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Io=So;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Lo=Io})(),W.default})())})(ut);var Uo=ut.exports;const Wo=Po(Uo),No=fn('<div class="container-md mt-4" id="container"><div class="row mb-4"><div class="col-md-10 col-sm-12 mb-3 player-wrapper"><div id="dplayer"></div></div><div class="col-md-2 col-sm-12 mb-3 sidebar-wrapper" style="position:relative">');function _o(N){const _=location.href.split("#")[0];location.replace(_+"#"+N)}function Vo(){let{path:N}=qo();N=decodeURI(N);const[_,ee]=ct([]),Q=Ro.post("/scandir",{path:decodeURI(N)}).then(u=>ee(u.data));let v=decodeURIComponent(location.hash.slice(1));v===""&&(v=localStorage.getItem(N)??null);const[W,y]=ct(v);Oo(()=>{(async function(){await Q,v===null&&(y(_()[0].file),B()),_().every(w=>w.file!=v)&&(localStorage.removeItem(W()),y(_()[0].file),B())})();const u=new Wo({container:document.getElementById("dplayer"),screenshot:!0,video:{url:`/video/${N}/${encodeURI(W())}`}});document.addEventListener("keypress",async w=>{if(!["TEXTAREA","INPUT"].includes(w.target.tagpath)){if(w.key==="f")w.preventDefault(),u.video.hasAttribute("fullscreen")?(u.fullScreen.cancel(),u.video.removeAttribute("fullscreen")):(u.fullScreen.request(),u.video.setAttribute("fullscreen",""));else if(w.key==="k")w.preventDefault(),u.seek(u.video.currentTime+80);else if(/\d/.test(w.key)){w.preventDefault();const g=parseInt(w.key);g&&(u.video.playbackRate=g)}}}),v&&B();function B(){u.video.currentTime=localStorage.getItem(W())??0,u.video.ontimeupdate=async()=>{u.video.currentTime&&localStorage.setItem(W(),u.video.currentTime)},u.video.onended=async()=>{localStorage.removeItem(W()),u.video.currentTime=0;const w=b();w&&y(w)},Do(()=>{u.switchVideo({url:`/video/${N}/${encodeURI(W())}`}),u.video.currentTime=localStorage.getItem(W())??0,_o(W()),localStorage.setItem(N,W())})}});function b(){let u=0,B=null;for(;_()[u].file!=W();)++u;return++u<_().length&&(B=_()[u].file),B}return(()=>{const u=No(),B=u.firstChild,w=B.firstChild,g=w.nextSibling;return hn(g,At(Fo,{file:_,videoSignal:[W,y],name:N})),u})()}export{Vo as default};
//# sourceMappingURL=Player-718b96d7.js.map
