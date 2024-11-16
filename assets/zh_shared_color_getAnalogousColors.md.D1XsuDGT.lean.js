import{l as ht,g as dt,m as st,b as ct,u as kt,i as K,n as ut,d as ft,h as j,E as L,_ as et,w as gt,o as pt}from"./chunks/base.Co7S3QbH.js";import{g as yt}from"./chunks/chunk-IQQMV6NZ.BKydOliQ.js";import{I as bt,u as f,l as U,M as vt,a6 as at,f as v,ag as mt,ao as At,d as M,o as g,g as F,h as x,c as S,F as $,j as R,n as G,k as N,b as J,m as Bt,ae as Dt,ap as Ct,aq as Z,D as xt,a as z,V as h,p as e,a2 as St,G as Et,H as wt,ah as Mt,r as Ft}from"./chunks/framework.Zls3YEZT.js";const _t=({from:s,replacement:i,scope:t,version:a,ref:r,type:n="API"},o)=>{bt(()=>f(o),l=>{},{immediate:!0})},Ht=Symbol(),Q=U();function Rt(s,i=void 0){const t=vt()?at(Ht,Q):Q;return v(()=>{var a,r;return(r=(a=t.value)==null?void 0:a[s])!=null?r:i})}const rt=Symbol("buttonGroupContextKey"),Tt=(s,i)=>{_t({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},v(()=>s.type==="text"));const t=at(rt,void 0),a=Rt("button"),{form:r}=ht(),n=dt(v(()=>t==null?void 0:t.size)),o=st(),l=U(),c=mt(),y=v(()=>s.type||(t==null?void 0:t.type)||""),m=v(()=>{var d,D,w;return(w=(D=s.autoInsertSpace)!=null?D:(d=a.value)==null?void 0:d.autoInsertSpace)!=null?w:!1}),E=v(()=>s.tag==="button"?{ariaDisabled:o.value||s.loading,disabled:o.value||s.loading,autofocus:s.autofocus,type:s.nativeType}:{}),T=v(()=>{var d;const D=(d=c.default)==null?void 0:d.call(c);if(m.value&&(D==null?void 0:D.length)===1){const w=D[0];if((w==null?void 0:w.type)===At){const lt=w.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(lt.trim())}}return!1});return{_disabled:o,_size:n,_type:y,_ref:l,_props:E,shouldAddSpace:T,handleClick:d=>{if(o.value||s.loading){d.stopPropagation();return}s.nativeType==="reset"&&(r==null||r.resetFields()),i("click",d)}}},Nt=["default","primary","success","warning","info","danger","text",""],It=["button","submit","reset"],q=ct({size:kt,disabled:Boolean,type:{type:String,values:Nt,default:""},icon:{type:K},nativeType:{type:String,values:It,default:"button"},loading:Boolean,loadingIcon:{type:K,default:()=>ut},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:ft([String,Object]),default:"button"}}),Pt={click:s=>s instanceof MouseEvent};function k(s,i){Vt(s)&&(s="100%");var t=$t(s);return s=i===360?s:Math.min(i,Math.max(0,parseFloat(s))),t&&(s=parseInt(String(s*i),10)/100),Math.abs(s-i)<1e-6?1:(i===360?s=(s<0?s%i+i:s%i)/parseFloat(String(i)):s=s%i/parseFloat(String(i)),s)}function _(s){return Math.min(1,Math.max(0,s))}function Vt(s){return typeof s=="string"&&s.indexOf(".")!==-1&&parseFloat(s)===1}function $t(s){return typeof s=="string"&&s.indexOf("%")!==-1}function nt(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function H(s){return s<=1?"".concat(Number(s)*100,"%"):s}function C(s){return s.length===1?"0"+s:String(s)}function Gt(s,i,t){return{r:k(s,255)*255,g:k(i,255)*255,b:k(t,255)*255}}function X(s,i,t){s=k(s,255),i=k(i,255),t=k(t,255);var a=Math.max(s,i,t),r=Math.min(s,i,t),n=0,o=0,l=(a+r)/2;if(a===r)o=0,n=0;else{var c=a-r;switch(o=l>.5?c/(2-a-r):c/(a+r),a){case s:n=(i-t)/c+(i<t?6:0);break;case i:n=(t-s)/c+2;break;case t:n=(s-i)/c+4;break}n/=6}return{h:n,s:o,l}}function I(s,i,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(i-s)*(6*t):t<1/2?i:t<2/3?s+(i-s)*(2/3-t)*6:s}function zt(s,i,t){var a,r,n;if(s=k(s,360),i=k(i,100),t=k(t,100),i===0)r=t,n=t,a=t;else{var o=t<.5?t*(1+i):t+i-t*i,l=2*t-o;a=I(l,o,s+1/3),r=I(l,o,s),n=I(l,o,s-1/3)}return{r:a*255,g:r*255,b:n*255}}function Y(s,i,t){s=k(s,255),i=k(i,255),t=k(t,255);var a=Math.max(s,i,t),r=Math.min(s,i,t),n=0,o=a,l=a-r,c=a===0?0:l/a;if(a===r)n=0;else{switch(a){case s:n=(i-t)/l+(i<t?6:0);break;case i:n=(t-s)/l+2;break;case t:n=(s-i)/l+4;break}n/=6}return{h:n,s:c,v:o}}function qt(s,i,t){s=k(s,360)*6,i=k(i,100),t=k(t,100);var a=Math.floor(s),r=s-a,n=t*(1-i),o=t*(1-r*i),l=t*(1-(1-r)*i),c=a%6,y=[t,o,n,n,l,t][c],m=[l,t,t,o,n,n][c],E=[n,n,l,t,t,o][c];return{r:y*255,g:m*255,b:E*255}}function tt(s,i,t,a){var r=[C(Math.round(s).toString(16)),C(Math.round(i).toString(16)),C(Math.round(t).toString(16))];return a&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Ot(s,i,t,a,r){var n=[C(Math.round(s).toString(16)),C(Math.round(i).toString(16)),C(Math.round(t).toString(16)),C(jt(a))];return r&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function jt(s){return Math.round(parseFloat(s)*255).toString(16)}function it(s){return u(s)/255}function u(s){return parseInt(s,16)}function Ut(s){return{r:s>>16,g:(s&65280)>>8,b:s&255}}var O={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Wt(s){var i={r:0,g:0,b:0},t=1,a=null,r=null,n=null,o=!1,l=!1;return typeof s=="string"&&(s=Jt(s)),typeof s=="object"&&(b(s.r)&&b(s.g)&&b(s.b)?(i=Gt(s.r,s.g,s.b),o=!0,l=String(s.r).substr(-1)==="%"?"prgb":"rgb"):b(s.h)&&b(s.s)&&b(s.v)?(a=H(s.s),r=H(s.v),i=qt(s.h,a,r),o=!0,l="hsv"):b(s.h)&&b(s.s)&&b(s.l)&&(a=H(s.s),n=H(s.l),i=zt(s.h,a,n),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(s,"a")&&(t=s.a)),t=nt(t),{ok:o,format:s.format||l,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:t}}var Kt="[-\\+]?\\d+%?",Lt="[-\\+]?\\d*\\.\\d+%?",B="(?:".concat(Lt,")|(?:").concat(Kt,")"),P="[\\s|\\(]+(".concat(B,")[,|\\s]+(").concat(B,")[,|\\s]+(").concat(B,")\\s*\\)?"),V="[\\s|\\(]+(".concat(B,")[,|\\s]+(").concat(B,")[,|\\s]+(").concat(B,")[,|\\s]+(").concat(B,")\\s*\\)?"),p={CSS_UNIT:new RegExp(B),rgb:new RegExp("rgb"+P),rgba:new RegExp("rgba"+V),hsl:new RegExp("hsl"+P),hsla:new RegExp("hsla"+V),hsv:new RegExp("hsv"+P),hsva:new RegExp("hsva"+V),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Jt(s){if(s=s.trim().toLowerCase(),s.length===0)return!1;var i=!1;if(O[s])s=O[s],i=!0;else if(s==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=p.rgb.exec(s);return t?{r:t[1],g:t[2],b:t[3]}:(t=p.rgba.exec(s),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=p.hsl.exec(s),t?{h:t[1],s:t[2],l:t[3]}:(t=p.hsla.exec(s),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=p.hsv.exec(s),t?{h:t[1],s:t[2],v:t[3]}:(t=p.hsva.exec(s),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=p.hex8.exec(s),t?{r:u(t[1]),g:u(t[2]),b:u(t[3]),a:it(t[4]),format:i?"name":"hex8"}:(t=p.hex6.exec(s),t?{r:u(t[1]),g:u(t[2]),b:u(t[3]),format:i?"name":"hex"}:(t=p.hex4.exec(s),t?{r:u(t[1]+t[1]),g:u(t[2]+t[2]),b:u(t[3]+t[3]),a:it(t[4]+t[4]),format:i?"name":"hex8"}:(t=p.hex3.exec(s),t?{r:u(t[1]+t[1]),g:u(t[2]+t[2]),b:u(t[3]+t[3]),format:i?"name":"hex"}:!1)))))))))}function b(s){return!!p.CSS_UNIT.exec(String(s))}var Zt=function(){function s(i,t){i===void 0&&(i=""),t===void 0&&(t={});var a;if(i instanceof s)return i;typeof i=="number"&&(i=Ut(i)),this.originalInput=i;var r=Wt(i);this.originalInput=i,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=t.format)!==null&&a!==void 0?a:r.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return s.prototype.isDark=function(){return this.getBrightness()<128},s.prototype.isLight=function(){return!this.isDark()},s.prototype.getBrightness=function(){var i=this.toRgb();return(i.r*299+i.g*587+i.b*114)/1e3},s.prototype.getLuminance=function(){var i=this.toRgb(),t,a,r,n=i.r/255,o=i.g/255,l=i.b/255;return n<=.03928?t=n/12.92:t=Math.pow((n+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*t+.7152*a+.0722*r},s.prototype.getAlpha=function(){return this.a},s.prototype.setAlpha=function(i){return this.a=nt(i),this.roundA=Math.round(100*this.a)/100,this},s.prototype.isMonochrome=function(){var i=this.toHsl().s;return i===0},s.prototype.toHsv=function(){var i=Y(this.r,this.g,this.b);return{h:i.h*360,s:i.s,v:i.v,a:this.a}},s.prototype.toHsvString=function(){var i=Y(this.r,this.g,this.b),t=Math.round(i.h*360),a=Math.round(i.s*100),r=Math.round(i.v*100);return this.a===1?"hsv(".concat(t,", ").concat(a,"%, ").concat(r,"%)"):"hsva(".concat(t,", ").concat(a,"%, ").concat(r,"%, ").concat(this.roundA,")")},s.prototype.toHsl=function(){var i=X(this.r,this.g,this.b);return{h:i.h*360,s:i.s,l:i.l,a:this.a}},s.prototype.toHslString=function(){var i=X(this.r,this.g,this.b),t=Math.round(i.h*360),a=Math.round(i.s*100),r=Math.round(i.l*100);return this.a===1?"hsl(".concat(t,", ").concat(a,"%, ").concat(r,"%)"):"hsla(".concat(t,", ").concat(a,"%, ").concat(r,"%, ").concat(this.roundA,")")},s.prototype.toHex=function(i){return i===void 0&&(i=!1),tt(this.r,this.g,this.b,i)},s.prototype.toHexString=function(i){return i===void 0&&(i=!1),"#"+this.toHex(i)},s.prototype.toHex8=function(i){return i===void 0&&(i=!1),Ot(this.r,this.g,this.b,this.a,i)},s.prototype.toHex8String=function(i){return i===void 0&&(i=!1),"#"+this.toHex8(i)},s.prototype.toHexShortString=function(i){return i===void 0&&(i=!1),this.a===1?this.toHexString(i):this.toHex8String(i)},s.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},s.prototype.toRgbString=function(){var i=Math.round(this.r),t=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(i,", ").concat(t,", ").concat(a,")"):"rgba(".concat(i,", ").concat(t,", ").concat(a,", ").concat(this.roundA,")")},s.prototype.toPercentageRgb=function(){var i=function(t){return"".concat(Math.round(k(t,255)*100),"%")};return{r:i(this.r),g:i(this.g),b:i(this.b),a:this.a}},s.prototype.toPercentageRgbString=function(){var i=function(t){return Math.round(k(t,255)*100)};return this.a===1?"rgb(".concat(i(this.r),"%, ").concat(i(this.g),"%, ").concat(i(this.b),"%)"):"rgba(".concat(i(this.r),"%, ").concat(i(this.g),"%, ").concat(i(this.b),"%, ").concat(this.roundA,")")},s.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var i="#"+tt(this.r,this.g,this.b,!1),t=0,a=Object.entries(O);t<a.length;t++){var r=a[t],n=r[0],o=r[1];if(i===o)return n}return!1},s.prototype.toString=function(i){var t=!!i;i=i??this.format;var a=!1,r=this.a<1&&this.a>=0,n=!t&&r&&(i.startsWith("hex")||i==="name");return n?i==="name"&&this.a===0?this.toName():this.toRgbString():(i==="rgb"&&(a=this.toRgbString()),i==="prgb"&&(a=this.toPercentageRgbString()),(i==="hex"||i==="hex6")&&(a=this.toHexString()),i==="hex3"&&(a=this.toHexString(!0)),i==="hex4"&&(a=this.toHex8String(!0)),i==="hex8"&&(a=this.toHex8String()),i==="name"&&(a=this.toName()),i==="hsl"&&(a=this.toHslString()),i==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},s.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},s.prototype.clone=function(){return new s(this.toString())},s.prototype.lighten=function(i){i===void 0&&(i=10);var t=this.toHsl();return t.l+=i/100,t.l=_(t.l),new s(t)},s.prototype.brighten=function(i){i===void 0&&(i=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(i/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(i/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(i/100)))),new s(t)},s.prototype.darken=function(i){i===void 0&&(i=10);var t=this.toHsl();return t.l-=i/100,t.l=_(t.l),new s(t)},s.prototype.tint=function(i){return i===void 0&&(i=10),this.mix("white",i)},s.prototype.shade=function(i){return i===void 0&&(i=10),this.mix("black",i)},s.prototype.desaturate=function(i){i===void 0&&(i=10);var t=this.toHsl();return t.s-=i/100,t.s=_(t.s),new s(t)},s.prototype.saturate=function(i){i===void 0&&(i=10);var t=this.toHsl();return t.s+=i/100,t.s=_(t.s),new s(t)},s.prototype.greyscale=function(){return this.desaturate(100)},s.prototype.spin=function(i){var t=this.toHsl(),a=(t.h+i)%360;return t.h=a<0?360+a:a,new s(t)},s.prototype.mix=function(i,t){t===void 0&&(t=50);var a=this.toRgb(),r=new s(i).toRgb(),n=t/100,o={r:(r.r-a.r)*n+a.r,g:(r.g-a.g)*n+a.g,b:(r.b-a.b)*n+a.b,a:(r.a-a.a)*n+a.a};return new s(o)},s.prototype.analogous=function(i,t){i===void 0&&(i=6),t===void 0&&(t=30);var a=this.toHsl(),r=360/t,n=[this];for(a.h=(a.h-(r*i>>1)+720)%360;--i;)a.h=(a.h+r)%360,n.push(new s(a));return n},s.prototype.complement=function(){var i=this.toHsl();return i.h=(i.h+180)%360,new s(i)},s.prototype.monochromatic=function(i){i===void 0&&(i=6);for(var t=this.toHsv(),a=t.h,r=t.s,n=t.v,o=[],l=1/i;i--;)o.push(new s({h:a,s:r,v:n})),n=(n+l)%1;return o},s.prototype.splitcomplement=function(){var i=this.toHsl(),t=i.h;return[this,new s({h:(t+72)%360,s:i.s,l:i.l}),new s({h:(t+216)%360,s:i.s,l:i.l})]},s.prototype.onBackground=function(i){var t=this.toRgb(),a=new s(i).toRgb(),r=t.a+a.a*(1-t.a);return new s({r:(t.r*t.a+a.r*a.a*(1-t.a))/r,g:(t.g*t.a+a.g*a.a*(1-t.a))/r,b:(t.b*t.a+a.b*a.a*(1-t.a))/r,a:r})},s.prototype.triad=function(){return this.polyad(3)},s.prototype.tetrad=function(){return this.polyad(4)},s.prototype.polyad=function(i){for(var t=this.toHsl(),a=t.h,r=[this],n=360/i,o=1;o<i;o++)r.push(new s({h:(a+o*n)%360,s:t.s,l:t.l}));return r},s.prototype.equals=function(i){return this.toRgbString()===new s(i).toRgbString()},s}();function A(s,i=20){return s.mix("#141414",i).toString()}function Qt(s){const i=st(),t=j("button");return v(()=>{let a={},r=s.color;if(r){const n=r.match(/var\((.*?)\)/);n&&(r=window.getComputedStyle(window.document.documentElement).getPropertyValue(n[1]));const o=new Zt(r),l=s.dark?o.tint(20).toString():A(o,20);if(s.plain)a=t.cssVarBlock({"bg-color":s.dark?A(o,90):o.tint(90).toString(),"text-color":r,"border-color":s.dark?A(o,50):o.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":l,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":l}),i.value&&(a[t.cssVarBlockName("disabled-bg-color")]=s.dark?A(o,90):o.tint(90).toString(),a[t.cssVarBlockName("disabled-text-color")]=s.dark?A(o,50):o.tint(50).toString(),a[t.cssVarBlockName("disabled-border-color")]=s.dark?A(o,80):o.tint(80).toString());else{const c=s.dark?A(o,30):o.tint(30).toString(),y=o.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(a=t.cssVarBlock({"bg-color":r,"text-color":y,"border-color":r,"hover-bg-color":c,"hover-text-color":y,"hover-border-color":c,"active-bg-color":l,"active-border-color":l}),i.value){const m=s.dark?A(o,50):o.tint(50).toString();a[t.cssVarBlockName("disabled-bg-color")]=m,a[t.cssVarBlockName("disabled-text-color")]=s.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,a[t.cssVarBlockName("disabled-border-color")]=m}}}return a})}const Xt=M({name:"ElButton"}),Yt=M({...Xt,props:q,emits:Pt,setup(s,{expose:i,emit:t}){const a=s,r=Qt(a),n=j("button"),{_ref:o,_size:l,_type:c,_disabled:y,_props:m,shouldAddSpace:E,handleClick:T}=Tt(a,t),W=v(()=>[n.b(),n.m(c.value),n.m(l.value),n.is("disabled",y.value),n.is("loading",a.loading),n.is("plain",a.plain),n.is("round",a.round),n.is("circle",a.circle),n.is("text",a.text),n.is("link",a.link),n.is("has-bg",a.bg)]);return i({ref:o,size:l,type:c,disabled:y,shouldAddSpace:E}),(d,D)=>(g(),F(N(d.tag),Bt({ref_key:"_ref",ref:o},f(m),{class:f(W),style:f(r),onClick:f(T)}),{default:x(()=>[d.loading?(g(),S($,{key:0},[d.$slots.loading?R(d.$slots,"loading",{key:0}):(g(),F(f(L),{key:1,class:G(f(n).is("loading"))},{default:x(()=>[(g(),F(N(d.loadingIcon)))]),_:1},8,["class"]))],64)):d.icon||d.$slots.icon?(g(),F(f(L),{key:1},{default:x(()=>[d.icon?(g(),F(N(d.icon),{key:0})):R(d.$slots,"icon",{key:1})]),_:3})):J("v-if",!0),d.$slots.default?(g(),S("span",{key:2,class:G({[f(n).em("text","expand")]:f(E)})},[R(d.$slots,"default")],2)):J("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var ti=et(Yt,[["__file","button.vue"]]);const ii={size:q.size,type:q.type},si=M({name:"ElButtonGroup"}),ei=M({...si,props:ii,setup(s){const i=s;Dt(rt,Ct({size:Z(i,"size"),type:Z(i,"type")}));const t=j("button");return(a,r)=>(g(),S("div",{class:G(f(t).b("group"))},[R(a.$slots,"default")],2))}});var ot=et(ei,[["__file","button-group.vue"]]);const ai=gt(ti,{ButtonGroup:ot});pt(ot);const ri={flex:"~ wrap","mt-1rem":""},ni=M({__name:"getAnalogousColors",setup(s){const i=U([]),t={results:12,format:"hex6"};function a(){i.value=yt(t)}return xt(()=>{a()}),(r,n)=>{const o=ai;return g(),S($,null,[z(o,{type:"primary",onClick:n[0]||(n[0]=l=>a())},{default:x(()=>n[1]||(n[1]=[h(" 点击刷新 ")])),_:1}),e("div",ri,[(g(!0),S($,null,St(f(i),l=>(g(),S("div",{key:l,style:Et({width:"16.6667%",backgroundColor:l})},[e("code",null,wt(l),1)],4))),128))])],64)}}}),ci=JSON.parse('{"title":"getAnalogousColors","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shared/color/getAnalogousColors.md","filePath":"zh/shared/color/getAnalogousColors.md","lastUpdated":1729351494000}'),oi={name:"zh/shared/color/getAnalogousColors.md"},ki=M({...oi,setup(s){return(i,t)=>{const a=Ft("DemoPreview");return g(),S("div",null,[t[2]||(t[2]=Mt('<h1 id="getanalogouscolors" tabindex="-1">getAnalogousColors <a class="header-anchor" href="#getanalogouscolors" aria-label="Permalink to &quot;getAnalogousColors&quot;">​</a></h1><p>该函数生成一组类似色，使用 <a href="https://github.com/bgrins/TinyColor" target="_blank" rel="noreferrer"><code>tinycolor</code></a> 库来计算并随机调整颜色的透明度。</p><blockquote><p><strong>getAnalogousColors</strong>(<code>params</code>: <code>Partial</code>&lt;<code>GetAnalogousColorsOptions</code>&gt;): <code>string</code>[]</p></blockquote><h2 id="parameters" tabindex="-1">参数 <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;参数 {#parameters}&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数名</th><th>类型</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>results</code></td><td><code>number</code></td><td>返回的类似色数量</td><td><code>6</code></td></tr><tr><td><code>slices</code></td><td><code>number</code></td><td>用于划分颜色轮的分片数</td><td><code>30</code></td></tr><tr><td><code>colorSchemes</code></td><td><code>string[]</code></td><td>颜色方案数组</td><td><code>[&#39;#67C23A&#39;, &#39;#E6A23C&#39;, &#39;#409EFF&#39;, &#39;#F56C6C&#39;, &#39;#909399&#39;]</code></td></tr><tr><td><code>format</code></td><td><code>&#39;rgb&#39; | &#39;prgb&#39; | &#39;hex6&#39; | &#39;hex3&#39; | &#39;hex8&#39; | &#39;name&#39; | &#39;hsl&#39; | &#39;hsv&#39;</code></td><td>输出格式</td><td><code>&#39;hex8&#39;</code></td></tr></tbody></table><h2 id="examples" tabindex="-1">示例 <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;示例 {#examples}&quot;">​</a></h2><div></div>',7)),z(a,{"raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20getAnalogousColors%2C%20type%20GetAnalogousColorsOptions%20%7D%20from%20'%40movk-repo%2Fshared%2Futils'%0A%0Aconst%20colors%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%0Aconst%20options%20%3D%20%7B%0A%20%20results%3A%2012%2C%0A%20%20format%3A%20'hex6'%2C%0A%7D%20as%20GetAnalogousColorsOptions%0A%0A%2F%2F%20%E5%88%B7%E6%96%B0%0Afunction%20refresh()%20%7B%0A%20%20colors.value%20%3D%20getAnalogousColors(options)%0A%7D%0A%0AonMounted(()%20%3D%3E%20%7B%0A%20%20refresh()%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3CElButton%20type%3D%22primary%22%20%40click%3D%22refresh()%22%3E%0A%20%20%20%20%E7%82%B9%E5%87%BB%E5%88%B7%E6%96%B0%0A%20%20%3C%2FElButton%3E%0A%20%20%3Cdiv%20flex%3D%22~%20wrap%22%20mt-1rem%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20v-for%3D%22color%20in%20colors%22%20%3Akey%3D%22color%22%20%3Astyle%3D%22%7B%0A%20%20%20%20%20%20%20%20width%3A%20'16.6667%25'%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20color%2C%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ccode%3E%7B%7B%20color%20%7D%7D%3C%2Fcode%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A"},{source:x(()=>[z(ni)]),code:x(()=>t[0]||(t[0]=[e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"script"),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," lang"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"ts"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," setup"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," getAnalogousColors"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," type"),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," GetAnalogousColorsOptions"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@movk-repo/shared/utils"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),h(`
`),e("span",{class:"line"}),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"colors"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ref"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),e("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>([])")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"options"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  results"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),e("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"12"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  format"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"hex6"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," as"),e("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," GetAnalogousColorsOptions")]),h(`
`),e("span",{class:"line"}),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"// 刷新")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"function"),e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," refresh"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  colors"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," getAnalogousColors"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"options"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),h(`
`),e("span",{class:"line"}),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"onMounted"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  refresh"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"script"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"}),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"template"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  <"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"ElButton"),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," type"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"primary"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," @click"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"refresh()"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    点击刷新")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  </"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"ElButton"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  <"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," flex"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"~ wrap"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," mt-1rem"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"      v-for"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"color in colors"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :key"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"color"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :style"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"{")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"        width: '16.6667%',")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"        backgroundColor: color,")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"      }"),e("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    >")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      <"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"code"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),e("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"{{ color }}"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"code"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    </"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  </"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),h(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),e("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"template"),e("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])],-1)])),default:x(()=>[t[1]||(t[1]=e("p",null,"/shared/utils/getAnalogousColors.vue",-1))]),_:1})])}}});export{ci as __pageData,ki as default};
