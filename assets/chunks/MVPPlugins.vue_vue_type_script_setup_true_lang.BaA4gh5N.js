import{V as p,_ as y}from"./theme.Cb5GDyq9.js";import{d as h,o as t,g as d,h as V,p as o,c as i,a as g,b as r,V as m,H as k,_ as f,f as T,F as u,a2 as v,n as $,u as M,e as w}from"./framework.Wall-LJo.js";const F={class:"box"},P={key:0,class:"icon"},b=["innerHTML"],H=["innerHTML"],L=["innerHTML"],B={key:4,class:"link-text"},C={class:"link-text-value"},N=h({__name:"MVPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(e,l)=>(t(),d(y,{class:"MovkFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:V(()=>[o("article",F,[typeof e.icon=="object"&&e.icon.wrap?(t(),i("div",P,[g(p,{image:e.icon,alt:e.icon.alt,height:e.icon.height||32,width:e.icon.width||32},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(t(),d(p,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||32,width:e.icon.width||32},null,8,["image","alt","height","width"])):e.icon?(t(),i("div",{key:2,class:"icon",innerHTML:e.icon},null,8,b)):r("",!0),o("h5",{class:"title truncate",innerHTML:e.title},null,8,H),e.details?(t(),i("p",{key:3,class:"details",innerHTML:e.details},null,8,L)):r("",!0),e.linkText?(t(),i("div",B,[o("p",C,[m(k(e.linkText)+" ",1),l[0]||(l[0]=o("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):r("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),I=f(N,[["__scopeId","data-v-9f049af8"]]),j={key:0,class:"MovkFeatures"},D={class:"container"},z={class:"items"},E=h({__name:"MVPFeatures",props:{features:{}},setup(c){const e=c,l=T(()=>{const n=e.features.length;switch(!0){case n===0:return"";case n===2:return"grid-2";case n===3:return"grid-3";case n%3===0:return"grid-6";case n>3:return"grid-3";default:return""}});return(n,_)=>{const s=I;return n.features?(t(),i("div",j,[o("div",D,[o("div",z,[(t(!0),i(u,null,v(n.features,a=>(t(),i("div",{key:a.title,class:$(["item",[M(l)]])},[g(s,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):r("",!0)}}}),S=f(E,[["__scopeId","data-v-ea858808"]]),q=["id"],A=["href","aria-label"],K=h({__name:"MVPPlugins",setup(c){const{frontmatter:e}=w();return(l,n)=>{const _=S;return t(!0),i(u,null,v(M(e).features,s=>(t(),i(u,{key:s},[o("h2",{id:s.title,tabindex:"-1"},[m(k(s.title)+" ",1),o("a",{class:"header-anchor",href:`#${s.title}`,"aria-label":`Permalink to "${s.title}"`},null,8,A)],8,q),s.items?(t(),d(_,{key:0,features:s.items},null,8,["features"])):r("",!0)],64))),128)}}});export{K as _};