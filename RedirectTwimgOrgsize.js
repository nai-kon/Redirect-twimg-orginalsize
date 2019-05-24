

chrome.webRequest.onBeforeRequest.addListener(

  reqDetails => ({ redirectUrl: reqDetails.url.replace(/&name=.*$/, "&name=orig") }),
      {
          urls: ["https://pbs.twimg.com/media/*&name=small",
                 "https://pbs.twimg.com/media/*&name=medium",
                 "https://pbs.twimg.com/media/*&name=large"],
          types: ["main_frame"]
      },
      ["blocking"]
);