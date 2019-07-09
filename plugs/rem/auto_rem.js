/**
  * @created : 2019/05/29
  * @author : penghuoyan
  * @desc : 根据手机屏幕大小、ui尺寸调整页面fontsize
*/
(function(doc){
	//设计稿分辨率
	var rWidth = 750;
	//设置缩放值
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			clientWidth = (clientWidth > rWidth) ? rWidth : clientWidth;
			docEl.style.fontSize = 100 * (clientWidth / rWidth) + 'px';
			window.fontSize = 100 * (clientWidth / rWidth);
		};
	if(!doc.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
	recalc();
})(document)
