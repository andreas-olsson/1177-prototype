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
    ["Inkorg", "/inkorg"],
    ["Bokade tider", "/bokadetider"],
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
        {/* Rest of your header component */}
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
