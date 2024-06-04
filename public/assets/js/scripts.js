console.log("hi");

const navTogglers = document.querySelectorAll(".nav__toggler");
navTogglers.forEach((item) => {
  item.addEventListener("click", () => {
    const nav = document.querySelector(".navbar .nav");
    nav.classList.toggle("active");
  });
});
