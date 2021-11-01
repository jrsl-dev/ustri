<script>
  export let name,
    gengo,
    honorific = "",
    role = "",
    rank,
    locality = "",
    region = {};
</script>

<div class="h-card instructor">
  <span class="p-name">{name}</span>
  (<span class="p-additional-name">{gengo}</span>{#if honorific}<span
      class="p-honorific-suffix">{honorific}</span
    >{/if})
  {#if role}
    <div class="p-role">{role}</div>
  {/if}
  <div class="p-note">{rank}</div>
  {#if locality}
    <span class="p-locality">{locality}</span>,
  {/if}
  {#if Object.keys(region).length > 0}
    <abbr class="p-region" title={region.long}>
      {region.short}
    </abbr>
  {/if}
</div>
