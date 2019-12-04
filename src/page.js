chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let video = document.querySelector("video");

  if (video) {
    if (request.action == "turn-on") {
      video.disablePictureInPicture = false;
      return video.requestPictureInPicture();
    }

    if (request.action == "turn-off") {
      return (video.disablePictureInPicture = true);
    }
  }
});
