(this.webpackJsonptesla=this.webpackJsonptesla||[]).push([[0],{31:function(n,e,t){},32:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s,l,d=t(0),j=t.n(d),x=t(8),b=t.n(x),h=(t(31),t(32),t(2)),g=t(25),O=t(3),p=t(21),f=t.n(p),u=t(24),m=t.n(u),v=t(10),w=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),y=function(n){return n.car.cars},k=w.reducer,T=t(9),B=t(1);var S,I,C,E,M,P,R,A=O.a.div(i||(i=Object(h.a)(["\n    min-height: 60px;\n    position: fixed;\n    display: flex;\n    align-items:center;\n    justify-content: space-between;\n    padding: 0 20px;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n\n"]))),D=O.a.div(r||(r=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    a {\n        font-weight: 600;\n        text-transform: UPPERCASE;\n        padding: 0 10px;\n        flex-wrap: nowrap;\n    }\n    @media(max-width: 768px){\n        display:none\n    }\n"]))),z=O.a.div(c||(c=Object(h.a)(["\n    display:flex;\n    align-items: center;\n        a {\n        font-weight: 600;\n        text-transform: UPPERCASE;\n        margin-right: 10px;\n        }\n"]))),L=Object(O.a)(f.a)(a||(a=Object(h.a)(["\n    cursor: pointer;\n"]))),U=Object(O.a)(m.a)(o||(o=Object(h.a)(["\n    cursor: pointer;\n"]))),X=O.a.div(s||(s=Object(h.a)(["\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: white;\n    width: 300px;\n    z-index: 16;\n    list-style: none;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n    transform: ",";\n    transition: transform 0.2s ;\n        li {\n            padding: 15px 0;\n            border-bottom: 1px solid rgba(0,0,0, 0.2);\n\n            a {\n                font-weight: 600;\n            }\n        }\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),J=O.a.div(l||(l=Object(h.a)(["\n    display: flex;\n    justify-content: flex-end;\n"]))),N=function(){var n=Object(d.useState)(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],r=Object(T.b)(y);return Object(B.jsxs)(A,{children:[Object(B.jsx)("a",{children:Object(B.jsx)("img",{src:"/images/logo.svg"})}),Object(B.jsx)(D,{children:r&&r.map((function(n){return Object(B.jsx)("a",{href:"",children:n})}))}),Object(B.jsxs)(z,{children:[Object(B.jsx)("a",{href:"#",children:"Shop"}),Object(B.jsx)("a",{href:"#",children:"Tesla Account"}),Object(B.jsx)(L,{onClick:function(){return i(!0)}})]}),Object(B.jsxs)(X,{show:t,children:[Object(B.jsx)(J,{children:Object(B.jsx)(U,{onClick:function(){return i(!1)}})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Used Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Trade-in"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Cybertruck"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Roadaster"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"https://github.com/maayaankk",children:"Github"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"https://www.instagram.com/header.js/",children:"@headerJS"})})]})]})},Y=t(12),G=t.n(Y);var q,F=O.a.div(S||(S=Object(h.a)(["\n    width: 100vw;\n    height:100vh;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n"])),(function(n){return'url("/images/'.concat(n.bgImage,'")')})),H=O.a.div(I||(I=Object(h.a)(["\n    padding-top: 15vh;\n    text-align: center;\n"]))),K=O.a.div(C||(C=Object(h.a)(["\n    display:flex;\n    margin-bottom: 30px;\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),Q=O.a.div(E||(E=Object(h.a)(["\n    background-color: rgba(23, 26, 32, 0.8);\n    height: 40px;\n    width: 256px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 100px;\n    opacity: 0.85;\n    text-transform: UPPERCASE;\n    font-size: 12px;\n    cursor: pointer;\n    margin: 8px;\n"]))),V=Object(O.a)(Q)(M||(M=Object(h.a)(["\n    background-color: white;\n    color: black;\n    opacity: 0.65;\n"]))),W=O.a.img(P||(P=Object(h.a)(["\n    margin-top: 20px;\n    height: 40px;\n    animation: animateDown infinite 1.5s;\n    overflow-x: hidden;\n"]))),Z=O.a.div(R||(R=Object(h.a)(["\n\n"]))),$=function(n){var e=n.title,t=n.discription,i=n.backgroundImg,r=n.leftBtnText,c=n.rightBtnText;return Object(B.jsxs)(F,{bgImage:i,children:[Object(B.jsx)(G.a,{bottom:!0,children:Object(B.jsxs)(H,{children:[Object(B.jsx)("h1",{children:e}),Object(B.jsx)("p",{children:t})]})}),Object(B.jsxs)(Z,{children:[Object(B.jsx)(G.a,{bottom:!0,children:Object(B.jsxs)(K,{children:[Object(B.jsx)(Q,{children:r}),c&&Object(B.jsx)(V,{children:c})]})}),Object(B.jsx)(W,{src:"/images/down-arrow.svg"})]})]})};var _=O.a.div(q||(q=Object(h.a)(["\n    height: 100vh;\n    \n"]))),nn=function(){return Object(B.jsxs)(_,{children:[Object(B.jsx)($,{title:"Model S",discription:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),Object(B.jsx)($,{title:"Model Y",discription:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),Object(B.jsx)($,{title:"Model 3",discription:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),Object(B.jsx)($,{title:"Model X",discription:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing inventory"}),Object(B.jsx)($,{title:"Lowest Cost Solar Panels",discription:"Money-Back guarantee",backgroundImg:"solar-panel.jpg",leftBtnText:"Order now",rightBtnText:"Learn now"}),Object(B.jsx)($,{title:"Solar for New Roofs",discription:"Solar Roof Costs Less Than a New Roof Plus Solar Planel",backgroundImg:"solar-roof.jpg",leftBtnText:"Order now",rightBtnText:"Learn now"}),Object(B.jsx)($,{title:"Accessories",discription:"",backgroundImg:"accessories.jpg",leftBtnText:"Shop now",rightBtnText:""})]})};var en=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(N,{}),Object(B.jsx)(nn,{})]})},tn=Object(v.a)({reducer:{car:k}});b.a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(T.a,{store:tn,children:Object(B.jsx)(en,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c0f4e32d.chunk.js.map