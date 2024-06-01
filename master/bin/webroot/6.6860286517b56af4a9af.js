(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{p32j:function(t,e,i){"use strict";i.r(e),i.d(e,"JobModule",function(){return J});var n=i("M0ag"),s=i("3/1E"),a=i("tk/3"),c=i("fXoL"),o=i("Ac7g"),r=i("PScX"),b=i("dEAy"),l=i("ofXK"),p=i("qAZ0"),d=i("ok2U"),m=i("OzZK"),u=i("RwU8"),h=i("C2AL");function g(t,e){1&t&&c.Sb(0,"nz-spin",4)}function f(t,e){if(1&t){const t=c.Yb();c.Xb(0,"sf",5,6),c.Xb(2,"div",7),c.Xb(3,"button",8),c.ec("click",function(){return c.Bc(t),c.ic().close()}),c.Lc(4,"\u5173\u95ed"),c.Wb(),c.Xb(5,"button",9),c.ec("click",function(){c.Bc(t);const e=c.yc(1);return c.ic().submit(e.value)}),c.Lc(6,"\u4fdd\u5b58"),c.Wb(),c.Wb(),c.Wb()}if(2&t){const t=c.yc(1),e=c.ic();c.qc("schema",e.schema)("ui",e.ui)("formData",e.record),c.Db(5),c.qc("disabled",!t.valid)}}let y=(()=>{class t{constructor(t,e,i){this.http=t,this.msg=e,this.modal=i,this.record={},this.submitting=!0,this.schema={properties:{name:{type:"string",title:"job\u540d\u79f0",minLength:3,maxLength:15},command:{type:"string",title:"Shell\u547d\u4ee4",minLength:5,maxLength:120},cronExpr:{type:"string",title:"Cron\u8868\u8fbe\u5f0f",minLength:12,maxLength:30},ipList:{type:"string",title:"ip\u5217\u8868",minLength:8},status:{type:"integer",title:"\u72b6\u6001",default:0}},required:["name","command","cronExpr","ipList","status"]},this.ui={"*":{spanLabelFixed:100,grid:{span:12}},$name:{widget:"string"},$command:{widget:"string"},$cronExpr:{widget:"string"},$ipList:{widget:"textarea"},$status:{widget:"boolean"}}}ngOnInit(){}submit(t){this.submitting&&(t.ipList=t.ipList.toString().split(","),t.status=t.status?1:0,this.http.post("/job/save",(new a.h).set("job",JSON.stringify(t))).subscribe(t=>{this.submitting=!1,this.msg.success("\u6dfb\u52a0\u6210\u529f"),this.modal.close(!0)}))}close(){this.modal.destroy()}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(o.p),c.Rb(r.e),c.Rb(b.b))},t.\u0275cmp=c.Lb({type:t,selectors:[["app-job-add"]],decls:5,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["class","modal-spin",4,"ngIf"],["mode","edit","button","none",3,"schema","ui","formData",4,"ngIf"],[1,"modal-spin"],["mode","edit","button","none",3,"schema","ui","formData"],["sf",""],[1,"modal-footer"],["nz-button","","type","button",3,"click"],["nz-button","","type","submit","nzType","primary",3,"disabled","click"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.Lc(2),c.Wb(),c.Wb(),c.Jc(3,g,1,0,"nz-spin",2),c.Jc(4,f,7,4,"sf",3)),2&t&&(c.Db(2),c.Mc(e.record.title),c.Db(1),c.qc("ngIf",!e.record),c.Db(1),c.qc("ngIf",e.record))},directives:[l.n,p.a,d.b,m.a,u.a,h.a],encapsulation:2}),t})();function L(t,e){1&t&&c.Sb(0,"nz-spin",4)}function z(t,e){if(1&t){const t=c.Yb();c.Xb(0,"sf",5,6),c.Xb(2,"div",7),c.Xb(3,"button",8),c.ec("click",function(){return c.Bc(t),c.ic().close()}),c.Lc(4,"\u5173\u95ed"),c.Wb(),c.Xb(5,"button",9),c.ec("click",function(){c.Bc(t);const e=c.yc(1);return c.ic().save(e.value)}),c.Lc(6,"\u4fdd\u5b58"),c.Wb(),c.Wb(),c.Wb()}if(2&t){const t=c.yc(1),e=c.ic();c.qc("schema",e.schema)("ui",e.ui)("formData",e.i),c.Db(5),c.qc("disabled",!t.valid)("nzLoading",e.http.loading)}}let x=(()=>{class t{constructor(t,e,i){this.modal=t,this.msgSrv=e,this.http=i,this.url="/job/detail",this.record={},this.schema={properties:{name:{type:"string",title:"job\u540d\u79f0",minLength:3,maxLength:15,readOnly:!0},command:{type:"string",title:"Shell\u547d\u4ee4",minLength:5,maxLength:120},cronExpr:{type:"string",title:"Cron\u8868\u8fbe\u5f0f",minLength:12,maxLength:30},ipList:{type:"string",title:"ip\u5217\u8868",minLength:8},status:{type:"integer",title:"\u72b6\u6001",default:0}},required:["name","command","cronExpr","ipList","status"]},this.ui={"*":{spanLabelFixed:100,grid:{span:12}},$name:{widget:"string"},$command:{widget:"string"},$cronExpr:{widget:"string"},$ipList:{widget:"textarea"},$status:{widget:"boolean"}}}ngOnInit(){""!==this.record.name&&this.http.get(this.url,{name:this.record.name}).subscribe(t=>this.i=t)}save(t){t.ipList=t.ipList.toString().split(","),t.status=t.status?1:0,this.http.post("/job/save",(new a.h).set("job",JSON.stringify(t))).subscribe(t=>{this.msgSrv.success("\u4fee\u6539\u6210\u529f"),this.modal.close(!0)})}close(){this.modal.destroy()}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(b.b),c.Rb(r.e),c.Rb(o.p))},t.\u0275cmp=c.Lb({type:t,selectors:[["app-job-edit"]],decls:5,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["class","modal-spin",4,"ngIf"],["mode","edit","button","none",3,"schema","ui","formData",4,"ngIf"],[1,"modal-spin"],["mode","edit","button","none",3,"schema","ui","formData"],["sf",""],[1,"modal-footer"],["nz-button","","type","button",3,"click"],["nz-button","","type","submit","nzType","primary",3,"disabled","nzLoading","click"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.Lc(2),c.Wb(),c.Wb(),c.Jc(3,L,1,0,"nz-spin",2),c.Jc(4,z,7,5,"sf",3)),2&t&&(c.Db(2),c.Nc("\u7f16\u8f91 ",e.record.name," \u4fe1\u606f"),c.Db(1),c.qc("ngIf",!e.i),c.Db(1),c.qc("ngIf",e.i))},directives:[l.n,p.a,d.b,m.a,u.a,h.a],encapsulation:2}),t})();var v=i("tyNb"),X=i("SdXu"),w=i("JA5x"),D=i("B+r4"),W=i("3Pt+"),S=i("ocnv"),k=i("PTRe"),q=i("FwiY"),j=i("DGaY");const $=["st"],R=function(){return{xs:8,sm:8,md:8,lg:24,xl:48,xxl:48}},I={0:{text:"\u4e0d\u53ef\u7528",color:"red"},1:{text:"\u53ef\u7528",color:"green"}},T=[{path:"list",component:(()=>{class t{constructor(t,e,i,n,s){this.http=t,this.modal=e,this.msg=i,this.modalSrv=n,this.cdr=s,this.url="/job/list",this.totalUrl="/job/count",this.name="",this.originPerpage=15,this.page=1,this.perpage=this.originPerpage,this.total=0,this.pagination={front:!1,position:"bottom",placement:"right",show:!0,total:!0},this.loading=!1,this.columns=[{title:"\u4efb\u52a1\u540d\u79f0",index:"name",sort:"name"},{title:"Shell\u547d\u4ee4",index:"command"},{title:"Crontab \u8868\u8fbe\u5f0f",index:"cronExpr"},{title:"\u670d\u52a1\u5668\u5730\u5740",index:"ipList"},{title:"\u72b6\u6001",index:"status",type:"tag",tag:I},{title:"\u64cd\u4f5c",buttons:[{text:"\u6267\u884c",click:t=>{this.http.post("/job/exec",(new a.h).set("name",t.name)).subscribe(()=>{this.msg.success(`\u6267\u884c${t.name}\u6210\u529f`)})}},{text:"\u7f16\u8f91",type:"modal",modal:{paramsName:"record"},component:x,click:t=>{this.modal.create(x,{record:t},{size:"md"}).subscribe(()=>{this.st.reload()})}},{text:"\u5220\u9664",click:t=>{this.http.get(`/job/delete?name=${t.name}`).subscribe(()=>{this.msg.success(`\u5220\u9664${t.name}\u6210\u529f`),this.st.reload()})}},{text:"\u5f3a\u6740",click:t=>{this.http.get(`/job/kill?name=${t.name}`).subscribe(()=>{this.msg.success(`\u5f3a\u6740${t.name}\u6210\u529f`)})}}]}],this.expandForm=!1}ngOnInit(){this.getData()}getData(){this.getList(),this.getTotal()}getList(){this.http.get(this.url,{page:this.page,perpage:this.perpage,name:this.name}).subscribe(t=>{this.data=t,this.cdr.detectChanges()})}getTotal(){this.http.get(this.totalUrl,{name:this.name}).subscribe(t=>{this.total=t.hasOwnProperty("count")?t.count:0,this.cdr.detectChanges()})}add(){this.modal.createStatic(y,{record:{show:!1,title:"\u6dfb\u52a0\u4efb\u52a1"}},{size:"md"}).subscribe(()=>{this.msg.success("\u4efb\u52a1\u6dfb\u52a0\u6210\u529f"),this.st.reload()})}reset(){setTimeout(()=>{this.name="",this.getData()})}change(t){"click"!==t.type&&"dblClick"!==t.type&&"loaded"!==t.type&&("pi"===t.type||"ps"===t.type?(this.page=t.pi,this.perpage=t.ps,this.getList()):(this.page=t.pi,this.perpage=t.ps,this.getData()))}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(o.p),c.Rb(o.i),c.Rb(r.e),c.Rb(b.c),c.Rb(c.h))},t.\u0275cmp=c.Lb({type:t,selectors:[["app-job-list"]],viewQuery:function(t,e){if(1&t&&c.Pc($,3),2&t){let t;c.xc(t=c.fc())&&(e.st=t.first)}},decls:23,vars:19,consts:[[3,"title"],[3,"nzBordered"],["nz-col","",3,"nzSpan"],["nz-form","",1,"search__form",3,"nzLayout","ngSubmit"],["nz-row","",3,"nzGutter"],["nz-col","","nzMd","12","nzSm","24"],["nzFor","no"],["nz-input","","name","name","placeholder","\u8bf7\u8f93\u5165","id","name",3,"ngModel","ngModelChange"],["nz-button","","type","submit",3,"nzType","nzLoading"],["nz-button","","type","reset",1,"mx-sm",3,"click"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","plus"],[3,"data","columns","loading","pi","ps","total","page","change"],["st",""]],template:function(t,e){1&t&&(c.Sb(0,"page-header",0),c.Xb(1,"nz-card",1),c.Xb(2,"div",2),c.Xb(3,"form",3),c.ec("ngSubmit",function(){return e.getData()}),c.Xb(4,"div",4),c.Xb(5,"div",5),c.Xb(6,"nz-form-item"),c.Xb(7,"nz-form-label",6),c.Lc(8,"\u4efb\u52a1\u540d\u79f0"),c.Wb(),c.Xb(9,"nz-form-control"),c.Xb(10,"input",7),c.ec("ngModelChange",function(t){return e.name=t}),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(11,"div",2),c.Xb(12,"button",8),c.Lc(13,"\u67e5\u8be2"),c.Wb(),c.Xb(14,"button",9),c.ec("click",function(){return e.reset()}),c.Lc(15,"\u91cd\u7f6e"),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(16,"div",2),c.Xb(17,"button",10),c.ec("click",function(){return e.add()}),c.Sb(18,"i",11),c.Xb(19,"span"),c.Lc(20,"\u6dfb\u52a0"),c.Wb(),c.Wb(),c.Wb(),c.Xb(21,"st",12,13),c.ec("change",function(t){return e.change(t)}),c.Wb(),c.Wb()),2&t&&(c.qc("title","\u67e5\u8be2\u8868\u683c"),c.Db(1),c.qc("nzBordered",!1),c.Db(1),c.qc("nzSpan",18),c.Db(1),c.qc("nzLayout","inline"),c.Db(1),c.qc("nzGutter",c.sc(18,R)),c.Db(6),c.qc("ngModel",e.name),c.Db(1),c.qc("nzSpan",e.expandForm?24:12),c.Db(1),c.qc("nzType","primary")("nzLoading",e.loading),c.Db(4),c.qc("nzSpan",6),c.Db(1),c.qc("nzType","primary"),c.Db(4),c.qc("data",e.data)("columns",e.columns)("loading",e.loading)("pi",e.page)("ps",e.perpage)("total",e.total)("page",e.pagination))},directives:[X.a,w.a,D.a,W.s,W.m,W.n,S.b,D.c,S.c,S.d,S.a,k.b,W.d,W.l,W.o,m.a,u.a,h.a,q.a,j.a],encapsulation:2,changeDetection:0}),t})()},{path:"add",component:y}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({imports:[[v.m.forChild(T)],v.m]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({imports:[[n.b,C,s.b]]}),t})()}}]);