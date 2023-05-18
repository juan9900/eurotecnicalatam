$(document).ready(() => {
  console.log("hello");
  // ABOUT US TEXT
  const sectionHowItWorks = $(".section-how-it-works");
  var waypointAbout = new Waypoint({
    element: sectionHowItWorks,
    handler: function (direction) {
      $(".steps-img").addClass(
        "animate__animated animate__backInRight animate__slow"
      );
    },
    offset: 0,
  });
});
