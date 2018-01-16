import React from "react";
import Sections from "../../components/Sections";
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
  <Sections.Light>
    <Beginnings />
    <KoTamiyaRyu />
    <KishuTamiyaRyu />
    <TamiyaShinkenRyu />
    <TamiyaRyuToday />
  </Sections.Light>
);

const USTamiyaRyuHistory = () => (
  <Sections.Dark>
    <h2>United States Tamiya Ryu</h2>
    <ThunderInYokohama />
    <SoutheastBranchOpens />
    <PassingOfAGeneration />
    <ANewGeneration />
  </Sections.Dark>
);

export default () => (
  <div>
    <TamiyaRyuHistory />
    <Genealogy />
    <USTamiyaRyuHistory />
  </div>
);
