import{A as o,r as d,o as l,k as a,b as t,F as c,L as y,t as s,u as r,a as u,w as b,x as B,c as D,y as L,e as G,i as V,l as A,S as C,f as E}from"./index.02e3cb5b.js";import{u as F}from"./details.e8ee19e6.js";const M=t("thead",null,[t("tr",null,[t("th",null,"Schedule Date"),t("th",null,"Venue"),t("th",null,"Time Schedule"),t("th",null,"Schedule Type"),t("th",null,"Group name"),t("th",null,"Group Type"),t("th",null,"Panelist"),t("th",null,"Status")])],-1),N={"data-label":"Schedule Date"},H={"data-label":"Venue"},I={"data-label":"Time Schedule"},j={"data-label":"Schedule Type"},q={"data-label":"Group name"},z={"data-label":"Group Type"},J={"data-label":"Panelist"},K={"data-label":"Status"},O={key:0,class:"p-1 bg-yellow-400 text-white text-sm rounded font-semibold"},Q={key:1,class:"p-1 bg-lime-400 text-white text-sm rounded font-semibold"},R={key:2,class:"p-1 bg-red-400 text-white text-sm rounded font-semibold"},U={key:3,class:"p-1 bg-red-400 text-white text-sm rounded font-semibold"},W={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"},X={__name:"SchedulesTable",props:{data:{type:Array,default:[]},checkable:Boolean},emits:["select-section"],setup(k,{emit:x}){const _=k,i=o(()=>_.data);d(!1);const h=d(10),n=d(0);d([]);const P=o(()=>i.value.slice(h.value*n.value,h.value*(n.value+1))),S=o(()=>Math.ceil(i.value.length/h.value)),T=o(()=>n.value+1),w=o(()=>{const f=[];for(let p=0;p<S.value;p++)f.push(p);return f});return(f,p)=>(l(),a(c,null,[t("table",null,[M,t("tbody",null,[(l(!0),a(c,null,y(r(P),e=>{var m,g,v;return l(),a("tr",{key:e.id},[t("td",N,s(e.date),1),t("td",H,s(e.venue),1),t("td",I,s(`${e.from_time} - ${e.to_time}`),1),t("td",j,s((m=e.scheduletype)!=null?m:null),1),t("td",q,s((g=e.groupname)!=null?g:null),1),t("td",z,s((v=e.grouptype)!=null?v:null),1),t("td",J,[(l(!0),a(c,null,y(e.panels,$=>(l(),a("span",{key:$.id,class:"bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"},s($.fullname),1))),128))]),t("td",K,[e.status_id==4?(l(),a("span",O,s(e.status),1)):e.status_id==5?(l(),a("span",Q,s(e.status),1)):e.status_id==6||e.status_id==7?(l(),a("span",R,s(e.status),1)):(l(),a("span",U,s(e.status),1))])])}),128))])]),t("div",W,[u(G,null,{default:b(()=>[u(B,null,{default:b(()=>[(l(!0),a(c,null,y(r(w),e=>(l(),D(L,{key:e,active:e===n.value,label:e+1,small:"",onClick:m=>n.value=e},null,8,["active","label","onClick"]))),128))]),_:1}),t("small",null,"Page "+s(r(T))+" of "+s(r(S)),1)]),_:1})])],64))}},ee={__name:"Index",setup(k){const x=d(["Student","Events","Schedules"]),_=F(),i=V();return _.fetch(i.user.id),(h,n)=>(l(),a(c,null,[u(A,{"title-stack":x.value},null,8,["title-stack"]),u(C,null,{default:b(()=>[u(E,{title:"Schedules List",hasTable:!0},{default:b(()=>[u(X,{data:r(_).schedules},null,8,["data"])]),_:1})]),_:1})],64))}};export{ee as default};
