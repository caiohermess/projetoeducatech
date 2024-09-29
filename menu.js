const links = document.querySelectorAll(".nav-list > li > a");

console.log("links", links);
links.forEach((link) => {
  const target = link.getAttribute("href");
  console.log("target", target);
  console.log("window.location.href", window.location.href);
  if (window.location.href.endsWith(target)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
