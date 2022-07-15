<script>
  export let current = null;
</script>

<div>
  <p>
    <slot />
  </p>
  {#if current?.url && current?.title}
    <a href={current.url}>Current article: {current.title}</a>
  {/if}
</div>

<style>
  div {
    margin: 0 -1rem -1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    margin: 0;
  }
</style>
