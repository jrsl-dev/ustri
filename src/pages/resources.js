import React from "react";
import Masthead from "../components/Masthead";
import MessageFromHeadInstructor from "../paritals/MessageFromHeadInstructor";
import ReflectingPool from "../paritals/ReflectingPool";
import Sections from "../components/Sections";

const Header = () => (
  <header>
    <Masthead />
  </header>
);

const InstructorThoughts = () => null;
const StudentViews = () => null;
const RecommendReading = () => (
  <Sections.Dark>
    <h2>Recommend Reading</h2>
    <ul>
      <li>Living the Japanese Arts &amp; Ways - H.E. Davey</li>
      <li>In the Dojo - Dave Lowry</li>
      <li>Hagakure - Yamamoto Tsunetomo</li>
      <li>A Book of Five Rings (Go Rin no Sho) - Miyamoto Musashi</li>
      <li>Bushido: The Warrior's Code - Nitobe Inazo</li>
      <li>Japanese Swordsmanship - Warner &amp; Draeger</li>
      <li>The 47 Ronin Story - John Allyn</li>
      <li>The Unfettered Mind - Takuan Soho</li>
      <li>Secrets of the Samurai - Ratti &amp; Westbrook</li>
      <li>Legends of the Samurai - Sato Hiroaki</li>
      <li>The Art of War - Sun Tzu</li>
    </ul>
  </Sections.Dark>
);

const Links = () => (
  <Sections.Dark>
    <h2>Links</h2>
    <h3>Martial Arts Organizations</h3>
    <ul>
      <li>
        <a href="http://tamiyaryuiaizyutu.web.fc2.com/">
          Tamiya Ryu Iaijutsu Genwakai (Japanese)
        </a>
      </li>
    </ul>
    <h3>Suppliers</h3>
    <ul>
      <li>
        <a href="http://tamiyaryuiaizyutu.web.fc2.com/">Budo Aoi</a>
      </li>
      <li>
        <a href="http://www.chenessinc.com/">Cheness</a>
      </li>
      <li>
        <a href="http://www.ebogu.com/">E-Bogu</a>
      </li>
      <li>
        <a href="http://www.swordstore.com/">Swordstore</a>
      </li>
      <li>
        <a href="http://www.tozando.com/">Tozando</a>
      </li>
    </ul>
    <h3>Other Links</h3>
    <ul>
      <li>
        <a href="http://www.akagijapanese.com/">Akagi Restaurant</a>
      </li>
      <li>
        <a href="http://www.akagijapanese.com/">House of Rice</a>
      </li>
      <li>
        <a href="http://www.koryubooks.com/">Koryu Books</a>
      </li>
      <li>
        <a href="http://www.detroit.us.emb-japan.go.jp/">
          Consulate General of Japan in Detroit, Michigan
        </a>
      </li>
      <li>
        <a href="http://www.jnto.go.jp/">Japan National Tourist Organiztion</a>
      </li>
      <li>
        <a href="http://www.mishiga.org/">
          Michigan - Shiga Sister State Program
        </a>
      </li>
    </ul>
  </Sections.Dark>
);

export default () => (
  <div>
    <Header />
    <MessageFromHeadInstructor />
    <ReflectingPool Section={Sections.White} />
    <InstructorThoughts />
    <StudentViews />
    <RecommendReading />
    <Links />
  </div>
);
