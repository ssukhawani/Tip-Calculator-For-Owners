(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var c=s(0),a=s(1),n=s.n(a),i=s(4),l=s.n(i),r=(s(14),s(3)),o=s(5),u=s(6),d=s(8),j=s(7),m=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var c;return Object(o.a)(this,s),(c=e.call(this,t)).clickhandler=function(){return c.setState({Customerlist:[].concat(Object(r.a)(c.state.Customerlist),[c.state.customerName]),totalTips:[].concat(Object(r.a)(c.state.totalTips),[c.state.tipAmt])})},c.clickhandler2=function(){if(0!==c.state.totalTips.length)var t=c.state.totalTips.reduce((function(t,e){return t+e}));else if(0===c.state.totalTips.length)return 0;return c.setState({totalCustomer:c.state.Customerlist.length,totalTipAmount:t})},c.state={Customerlist:[],billAmt:0,tipAmt:0,customerName:"",tipPercent:20,totalTips:[],totalCustomer:0,totalTipAmount:0},c}return Object(u.a)(s,[{key:"calculation",value:function(){var t=Number(document.getElementById("rangepercent").value);this.setState({tipPercent:t,tipAmt:this.state.billAmt*t/100}),document.getElementById("tipid").innerHTML=t+"%";document.getElementById("tipvalue").innerHTML={5:"bad",10:"Moderate",15:"Good",20:"Excellent"}[t]}},{key:"render",value:function(){var t=this,e=(new Date).getFullYear();return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("h1",{children:"Tip Calculator"}),Object(c.jsxs)("div",{className:"section1",children:[Object(c.jsxs)("div",{className:"bill",children:[Object(c.jsx)("label",{children:"Enter Bill Amount "}),Object(c.jsx)("input",{type:"number",placeholder:"Enter Bill Amount",required:!0,onChange:function(e){t.setState({tipAmt:e.target.value*t.state.tipPercent/100,billAmt:e.target.value})}})]}),Object(c.jsxs)("div",{className:"range",children:[Object(c.jsx)("label",{children:"How Was the Service?"}),Object(c.jsx)("input",{type:"range",min:"5",max:"20",step:"5",id:"rangepercent",onChange:function(){t.calculation()}})]}),Object(c.jsxs)("div",{className:"space-between",children:[Object(c.jsx)("label",{id:"tipvalue",children:"Excellent"}),Object(c.jsx)("span",{id:"tipid",children:"20%"})]}),Object(c.jsxs)("div",{className:"addCustomer",children:[Object(c.jsx)("input",{type:"text",placeholder:"Customer Name",required:!0,onChange:function(e){t.setState({customerName:e.target.value})}}),Object(c.jsx)("button",{onClick:function(){return t.clickhandler()},children:"Add Customer"})]})]}),Object(c.jsxs)("div",{className:"section2",children:[Object(c.jsx)("div",{className:"empty",children:Object(c.jsx)("h4",{children:"Customer List"})}),Object(c.jsx)("ul",{children:this.state.Customerlist.map((function(e,s){return Object(c.jsx)("li",{children:e+" Offering a tip of "+t.state.totalTips[s]+" Rupee"},s)}))})]}),Object(c.jsxs)("div",{className:"section3",children:[Object(c.jsx)("div",{className:"lastButton",children:Object(c.jsx)("button",{onClick:function(){return t.clickhandler2()},children:"Calculate Total Tip & Customers"})}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"space-between",id:"totalname",children:[Object(c.jsx)("label",{children:"Total Customers "}),Object(c.jsx)("label",{children:" Total Tip"})]}),Object(c.jsxs)("div",{className:"space-between",id:"values",children:[Object(c.jsxs)("span",{id:"totalCustomer",children:[this.state.totalCustomer," "]}),Object(c.jsxs)("span",{id:"totaltip",children:[" ",this.state.totalTipAmount]})]})]}),Object(c.jsx)("div",{className:"span",children:Object(c.jsxs)("span",{children:["\xa9 ",e," Tip Calculator"]})})]})}}]),s}(n.a.Component);s(15);var b=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(m,{})})};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a0eda49.chunk.js.map