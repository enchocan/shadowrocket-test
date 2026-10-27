// Request-only diagnostic: does not read or modify YouTube responses.
try {
  $notification.post("YouTube 脚本测试", "请求脚本已执行", "命中 youtubei.googleapis.com");
  console.log("[YouTube diagnostic] HTTP request hook triggered");
} catch (e) { console.log("[YouTube diagnostic] " + String(e)); }
$done({});
