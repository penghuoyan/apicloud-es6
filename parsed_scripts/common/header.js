"use strict";

/**
  * @created : 2019/05/29 
  * @author : penghuoyan
  * @desc : 公用头部
*/
$App.read(function () {
	//设置页面显示
	init();
	//添加事件监听
	addEvent();
});
/**
* @description 页面数据初始化
* @param 
* @return
* @author penghuoyan
*/
function init() {
	//写入打开页面时传入的标题
	if (api.pageParam.title) document.getElementById("title").textContent = api.pageParam.title;
	//写入打开页面时传入的操作按钮
	if (api.pageParam.actionName) document.getElementById("action").textContent = api.pageParam.actionName;
	//添加操作按钮点击事件
	if (api.pageParam.actionEvent) addActionEvent(api.pageParam.actionEvent);
}
/**
* @description 动态添加操作按钮点击事件
* @param eventName{String} 事件名称
* @return
* @author penghuoyan
*/
function addActionEvent(eventName) {
	document.getElementById("action").onclick = function () {
		api.sendEvent({
			name: eventName,
			extra: {} //根据需要可填写参数
		});
	};
}
/**
* @description 添加事件监听
* @param 
* @return
* @author penghuoyan
*/
function addEvent() {
	//设置所有打开状态下  头部页面的标题
	api.addEventListener({
		name: 'setAllCommonHeaderTitle'
	}, function (ret, err) {
		document.getElementById("title").textContent = ret.value.title;
	});
	//设置所有打开状态下  头部页面的操作按钮及操作功能
	api.addEventListener({
		name: 'setAllCommonHeaderAction'
	}, function (ret, err) {
		document.getElementById("action").textContent = ret.value.actionName;
		addActionEvent(ret.value.actionEvent);
	});
	//移除所有头部页面的操作按钮及操作功能
	api.addEventListener({
		name: 'removeAllHeaderAction'
	}, function (ret, err) {
		document.getElementById("action").textContent = '';
		document.getElementById("action").onclick = null;
	});
}