(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(20),i=n.n(a),c=(n(78),n(16)),s=n(17),l=function(){function e(t){Object(c.a)(this,e),this.board=t||[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}return Object(s.a)(e,[{key:"move",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e,a=t,i=!1;if(0!==this.board[e][t])return!1;for(var c=0,s=[[-1,-1],[-1,0],[-1,1],[0,1],[0,-1],[1,1],[1,-1],[1,0]];c<s.length;c++){var l=s[c],h=!1,u=!1;for(e=o,t=a;e+=l[0],t+=l[1],!(e<0||e>=8||t<0||t>=8);){if(this.board[e][t]===3-n&&(u=!0),this.board[e][t]===n){u&&(h=!0);break}if(0===this.board[e][t])break}if(h&&!r)for(;e-=l[0],t-=l[1],e!==o||t!==a;)this.board[e][t]=n;i=i||h}return i&&!r&&(this.board[o][a]=n,n=3-n,console.log("next color: ",1===n?"\u9ed1":"\u767d")),i}},{key:"checkPass",value:function(e){for(var t=0;t<8;t++)for(var n=0;n<8;n++)if(this.move(t,n,e,!0))return!1;return!0}},{key:"showWin",value:function(){var e=this.board.flat(),t=e.filter(function(e){return 1===e}).length,n=e.filter(function(e){return 2===e}).length;console.log("game over, black:".concat(t,", white:").concat(n,", ").concat(t>n?"Black Win":"White Win"))}},{key:"showCurrent",value:function(){var e=this.board.flat(),t=e.filter(function(e){return 1===e}).length,n=e.filter(function(e){return 2===e}).length;console.log("white: ",n,"\nblack: ",t)}},{key:"clone",value:function(){return new e(this.board.map(function(e){return e.slice()}))}},{key:"spaces",value:function(){return this.board.flat().filter(function(e){return 0===e}).length}}]),e}(),h=function(){function e(){Object(c.a)(this,e),this.patterns=[new l],this.colors=[1]}return Object(s.a)(e,[{key:"move",value:function(e,t){var n=this.pattern.clone(),r=this.color;n.move(e,t,r)&&(r=3-r,n.checkPass(r)&&(console.log("passed"),r=3-r,n.checkPass(r)&&n.showWin()),this.patterns.push(n),this.colors.push(r),n.showCurrent())}},{key:"revert",value:function(){this.patterns.length>1&&(this.patterns.pop(),this.colors.pop())}},{key:"reset",value:function(){this.patterns=[new l],this.colors=[1]}},{key:"pattern",get:function(){return this.patterns[this.patterns.length-1]}},{key:"color",get:function(){return this.colors[this.colors.length-1]}}]),e}(),u=n(70),f=n(62),v=n(71),p=n(128),m=(n(48),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).game=e.game,n.state={refresh:!1},n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"regret",value:function(){this.props.game.revert(),this.refresh()}},{key:"reset",value:function(){this.props.game.reset(),this.refresh()}},{key:"move",value:function(e,t){console.log(this.props.game),this.props.game.move(e,t),this.refresh()}},{key:"refresh",value:function(){this.setState({refresh:!this.state.refresh})}},{key:"constructBoard",value:function(){for(var e=[],t=0;t<8;t++){for(var n=0;n<8;n++)e.push(this.constructCell(t,n));e.push(o.a.createElement("br",{key:"br_".concat(t)}))}return e}},{key:"constructCell",value:function(e,t){var n=this.game.pattern.board[e][t],r="cell ".concat(1===n?"black":""," ").concat(2===n?"white":""," "),a=this.game.pattern.move(e,t,this.game.color,!0);return r+="".concat(a?"step":""," ").concat(a&&1===this.game.color?"black":""," ").concat(a&&2===this.game.color?"white":""),o.a.createElement("div",{className:r,onClick:this.move.bind(this,e,t),key:"cell_".concat(8*e+t)})}},{key:"render",value:function(){return o.a.createElement("div",{id:"container"},this.constructBoard(),o.a.createElement(p.a,{type:"default",onClick:this.regret.bind(this)},"\u6094\u68cb"),o.a.createElement(p.a,{type:"default",onClick:this.reset.bind(this)},"\u91cd\u65b0\u5f00\u59cb"))}}]),t}(o.a.Component));var d=function(){var e=new h;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(m,{game:e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,n){},73:function(e,t,n){e.exports=n(126)},78:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.cc4710c8.chunk.js.map