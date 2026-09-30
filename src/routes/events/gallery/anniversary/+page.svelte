<script>
  import {
    LightboxGallery,
    GalleryImage,
    GalleryThumbnail,
  } from "svelte-lightbox";
  import soke from "$lib/assets/soke.jpg";
  import enbu from "$lib/assets/first-enbu.jpg";
  import hanko from "$lib/assets/hanko.png";
  import Highlight from "$lib/components/Highlight.svelte";

  const images = [soke, enbu, hanko];
</script>

<Highlight>
  <LightboxGallery
    imagePreset="fullscreen"
    arrowsConfig={{
      color: "white",
      character: "loop",
      enableKeyboardControl: true,
    }}
    swipeConfig={{ enabled: true }}
    enableClickToClose
  >
    <svelte:fragment slot="thumbnail">
      <div class="gallery-thumbnails">
        {#each images as image, i}
          <GalleryThumbnail id={i}>
            <img src={image} alt="" />
          </GalleryThumbnail>
        {/each}
      </div>
    </svelte:fragment>

    {#each images as image, i}
      <GalleryImage id={i}>
        <img src={image} alt="" />
      </GalleryImage>
    {/each}
  </LightboxGallery>
</Highlight>

<style>
  .gallery-thumbnails {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1em;
  }
</style>
