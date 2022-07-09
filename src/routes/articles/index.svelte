<script context="module">
  export async function load({ fetch }) {
    // get both current articles
    const currentMessage = await fetch("/api/articles/messages/current.json");
    const { content: messageContent } = await currentMessage.json();
    const messageArchive = await fetch("/api/articles/messages/archive.json");
    const messages = await messageArchive.json();

    // get both archives
    const currentReflection = await fetch(
      "/api/articles/reflections/current.json"
    );
    const { content: reflectionContent } = await currentReflection.json();
    const reflectionArchive = await fetch(
      "/api/articles/reflections/archive.json"
    );
    const reflections = await reflectionArchive.json();

    return {
      props: {
        messageContent,
        reflectionContent,
        messages,
        reflections,
      },
    };
  }
</script>

<script>
  // @ts-nocheck
  export let messageContent;
  export let reflectionContent;
  export let messages;
  export let reflections;
</script>

<section>
  <article>{@html messageContent.html}</article>
  <article>{@html reflectionContent.html}</article>
</section>

<aside>
  <ol>
    {#each messages as article}
      <li><a href={article.url}>{article.title}</a></li>
    {/each}
  </ol>
  <ol>
    {#each reflections as article}
      <li><a href={article.url}>{article.title}</a></li>
    {/each}
  </ol>
</aside>
