import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <section role="main">
    <div class="masthead masthead--home-page row">
      <h1 class="masthead__title">
        <span class="masthead__title-container">
          <div class="masthead__title--main">United States</div>
          <div class="masthead__title--main">Tamiya Ryu Iaijutsu</div>
        </span>
      </h1>
    </div>
    <div class="block block--light row">
      <div class="col-xs-12 center">
        <h2 class="block__title block__title--underline">
          A traditional Japanese sword drawing martial art in Michigan
        </h2>
      </div>
      <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 center">
        <p class="block__copy">
          The United States Tamiya Ryu Iaijustu Ogranization is an official
          branch of the Tamiya Ryu Iaijutsu Genwakai and is headquarted in East
          Lansing, Michigan with a branch dojo located in Macomb, Michigan.
        </p>
        <p class="block__copy">
          We are the official representatives of this 400+ year old koryu art in
          the United States. Here you will find the history of both Tamiya Ryu
          and its history in the United States as well as information on where
          to find a dojo and how to join. We hope to see you on the dojo floor
          soon!
        </p>
        <a href="/training-information.html" class="cta">
          Learn more
        </a>
      </div>
      <div class="col-xs-10 col-xs-offset-1">
        <ul class="news">
          <li class="news__item">
            <div class="card card--max-width row">
              <div class="col-xs-12 col-lg-5">
                <h3 class="card__heading">
                  <span class="card__icon icon-typing" /> Message from the Head
                  Instructor
                </h3>
              </div>
              <div class="col-xs-12 col-lg-5">
                <p class="card__body">
                  Gennan Buhaku sensei shares his thoughts on various topics
                </p>
              </div>
              <div class="col-xs-12 col-lg-2 card__cta-container">
                <a
                  href="/resources.html"
                  class="cta cta--secondary cta--transparent"
                >
                  Read More
                </a>
              </div>
            </div>
          </li>
          <li class="news__item">
            <div class="card card--max-width row">
              <div class="col-xs-12 col-lg-5">
                <h3 class="card__heading">
                  <span class="card__icon icon-typing" /> New Reflecting Pool
                </h3>
              </div>
              <div class="col-xs-12 col-lg-5">
                <p class="card__body">
                  Reflections on rejuvenation and renewal
                </p>
              </div>
              <div class="col-xs-12 col-lg-2 card__cta-container">
                <a
                  href="/articles/rejuvenation-and-renewal.html"
                  class="cta cta--secondary cta--transparent"
                >
                  Read More
                </a>
              </div>
            </div>
          </li>
          <li class="news__item">
            <div class="card card--max-width row">
              <div class="col-xs-12 col-lg-5">
                <h3 class="card__heading">
                  <span class="card__icon icon-megaphone" /> USTRI 20th
                  Anniversary Taikai
                </h3>
              </div>
              <div class="col-xs-12 col-lg-5">
                <p class="card__body">
                  The Executives of the United States Tamiya Ryu Iaijutsu Gengo
                  Hojisha no Kai are pleased to announce the following
                  Promotions/Honors that were achieved during the recent visit
                  by 15th Soke Tsumaki Kazuo Genwa and his Assistant, Endo
                  Tsuyako Gentei Sensei. Everyone performed beyond our
                  expectations and made not only the visiting Sensei proud but
                  made our hearts swell to almost bursting.
                </p>

                <p class="card__body">
                  Special Tamiya Ryu Iaijutsu Genwakai names (Gengo) were also
                  awarded to our 3 new Godan members, as well as the honorific
                  title "Kouga" to Dianne Genan Sensei. In a very surprising
                  turn of events, Michael Alexanian Gennan Buhaku Sensei was
                  elevated to the rank of Hachidan.
                </p>

                <p class="card__body">
                  Soke Sensei also announced to our group the formation of the
                  new USTRI Gengo Hojisha no Kai, with Gennan Buhaku Sensei to
                  serve as the Kaicho (President) and Genan Sensei as the
                  Fuku-kaicho (Vice President). This is truly a unifying step
                  for both the Michigan Honbu Dojo and the Southeast Michigan
                  Shibu as there are now 4 persons in each Branch that possess
                  Gengo and can provide an equal presence and voice for Board
                  Meetings, etc.
                </p>

                <p class="card__body">
                  This year’s visit by the Sensei was a truly memorable one, and
                  much was revived and renewed during their time here.
                  Commitments were solidified, new pledges were made and
                  long-term assignment were given, all to the delight of Soke
                  Sensei and Endo Sensei and all who were involved to make this
                  event truly "one for the books".
                </p>

                <h4>一級 (Ikkyu)</h4>
                <ul>
                  <li>Michael Kirsten マイケル・クリステン</li>
                </ul>

                <h4>初段 (Shodan)</h4>
                <ul>
                  <li>Xiaohan Bao シャオハン・バオ</li>
                </ul>

                <h4>弐段 (Nidan)</h4>
                <ul>
                  <li>James Happell ジェームズ・ハッペル</li>
                </ul>

                <h4>参段 (Sandan)</h4>
                <ul>
                  <li>Raymond Bowdish レイムンド・ボディシュ</li>
                  <li>Bryan Cochren ブライアン・カクレン</li>
                </ul>

                <h4>四段 (Yondan)</h4>
                <ul>
                  <li>Andrew McMurphy アンドリュー・マクマーフィ</li>
                </ul>

                <h4>語段(Godan)</h4>
                <ul>
                  <li>James Russell ジェームズ・ラッセル - 元熱 (Gennetsu)</li>
                  <li>Joseph Smith ジョサフ・スミス - 元固 (Genko)</li>
                  <li>Daniel Wung ダニエル・ワゥング - 元光 (Genkou)</li>
                </ul>

                <h4>六段 (Rokudan)</h4>
                <ul>
                  <li>William Smith ウィリアム・スミス - 元火 (Genka)</li>
                  <li>Thomas Hufnagel トマス・ハフネゲル - 元水 (Gensui)</li>
                  <li>Scott Sier スコット・シアー - 元風 (Genfu)</li>
                  <li>Daniel Mordan ダニエル・モーダン - 元山 (Genzan)</li>
                  <li>Douglas Jarrett ダグラス・ジャレット - 元地 (Genchi)</li>
                </ul>
              </div>
            </div>
          </li>

          <li class="news__item">
            <div class="card card--max-width row">
              <div class="col-xs-12 col-lg-5">
                <h3 class="card__heading">
                  <span class="card__icon icon-megaphone" /> Announcement
                </h3>
              </div>
              <div class="col-xs-12 col-lg-5">
                <p class="card__body">
                  We are excited to announce the Michigan Honbu in East Lansing
                  is offering a <b>free introductory month</b>. Visit the{" "}
                  <a href="/training-information.html">
                    training information page for more information!
                  </a>
                </p>
              </div>
              <div class="col-xs-12 col-lg-2 card__cta-container">
                <a
                  href="/east-lansing-michigan-honbu-dojo.html"
                  class="cta cta--secondary cta--transparent"
                >
                  Learn More
                </a>
              </div>
            </div>
          </li>
          <li class="news__item">
            <div class="card card--max-width row">
              <div class="col-xs-12 col-lg-5">
                <h3 class="card__heading">
                  <span class="card__icon icon-youtube" /> Introduction Video
                </h3>
              </div>
              <div class="col-xs-12 col-lg-5">
                <p class="card__body">
                  Please note that some of the locaiton information in the below
                  video has changed but the information specific to the practice
                  of Tamiya Ryu Iaijutsu remains the same!
                </p>
              </div>
              <div class="col-xs-12 center">
                <iframe
                  width="640"
                  height="480"
                  src="https://www.youtube.com/embed/w80xfxDG0jE?rel=0&amp;amp;controls=0&amp;amp;showinfo=0"
                  frameborder="0"
                  allowfullscreen
                  class="video center"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="block row center">
      <div class="col-xs-8 col-xs-offset-2">
        <h2 class="block__title block__title--underline">Locations</h2>
      </div>
      <div class="col-xs-10 col-xs-offset-1 block__content">
        <div class="row">
          <div class="col-xs-12 col-sm-6 location-block">
            <h3 class="block__sub-title">East Lansing, Michigan</h3>
            <div class="media media--center media--max-width">
              <img
                src="images/east-lansing-location.jpg"
                class="media__image"
              />
              <div class="media__panel">
                <h4 class="media__title">Michigan Honbu Dojo</h4>
                <p class="media__body">
                  The Michigan Honbu dojo is the headquarters for Tamiya Ryu
                  Iajiutsu operations in the United States.
                </p>
                <div class="center">
                  <a
                    href="/east-lansing-michigan-honbu-dojo.html"
                    class="media__cta"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 location-block">
            <h3 class="block__sub-title">Macomb, Michigan</h3>
            <div class="media media--center media--max-width">
              <img src="images/macomb-location.jpg" class="media__image" />
              <div class="media__panel">
                <h4 class="media__title">Southeast Michigan Dojo</h4>
                <p class="media__body">
                  The Southeast Michigan Branch dojo holds class at Macomb
                  Township Parks &amp; Recreation Center.
                </p>
                <div class="center">
                  <a
                    href="/southeast-michigan-branch-dojo.html"
                    class="media__cta"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 location-block location-block--announcement">
          <div class="card card--max-width row">
            <div class="col-xs-12">
              <h3 class="card__heading">
                <span class="card__icon icon-megaphone" /> Announcement
              </h3>
            </div>
            <div class="col-xs-12">
              <div class="card__body">
                {" "}
                <h4 class="block__title">
                  Southeast Michigan Branch To Move Operations!
                </h4>
                <p>
                  We would like to announce that the Southeast Michigan Branch
                  Dojo will be moving its operations to Macomb Township starting
                  in 2017. Classes will still be held on{" "}
                  <strong>Saturdays from 10:30am to 12:00pm</strong> at the
                  Macomb Township Community Recreation Center.{" "}
                </p>
                <p>
                  Registration will be handled through Macomb Township Parks
                  &amp; Recreation.{" "}
                </p>
                <p>
                  Please visit <a href="http://www.gomtpr.org/">gomtpr.org</a>{" "}
                  for registration details. Other inquiries should be directed
                  to Genzan sensei at{" "}
                  <a href="mailto:genzan@ustamiyaryu.org">
                    genzan@ustamiyaryu.org
                  </a>.{" "}
                </p>
                <p class="center">We hope to see you there!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row center">
          <div class="col-xs-12">
            <article class="block__content">
              <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                <h2 class="block__title block__title--underline">
                  Learn About Japanese Swordsmanship
                </h2>
                <p class="block__copy">
                  Train your body and mind. Tamiya Ryu is a koryu (literally,
                  "old school") sword art not taught outside Japan until
                  recently. The United States Tamiya Ryu Iaijutsu Orgranization
                  is the only official group practicing this art in America.
                </p>
                <p>
                  <a href="/contact.html" class="cta">
                    Contact Us
                  </a>
                </p>
                <img src="images/katana.svg" class="katana-image" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="block block--light row what-is-iaijutsu center">
      <div class="col-xs-12">
        <h2 class="block__title block__title--underline">What Is Iaijutsu</h2>
      </div>
      <div class="col-xs-10 col-xs-offset-1">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-0">
            <article class="block__content">
              <h3 class="block__title">Iaijutsu</h3>
              <img
                src="images/iaijutsu-kanji.svg"
                class="what-is-iaijutsu__kanji"
              />
              <p class="block__copy">
                Iaijutsu is a martial art (bujutsu) that strives to supress a
                sudden attack by the attacker against the defender using a
                single, swift stroke of the sword and seeks to master the
                various principles of drawing, re-sheathing and using the sword.
              </p>
              <p class="block__copy">
                Furthermore, iaijutsu is a martial way (budo) as it practiced
                with a humble and modest heart and continually trains the
                spirit.
              </p>
            </article>
          </div>
          <div class="col-xs-12 col-md-6 col-md-offset-0">
            <article class="block__content">
              <h3 class="block__title">Tamiya Ryu</h3>
              <img
                src="images/tamiyaryu-kanji.svg"
                class="what-is-iaijutsu__kanji"
              />
              <p class="block__copy">
                Tamiya Ryu Iaijutsu is a military art (bugei) that was
                introduced in the Tensho period (1573-1591) by its founder,
                Tamiya Heibei Narimasa. Narimasa, together with Katayama Hoki no
                kami Hisayasu (the founder of Hoki Ryu) and Sekiguchi Jushin
                (the founder of Sekiguchi Ryu) were pupiles of Hayashizake
                Jinsuke Shigenobu, the founder of iaijutsu.
              </p>
              <p class="block__copy">
                The style characteristics of the Tamiya school of swordsmenship
                are: First volume (Omote no maki) containing evelen kata and
                Second volume (Koran no maki) containing fourteen kata.
              </p>
              <p class="block__copy">
                As a serious course of study, learning Tamiya Ryu Iaijutsu
                involves having a clear understanding of the concepts known as
                "Tamiya Nobility" and "Tamiya Purity".
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="block block--darkest row center">
      <div class="col-xs-10 col-xs-offset-1">
        <h2 class="block__title block__title--underline block__title--light">
          United States Tamiya Ryu Iaijutsu
        </h2>
        <p class="block__copy">
          Training focuses on the harmonization of mind, body, and spirit
          through the practice and performance of kata (pre-arranged
          techniques). Techniques are practiced with the philosophy of the
          "sword which gives life (Katsujin no Ken)," as opposed to the "sword
          which takes life (Satsujin no Ken)."
        </p>
        <p class="block__copy">
          Emphasis is placed on basic techniques. To properly learn kata means
          studying 1) how to cut using the scabbard opening (sayaguchi) and 2)
          how to use the scabbard hand (sayate).
        </p>
        <img src="images/mon.svg" class="kikyo-mon" />
        <p class="block__copy">
          Occasionally students will also practice Kenshibu - a traditional
          Japanese dance utilizing sword and fan. Kenshibu is performed to the
          accompaniment of poems (sung in a style called Shigin) that depict
          famous events in Japanese history.
        </p>
      </div>
    </div>
    <div class="block row center">
      <div class="block__content ki-ken-tai-section">
        <div class="col-xs-8 col-xs-offset-2 center col-sm-4 col-sm-offset-0">
          <div class="ki-ken-tai">
            <img src="images/ki-kanji.svg" class="ki-ken-tai__kanji" />
            <h3 class="ki-ken-tai__title">Ki</h3>
            <p class="ki-ken-tai__body">
              Spirit. Tamiya Ryu trains the spirit and aims to create a
              harmonious character.
            </p>
          </div>
        </div>
        <div class="col-xs-8 col-xs-offset-2 center col-sm-4 col-sm-offset-0">
          <div class="ki-ken-tai">
            <img src="images/ken-kanji.svg" class="ki-ken-tai__kanji" />
            <h3 class="ki-ken-tai__title">Ken</h3>
            <p class="ki-ken-tai__body">
              Sword. The sword of Tamiya Ryu is one that gives life or katsujin
              no ken.
            </p>
          </div>
        </div>
        <div class="col-xs-8 col-xs-offset-2 center col-sm-4 col-sm-offset-0">
          <div class="ki-ken-tai">
            <img src="images/tai-kanji.svg" class="ki-ken-tai__kanji" />
            <h3 class="ki-ken-tai__title">Tai</h3>
            <p class="ki-ken-tai__body">
              Body. By harmonizing the spirit, sword, and body, the practice of
              Iaijutsu becomes dignified.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndexPage;
