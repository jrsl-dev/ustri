<script>
  import Map from "$lib/components/Map.svelte";
  import Instructor from "$lib/components/Instructor.svelte";
  import { DouglasJarret, ThomasHufnagel } from "$lib/constraints/instructors";
  import honbu from "$lib/assets/honbu.jpg";
</script>

<h2>East Lansing, MI Honbu Dojo</h2>

<img src={honbu} alt="exterior of the honbu dojo" width="300" height="200" />
<p>
  The Michiagan Honbu dojo is the headquarters for Tamiya Ryu Iajiutsu
  operations in the United States. Surrounded by a beautiful Japanese garden,
  this traditional dojo was built from plans based on a traditional Japanese
  training hall.
</p>

<p>
  Currently practice is being held at the Hannah Community Center. Please
  <a href="mailto:">contact Gensui sensei</a> for details on joining class.
</p>

<h3>Instructors</h3>

<Instructor {...ThomasHufnagel} />
<br />
<Instructor {...DouglasJarret} />

<h3>Location and Schedule</h3>

<p class="h-adr">
  <span class="p-street-address">819 Abbot Rd.</span>
  <span class="p-locality">East Lansing</span>
  <span class="p-country-name">MI</span>
  <span class="p-postal-code">48823</span>
</p>

<p>Saturdays, 1:00pm - 3:00pm</p>

<Map location="eastLansing" />

<style>
  h3 {
    margin: 1em 0;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 475px) {
    img {
      float: left;
      margin-right: 1em;
    }
  }
</style>
