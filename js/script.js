{
    const welcome = () => {
        console.log("Hey, Hi, Hello! :)");
    };

    const toggleBackground = () => {
        const body = document.querySelector("body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--special");
        themeName.innerText = body.classList.contains("body--special") ? "jasne" : "ciemne";
    };

    const toggleMotto = () => {
        const changeMottoTextButton = document.querySelector(".js-mottoTextButton");
        const motto = document.querySelector(".js-motto");

        motto.classList.toggle("hide");
        changeMottoTextButton.innerText = motto.classList.contains("hide") ? "Pokaż" : "Ukryj";
    };

    const togglePhoto = () => {
        const changeImageTextButton = document.querySelector(".js-textImageButton");
        const photo = document.querySelector(".js-image");

        photo.classList.toggle("hide");
        changeImageTextButton.innerText = photo.classList.contains("hide") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const changeBodyColorButton = document.querySelector(".js-buttonChangeBodyColor");
        const hideMottoButton = document.querySelector(".js-hideMottoButton");
        const hidePhotoButton = document.querySelector(".js-hidePhotoButton");

        changeBodyColorButton.addEventListener("click", toggleBackground);
        hideMottoButton.addEventListener("click", toggleMotto);
        hidePhotoButton.addEventListener("click", togglePhoto);
        welcome();
    };
    init();
}