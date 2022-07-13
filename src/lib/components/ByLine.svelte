<script>
  export let title, author, date;
</script>

<header>
  <h3>{title}</h3>
  <i>{author}, {date}</i>
</header>

<style>
  h3 {
    border-bottom: 3px solid;
    padding-bottom: 4px;
    font-size: 1.35em;
  }

  i {
    display: block;
    margin: -1.3rem 0 0 0;
    text-align: right;
  }
</style>
