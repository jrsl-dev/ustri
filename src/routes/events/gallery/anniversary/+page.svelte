<script>
  import {
    LightboxGallery,
    GalleryImage,
    GalleryThumbnail,
  } from "svelte-lightbox";
  import Highlight from "$lib/components/Highlight.svelte";
  import Spacer from "$lib/components/Spacer.svelte";
  import historyAndTenugui from "$lib/assets/gallery/thirtieth/history-and-tenugui.jpeg";

  const images918 = import.meta.glob(
    "$lib/assets/gallery/thirtieth/918/*.jpeg",
    { eager: true, as: "url" },
  );

  const images919 = import.meta.glob(
    "$lib/assets/gallery/thirtieth/919/*.jpeg",
    { eager: true, as: "url" },
  );

  const images920 = import.meta.glob(
    "$lib/assets/gallery/thirtieth/920/*.jpeg",
    { eager: true, as: "url" },
  );

  const procTribute = import.meta.glob(
    "$lib/assets/gallery/thirtieth/proclamation-tribute/*.jpg",
    { eager: true, as: "url" },
  );

  const isehara = import.meta.glob(
    "$lib/assets/gallery/thirtieth/isehara/*.jpeg",
    { eager: true, as: "url" },
  );
</script>

<Highlight>
  <header>
    <h2>Yudansha and Jodansha Koshukai</h2>
    <i>2026 09 18</i>
  </header>
  <LightboxGallery
    imagePreset="fullscreen"
    arrowsConfig={{
      color: "white",
      character: "loop",
      enableKeyboardControl: true,
    }}
  >
    <svelte:fragment slot="thumbnail">
      <div class="gallery-thumbnails">
        {#each Object.values(images918) as image, i}
          <GalleryThumbnail id={i}>
            <img src={image} alt="" />
          </GalleryThumbnail>
        {/each}
      </div>
    </svelte:fragment>

    {#each Object.values(images918) as image, i}
      <GalleryImage id={i}>
        <img src={image} alt="" />
      </GalleryImage>
    {/each}
  </LightboxGallery>

  <Spacer size="3.5rem" />

  <header>
    <h2>Kodansha Koshukai</h2>
    <i>2026 09 19</i>
  </header>
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
        {#each Object.values(images919) as image, i}
          <GalleryThumbnail id={i}>
            <img src={image} alt="" />
          </GalleryThumbnail>
        {/each}
      </div>
    </svelte:fragment>

    {#each Object.values(images919) as image, i}
      <GalleryImage id={i}>
        <img src={image} alt="" />
      </GalleryImage>
    {/each}
  </LightboxGallery>

  <Spacer size="3.5rem" />

  <header>
    <h2>30th Anniversary Enbu Taikai</h2>
    <i>2026 09 20</i>
  </header>
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
        {#each [...Object.values(images920), historyAndTenugui] as image, i}
          <GalleryThumbnail id={i}>
            <img src={image} alt="" />
          </GalleryThumbnail>
        {/each}
      </div>
    </svelte:fragment>

    {#each [...Object.values(images920), historyAndTenugui] as image, i}
      <GalleryImage id={i}>
        <img src={image} alt="" />
      </GalleryImage>
    {/each}
  </LightboxGallery>

  <Spacer size="3.5rem" />

  <h3>Proclamation and Tribute</h3>

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
        {#each Object.values(procTribute) as image, i}
          <GalleryThumbnail id={i}>
            <img src={image} alt="" />
          </GalleryThumbnail>
        {/each}
      </div>
    </svelte:fragment>

    {#each Object.values(procTribute) as image, i}
      <GalleryImage id={i}>
        <img src={image} alt="" />
      </GalleryImage>
    {/each}
  </LightboxGallery>

  <Spacer size="3.5rem" />

  <h3>A message from Isehara Branch Dojo</h3>

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
        {#each Object.values(isehara) as image, i}
          <GalleryThumbnail id={i}>
            <img src={image} alt="" />
          </GalleryThumbnail>
        {/each}
      </div>
    </svelte:fragment>

    {#each Object.values(isehara) as image, i}
      <GalleryImage id={i}>
        <img src={image} alt="" />
      </GalleryImage>
    {/each}
  </LightboxGallery>
</Highlight>

<style>
  .gallery-thumbnails {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    gap: 1em;
  }

  @media (min-width: 400px) {
    .gallery-thumbnails {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 700px) {
    .gallery-thumbnails {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  header {
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-bottom: 0;
  }
</style>
