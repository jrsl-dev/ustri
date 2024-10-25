<script>
  import { onMount } from "svelte";
  import BiggerPictureThumbnails from "./thumbnails.svelte";
  import "bigger-picture/css";

  const koudansha = [
    ["shinzen", "Bi no Tamiya, Kurai no Tamiya", "960", "1280"],
    ["koudansha", "US Tamiya Ryu Iaijutsu Gennankai Koudansha", "1280", "960"],
    [
      "aisatsu",
      "Soke sensei delivers his opening aisatsu (greeting)",
      "1280",
      "720",
    ],
    ["tachiai-practice", "Practicing tachiai", "1280", "720"],
    [
      "satetsu",
      "Tamiya Ryu Iaijutsu Koran no Maki Yonhonmae - Satetsu",
      "1280",
      "720",
    ],
    [
      "utetsu",
      "Tamiya Ryu Iaijutsu Koran no Maki Gohonmae - Utetsu",
      "1280",
      "720",
    ],
    [
      "murakumo",
      "Tamiya ryu Iaijutsu Koran no Maki Juyohonmae - Murakumo",
      "1280",
      "720",
    ],
    [
      "soke-gennan",
      "Tsumaki Soke sensei and Gennan Buhaku sensei observing practice",
      "1280",
      "960",
    ],
    [
      "soke-gennetsu",
      "Tsumaki soke sensei and Gennetsu sensei observing practice",
      "1280",
      "960",
    ],
  ];

  const koushukai = [
    [
      "group",
      "US Tamiya Ryu Iaijutsu members with Tsumaki Soke sensei",
      "1280",
      "960",
    ],
    [
      "soke-kana",
      "Kana san acting as Tsumaki sensei's primary translator",
      "1280",
      "960",
    ],
    ["group-training-1", "", "1280", "960"],
    ["group-training-2", "", "1280", "960"],
    ["group-training-3", "", "1280", "960"],
    ["group-training-4", "", "1280", "960"],
    ["practice-1", "", "1280", "960"],
    ["practice-2", "", "1280", "960"],
    ["wide-shot", "", "1280", "960"],
    ["group-enbu-1", "", "1280", "720"],
    ["group-enbu-2", "", "1280", "720"],
    ["group-enbu-3", "", "1280", "720"],
    ["gennan-enbu-1", "", "1280", "720"],
    ["gennan-enbu-2", "", "1280", "720"],
    ["soke-enbu-1", "", "1280", "720"],
    ["soke-enbu-2", "", "1280", "720"],
    ["mvp", "", "1280", "960"],
  ];

  const openPractice = [
    ["hannah-community-center", "", "1280", "960"],
    ["gennankai", "", "1280", "960"],
    ["gennankai-shinsa-koushukai", "", "960", "1280"],
    ["preparing", "", "1280", "960"],
    ["shinzen-hairei", "", "1280", "720"],
    ["group-1", "", "1280", "960"],
    ["group-2", "", "1280", "960"],
    ["tsukahazushi-bunkai", "", "1280", "720"],
    ["tsukahazushi", "", "1280", "720"],
    ["group-tsukahazushi", "", "1280", "720"],
    ["chiburi", "", "1280", "720"],
    ["tachiiai", "", "1280", "720"],
    ["soke-nigemi", "", "1280", "720"],
    ["jimi-shinsa", "", "1280", "720"],
    ["discussion", "", "1280", "960"],
  ];

  onMount(() => {
    const koudanshaThumbnails = new BiggerPictureThumbnails({
      target: document.getElementById("koudansha"),
    });
    const koudanshaLinks = document.querySelectorAll("#koudansha > a");
    for (let link of koudanshaLinks) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        koudanshaThumbnails.open({
          el: e.currentTarget,
          items: koudanshaLinks,
        });
      });
    }
    const koushukaiThumbnails = new BiggerPictureThumbnails({
      target: document.getElementById("koushukai"),
    });
    const koushukaiLinks = document.querySelectorAll("#koushukai > a");
    for (let link of koushukaiLinks) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        koushukaiThumbnails.open({
          el: e.currentTarget,
          items: koushukaiLinks,
        });
      });
    }
    const openPracticeThumbnails = new BiggerPictureThumbnails({
      target: document.getElementById("openPractice"),
    });
    const openPracticeLinks = document.querySelectorAll("#openPractice > a");
    for (let link of openPracticeLinks) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openPracticeThumbnails.open({
          el: e.currentTarget,
          items: openPracticeLinks,
        });
      });
    }
  });
</script>

<section>
  <p>
    From September 18 to 25 of this year, Tamiya Ryu Iaijutsu 15th Soke Tsumaki
    Kazuo Genwa visited Michigan again after a 7 year hiatus. During that time,
    Soke Sensei’s wife passed away and he retired from his position as an
    Architect with the Yokohama Prefectural Government after over 60 years of
    service. Having adjusted to living a much different daily lifestyle, he
    decided that the time had finally come to make the trip to MIchigan to meet
    with the members of the Tamiya Ryu Iaijutsu Gennankai once again.
  </p>

  <p>
    His flight arrived ahead of schedule on September 18 and he was met at the
    airport in Detroit by myself and James Russell (Gennetsu), Gennankai Head
    Instructor. Surprisingly, he was most energetic after his long flight and
    was excited to settle in at our home for the coming week and begin his busy
    schedule of private training sessions and seminars. It was wonderful to have
    him as our house guest for the week and, after a delicious home-cooked meal,
    relax with us and enjoy “whiskey time”!
  </p>

  <p>
    The following day, September 19th, after breakfast and spending the morning
    relaxing and going on “Sanpou” (long walk) with me and Riley-chan (our
    Corgi), Soke Sensei and I hit the floor of the Honbu Dojo for 4 hours of
    O-keiko. During that time, Soke Sensei reviewed many of the topics that he
    would be presenting over the next 3 days of seminars and spent considerable
    time instructing me about the proper way to perform “Tachi-Iai”: a method of
    performing Tamiya Ryu Iaijutsu Kata that are normally done from Seiza
    (kneeling posture) from a standing position. This method was created for two
    reasons: either for a formal demonstration at an outside venue or for those
    who are unable to sit in Seiza due to the condition of their knees. It was a
    real joy to be back in the Dojo training with Soke Sensei again and renewing
    our relationship as teacher and student and brothers-in-arms. That evening
    we introduced Soke Sensei to Tacos for dinner…it was the first time for him
    to experience assembling this traditional Mexican delicacy!
  </p>

  <h3>Koudansha Seminar - 9/20/2024</h3>

  <p>
    Friday, September 20, was the day set aside for the Kodansha (High-ranking
    Student) Seminar which was held in the Dance Studio of the local Community
    Center. From 12:00-4:00pm Soke Sensei gave instruction in the proper form of
    “Tachiai” or “Enbu (formal demonstration)/Shinsa (Testing) Moderating”, and
    reviewed all 14 of the Kata of the advanced scroll of Tamiya Ryu Iaijutsu.
    Fortunately, William Smith (Genka) Sensei was able to be here for the whole
    weekend from his home in Texas and captured all of Soke Sensei’s lectures on
    video for future editing and production. After the seminar, all Kodansha
    were invited to our home for a Pizza Party, social time with Soke Sensei and
    many, many rounds of “Kanpai!”
  </p>

  <div id="koudansha" class="thumbnails">
    {#each koudansha as [img, alt, width, height]}
      <a
        href={`./assets/2024-soke-sensei-visit/koudansha/${img}.jpg`}
        data-img={`./assets/2024-soke-sensei-visit/koudansha/${img}.jpg`}
        data-thumb={`./assets/2024-soke-sensei-visit/koudansha/thumbs/${img}.jpg`}
        data-width={width}
        data-height={height}
        data-alt={alt}
        data-max-zoom={1}
        class="thumbnails_img"
      >
        <img
          src={`./assets/2024-soke-sensei-visit/koudansha/thumbs/${img}.jpg`}
          {alt}
          loading="lazy"
        />
      </a>
    {/each}
  </div>

  <p>
    At this point I must acknowledge the invaluable contribution made by our
    Southeast Michigan Branch member Kanako Taku-san, who acted as Soke Sensei’s
    primary translator for the entire weekend. Her translations of Soke Sensei’s
    instruction and the questions asked by Gennankai members was critical to
    everyone’s understanding of the material being taught and she is to be
    highly commended for her efforts!
  </p>

  <p>
    Saturday, September 21 was the first of two “Zentai Koushuukai” or
    “All-Member Practices” held at the Commmunity Center with the second session
    held the following day on September 22. The activities over these two days
    included: a review of all 11 Kata of the first scroll, formal Enbu by all
    students following the proper Tachiai guidelines, Shinsa, Inkashiki
    (Certification Ceremony), and discussion of the topics “be bold in your
    Iaijutsu demonstration but humble in your heart”, “surround yourself with
    swords” and “your hand must be ever changing.” Following the Saturday
    seminar, all members gathered at our home for Sushi, BBQ Spareribs (Soke
    Sensei’s favorite!) and many more rounds of “Kanpai!” Special gifts for Soke
    Sensei were also presented; the most notable of which were a handmade
    wristwatch created by Daniel Mordan (Genzan) Sensei, Southeast Michigan
    Branch Manager, with artwork contributed by Southeast Branch member and
    Gennankai Artist Michael Kirsten and leather Tsuba presented by Andrew
    McMurphy (Genkai) Sensei.
  </p>

  <h3>Koushukai - 9/21/2024</h3>

  <div id="koushukai" class="thumbnails">
    {#each koushukai as [img, alt, width, height]}
      <a
        href={`./assets/2024-soke-sensei-visit/koushukai-day-1/${img}.jpg`}
        data-img={`./assets/2024-soke-sensei-visit/koushukai-day-1/${img}.jpg`}
        data-thumb={`./assets/2024-soke-sensei-visit/koushukai-day-1/thumbs/${img}.jpg`}
        data-width={width}
        data-height={height}
        data-alt={alt}
        data-max-zoom={1}
        class="thumbnails_img"
      >
        <img
          src={`./assets/2024-soke-sensei-visit/koushukai-day-1/thumbs/${img}.jpg`}
          {alt}
          loading="lazy"
        />
      </a>
    {/each}
  </div>

  <h3>Open Practice - 9/22/2024</h3>

  <div id="openPractice" class="thumbnails">
    {#each openPractice as [img, alt, width, height]}
      <a
        href={`./assets/2024-soke-sensei-visit/koushukai-day-2/${img}.jpg`}
        data-img={`./assets/2024-soke-sensei-visit/koushukai-day-2/${img}.jpg`}
        data-thumb={`./assets/2024-soke-sensei-visit/koushukai-day-2/thumbs/${img}.jpg`}
        data-width={width}
        data-height={height}
        data-alt={alt}
        data-max-zoom={1}
        class="thumbnails_img"
      >
        <img
          src={`./assets/2024-soke-sensei-visit/koushukai-day-2/thumbs/${img}.jpg`}
          {alt}
          loading="lazy"
        />
      </a>
    {/each}
  </div>

  <p>
    Monday, September 23, was a very special day devoted to two activities:
    first, a private O-keiko at the Honbu Dojo for Head Instructor James Russell
    (Gennetsu) Sensei with Kana-san acting as translator, and a birthday party
    in the evening for Soke Sensei at Ai Fusion Sushi Restaurant in East
    Lansing. About 10 members attended the party to commemorate Soke Sensei’s
    78th birthday and a splendid time was had by all.
  </p>

  <p>
    As Soke Sensei neared the end of his time in Michigan, Tuesday, September
    24, was a day devoted to “Omiyage” (souvenir gift) shopping, visiting
    several of our close friends and taking time to relax and pack for the trip
    home on Wednesday, September 25. During our “whiskey time” that final
    evening, Soke Sensei made a number of very positive comments and
    observations about the activities of the past week. The most significant
    comment, to me, was how impressed he said he was with the quality of the
    many questions that were asked by the members of the Gennankai during both
    training time and social time. He also said that he was extremely pleased
    with the steps that are being taken to make sure that the Gennankai
    continues in perpetuity.
  </p>

  <p>
    Sadly, we had to bid goodbye to Soke Sensei the next day. Before leaving our
    home with me to ride the Michigan Flyer bus to the Detroit airport, he
    reiterated his promise to us to return to Michigan in 3 years time amid many
    tears and wishes of “Ja mata” (see you again soon). After going through the
    check-in process at the airport it was finally our time to say an emotional
    “Ja mata” to each other and for me to wish Soke Sensei a safe and easy
    journey back home.
  </p>

  <p>
    Reflecting back over the events of that incredible week as I rode the bus
    back to East Lansing, I was struck by the fact of how fortunate the members
    of the Gennankai are to have such a close and meaningful relationship with
    Soke Sensei. It was plain to see during that week that the Gennankai
    occupies a special place in his heart and always will…something I believe is
    quite unique in American Martial Art Organizations. It is now up to all of
    us to take everything that we learned from him during his visit to heart and
    diligently apply it to our practice of Tamiya Ryu Iaijutsu and to our lives
    as well.
  </p>

  <p>Respectfully submitted,</p>

  Michael Alexanian (Gennan Buhaku)<br />
  President<br />
  Tamiya Ryu Iaijutsu Gennankai
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

  .thumbnails_img {
    scroll-snap-align: center;
  }

  .thumbnails_img > img {
    max-height: 12rem;
  }

  @media (min-width: 475px) {
    .thumbnails_img > img {
      max-height: 19rem;
    }
  }
</style>
