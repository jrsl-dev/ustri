<script>
  import Instructor from "$lib/components/Instructor.svelte";
  import instructors from "$lib/constraints/instructors";
</script>

<h2>Instructors</h2>

<div class="instructors">
  {#each instructors as instructor}
    <Instructor {...instructor} />
  {/each}
</div>

<style>
  .instructors {
    display: grid;
    grid-row-gap: 1em;
  }
</style>
