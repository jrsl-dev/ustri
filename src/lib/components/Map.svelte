<script>
  const locations = {
    eastLansing: {
      title: "East Lansing, MI Honbu Dojo location",
      query:
        "East+Lansing+Hannah+Community+Center,+Abbot+Road,+East+Lansing,+MI,+USA",
    },
    macomb: {
      title: "Macomb, MI Branch Dojo location",
      query:
        "Macomb%20Township%20Recreation%20Center%2C%20Macomb%20Street%2C%20Macomb%2C%20MI%2C%20USA",
    },
    brighton: {
      title: "Brighton, MI Branch Dojo location",
      query:
        "Brighton%20Education%20%26%20Community%20Center%2C%20South%20Church%20Street%2C%20Brighton%2C%20MI%2C%20USA",
    },
  };
  export let location;
</script>

<iframe
  title={locations[location].title}
  width="600"
  height="350"
  style="border:0"
  loading="lazy"
  allowfullscreen
  src={`https://www.google.com/maps/embed/v1/search?q=${locations[location].query}&key=AIzaSyBbufFBdfHD5LnZLgq1IcwESLiSy2BKzyw`}
/>

<style>
  iframe {
    width: 100%;
  }
</style>
