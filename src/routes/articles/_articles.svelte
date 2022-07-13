<script>
  import Highlight from "$lib/components/Highlight.svelte";
  import ByLine from "$lib/components/ByLine.svelte";

  export let title = "";
  export let date = "";
  export let author = "";
  export let category = "Article";
</script>

<h2 class="main-heading">{category}</h2>

<Highlight>
  <ByLine {title} {author} {date} />
  <slot />
</Highlight>
