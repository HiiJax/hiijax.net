import { readFileSync } from 'fs';

export function load() {
    /** @type {Array<{slug: string, character: string, artist: string, link: string, alt?: string}>} */
    const gallery = JSON.parse(readFileSync('data/gallery.json', 'utf8'));

    return {
        previews: gallery.map((image) => ({
            slug: image.slug,
            character: image.character,
            artist: image.artist,
            alt: image.alt
        }))
    };
}