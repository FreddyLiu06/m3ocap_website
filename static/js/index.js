// Smooth in page jump
document.addEventListener("click", function (e) {
  const link = e.target.closest(".jump-in-page");
  if (!link) return;

  e.preventDefault();

  const id = link.dataset.target;
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, "", "#" + id);
  }
});

$(document).ready(function () {
  // Open figures at full resolution in a new tab
  $(".paper-figure img, .teaser-image").click(function () {
    window.open(this.src, "_blank");
  });
})
