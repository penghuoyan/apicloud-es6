'use strict';

/**
  * @created : 2019/05/29
  * @author : penghuoyan
  * @desc : 应用首页脚本
*/
$App.read(function () {
	$App.setStatusBarStyle('dark');
	openHeader();
	funIniGroup();
});
/**
* @description 打开公用头部页面
* @param
* @return
* @author penghuoyan
*/
var openHeader = function openHeader() {
	$App.openCommonHeader('indexHeader', { title: '云API' });
};
/**
* @description 加载首页4个页面
* @param
* @return
* @author penghuoyan
*/
var funIniGroup = function funIniGroup() {
	frames = [];
	for (var i = 0, len = 4; i < len; i++) {
		frames.push({
			name: 'frame_' + i,
			url: './html/main/frame_' + i + '.html',
			bgColor: 'rgba(255,255,255,1)',
			bounces: false
		});
	}
	$App.openFrameGroup({
		name: 'group',
		scrollEnabled: false,
		rect: {
			x: 0,
			y: $App.getHeaderHeight(),
			w: api.winWidth,
			h: api.winHeight - document.getElementById("footer").offsetHeight - $App.getHeaderHeight()
		},
		index: 0,
		frames: frames
	}, function (ret, err) {});
};
/**
* @description 脚本tab切换
* @param
* @return
* @author penghuoyan
*/
var randomSwitchBtn = function randomSwitchBtn(tag) {
	if (tag == $api.dom('#footer li.active')) return;
	var eFootLis = $api.domAll('#footer li'),
	    eHeaderLis = $api.domAll('header li'),
	    index = 0;
	for (var i = 0, len = eFootLis.length; i < len; i++) {
		if (tag == eFootLis[i]) {
			index = i;
		} else {
			$api.removeCls(eFootLis[i], 'active');
			$api.removeCls(eHeaderLis[i], 'active');
		}
	}
	$api.addCls(eFootLis[index], 'active');
	$api.addCls(eHeaderLis[index], 'active');
	api.setFrameGroupIndex({
		name: 'group',
		index: index
	});
	setHeader(index);
};
/**
* @description 设置头部信息
* @param
* @return
* @author penghuoyan
*/
var setHeader = function setHeader(index) {
	switch (index) {
		case 0:
			api.sendEvent({ name: 'setAllCommonHeaderTitle', extra: { title: '云API' } });
			api.sendEvent({ name: 'removeAllHeaderAction' });
			break;
		case 1:
			api.sendEvent({ name: 'setAllCommonHeaderTitle', extra: { title: '端API' } });
			api.sendEvent({ name: 'setAllCommonHeaderAction', extra: { actionName: '操作2', actionEvent: 'frame1Action' } });
			break;
		case 2:
			api.sendEvent({ name: 'setAllCommonHeaderTitle', extra: { title: '开发' } });
			api.sendEvent({ name: 'removeAllHeaderAction' });
			break;
		case 3:
			api.sendEvent({ name: 'setAllCommonHeaderTitle', extra: { title: '文档' } });
			api.sendEvent({ name: 'setAllCommonHeaderAction', extra: { actionName: '操作4', actionEvent: 'frame3Action' } });
			break;
		default:
			break;
	}
};