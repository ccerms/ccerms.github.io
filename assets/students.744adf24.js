import{at as i,au as r,aq as d}from"./index.cf42fdb7.js";const u=i("students",{state:()=>({list:[],available:[],request:{id:"",firstname:"",middlename:"",lastname:"",suffix:"",gender:"",birtdate:"",telephone_number:"",address:"",email:"",password:"",file:{},usertype_id:6,grouptype:1,course_id:1,status_id:""},status:{status:!0,success:!1,message:""}}),actions:{fetch(){r.get(`${d}api/students`).then(s=>{this.list=s.data})},fetchAvailable(){r.get(`${d}api/students/available`).then(s=>{this.available=s.data.filter(a=>a.available)})},create(){return new Promise((s,a)=>{let e=new FormData;e.append("firstname",this.request.firstname),e.append("middlename",this.request.middlename),e.append("lastname",this.request.lastname),e.append("suffix",this.request.suffix),e.append("gender",this.request.gender),e.append("birtdate",this.request.birthdate),e.append("telephone_number",this.request.telephone_number),e.append("address",this.request.address),e.append("email",this.request.email),e.append("password",this.request.password),e.append("file",this.request.file),e.append("usertype",this.request.usertype_id),e.append("other_type",this.request.other_type),e.append("grouptype",this.request.grouptype),e.append("course",this.request.course_id),e.append("status",this.request.status_id),r.post(`${d}api/students`,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{this.list=t.data.students,this.status={status:!1,success:t.data.status==200,message:t.data.message},this.clear(),s(t)}).catch(t=>{this.status={status:!1,success:!1,message:"Server error!"},a(t)})})},select(s){this.request={id:s.id,firstname:s.firstname,middlename:s.middlename,lastname:s.lastname,suffix:s.suffix,gender:s.gender,birtdate:s.birtdate,telephone_number:s.telephone_number,address:s.address,email:s.email,password:"",usertype_id:s.usertype_id,other_type:s.other_type,grouptype:s.studentdetail.grouptype_id,course_id:s.studentdetail.course_id,status_id:s.status_id}},update(){return new Promise((s,a)=>{let e=new FormData;e.append("_method","PUT"),e.append("id",this.request.id),e.append("firstname",this.request.firstname),e.append("middlename",this.request.middlename),e.append("lastname",this.request.lastname),e.append("suffix",this.request.suffix),e.append("gender",this.request.gender),e.append("birtdate",this.request.birthdate),e.append("telephone_number",this.request.telephone_number),e.append("address",this.request.address),e.append("email",this.request.email),e.append("password",this.request.password),e.append("file",this.request.file),e.append("usertype",this.request.usertype_id),e.append("other_type",this.request.other_type),e.append("grouptype",this.request.grouptype),e.append("course",this.request.course_id),e.append("status",this.request.status_id),r.post(`${d}api/students/${this.request.id}`,e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{this.list=t.data.students,this.status={status:!1,success:t.data.status==200,message:t.data.message},this.clear(),s(t)}).catch(t=>{this.status={status:!1,success:!1,message:"Server error!"},a(t)})})},destroy(){console.log(this.id)},destroy_personnel(s,a){r.delete(`${d}api/${a}/${s}`)},clear(){this.request={id:"",firstname:"",middlename:"",lastname:"",suffix:"",gender:"",birtdate:"",telephone_number:"",address:"",email:"",password:"",file:{},usertype_id:6,other_type:"",grouptype:1,course_id:1,status_id:""}}}});export{u};
