<script>
  import Map from "$lib/components/Map.svelte";
  import Instructor from "$lib/components/Instructor.svelte";
  import { DanielMordan } from "$lib/constraints/instructors";
  import macomb from "$lib/assets/macomb.jpg";
</script>

<h2>Macomb, MI Branch Dojo</h2>

<img src={macomb} alt="Macomb, MI dojo's shinzen" width="300" height="200" />

<p>
  The Southeast Michigan Branch dojo holds class at the Macomb Township Parks &
  Recreation Center. Classes are ran on a session basis, typically 6-8 weeks in
  length.
</p>

<p>
  To register for class, please visit <a
    href="https://www.macomb-mi.gov/204/Parks-and-Recreation"
  >
    Macomb Township Park & Recreation's site</a
  >
  or call <a href="tel:5869922900">(586) 992-2900</a>. Class is usually on break
  during August and the last half of Decemeber and early January. After signing
  up, please contact the Southeast Michigan dojo so we can prepare beginner
  materials for your first class!
</p>

<h3>Instructor</h3>

<Instructor {...DanielMordan} />

<h3>Location and Schedule</h3>

<p>Saturdays, 10:30am - 12:00pm</p>

<Map location="macomb" />

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
