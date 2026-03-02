<script>
  import "./style.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="hiijax.net" />
  <link rel="manifest" href="/site.webmanifest" />
  <title>HiiJax - VRC Creator & Internet Furry</title>
</svelte:head>

<a href="#content" id="skip-to-content-link">Skip to content</a>
<div class="background-layout"></div>

<div class="bigger-layout">
  <div class="floatie-holder">
    <img class="nyx-floatie" src="nyxtrans.webp" />
  </div>

  <div class="layout">

{@render children()}

</div>

  <div class="floatie-holder">
    <img class="breo-floatie" src="breotrans.webp" />
  </div>
</div>
