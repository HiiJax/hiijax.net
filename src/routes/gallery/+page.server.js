import { GALLERY_IMAGES } from "./gallery";

export function load() {
    return {
        previews: GALLERY_IMAGES.map((image) => ({
            slug: image.slug,
            character: image.character,
            artist: image.artist,
            alt: image.alt
        }))
    };
}