'use strict';

/**
  * @created : 2019/05/29 
  * @author : penghuoyan
  * @desc : demo1头部，使用公用头部组件
*/
$App.read(function () {
	$App.openCommonHeader('demo1Header', { title: 'Demo1' });
	openContent();
});
/**
* @description 打开内容页
* @param 
* @return
* @author penghuoyan
*/
function openContent() {
	$App.openFrame({
		name: 'html/demo/demo1',
		url: 'widget://html/demo/demo1.html',
		rect: {
			x: 0,
			y: $App.getHeaderHeight(),
			w: 'auto',
			h: api.winHeight - $App.getHeaderHeight()
		}
	});
}