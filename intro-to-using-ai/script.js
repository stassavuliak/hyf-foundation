// create variables
const colorButton = document.querySelector("#color-button");
const portraitImage = document.querySelector("#portrait-image");

// show portrait function
function showPortrait() {
  portraitImage.classList.add("is-visible");
}

// check image load
if (portraitImage.complete && portraitImage.naturalWidth > 0) {
  showPortrait();
} else {
  portraitImage.addEventListener("load", showPortrait);
}

// check suitable device for cursor animation
const canUsePointerEffect = window.matchMedia(
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
).matches;

if (canUsePointerEffect) {
  window.addEventListener("pointermove", function (event) {
    const portraitBounds = portraitImage.getBoundingClientRect();
    const portraitCenterX = portraitBounds.left + portraitBounds.width / 2;
    const portraitCenterY = portraitBounds.top + portraitBounds.height / 2;
    const distanceX = event.clientX - portraitCenterX;
    const distanceY = event.clientY - portraitCenterY;
    const distance = Math.hypot(distanceX, distanceY);
    const effectRadius = 240;

    if (distance < effectRadius && distance > 0) {
      const strength = 1 - distance / effectRadius;
      const pullX = (distanceX / distance) * strength * 10;
      const pullY = (distanceY / distance) * strength * 10;

      portraitImage.style.setProperty("--pull-x", `${pullX}px`);
      portraitImage.style.setProperty("--pull-y", `${pullY}px`);
    } else {
      portraitImage.style.setProperty("--pull-x", "0px");
      portraitImage.style.setProperty("--pull-y", "0px");
    }
  });
}

// random bg color by clicking the button
colorButton.addEventListener("click", function () {
  const randomHue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${randomHue}, 35%, 92%)`;

  document.body.style.backgroundColor = randomColor;
});
