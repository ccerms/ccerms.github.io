import{Q as r,R as i,T as u}from"./index.02e3cb5b.js";const c=r("minute",{state:()=>({list:[],request:{id:null,title:"",list:[]},status:{status:!0,success:!1,message:""}}),actions:{fetch(){i.get(`${u}api/minutes`).then(t=>{this.list=t.data})},create(){return new Promise((t,a)=>{i.post(`${u}api/minutes`,this.request).then(s=>{this.list=s.data.minutes,this.status={status:!1,success:s.data.status==200,message:s.data.message},this.clear(),t(s)}).catch(s=>{this.status={status:!1,success:!1,message:"Server error!"},a(s)})})},select(t){this.request.id=t.id,this.request.title=t.title,this.request.list=t.lists},update(){return new Promise((t,a)=>{i.put(`${u}api/minutes/${this.request.id}`,this.request).then(s=>{this.list=s.data.minutes,this.status={status:!1,success:s.data.status==200,message:s.data.message},this.clear(),t(s)}).catch(s=>{this.status={status:!1,success:!1,message:"Server error!"},a(s)})})},destroy(t){return new Promise((a,s)=>{i.delete(`${u}api/minutes/list/${t}`).then(e=>{this.list=e.data.minutes,this.status={status:!1,success:e.data.status==200,message:e.data.message},a(e)}).catch(e=>{this.status={status:!1,success:!1,message:"Server error!"},s(e)})})},clear(){this.request={id:null,title:"",list:[]}}}});export{c as u};
