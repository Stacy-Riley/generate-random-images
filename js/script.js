const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//Async function to pull images from api 
const getImage = async function(){
    let res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json()
    
    // console.log(images);
    selectRandomImage(images);
};

//Function to create a random number to get at an image's index number
const selectRandomImage = function(images){
    const randomIndex = Math.floor(Math.random() * images.length)
    // console.log(randomIndex);
    const randomImage = images[randomIndex];
    // console.log(randomImage);

    displayImage(randomImage);
}

//Function to display the image, and author information
const displayImage = function(randomImage){
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}

//Function to display image and author only when button is clicked
button.addEventListener("click", function(){
    getImage();
})