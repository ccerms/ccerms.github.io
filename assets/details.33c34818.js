import{at as e,au as i,aq as a}from"./index.cf42fdb7.js";const n=e("studentDetails",{state:()=>({details:null,section_list:[],schedules:[],onemilestones:[],twomilestones:[]}),actions:{fetch(s){i.get(`${a}api/students/${s}`).then(t=>{this.details=t.data.student_details,this.section_list=t.data.section_list,this.schedules=t.data.schedules,this.onemilestones=t.data.onemilesones,this.twomilestones=t.data.twomilesones})}}});export{n as u};
