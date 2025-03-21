// 加密函数（改进版）
function encrypt(text, key) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        // 使用key[i % key.length]来循环使用密钥
        result += String.fromCharCode((text.charCodeAt(i) + key.charCodeAt(i % key.length)) % 65536);
    }
    return result;
}

// 解密函数（改进版）
function decrypt(text, key) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        // 同样使用key[i % key.length]来循环使用密钥，并确保结果为正值
        result += String.fromCharCode((text.charCodeAt(i) - key.charCodeAt(i % key.length) + 65536) % 65536);
    }
    return result;
}

// 获取输入
function getUserInput() {
    var input = prompt("请输入内容", "");
    if (!input) {
        alert("输入不能为空！");
        return null;
    }
    var mode = prompt("请选择模式（1加密/2解密）", "");
    var key = prompt("请输入密钥", "");
    if (!key) {
        alert("密钥不能为空！");
        return null;
    }
    return {text: input, mode: mode, key: key};
}

// 主逻辑
function main() {
    var userInput = getUserInput();
    if (!userInput) return;

    var result;
    if (userInput.mode === "1") {
        result = encrypt(userInput.text, userInput.key);
    } else if (userInput.mode === "2") {
        result = decrypt(userInput.text, userInput.key);
    } else {
        alert("模式错误！");
        return;
    }

    alert("结果：\n" + result);

    // 使用setClip指令复制到剪贴板
    try {
        setClip(result);
  
    } catch (e) {
        alert("复制失败：" + e.message);
    }
}


// 运行主程序
main();