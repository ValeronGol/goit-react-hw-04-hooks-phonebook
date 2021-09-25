(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,b=t(1),u=t.n(b),d=t(9),s=t.n(d),l=t(8),j=t(4),f=t(23),O=t(2),p=t(3),x=p.a.div(r||(r=Object(O.a)(["\n  width: 300px;\n  padding: 20px;\n  display: block;\n  border: 1px solid #477405;\n"]))),m=p.a.button(a||(a=Object(O.a)(["\n  margin: 5px 10px;\n  background-color: #0a0131ab;\n  color: white;\n  border-radius: 7px;\n  border-color: #201068ab;\n  cursor: pointer;\n  transition-delay: 250ms;\n  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);\n  &:hover {\n    background-color: #5b5bbee6;\n    color: #0a0131ab;\n    border-color: #0a0131ab;\n  }\n"]))),h=p.a.label(c||(c=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n  height: 40px;\n"]))),g=p.a.input(o||(o=Object(O.a)(["\n  border-radius: 2px;\n\n  &:focus {\n    border-color: #4015fffb;\n    border-width: medium;\n  }\n"]))),v=t(0);function S(n){var e=Object(b.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1],c=Object(b.useState)(""),o=Object(j.a)(c,2),i=o[0],u=o[1],d={name:r,number:i},s=function(){a(""),u("")};return Object(v.jsx)(x,{children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.onSubmit(d),s()},children:[Object(v.jsxs)(h,{children:["Name",Object(v.jsx)(g,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(n){a(n.currentTarget.value)},value:r})]}),Object(v.jsxs)(h,{children:["Number",Object(v.jsx)(g,{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(n){u(n.currentTarget.value)},value:i})]}),Object(v.jsx)(m,{type:"submit",children:"Add contact"})]})})}var k,w,y,C=p.a.ul(i||(i=Object(O.a)(["\n  padding: 10px;\n  margin: 0;\n"]))),z=p.a.div(k||(k=Object(O.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),A=p.a.p(w||(w=Object(O.a)(["\n  margin-right: 10px;\n"]))),D=p.a.button(y||(y=Object(O.a)(["\n  border-radius: 3px;\n  transition-delay: 250ms;\n  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);\n  cursor: pointer;\n  &:hover {\n    background-color: #2d2db6e6;\n    color: #f4f3f7ab;\n    border-color: #0a0131ab;\n  }\n"]))),J=function(n){var e=n.name,t=n.number,r=n.id,a=n.onDelete;return Object(v.jsxs)(z,{children:[Object(v.jsx)(A,{children:"".concat(e,": ").concat(t)}),Object(v.jsx)(D,{"data-id":r,onClick:a,children:"Delete"})]})},T=function(n){var e=n.contacts,t=n.onDelete;return Object(v.jsx)(C,{children:e.map((function(n){var e=n.id,r=n.name,a=n.number;return Object(v.jsx)("li",{children:Object(v.jsx)(J,{id:e,name:r,number:a,onDelete:function(){return t(e)}})},e)}))})};T.defaultProps={contacts:[]};var N,E,F,I,Z=T,q=p.a.div(N||(N=Object(O.a)(["\n  padding-bottom: 10px;\n  height: 40px;\n"]))),B=p.a.h4(E||(E=Object(O.a)(["\n  margin: 5px 0;\n  font-size: 18px;\n  font-weight: 500;\n"]))),L=p.a.input(F||(F=Object(O.a)(["\n  border-radius: 2px;\n\n  &:focus {\n    border-color: #3493ff;\n    border-width: 4px;\n  }\n"])));function M(n){return Object(v.jsxs)(q,{children:[Object(v.jsx)(B,{children:"Find contacts by name"}),Object(v.jsx)(L,{onChange:function(e){n.setFilterToState(e.currentTarget.value.toUpperCase())}})]})}var P=p.a.div(I||(I=Object(O.a)(["\n  padding: 20px 50px;\n  margin-left: auto;\n  margin-right: auto;\n"])));function U(){var n=Object(b.useState)([]),e=Object(j.a)(n,2),t=e[0],r=e[1],a=Object(b.useState)(""),c=Object(j.a)(a,2),o=c[0],i=c[1],u="contacts";Object(b.useEffect)((function(){var n=localStorage.getItem(u),e=JSON.parse(n);e&&r(e)}),[]),Object(b.useEffect)((function(){localStorage.setItem(u,JSON.stringify(t))}),[t]);var d=t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return Object(v.jsxs)(P,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(S,{onSubmit:function(n){var e=n.name,t=n.number;r((function(n){var a={id:"".concat(Object(f.a)()),name:e,number:t};return n.find((function(n){return n.name===e}))?(alert("".concat(e," \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!")),Object(l.a)(n)):r((function(n){return[].concat(Object(l.a)(n),[a])}))}))}}),Object(v.jsx)("h1",{children:"Contacts"}),Object(v.jsx)(M,{setFilterToState:function(n){i("".concat(n))}}),Object(v.jsx)(Z,{contacts:d,onDelete:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})}t(20);s.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.088e80c0.chunk.js.map