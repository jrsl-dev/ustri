<script>
  import Map from "$lib/components/Map.svelte";
  import Instructor from "$lib/components/Instructor.svelte";
  import { JamesRussell } from "$lib/constraints/instructors";
</script>

<h2>Brighton, MI Branch Dojo</h2>

<p>
  The Brighton Branch Dojo holds class at the Brighton Education Community
  Center building in Brighton, MI. Classes are ran on a session basis, typically
  6-8 weeks long. Classes are continuous, sessions do not repeat material.
</p>

<p>
  To register for class, please visit <a
    href="https://brightonk12.ce.eleyo.com/"
    >Brighton Community Education's registration site</a
  >
  or call <a href="tel:8102994130">(810) 299-4130</a>. After signing up, please
  contact us so we can prepare materials for your first class!
</p>

<h3>Instructor</h3>

<Instructor {...JamesRussell} />

<h3>Location and Schedule</h3>

<p class="h-adr">
  <span class="p-street-address">125 S Church St.</span>
  <span class="p-locality">Brighton</span>
  <span class="p-country-name">MI</span>
  <span class="p-postal-code">48116</span>
</p>

<p>Thursdays, 7:00pm - 8:30pm</p>

<Map location="brighton" />

<style>
  h3 {
    margin: 1em 0;
  }
</style>
