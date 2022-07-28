import "simplelightbox/dist/simple-lightbox.min.css"
import SimpleLightbox from "simplelightbox"

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const creatList = galleryItems
  .map((galleryItem) =>`<a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"npm install simplelightbox
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>`)
  .join("");
const gallery = document.querySelector(".gallery");
gallery.classList.add('gallery__item')
gallery.insertAdjacentHTML("afterbegin", creatList); 

const simplebox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });
  simplebox.on('show.simplelightbox', function () {
      
  });
  simplebox.next();


console.log(galleryItems);
