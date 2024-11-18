import{_ as i}from"./chunks/MVPApiTyping.B4iSWGJO.js";import{_ as n,c as r,ah as e,p as t,a as l,V as d,o}from"./chunks/framework.Wall-LJo.js";import"./chunks/base.CM3X2o0E.js";const B=JSON.parse('{"title":"RasterLayer","description":"","frontmatter":{},"headers":[],"relativePath":"zh/mapbox/layer/raster-layer.md","filePath":"zh/mapbox/layer/raster-layer.md","lastUpdated":1731331932000}'),p={name:"zh/mapbox/layer/raster-layer.md"},u={tabindex:"0"},y={tabindex:"0"};function k(h,a,m,b,g,f){const s=i;return o(),r("div",null,[a[21]||(a[21]=e('<h1 id="rasterlayer" tabindex="-1">RasterLayer <a class="header-anchor" href="#rasterlayer" aria-label="Permalink to &quot;RasterLayer&quot;">​</a></h1><p><code>_RasterLayer</code> 是一个用于渲染栅格图层的组件</p><h2 id="raster-layer" tabindex="-1">基础使用 <a class="header-anchor" href="#raster-layer" aria-label="Permalink to &quot;基础使用 {#raster-layer}&quot;">​</a></h2><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api {#api}&quot;">​</a></h2><h3 id="props" tabindex="-1">_RasterLayerProps <a class="header-anchor" href="#props" aria-label="Permalink to &quot;\\_RasterLayerProps {#props}&quot;">​</a></h3>',5)),t("table",u,[a[15]||(a[15]=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1)),t("tbody",null,[t("tr",null,[a[0]||(a[0]=t("td",null,"id",-1)),a[1]||(a[1]=t("td",null,"图层的ID",-1)),t("td",null,[l(s,{type:"string",details:""})]),a[2]||(a[2]=t("td",null,[t("code",null,"'raster-layer_序号'")],-1))]),t("tr",null,[a[3]||(a[3]=t("td",null,"options",-1)),a[4]||(a[4]=t("td",null,"图层的配置选项",-1)),t("td",null,[l(s,{type:"object",details:"OmitByKey<RasterLayerSpecification, 'type' | 'source' | 'source-layer'>"})]),a[5]||(a[5]=t("td",null,"-",-1))]),t("tr",null,[a[6]||(a[6]=t("td",null,"beforeId",-1)),a[7]||(a[7]=t("td",null,"图层的插入位置",-1)),t("td",null,[l(s,{type:"string",details:""})]),a[8]||(a[8]=t("td",null,"-",-1))]),t("tr",null,[a[9]||(a[9]=t("td",null,"minzoom",-1)),a[10]||(a[10]=t("td",null,"图层的最小缩放级别",-1)),t("td",null,[l(s,{type:"number",details:""})]),a[11]||(a[11]=t("td",null,[t("code",null,"0")],-1))]),t("tr",null,[a[12]||(a[12]=t("td",null,"maxzoom",-1)),a[13]||(a[13]=t("td",null,"图层的最大缩放级别",-1)),t("td",null,[l(s,{type:"number",details:""})]),a[14]||(a[14]=t("td",null,[t("code",null,"22")],-1))])])]),a[22]||(a[22]=t("h3",{id:"emits",tabindex:"-1"},[d("_RasterLayerEmits "),t("a",{class:"header-anchor",href:"#emits","aria-label":'Permalink to "\\_RasterLayerEmits {#emits}"'},"​")],-1)),t("table",y,[a[20]||(a[20]=t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"回调参数")])],-1)),t("tbody",null,[t("tr",null,[a[16]||(a[16]=t("td",null,"load",-1)),a[17]||(a[17]=t("td",null,"图层加载完成时触发",-1)),t("td",null,[l(s,{type:"Function",details:"(event: _RasterLayerLoadEvent) => void"})])]),t("tr",null,[a[18]||(a[18]=t("td",null,"change",-1)),a[19]||(a[19]=t("td",null,"图层状态更改时触发",-1)),t("td",null,[l(s,{type:"Function",details:"(event: _RasterLayerLoadEvent) => void"})])])])]),a[23]||(a[23]=e(`<h2 id="type-definitions" tabindex="-1">类型定义 <a class="header-anchor" href="#type-definitions" aria-label="Permalink to &quot;类型定义 {#type-definitions}&quot;">​</a></h2><h3 id="raster-layer-load-event" tabindex="-1">_RasterLayerLoadEvent <a class="header-anchor" href="#raster-layer-load-event" aria-label="Permalink to &quot;\\_RasterLayerLoadEvent {#raster-layer-load-event}&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> _RasterLayerLoadEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  layer</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">RasterLayerSpecification</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  source</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">RasterTileSource</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  map</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Map</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div>`,3))])}const R=n(p,[["render",k]]);export{B as __pageData,R as default};
