<script>
    import ButtonsByJax from '$lib/components/ButtonsByJax.svelte';
    import ButtonsCool from '$lib/components/ButtonsCool.svelte';
    import ButtonsCredits from '$lib/components/ButtonsCredits.svelte';
    import ButtonsMe from '$lib/components/ButtonsMe.svelte';
    import ButtonsNeighbour from '$lib/components/ButtonsNeighbour.svelte';

    let { data } = $props();
</script>

<svelte:head>
    <title>HiiJax's Button Index</title>
</svelte:head>

<section>
    <h1>Button Index</h1>
    <p>
        Buttons on my site are stored in Svelte components to keep them organized and so they only need to be updated in one spot. 
        Usually ordered newest first. Check out <a href="/links">my links</a> for a better presentation!
    </p>

    <h3>ButtonsCredits.svelte (links)</h3>
    <div>Buttons are collected from the site they link to*. Non-link fun/personality buttons from the following sites:</div>
    <ButtonsCredits></ButtonsCredits>

    <h3>ButtonsByJax.svelte (non-links)</h3>
    <ButtonsByJax></ButtonsByJax>

    <h3>ButtonsCool.svelte (links)</h3>
    <ButtonsCool></ButtonsCool>

    <h3>ButtonsMe.svelte (links)</h3>
    <div>*these ones are not collected from the site they link to or ordered newest first.</div>
    <ButtonsMe></ButtonsMe>

    <h3>ButtonsNeighbour.svelte (links)</h3>
    <ButtonsNeighbour></ButtonsNeighbour>

    <h3>All Buttons (non-links)</h3>
    <div>All the buttons are stored as /button/[button].gif (unless the owner requests hotlinking) and are dumped here in alphabetical order, and the sidebar marquee in random order.</div>
    {#each data.buttons as button}
        <img src={`/button/${button}`} alt={button} />
    {/each}

</section>
