<script lang="ts">
  export let size: string | undefined = undefined;
  export let grow = size === undefined;
</script>

<span
  aria-hidden="true"
  class:grow
  style:--spacer-size={size === undefined ? undefined : size}
/>

<style>
  span {
    display: block;
    flex: 0 0 var(--spacer-size, auto);
    min-width: var(--spacer-size, 0);
    min-height: var(--spacer-size, 0);
  }

  span.grow {
    flex: 1 1 auto;
  }
</style>
