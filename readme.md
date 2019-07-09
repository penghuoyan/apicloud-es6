|-- css                          css文件夹
|   |-- fonts                    fonts字体样式文件夹                
|   |-- api.css                  apiclound官方css
|   |-- color.css                颜色样式
|   |-- common.css               公共样式
|   |-- flex.css                 自适应字体样式
|   |-- font.css                 字体大小样式
|-- html                         html文件夹
|   |-- common                   公共页面文件
|   |  |-- header.html           头部HTML文件
|   |  |-- test.html             
|   |-- demo                     demo文件夹
|   |  |-- demo_1_tap.html       页面头部
|   |  |-- demo_1.html           页面内容
|   |  |-- demo_2_tap.html
|   |  |-- demo_2.html                  
|   |-- main                      首页4个frame文件
|   |  |-- frame_0.html  
|   |  |-- frame_1.html
|   |  |-- frame_2.html
|   |  |-- frame_3.html                        
|-- icon                         图标文件夹
|-- images                       图片文件夹
|-- parsed_scripts               编译之后的js存放文件夹  
|-- plugs                        存放自定义插件、三方插件（不需要编译的）
|   |-- rem
|   |  |-- auto_rem.js           自适应js文件
|-- scripts                      js文件夹(开发的代码编译后自动存放到parsed_scripts文件夹下)
|   |-- common                   
|   |  |-- header.js
|   |-- demo
|   |  |-- demo_1_tap.js
|   |  |-- demo_1.js
|   |  |-- demo_2_tap.js                 
|   |-- main
|   |  |-- frame_0.js
|   |  |-- frame_1.js
|   |  |-- frame_2.js
|   |  |-- frame_3.js
|   |-- api.js
|   |-- app.js                  项目统一功能封装文件
|   |-- index.js                
|-- wgt                         拓展文件夹
|-- config.xml                  配置文件
|-- index.html                  
|-- README.md                   项目说明


app.js方法描述
1.$App.read()----插件初始化，统一处理部分兼容问题;
2.$App.fixStatusBar()----沉浸式状态栏处理;
3.$App.fixFooterBar()----沉浸式状态栏处理;
4.$App.getHeaderHeight()----获取头部高度;
5.$App.openWin()----打开新窗口;
6.$App.openFrame()----打开Frame窗体;
7.$App.openFrameGroup()----打开FrameGroup;
8.$App.isElement()----判断当前对象是否为标签;
9.$App.setStatusBarStyle()----设置状态栏颜色;
10.$App.toast()----官方提示消息封装;
11.$App.ajax()----封装ajax;
12.$App.dataHandler()----ajax请求默认数据处理;
13.$App.openCommonHeader()----打开公用头部;