function $(t){return document.querySelector(t)}function addAqiData(){var t=$("#aqi-city-input").value.trim(),a=$("#aqi-value-input").value.trim();return/^[A-Za-z\u4e00-\u9fa5]+$/.exec(t)?/^\d+$/.exec(a)?void(aqiData[t]=parseInt(a)):void alert("空气质量值必须是整数！"):void alert("城市名称只能使用中英文字符！")}function renderAqiList(){var t,a=$("#aqi-table");if(!isEmptyObj(aqiData)){var i="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";for(t in aqiData)aqiData.hasOwnProperty(t)&&(i+="<tr><td>"+t+"</td><td>"+aqiData[t]+"</td><td><button data-city="+t+">删除</button></td></tr>");a.innerHTML=i}}function isEmptyObj(t){return Object.keys(t).length?!1:!0}function addBtnHandle(){addAqiData(),renderAqiList()}function delBtnHandle(t){var a=t.target.dataset.city;delete aqiData[a],renderAqiList()}function init(){var t=$("#add-btn");t.addEventListener("click",addBtnHandle),$("#aqi-table").addEventListener("click",delBtnHandle)}var aqiData={};window.onload=init;