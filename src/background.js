chrome.browserAction.onClicked.addListener(tab => {
    console.log('AutoPhoto clicked!');
    chrome.tabs.executeScript({
        file: "autophoto.js"
    });
});