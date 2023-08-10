"use strict";(self.webpackChunkproject_phonebook=self.webpackChunkproject_phonebook||[]).push([[212],{26:function(n,e,t){t.d(e,{Fy:function(){return l},Gq:function(){return u},Sn:function(){return x},ar:function(){return d}});var r,a,o,i,c=t(168),s=t(444),u=s.ZP.form(r||(r=(0,c.Z)(["\n    max-width: fit-content;\n    padding: 20px 200px 20px 20px;\n    border-color: black;\n    border: 1px solid;\n"]))),d=s.ZP.label(a||(a=(0,c.Z)(["\n    display: block;\n    margin-bottom: 10px;\n"]))),l=s.ZP.input(o||(o=(0,c.Z)(["\n    display: block;\n    margin-top: 5px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #c8c5c5;\n"]))),x=s.ZP.button(i||(i=(0,c.Z)(["\n    border: none;\n    display: inline-block;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 12px;\n    font-family: Roboto, Verdana, Tahoma, sans;\n    padding: 12px 16px;\n    margin-top: 10px;\n    border-radius: 100px;\n    color: #fff;\n    background: #2196F3;\n    &:hover {\n        background: #39a1f4;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    }\n    &:active {\n        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n        background: #0d8aee;\n    }\n"])))},212:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a=t(168),o=t(444),i=o.ZP.div(r||(r=(0,a.Z)(["\n    max-width: 800px;\n    height: 100vh;\n    margin-left: auto;\n    margin-right: auto;\n    font-family: Roboto, Verdana, Tahoma, sans;\n    padding: 10px 25px;\n    background-color: white;\n"]))),c=t(885),s=t(984),u=t(26),d=t(791),l=t(434),x=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},f=function(n){var e=n.contacts,t=n.filter;if(!t)return e.items;var r=t.toLowerCase();return e.items.filter((function(n){return n.name.toLocaleLowerCase().includes(r)}))},h=t(194),m=t(184);var g,v,j=function(){var n=(0,d.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,d.useState)(""),o=(0,c.Z)(a,2),i=o[0],p=o[1],b=(0,l.v9)(x),f=(0,l.I0)(),g=function(n){switch(n.target.name){case"name":return r(n.target.value);case"number":return p(n.target.value);default:return}};return(0,m.jsxs)(u.Gq,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i};if(function(n){var e=n.name;return b.find((function(n){return n.name===e}))}(e))alert("".concat(e.name," is already in contacts"));else{var a=(0,h.uK)(e);f(a),r(""),p("")}},children:[(0,m.jsxs)(u.ar,{children:[" Name",(0,m.jsx)(u.Fy,{id:(0,s.x0)(),type:"text",name:"name",value:t,onChange:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)(u.ar,{children:[" Number",(0,m.jsx)(u.Fy,{type:"tel",name:"number",value:i,onChange:g,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)(u.Sn,{type:"submit",children:"Add contact"})]})},k=o.ZP.button(g||(g=(0,a.Z)(["\n    border: none;\n    display: inline-block;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 11px;\n    font-family: Roboto, Verdana, Tahoma, sans;\n    padding: 5px 12px;\n    margin-left: 10px;\n    border-radius: 100px;\n    color: #fff;\n    background: #9b59b6;\n    &:hover {\n        background: #a66bbe;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    }\n    &:active {\n        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n        background: #8f4bab;\n    }\n"]))),y=o.ZP.li(v||(v=(0,a.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 15px;\n    }\n"]))),w=function(n){var e=n.id,t=n.name,r=n.number,a=n.onClick;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(y,{children:[t,": ",r," ",(0,m.jsx)(k,{type:"button",onClick:function(){return a(e)},children:"Delite"})]})})},Z=function(){var n=(0,l.v9)(f),e=(0,l.I0)(),t=function(n){var t=(0,h.zY)(n);e(t)};return(0,m.jsx)("ul",{children:n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,m.jsx)(w,{id:e,name:r,number:a,onClick:t},e)}))})},C=function(n){return n.contacts.filter},F=t(300),P=function(){var n=(0,l.v9)(C),e=(0,l.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("label",{children:["Find contact by name",(0,m.jsx)(u.Fy,{type:"text",value:n,onChange:function(n){var t=n.target.value;e((0,F.T)(t))}})]})})},z=t(402);function A(){var n=(0,l.v9)(x),e=(0,l.v9)(p),t=(0,l.v9)(b),r=(0,l.I0)();return(0,d.useEffect)((function(){r((0,h.yF)())}),[r]),(0,m.jsxs)(i,{children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(j,{}),(0,m.jsx)("h2",{children:"Contacts"}),e&&(0,m.jsx)(z.s5,{strokeColor:"grey",width:"50"}),0!==n.length?(0,m.jsxs)("div",{children:[(0,m.jsx)(P,{}),(0,m.jsx)(Z,{})," "]}):(0,m.jsx)("p",{children:"There are no contacts in your Phonebook."}),t&&(0,m.jsx)("p",{children:"Something went wrong. We are working on it."})]})}function S(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(A,{})})}}}]);
//# sourceMappingURL=212.03a30632.chunk.js.map