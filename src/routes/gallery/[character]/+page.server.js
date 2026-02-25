import { GALLERY_IMAGES } from "../gallery";

export function load({ params }) {
    const FILTERED_IMAGES = GALLERY_IMAGES.filter((image) => image.character === params.character);

    return {
        previews: FILTERED_IMAGES.map((image) => ({
            slug: image.slug,
            character: image.character,
            artist: image.artist,
            alt: image.alt
        })),
        character: params.character
    };
}

