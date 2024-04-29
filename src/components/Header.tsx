import React, { useState, useEffect, useRef } from "react";
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

// Defining the types for menu items
interface IMenuItem {
  name: string;
  sub?: IMenuItem[];
  url?: string;
  login?: boolean;
}

interface IMenu {
  content: IMenuItem[];
}

// Header props
interface HeaderProps {
  user?: string;
}

function Header({ user = "" }: HeaderProps) {
  const menu: IMenu = user === "profession" ? professionMenu : privateMenu;
  const primaryColor = user === "profession" ? "#007bff" : "#c12143";
  const secondaryColor = user === "profession" ? "#001f3f" : "#6a0032";

  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>(menu.content);
  const [menuTitle, setMenuTitle] = useState("Meny");
  const [menuStack, setMenuStack] = useState<
    { menu: IMenuItem[]; title: string }[]
  >([]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topLevelItem = menu.content.find((item) => item.name);
    if (topLevelItem) {
      console.log(
        "Top level names extracted:",
        recursivelyExtractNames(topLevelItem)
      );
    }
  }, [menu.content]);

  const recursivelyExtractNames = (item: IMenuItem): string[] => {
    const names: string[] = [];
    names.push(item.name);
    if (item.sub) {
      item.sub.forEach((subItem) => {
        names.push(...recursivelyExtractNames(subItem));
      });
    }
    return names;
  };

  const handleLogOut = () => {
    setLoggedin(false);
    navigate("/");
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item: IMenuItem) => {
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
    const lastItem = menuStack.pop();
    if (lastItem) {
      setCurrentMenu(lastItem.menu);
      setMenuTitle(lastItem.title);
      setMenuStack([...menuStack]);
    } else {
      setCurrentMenu(menu.content);
      setMenuTitle("Meny");
    }
  };

  const handleCloseMenu = (event: React.MouseEvent) => {
    setMenuOpen(false);
    event.stopPropagation();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
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

  const renderMenuItems = (items: IMenuItem[]) => {
    return items.map((item, index) => (
      <a
        key={index}
        className={`menu-item${item.login ? " service-menu-item" : ""}`}
        onClick={() => handleMenuItemClick(item)}
        href="#"
      >
        <span>{item.name}</span>
        {item.login && (
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
          <IDSHeaderItem mobile={true}>
            <IDSIconUser></IDSIconUser>
            <a href="/login">Logga in</a>
          </IDSHeaderItem>
        )}

        <IDSIconStockholm slot="region" title="Region Stockholm logotyp">
          {" "}
        </IDSIconStockholm>

        <IDSHeaderNav>
          <a
            href="#"
            onClick={handleMenuClick}
            className="header-nav-item first-item"
          >
            Meny
          </a>
          <div className="desktop-only">
            {menu.content.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => {
                  setCurrentMenu(item.sub || []);
                  setMenuStack([]);
                  setMenuTitle(item.name);
                  setMenuOpen(true);
                }}
                className="header-nav-item"
              >
                {item.name}
              </a>
            ))}
          </div>
        </IDSHeaderNav>

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
                </div>
                <h1 className="ids-heading-1 menu-title">{menuTitle}</h1>
              </div>
              <div className="menu-container">
                {renderMenuItems(currentMenu)}
                <div className="search-module">
                  <Search />
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
