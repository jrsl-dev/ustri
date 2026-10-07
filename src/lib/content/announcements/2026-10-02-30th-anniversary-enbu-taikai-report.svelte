<script>
  import {
    LightboxGallery,
    GalleryImage,
    GalleryThumbnail,
  } from "svelte-lightbox";
  import picGennankaiAndVips from "$lib/assets/gallery/thirtieth/920/2026 09 20 1429 Group Large.jpeg";
  import yujoenbu from "$lib/assets/gallery/thirtieth/920/2026 09 20 1337 Large.jpeg";
  import nigemi from "$lib/assets/gallery/thirtieth/920/2026 09 20 1413 Large.jpeg";
</script>

<h3>30th Anniversary Enbu Taikai Report</h3>
<p>
  A report on the United States Tamiya Ryu Iaijutsu Gennankai 30th Anniversary
  Enbu Taikai and Visit to Michigan by 15th Generation Soke Tsumaki Kazuo
  (Genwa).
</p>

<p>
  On Sunday, September 20, 2026, the United States Tamiya Ryu Iaijutsu Gennankai
  held an Enbu Taikai (Demonstration Tournament) to commemorate the 30th
  Anniversary of the founding of the first officially commissioned foreign
  branch of Tamiya Ryu Iaijutsu in the school's 429 year-old history.
</p>

<LightboxGallery
  imagePreset="fullscreen"
  arrowsConfig={{
    color: "white",
    character: "hide",
    enableKeyboardControl: true,
  }}
>
  <svelte:fragment slot="thumbnail">
    <GalleryThumbnail id={0}>
      <img
        src={picGennankaiAndVips}
        alt="United States Tamiya Ryu Iaijutsu Gennankai and VIPs"
      />
    </GalleryThumbnail>
  </svelte:fragment>

  <GalleryImage id={0}>
    <img
      src={picGennankaiAndVips}
      alt="United States Tamiya Ryu Iaijutsu Gennankai and VIPs"
    />
  </GalleryImage>
</LightboxGallery>

<p>
  This Event was held at the East Lansing, Michigan, Hannah Community Center and
  featured a series of four Enbu (Demonstrations) by the members of the US
  Tamiya Ryu Iaijutsu Gennankai and one by the 15th generation Soke (Headmaster)
  of Tamiya Ryu Iaijutsu Tsumaki Kazuo (Genwa). There was also a Shigin (Poetry)
  Recitation of “A Poem in Praise of Tamiya Ryu Iaijutsu” as well as an
  Inkashiki (Presentation of Certificates of Rank) by Tsumaki Soke. The Event
  concluded with a round of Sanbon Jime; a ceremony used at the last group
  gathering of the Gennankai for the year.
</p>

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
      <GalleryThumbnail id={0}>
        <img src={yujoenbu} alt="Yudansha and Jodansha enbu" />
      </GalleryThumbnail>
      <GalleryThumbnail id={1}>
        <img src={nigemi} alt="Yudansha and Jodansha enbu" />
      </GalleryThumbnail>
    </div>
  </svelte:fragment>

  <GalleryImage id={0}>
    <img
      src={yujoenbu}
      alt="15th Generational Soke of Tamiya Ryu Iaijutsu, Tsumaki Kazuo Genwa sensei, performing Nigemi"
    />
  </GalleryImage>
  <GalleryImage id={1}>
    <img
      src={nigemi}
      alt="15th Generational Soke of Tamiya Ryu Iaijutsu, Tsumaki Kazuo Genwa sensei, performing Nigemi"
    />
  </GalleryImage>
</LightboxGallery>

<p>
  In addition to the 15th generation Soke of Tamiya Ryu Iaijutsu, the Gennankai
  was honored to have the current Consul General of Japan, the Honorable Hajime
  Kishimori; the Mayor of East Lansing, the Honorable Erik Altmann; the Mayor of
  Lansing, the Honorable Andrew Schor and the current Visiting Representative
  from Michigan's Sister State of Shiga Prefecture, Ms. Keiko Nakajima-sama.
  These VIPs are the successors of the same Dignitaries who were present at the
  original Opening Ceremony of the United States Tamiya Ryu Iaijutsu Michigan
  Honbu (Headquarter) Dojo 30 years ago!
</p>

<p>
  Prior to the Enbu Taikai on September 20, Soke Sensei conducted three separate
  sessions of Keiko (Training) on September 17, 18 and 19. These were training
  sessions focused primarily on rehearsals for the Enbu Taikai but also included
  Shinsa (Testing) as well as an intensive “Q & A” period and review of the
  basics of Reishiki (Etiquette) and Kihon Waza (Basic Techniques).
</p>

<p>
  Shinsa conducted by Soke Sensei were as follows: Ikkyu (First Grade) - Peter
  Samurkas-san; Yondan (Fourth Degree)-Kanako Taku-san and Nanadan (7th Degree)
  - Scott Sier (Genfu) Sensei. Gennankai Dai-Sempai William Smith (Genka) Sensei
  was also elevated to the level of Jokyo (Assistant Professor). Everyone
  performed splendidly and received their Menjo (Certificates of Advancement) at
  the Enbu Taikai on Sunday!
</p>

<p class="gallery-link">
  <a href="/events/gallery/anniversary"
    >See the Photo Gallery with pictures from the Enbu Taikai and the previous
    two days of Keiko (Training) and Shinsa (Testing) with Soke Sensei.</a
  >
</p>

<p>
  Following the Enbu Taikai, a Reception for the VIPs and Gennankai members was
  held at the home of Dianne Alexanian (Genan Kouga) Sensei and Michael
  Alexanian (Gennan Buhaku) Sensei. Fortunately, the weather cleared up and
  everyone was able to enjoy lots of good food and drink outside in the gardens
  and reminisce about the events of the week. Also present at the Reception were
  Ms. Cathy Benson and Ms. Sue Fierro; good friends of Dianne's who were
  instrumental in so many of the preparations for the food that was served that
  day, and Mr. Wm. Malcolm Fowlkes, IV (“Gator”), Owner of the Gator Bait
  Premium BBQ Sauce Company which provided the sauce used for the Pulled Pork
  Sliders that were served to the guests by Cathy and Sue. We thank these very
  special friends for helping to make the Reception so successful! Special
  thanks as well to Cathy Jarrett and Michele Hufnagel who created the special
  desserts and “cheesy potatoes” that were served at the Reception and Soke
  Sensei's Birthday Dinner.
</p>

<p>
  Finally, Soke Sensei was presented with a hardcover copy of the new book
  created by William Smith (Genka) Sensei commemorating the 30 year history of
  the US Tamiya Ryu Iaijutsu Gennankai and all the members present received a
  commemorative “Tenugui” (Hand Towel) created in Japan especially for the 30th
  Anniversary Celebration. All six of our Nanadan (7th Degree) members also
  received a special “Reminder Coin” from Gennan Buhaku Sensei to carry with
  them at all times and remind them daily of their commitment to the Code of
  Bushido.
</p>

<p>
  A special thanks to Michael Kirsten-san for his contribution of the 30th
  Anniversary banner and the Gennankai banner that were used at the Enbu Taikai,
  as well as his continued artistic contributions to the Gennankai.
</p>

<p>
  In closing, with 30 years behind us and our 31st year just beginning, we look
  forward to having new opportunities to present the art of Tamiya Ryu Iaijutsu
  to the public at various cultural events and growing our membership so that
  the Intangible Cultural Asset of Tamiya Ryu iaijutsu will continue to be
  available in the United States for another 30 years and many, many more!
</p>
<br />
Respectfully submitted,<br />
Michael Alexanian (Gennan Buhaku) 8th Dan<br />
President<br />
United States Tamiya Ryu Iaijutsu Gennankai

<style>
  .gallery-link {
    text-align: center;
    background: black;
    color: white;
    padding: 2em 1em;
    margin: 2em -0.75em;
  }
</style>
