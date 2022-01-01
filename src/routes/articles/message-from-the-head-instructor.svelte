<script>
  // @ts-nocheck
  import Previous from "$lib/articles/message/2021-10-18.md";
  import Message from "$lib/articles/message/2021-12-31.md";
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
    <h3>Previous Messages</h3>
    <Highlight>
      <Previous />
    </Highlight>
  </article>
</section>

<style>
  article:not(:last-child) {
    margin-bottom: 5em;
  }
</style>
