import { useState, useEffect, useRef, SetStateAction } from "react";
import privateMenu from "../assets/menu/private.json";
import professionMenu from "../assets/menu/profession.json";
import "../styles/header.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  IDSHeader,
  IDSHeaderNav,
  IDSIconStockholm,
  IDSHeaderAvatar,
  IDSHeaderItem,
  IDSIconUser,
  IDSIconEarHearing,
  IDSIconFindCare,
  IDSIconSearch,
  IDSLink,
  IDSIconExternal,
  IDSIconClose,
} from "@inera/ids-react";
import { useNavigate } from "react-router-dom";

import Search from "./Search";

function Header({ user = "" }) {
  let menu = privateMenu;
  let primaryColor = "#c12143";
  let secondaryColor = "#6a0032";

  if (user === "profession") {
    menu = professionMenu;
    primaryColor = "#007bff";
    secondaryColor = "#001f3f";
  }

  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(menu.content);
  const [menuTitle, setMenuTitle] = useState("Meny");
  const [menuStack, setMenuStack] = useState([]);
  const menuRef = useRef(null);
  const [serviceNames, setServiceNames] = useState([]);

  useEffect(() => {
    const topLevelItem = menu.content.find((item) => item.name);
    if (topLevelItem) {
      const names: SetStateAction<never[]> = [];
      recursivelyExtractNames(topLevelItem, names);
      setServiceNames(names);
      console.log("Top level names extracted:", names);
    }
  }, []);

  const recursivelyExtractNames = (item, names) => {
    if (item.name) {
      names.push(item.name);
    }
    if (item.sub) {
      item.sub.forEach((subItem) => {
        recursivelyExtractNames(subItem, names);
      });
    }
  };

  const handleLogOut = () => {
    setLoggedin(false);
    navigate("/");
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item) => {
    if (item.url) {
      navigate(item.url);
      setMenuOpen(false);
    } else if (item.sub) {
      setMenuStack((prevStack) => [
        ...prevStack,
        { menu: currentMenu, title: menuTitle },
      ]);
      setCurrentMenu(item.sub);
      setMenuTitle(item.name);
    }
  };

  const handleBackClick = () => {
    if (menuStack.length > 0) {
      const { menu: prevMenu, title: prevTitle } = menuStack.pop();
      setCurrentMenu(prevMenu);
      setMenuTitle(prevTitle);
      setMenuStack([...menuStack]);
    } else {
      setCurrentMenu(menu.content);
      setMenuTitle("Meny");
    }
  };

  const handleCloseMenu = (event) => {
    setMenuOpen(false);
    event.stopPropagation();
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <a
        key={index}
        className={`menu-item${
          serviceNames.includes(item.name) ? " service-menu-item" : ""
        }`}
        onClick={() => handleMenuItemClick(item)}
        href="#"
      >
        <span>{item.name}</span>
        {serviceNames.includes(item.name) && (
          <span className="service-menu-item-icon">
            <IDSIconUser
              color={primaryColor}
              color2={secondaryColor}
              size="m"
            />
          </span>
        )}

        {item.sub && <i className="chevron-icon">&#8594;</i>}
      </a>
    ));
  };

  return (
    <>
      <IDSHeader
        className="ids-hide ids-show-1177"
        hideregionpicker
        type="1177"
      >
        <IDSHeaderItem>
          <IDSIconEarHearing></IDSIconEarHearing>
          <a href="#">Lyssna</a>
        </IDSHeaderItem>
        <IDSHeaderItem>
          <IDSIconFindCare></IDSIconFindCare>
          <a href="#">Hitta vård</a>
        </IDSHeaderItem>
        <IDSHeaderItem>
          <IDSIconSearch></IDSIconSearch>
          <a href="#">Sök</a>
        </IDSHeaderItem>
        {loggedin ? (
          <IDSHeaderAvatar
            username="Tolvan Tolvansson"
            className="logout-button"
          >
            <a href="#" onClick={handleLogOut} slot="avatar-left">
              Logga ut
            </a>
            <a href="#" slot="avatar-right">
              Inställningar
            </a>
          </IDSHeaderAvatar>
        ) : (
          <IDSHeaderItem Mobile>
            <IDSIconUser></IDSIconUser>
            <a href="/login">Logga in</a>
          </IDSHeaderItem>
        )}

        <IDSIconStockholm slot="region" title="Region Stockholm logotyp">
          {" "}
        </IDSIconStockholm>

        <IDSHeaderNav>
          {/* Menu button */}
          <a
            href="#"
            onClick={handleMenuClick}
            className="header-nav-item first-item"
          >
            Meny
          </a>
          <div className="desktop-only">
            {/* Top level menu links */}
            {menu.content.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => {
                  setCurrentMenu(item.sub || []);
                  setMenuStack([]);
                  setMenuTitle(item.name); // Set menu title to the clicked item name
                  setMenuOpen(true);
                }}
                className="header-nav-item"
              >
                {item.name}
              </a>
            ))}
          </div>
        </IDSHeaderNav>

        {/* Menu overlay */}
        {menuOpen && (
          <div className="menu-overlay">
            <div className="menu-close-button" onClick={handleCloseMenu}>
              <IDSIconClose color={primaryColor} size="s" />
            </div>
            <div className={`menu ${user}`} ref={menuRef}>
              <div className="menu-header">
                <div className="menu-top-nav">
                  <a href="#" className="menu-button">
                    <IDSIconFindCare
                      color={primaryColor}
                      color2={secondaryColor}
                    />
                    <span>Hitta vård</span>
                  </a>

                  <a href="#" className="menu-button">
                    <IDSIconEarHearing
                      color={primaryColor}
                      color2={secondaryColor}
                    />
                    <span>Lyssna</span>
                  </a>

                  {loggedin ? (
                    <IDSHeaderAvatar
                      username="Tolvan Tolvansson"
                      className="logout-button"
                    >
                      <a href="#" onClick={handleLogOut} slot="avatar-left">
                        Logga ut
                      </a>
                      <a href="#" slot="avatar-right">
                        Inställningar
                      </a>
                    </IDSHeaderAvatar>
                  ) : (
                    <div>
                      <a href="/login" className="menu-button">
                        <IDSIconUser
                          color={primaryColor}
                          color2={secondaryColor}
                        />
                        <span>Logga in</span>
                      </a>
                    </div>
                  )}
                  {/* Back button */}
                  {(menuStack.length > 0 || currentMenu !== menu.content) && (
                    <a
                      className="menu-back-button"
                      onClick={handleBackClick}
                      href="#"
                    >
                      &#8592;{" "}
                      {menuStack.length > 0
                        ? menuStack[menuStack.length - 1].title
                        : "Meny"}
                    </a>
                  )}

                  {/* Menu title */}
                </div>
                <h1 className="ids-heading-1 menu-title">{menuTitle}</h1>
              </div>
              <div className="menu-container">
                {/* Render menu items */}
                {renderMenuItems(currentMenu)}
                <div className="search-module">
                  {" "}
                  <Search serviceNames={serviceNames} />
                </div>
              </div>

              <div className="menu-footer">
                <IDSLink>
                  <a href="javascript:console.log('click')">
                    1177 för vårdpersonal
                  </a>
                  <IDSIconExternal slot="append-icon"></IDSIconExternal>
                </IDSLink>
              </div>
            </div>
          </div>
        )}
      </IDSHeader>
    </>
  );
}

export default Header;
