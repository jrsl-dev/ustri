<script>
  // @ts-nocheck
  import Reflecting from "$lib/articles/reflecting/2021-18-10.md";
  import Highlight from "$lib/components/Highlight.svelte";
</script>

<section>
  <article>
    <h3>Reflecting Pool</h3>
    <Highlight>
      <h4>Further Reflections</h4>
      <Reflecting />
    </Highlight>
  </article>
</section>

<style>
  article:not(:last-child) {
    margin-bottom: 5em;
  }

  article h4 {
    padding-bottom: 4px;
    border-bottom: 2px solid currentColor;
  }
</style>
