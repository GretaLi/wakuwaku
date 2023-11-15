import { branchData } from "./data/data.js";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";

const navbar = document.querySelector("#header");
$(window).scroll(function (event) {
  // console.log($(window).scrollTop());
  if ($(window).scrollTop() > 0) {
    navbar.classList.add("header-bg");
  } else {
    navbar.classList.remove("header-bg");
  }
});

const owlBranch = $(".owl-carousel.branch__wrapper");
const owlTestimonial = $(".owl-carousel.testimonial__wrapper");
const owlBranchItems = document.querySelectorAll(".branch__item");

owlBranch
  .owlCarousel({
    loop: false,
    margin: 18,
    nav: true,
    center: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        center: false,
      },
      600: {
        items: 2,
        nav: false,
        center: false,
      },
      1110: {
        items: 4,
        nav: true,
        loop: false,
        center: false,
      },
    },
  })
  .on("changed.owl.carousel", (e) => {
    owlBranchItems.forEach((item) => {
      item.classList.remove("active");
    });
    owlBranchItems[e.item.index].classList.add("active");
    displayBranchInfo(e.item.index);
  });

owlBranchItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    owlBranchItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    displayBranchInfo(index);
  });
});

function displayBranchInfo(index) {
  const nameEl = document.querySelector("#info-name");
  const addEl = document.querySelector("#info-add");
  const telEl = document.querySelector("#info-tel");
  const timeEl = document.querySelector("#info-time");
  const mapEl = document.querySelector("#info-map");
  nameEl.textContent = branchData[index]["name"];
  addEl.textContent = branchData[index]["add"];
  telEl.textContent = branchData[index]["tel"];
  timeEl.innerHTML = getTimeHTML(index);
  mapEl.setAttribute("src", branchData[index]["src"]);

  function getTimeHTML(index) {
    let timeHTML = "";
    branchData[index]["time"].forEach((item) => {
      timeHTML += `<p class="branch__info-item-text">${item}</p>`;
    });
    return timeHTML;
  }
}

owlTestimonial.owlCarousel({
  stagePadding: 30,
  loop: true,
  margin: 20,
  nav: false,
  autoWidth: true,
  center: true,
  items: 2,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,

  smartSpeed: 400,
  autoplaySpeed: 2000,
});

AOS.init();
