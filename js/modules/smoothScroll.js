export const smoothScroll = (scrollLink) => {
  document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll(scrollLink);

    scrollLinks.forEach(function (scrollLink) {
      scrollLink.addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href");
        var targetPosition = document.querySelector(targetId).offsetTop - 100;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    });
  });
};
