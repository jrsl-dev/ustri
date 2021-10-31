<script>
  import Masthead from "$lib/components/Masthead.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>
    United States Tamiya Ryu Iaijutsu Gennakai| Classical Japanese Swordsmanship
  </title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div class="page">
  <Masthead />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  /* TODO group these globals somewhere else */
  :global(body) {
    font-family: "Lato", sans-serif;
    background: black;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin-top: 0;
  }

  :global(a) {
    color: inherit;
  }

  :global(a:hover) {
    text-decoration-thickness: 2px;
  }
  :global(a:focus) {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    outline-style: dashed;
  }

  :global(main h2),
  :global(main h3) {
    padding: 0 0 2px 4px;
    border: 0 solid currentColor;
    border-left-width: 2px;
    border-bottom-width: 2px;
  }

  :global(hr) {
    border: 0;
    border-bottom: 2px solid currentColor;
    margin: 2.5em 0;
  }
  :global(main p) {
    line-height: 1.5;
  }

  :global(main) {
    min-height: 90vh;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    max-width: 60ch;
    margin-left: auto;
    margin-right: auto;
  }

  :global(main > section:not(:last-child)) {
    margin-bottom: 3.5em;
  }
  .page {
    display: flex;
    flex-direction: column;
    background: white;
  }
</style>
