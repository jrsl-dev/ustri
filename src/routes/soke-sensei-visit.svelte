<script>
  const koudansha = [
    ["shinzen", "Bi no Tamiya, Kurai no Tamiya"],
    ["koudansha", "US Tamiya Ryu Iaijutsu Gennankai Koudansha"],
    ["aisatsu", "Soke sensei delivers his opening aisatsu (greeting)"],
    ["tachiai-practice", "Practicing tachiai"],
    ["satetsu", "Tamiya Ryu Iaijutsu Koran no Maki Yonhonmae - Satetsu"],
    ["utetsu", "Tamiya Ryu Iaijutsu Koran no Maki Gohonmae - Utetsu"],
    ["murakumo", "Tamiya ryu Iaijutsu Koran no Maki Juyohonmae - Murakumo"],
    [
      "soke-gennan",
      "Tsumaki Soke sensei and Gennan Buhaku sensei observing practice",
    ],
    [
      "soke-gennetsu",
      "Tsumaki soke sensei and Gennetsu sensei observing practice",
    ],
  ];

  const koushukai = [
    ["group", "US Tamiya Ryu Iaijutsu members with Tsumaki Soke sensei"],
    ["soke-kana", "Kana san acting as Tsumaki sensei's primary translator"],
    ["group-training-1", ""],
    ["group-training-2", ""],
    ["group-training-3", ""],
    ["group-training-4", ""],
    ["practice-1", ""],
    ["practice-2", ""],
    ["wide-shot", ""],
    ["group-enbu-1", ""],
    ["group-enbu-1", ""],
    ["group-enbu-1", ""],
    ["gennan-enbu-1", ""],
    ["gennan-enbu-2", ""],
    ["soke-enbu-1", ""],
    ["soke-enbu-2", ""],
    ["mvp", ""],
  ];

  const openPractice = [
    ["hannah-community-center", ""],
    ["gennankai", ""],
    ["gennankai-shinsa-koushukai", ""],
    ["preparing", ""],
    ["shinzen-hairei", ""],
    ["group-1", ""],
    ["group-2", ""],
    ["tsukahazushi-bunkai", ""],
    ["tsukahazushi", ""],
    ["group-tsukahazushi", ""],
    ["chiburi", ""],
    ["tachiiai", ""],
    ["soke-nigemi", ""],
    ["jimi-shinsa", ""],
    ["discussion", ""],
  ];
</script>

<section>
  <h3>Koudansha Seminar - 9/20/2024</h3>

  <div class="thumbnails">
    {#each koudansha as [img, alt]}
      <img
        src={`/src/lib/assets/2024-soke-sensei-visit/koudansha/thumbs/${img}.jpg`}
        {alt}
      />
    {/each}
  </div>

  <h3>Koushukai - 9/21/2024</h3>

  <div class="thumbnails">
    {#each koushukai as [img, alt]}
      <img
        src={`/src/lib/assets/2024-soke-sensei-visit/koushukai-day-1/thumbs/${img}.jpg`}
        {alt}
      />
    {/each}
  </div>

  <h3>Open Practice - 9/22/2024</h3>

  <div class="thumbnails">
    {#each openPractice as [img, alt]}
      <img
        src={`/src/lib/assets/2024-soke-sensei-visit/koushukai-day-2/thumbs/${img}.jpg`}
        {alt}
      />
    {/each}
  </div>
</section>

<style>
  .thumbnails {
    display: flex;
    gap: 1ch;
    overflow: scroll;
    align-items: baseline;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 50%;
    scroll-snap-stop: always;
    border: 4px solid black;
    padding: 1ch;
    margin-bottom: 2rem;
  }

  .thumbnails > img {
    scroll-snap-align: center;
    max-height: 300px;
  }
</style>
