import React from "react";
import styled from "styled-components";
import Sections from "../../components/Sections";
import mon from "../../assets/mon.svg";

const Mon = styled.img`
  justify-self: center;
  width: 100%;
  max-width: 18rem;
  margin: 2em 0 4em;
`;

export default () => (
  <Sections.Dark>
    <h2>United States Tamiya Ryu Iaijutsu</h2>
    <p>
      Training focuses on the harmonization of mind, body, and spirit through
      the practice and performance of kata (pre-arranged techniques). Techniques
      are practiced with the philosophy of the "sword which gives life (Katsujin
      no Ken)," as opposed to the "sword which takes life (Satsujin no Ken)."
    </p>
    <p>
      Emphasis is placed on basic techniques. To properly learn kata means
      studying 1) how to cut using the scabbard opening (sayaguchi) and 2) how
      to use the scabbard hand (sayate).
    </p>
    <Mon src={mon} alt="" />
    <p>
      Occasionally students will also practice Kenshibu - a traditional Japanese
      dance utilizing sword and fan. Kenshibu is performed to the accompaniment
      of poems (sung in a style called Shigin) that depict famous events in
      Japanese history.
    </p>
  </Sections.Dark>
);
