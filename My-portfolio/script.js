// Show or hide the navigation links on small screens
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    const menuIsOpen = navLinks.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", menuIsOpen);
});

// Close the mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
