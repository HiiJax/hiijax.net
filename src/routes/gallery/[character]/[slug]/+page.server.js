import { error } from '@sveltejs/kit';
import { GALLERY_IMAGES } from "../../gallery";

export function load({ params }) {
    const image = GALLERY_IMAGES.find((image) => image.slug === params.slug);

    if (!image) error(404);

    const currentIndex = GALLERY_IMAGES.findIndex((indexImage) => indexImage.slug === params.slug);
  
    let previousImage = image;
    if (currentIndex > 0) {
        previousImage = GALLERY_IMAGES[currentIndex - 1];
    }

    let nextImage = image;
    if (currentIndex < GALLERY_IMAGES.length - 1) {
        nextImage = GALLERY_IMAGES[currentIndex + 1];
    }

    return {
        previousImage,
        nextImage,
        image
    };
}