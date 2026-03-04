import { readFileSync } from 'fs';

export function load({ params }) {
    /** @type {Array<{slug: string, character: string, artist: string, link: string, alt?: string}>} */
    const gallery = JSON.parse(readFileSync('data/gallery.json', 'utf8'));
    const filteredGallery = gallery.filter((image) => image.character === params.character);

    return {
        previews: filteredGallery.map((image) => ({
            slug: image.slug,
            character: image.character,
            artist: image.artist,
            alt: image.alt
        })),
        character: params.character
    };
}

