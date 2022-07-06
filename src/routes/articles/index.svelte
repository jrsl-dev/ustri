<script>
  // @ts-nocheck
  import Message from "$lib/articles/message/2021-12-31.md";
  import Reflecting from "$lib/articles/reflecting/2022-07-06.md";
  import Highlight from "$lib/components/Highlight.svelte";
</script>

<section>
  <article>
    <h3>Message from the Head Instructor</h3>
    <Highlight>
      <Message />
    </Highlight>
  </article>
</section>

<section>
  <article>
    <h3>Reflecting Pool</h3>
    <Highlight>
      <Reflecting />
    </Highlight>
  </article>
</section>

<style>
  article:not(:last-child) {
    margin-bottom: 5em;
  }
</style>
