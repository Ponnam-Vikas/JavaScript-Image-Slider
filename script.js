// Array of real image URLs
const images = [
    "https://picsum.photos/id/237/400/250", // Dog image
    "https://picsum.photos/id/1015/400/250", // Nature image
    "https://picsum.photos/id/1025/400/250", // Another nature image
    "https://picsum.photos/id/1035/400/250"  // City image
];

let currentIndex = 0; // Track current image index
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listener for Previous button
prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Event listener for Next button
nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize the slider with the first image
updateImage();
