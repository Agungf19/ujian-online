import{L as l,a as i,o as e,c as a,d as c,F as m,p,n as t,b as u}from"./app.592a7b4c.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";const d={props:{links:Array,align:String},components:{Link:l}};function f(g,L,s,k,b,v){const r=i("Link");return e(),a("nav",null,[c("ul",{class:t(`pagination pagination-sm justify-content-${s.align} mb-0 mt-4`)},[(e(!0),a(m,null,p(s.links,(n,o)=>(e(),a("li",{class:t(["page-item",n.url==null?"disabled":"",n.active?"active":""]),key:o},[u(r,{class:"page-link",href:n.url===null?"#":n.url,innerHTML:n.label},null,8,["href","innerHTML"])],2))),128))],2)])}const y=_(d,[["render",f]]);export{y as P};
