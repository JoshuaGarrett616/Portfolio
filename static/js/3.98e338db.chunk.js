(this["webpackJsonpjoshs-portfolio"]=this["webpackJsonpjoshs-portfolio"]||[]).push([[3],{234:function(t,n,e){"use strict";e.r(n),e.d(n,"KEYBOARD_DID_CLOSE",(function(){return o})),e.d(n,"KEYBOARD_DID_OPEN",(function(){return i})),e.d(n,"copyLayoutViewport",(function(){return K})),e.d(n,"copyVisualViewport",(function(){return E})),e.d(n,"keyboardDidClose",(function(){return y})),e.d(n,"keyboardDidOpen",(function(){return w})),e.d(n,"keyboardDidResize",(function(){return b})),e.d(n,"resetKeyboardAssist",(function(){return f})),e.d(n,"setKeyboardClose",(function(){return g})),e.d(n,"setKeyboardOpen",(function(){return p})),e.d(n,"startKeyboardAssist",(function(){return c})),e.d(n,"trackViewportChanges",(function(){return k}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d={},s={},a=!1,f=function(){r={},u={},d={},s={},a=!1},c=function(t){h(t),t.visualViewport&&(u=E(t.visualViewport),s=K(t),t.visualViewport.onresize=function(){k(t),w()||b(t)?p(t):y(t)&&g(t)})},h=function(t){t.addEventListener("keyboardDidShow",(function(n){return p(t,n)})),t.addEventListener("keyboardDidHide",(function(){return g(t)}))},p=function(t,n){l(t,n),a=!0},g=function(t){D(t),a=!1},w=function(){var t=(r.height-u.height)*u.scale;return!a&&r.width===u.width&&t>150&&!v()},b=function(t){return a&&!y(t)},y=function(t){return a&&u.height===t.innerHeight},v=function(){return s.width!==d.width||s.height!==d.height},l=function(t,n){var e=n?n.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:e}});t.dispatchEvent(o)},D=function(t){var n=new CustomEvent(o);t.dispatchEvent(n)},k=function(t){r=Object.assign({},u),u=E(t.visualViewport),d=Object.assign({},s),s=K(t)},E=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}},K=function(t){return{width:t.innerWidth,height:t.innerHeight}}}}]);
//# sourceMappingURL=3.98e338db.chunk.js.map