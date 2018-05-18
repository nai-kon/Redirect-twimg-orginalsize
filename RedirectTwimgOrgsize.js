let targetUrl = "https://pbs.twimg.com/media/*.jpg";

chrome.webRequest.onBeforeRequest.addListener(
  // ES2015のアロー関数で実装
  reqDetails => ({redirectUrl: reqDetails.url + ":orig"}),
  {urls:[targetUrl], types:["main_frame"]},
  ["blocking"]
);