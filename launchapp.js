/*
 * 最简应用启动器 (2025.03.20)
 * 功能：输入名称/包名直接启动
 * 特点：3行核心代码，0依赖，即开即用
 */

// 1. 输入对话框（带历史记录）
let appId = rawInput("启动应用", "", "", ["微信", "支付宝", "com.tencent.mm"]);

// 2. 智能启动（名称+包名双模式）
if (appId) {
    launchApp(appId) || launchPackage(appId) || toast("❌ 应用不存在：" + appId);
}
