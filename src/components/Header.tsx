import {
  IDSHeader,
  IDSHeaderNav,
  IDSHeaderNavItem,
  IDSHeaderAvatar,
} from "@inera/ids-react";

function Header() {
  let menuItems = [
    "Start",
    "Inkorg",
    "Bokade tider",
    "Journalen",
    "Egen provhantering",
    "Stöd och behandling",
    "Övriga tjänster",
  ];
  let activeIndex = 0;

  return (
    <>
      <IDSHeader
        className="ids-hide ids-show-1177"
        hideregionpicker
        type="1177"
      >
        <IDSHeaderAvatar username="Andreas Olsson">
          <a href="#" slot="avatar-left">
            Link left
          </a>
          <a href="#" slot="avatar-right">
            Link Right
          </a>
        </IDSHeaderAvatar>
        <IDSHeaderNav>
          {menuItems.map((item, index) => (
            <IDSHeaderNavItem
              key={index}
              label={item}
              active={activeIndex === index ? true : false}
            ></IDSHeaderNavItem>
          ))}
        </IDSHeaderNav>
      </IDSHeader>
    </>
  );
}

export default Header;
