$("document").ready(() => {
  var imageIndex = 1;
  var img = $(".header-img-right");

  function fadeOutAndIn() {
    img.fadeTo(500, 0, function () {
      setTimeout(function () {
        img.attr("src", "/assets/img/estudios-header-" + imageIndex + ".jpg"); // Change the image source
        img.fadeTo(500, 1); // Fade in the new image
        imageIndex = (imageIndex % 3) + 1; // Loop through 1, 2, 3

        setTimeout(fadeOutAndIn, 3000); // Call the function again after 3 seconds
      }, 500); // Delay of 500ms before changing the image source
    });
  }

  fadeOutAndIn(); // Start the initial fade out and in
});
