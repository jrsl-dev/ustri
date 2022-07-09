<script>
  export let title;
  export let date;
  export let author;
</script>

<div>
  <h3>{title}</h3>
  <p>Published: {date}</p>
</div>

<slot />
