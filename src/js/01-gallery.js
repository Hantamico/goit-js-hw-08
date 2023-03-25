import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';



const galleryEl = document.querySelector('.gallery')
const imagesMarkup = addImagesMarkup(galleryItems);


galleryEl.insertAdjacentHTML('afterbegin', imagesMarkup);
galleryEl.addEventListener('click', onGalleryClick);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function addImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`).join(' ');
};

function onGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
}
