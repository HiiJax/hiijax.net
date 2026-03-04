import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';

export function load({ params }) {
    /** @type {Array<{slug: string, character: string, artist: string, link: string, alt?: string}>} */
    const gallery = JSON.parse(readFileSync('data/gallery.json', 'utf8'));

    const image = gallery.find((image) => image.slug === params.slug);

    if (!image) error(404);

    const currentIndex = gallery.findIndex((indexImage) => indexImage.slug === params.slug);

    let previousImage = image;
    if (currentIndex > 0) {
        previousImage = gallery[currentIndex - 1];
    }

    let nextImage = image;
    if (currentIndex < gallery.length - 1) {
        nextImage = gallery[currentIndex + 1];
    }

    return {
        previousImage,
        nextImage,
        image
    };
}