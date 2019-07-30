import React from "react";
import styled from "styled-components";
import Sections from "../../components/styled/Sections";
import FramedImage from "../../components/styled/FramedImage";
import Card from "../../components/styled/Card";
import VideoWrapper from "../../components/styled/VideoWrapper";
import katana from "../../assets/katana.svg";
import taikai from "../../assets/20th-anniversary-taikai.jpg";

const Katana = styled.img`
  justify-self: center;
  width: 100%;
  max-width: 25rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const TaikaiPicture = FramedImage.extend`
  margin: 2em 1em 3em;
`;

const NewsFeed = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    margin-bottom: 2rem;
  }
`;

export default () => (
  <Sections.Aside>
    <Katana src={katana} alt="katana" />
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
          <h3>2019 US Tamiya Ryu Gennankai Koshukai-Shinsakai</h3>
          <p>
            The United States Tamiya Ryu Iaijutsu Koshu-Shinsakai was held at
            the Hannah Community Center in East Lansing, Michigan on Saturday
            July 20th, 2019. Congratulations to all that tested and passed their
            examination. Everyone did a wonderful job and we were impressed by
            everyone's progress over the year!
          </p>

          <p>
            This year the MVP (most valuble performance, i.e. enbu) was awarded
            to Dan Mordan (Genzan) sensei and three of our long time assistant
            instructors, Joe Smith (Genko), James Russell (Gennetsu), and Daniel
            Wung (Genkou) were officailly licensed as instructors under the
            United States Tamiya Ryu Iaijutsu Gennankai.
          </p>
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
  </Sections.Aside>
);
