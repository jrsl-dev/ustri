<script context="module">
  export async function load({ fetch }) {
    const current = await fetch("/api/articles/messages/current.json");
    const { content } = await current.json();
    const archive = await fetch("/api/articles/messages/archive.json");
    const messages = await archive.json();

    return {
      props: {
        messages,
        content,
      },
    };
  }
</script>

<script>
  export let messages = [];
  export let content = { html: "No content found!" };
</script>

<section>
  {@html content.html}
</section>

<aside>
  <h3>Previous Messages</h3>
  <ol>
    {#each messages as message}
      <li><a href={message.url}>{message.title}</a></li>
    {/each}
  </ol>
</aside>
