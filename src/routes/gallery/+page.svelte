<script>
    let { data } = $props();
</script>

<svelte:head>
  <title>HiiJax's Gallery</title>
  <meta name="description" content="Browse digital art commissioned by or gifted to Jax.">
  <meta property="og:title" content="HiiJax's Gallery" />
  <meta property="og:url" content="https://hiijax.net/gallery" />
  <meta property="og:image:secure_url" content="https://hiijax.net/jax_profile.jpg" />
  <meta property="og:image" content="https://hiijax.net/jax_profile.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
</svelte:head>

{#each data.previews as { slug, character, alt, artist }}
    <a title="Artist: {artist}" href="/gallery/{character}/{slug}"  data-sveltekit-noscroll>
        <img width="240" height="240" style="object-fit: cover;" src="/thumb/{character}/{slug}.webp" {alt} />
    </a>
{/each}
