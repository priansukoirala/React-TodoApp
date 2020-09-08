(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(6),i=n.n(s);n(13),n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),l=n(2),u=n(4),c=n(3),d=n(7),m=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={inputText:"",heading:t.props.heading,listItems:t.props.listItem,count:t.props.count+1,shouldHide:!1,buttonStatus:"-",defaultColor:"default",bgColorOptions:["red","purple","green","default"]},t}return Object(l.a)(n,[{key:"userInput",value:function(t){this.setState({inputText:t})}},{key:"addNewItem",value:function(t){this.setState({listItems:[].concat(Object(d.a)(this.state.listItems),[t]),inputText:""})}},{key:"deleteItem",value:function(t){var e=this.state.listItems;e.splice(t,1),this.setState({listItem:e})}},{key:"showHideToDoList",value:function(t){t?this.setState({shouldHide:!1,buttonStatus:"-"}):this.setState({shouldHide:!0,buttonStatus:"+"})}},{key:"changeBgColor",value:function(t){this.setState({defaultColor:t})}},{key:"shouldComponentUpdate",value:function(t,e){if(1===e.count)return!0}},{key:"componentDidUpdate",value:function(){console.log("Component did update")}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"ToDoList bg-".concat(this.state.defaultColor)},this.state.bgColorOptions.map((function(e){return o.a.createElement("button",{onClick:function(){return t.changeBgColor(e)},style:{backgroundColor:"".concat(t.state.bgColor)},className:"my-bg bg-".concat(e)})})),o.a.createElement("div",{className:"ToDoHeader"},o.a.createElement("h2",null,this.state.heading),o.a.createElement("button",{onClick:function(){return t.showHideToDoList(t.state.shouldHide)}},o.a.createElement("b",null,this.state.buttonStatus))),o.a.createElement("div",{className:this.state.shouldHide?"hiddenToDoContent":"shownToDoContent"},o.a.createElement("form",{onSubmit:function(){return t.addNewItem(t.state.inputText)}},o.a.createElement("input",{className:"inputText",placeholder:"New Item",type:"text",value:this.state.inputText,onChange:function(e){return t.userInput(e.target.value)},autoFocus:!0}),o.a.createElement("button",{className:"addButton ".concat("purple"===this.state.defaultColor?"bg-red":"red"===this.state.defaultColor?"bg-purple":"green"===this.state.defaultColor?"bg-default":"bg-green"),onClick:function(){return t.addNewItem(t.state.inputText)},disabled:!this.state.inputText},"+ ADD")),o.a.createElement("p",null,this.state.inputText),o.a.createElement("ul",null,this.state.listItems.map((function(e,n){return o.a.createElement("li",{key:n,className:t.state.isChecked?"striked":"unstriked"},e,o.a.createElement("input",{type:"checkbox"}),o.a.createElement("button",{className:"removeButton",onClick:function(){return t.deleteItem(n)}},"x"))})))))}}]),n}(a.Component),h=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={heading:"My",listItem:["My List"],count:0},t}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,{heading:this.state.heading,listItem:this.state.listItem,count:this.state.count}))}}]),n}(a.Component),p=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={heading:"Our",listItem:["Our Todo"],count:0},t}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,{heading:this.state.heading,listItem:this.state.listItem,count:this.state.count}))}}]),n}(a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",{className:"mainContainer"},o.a.createElement(h,null),o.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.808365b3.chunk.js.map