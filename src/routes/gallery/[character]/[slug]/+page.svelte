<script>
    import GalleryImage from "$lib/components/GalleryImage.svelte";

    let { data } = $props();
</script>

<svelte:head>
  <title>HiiJax's Gallery - Art of {data.image.character} by {data.image.artist}</title>

  <!-- og tags -->
  <meta property="og:title" content="Art of {data.image.character} by {data.image.artist}" />
  <meta property="og:description" content="HiiJax's Gallery" />
  <meta property="og:url" content="https://hiijax.net/gallery/{data.image.character}/{data.image.slug}" />
  <meta property="og:image:secure_url" content="https://hiijax.net/gallery/{data.image.character}/{data.image.slug}.jpg" />
  <meta property="og:image" content="https://hiijax.net/gallery/{data.image.character}/{data.image.slug}.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:alt" content={data.image.alt} />

  <!-- twitter card tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Art of {data.image.character} by {data.image.artist}" />
  <meta name="twitter:description" content="Art of {data.image.character} by {data.image.artist}" />
  <meta name="twitter:image" content="https://hiijax.net/gallery/{data.image.character}/{data.image.slug}.jpg" />
</svelte:head>

<a href="/gallery/{data.previousImage.character}/{data.previousImage.slug}" data-sveltekit-noscroll>&lAarr; Previous</a>
<a href="/gallery/{data.nextImage.character}/{data.nextImage.slug}" data-sveltekit-noscroll>Next &rAarr;</a>
<GalleryImage gallery=gallery character={data.image.character} slug={data.image.slug} alt={data.image.alt}></GalleryImage>
<br><br>
<div style="text-transform: capitalize;">Character: {data.image.character}</div>
<div>Artist: {data.image.artist}</div>
<div>Link: <a href="{data.image.link}">{data.image.link}</a></div>
