import{_ as B}from"./chunks/MVPApiTyping.B4iSWGJO.js";import{Y as y,W as g,a as u}from"./chunks/dep-BsMckBij.DFaz1nmF.js";import{d as D,o as p,g as A,h as k,a as l,u as e,c as m,p as i,V as t,ah as o,r as E}from"./chunks/framework.Wall-LJo.js";import"./chunks/base.CM3X2o0E.js";const C=D({__name:"wmts-source",setup(d){const r="pk.eyJ1IjoibWhhaWJhcmFhaSIsImEiOiJjbTJpbnhobDEwbTZlMnBzYm5qdnJvNjE5In0.MW0KU-JO5OuR5ZLAiruGjw",h=["http://t0.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=1f69e932ca341b246b3b130847c14ca8"];return(a,n)=>(p(),A(e(u),{"access-token":e(r)},{default:k(()=>[l(e(g),{tiles:h},{default:k(()=>[l(e(y))]),_:1})]),_:1},8,["access-token"]))}}),c='<a href="https://www.maptiler.com/copyright/">MapTiler</a>',b=D({__name:"raster-source",setup(d){const r="pk.eyJ1IjoibWhhaWJhcmFhaSIsImEiOiJjbTJpbnhobDEwbTZlMnBzYm5qdnJvNjE5In0.MW0KU-JO5OuR5ZLAiruGjw",h=["https://api.maptiler.com/tiles/uk-osgb1888/{z}/{x}/{y}?key=TZQfCHT4fegJBA7AJ5oE"];function a({map:n}){n&&(n.setCenter({lng:-4.855407007949083,lat:55.75424333933063}),n.setZoom(14))}return(n,v)=>(p(),A(e(u),{"access-token":e(r),projection:"mercator"},{default:k(()=>[l(e(g),{tiles:h,attribution:c,onLoad:a},{default:k(()=>[l(e(y))]),_:1})]),_:1},8,["access-token"]))}}),T={tabindex:"0"},F={tabindex:"0"},I=JSON.parse('{"title":"RasterTileSource","description":"","frontmatter":{},"headers":[],"relativePath":"zh/mapbox/source/raster-source.md","filePath":"zh/mapbox/source/raster-source.md","lastUpdated":1731577299000}'),f={name:"zh/mapbox/source/raster-source.md"},M=Object.assign(f,{setup(d){return(r,s)=>{const h=E("DemoPreview"),a=B;return p(),m("div",null,[s[38]||(s[38]=i("h1",{id:"rastertilesource",tabindex:"-1"},[t("RasterTileSource "),i("a",{class:"header-anchor",href:"#rastertilesource","aria-label":'Permalink to "RasterTileSource"'},"​")],-1)),s[39]||(s[39]=i("p",null,[i("code",null,"RasterSource"),t(" ：加载栅格瓦片数据源或图片源，用于显示静态地图图层，如卫星影像、地形图、自定义图片等。")],-1)),s[40]||(s[40]=i("ul",null,[i("li",null,[i("strong",null,"RasterLayer"),t("：用于直接展示栅格影像（如卫星影像、扫描地图）。")])],-1)),s[41]||(s[41]=i("h2",{id:"raster-source",tabindex:"-1"},[t("添加栅格图块源 "),i("a",{class:"header-anchor",href:"#raster-source","aria-label":'Permalink to "添加栅格图块源 {#raster-source}"'},"​")],-1)),s[42]||(s[42]=i("div",null,null,-1)),l(h,{"raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20type%20%7B%20_RasterLayerLoadEvent%20%7D%20from%20'%40movk-repo%2Fmapbox'%0Aimport%20%7B%20Mapbox%2C%20RasterLayer%2C%20RasterSource%20%7D%20from%20'%40movk-repo%2Fmapbox'%0A%0Aconst%20accessToken%20%3D%20import.meta.env.VITE_MAPBOX_ACCESS_TOKEN%0Aconst%20token%20%3D%20import.meta.env.VITE_MAPTILER_KEY%0Aconst%20tiles%20%3D%20%5B%0A%20%20%60https%3A%2F%2Fapi.maptiler.com%2Ftiles%2Fuk-osgb1888%2F%7Bz%7D%2F%7Bx%7D%2F%7By%7D%3Fkey%3D%24%7Btoken%7D%60%2C%0A%5D%0Aconst%20attribution%20%3D%20'%3Ca%20href%3D%22https%3A%2F%2Fwww.maptiler.com%2Fcopyright%2F%22%3EMapTiler%3C%2Fa%3E'%0A%0Afunction%20load(%7B%20map%20%7D%3A%20_RasterLayerLoadEvent)%20%7B%0A%20%20if%20(!map)%0A%20%20%20%20return%0A%20%20map.setCenter(%7B%0A%20%20%20%20lng%3A%20-4.855407007949083%2C%0A%20%20%20%20lat%3A%2055.75424333933063%2C%0A%20%20%7D)%0A%20%20map.setZoom(14)%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3CMapbox%20%3Aaccess-token%3D%22accessToken%22%20projection%3D%22mercator%22%3E%0A%20%20%20%20%3CRasterSource%20%3Atiles%3D%22tiles%22%20%3Aattribution%3D%22attribution%22%20%40load%3D%22load%22%3E%0A%20%20%20%20%20%20%3CRasterLayer%20%2F%3E%0A%20%20%20%20%3C%2FRasterSource%3E%0A%20%20%3C%2FMapbox%3E%0A%3C%2Ftemplate%3E%0A"},{source:k(()=>[l(b)]),code:k(()=>s[0]||(s[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"script"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," lang"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"ts"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," setup"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," type"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," _RasterLayerLoadEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@movk-repo/mapbox"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," Mapbox"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," RasterLayer"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," RasterSource"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@movk-repo/mapbox"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"accessToken"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"meta"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"env"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"VITE_MAPBOX_ACCESS_TOKEN")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"token"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"meta"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"env"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"VITE_MAPTILER_KEY")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tiles"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," [")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"  `"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"https://api.maptiler.com/tiles/uk-osgb1888/{z}/{x}/{y}?key="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"${"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"token"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"}"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"attribution"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},'<a href="https://www.maptiler.com/copyright/">MapTiler</a>'),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," load"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }: "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"_RasterLayerLoadEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"  if"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"!"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"    return")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"setCenter"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    lng"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"-"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"4.855407007949083"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    lat"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"55.75424333933063"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"setZoom"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"14"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"script"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"template"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"Mapbox"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :access-token"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"accessToken"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," projection"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"mercator"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"RasterSource"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :tiles"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"tiles"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :attribution"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"attribution"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," @load"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"load"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"RasterLayer"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," />")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    </"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"RasterSource"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  </"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"Mapbox"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"template"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])],-1)])),default:k(()=>[s[1]||(s[1]=i("p",null,"/mapbox/source/raster-source.vue",-1))]),_:1}),s[43]||(s[43]=i("h2",{id:"wmts-source",tabindex:"-1"},[t("添加 WMTS 服务 "),i("a",{class:"header-anchor",href:"#wmts-source","aria-label":'Permalink to "添加 WMTS 服务 {#wmts-source}"'},"​")],-1)),s[44]||(s[44]=i("div",null,null,-1)),l(h,{"raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20Mapbox%2C%20RasterLayer%2C%20RasterSource%20%7D%20from%20'%40movk-repo%2Fmapbox'%0A%0Aconst%20accessToken%20%3D%20import.meta.env.VITE_MAPBOX_ACCESS_TOKEN%0Aconst%20token%20%3D%20import.meta.env.VITE_TIANDITU_TOKEN%0A%0Aconst%20tiles%20%3D%20%5B%0A%20%20%60http%3A%2F%2Ft0.tianditu.gov.cn%2Fter_w%2Fwmts%3FSERVICE%3DWMTS%26REQUEST%3DGetTile%26VERSION%3D1.0.0%26LAYER%3Dvec%26STYLE%3Ddefault%26TILEMATRIXSET%3Dw%26FORMAT%3Dtiles%26TILECOL%3D%7Bx%7D%26TILEROW%3D%7By%7D%26TILEMATRIX%3D%7Bz%7D%26tk%3D%24%7Btoken%7D%60%2C%0A%5D%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3CMapbox%20%3Aaccess-token%3D%22accessToken%22%3E%0A%20%20%20%20%3CRasterSource%20%3Atiles%3D%22tiles%22%3E%0A%20%20%20%20%20%20%3CRasterLayer%20%2F%3E%0A%20%20%20%20%3C%2FRasterSource%3E%0A%20%20%3C%2FMapbox%3E%0A%3C%2Ftemplate%3E%0A"},{source:k(()=>[l(C)]),code:k(()=>s[2]||(s[2]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"script"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," lang"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"ts"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," setup"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," Mapbox"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," RasterLayer"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," RasterSource"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@movk-repo/mapbox"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"accessToken"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"meta"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"env"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"VITE_MAPBOX_ACCESS_TOKEN")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"token"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"meta"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"env"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"VITE_TIANDITU_TOKEN")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tiles"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," [")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"  `"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"http://t0.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"${"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"token"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"}"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"script"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"template"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"Mapbox"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :access-token"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"accessToken"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"RasterSource"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," :tiles"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"tiles"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"RasterLayer"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," />")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    </"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"RasterSource"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  </"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"Mapbox"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"template"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])],-1)])),default:k(()=>[s[3]||(s[3]=i("p",null,"/mapbox/source/wmts-source.vue",-1))]),_:1}),s[45]||(s[45]=o('<h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api {#api}&quot;">​</a></h2><blockquote><p><a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster" target="_blank" rel="noreferrer">官方配置文档 raster</a></p></blockquote><h3 id="props" tabindex="-1">_RasterSourceProps <a class="header-anchor" href="#props" aria-label="Permalink to &quot;\\_RasterSourceProps {#props}&quot;">​</a></h3>',3)),i("table",T,[s[32]||(s[32]=i("thead",null,[i("tr",null,[i("th",null,"属性名"),i("th",null,"说明"),i("th",null,"类型"),i("th",null,"默认值")])],-1)),i("tbody",null,[i("tr",null,[s[4]||(s[4]=i("td",null,"id",-1)),s[5]||(s[5]=i("td",null,"源的ID",-1)),i("td",null,[l(a,{type:"string",details:""})]),s[6]||(s[6]=i("td",null,[i("code",null,"raster-source_序号")],-1))]),i("tr",null,[s[7]||(s[7]=i("td",null,"options",-1)),s[8]||(s[8]=i("td",null,"源的配置选项",-1)),i("td",null,[l(a,{type:"object",details:"OmitByKey<RasterSourceSpecification, 'type'>"})]),s[9]||(s[9]=i("td",null,"-",-1))]),i("tr",null,[s[10]||(s[10]=i("td",null,"url",-1)),s[11]||(s[11]=i("td",null,"瓦片服务的URL",-1)),i("td",null,[l(a,{type:"string",details:""})]),s[12]||(s[12]=i("td",null,[i("code",null,"''")],-1))]),i("tr",null,[s[13]||(s[13]=i("td",null,"tiles",-1)),s[14]||(s[14]=i("td",null,"瓦片源的数组",-1)),i("td",null,[l(a,{type:"array",details:"string[]"})]),s[15]||(s[15]=i("td",null,[i("code",null,"[]")],-1))]),i("tr",null,[s[16]||(s[16]=i("td",null,"tileSize",-1)),s[17]||(s[17]=i("td",null,"瓦片大小（像素）",-1)),i("td",null,[l(a,{type:"number",details:""})]),s[18]||(s[18]=i("td",null,[i("code",null,"512")],-1))]),i("tr",null,[s[19]||(s[19]=i("td",null,"minzoom",-1)),s[20]||(s[20]=i("td",null,"显示瓦片的最小缩放级别",-1)),i("td",null,[l(a,{type:"number",details:""})]),s[21]||(s[21]=i("td",null,[i("code",null,"0")],-1))]),i("tr",null,[s[22]||(s[22]=i("td",null,"maxzoom",-1)),s[23]||(s[23]=i("td",null,"显示瓦片的最大缩放级别",-1)),i("td",null,[l(a,{type:"number",details:""})]),s[24]||(s[24]=i("td",null,[i("code",null,"22")],-1))]),s[31]||(s[31]=i("tr",null,[i("td",null,"scheme"),i("td",null,"瓦片网格的坐标参考系统"),i("td",null,[i("code",null,"'xyz' | 'tms'")]),i("td",null,[i("code",null,"'xyz'")])],-1)),i("tr",null,[s[25]||(s[25]=i("td",null,"attribution",-1)),s[26]||(s[26]=i("td",null,"瓦片源的名称",-1)),i("td",null,[l(a,{type:"string",details:""})]),s[27]||(s[27]=i("td",null,"-",-1))]),i("tr",null,[s[28]||(s[28]=i("td",null,"volatile",-1)),s[29]||(s[29]=i("td",null,"是否缓存瓦片",-1)),i("td",null,[l(a,{type:"boolean",details:""})]),s[30]||(s[30]=i("td",null,[i("code",null,"false")],-1))])])]),s[46]||(s[46]=i("h3",{id:"emits",tabindex:"-1"},[t("_RasterSourceEmits "),i("a",{class:"header-anchor",href:"#emits","aria-label":'Permalink to "\\_RasterSourceEmits {#emits}"'},"​")],-1)),i("table",F,[s[37]||(s[37]=i("thead",null,[i("tr",null,[i("th",null,"事件名"),i("th",null,"说明"),i("th",null,"回调参数")])],-1)),i("tbody",null,[i("tr",null,[s[33]||(s[33]=i("td",null,"load",-1)),s[34]||(s[34]=i("td",null,"源加载完成时触发",-1)),i("td",null,[l(a,{type:"Function",details:"(event: _RasterLayerLoadEvent) => void"})])]),i("tr",null,[s[35]||(s[35]=i("td",null,"change",-1)),s[36]||(s[36]=i("td",null,"源状态更改时触发",-1)),i("td",null,[l(a,{type:"Function",details:"(event: _RasterLayerLoadEvent) => void"})])])])]),s[47]||(s[47]=o(`<h2 id="type-definitions" tabindex="-1">类型定义 <a class="header-anchor" href="#type-definitions" aria-label="Permalink to &quot;类型定义 {#type-definitions}&quot;">​</a></h2><h3 id="raster-layer-load-event" tabindex="-1">_RasterLayerLoadEvent <a class="header-anchor" href="#raster-layer-load-event" aria-label="Permalink to &quot;\\_RasterLayerLoadEvent {#raster-layer-load-event}&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> _RasterLayerLoadEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  source</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">RasterTileSource</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  map</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Map</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div>`,3))])}}});export{I as __pageData,M as default};
