import { galleryItems } from './gallery-items.js';

// Crearea și randarea galeriei
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
}).join('');

gallery.insertAdjacentHTML('beforeend', markup);

// Delegarea pentru a obține URL-ul imaginii mari
gallery.addEventListener('click', (event) => {
    event.preventDefault(); // Previne redirecționarea implicită

    const target = event.target;
    
    if (target.nodeName === 'IMG') {
        const originalImageURL = target.dataset.source;

        // Deschiderea ferestrei modale
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${originalImageURL}" alt="${target.alt}">
            </div>
        `);

        instance.show();

        // Închiderea ferestrei modale cu tasta Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                instance.close();
            }
        });
    }
});
