function Node(e){this.data=e,this.parent=null,this.children=[]}function Tree(e){var t=new Node(e);this._root=t}function render(){var e=document.querySelector(".container");e.innerHTML="",tree.traverseBF(function(e){e.html=document.createElement("div"),e.html.innerHTML=e.data,e.parent?e.parent.html.appendChild(e.html):e.html.classList.add("root")}),e.appendChild(tree._root.html)}function draw(e){return new Promise(function(t){function r(){n.html.classList.remove("highlight"),n=void 0,clearInterval(timer),timer=null}var n;timer=setInterval(function(){states.length?(n&&n.html.classList.remove("highlight"),n=states.shift(),e&&RegExp(e).test(n.data)&&n.html.classList.add("selected"),n.html.classList.add("highlight")):(r(),t(e))},500)})}function deal(e){return function(){if(timer)return alert("动画正在进行中");render();var t=getInput(),r=!1;e.call(tree,function(e){states.push(e),t&&RegExp(t).test(e.data)&&(r=!0)}),draw(t).then(function(e){t&&!r&&alert("没有找到与 "+e+" 匹配的节点。")})}}function getInput(){return document.querySelector("#search").value.trim()}function initEvent(){var e=document.querySelector("#dfs"),t=document.querySelector("#bfs");e.addEventListener("click",deal(tree.traverseDF)),t.addEventListener("click",deal(tree.traverseBF))}function init(){render(),initEvent()}Tree.prototype.traverseDF=function(e){!function t(r){r.children.forEach(function(e){t(e)}),e(r)}(this._root)},Tree.prototype.traverseBF=function(e){var t=[];for(t.push(this._root),currentTree=t.shift();currentTree;)currentTree.children.forEach(function(e){t.push(e)}),e(currentTree),currentTree=t.shift()},Tree.prototype.contains=function(e,t){t.call(this,e)},Tree.prototype.add=function(e,t,r){var n=new Node(e),o=null,i=function(e){e.data===t&&(o=e)};if(this.contains(i,r),!o)throw new Error("Cannot add node to a non-existent parent.");o.children.push(n),n.parent=o},Tree.prototype.remove=function(e,t,r){function n(e,t){var r;return e.forEach(function(e,n){e.data===t&&(r=n)}),r}var o,i=null,a=null,d=function(e){e.data===t&&(i=e)};if(this.contains(d,r),!i)throw new Error("Parent does not exist.");if(o=n(i.children,e),void 0===o)throw new Error("Node to remove does not exist.");return a=i.children.splice(o,1)};var tree=new Tree("one");tree.add("two","one",tree.traverseBF),tree.add("three","one",tree.traverseBF),tree.add("four","one",tree.traverseBF),tree.add("five","two",tree.traverseBF),tree.add("six","two",tree.traverseBF),tree.add("seven","two",tree.traverseBF),tree.add("eight","four",tree.traverseBF),tree.add("nine","four",tree.traverseBF),tree.add("ten","eight",tree.traverseBF);var states=[],timer=null;init();