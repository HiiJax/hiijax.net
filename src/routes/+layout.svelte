<script>
  import CalmToggle from "$lib/components/CalmToggle.svelte";
  import LightMode from "$lib/components/LightMode.svelte";
  import DarkMode from "$lib/components/DarkMode.svelte";
  import ButtonsMe from "$lib/components/ButtonsMe.svelte";
  import "./style.css";

  let { data, children } = $props();
</script>

<svelte:head>
  <script>
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="hiijax.net" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>HiiJax - VRC Creator & Internet Furry</title>
    // Template generated with petrapixel's layout generator.
    // (Please do not remove this credit.)
    console.log(
      "%cTemplate generated with petrapixel's layout generator: https://petrapixel.neocities.org/coding/layout-generator",
      "font-size: 14pt; color: #922a45; background: #ffd3ef",
    );
    console.log(
      "It was also butchered by Jax, so take what you see with a grain of salt. What you see is NOT what you'll get lol",
    );
  </script>
  <script src="/pmdneko.js" defer></script>
</svelte:head>

<a href="#content" id="skip-to-content-link">Skip to content</a>
<div class="background-layout"></div>

<div class="bigger-layout">
  <div class="floatie-holder">
    <img class="nyx-floatie" src="/nyxtrans.webp" />
  </div>

  <div class="layout">

    <!-- =============================================== -->
    <!-- HEADER -->
    <!-- =============================================== -->

    <header>
      <div class="header-inner">
        <div class="header-logo-holder">
          <a class="header-link" href="/"
            ><img class="header-logo" src="/logo.svg" alt="HiiJax logo" /></a
          >
        </div>
        <div class="header-content">
          <div class="header-title">WELCOME! CHOOSE A PAGE:</div>

          <!-- NAVIGATION -->
          <nav>
            <ul>
              <li><a class="header-link" href="/links">[LINKS]</a></li>
              <li><a class="header-link" href="/gallery">[GALLERY]</a></li>
              <li><a class="header-link" href="/shop">[SHOP]</a></li>
              <li><a class="header-link" href="/socials">[SOCIALS]</a></li>
              <li class="header-link">
                <strong>[MORE &darr;]</strong>
                <ul>
                  <li><a class="header-link" href="/guestbook">GUESTBOOK</a></li>
                  <li><a class="header-link" href="https://blog.hiijax.net">BLOG</a></li>
                  <li><a class="header-link" href="/my-tech">MY TECH</a></li>
                  <li><a class="header-link" href="/button">BUTTONS</a></li>
                  <li><a class="header-link" href="/music">MUSIC</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header-controls">
          <label class="toggle">
            <input type="checkbox" class="floaty-checkbox" />
            <span class="header-toggle">Hide Floaty Breos</span>
          </label>
        </div>
      </div>
    </header>

    <main id="content">
      {@render children()}
    </main>

    <!-- =============================================== -->
    <!-- RIGHT SIDEBAR -->
    <!-- =============================================== -->

    <aside class="right-sidebar">
      <div class="sidebar-section">
        <div class="sidebar-title">me, if you even care:</div>
        <img
          alt="site owner"
          class="full-width-image"
          src="/jax_profile.webp"
        />
      </div>
      <hr />
      <div class="sidebar-section">
        <div class="sidebar-title">hits:</div>
        <a href="https://www.counter12.com">
          <img
            src="https://www.counter12.com/img-wbBAYC70aCDddAC9-6.gif"
            alt="counter"
          />
        </a>
        <script
          type="text/javascript"
          src="https://www.counter12.com/ad.js?id=wbBAYC70aCDddAC9"
          defer
        >
        </script>
      </div>
      <!--<hr />
    <div class="sidebar-section">
      <div class="sidebar-title">webrings:</div>
    </div>-->
      <hr />
      <div class="sidebar-section">
        <div class="sidebar-title">buttonsss:</div>
        <a href="/button">
          <!-- svelte-ignore a11y_distracting_elements -->
          <marquee>
            {#each data.buttonsShuffled as buttonsShuffled}
              <img src={`/button/${buttonsShuffled}`} alt={buttonsShuffled} />
            {/each}
          </marquee>
        </a>
      </div>
      <hr />
      <div class="sidebar-section">
        <div class="sidebar-title">my button:</div>
        <p>You can hotlink, I plan to update it!</p>
        <div class="site-button">
          <a href="https://hiijax.net/" target="_blank"
            ><img src="/button/hiijax.gif" alt="HiiJax" /></a
          >
          <textarea
            ><a href="https://hiijax.net/" target="_blank"><img
            src="https://hiijax.net/button/hiijax.gif" alt="HiiJax"></a>
          </textarea>
        </div>
      </div>
    </aside>

    <!-- =============================================== -->
    <!-- FOOTER -->
    <!-- =============================================== -->

    <footer>
      <div class="footer-content">
        <div>
          <ButtonsMe></ButtonsMe>
        </div>
      </div>
      <br />
      <div class="footer-content">
        <div>
          Looking for me on the booooring modern web? <a
            href="https://hiijax.com"
          >
            Click here ig...
          </a>
        </div>
      </div>
    </footer>

  </div>

  <div class="floatie-holder">
    <img class="breo-floatie" src="/breotrans.webp" />
  </div>
</div>