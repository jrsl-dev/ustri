<script>
  import Highlight from "$lib/components/Highlight.svelte";
  import hanko from "$lib/assets/hanko.png";
  import gennankaimon from "$lib/assets/gennankai-mon.svg";
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

  <p>
    Learn more about <a href="/training">training</a> in Tamiya Ryu.
  </p>

  <p>
    Find a dojo <a href="/loctions">location</a>.
  </p>

  <p>Explore Tamiya Ryu's long <a href="/history">history</a>.</p>
</section>

<h2>Announcements</h2>

<Highlight>
  <h3>Fall 2021 All Member Practice</h3>
  <p>
    The United States Tamiya Ryu Iaijutsu Gennankai held an All Member practice
    on Oct. 9th, 2021 at the Hannah Community Center in East Lasing, Michigan.
    This practice marked a major turning point in USTRI history. James Russell
    (Gennetsu) Sensei was promoted to Rokudan (6th Degree) and awarded the title
    Jokyo (Associate Professor) by the 15th Headmaster, Tsumaki Kazuo (Genwa)
    Soke Sensei. And after 25 years as Head Instructor for USTRI, Michael
    Alexanian (Gennan) Sensei, has decided to hand that responisbility over to
    Russell Gennetsu Sensei. Alexanian Gennan Buhaku Sensei will remain
    President of the Gennankai and function as Special Lecture and Emcee at
    future All Member practices.
  </p>

  <p>
    Gennan Buhaku Sensei and Gennetsu Sensei have authored a joint article for
    this month's Messge from the Head Instructor. Please visit the latest <a
      href="/articles/message-from-the-head-instructor"
      >Message from the Head Instructor</a
    > section to learn more about this important news and exciting transtions in
    United States Tamiya Ryu history.
  </p>

  <p>
    Gennan Buhaku Sensei has also written an article for the <a
      href="/articles/reflecting-pool">Reflecting Pool</a
    > on upcoming changes to that section as well.
  </p>
</Highlight>

<h2>Current articles</h2>

<Highlight>
  <h3>Message from the Head Instructor</h3>
  <p>
    As the United States Tamiya Ryu Iaijutsu Gennankai celebrates a quarter
    century since it’s founding this year, it is important to look ahead to the
    next quarter century and see what steps can be taken to ensure its
    longevity.
  </p>
  <a href="/articles/message-from-the-head-instructor">read more...</a>
</Highlight>

<Highlight>
  <h3>Relecting Pool</h3>
  <p>
    For the past 25 years, this particular column of our website has been
    devoted to articles of an introspective and contemplative nature as
    reflected in the practice of Tamiya Ryu Iaijutsu in particular, and the
    traditional Japanese martial arts in general.
  </p>
  <a href="/articles/reflecting-pool">read more...</a>
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
  .tamiya-ryu-iaijutsu aside {
    font-size: 2.5em;
    text-align: center;
    text-shadow: 2px 2px 1px rgb(0 0 0 / 8%);
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
</style>
