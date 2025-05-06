// Graping Icons
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const sidebar = document.getElementById("left-section");

// Add classList To Open Sidebar
menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Remove classList To Close Sidebar
closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");

});