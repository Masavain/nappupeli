(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(31),c=n.n(s),i=(n(74),n(2)),o=n.n(i),u=n(7),l=n(59),p=n(60),f=n(66),d=n(61),m=n(67),h=n(33),g=n.n(h),v=n(11),w=n.n(v),b="/api/counters/5c5aafed153cf16a0d76c6fc",y=function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.put(b,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),k={getCounter:y,create:function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post(b,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),update:x},E={getAll:function(){return w.a.get("/api/winners").then(function(e){return e.data})},create:function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/winners",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},j=n(140),C=n(142),O=n(141),S=(n(36),n(138),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).componentWillMount=Object(u.a)(o.a.mark(function t(){var n,a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.getCounter();case 2:return n=t.sent,t.next=5,E.getAll();case 5:(a=t.sent).reverse(),r=a.slice(0,11),e.setState({count:n.state,pressed:!1,message:"",winners:r});case 9:case"end":return t.stop()}},t,this)})),e.changeWinCategory=function(){var t=Object(u.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({winCategory:n});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.press=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({pressed:!0});case 1:case"end":return t.stop()}},t,this)})),e.notifyWin=function(){var t=Object(u.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("t\xe4\xe4ll\xe4"),e.setState({toggle:!0,message:n});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(u.a)(o.a.mark(function t(n){var a,r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={name:n.target.name.value,date:new Date},t.next=4,E.create(a);case 4:return t.next=6,E.getAll();case 6:(r=t.sent).reverse(),s=r.slice(0,11),e.setState({message:"",toggle:!1,winners:s});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.deleteMessage=function(){var t=Object(u.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Yrit\xe4n poistaa lul"),n.preventDefault(),e.setState({toggle:!1,message:""});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.toggleLeaderboard=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({leaderboard:!e.state.leaderboard});case 1:case"end":return t.stop()}},t,this)})),e.clicker=Object(u.a)(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({count:e.state.count+10}),g()(e.state.endpoint).emit("increment",e.state.count),n={id:"5c5aafed153cf16a0d76c6fc",state:e.state.count+10},t.next=6,k.update(n);case 6:if(e.state.pressed){t.next=9;break}return t.next=9,e.press();case 9:if(e.state.count%100===0||!e.state.pressed){t.next=12;break}return t.next=12,e.changeWinCategory(100);case 12:if(e.state.count%200!==0||!e.state.pressed){t.next=15;break}return t.next=15,e.changeWinCategory(200);case 15:if(e.state.count%500!==0||!e.state.pressed){t.next=18;break}return t.next=18,e.changeWinCategory(500);case 18:e.state.count%e.state.winCategory===0&&e.state.pressed&&(console.log("Voitto"),100===e.state.winCategory&&e.notifyWin("You WIN a small prize!"),200===e.state.winCategory&&e.notifyWin("You WIN a medium prize!!"),500===e.state.winCategory&&e.notifyWin("You WIN a BIG prize!!!"));case 19:case"end":return t.stop()}},t,this)})),e.state={endpoint:"https://nappupeli.herokuapp.com/",count:0,winCategory:100,pressed:!1,toggle:!1,leaderboard:!1,winners:[],message:""},e}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;g()(this.state.endpoint).on("increment",function(t){e.setState({count:t+10})});return r.a.createElement("div",{style:{padding:10}},r.a.createElement("h2",{style:{position:"relative",padding:10}},"NappUpeli"),r.a.createElement("h2",{style:{position:"relative",padding:50}},100-this.state.count%100+"..."),r.a.createElement("div",{style:{position:"relative",left:30}}," clicks until next prize "),r.a.createElement(j.a,{bsSize:"sm",bsStyle:"danger",onClick:function(){return e.clicker()}},"nappu"),this.state.toggle?r.a.createElement(C.a,{style:{position:"relative",border:"solid",margin:10,padding:10,borderWidth:1,left:10,width:"300px"}},r.a.createElement("h3",null,this.state.message),r.a.createElement(O.a,{class:"col s12",style:{margin:4},onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(O.a.Group,{controlId:"name"},r.a.createElement(O.a.Control,{type:"text",placeholder:"enter name"})),r.a.createElement(j.a,{variant:"primary",type:"submit",style:{position:"relative"}},"Submit")),r.a.createElement("a",{style:{margin:4},class:"btn-floating btn-small waves-effect waves-light red",onClick:function(t){return e.deleteMessage(t)}},r.a.createElement("i",{class:"material-icons"},"cancel"))):r.a.createElement("div",null),r.a.createElement(j.a,{onClick:function(){return e.toggleLeaderboard()}},"Leaderboard"),r.a.createElement("div",null," ",this.state.leaderboard?r.a.createElement("ul",{class:"collection",style:{width:200}},this.state.winners.map(function(e){return r.a.createElement("li",{class:"collection-item"},e.name)})):r.a.createElement("div",null)," "))}}]),t}(a.Component));c.a.render(r.a.createElement(S,null),document.getElementById("root"))},69:function(e,t,n){e.exports=n(139)},74:function(e,t,n){}},[[69,2,1]]]);
//# sourceMappingURL=main.96ec9abb.chunk.js.map