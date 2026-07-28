// ===============================
// LIGHTBOX PHOTOS
// ===============================

const galleryPhotos = document.querySelectorAll(".album-card img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");


galleryPhotos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = photo.src;

    });

});


if(close){

    close.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}





// ===============================
// FILTRES PORTFOLIO
// ===============================


const buttons = document.querySelectorAll(".filters button");

const albums = document.querySelectorAll(".album-card");


buttons.forEach(button => {


    button.addEventListener("click", () => {


        const filter = button.dataset.filter;


        albums.forEach(album => {


            if(
                filter === "all" ||
                album.classList.contains(filter)
            ){

                album.style.display = "block";

            }

            else{

                album.style.display = "none";

            }


        });


    });


});






// ===============================
// RECHERCHE ALBUMS
// ===============================


const searchInput = document.getElementById("searchInput");


if(searchInput){


searchInput.addEventListener("input", () => {


    const search = searchInput.value.toLowerCase();


    albums.forEach(album => {


        const text = album.innerText.toLowerCase();


        if(text.includes(search)){


            album.style.display = "block";


        }

        else{


            album.style.display = "none";


        }


    });


});


}







// ===============================
// TRADUCTION JSON
// ===============================


let currentLanguage = "fr";


async function changeLanguage(language){


    currentLanguage = language;


    const response = await fetch(
    "languages/" + language + ".json"
);


    const translations = await response.json();




    // Textes

    document.querySelectorAll("[data-i18n]").forEach(element => {


        const key = element.dataset.i18n;


        if(translations[key]){


            element.textContent = translations[key];


        }


    });





    // Placeholders


    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {


        const key = element.dataset.i18nPlaceholder;


        if(translations[key]){


            element.placeholder = translations[key];


        }


    });



    document.documentElement.lang = language;


}







// ===============================
// ANIMATION ALBUMS
// ===============================


albums.forEach(album => {


    album.addEventListener("mouseenter", () => {


        album.style.transform = "scale(1.03)";

        album.style.borderColor = "red";


    });



    album.addEventListener("mouseleave", () => {


        album.style.transform = "scale(1)";

        album.style.borderColor = "#333";


    });



});







// ===============================
// LANGUE PAR DEFAUT
// ===============================


window.onload = () => {


    changeLanguage("fr");


};