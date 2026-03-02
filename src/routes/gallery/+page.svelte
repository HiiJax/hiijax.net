<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>HiiJax's Gallery</title>
</svelte:head>

{#each data.previews as { slug, character, alt, artist }}
    <a title="Artist: {artist}" href="/gallery/{character}/{slug}">
        <img width="240" height="240" style="object-fit: cover;" src="/thumb/{character}/{slug}.webp" {alt} />
    </a>
{/each}
