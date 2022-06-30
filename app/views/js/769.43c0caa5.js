"use strict";(self["webpackChunksimpletasks"]=self["webpackChunksimpletasks"]||[]).push([[769],{769:function(t,l,s){s.r(l),s.d(l,{default:function(){return I}});var e=s(252),n=s(963),a=s(577);const i={class:"list row"},r={class:"col-md-8"},c={class:"input-group mb-3"},o={class:"input-group-append"},u={class:"col-md-6"},d=(0,e._)("h4",null,"Tasks List",-1),k={class:"list-group"},h=["onClick"],v={class:"col-md-6"},T={key:0},g=(0,e._)("h4",null,"Task",-1),_=(0,e._)("label",null,[(0,e._)("strong",null,"Title:")],-1),p=(0,e._)("label",null,[(0,e._)("strong",null,"Description:")],-1),b=(0,e._)("label",null,[(0,e._)("strong",null,"Status:")],-1),m=(0,e.Uk)("Edit"),w={key:1},f=(0,e._)("br",null,null,-1),y=(0,e._)("p",null,"Please click on a Task...",-1),A=[f,y];function C(t,l,s,f,y,C){const D=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",i,[(0,e._)("div",r,[(0,e._)("div",c,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",placeholder:"Search by title","onUpdate:modelValue":l[0]||(l[0]=t=>y.title=t)},null,512),[[n.nr,y.title]]),(0,e._)("div",o,[(0,e._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:l[1]||(l[1]=(...t)=>C.searchTitle&&C.searchTitle(...t))}," Search ")])])]),(0,e._)("div",u,[d,(0,e._)("ul",k,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(y.tasks,((t,l)=>((0,e.wg)(),(0,e.iD)("li",{class:(0,a.C_)(["list-group-item",{active:l==y.currentIndex}]),key:l,onClick:s=>C.setActiveTask(t,l)},(0,a.zw)(t.title),11,h)))),128))]),(0,e._)("button",{class:"m-3 btn btn-sm btn-danger",onClick:l[2]||(l[2]=(...t)=>C.removeAllTasks&&C.removeAllTasks(...t))}," Remove All ")]),(0,e._)("div",v,[y.currentTask?((0,e.wg)(),(0,e.iD)("div",T,[g,(0,e._)("div",null,[_,(0,e.Uk)(" "+(0,a.zw)(y.currentTask.title),1)]),(0,e._)("div",null,[p,(0,e.Uk)(" "+(0,a.zw)(y.currentTask.description),1)]),(0,e._)("div",null,[b,(0,e.Uk)(" "+(0,a.zw)(y.currentTask.published?"Published":"Pending"),1)]),(0,e.Wm)(D,{to:"/tasks/"+y.currentTask.id,class:"badge badge-warning"},{default:(0,e.w5)((()=>[m])),_:1},8,["to"])])):((0,e.wg)(),(0,e.iD)("div",w,A))])])}var D=s(251),x={name:"tasks-list",data(){return{tasks:[],currentTask:null,currentIndex:-1,title:""}},methods:{retrieveTasks(){D.Z.getAll().then((t=>{this.tasks=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))},refreshList(){this.retrieveTasks(),this.currentTask=null,this.currentIndex=-1},setActiveTask(t,l){this.currentTask=t,this.currentIndex=t?l:-1},removeAllTasks(){D.Z.deleteAll().then((t=>{console.log(t.data),this.refreshList()})).catch((t=>{console.log(t)}))},searchTitle(){D.Z.findByTitle(this.title).then((t=>{this.tasks=t.data,this.setActiveTask(null),console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){this.retrieveTasks()}},U=s(744);const z=(0,U.Z)(x,[["render",C]]);var I=z}}]);
//# sourceMappingURL=769.43c0caa5.js.map