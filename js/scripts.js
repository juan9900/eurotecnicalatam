const btnHamburger = $("#btnHamburger");

const hamburgerSpans = $(".hamburger-span");
const navLinks = $(".nav-links");
$(btnHamburger).on("click", () => {
  console.log("clicked");
  $(hamburgerSpans).toggleClass("active");
  $(navLinks).toggleClass("active");
});

$("document").ready(() => {
  const currentYear = new Date().getFullYear();
  $("#footer-year").text(currentYear);
});
