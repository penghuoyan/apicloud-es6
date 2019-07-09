/**
  * @created : 2019/05/29 
  * @author : penghuoyan
  * @desc : demo2头部，未使用公用头部组件，头部写在页面中
*/
$App.read(function(){
	openContent();
})
/**
* @description 打开内容页
* @param 
* @return
* @author penghuoyan
*/
function openContent(){
	$App.openFrame({
		name:'html/demo/demo2',
		url:'widget://html/demo/demo2.html',
		rect:{
			x:0,
			y:$App.getHeaderHeight(),
			w:'auto',
			h:api.winHeight-$App.getHeaderHeight()
		}
	})
}
