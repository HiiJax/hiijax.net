<script>
    let { children } = $props();
</script>

<section>
    <h1>Gallery</h1>
    <p>All of these were commissioned by me or gifted to me. Credits are shown when hovering or by clicking on the image.</p>
    <p>
        <a href="/gallery" data-sveltekit-noscroll>[ALL]</a>
        <a href="/gallery/breo" data-sveltekit-noscroll>[Breo]</a>
        <a href="/gallery/nyx" data-sveltekit-noscroll>[Nyx]</a>
    </p>

    <div>
        {@render children()}
    </div>
</section>
