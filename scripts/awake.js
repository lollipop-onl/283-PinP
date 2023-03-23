// disabling Page Visibility API

window.addEventListener(
  "visibilitychange",
  (e) => e.stopImmediatePropagation(),
  true
);
window.addEventListener("blur", (e) => e.stopImmediatePropagation(), true);
