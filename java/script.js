// JavaScript to handle search functionality and tooltip
function toggleSearchBar() {
    var searchBar = document.getElementById("search-bar");
    searchBar.style.display = (searchBar.style.display === "none") ? "flex" : "none";
}

function performSearch() {
    // Implement your search logic here
    // You can use JavaScript to search for content on the website based on the input value
    // For simplicity, let's just log the input value to the console
    var searchInput = document.querySelector(".search-bar input").value;
    console.log("Searching for:", searchInput);
}

function showTooltip(text) {
    var tooltip = document.getElementById(text.toLowerCase() + "-tooltip");
    tooltip.style.display = "block";
}

function hideTooltip() {
    var tooltips = document.querySelectorAll(".tooltip");
    tooltips.forEach(function(tooltip) {
        tooltip.style.display = "none";
    });
}

function openEmailPage() {
    window.location.href = "mailto:y.wiaux@hw.ac.uk";
}