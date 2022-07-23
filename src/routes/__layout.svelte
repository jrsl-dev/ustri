<script>
  import Masthead from "$lib/components/Masthead.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "normalize.css/normalize.css";
  import "$lib/styles/styles.css";
  import { page } from "$app/stores";

  console.log($page);
</script>

<svelte:head>
  <title>
    United States Tamiya Ryu Iaijutsu Gennankai | Classical Japanese
    Swordsmanship
  </title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
  />
</svelte:head>

<div class="page">
  <Masthead />

  <main class="main" class:expanded={$page.path === "/articles"}>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    background: white;
  }

  main {
    --width: 60ch;
    min-height: 90vh;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    max-width: var(--width);
    margin-left: auto;
    margin-right: auto;
  }

  .expanded {
    --width: 105ch;
  }
</style>
