import { useParams } from "react-router-dom";
import FAQ from "../components/faq/FAQ";
import FAQ1 from "../components/faq/FAQ1";
import FAQ2 from "../components/faq/FAQ2";

function FAQs() {
  const { id } = useParams();

  let component;
  switch (id) {
    case "1":
      component = <FAQ1 />;
      break;
    case "2":
      component = <FAQ2 />;
      break;
    default:
      component = <FAQ />;
  }

  return <>{component}</>;
}

export default FAQs;
