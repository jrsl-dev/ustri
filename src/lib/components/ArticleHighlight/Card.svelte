<div class="article-card">
  <slot />
</div>

<style>
  .article-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .article-card > h4 {
    margin: 0;
  }
</style>
