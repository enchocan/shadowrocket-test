// Shadowrocket response-script execution probe. No response modification.
try {
  $notification.post("YouTube 脚本测试", "执行成功", "已命中 youtubei.googleapis.com 请求");
  console.log("[YouTube diagnostic] response script executed");
} catch (e) {
  console.log("[YouTube diagnostic] " + String(e));
}
$done({});
