<script>
  import Highlight from "$lib/components/Highlight.svelte";
</script>

<div>
  <a href="/locations/east-lansing-michigan-honbu-dojo">
    <Highlight>
      <h3>East Lansing, Michigan</h3>
      <h4>United States Honbu Dojo</h4>
      <p>
        The headquarter (honbu) dojo of the Gennankai, the United States branch
        of Tamiya Ryu Iaijutsu. Classes are held at the Hannah Community Center.
        The Honbu Dojo building proper is located at Alexanian sensei's home.
      </p>
    </Highlight>
  </a>

  <a href="locations/macomb-michigan-dojo">
    <Highlight>
      <h3>Macomb, Michigan</h3>
      <h4>Southeast Michigan Branch Dojo</h4>
      <p>
        The Southeast Michigan Branch Dojo is located in Macomb, MI with classes
        held at the Macomb Township Recreation Center.
      </p>
    </Highlight>
  </a>

  <a href="locations/brighton-michigan-dojo">
    <Highlight>
      <h3>Brighton, Michigan</h3>
      <h4>Brighton Branch Dojo</h4>
      <p>
        The newest branch of the US Tamiya Ryu Gennankai is located in Brighton,
        MI with classes held at the Brighton Education and Community Center.
      </p>
    </Highlight>
  </a>
</div>

<style>
  a {
    text-decoration: none;
    display: block;
    transition: all 250ms ease;
  }

  a:hover,
  a:focus {
    outline: 0;
    background: lightgrey;
    transform: scale(1.05);
  }

  div {
    display: grid;
    grid-row-gap: 2em;
  }
</style>
