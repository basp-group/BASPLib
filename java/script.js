// JavaScript to handle search functionality and tooltip

function performSearch() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous search results

    var pages = ['index.html', 'R2D2.html', 'AIRI.html', 'SARA_family.html', 'BUQO.html', 'EIRA.html'];

    pages.forEach(function(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');
                var pageContent = doc.body.innerText.toLowerCase();

                if (pageContent.includes(query)) {
                    var link = document.createElement('a');
                    link.href = page;
                    link.textContent = page;
                    searchResults.appendChild(link);
                    searchResults.appendChild(document.createElement('br'));
                }
            })
            .catch(error => console.error('Error fetching page:', error));
    });
}



// function toggleSearchBar() {
//     var searchBar = document.getElementById("search-bar");
//     searchBar.style.display = (searchBar.style.display === "none") ? "flex" : "none";
// }
//
// function performSearch() {
//     // Implement your search logic here
//     // You can use JavaScript to search for content on the website based on the input value
//     // For simplicity, let's just log the input value to the console
//     var searchInput = document.querySelector(".search-bar input").value;
//     console.log("Searching for:", searchInput);
// }

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




// main page slide
document.addEventListener('DOMContentLoaded', function () {
    const slides = ['images/slides/BASPLib.png','images/slides/30-doradus_0_3.png', 'images/slides/30_doradus_0_3_gdth.png', 'images/slides/30-doradus_0_3_dirty.png', 'images/slides/uv_30-doradus_0_3.png',
        'images/slides/Abell746_raw.png','images/slides/Abell746_gdth.png','images/slides/Abell746_dirty.png', 'images/slides/uv_Abell746.png',
        'images/slides/bio.png','images/slides/bio_gdth.png','images/slides/bio_dirty.png', 'images/slides/uv_bio.png',
        'images/slides/M87_clean.png','images/slides/M87_gdth.png','images/slides/M87_dirty.png', 'images/slides/uv_M87.png',]; // Add your slide images
    const mainSlidesContainer = document.getElementById('mainSlides');
    const thumbnailSlidesContainer = document.getElementById('thumbnailSlides');

    // Dynamically add slides and thumbnails
    slides.forEach((slide, index) => {
        const mainSlide = document.createElement('img');
        mainSlide.src = slide;
        mainSlidesContainer.appendChild(mainSlide);

        const thumbnail = document.createElement('img');
        thumbnail.src = slide;
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = () => showSlide(index);
        thumbnailSlidesContainer.appendChild(thumbnail);
    });

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = index;
        updateSlides();
        updateThumbnails();
    }

    function updateSlides() {
        const slides = document.querySelectorAll('.slideshow-container img');
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    function updateThumbnails() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
        updateThumbnails();
    }

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);

    // Initial setup
    updateSlides();
    updateThumbnails();
});


