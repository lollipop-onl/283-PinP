const canvas = document.querySelector("canvas");
const video = document.createElement("video");

document.body.appendChild(video);

// hide video
video.style.position = "absolute";
video.style.width = 0;
video.style.height = 0;

// capture canvas stream
video.srcObject = canvas.captureStream();
video.muted = true;

video.play();

// hotkey
window.addEventListener("keydown", async (e) => {
  // Ctrl + Shift + P : toggle PinP
  if (e.ctrlKey && e.shiftKey && e.code === "KeyP") {
    e.stopImmediatePropagation();

    if (document.pictureInPictureElement === video) {
      await document.exitPictureInPicture();
    } else {
      await video.requestPictureInPicture();
    }
  }
});
