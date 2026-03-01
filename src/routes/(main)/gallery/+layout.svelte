<script>
    let { children } = $props();
</script>

<section>
    <p>All of these were commissioned by me or gifted to me. Credits are shown when hovering or by clicking on the image.</p>
    <p>
        <a href="/gallery">[ALL]</a>
        <a href="/gallery/breo">[Breo]</a>
        <a href="/gallery/nyx">[Nyx]</a>
    </p>

    <div>
        {@render children()}
    </div>
</section>
