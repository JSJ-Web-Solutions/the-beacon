import { useParams } from "react-router-dom";
import Guide from "../components/guides/Guide";
import GuideAbout from "../components/guides/GuideAbout";
import GuideRequirements from "../components/guides/GuideRequirements";
import GuideGameCharacters from "../components/guides/GuideGameCharacters";
import GuideItems from "../components/guides/GuideItems";
import GuidePets from "../components/guides/GuidePets";
import GuidePlayerCust from "../components/guides/GuidePlayerCust";
import GuideHouseCust from "../components/guides/GuideHouseCust";

function Guides() {
  const { id } = useParams();

  let component;
  switch (id) {
    case "1":
      component = <GuideAbout />;
      break;
    case "2":
      component = <GuideRequirements />;
      break;
    case "3":
      component = <GuideGameCharacters />;
      break;
    case "4":
      component = <GuideItems />;
      break;
    case "5":
      component = <GuidePets />;
      break;
    case "6":
      component = <GuidePlayerCust />;
      break;
    case "7":
      component = <GuideHouseCust />;
      break;
    default:
      component = <Guide />;
  }

  return <>{component}</>;
}

export default Guides;
