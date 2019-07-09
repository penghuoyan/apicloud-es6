/**
  * @created : 2019/05/29
  * @author : penghuoyan
  * @desc : 首页端API页面
*/	
$App.read(function(){
	addEvent()
})
function test(){
	$App.openWin({
		name:'html/demo/demo_2_tap',
		url:'widget://html/demo/demo_2_tap.html'
	})
}
/**
* @description 添加事件监听
* @param 
* @return
* @author penghuoyan
*/
function addEvent(){
	api.addEventListener({
		name: 'frame1Action'
	}, function(ret, err) {
		alert('窗口2操作')
	});
}