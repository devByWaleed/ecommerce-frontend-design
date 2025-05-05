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



// Function For Toggling The Arrow
function toggleSection(header) {
    const upArrow = `
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0.294983L0 6.29498L1.41 7.70498L6 3.12498L10.59 7.70498L12 6.29498L6 0.294983Z" fill="#8B96A5"/>
      </svg>
  `;

    const downArrow = `
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 7.70502L12 1.70502L10.59 0.295013L6 4.87502L1.41 0.295013L0 1.70502L6 7.70502Z" fill="#8B96A5"/>
      </svg>
  `;

    const content = header.nextElementSibling;
    const arrowIcon = header.querySelector("svg");

    // Toggle content visibility
    content.classList.toggle("hidden");

    // Swap arrow icon
    arrowIcon.innerHTML = content.classList.contains("hidden")
        ? downArrow
        : upArrow;
}

const listBtn = document.getElementById("listBtn");
const gridBtn = document.getElementById("gridBtn");
const container = document.querySelector(".product-container");
const pagination = document.querySelector(".bottom-controls");


listBtn.addEventListener("click", () => {
    container.classList.remove("grid-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    pagination.classList.remove("grid");
});

document.addEventListener("DOMContentLoaded", () => {
    container.classList.remove("grid-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    pagination.classList.remove("grid");
});

// Event To Change Layout To Grid
gridBtn.addEventListener("click", () => {
    container.classList.add("grid-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    pagination.classList.add("grid");
});