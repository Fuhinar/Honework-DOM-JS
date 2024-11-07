const gallery = document.getElementById("gallery");
const fullViewContainer = document.getElementById("fullViewContainer");
const fullViewCloseButton = document.getElementById("fullViewCloseButton");
const fullViewImage = document.getElementById("fullViewImage");

const images = [
    "https://i.scdn.co/image/ab67616d0000b273a0dc0a610cfab0126ef12a57",
    "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_timeline_pic/23a77ffcfdb/2af80bf93e75f22b5390b/med_1672786304_image.jpg",
    "https://cdn-m.sport24.ru/m/0b33/f6f6/5077/4a65/94ab/5321/bffb/af15/1600_10000_max.jpeg",
    "https://i.scdn.co/image/ab67616d0000b273a0dc0a610cfab0126ef12a57",
    "https://attachments-cdn-s.coub.com/coub_storage/coub/simple/cw_timeline_pic/23a77ffcfdb/2af80bf93e75f22b5390b/med_1672786304_image.jpg",
    "https://cdn-m.sport24.ru/m/0b33/f6f6/5077/4a65/94ab/5321/bffb/af15/1600_10000_max.jpeg",
];

images.forEach((imgSrc) => {
    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.className = "gallery__image";

    imageElement.addEventListener("click", () => {
        fullViewImage.src = imgSrc;
        fullViewContainer.style.display = "flex";
    });

    gallery.appendChild(imageElement);
});

fullViewCloseButton.addEventListener("click", () => {
    fullViewContainer.style.display = "none";
});
