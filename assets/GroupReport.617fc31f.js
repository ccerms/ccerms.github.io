import{u as w,_ as b}from"./reports.02a4e189.js";import{_ as c}from"./FormField.7710561b.js";import{_ as p}from"./FormControl.dbc7ef08.js";import{k as i,b as t,a,w as m,F as k,L as V,u as s,o as u,y as d,t as n}from"./index.02e3cb5b.js";import{u as S}from"./sections.d2fd7649.js";import{c as v}from"./alert.93440aee.js";import{y as x}from"./settings_data.619c00ae.js";const C={class:"max-w-[1240px] mx-auto"},$={class:"option w-100 flex justify-between items-center my-5"},G={class:"option-filter w-100 flex gap-5 items-center"},Y={class:"option-function flex gap-5 items-center"},B={id:"printMe"},H=t("h3",{class:"font-bold text-center text-5xl py-3"},"Group Report",-1),L={class:"my-3 w-full text-sm text-left text-gray-500 dark:text-gray-400"},M=t("tbody",{class:"border-b"},[t("tr",{class:"w-100 bg-white dark:bg-gray-800 dark:border-gray-700"},[t("th",{scope:"col",class:"w-[20%] text-sm text-gray-900 mx-auto px-6 py-4 text-center"},"Group name"),t("th",{scope:"col",class:"w-[20%] text-sm text-gray-900 mx-auto px-6 py-4 text-center"},"Adviser"),t("th",{scope:"col",class:"w-[20%] text-sm text-gray-900 mx-auto px-6 py-4 text-center"},"Section"),t("th",{scope:"col",class:"w-[20%] text-sm text-gray-900 mx-auto px-6 py-4 text-center"},"Year"),t("th",{scope:"col",class:"w-[20%] text-sm text-gray-900 mx-auto px-6 py-4 text-center"},"Percent")])],-1),P={scope:"col",class:"w-[20%] text-sm font-medium text-gray-900 mx-auto px-6 py-4 text-center"},R={scope:"col",class:"w-[20%] text-sm font-medium text-gray-900 mx-auto px-6 py-4 text-center"},A={scope:"col",class:"w-[20%] text-sm font-medium text-gray-900 mx-auto px-6 py-4 text-center"},E={scope:"col",class:"w-[20%] text-sm font-medium text-gray-900 mx-auto px-6 py-4 text-center"},N={scope:"col",class:"w-[20%] text-sm font-medium text-gray-900 mx-auto px-6 py-4 text-center"},W={__name:"GroupReport",setup(T){const y=S(),o=w(),_=()=>{const l=document.getElementById("printMe").innerHTML;let r="";for(const h of[...document.querySelectorAll('link[rel="stylesheet"], style')])r+=h.outerHTML;const e=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");e.document.write(`<!DOCTYPE html>
        <html>
        <head>
            ${r}
        </head>
        <body>
            ${l}
        </body>
        </html>`),e.document.close(),e.focus(),e.print(),e.close()},g=()=>{if(o.group.section==""){v("warning","Check field required!");return}o.getGroup()},f=()=>{o.group.year_end=Number(o.group.year_start)+1,y.filter(o.group.year_start,o.group.year_end).then(l=>o.group.sections=l)};return(l,r)=>(u(),i("div",C,[t("div",$,[t("div",G,[a(c,{label:"Year start",class:"w-[150px]"},{default:m(()=>[a(p,{modelValue:s(o).group.year_start,"onUpdate:modelValue":r[0]||(r[0]=e=>s(o).group.year_start=e),options:s(x),onChange:f},null,8,["modelValue","options"])]),_:1}),a(c,{label:"Year end",class:"w-[150px]"},{default:m(()=>[a(p,{modelValue:s(o).group.year_end,"onUpdate:modelValue":r[1]||(r[1]=e=>s(o).group.year_end=e),options:s(x),disabled:""},null,8,["modelValue","options"])]),_:1}),a(c,{label:"Section",class:"w-[150px]"},{default:m(()=>[a(p,{modelValue:s(o).group.section,"onUpdate:modelValue":r[2]||(r[2]=e=>s(o).group.section=e),options:s(o).group.sections},null,8,["modelValue","options"])]),_:1})]),t("div",Y,[a(d,{label:"Generate",color:"info",onClick:g}),a(d,{label:"Print",color:"info",onClick:_})])]),t("div",B,[a(b),H,t("table",L,[M,t("tbody",null,[(u(!0),i(k,null,V(s(o).group.list,e=>(u(),i("tr",{key:e.id,class:"w-100 bg-white dark:bg-gray-800 dark:border-gray-700"},[t("th",P,n(e.groupname),1),t("th",R,n(e.adviser),1),t("th",A,n(e.section),1),t("th",E,n(e.year),1),t("th",N,n(e.percent)+" %",1)]))),128))])])])]))}};export{W as default};
