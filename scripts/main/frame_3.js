/**
  * @created : 2019/05/29
  * @author : penghuoyan
  * @desc : 首页文档页面
*/	
$App.read(function(){
	addEvent()
})

/**
* @description 添加事件监听
* @param 
* @return
* @author penghuoyan
*/
function addEvent(){
	api.addEventListener({
		name: 'frame3Action'
	}, function(ret, err) {
		alert('窗口4操作')
	});
}

/**
* @description ajax使用演示
* @param 
* @return
* @author penghuoyan
*/
function test(){
	return
	$App.ajax({
		url:'/sms/sendAuthCode',
		data:{
			mobile:'',
			fast:"1"
		},
		success:function(ret){
			//todo
		}
	})
}
