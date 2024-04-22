import React from "react";
import {
  IDSHeader,
  IDSHeaderNav,
  IDSHeaderNavItem,
  IDSHeaderAvatar,
} from "@inera/ids-react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

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
        <IDSHeaderAvatar username="Maria G:son O'Lång">
          <a href="#" slot="avatar-left">
            Inställningar
          </a>
          <a href="#" slot="avatar-right">
            Logga ut
          </a>
        </IDSHeaderAvatar>
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
