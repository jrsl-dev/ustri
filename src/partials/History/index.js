import React from "react";
import Sections from "../../styled/Sections";
import Beginnings from "./Beginnings";
import KoTamiyaRyu from "./KoTamiyaRyu";
import KishuTamiyaRyu from "./KishuTamiyaRyu";
import TamiyaShinkenRyu from "./TamiyaShinkenRyu";
import TamiyaRyuToday from "./TamiyaRyuToday";
import Genealogy from "./Genealogy";
import ThunderInYokohama from "./ThunderInYokohama";
import SoutheastBranchOpens from "./SoutheastBranchOpens";
import ANewGeneration from "./ANewGeneration";
import PassingOfAGeneration from "./PassingOfAGeneration";

const TamiyaRyuHistory = () => (
  <Sections.Content>
    <Beginnings />
    <KoTamiyaRyu />
    <KishuTamiyaRyu />
    <TamiyaShinkenRyu />
    <TamiyaRyuToday />
  </Sections.Content>
);

const USTamiyaRyuHistory = () => (
  <Sections.Content>
    <h2>United States Tamiya Ryu</h2>
    <ThunderInYokohama />
    <SoutheastBranchOpens />
    <PassingOfAGeneration />
    <ANewGeneration />
  </Sections.Content>
);

export default () => (
  <div>
    <TamiyaRyuHistory />
    <Sections.Highlight>
      <Genealogy />
    </Sections.Highlight>
    <USTamiyaRyuHistory />
  </div>
);
