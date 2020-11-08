(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,n){e.exports=n(43)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),o=n(6),l=n.n(o),i=n(7),u=n(2),d=n(3),p=n(5),m=n(4),h=(n(18),n(19),n(10)),f=(n(20),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={input:"",select:"All"},e.filter={All:function(){return!0},Completed:function(e){return e.completed},Active:function(e){return!e.completed}},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,a=t.selectUser,c=t.selectedUserId,s=this.state,o=s.input,l=s.select,i=n.filter((function(t){return t.title.includes(o)&&e.filter[l](t)}));return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("input",{type:"text",name:"input",value:o,className:"TodoList__input",onChange:this.handleChange}),r.a.createElement("select",{name:"select",value:l,className:"TodoList__input",onChange:this.handleChange},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Active"),r.a.createElement("option",null,"Completed")),r.a.createElement("ul",{className:"TodoList__list"},i.map((function(e){return r.a.createElement("li",{className:"TodoList__item ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),key:e.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,e.title)),c===e.userId?r.a.createElement("button",{className:"button",type:"button",onClick:function(){return a(0)}},"User\xa0#",e.id):r.a.createElement("button",{className:"button",type:"button",onClick:function(){return a(e.userId)}},"User\xa0#",e.id))})))))}}]),n}(r.a.Component)),v=n(11),E=n.n(v),_=(n(42),function(e){return fetch("".concat("https://mate-api.herokuapp.com/users","/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(this.props.userId);case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this;this.state.user.id!==this.props.userId&&_(this.props.userId).then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props.clearSelectedUser;return void 0===e.id?r.a.createElement("div",{className:"loader"},r.a.createElement(E.a,{type:"Circles",color:"purple",height:120,width:120,timeout:3e3})):r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(e.id))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",className:"CurrentUser__clear button",onClick:t},"Clear"))}}]),n}(r.a.Component),y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()})).then((function(e){return e.data}));case 2:t=e.sent,this.setState({todos:t.filter((function(e){return e.userId&&e.title}))});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,a=this.selectUser,c=this.clearSelectedUser;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(f,{todos:t,selectedUserId:n,selectUser:a})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(b,{userId:n,clearSelectedUser:c}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fc07a356.chunk.js.map