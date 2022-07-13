<script>
  export let articles = [];
</script>

<ul>
  {#each articles as article}
    <li>
      <a href={article.url}
        ><b>{article.title}</b><br />
        <i>(by: {article.author}, {article.date})</i></a
      >
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.75em;
  }
</style>
