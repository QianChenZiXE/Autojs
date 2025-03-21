// 目标目录路径
var targetDir = "/sdcard/.ScriptX";
// 目标文件路径
var targetFile = targetDir + "/ScriptX.js";

// 检查目录是否存在，不存在则创建
if (!files.exists(targetDir)) {
    files.createDir(targetDir);
}

// 检查文件是否存在，不存在则创建并写入空内容
if (!files.exists(targetFile)) {
    files.write(targetFile, "");
    console.log("文件已创建：" + targetFile);
    toast("ScriptX 创建中...");
} else {
    console.log("文件已存在：" + targetFile);
    engines.execScriptFile("Floating2.js");
}
