import { useLocalStorage } from "@uidotdev/usehooks";

import {
  IDSHeader,
  IDSHeaderNav,
  IDSHeaderNavItem,
  IDSHeaderAvatar,
  IDSIconUser,
} from "@inera/ids-react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navigate = useNavigate(); // Access the navigate function
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);

  const handleLogOut = () => {
    setLoggedin(false); // Set loggedin to true
    navigate("/"); // Navigate to the generated link
  };

  const menuItems = [
    ["Start", "/"],
    ["Inkorg", "/inbox"],
    ["Bokade tider", "/bokadetider"],
    ["Journalen", "/"],
    ["Egen provhantering", "/"],
    ["Stöd och behandling", "/"],
    ["Intyg", "/"],
    ["Övriga tjänster", "/"],
  ];

  const activeIndex = menuItems.findIndex(
    (item) => item[1] === location.pathname
  );

  return (
    <>
      <IDSHeader
        className="ids-hide ids-show-1177"
        hideregionpicker
        type="1177"
      >
        {loggedin ? (
          <IDSHeaderAvatar username="Tolvan Tolvansson">
            <a href="#" onClick={handleLogOut} slot="avatar-left">
              Logga ut
            </a>
            <a href="#" slot="avatar-right">
              Inställningar
            </a>
          </IDSHeaderAvatar>
        ) : (
          <div>
            <a href="/login" className="login-button">
              <IDSIconUser color="#c12143" color2="#6a0032" />
              <span>Logga in</span>
            </a>
          </div>
        )}
        <IDSHeaderNav>
          {menuItems.map((item, index) => (
            <IDSHeaderNavItem
              link={true}
              key={index}
              active={activeIndex === index}
            >
              <a href={item[1]}> {item[0]} </a>
            </IDSHeaderNavItem>
          ))}
        </IDSHeaderNav>
      </IDSHeader>
    </>
  );
}

export default Header;
