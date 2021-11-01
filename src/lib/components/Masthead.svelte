<script>
  import Nav from "$lib/components/Nav.svelte";
</script>

<header>
  <Nav />
  <div class="masthead">
    <h1>
      <span>United States</span>
      <span>Tamiya Ryu Iaijutsu</span>
      <sub>Gennankai</sub>
    </h1>
    <p>米国田宮流居合術元楠会</p>
  </div>
</header>

<style>
  header {
    padding: 1em;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
  }

  h1 {
    margin: 0;
    line-height: 1;
    display: flex;
    flex-direction: column;
  }

  sub {
    bottom: 0;
    line-height: 1;
  }

  .masthead {
    margin-top: 4em;
    position: relative;
  }
  p {
    margin: 0;
  }

  @media (min-width: 514px) {
    .masthead {
      display: inline-block;
    }

    h1 {
      display: block;
    }

    sub {
      display: block;
    }

    p {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 0;
    }
  }
</style>
