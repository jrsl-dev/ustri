<script>
  import Masthead from "$lib/components/Masthead.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "normalize.css/normalize.css";
  import "$lib/styles/styles.css";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>
    United States Tamiya Ryu Iaijutsu Gennankai | Classical Japanese
    Swordsmanship
  </title>
</svelte:head>

<div class="page">
  <Masthead />

  <main class="main" class:expanded={$page.url.pathname === "/articles"}>
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
