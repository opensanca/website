//to collapse the navbar on scroll
window.scroll(function () {
  if (document.getElementsByClassName(".navbar").offsetTop().top > 50) {
    document
      .getElementsByClassName(".navabar-fixed.top")
      .add("top-nav-collapse")
  } else {
    document
      .getElementsByClassName(".navabar-fixed.top")
      .remove("top-nav-collapse")
  }
})

//page scrolling
// document.scroll(function () {
//   document
//     .getElementsByClassName("a.page-scroll")
//     .bind("click", function (event) {
//       var $anchor = document.this;
//       window.getElementsByTagName("html, body").stop().animate({
//         scroll: document.$anchor.attribute("hreft").offsetTop.top
//       }, 1500,'easeInOutExpo');
//       event.preventDefault();
//     })
// })

//close the Responsive Menu on Menu Item Click
// document
//   .getElementsByClassName(".navbar-collapse ul li a")
//   .addEventListener("click", function () {
//    document.getElementsByClassName(".navbar-toggle:visible").addEventListener("click")
//   })

