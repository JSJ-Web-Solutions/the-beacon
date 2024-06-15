import { useParams } from "react-router-dom";
import Guide from "../components/guides/Guide";
import GuideAbout from "../components/guides/GuideAbout";
import GuideRequirements from "../components/guides/GuideRequirements";
import GuideItems from "../components/guides/GuideItems";
import GuidePets from "../components/guides/GuideItems";
import Guide5 from "../components/guides/GuideItems";

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
      component = <GuideItems />;
      break;
    case "4":
      component = <GuidePets />;
      break;
    case "5":
      component = <Guide5 />;
      break;
    default:
      component = <Guide />;
  }

  return <>{component}</>;
}

export default Guides;
