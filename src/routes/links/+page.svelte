<script>
    import ButtonsCool from "$lib/components/ButtonsCool.svelte";
    import ButtonsMe from "$lib/components/ButtonsMe.svelte";
    import ButtonsNeighbour from "$lib/components/ButtonsNeighbour.svelte";

</script>
<svelte:head>
    <title>HiiJax's Links</title>
</svelte:head>

<section>
    <h1>My Links</h1>
    <p>Other places you can find me on the web!</p>
    <ButtonsMe></ButtonsMe>

    <h1>NetNeighbours</h1>
    <p>Yes it's spelled with a U.</p>
    <ButtonsNeighbour></ButtonsNeighbour>
    <p>If you link to me, <a href="/guestbook">let me know</a>! Maybe I'll link back and we can be neighbours!</p>

    <h1>Cool Sites</h1>
    <p>I liked these site for one reason or another, so I've featured them here :3</p>
    <ButtonsCool></ButtonsCool>
</section>