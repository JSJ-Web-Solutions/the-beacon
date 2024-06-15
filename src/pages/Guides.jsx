import { useParams } from "react-router-dom";
import Guide from "../components/guides/Guide";
import Guide1 from "../components/guides/Guide1";
import Guide2 from "../components/guides/Guide2";
import Guide3 from "../components/guides/Guide3";
import Guide4 from "../components/guides/Guide3";
import Guide5 from "../components/guides/Guide3";

function Guides() {
  const { id } = useParams();

  let component;
  switch (id) {
    case "1":
      component = <Guide1 />;
      break;
    case "2":
      component = <Guide2 />;
      break;
    case "3":
      component = <Guide3 />;
      break;
    case "4":
      component = <Guide4 />;
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
