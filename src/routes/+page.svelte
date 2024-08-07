<script>
  // @ts-nocheck
  import Highlight from "$lib/components/Highlight.svelte";
  import hanko from "$lib/assets/hanko.png";
  import gennankaimon from "$lib/assets/gennankai-mon.svg";
  import Announcements from "$lib/content/announcements/2024-tsumaki-soke-sensei-visit.md";
  import soke from "$lib/assets/soke.jpg";
</script>

<section>
  <h2>Traditional Japanese Swordsmanship</h2>

  <img
    src={gennankaimon}
    class="marunikikyo-copy-float"
    width="128"
    height="128"
    alt="maru ni kikyo kamon. stylized balloon flower surround by a circle"
  />
  <p>
    Train your body and mind. Tamiya Ryu is a koryu (literally, "old school")
    sword art not taught outside Japan until recently. The United States Tamiya
    Ryu Iaijustu Gennankai is an official branch of the Tamiya Ryu Iaijutsu
    Genwakai in Japan and is headquarted in <a
      href="/locations/east-lansing-michigan-honbu-dojo"
    >
      East Lansing, MI</a
    >
    with branch dojo located in
    <a href="/locations/macomb-michigan-dojo">Macomb, MI</a>
    and <a href="/locations/brighton-michigan-dojo">Brighton, MI</a>.
  </p>

  <img
    src={hanko}
    class="hanko"
    width="128"
    height="128"
    alt="the official seal (hanko) of United States Tamiya Ryu Iaijutsu"
  />

  <p>
    We are the official representatives of this 400+ year old koryu art in the
    United States. Here you will find the history of both Tamiya Ryu and its
    history in the United States as well as information on where to find a dojo
    and how to join us for practice.
  </p>

  <iframe
    class="yt"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/w80xfxDG0jE"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />

  <p>
    Learn more about <a href="/training">training</a> in Tamiya Ryu.
  </p>

  <p>
    Find a dojo <a href="/locations">location</a>.
  </p>

  <p>Explore Tamiya Ryu's long <a href="/history">history</a>.</p>
</section>

<h2>Announcements</h2>

<Highlight>
  <Announcements>
    <img
      src={soke}
      alt="Tamiya Ryu Iaijutsu 15th Soke, Tsumaki Kazuo Genwa"
      width="240"
      height="360"
      class="soke-img"
    />
  </Announcements>
</Highlight>

<h2>Current articles</h2>

<Highlight>
  <h3>Message from the Head Instructor</h3>
  <p>
    <a href="/articles/message/the-path-is-the-path">The Path is the Path</a>.
    Encouragement to keep training, even when it seems like you've done this all
    before. That <em>is</em> the path and what emerges is Tamiya Beauty and Tamiya
    Nobility.
  </p>
</Highlight>

<Highlight>
  <h3>Reflecting Pool</h3>
  <p>
    Daniel Wung (Genkou) sensei asks the question, <a
      href="/articles/reflecting/aging-gracefully"
      >Is it possible to Age Gracefully in a martial art?</a
    >
  </p>
</Highlight>

<section class="tamiya-ryu-iaijutsu">
  <h2>Tamiya Ryu Iaijutsu</h2>

  <div>
    <h3>Tamiya Ryu</h3>

    <aside>田宮流</aside>

    <p>
      Tamiya Ryu Iaijutsu is a military art (bugei) that was introduced in the
      Tensho period (1573-1591) by its founder, Tamiya Heibei Narimasa.
      Narimasa, together with Katayama Hoki no kami Hisayasu (the founder of
      Hoki Ryu) and Sekiguchi Jushin (the founder of Sekiguchi Ryu) were pupiles
      of Hayashizake Jinsuke Shigenobu, the founder of iaijutsu.
    </p>

    <p>
      The style characteristics of the Tamiya school of swordsmenship are: First
      volume (Omote no maki) containing evelen kata and Second volume (Koran no
      maki) containing fourteen kata.
    </p>
  </div>

  <div>
    <h3>Iaijutsu</h3>

    <aside>居合術</aside>

    <p>
      Iaijutsu is a martial art (bujutsu) that strives to supress a sudden
      attack by the attacker against the defender using a single, swift stroke
      of the sword and seeks to master the various principles of drawing,
      re-sheathing and using the sword.
    </p>

    <p>
      Furthermore, iaijutsu is a martial way (budo) as it practiced with a
      humble and modest heart and continually trains the spirit.
    </p>
  </div>
</section>

<section>
  <p>
    As a serious course of study, learning Tamiya Ryu Iaijutsu involves having a
    clear understanding of the concepts known as "Tamiya Nobility" and "Tamiya
    Purity"
  </p>

  <p>
    Visit <a href="/training">the training page</a> to learn more about
    practicing Tamiya ryu. For more informaiton concerning the history of
    development of Tamiya Ryu please visit
    <a href="/history">the history page</a>.
  </p>
</section>

<style>
  .soke-img {
    max-inline-size: 100%;
    block-size: auto;
    display: block;
    margin: 0 auto;
  }

  .tamiya-ryu-iaijutsu aside {
    font-size: 2.5em;
    text-align: center;
    text-shadow: 2px 2px 1px rgb(0 0 0 / 8%);
  }

  .hanko {
    float: right;
    width: 8em;
  }

  .marunikikyo-copy-float {
    float: left;
    width: 8em;
    shape-outside: circle(46%) margin-box;
    margin-right: 2em;
  }

  /* .soke-img {
    margin: 0 auto;
  } */

  .yt {
    width: 100%;
    margin: 2em 0;
  }

  @media (min-width: 600px) {
    .soke-img {
      display: inline;
      float: left;
      margin: 0 1.5em 1em 0;
    }
  }

  @media (min-width: 700px) {
    .tamiya-ryu-iaijutsu {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 4em;
    }

    .tamiya-ryu-iaijutsu h2 {
      grid-column: span 2;
    }

    .tamiya-ryu-iaijutsu h3 {
      border-left: 0;
    }
  }
</style>
