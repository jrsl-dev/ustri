<script>
  export let title;
  export let date;
  export let author;
</script>

<h4>{title}</h4>

<p>Published: {date}</p>

<slot />
