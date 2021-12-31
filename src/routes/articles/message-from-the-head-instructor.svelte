<script>
  // @ts-nocheck
  import Previous from "$lib/articles/message/2021-18-10.md";
  import Message from "$lib/articles/message/2021-31-12.md";
  import Highlight from "$lib/components/Highlight.svelte";
</script>

<section>
  <article>
    <h3>Message from the Head Instructor</h3>
    <Highlight>
      <h4>Year of the Tiger</h4>
      <Message />
    </Highlight>
  </article>
</section>

<section>
  <article>
    <h3>Previous Messages</h3>
    <Highlight>
      <h4>A New Head Instructor</h4>
      <Previous />
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
