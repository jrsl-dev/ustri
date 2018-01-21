import React from "react";
import styled from "styled-components";
import Sections from "../../components/Sections";
import Card from "../../components/Card";
import VideoWrapper from "../../components/VideoWrapper";

const NewsFeed = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    margin-bottom: 2rem;
  }
`;

export default () => (
  <Sections.Light>
    <NewsFeed>
      <li>
        <Card>
          <h3>Message from the Head Instructor</h3>
          <p>Gennan Buhaku sensei shares his thoughts on various topics</p>
          <a href="/resources/">Read More</a>
        </Card>
      </li>
      <li>
        <Card>
          <h3>New Reflecting Pool</h3>
          <p>Reflections on rejuvenation and renewal</p>
          <a href="/resources/">Read More</a>
        </Card>
      </li>
      <li>
        <Card>
          <h3> USTRI 20th Anniversary Taikai</h3>
          <p>
            The Executives of the United States Tamiya Ryu Iaijutsu Gengo
            Hojisha no Kai are pleased to announce the following
            Promotions/Honors that were achieved during the recent visit by 15th
            Soke Tsumaki Kazuo Genwa and his Assistant, Endo Tsuyako Gentei
            Sensei. Everyone performed beyond our expectations and made not only
            the visiting Sensei proud but made our hearts swell to almost
            bursting.
          </p>

          <p>
            Special Tamiya Ryu Iaijutsu Genwakai names (Gengo) were also awarded
            to our 3 new Godan members, as well as the honorific title "Kouga"
            to Dianne Genan Sensei. In a very surprising turn of events, Michael
            Alexanian Gennan Buhaku Sensei was elevated to the rank of Hachidan.
          </p>

          <p>
            Soke Sensei also announced to our group the formation of the new
            USTRI Gengo Hojisha no Kai, with Gennan Buhaku Sensei to serve as
            the Kaicho (President) and Genan Sensei as the Fuku-kaicho (Vice
            President). This is truly a unifying step for both the Michigan
            Honbu Dojo and the Southeast Michigan Shibu as there are now 4
            persons in each Branch that possess Gengo and can provide an equal
            presence and voice for Board Meetings, etc.
          </p>

          <p>
            This year’s visit by the Sensei was a truly memorable one, and much
            was revived and renewed during their time here. Commitments were
            solidified, new pledges were made and long-term assignment were
            given, all to the delight of Soke Sensei and Endo Sensei and all who
            were involved to make this event truly "one for the books".
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
        </Card>
      </li>
      <li>
        <Card>
          <h3>Announcement</h3>
          <p>
            We are excited to announce the Michigan Honbu in East Lansing is
            offering a <b>free introductory month</b>.
          </p>
          <a href="/locations/east-lansing-michigan">Learn More</a>
        </Card>
      </li>
      <li>
        <Card>
          <h3>Introduction Video</h3>
          <p>
            Please note that some of the locaiton information in the below video
            has changed but the information specific to the practice of Tamiya
            Ryu Iaijutsu remains the same!
          </p>
          <VideoWrapper>
            <iframe
              width="640"
              height="480"
              src="https://www.youtube.com/embed/w80xfxDG0jE?rel=0&amp;amp;controls=0&amp;amp;showinfo=0"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
        </Card>
      </li>
    </NewsFeed>
  </Sections.Light>
);
