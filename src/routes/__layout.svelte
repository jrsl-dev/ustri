<script>
  import Masthead from "$lib/components/Masthead.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "normalize.css/normalize.css";
  import "$lib/styles/styles.css";
</script>

<svelte:head>
  <title>
    United States Tamiya Ryu Iaijutsu Gennakai | Classical Japanese
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

  <main>
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
</style>
