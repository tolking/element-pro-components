import{g as e,h as a,j as t,k as s,u as l,o,c as r,d as c,l as n,t as i,_ as u,m as d,p as f,n as v,F as m,f as p,q as k}from"./app.4ad4b635.js";const h=d("data-v-7f697f38");f("data-v-7f697f38");const x={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,class:"title"},$={key:2,class:"description"};v();var _=e({expose:[],setup(e){const d=a(),f=t(),v=s((()=>f.value.heroImage||m.value||k.value||I.value)),m=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||d.value.title)),k=s((()=>null!==f.value.tagline)),_=s((()=>f.value.tagline||d.value.description)),I=s((()=>f.value.actionLink&&f.value.actionText)),b=s((()=>f.value.altActionLink&&f.value.altActionText));return h(((e,a)=>l(v)?(o(),r("header",x,[e.$frontmatter.heroImage?(o(),r("figure",y,[c("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):n("",!0),l(m)?(o(),r("h1",g,i(l(p)),1)):n("",!0),l(k)?(o(),r("p",$,i(l(_)),1)):n("",!0),l(I)?(o(),r(u,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):n("",!0),l(b)?(o(),r(u,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)))}});_.__scopeId="data-v-7f697f38";const I=d("data-v-e5f225ce");f("data-v-e5f225ce");const b={key:0,class:"home-features"},T={class:"wrapper"},A={class:"container"},L={class:"features"},j={key:0,class:"title"},w={key:1,class:"details"};v();var q=e({expose:[],setup(e){const a=t(),u=s((()=>a.value.features&&a.value.features.length>0)),d=s((()=>a.value.features?a.value.features:[]));return I(((e,a)=>l(u)?(o(),r("div",b,[c("div",T,[c("div",A,[c("div",L,[(o(!0),r(m,null,p(l(d),((e,a)=>(o(),r("section",{key:a,class:"feature"},[e.title?(o(),r("h2",j,i(e.title),1)):n("",!0),e.details?(o(),r("p",w,i(e.details),1)):n("",!0)])))),128))])])])])):n("",!0)))}});q.__scopeId="data-v-e5f225ce";const B={},F=d("data-v-df8b2502");f("data-v-df8b2502");const z={key:0,class:"footer"},C={class:"container"},D={class:"text"};v();const E=F(((e,a)=>e.$frontmatter.footer?(o(),r("footer",z,[c("div",C,[c("p",D,i(e.$frontmatter.footer),1)])])):n("",!0)));B.render=E,B.__scopeId="data-v-df8b2502";const G=d("data-v-24d7e9f0");f("data-v-24d7e9f0");const H={class:"home","aria-labelledby":"main-title"};v();var J=e({expose:[],setup:e=>G(((e,a)=>(o(),r("main",H,[c(_),k(e.$slots,"hero"),c(q),k(e.$slots,"features"),c(B),k(e.$slots,"footer")]))))});J.__scopeId="data-v-24d7e9f0";export default J;
