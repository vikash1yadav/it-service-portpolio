import OurOfferings from "../components/OurOfferings";
import Business from "../components/Business";
import TechServices from "../components/TechServices";
import Trusted from "../components/Trusted";
import Helping from "../components/Helping";
import GetSolutions from "../components/GetSolutions";
import GetToKnow from "../components/GetToKnow";
import MainSlider from "../components/MainSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <GetSolutions />
      <GetToKnow />
      <OurOfferings />
      <Business />
      <TechServices />
      <Trusted />
      <Helping />
    </>
  );
}
