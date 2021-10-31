<script>
  import kikyo from "$lib/assets/maru-ni-kikyo.png";
  let shown = false;

  function toggleNav() {
    shown = !shown;
  }

  function closeNav() {
    shown = false;
  }
</script>

<div class="wrapper">
  <div class="container">
    <a href="/" tabindex="-1"
      ><img src={kikyo} width="48" height="48" alt="" /></a
    >
    <button type="button" on:click={toggleNav}>
      {#if shown}
        Close
      {:else}
        Menu
      {/if}
    </button>
    <nav class:shown>
      <a href="/" on:click={closeNav}>Home</a>
      <a href="/locations" on:click={closeNav}>Locations</a>
      <a href="/training" on:click={closeNav}>Training</a>
      <a href="/instructors" on:click={closeNav}>Instructors</a>
      <a href="/history" on:click={closeNav}>History</a>
      <a href="/articles" on:click={closeNav}>Articles</a>
      <a href="/resources" on:click={closeNav}>Resources</a>
    </nav>
  </div>
</div>

<style>
  button {
    margin-left: auto;
    background: transparent;
    color: white;
    border: 0;
    text-decoration: underline;
    cursor: pointer;
  }
  button:hover {
    text-decoration-thickness: 2px;
  }

  button:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    outline-style: dashed;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: black;
  }

  .container {
    display: flex;
    align-items: center;
    max-width: 48em;
    margin: 0 auto;
    padding: 0.5em 1em;
  }

  nav {
    position: fixed;
    top: 4em;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    transform: translate(100%, 0);
    transition: 200ms all ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  nav.shown {
    transform: translate(0, 0);
    opacity: 1;
  }

  img {
    width: 3em;
    filter: invert(1);
    align-self: flex-start;
  }

  nav a {
    display: inline-block;
    padding: 0.5em;
    margin: 1em;
  }

  @media (min-width: 670px) {
    button {
      display: none;
    }

    nav {
      position: relative;
      transition: none;
      transform: translate(0, 0);
      display: block;
      top: 0;
      margin-left: auto;
      opacity: 1;
    }

    nav a {
      margin: 0;
    }
  }
</style>
