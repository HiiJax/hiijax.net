<script>
    let { format = 'webp', gallery, character, slug, alt } = $props();

    function toggle() {
        if (format == "avif") {
            format = "webp";
            return format;
        } else {
            format = "avif";
            return format;
        }
    }
</script>

<img width="100%" style="object-fit: cover;" src="/{gallery}/{character}/{slug}.{format}" alt="{alt}" />

<button aria-label="Toggle format" onclick={toggle}>
    <code>Toggle format (Currently .{format})</code>
</button>
