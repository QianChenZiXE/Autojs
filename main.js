// 获取设备的UI对象，这是使用Auto.js进行界面操作的基础
"ui";

// 设置状态栏的颜色为 #00897B，改变状态栏的视觉效果
ui.statusBarColor("#FF167B7F");

// 获取设备屏幕的宽度和高度
var screenWidth = device.width;
var screenHeight = device.height;

// 尝试获取设备的DPI
var screenDpi = 440; // 默认值
try {
    screenDpi = device.displayMetrics.densityDpi;
} catch (e) {
    console.error("无法获取设备DPI，使用默认值440");
}

// 定义基准分辨率和DPI
var baseWidth = 1080; // 基准宽度
var baseHeight = 2460; // 基准高度
var baseDpi = 440; // 基准DPI

// 调整相对宽度计算方式，基于当前设备宽度、基准宽度和DPI比例计算
function getRelativeWidth(width) {
    return Math.round(width * screenWidth * screenDpi / (baseWidth * baseDpi));
}

// 调整相对高度计算方式，基于当前设备高度、基准高度和DPI比例计算
function getRelativeHeight(height) {
    return Math.round(height * screenHeight * screenDpi / (baseHeight * baseDpi));
}


// 构建UI布局，使用垂直布局容器（vertical）来组织界面元素
ui.layout(
    <vertical padding="0">

/*软件名称顶部*//*软件名称顶部*//*软件名称顶部*/
        <View h={getRelativeHeight(35)} bg="#FF167B7F"/>
        <text 
            textSize={getRelativeHeight(30)} 
            gravity="center" 
            textColor="#ffffff" 
            bg="#FF167B7F" 
            textStyle="bold" 
            text="Script X" 
            margin={`0 ${getRelativeHeight(0)} 0 0`} />

        <View h={getRelativeHeight(35)} bg="#FF167B7F"/>
        <View h={getRelativeHeight(1)} bg="#FF898989"/>
        <View h={getRelativeHeight(1)} bg="#FF898989"/>
        
/*装饰图标介绍区域*//*装饰图标介绍区域*//*装饰图标介绍区域*/
        <View h={getRelativeHeight(40)} />
        <vertical>
        <vertical>
        <img margin={getRelativeWidth(0) + " " + getRelativeHeight(-20)}
            h={getRelativeWidth(180)}
            w={getRelativeWidth(180)}  
            layout_gravity="center" 
            src="file://image/is_launcher.png" 
            id="logo" />
        <View h={getRelativeHeight(-30)} />
        <horizontal margin={getRelativeWidth(153) + " " + getRelativeHeight(0)} >
        <text 
            textSize={getRelativeHeight(26)} 
            gravity="center" 
            textColor="black" 
            textStyle="bold" 
            text="Auto" />
        <text 
            margin={getRelativeWidth(0) + " " + getRelativeHeight(0)}
            textSize={getRelativeHeight(26)} 
            gravity="center" 
            textColor="black" 
            textStyle="bold"
            textColor="#FF167B7F" 
            text="J" />
            <text 
            margin={getRelativeWidth(0) + " " + getRelativeHeight(0)}
            textSize={getRelativeHeight(26)} 
            gravity="center" 
            textColor="black" 
            textStyle="bold"
            text="s" />
        </horizontal>
        <text 
            textSize={getRelativeHeight(15)} 
            gravity="center" 
            textColor="#FF898989" 
            textStyle="bold" 
            text="便捷 改变 生活" />
        </vertical>
        </vertical>
/*按钮布局区域*//*按钮布局区域*//*按钮布局区域*/
        <View h={getRelativeHeight(50)} />
        <button 
            w={Math.min(getRelativeWidth(250), screenWidth * 0.8)} 
            id="ButtonA" 
            layout_gravity="center" 
            textStyle="bold" 
            backgroundTint="#FF167B7F" 
            textSize={getRelativeHeight(15)} 
            textColor="#ffffff" 
            text="悬 ㉿ 浮" 
            />
        <View h={getRelativeHeight(10)} />
        <horizontal>
            <button 
                w={Math.min(getRelativeWidth(120), screenWidth * 0.3)} 
                id="ButtonB" 
                margin={getRelativeWidth(70) + " " + getRelativeHeight(0)} 
                textStyle="bold" 
                backgroundTint="#FF167B7F" 
                textSize={getRelativeHeight(15)} 
                textColor="#ffffff" 
                text="Base64⁺" 
                />
            <button 
                w={Math.min(getRelativeWidth(120), screenWidth * 0.3)} 
                id="ButtonC" 
                margin={getRelativeWidth(-60) + " " + getRelativeHeight(0)} 
                textStyle="bold" 
                backgroundTint="#FF167B7F" 
                textSize={getRelativeHeight(15)} 
                textColor="#ffffff" 
                text="应用☍启动" 
                />
        </horizontal>
        
        <View h={getRelativeHeight(10)} />
        <horizontal>
            <button 
                w={Math.min(getRelativeWidth(250), screenWidth * 0.8)} 
                id="ButtonD" 
                margin={getRelativeWidth(70) + " " + getRelativeHeight(0)} 
                textStyle="bold" 
                backgroundTint="#FF167B7F" 
                textSize={getRelativeHeight(15)} 
                textColor="#ffffff" 
                text="垃圾∅清理" 
                />
            
        </horizontal>

/*作者信息区域*//*作者信息区域*//*作者信息区域*/
        <View h={getRelativeHeight(30)} />
        
        <text 
            textSize={getRelativeHeight(20)} 
            gravity="center" 
            textColor="black" 
            textStyle="bold" 
            id="ButtonF"
            text="" />
        <text 
            textSize={getRelativeHeight(15)} 
            gravity="center" 
            textColor="#FF898989" 
            textStyle="bold" 
            text="千塵の子" />
        <text 
            textSize={getRelativeHeight(15)} 
            gravity="center" 
            textColor="#FF898989" 
            textStyle="bold" 
            text="浮生萬緒 恍若千塵" />
        <text 
            textSize={getRelativeHeight(15)} 
            gravity="center" 
            textColor="#FF898989" 
            textStyle="bold" 
            text="定制版 v2.0.1" />
        <View h={getRelativeHeight(-50)} />
        
        <horizontal>
        <button 
                h={getRelativeWidth(60)}
                w={getRelativeWidth(60)} 
                bg="file://image/ic_launcher.png"
                id="ButtonR" 
                margin={getRelativeWidth(300) + " " + getRelativeHeight(0)} 
                textStyle="bold" 
                textColor="#ffffff" 
                textSize="40sp"
                text="" 
                />
          </horizontal>
/*底部封条控件区域*//*底部封条控件区域*//*底部封条控件区域*/
        
        <View h={getRelativeHeight(60)} />  
        <View h={getRelativeHeight(1)} bg="#FF898989"/> 
        <View h={getRelativeHeight(1)} bg="#FF898989"/>
        <View h={getRelativeHeight(10)} bg="#FF167B7F"/> 
        <text 
            textSize={getRelativeHeight(25)} 
            id="ButtonS" 
            gravity="center" 
            textColor="#ffffff" 
            bg="#FF167B7F" 
            textStyle="bold" 
            text="" 
            />
        <View h={getRelativeHeight(30)} bg="#FF167B7F"/>
        </vertical>
);



/*监听事件区域*//*监听事件区域*//*监听事件区域*/
ui.ButtonA.click(function () {
    device.vibrate(30);
    engines.execScriptFile("targetFile.js");
});

ui.ButtonR.click(function () {
    device.vibrate(30);
    engines.execScriptFile("Exit.js");
});

ui.ButtonD.click(function () {
    device.vibrate(30);
    engines.execScriptFile("Dir.js");
});

ui.ButtonB.click(function () {
    device.vibrate(30);
    engines.execScriptFile("Base64.js");
});

ui.ButtonC.click(function () {
    device.vibrate(30);
    engines.execScriptFile("launchapp.js");
});

ui.logo.click(function () {
    device.vibrate(400);
});
