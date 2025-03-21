// 使用 java.io.File 类创建文件夹
var folderPath = "/sdcard/.ScriptX";
var folder = new java.io.File(folderPath);
if (!folder.exists()) {
    var success = folder.mkdirs();
    if (success) {
        console.log("文件夹已成功创建：" + folderPath);
    } else {
        console.log("文件夹创建失败：" + folderPath);
    }
} else {
    console.log("文件夹已存在：" + folderPath);
}

// 设置需要保护的文件或目录（白名单）
var whitelist = [
    /*"/sdcard/Download",
    "/sdcard/AGC.8.4",*/
    "/sdcard/.ScriptX"
];

// 创建日志文件
var logFilePath = "/sdcard/.ScriptX/deletion list.txt";
var logFile = new java.io.File(logFilePath);
if (!logFile.exists()) {
    logFile.createNewFile();
}
var logWriter = new java.io.FileWriter(logFile, true);

/**
 * 判断给定路径是否在白名单中。
 * @param path 文件或目录的路径。
 * @returns {boolean} 如果在白名单中返回true，否则返回false。
 */
function isInWhitelist(path) {
    for (var i = 0; i < whitelist.length; i++) {
        if (path.startsWith(whitelist[i])) {
            return true;
        }
    }
    return false;
}

/**
 * 删除非白名单内的文件或目录。
 * @param file 要检查的文件或目录。
 */
function deleteIfNotInWhitelist(file) {
    if (!isInWhitelist(file.getAbsolutePath())) {
        if (file.isDirectory()) {
            // 删除目录及其内容
            deleteFolderRecursive(file);
        } else {
            // 如果不是目录（即为文件），则删除
            file.delete();
            logWriter.write("已删除文件: " + file.getAbsolutePath() + "\n");
            logWriter.flush();
        }
    }
}

/**
 * 递归删除目录及其所有内容。
 * @param file 要删除的目录。
 */
function deleteFolderRecursive(file) {
    var filesInDir = file.listFiles();
    if (filesInDir != null && filesInDir.length > 0) {
        for (var i = 0; i < filesInDir.length; i++) {
            var f = filesInDir[i];
            if (f.isDirectory()) {
                deleteFolderRecursive(f);
            } else {
                f.delete();
                logWriter.write("已删除文件: " + f.getAbsolutePath() + "\n");
                logWriter.flush();
            }
        }
    }
    file.delete(); // 删除当前目录
    logWriter.write("已删除目录: " + file.getAbsolutePath() + "\n");
    logWriter.flush();
}

/**
 * 自定义过滤器，允许列出所有文件（包括隐藏文件）。
 */
var allFilesFilter = new java.io.FilenameFilter({
    accept: function(dir, name) {
        return true; // 接受所有文件
    }
});

/**
 * 处理单个目标目录。
 * @param dir 目标目录。
 */
function processDirectory(dir) {
    var rootFile = new java.io.File(dir);

    // 获取目标目录下的所有文件和子目录（包括隐藏文件）
    var filesArray = rootFile.listFiles(allFilesFilter);

    if (filesArray != null) {
        for (var i = 0; i < filesArray.length; i++) {
            var currentFile = filesArray[i];
            deleteIfNotInWhitelist(currentFile);
        }
    } else {
        console.log("无法读取目标目录：" + dir);
    }
}

// 指定多个目标目录
var targetDirs = [
    "/sdcard/",         // 第一个目标目录
    "/sdcard/"
];

// 遍历所有目标目录并处理
targetDirs.forEach(function(targetDir) {
    processDirectory(targetDir);
});

logWriter.close();
toast("清理完成");

