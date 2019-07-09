/**
  * @created : 2019/05/29
  * @author : penghuoyan
  * @desc : 应用公用功能封装
*/
(function(w){
	class m{
		constructor(){
			this.immersiveFlag = true;//是否开启沉浸式状态栏
			this.domain = '123.26.26.1';
			this.port = '9000/wap',
			this.protocol = 'http';
			this.host = this.protocol + '://' + this.domain + ':' + this.port;
		}
	}
	/**
	* @description 插件初始化，统一处理部分兼容问题
	* @param callback{Function} 回调函数
	* @return
	* @author penghuoyan
	*/
	m.prototype.read = function(callback){
		var this_ = this;
		w.apiready = function(){
			//解析单击事件，解决iso单击300秒延迟
			api.parseTapmode();
			let header = document.getElementById('header');
			let footer = document.getElementById('footer')
      		if ( header ) {//沉浸式状态栏头部处理
       			this_.immersiveFlag && this_.fixStatusBar(header);
			}
			if (footer){//沉浸式状态栏脚部处理
				this_.fixFooterBar(footer)
			}
     		if(callback) callback();
		}
	}
	/**
	* @description 沉浸式状态栏处理
	* @param el{Element} 头部标签
	* @return
	* @author penghuoyan
	*/
	m.prototype.fixStatusBar = function(el){
		if (!this.isElement(el)) {
            console.warn('fixStatusBar Function need el param, el param must be DOM Element');
            return;
		}
		el.style.paddingTop = api.safeArea.top + 'px';
	}

	/**
	* @description 沉浸式状态栏处理
	* @param el{Element} 头部标签
	* @return
	* @author penghuoyan
	*/
	m.prototype.fixFooterBar = function(el){
		if (!this.isElement(el)) {
            console.warn('fixFooterBar Function need el param, el param must be DOM Element');
            return;
		}
		el.style.paddingBottom = api.safeArea.bottom + 'px';
	}
	/**
	* @description 获取头部高度
	* @param
	* @return
	* @author penghuoyan
	*/
	m.prototype.getHeaderHeight = function(){
		//0.9头部高度 0.9rem
		return  0.9*fontSize + api.safeArea.top
	}
	/**
	 * @description 打开新窗口
	 * @param options{JSON} 打开窗口所需参数
	 * @return
	 * @author penghuoyan
	 */
	m.prototype.openWin = function(options) {
		if (!options) return;
		var isoFlag = api.systemType === 'ios', delay = isoFlag && !options['delay'] ? 0 : 200;
		options['delay'] = delay;
		options.slidBackEnabled = false;
		options.bounces = false;
		options.bgColor = "#fff"
		api.openWin(options);
	}
	/**
	 * @description 打开Frame窗体
	 * @param options{JSON} 打开窗口所需参数,与官方参数一直
	 * @return
	 * @author penghuoyan
	 */
	m.prototype.openFrame = function(options) {
		if (!options) return;
		api.openFrame(options);
	}
	/**
	 * @description 打开FrameGroup
	 * @param options{JSON} 所需参数,与官方参数一直
	 * @param callback{Function} 打开成功后回调函数
	 * @return
	 * @author penghuoyan
	 */
	m.prototype.openFrameGroup = function(options, callback) {
		if (!options) return;
		api.openFrameGroup(options, function(ret, err) {
			callback && callback(ret, err);
		});
	}
	/**
	* @description 判断当前对象是否为标签
	* @param obj{Object}
	* @return boolean
	* @author penghuoyan
	*/
	m.prototype.isElement = function(obj){
        return !!(obj && obj.nodeType == 1);
	}
	/**
	* @description 设置状态栏颜色
	* @param color {String} white/dark
	* @return
	* @author penghuoyan
	*/
	m.prototype.setStatusBarStyle = function(color){
		api.setStatusBarStyle({
            style: color=='white' ? 'white' : 'dark',
        });
	}
	/**
	* @description 官方提示消息封装
	* @param msg{String} 消息内容
	* @param time{Number} 消息显示时长（毫秒），默认2s
	* @return
	* @author penghuoyan
	*/
	m.prototype.toast = function(msg, time) {
		if (!msg) return;
		api.toast({
			msg : msg,
			duration : time || 2000,
			location : 'middle'
		});
	}
	m.prototype.ajax = function(options){
		var _this = this;
		 if (api.connectionType == 'none') {
            _this.toast('网络状态不佳，请稍后重试！');
            return;
        }
		//参数检查
        if (!options['url']) this.toast('地址不能为空');
        var errorFun=options['error'],successFun=options['success'];
        //请求默认数据处理
        options = this.dataHandler(options);
        delete options['error'];
		delete options['success'];
        api.ajax(options, function (ret, err) {
			console.log(`ajax sucess!!!`)
        	if ( ret && ret.code && ret.code=='100' ) {//请求成功正常返回
                successFun(ret)
            }else if(ret && ret.code=='-101'){//登录失效
            	//此处逻辑根据项目情况编写
            } else {//数据异常情况处理
        		if(!ret){
            		errorFun && typeof(errorFun) == 'function' ? errorFun(err) : _this.toast('服务器繁忙,请稍后再试')
            	}else{
            		errorFun && typeof(errorFun) == 'function' ? errorFun(ret,err) : _this.toast(ret.message)
            	}
            }
        });
	}

	/**
	* @description ajax请求默认数据处理
	* @param
	* @return
	* @author penghuoyan
	*/
	m.prototype.dataHandler = function(options){
		options['url'] = this.host + options['url'];
		options['method'] = options['type'] || 'post';
        options['timeout'] = options['timeout'] || 10;
        options['dataType'] = options['dataType'] || 'json';
        options['returnAll'] = options['returnAll'] || false;
//	    options['headers'] = {'Token': user?user.token:'','Content-Type': 'application/json' };
        options['cache'] = false;
        options['data'] = {};
        options['data']['body'] = options['data'] || {};
        options['data']['files'] = options['file'] || {};
        return options
	}
	/**
	* @description 打开公用头部
	* @param
	* @return
	* @author penghuoyan
	*/
	m.prototype.openCommonHeader = function(frameName,pageParam){
		this.openFrame({
			name: frameName,
		    url: 'widget://html/common/header.html',
		    rect: {
		        x: 0,
		        y: 0,
		        w: 'auto',
		        h: $App.getHeaderHeight()
		    },
		    pageParam: pageParam
		})
	}
	w.$App = new m();
})(window)
