console.log("I'm Running!");
// @ts-expect-error
chrome.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
  // 바로 모든 Page 로딩되지 않을 수 있으므로, 페이지 로딩될때까지 1초 기다렸다가 찾음
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // @ts-expect-error
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    files: ['dist/content.js'],
  });
});
