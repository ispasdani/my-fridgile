import { NavbarMobile } from "../components/navbarMobile/NavbarMobile";
import { NavbarDesktop } from "../components/navbarDesktop/NavbarDesktop";
import "./pagetemplate.css";
import { PreferencesBarDesktop } from "../components/preferencesBar/PreferencesDesktop";

const PageTemplate = (props) => {
  return (
    <div className="PageTemplate">
      <PreferencesBarDesktop />
      <NavbarDesktop />
      <div className="Content">{props.children}</div>
      <NavbarMobile />
    </div>
  );
};

export default PageTemplate;
