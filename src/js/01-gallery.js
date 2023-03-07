// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imageLi = galleryItems
  .map(image => {
    const { preview, original, description } = image;
    return `<li> <a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}"/></a></li>`;
  })
  .join(' ');

gallery.insertAdjacentHTML('afterbegin', imageLi);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});