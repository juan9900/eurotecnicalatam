const laboratories = {
  mx: {
    country: "México",
    laboratory: "BrexPharma",
    web: "",
    logoPath: "",
  },
  pa: {
    country: "Panamá",
    laboratory: "Alo Implantes",
    web: "https://www.aloimplantes.com",
    logoPath: "/assets/img/laboratorio-panama.png",
  },
  co: {
    country: "Colombia",
    laboratory: "Promed Quirúrgicos",
    web: "https://www.promed.com.co",
    logoPath: "/assets/img/laboratorio-colombia.png",
  },
  ec: {
    country: "Ecuador",
    laboratory: "Ormedic",
    web: "https://www.ormedic.com.ec",
    logoPath: "/assets/img/laboratorio-ecuador.png",
  },
  ar: {
    country: "Argentina",
    laboratory: "South America Implants S.A.",
    web: "",
    logoPath: "",
  },
};
const setCountryData = (country) => {
  laboratories[country].logoPath === ""
    ? $("#laboratory-img").css("display", "none")
    : $("#laboratory-img").css("display", "block");

  laboratories[country].web === ""
    ? $("#laboratory-web").css("display", "none")
    : $("#laboratory-web").css("display", "block");

  if (
    laboratories[country].web === "" ||
    laboratories[country].logoPath === ""
  ) {
    $(".laboratory-info-header").css("fontSize", "1.5em");
    $("#laboratory-name").css("fontSize", "1.5em");
  } else {
    $(".laboratory-info-header").css("fontSize", "1em");
    $("#laboratory-name").css("fontSize", "1em");
  }

  $("#selected-country").text(laboratories[country].country);
  $("#laboratory-img").attr("src", laboratories[country].logoPath);
  $("#laboratory-web-link")
    .attr("href", laboratories[country].web)
    .text(laboratories[country].web);
  $("#laboratory-name").text(laboratories[country].laboratory);
};

$(".country-list-item").on("click", function () {
  $(".elegible").removeClass("active");
  const country = $(this).attr("data-country");
  setCountryData(country);
  $(`#${country.toString()}`).addClass("active");
});

$(".elegible").on("click", function () {
  const country = $(this).attr("id");
  setCountryData(country);
  $(".elegible").removeClass("active");
  $(this).addClass("active");
});

$(".country-list-item").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(".map-container").offset().top,
    },
    100
  );
});
