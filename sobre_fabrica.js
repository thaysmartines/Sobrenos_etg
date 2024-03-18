let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');


let photos = [
    { src: "image/andre.jpg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",   description: "Descrição da imagem 1"  },
    { src: "image/frank_corr.jpg", author: "Fabrica de Software 276", title: "Arthur Frantz", topic: "Back End Developer",  description: " 23 anos estou Cursando Engenharia de Software na Estácio de Sá "  },
    { src: "image/joceyr.jpg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",    description: "Descrição da imagem 3"},
    { src: "image/simoes.jpeg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",   description: "Descrição da imagem 4" },
    { src: "image/Vinicius.jpeg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",  description: "Descrição da imagem 5" },
    { src: "image/leandro.jpeg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",   description: "Descrição da imagem 6" },
    { src: "image/lluiz.jpg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",   description: "Descrição da imagem 7" },
    { src: "image/Guilherme.jpeg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",   description: "Descrição da imagem 8" },
    { src: "image/Igor.jpeg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",    description: "Descrição da imagem 9"},
    { src: "image/thays.jpeg", author: "LUNDEV", title: "DESIGN SLIDER", topic: "ANIMAL",   description: "Descrição da imagem 10" }
];

let currentIndex = 0;

function addPhotoToSlider(photo) {
    let item = document.createElement('div');
    item.classList.add('item', 'item-grow-from-center'); 
    item.innerHTML = `
        <img src="${photo.src}">
        <div class="content">
            <div class="author">${photo.author}</div>
            <div class="title">${photo.title}</div>
            <div class="topic">${photo.topic}</div>
            <div class="des">${photo.description}</div> <!-- Aqui exibimos a descrição correspondente -->
            <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    `;
    SliderDom.appendChild(item);
}

function updateThumbnailGallery() {
    thumbnailBorderDom.innerHTML = ""; 

    for (let i = currentIndex; i < currentIndex + 4; i++) {
        let index = i % photos.length; 
        let photo = photos[index]; 

        let thumbnailItem = document.createElement('div');
        thumbnailItem.classList.add('item');
        thumbnailItem.innerHTML = `
            <img src="${photo.src}">
            <div class="content">
                <div class="title">${photo.title}</div>
              
            </div>
        `;
        thumbnailBorderDom.appendChild(thumbnailItem);
    }
}

addPhotoToSlider(photos[currentIndex]);

updateThumbnailGallery();

function showNext() {
    nextDom.onclick = null; 
    currentIndex = (currentIndex + 1) % photos.length; 
    SliderDom.innerHTML = "";
    addPhotoToSlider(photos[currentIndex]); 
    updateThumbnailGallery(); 
    setTimeout(function() {
        nextDom.onclick = showNext; 
    }, 2000); 
}

function showPrev() {
    prevDom.onclick = null; 
    currentIndex = (currentIndex - 1 + photos.length) % photos.length; 
    SliderDom.innerHTML = ""; 
    addPhotoToSlider(photos[currentIndex]); 
    updateThumbnailGallery(); 
    setTimeout(function() {
        prevDom.onclick = showPrev; 
    }, 2000); 
}

nextDom.onclick = showNext;
prevDom.onclick = showPrev;

function autoNext() {
    nextDom.click();
    setTimeout(autoNext, 5000);
}

autoNext();