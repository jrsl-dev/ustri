<script>
  import gennankaimon from "$lib/assets/gennankai-mon.svg";
  import {
    ThomasHufnagel as Tom,
    JamesRussell as James,
    DanielMordan as Dan,
  } from "$lib/constraints/instructors.js";
</script>

<footer>
  <img
    src={gennankaimon}
    width="168"
    height="168"
    alt="kikyo. stylized baloon flower used as the Tsumaki family crest (kamon). Used as part of the Gennankai crest."
  />
  <h2>Contact</h2>
  <ul>
    <li>
      East Lansing Honbu dojo:<br /><a href="mailto:{Tom.email}"
        >{Tom.name} ({Tom.gengo})</a
      >
    </li>
    <li>
      Southeast Michigan Branch dojo:<br /><a href="mailto:{Dan.email}"
        >{Dan.name} ({Dan.gengo})</a
      >
    </li>
    <li>
      Brighton Branch dojo:<br /><a href="mailto:{James.email}"
        >{James.name} ({James.gengo})</a
      >
    </li>
  </ul>
  <p>Copyright © 2021, United States Tamiya Ryu Iaijutsu Gennankai</p>
</footer>

<style>
  footer {
    padding: 1rem;
    background: black;
    color: white;
    font-size: 0.75em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer ul {
    list-style: none;
    padding: 0;
  }

  footer li:not(:last-child) {
    margin-bottom: 1em;
  }

  footer p {
    margin-top: 3.5em;
  }

  footer img {
    margin: 4.5em auto;
    width: 14em;
    display: block;
  }
</style>
