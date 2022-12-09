import{at as se,au as T,aq as O,r as y,ap as z,c as B,o as c,g as q,w as f,f as e,b as n,j as o,Q as R,i as A,l as F,ar as M,v as L,a as g,F as U,d as j,t as b,m as te,e as x,k as ae,av as oe,n as le,J,p as C,a9 as ie,q as ne,S as ue,z as de,G as re,W as ce,as as me}from"./index.cf42fdb7.js";import{_ as _e}from"./CardBoxModal.293300a9.js";import{_ as be}from"./NotificationBar.92bb6639.js";import{_ as D}from"./FormField.fc61414c.js";import{_ as E}from"./FormFilePicker.e4edc9a1.js";import{_ as N}from"./FormControl.44c64591.js";import{_ as Q}from"./NotificationBarInCard.7433961d.js";import{u as fe}from"./details.33c34818.js";const H=se("submissionOne",{state:()=>({submissions:[],request:{id:"",file:{},group:"",milestone:"",submitted_by:"",submitted_to:"",notes:"",comment:{user:"",file:{},comment:""}},status:{status:!0,success:!1,message:""}}),actions:{fetch(u,_){T.get(`${O}api/onesubmissions/${u}/${_}`).then(l=>{this.submissions=l.data})},create(){return new Promise((u,_)=>{let l=new FormData;l.append("file",this.request.file),l.append("group",this.request.group),l.append("milestone",this.request.milestone),l.append("submitted_by",this.request.submitted_by),l.append("submitted_to",this.request.submitted_to),l.append("notes",this.request.notes),T.post(`${O}api/onesubmissions`,l,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{this.submissions=a.data.submissions,this.status={status:!1,success:a.data.status==200,message:a.data.message},this.clear(),u(a)}).catch(a=>{this.status={status:!1,success:!1,message:"Server error!"},_(a)})})},select(u){this.request={id:u.id,file:{},group:u.group_id,milestone:u.onemilestone_id,submitted_by:u.send_by,submitted_to:u.send_to,notes:u.notes,comment:{user:"",file:{},comment:""}}},update(){return new Promise((u,_)=>{let l=new FormData;l.append("_method","PUT"),l.append("file",this.request.file),l.append("group",this.request.group),l.append("milestone",this.request.milestone),l.append("submitted_by",this.request.submitted_by),l.append("submitted_to",this.request.submitted_to),l.append("notes",this.request.notes),T.post(`${O}api/onesubmissions/${this.request.id}`,l,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{this.submissions=a.data.submissions,this.status={status:!1,success:a.data.status==200,message:a.data.message},this.clear(),u(a)}).catch(a=>{this.status={status:!1,success:!1,message:"Server error!"},_(a)})})},comment(u){return new Promise((_,l)=>{let a=new FormData;a.append("user",this.request.comment.user),a.append("file",this.request.comment.file),a.append("comment",this.request.comment.comment),T.post(`${O}api/onesubmissions/comments/${u}`,a,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{const p=this.submissions.indexOf(this.submissions.find(k=>k.id==u));this.submissions[p].comments=d.data.comments,this.status={status:!1,success:d.data.status==200,message:d.data.message},this.request.comment.comment="",this.request.comment.file={},_(d)}).catch(d=>{this.status={status:!1,success:!1,message:"Server error!"},l(d)})})},delete(){return new Promise((u,_)=>{T.delete(`${O}api/onesubmissions/${this.request.id}`,this.request,{headers:{"Content-Type":"application/json"}}).then(l=>{this.submissions=l.data.submissions,this.status={status:!1,success:l.data.status==200,message:l.data.message},this.clear(),u(l)}).catch(l=>{this.status={status:!1,success:!1,message:"Server error!"},_(l)})})},clear(){this.request={id:"",file:{},group:"",milestone:"",submitted_by:"",submitted_to:"",notes:"",comment:{user:"",file:{},comment:""}}}}}),pe={class:"space-y-3"},he=e("span",{class:"font-bold"},"Student Details.",-1),ge={class:"grid grid-cols-1"},ve={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ye={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},$e={__name:"Create",props:{advisers:{type:Array,default:[]},panels:{type:Array,default:[]},rcs:{type:Array,default:[]}},emits:["back","submit"],setup(u,{emit:_}){const l=u,a=H();y(!1),y(null);const d=z("Loader"),p=B(()=>{var i=[];const s=l.advisers.map(r=>({id:r.id,label:`${r.firstname} ${r.firstname} ${r.lastname} (Adviser)`})),t=l.panels.map(r=>({id:r.id,label:`${r.firstname} ${r.firstname} ${r.lastname} (Panel)`})),V=l.rcs.map(r=>({id:r.id,label:`${r.firstname} ${r.firstname} ${r.lastname} (RC)`}));return i=i.concat(s),i=i.concat(t),i=i.concat(V),i}),k=()=>{_("back",!1)},v=()=>{d.show(),a.create().then(i=>{d.hide(),_("submit",{status:!0,list:i.data.submissions})}).catch(()=>{d.hide(),_("submit",{status:!1})})};return(i,s)=>(c(),q(L,{title:"Create New Submission",form:!0,headerIcon:o(M),onHeaderIconClick:s[4]||(s[4]=t=>k())},{default:f(()=>[e("div",pe,[n(Q,{color:"light"},{default:f(()=>[he]),_:1}),e("div",ge,[n(D,{label:"Document"},{default:f(()=>[n(E,{modelValue:o(a).request.file,"onUpdate:modelValue":s[0]||(s[0]=t=>o(a).request.file=t)},null,8,["modelValue"])]),_:1})]),e("div",ve,[n(D,{label:"Send to"},{default:f(()=>[n(N,{modelValue:o(a).request.submitted_to,"onUpdate:modelValue":s[1]||(s[1]=t=>o(a).request.submitted_to=t),options:o(p)},null,8,["modelValue","options"])]),_:1})]),e("div",ye,[n(D,{label:"Notes"},{default:f(()=>[n(N,{modelValue:o(a).request.notes,"onUpdate:modelValue":s[2]||(s[2]=t=>o(a).request.notes=t),type:"textarea"},null,8,["modelValue"])]),_:1})])]),n(R),n(F,null,{default:f(()=>[n(A,{label:"Submit",color:"info",onClick:s[3]||(s[3]=t=>v())})]),_:1})]),_:1},8,["headerIcon"]))}},ke={class:"space-y-3"},xe=e("span",{class:"font-bold"},"Student Details.",-1),qe={class:"grid grid-cols-1"},we={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Ce={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Se={__name:"Update",props:{advisers:{type:Array,default:[]},panels:{type:Array,default:[]},rcs:{type:Array,default:[]}},emits:["back","submit"],setup(u,{emit:_}){const l=u,a=H();y(!1),y(null);const d=z("Loader"),p=B(()=>{var i=[];const s=l.advisers.map(r=>({id:r.id,label:`${r.firstname} ${r.firstname} ${r.lastname} (Adviser)`})),t=l.panels.map(r=>({id:r.id,label:`${r.firstname} ${r.firstname} ${r.lastname} (Panel)`})),V=l.rcs.map(r=>({id:r.id,label:`${r.firstname} ${r.firstname} ${r.lastname} (RC)`}));return i=i.concat(s),i=i.concat(t),i=i.concat(V),i}),k=()=>{_("back",!1)},v=()=>{d.show(),a.update().then(i=>{d.hide(),_("submit",{status:!0,list:i.data.submissions})}).catch(()=>{d.hide(),_("submit",{status:!1})})};return(i,s)=>(c(),q(L,{title:"Update Submission",form:!0,headerIcon:o(M),onHeaderIconClick:s[4]||(s[4]=t=>k())},{default:f(()=>[e("div",ke,[n(Q,{color:"light"},{default:f(()=>[xe]),_:1}),e("div",qe,[n(D,{label:"Document"},{default:f(()=>[n(E,{modelValue:o(a).request.file,"onUpdate:modelValue":s[0]||(s[0]=t=>o(a).request.file=t)},null,8,["modelValue"])]),_:1})]),e("div",we,[n(D,{label:"Send to"},{default:f(()=>[n(N,{modelValue:o(a).request.submitted_to,"onUpdate:modelValue":s[1]||(s[1]=t=>o(a).request.submitted_to=t),options:o(p)},null,8,["modelValue","options"])]),_:1})]),e("div",Ce,[n(D,{label:"Notes"},{default:f(()=>[n(N,{modelValue:o(a).request.notes,"onUpdate:modelValue":s[2]||(s[2]=t=>o(a).request.notes=t),type:"textarea"},null,8,["modelValue"])]),_:1})])]),n(R),n(F,null,{default:f(()=>[n(A,{label:"Update",color:"info",onClick:s[3]||(s[3]=t=>v())})]),_:1})]),_:1},8,["headerIcon"]))}},De=e("thead",null,[e("tr",null,[e("th",null,"Revision #"),e("th",null,"Milestone"),e("th",null,"File"),e("th",null,"Date time Submitted"),e("th",null,"Submitted By"),e("th",null,"Submitted To"),e("th",null,"Date time Checked"),e("th",null,"Checked By"),e("th",null,"Status"),e("th",null,"Actions")])],-1),Ve={"data-label":"Revision #"},Be={"data-label":"Milestone"},Ae={"data-label":"File"},Pe=["href"],Ue={"data-label":"Date time Submitted"},Ie={"data-label":"Submitted By"},Te={"data-label":"Submitted To"},Oe={"data-label":"Date time Checked"},Fe={"data-label":"Checked By"},Le={"data-label":"Status"},Ne={key:0,class:"p-1 bg-yellow-400 text-white text-sm rounded font-semibold"},je={key:1,class:"p-1 bg-lime-400 text-white text-sm rounded font-semibold"},Me={key:2,class:"p-1 bg-red-400 text-white text-sm rounded font-semibold"},He={"data-label":"Actions"},ze={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"},Re={__name:"Table",props:{data:{type:Array,default:[]},checkable:Boolean},emits:["select-submission","show-submission","delete-submission"],setup(u,{emit:_}){const l=u,a=B(()=>l.data);y(!1);const d=y(10),p=y(0);y([]);const k=B(()=>a.value.slice(d.value*p.value,d.value*(p.value+1))),v=B(()=>Math.ceil(a.value.length/d.value)),i=B(()=>p.value+1),s=B(()=>{const w=[];for(let P=0;P<v.value;P++)w.push(P);return w}),t=w=>{_("select-submission",w)},V=w=>{_("show-submission",w)},r=w=>{_("delete-submission",w)};return(w,P)=>(c(),g(U,null,[e("table",null,[De,e("tbody",null,[(c(!0),g(U,null,j(o(k),m=>(c(),g("tr",{key:m.id},[e("td",Ve,b(m.revision_number),1),e("td",Be,b(m.milestone),1),e("td",Ae,[e("a",{class:"text-blue-500 hover:underline",href:m.file_url},b(m.file),9,Pe)]),e("td",Ue,b(m.sendby_datetime),1),e("td",Ie,b(m.submitted_by),1),e("td",Te,b(m.submitted_to),1),e("td",Oe,b(m.approved_datetime),1),e("td",Fe,b(m.checked_by),1),e("td",Le,[m.status_id==1?(c(),g("span",Ne,b(m.status),1)):m.status_id==2?(c(),g("span",je,b(m.status),1)):(c(),g("span",Me,b(m.status),1))]),e("td",He,[n(F,{type:"justify-start lg:justify-end","no-wrap":""},{default:f(()=>[m.status_id==1?(c(),q(A,{key:0,color:"info",icon:o(te),small:"",onClick:I=>t(m)},null,8,["icon","onClick"])):x("",!0),m.status_id==1?(c(),q(A,{key:1,color:"danger",icon:o(ae),small:"",onClick:I=>r(m)},null,8,["icon","onClick"])):x("",!0),n(A,{color:"info",icon:o(oe),small:"",onClick:I=>V(m)},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])]),e("div",ze,[n(le,null,{default:f(()=>[n(F,null,{default:f(()=>[(c(!0),g(U,null,j(o(s),m=>(c(),q(A,{key:m,active:m===p.value,label:m+1,small:"",onClick:I=>p.value=m},null,8,["active","label","onClick"]))),128))]),_:1}),e("small",null,"Page "+b(o(i))+" of "+b(o(v)),1)]),_:1})])],64))}},Ee={class:"grid grid-cols-1 lg:grid-cols-6 py-2"},Ge={class:"content lg:col-start-2 lg:col-span-4"},Je={class:"grid grid-cols-1 lg:grid-cols-2 pb-2"},Qe={class:"col-span-2"},We=["href"],Ke={class:"submit-details text-start"},Xe={class:"text-lg py-1"},Ye=C("Datetime Submitted: "),Ze={class:"font-bold"},es={class:"text-lg py-1"},ss=C("Submitted By: "),ts={class:"font-bold"},as={class:"text-lg py-1"},os=C("Submitted To: "),ls={class:"font-bold"},is={class:"checked-details text-end"},ns={class:"text-lg py-1"},us=C("Datetime Checked : "),ds={class:"font-bold"},rs={class:"text-lg py-1"},cs=C("Checked By : "),ms={class:"font-bold"},_s={class:"text-lg py-1"},bs=C("Status : "),fs={class:"font-bold"},ps=e("div",{class:"grid grid-cols-1 lg:grid-col-3"},null,-1),hs={class:"content lg:col-start-2 lg:col-span-4"},gs={class:"h-80 overflow-y-auto"},vs={class:"flex justify-between items-center mb-2"},ys={class:"flex items-center"},$s={class:"inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"},ks=["src"],xs={class:"text-sm text-gray-600 dark:text-gray-400"},qs={class:"text-gray-500 dark:text-gray-400"},ws={key:0,class:"flex items-center mt-4 space-x-4"},Cs=["href"],Ss={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"mr-1 w-4 h-4",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 488.658 488.658",style:{"enable-background":"new 0 0 488.658 488.658"},"xml:space":"preserve"},Ds=e("g",null,[e("g",null,[e("path",{d:"M225.485,317.756c-21-23-42.8-45.1-67.4-64.3c-7.4-5.8-16.2-8-22.1-1.1c-5.4,6.3-5,15.3,1.1,22.8    c11,13.4,21.9,27,34.3,39.1c19.9,19.4,41,37.6,61.6,56.4c0.6,1,1.2,1.9,1.8,2.9v0.1c3.1,4.8,9.6,6.2,14.4,3.1l4.8-3.1    c41.9-27.1,72.7-66.8,109.2-100c1.7-1.5,1.7-6.5,0.7-9c-1.9-5-6.8-5.9-12.1-5.1c-17.2,2.7-32.5,11.6-45.7,23    c-15.8,13.7-31.7,27.2-47.2,41.3c1.2-14.4,2.1-28.8,2-43.2c-0.4-32.2-2.4-64.4-3.7-96.6c11.5-57.7,4.9-116.8,7.3-175.2    c0.1-2.6-3.4-6.7-5.8-8c-4.9-2.5-9,0.8-12.1,5.7c-10.3,16.3-14.8,36.1-16,56.2c-2.9,48.5-7.3,97-4,145.7c-0.4,6-0.8,12.1-1.1,18.1    C224.085,256.956,223.585,287.456,225.485,317.756z"}),e("path",{d:"M214.685,450.756c-6.3-0.4-12.6-0.8-18.9-1.1c-40-1.7-80-2.2-119.8,1.9c-11.3,1.2-20.7,5.8-19.9,14.8    c0.8,8.3,8.8,14.4,20.4,15.3c20.9,1.7,41.9,3.6,62.8,3.4c33.7-0.4,67.3-2.4,101-3.7c60.3,11.5,122.1,4.9,183.1,7.3    c2.7,0.1,7-3.4,8.3-5.8c2.7-4.9-0.8-9-6-12.1c-17-10.3-37.7-14.8-58.8-16C316.385,451.956,265.685,447.556,214.685,450.756z"})])],-1),Vs=[Ds],Bs=C(" Download File Attached "),As={class:"mt-2"},Ps={class:"py-2"},Us={__name:"Comments",props:{submissionDetails:{type:Object,default:null}},emits:["back","comment"],setup(u,{emit:_}){const l=u,a=H(),d=z("Loader"),p=()=>{_("back",!1)},k=()=>{d.show(),a.comment(l.submissionDetails.id).then(v=>{d.hide(),_("comment",{status:!0,list:v.data})}).catch(()=>{d.hide(),_("comment",{status:!1})})};return(v,i)=>(c(),q(L,{title:"Submission Details",form:!0,headerIcon:o(M),onHeaderIconClick:i[3]||(i[3]=s=>p())},{default:f(()=>[e("div",Ee,[e("div",Ge,[e("div",Je,[e("div",Qe,[e("a",{class:"text-xl text-blue-500 hover:underline",href:u.submissionDetails.file_url},b(u.submissionDetails.file),9,We)]),e("div",Ke,[e("h3",Xe,[Ye,e("span",Ze,b(u.submissionDetails.sendby_datetime),1)]),e("h3",es,[ss,e("span",ts,b(u.submissionDetails.submitted_by),1)]),e("h3",as,[os,e("span",ls,b(u.submissionDetails.submitted_to),1)])]),e("div",is,[e("h3",ns,[us,e("span",ds,b(u.submissionDetails.approved_datetime),1)]),e("h3",rs,[cs,e("span",ms,b(u.submissionDetails.checked_by),1)]),e("h3",_s,[bs,e("span",fs,b(u.submissionDetails.status),1)])])]),ps]),e("div",hs,[n(R),e("div",gs,[(c(!0),g(U,null,j(u.submissionDetails.comments,s=>{var t;return c(),g("article",{key:s.id,class:J(["p-6 mb-2 text-base bg-white rounded-lg dark:bg-gray-900",s.id!=1?"border-t":""])},[e("footer",vs,[e("div",ys,[e("p",$s,[e("img",{class:"mr-2 w-6 h-6 rounded-full",src:(t=s.user_details.file_url)!=null?t:"https://flowbite.com/docs/images/people/profile-picture-2.jpg",alt:"Michael Gough"},null,8,ks),C(" "+b(s.user_details.fullname),1)]),e("p",xs,b(s.created_at),1)])]),e("p",qs,b(s.comment),1),s.file_url!=null?(c(),g("div",ws,[e("a",{href:s.file_url,type:"button",class:"flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"},[(c(),g("svg",Ss,Vs)),Bs],8,Cs)])):x("",!0)],2)}),128))]),e("div",As,[e("div",Ps,[n(D,{label:"Attached File",class:"pb-2"},{default:f(()=>[n(E,{modelValue:o(a).request.comment.file,"onUpdate:modelValue":i[0]||(i[0]=s=>o(a).request.comment.file=s)},null,8,["modelValue"])]),_:1}),n(D,{label:"Add Comments"},{default:f(()=>[n(N,{type:"textarea",modelValue:o(a).request.comment.comment,"onUpdate:modelValue":i[1]||(i[1]=s=>o(a).request.comment.comment=s)},null,8,["modelValue"])]),_:1})]),n(F,null,{default:f(()=>[n(A,{label:"Post Comment",color:"info",onClick:i[2]||(i[2]=s=>k())})]),_:1})])])])]),_:1},8,["headerIcon"]))}},Is=e("h4",{class:"text-center"}," Click Delete to remove from list... ",-1),Ts={key:1,class:"grid grid-cols-1 md:grid-cols-3 gap-3"},Os={key:0,class:"font-bold text-center"},Fs={key:1,class:"font-bold text-center"},Ls={key:2,class:"font-bold text-center"},Ns={key:2},js={class:"flex gap-5 items-center"},Ms={class:"text-3xl font-semibold uppercase py-2"},Xs={__name:"Index",setup(u){const _=y(["Student","Events","Submissions","Capstone 1"]),l=y(!1),a=y(!1),d=y(!1),p=y(!1),k=y(!1),v=y(null),i=y(null),s=fe(),t=H(),V=ie();s.fetch(V.user.id);const r=()=>{t.status.status=!0},w=h=>{if(s.details.group.onemilestone_order<h.id)return!1;t.fetch(s.details.group.id,h.id),l.value=!0,v.value=h},P=()=>{l.value=!1,a.value=!1,d.value=!1,v.value=null},m=()=>{a.value=!a.value,t.request.group=s.details.group.id,t.request.milestone=v.value.id,t.request.submitted_by=s.details.user_id},I=()=>{d.value=!d.value,t.request.group=s.details.group.id,t.request.milestone=v.value.id,t.request.submitted_by=s.details.user_id,t.request.submitted_to="",t.request.notes=""},W=()=>{p.value=!p.value,t.request.group=s.details.group.id,t.request.milestone=v.value.id,t.request.submitted_by=s.details.user_id,t.request.submitted_to="",t.request.notes="",t.request.comment.user=""},G=h=>{h.status&&(t.submissions=h.list,a.value=!1,d.value=!1)},K=h=>{if(h.status){const S=t.submissions.indexOf(t.submissions.find($=>$.id==i.id));t.submissions[S].comments=h.data.comments,t.submissions.comments=h.list,p.value=!0,a.value=!1,d.value=!1}},X=h=>{t.select(h),d.value=!0,a.value=!1,t.request.submitted_by=s.details.user_id},Y=h=>{t.select(h),p.value=!0,d.value=!1,a.value=!1,i.value=h,t.request.comment.file={},t.request.comment.user=s.details.user_id},Z=h=>{k.value=!0,t.select(h)},ee=()=>{let h=t.submissions.find($=>$.id==t.request.id),S=t.submissions.indexOf(h);h!=null&&(t.submissions.splice(S,1),t.delete())};return(h,S)=>(c(),g(U,null,[n(ne,{"title-stack":_.value},null,8,["title-stack"]),n(ue,null,{default:f(()=>[o(t).status.status?x("",!0):(c(),q(be,{key:0,isDismissed:o(t).status.status,color:o(t).status.success?"success":"danger",icon:o(de),onHideNotification:r},{default:f(()=>[C(b(o(t).status.message),1)]),_:1},8,["isDismissed","color","icon"])),n(_e,{modelValue:k.value,"onUpdate:modelValue":S[0]||(S[0]=$=>k.value=$),"large-title":"Delete entry...",button:"warning",buttonLabel:"Delete",onConfirm:S[1]||(S[1]=$=>ee())},{default:f(()=>[Is]),_:1},8,["modelValue"]),l.value?x("",!0):(c(),g("div",Ts,[(c(!0),g(U,null,j(o(s).onemilestones,$=>(c(),q(L,{class:J(["uppercase",o(s).details.group.onemilestone_order>=$.id?"cursor-pointer":"cursor-not-allowed"]),headerBg:o(s).details.group.onemilestone_order>=$.id?"bg-yellow-400":"bg-gray-400",key:$.id,title:$.milestone,onClick:Hs=>w($)},{default:f(()=>[o(s).details.group.onemilestone_order>$.id?(c(),g("h3",Os,"Done")):x("",!0),o(s).details.group.onemilestone_order==$.id?(c(),g("h3",Fs,"Ongoing")):x("",!0),o(s).details.group.onemilestone_order<$.id?(c(),g("h3",Ls,"Pending")):x("",!0)]),_:2},1032,["class","headerBg","title","onClick"]))),128))])),l.value?(c(),g("div",Ns,[e("div",js,[n(re,{class:"cursor-pointer",path:o(M),onClick:P},null,8,["path"]),e("h3",Ms,b(v.value.milestone),1)]),a.value&(!p.value&&!d.value)?(c(),q($e,{key:0,advisers:o(s).details.group.advisers,panels:o(s).details.group.panels,rcs:o(s).details.group.rcs,onBack:m,onSubmit:G},null,8,["advisers","panels","rcs"])):x("",!0),d.value&(!a.value&&!p.value)?(c(),q(Se,{key:1,advisers:o(s).details.group.advisers,panels:o(s).details.group.panels,rcs:o(s).details.group.rcs,onBack:I,onSubmit:G},null,8,["advisers","panels","rcs"])):x("",!0),p.value&(!a.value&&!d.value)?(c(),q(Us,{key:2,submissionDetails:i.value,onBack:W,onSubmit:K},null,8,["submissionDetails"])):x("",!0),!a.value&&!d.value&&!p.value?(c(),q(L,{key:3,title:"Submission List",hasTable:!0,icon:o(ce),headerIcon:o(s).details.group.onemilestone_order==v.value.id?o(me):null,onHeaderIconClick:m},{default:f(()=>[n(Re,{onSelectSubmission:X,onShowSubmission:Y,onDeleteSubmission:Z,data:o(t).submissions},null,8,["data"])]),_:1},8,["icon","headerIcon"])):x("",!0)])):x("",!0)]),_:1})],64))}};export{Xs as default};
