import{p as w,_ as $,D as A,c,o as n,a as e,b as B,t as a,w as D,u as I,E as T,j as b,z as f,f as L,d as N,F as v,e as y,g as V,i as z,s as E,G as F,n as j}from"./CYCP_GGn.js";import{_ as G}from"./DbQ9Vr0P.js";import{u as M}from"./DMrx1Wnh.js";const R=w("/images/blog/left-arrow.svg"),U=w("/images/blog/right-arrow.svg"),q={class:"card"},H={class:"wrapper-image"},J=["src"],K={class:"category"},O={class:"name"},Q={class:"details"},W={class:"by"},X={class:"date"},Y={__name:"BlogCardComponent",props:{previewImg:String,category:String,name:String,by:String,date:String,slug:String},setup(o){const l=A();return(i,u)=>{const t=G;return n(),c("section",q,[e("div",H,[e("img",{src:o.previewImg,alt:""},null,8,J)]),e("p",K,a(i.$t(o.category)),1),B(t,{to:I(l)(`/news/${o.slug}`)},{default:D(()=>[e("h4",O,a(i.$t(o.name)),1)]),_:1},8,["to"]),e("div",Q,[e("p",W,"by "+a(o.by),1),e("p",X,a(o.date),1)])])}}},Z=$(Y,[["__scopeId","data-v-a8c31b6a"]]),ee={class:"articles"},te={class:"pagination"},se=["disabled"],ae=["onClick"],oe=["disabled"],p=6,ne={__name:"index",async setup(o){let l,i;const{data:u}=([l,i]=T(async()=>M("blog",async()=>{const s=await $fetch("/api/blog");return Array.isArray(s)?s:[]})),l=await l,i(),l),t=b(1),_=b(null),g=f(()=>u.value.length>0?Math.ceil(u.value.length/p):1),k=f(()=>{if(!Array.isArray(u.value))return[];const s=(t.value-1)*p;return u.value.slice(s,s+p)}),m=()=>{V(()=>{_.value&&_.value.scrollIntoView({behavior:"smooth"})})},C=()=>{t.value<g.value&&(t.value++,m())},P=()=>{t.value>1&&(t.value--,m())},S=s=>{t.value=s,m()};return(s,d)=>{const x=z("reveal");return n(),c(v,null,[e("main",null,[e("p",null,a(s.$t("menu.home"))+" / "+a(s.$t("menu.blog")),1),e("h1",null,[L((n(),c("span",{class:"wow reveal-bb reveal-visible",ref_key:"articlesSection",ref:_},[N(a(s.$t("menu.blog")),1)])),[[x]])])]),e("section",ee,[(n(!0),c(v,null,y(k.value,(r,h)=>(n(),E(Z,F({key:h,ref_for:!0},r),null,16))),128))]),e("div",te,[e("button",{onClick:P,disabled:t.value===1},d[0]||(d[0]=[e("img",{src:R,alt:""},null,-1)]),8,se),(n(!0),c(v,null,y(g.value,r=>(n(),c("div",{key:r,class:j(["page-number",{current:r===t.value}]),onClick:h=>S(r)},a(r),11,ae))),128)),e("button",{onClick:C,disabled:t.value===g.value},d[1]||(d[1]=[e("img",{src:U,alt:""},null,-1)]),8,oe)])],64)}}},ie=$(ne,[["__scopeId","data-v-e63e23d0"]]);export{ie as default};
