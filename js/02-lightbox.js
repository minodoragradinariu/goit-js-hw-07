import { galleryItems } from './gallery-items.js';
// Change code below this line
// Crearea și randarea galeriei
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
}).join('');

gallery.insertAdjacentHTML('beforeend', markup);

// Inițializarea librăriei SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
