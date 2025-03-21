// 遍历所有正在运行的脚本引擎
engines.all().forEach(function(engine) {
    // 获取脚本引擎对应的文件名
    var scriptFileName = engine.getSource().toString();
    
    // 检查文件名是否包含"Floating.js"
    if (scriptFileName.includes("Floating2.js")) {
        console.log("找到并准备停止脚本: " + scriptFileName);
        
        // 尝试停止该脚本
        try {
            engine.forceStop();
            console.log("已成功停止脚本: " + scriptFileName);
        } catch (e) {
            console.error("停止脚本时出错: " + e.message);
        }
    }
});

console.log("脚本搜索和停止过程完成。");
engines.execScriptFile("Floating2.js");