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
          <h3>Announcement</h3>
          <h4>USTRI Gennankai Response to the Current Pandemic</h4>
          <p>
            Due to these uncertain and challenging times we currently find
            ourselves in, I would like to take this opportunity to update all of
            you as to our response to the Corona Virus situation and what lies
            ahead for our organization.
          </p>

          <p>
            For the health and safety of all members of the Gennankai, all of
            our Dojo (Honbu, Southeast Michigan and Brighton) are currently
            closed until July 1. While our sincere intention is to resume
            regular Training and Classes in July, it will depend on whether or
            not the State of Emergency and the Stay at Home Order have been
            lifted by the Governor. If we are in the clear as of July 1, all our
            Dojo will re-open and we will be accepting new students once again.
            New Student Interviews will also resume for those who have completed
            their Introductory Training. Barring any unforeseen issues, Training
            will continue as normal for the balance of 2020. Also, our May
            All-Member Practice and July Shinsakai and Koushuukai (Testing and
            Lecture) have been cancelled for this year.
          </p>

          <p>
            Unfortunately, the visit to Michigan this coming July 16-21 by our
            15th Soke and his Assistant, Endo Tsuyako ( Gentei) Sensei, has been
            put on hold until July 15-20 of 2021. Due to the fact that both of
            them are in a "high-risk" group because of their age and certain
            health issues, upon close consultation with both of them, we decided
            that this is the best course of action at this time. Despite the
            worsening conditions in Japan at this time, Soke Sensei, Endo Sensei
            and all the members of the Tamiya Ryu Iaijutsu Genwakai are in good
            health and doing their best to follow the guidelines set forth by
            the Japanese Government in order to "flatten the curve." The
            thoughts and prayers of all members of the Gennankai are with our
            counterparts in Japan and Canada in the hope that all of them come
            through this Pandemic unaffected!
          </p>

          <p>
            In closing, my earnest thoughts and prayers for good health and
            safety are with all of YOU during this unsettled time. Please "stay
            home, stay safe and save lives" and always remember, "we are all in
            this together!"
          </p>

          <p>Respectfully submitted,</p>

          <p>
            Michael Alexanian ( Gennan Buhaku )<br />
            <br />
            Kaicho (President), United States Tamiya Ryu Iaijutsu Gennankai
          </p>
        </Card>
      </li>
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
