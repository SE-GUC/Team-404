(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),i=n.n(l),u=n(8),c=n(1),o=n(2),d=n(4),p=n(3),m=n(5),s=(n(16),n(9));var y={color:"#fff",textAlign:" center",padding:"5px",borderBottom:"5px #ccc dotted",borderRadius:"5px"},E=function(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null,"Application"))},f=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.applicationInfo.map(function(t){return a.a.createElement(h,{key:t.id,applicationInfo:t,delApplication:e.props.delApplication})})}}]),t}(r.Component),g=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.applicationInfo,t=e.id,n=e.candidate,r=e.partner,l=e.datetime,i=e.status,u=Object(s.a)(e.task,1)[0],c=u.Description,o=u.eta,d=u.levelofcommitment,p=u.monetarycompensation,m=u.skills,y=u.lifecyclestatus,E=u.experienceneeded,f=u.consultancy;return a.a.createElement("div",{style:b},a.a.createElement("p",null,a.a.createElement("table",null,a.a.createElement("th",{colSpan:"2"},a.a.createElement("h3",null,"Application Info")),a.a.createElement("th",{colSpan:"2"},a.a.createElement("h3",null,"Task Info")),a.a.createElement("tr",null,a.a.createElement("td",null,"ID"),a.a.createElement("td",null," ",t),a.a.createElement("td",null," Description "),a.a.createElement("td",null," ",c)),a.a.createElement("tr",null,a.a.createElement("td",null,"Candidate"),a.a.createElement("td",null,n),a.a.createElement("td",null," eta "),a.a.createElement("td",null," ",o)),a.a.createElement("tr",null,a.a.createElement("td",null," Partner"),a.a.createElement("td",null," ",r),a.a.createElement("td",null," levelofcommitment "),a.a.createElement("td",null," ",d)),a.a.createElement("tr",null,a.a.createElement("td",null," Date-Time"),a.a.createElement("td",null," ",l),a.a.createElement("td",null," Skills "),a.a.createElement("td",null," ",m)),a.a.createElement("tr",null,a.a.createElement("td",null,"Status "),a.a.createElement("td",null," ",i),a.a.createElement("td",null," monetarycompensation "),a.a.createElement("td",null," ",p)),a.a.createElement("tr",null,a.a.createElement("td",null," "),a.a.createElement("td",null," "),a.a.createElement("td",null," lifecyclestatus "),a.a.createElement("td",null," ",y)),a.a.createElement("tr",null,a.a.createElement("td",null," "),a.a.createElement("td",null," "),a.a.createElement("td",null," experienceneeded "),a.a.createElement("td",null,E)),a.a.createElement("tr",null,a.a.createElement("td",null," "),a.a.createElement("td",null," "),a.a.createElement("td",null," consultancy "),a.a.createElement("td",null," ",f))),a.a.createElement("button",{onClick:this.props.delApplication.bind(this,t),style:q},"X")))}}]),t}(r.Component)),q={background:"#f00",color:"#fff",padding:"10px",borderRadius:"50%",float:"right",marginBottom:"40px"},b={background:"#4F5AF6",padding:"5px 10px",borderRadius:"5px",borderBottom:"1px",margin:"5px",marginBottom:"20px"},h=g,S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={application:[{id:1,candidate:"asd",partner:"asdasd",datetime:"qqq",status:"333",task:[{Description:"{ type: String, required: true }",eta:"{ type: Number, required: true }",levelofcommitment:"{ type: String, required: true, unique: false }",monetarycompensation:"{ type: Number, required: true }",skills:"{ type: String, required: true }",lifecyclestatus:"{ type: String, required: true }",experienceneeded:"{ type: String, required: true }",consultancy:"{ type: String, required: true }"}]},{id:2,candidate:"asd",partner:"asdasd",datetime:"qqq",task:[{Description:"{ type: String, required: true }",eta:"{ type: Number, required: true }",levelofcommitment:"{ type: String, required: true, unique: false }",monetarycompensation:"{ type: Number, required: true }",skills:"{ type: String, required: true }",lifecyclestatus:"{ type: String, required: true }",experienceneeded:"{ type: String, required: true }",consultancy:"{ type: String, required: true }"}],status:"333"}],candidate:[],partner:[],task:[{Description:"{ type: String, required: true }",eta:"{ type: Number, required: true }",levelofcommitment:"{ type: String, required: true, unique: false }",partner:"{ type: String, required: true }",monetarycompensation:"{ type: Number, required: true }",skills:"{ type: String, required: true }",lifecyclestatus:"{ type: String, required: true }",experienceneeded:"{ type: String, required: true }",consultancy:"{ type: String, required: true }"},{Description:"{ type: String, required: true }",eta:"{ type: Number, required: true }",levelofcommitment:"{ type: String, required: true, unique: false }",partner:"{ type: String, required: true }",monetarycompensation:"{ type: Number, required: true }",skills:"{ type: String, required: true }",lifecyclestatus:"{ type: String, required: true }",experienceneeded:"{ type: String, required: true }",consultancy:"{ type: String, required: true }"}]},n.delApplication=function(e){n.setState({application:Object(u.a)(n.state.application.filter(function(t){return t.id!==e}))})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:k},a.a.createElement(E,null),a.a.createElement(f,{applicationInfo:this.state.application,delApplication:this.delApplication})))}}]),t}(r.Component),k={border:"10px",borderRadius:"10px",background:"#9D9FB9",margin:"auto",paddingBottom:"1px"},v=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.931334b4.chunk.js.map