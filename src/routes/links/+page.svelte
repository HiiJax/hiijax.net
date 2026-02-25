<script>
    import ButtonsCool from "$lib/components/ButtonsCool.svelte";
    import ButtonsNeighbour from "$lib/components/ButtonsNeighbour.svelte";

</script>
<svelte:head>
    <title>HiiJax's Links</title>
</svelte:head>

<section>
    <h1>NetNeighbours</h1>
    <p>Yes it's spelled with a U.</p>
    <ButtonsNeighbour></ButtonsNeighbour>
    <p>If you link to me, <a href="/guestbook">let me know</a>! Maybe I'll link back and we can be neighbours!</p>

    <h1>Cool Sites</h1>
    <p>I liked these sites so I took them and put them here. they're mine now &gt;:3</p>
    <ButtonsCool></ButtonsCool>

    <h1>Hosted with HiiJax</h1>
    <p>Some other things that are hosted on my infrastructure.</p>
    <ul>
        <li><a href="https://git.hiijax.net/HiiJax">ForgeJo</a></li>
    </ul>
</section>