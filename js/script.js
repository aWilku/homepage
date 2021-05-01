console.log("Witaj");

let changeBodyColorButton = document.querySelector(".js-buttonChangeBodyColor");
let body = document.querySelector("body")
let themeName = document.querySelector(".js-themeName")

changeBodyColorButton.addEventListener("click", () => {
    body.classList.toggle("body--special");
    themeName.innerText = body.classList.contains("body--special") ? "jasne" : "ciemne";
})

let hideMottoButton = document.querySelector(".js-hideMottoButton");
let changeMottoTextButton = document.querySelector(".js-mottoTextButton")
let motto = document.querySelector(".js-motto")

hideMottoButton.addEventListener("click", () => {
    motto.classList.toggle("hide");
    changeMottoTextButton.innerText = motto.classList.contains("hide") ? "Pokaż" : "Ukryj";
})

let hidePhotoButton = document.querySelector(".js-hidePhotoButton");
let changeImageTextButton = document.querySelector(".js-textImageButton")
let photo = document.querySelector(".js-image")

hidePhotoButton.addEventListener("click", () => {
    photo.classList.toggle("hide");
    changeImageTextButton.innerText = photo.classList.contains("hide") ? "Pokaż" : "Ukryj";
})
