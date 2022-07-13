<script>
  import Highlight from "$lib/components/Highlight.svelte";

  export let title;
  export let date;
  export let author;
  export let category = "Article";
</script>

<h2 class="main-heading">{category}</h2>

<Highlight>
  <header>
    <h3>{title}</h3>
    <div>
      <p>{author}</p>
      <p>Published {date}</p>
    </div>
  </header>

  <slot />
</Highlight>

<style>
  header {
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: -1rem;
  }

  p {
    margin: 0;
  }
</style>
