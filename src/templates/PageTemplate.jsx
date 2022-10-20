import { NavbarMobile } from "../components/navbarMobile/NavbarMobile";
import { NavbarDesktop } from "../components/navbarDesktop/NavbarDesktop";
import "./pageTemplate.css";

const PageTemplate = (props) => {
  return (
    <div className="PageTemplate">
      <NavbarDesktop />
      <NavbarMobile />
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default PageTemplate;
