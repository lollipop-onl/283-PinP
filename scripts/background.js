chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "request-PinP",
    title: "Picture-in-Picture で開く",
    contexts: ["all"],
    documentUrlPatterns: ["https://shinycolors.enza.fun/*"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "request-PinP": {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        world: "MAIN",
        files: ["scripts/pinp.js"],
      });

      break;
    }
  }
});
