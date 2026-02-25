import { error } from '@sveltejs/kit';
import { GALLERY_IMAGES } from "../../gallery";

export function load({ params }) {
    const image = GALLERY_IMAGES.find((image) => image.slug === params.slug);

    if (!image) error(404);

    return {
        image
    };
}