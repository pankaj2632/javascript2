// Array created that contains the images and their properties
const galleryItems = [
    {
        large: "flowers-purple-large.jpg",
        small: "flowers-purple-small.jpg",
        alt: "Sentmaring Park",
        caption: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany"
    },
    {
        large: "flowers-yellow-large.jpg",
        small: "flowers-yellow-small.jpg",
        alt: "Sunflowers",
        caption: "Sunflowers in the Dernekamp hamlet, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany"
    },
    {
        large: "flowers-white-large.jpg",
        small: "flowers-white-small.jpg",
        alt: "Daffodils",
        caption: "Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany"
    },
    {
        large: "flowers-pink-large.jpg",
        small: "flowers-pink-small.jpg",
        alt: "Market",
        caption: "Flower stand at the market in Münster, North Rhine-Westphalia, Germany"
    },
    {
        large: "flowers-red-large.jpg",
        small: "flowers-red-small.jpg",
        alt: "Poppies",
        caption: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany"
    }
];

// Select the thumbnails from the unordered list, tha main image and the caption 
const thumbnailList = document.querySelector('#gallery ul');
const featuredImage = document.querySelector('figure img');
const figcaption = document.querySelector('figure figcaption');

// Function to display a featured image based on the index
function displayFeaturedImage(index) {
    const item = galleryItems[index];
    
    // Set the featured image and caption
    featuredImage.src = item.large;
    featuredImage.alt = item.alt;
    figcaption.textContent = item.caption;

    // Update the thumbnail styles
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Populate the thumbnail list
galleryItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    
    img.src = item.small;
    img.alt = item.alt;
    img.width = 240;
    img.height = 160;
    img.classList.add('thumbnail');

    // Add a click event to update the featured image
    img.addEventListener('click', () => displayFeaturedImage(index));

    listItem.appendChild(img);
    thumbnailList.appendChild(listItem);
});

// Display the first image by default
displayFeaturedImage(0);