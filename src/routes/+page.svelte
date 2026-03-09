<script>
    import Sonas from "$lib/components/Sonas.svelte";

</script>
<svelte:head>
  <title>HiiJax's Homepage</title>
  <meta name="description" content="Hii, I'm Jax! I'm a furry VRChat creator! You can see me around as my
        sonas, Breo, an umbreon-protogen dude, or Nyx, a pretty fluffy dragon.">
  <meta property="og:title" content="HiiJax's Homepage" />
  <meta property="og:description" content="Hii, I'm Jax! I'm a furry VRChat creator! You can see me around as my
        sonas, Breo, an umbreon-protogen dude, or Nyx, a pretty fluffy dragon." />
  <meta property="og:url" content="https://hiijax.net/" />
  <meta property="og:image:secure_url" content="https://hiijax.net/jax_profile.jpg" />
  <meta property="og:image" content="https://hiijax.net/jax_profile.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <script type="application/ld+json">
    {
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "HiiJax",
      "url" : "https://hiijax.net/"
    }
  </script>
</svelte:head>

<section>
    <h1>Introduction</h1>
    <p>
        Hii, I'm Jax! I'm a furry on the Internet! You can see me around as my
        sonas, Breo, an umbreon-protogen dude, or Nyx, a pretty fluffy dragon.
    </p>
    <p>
        I felt like being quirky so I made this site with SvelteKit. Also cause
        I happened to be learning it already.
        <a href="https://petrapixel.neocities.org/coding/layout-generator">
        PetraPixel's template generator</a> was used as a basis for the site
        layout/style. I wanna do so much with this site, it needs way more
        personalization (and maybe sparkles :3c), but for now, dis is what i got!!
    </p>
    <p>
        This website is hosted on my own machine! You can see it's specs on <a
            href="/my-tech#unraid-server"> my tech page</a
        >.
    </p>

    <hr />
    <Sonas></Sonas>

    <hr />
    <h1>About Me</h1>
    <p>
        I'm not JUST a furry on the Internet, I have other interests too, and 
        I <i>swear</i> they don't <i>all</i> revolve around being a furry...
    </p>
    <p>
        I'm a little into programming. I'd definitely persue it as a 
        career if the opportunity arose. I know a bit of Java from 
        <a href="https://github.com/HiiJax/Bad-Horse-Fix">Minecraft modding</a>, 
        and basic web dev stuff from making this site and some others.
    </p>
    <p>
        Currently, I'm trying my best to learn the Rust programming language. I'm
        not great with traditional education, but I've found the official Rust book 
        to be a great resource I can actually take in. The shit quality of SteelSeries
        Sonar is also pushing me to try to make 
        <a href="https://github.com/HiiJax/universal-slider-bridge">an alternative to 
        it in rust</a>, so that's good for motivation too.
    </p>
    <p>
        Something else I do to try to make something of myself, is create in 
        <a href="https://jinxxy.com/HiiJax" style="color: white; text-decoration: none; text-shadow: rgb(7, 188, 204) 2px 2px 0px, rgb(230, 1, 192) 3px 3px 0px, rgb(233, 1, 154) 4px 4px 0px;">3D</a>!
        I'm still improving here too, but I keep feeling more confident, as I
        create more content for the VRChat furry market! I'm so extemely
        grateful for the support I've gotten in this regard, it's really kept me going &lt;3
    </p>
    <p>
        Finally, my most established interest has got to be self hosting. I've had my
        Unraid Server for a few years now. I have quite a collection of stuff archived
        on there. A lot of it is personal stuff, but I like to share what I can, where 
        I can <a href="/seed.png">;)</a>
    </p>
</section>
