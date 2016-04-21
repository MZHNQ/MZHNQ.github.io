function $(t,e){return e?e.querySelector(t):document.querySelector(t)}function getType(t){return Object.prototype.toString.call(t).match(/\s(.+)\]/)[1].toLowerCase()}function css(t,e,a){if(!t.nodeType)return null;var n;{if("object"!==getType(e))return a?("function"===getType(a)&&(n=!0),void(t.style[e]=n?a(t,css(t,e)):a)):t.currentStyle?t.currentStyle[e]:getComputedStyle(t)[e];for(var r in e)e.hasOwnProperty(r)&&css(t,r,e[r])}}function getDateStr(t){var e=t.getFullYear(),a=t.getMonth()+1;a=10>a?"0"+a:a;var n=t.getDate();return n=10>n?"0"+n:n,e+"-"+a+"-"+n}function randomBuildData(t){for(var e={},a=new Date("2016-01-01"),n="",r=1;92>r;r++)n=getDateStr(a),e[n]=Math.ceil(Math.random()*t),a.setDate(a.getDate()+1);return e}function renderChart(){function t(){switch(pageState.nowGraTime){case"day":return 10;case"week":return 50;case"month":return 150}}function e(t){return 50>=t?"#6eb720":100>=t?"#d6c60f":150>=t?"#ec7e22":200>=t?"#df2d00":300>=t?"#b414bb":"#000"}var a,n=$(".aqi-chart-wrap");n.innerHTML="";var r=document.createElement("div");n.appendChild(r);for(a in chartData)if(chartData.hasOwnProperty(a)){var i=document.createElement("span");css(i,{display:"inline-block",width:t()+"px",height:chartData[a]+"px",background:e(chartData[a]),marginRight:"1px"}),i.title=a,r.appendChild(i)}}function graTimeChange(t){var e;if("input"===t.target.tagName.toLowerCase()){if(e=t.target.value,pageState.nowGraTime===e)return;pageState.nowGraTime=e,chartData=setAqiChartData(),renderChart()}}function citySelectChange(t){var e=parseInt(t.target.value);e!==pageState.nowSelectCity&&(pageState.nowSelectCity=e,chartData=setAqiChartData(),renderChart())}function initGraTimeForm(){$("#form-gra-time").addEventListener("click",graTimeChange)}function initCitySelector(){var t=$("#city-select"),e=Object.keys(aqiSourceData);t.innerHTML=e.map(function(t,e){return"<option value="+e+">"+t+"</option>"}).join(""),t.addEventListener("change",citySelectChange)}function setAqiChartData(){function t(){return-1===pageState.nowSelectCity?"":Object.keys(aqiSourceData)[pageState.nowSelectCity]}function e(t){function e(){var e,n={week:"周",month:"月"};a.forEach(function(a,o){e=i.splice(0,a).map(function(e){return t[e]}).reduce(function(t,e){return t+e}),r[o+1+n[pageState.nowGraTime]]=Math.floor(e/a)})}var a,n,r={},i=Object.keys(t);switch(pageState.nowGraTime){case"week":a=[3],n=i.length-3,a.length=Math.ceil(n/7),a.fill(7,1).push(n%7),e();break;case"month":a=[31,29,31],e();break;default:r=t}return r}var a=aqiSourceData[t()];return a=a&&e(a),a||{}}function initAqiChartData(){chartData=setAqiChartData()}function init(){initGraTimeForm(),initCitySelector(),initAqiChartData()}var aqiSourceData={"北京":randomBuildData(500),"上海":randomBuildData(300),"广州":randomBuildData(200),"深圳":randomBuildData(100),"成都":randomBuildData(300),"西安":randomBuildData(500),"福州":randomBuildData(100),"厦门":randomBuildData(100),"沈阳":randomBuildData(500)},chartData={},pageState={nowSelectCity:0,nowGraTime:"day"};window.onload=init;