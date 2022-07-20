<script>
  export let img = null;
  let imgProp =
    `url(${img})` ??
    "linear-gradient(to bottom, rgba(33,33,33,1), rgba(33,33,33,1))";
</script>

<div class="article-highlight" style="--img: {imgProp}">
  <slot />
</div>

<style>
  .article-highlight {
    flex-basis: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)),
      var(--img);
    background-blend-mode: saturation;
    background-size: cover;
    margin: -0.8rem -1rem 0;
    color: white;
    padding: 1rem;
    position: relative;
  }
</style>
