import React, { useState, useEffect, useRef } from "react";
import privateMenu from "../assets/menu/1177.json";
import privateMenuNew from "../assets/menu/1177-new.json";
import professionMenu from "../assets/menu/profession.json";
import umoMenu from "../assets/menu/umo.json";
import ineraMenu from "../assets/menu/inera.json";
import personalMenu from "../assets/menu/personal.json";
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
  IDSButton,
  IDSIconChevron,
  IDSIconComputer,
  IDSIconDocument,
  IDSIconCog,
  IDSIconFindRegion,
  IDSSelect,
} from "@inera/ids-react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

// Defining the types for menu items
interface IMenuItem {
  name: string;
  sub?: IMenuItem[];
  url?: string;
  login?: boolean;
  description?: string;
  image?: string;
}

interface IMenu {
  content: IMenuItem[];
}

// Header props
interface HeaderProps {
  user?: string;
}

function Header({ user = "" }: HeaderProps) {
  const [selectedMenu, setSelectedMenu] = useLocalStorage<string>(
    "selectedMenu",
    user || "private"
  );

  const getMenu = (menuType: string): IMenu => {
    switch (menuType) {
      case "personal":
        return personalMenu;
      case "profession":
        return professionMenu;
      case "umo":
        return umoMenu;
      case "inera":
        return ineraMenu;
      case "private-new":
        return privateMenuNew;
      case "private":
      default:
        return privateMenu;
    }
  };

  const menu: IMenu = getMenu(selectedMenu);

  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>(menu.content);
  const [menuTitle, setMenuTitle] = useState("Meny");
  const [menuStack, setMenuStack] = useState<
    { menu: IMenuItem[]; title: string }[]
  >([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [sidebar, setSidebar] = useLocalStorage("sidebar", false);

  useEffect(() => {
    const topLevelItem = menu.content.find((item) => item.name);
    if (topLevelItem) {
      console.log(
        "Top level names extracted:",
        recursivelyExtractNames(topLevelItem)
      );
    }
  }, [menu.content]);

  useEffect(() => {
    // Open the menu if sidebar is checked
    if (sidebar) {
      setMenuOpen(true);
    }

    // Add or remove the sidebar-active class on the main container
    const mainContainer = document.getElementById("root");
    if (mainContainer) {
      if (sidebar) {
        mainContainer.classList.add("sidebar-active");
      } else {
        mainContainer.classList.remove("sidebar-active");
      }
    }
  }, [sidebar]);

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
      if (!sidebar) setMenuOpen(false);
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
    if (!sidebar) {
      setMenuOpen(false);
    }
    event.stopPropagation();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !sidebar &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (!sidebar) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [sidebar]);

  useEffect(() => {
    setCurrentMenu(menu.content);
    setMenuTitle("Meny");
    setMenuStack([]);
  }, [selectedMenu]);

  const renderMenuItems = (items: IMenuItem[]) => {
    return items.map((item, index) => (
      <a
        key={index}
        className={`menu-item${item.login ? " service-menu-item" : ""}`}
        onClick={() => handleMenuItemClick(item)}
        href={item.url ? item.url : "#"}
      >
        <span>{item.name}</span>
        {item.login && (
          <span className="service-menu-item-icon">
            <IDSIconUser colorpreset={2} size="m" />
          </span>
        )}
        {item.sub && <i className="chevron-icon">&#8594;</i>}
      </a>
    ));
  };

  const renderHeaderItems = () => {
    if (selectedMenu === "umo") {
      return (
        <>
          <IDSHeaderItem>
            <IDSIconFindCare />
            <a href="#">Mottagningar</a>
          </IDSHeaderItem>
          <IDSHeaderItem>
            <IDSIconSearch />
            <a href="#">Sök</a>
          </IDSHeaderItem>
        </>
      );
    } else if (selectedMenu === "inera") {
      return (
        <>
          <IDSHeaderItem>
            <IDSIconComputer />
            <a href="#">Driftstatus</a>
          </IDSHeaderItem>
          <IDSHeaderItem>
            <IDSIconUser />
            <a href="#">Sök</a>
          </IDSHeaderItem>
        </>
      );
    } else if (selectedMenu === "personal") {
      return (
        <>
          <IDSHeaderItem>
            <IDSIconDocument />
            <a href="#">Hjälp och manualer</a>
          </IDSHeaderItem>
          <IDSHeaderItem>
            <IDSIconCog />
            <a href="#">Cookies</a>
          </IDSHeaderItem>
        </>
      );
    } else if (selectedMenu === "profession") {
      return (
        <>
          <IDSHeaderItem>
            <IDSIconFindRegion />
            <a href="#">Stockholms län</a>
          </IDSHeaderItem>
          <IDSHeaderItem>
            <IDSIconSearch />
            <a href="#">Sök</a>
          </IDSHeaderItem>
        </>
      );
    } else {
      return (
        <>
          <IDSHeaderItem>
            <IDSIconEarHearing></IDSIconEarHearing>
            <a href="#">Lyssna</a>
          </IDSHeaderItem>
          <IDSHeaderItem>
            <IDSIconFindCare />
            <a href="#">Hitta vård</a>
          </IDSHeaderItem>
          <IDSHeaderItem>
            <IDSIconSearch />
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
              <IDSIconUser />
              <a href="/login">Logga in</a>
            </IDSHeaderItem>
          )}
        </>
      );
    }
  };

  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMenu(event.target.value);
    window.location.reload();
  };

  return (
    <>
      <IDSHeader
        className="ids-hide ids-show-1177"
        hideregionpicker
        type="1177"
      >
        {renderHeaderItems()}

        <IDSIconStockholm slot="region" title="Region Stockholm logotyp">
          {" "}
        </IDSIconStockholm>

        {!sidebar && (
          <IDSHeaderNav>
            <a
              href="#"
              onClick={handleMenuClick}
              className="header-nav-item first-item"
            >
              Meny
            </a>
            <div className="menu-wrapper">
              <div className="menu-row">
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
            </div>
          </IDSHeaderNav>
        )}

        {menuOpen && (
          <div className={`menu-overlay ${sidebar ? "clear" : ""}`}>
            {!sidebar && (
              <div className="menu-close-button" onClick={handleCloseMenu}>
                <IDSIconClose colorpreset={2} size="s" />
              </div>
            )}
            <div
              className={`menu ${user} ${sidebar ? "sidebar" : ""}`}
              ref={menuRef}
            >
              <div className="menu-header">
                <div className="menu-top-nav">
                  {!sidebar && <>{renderHeaderItems()}</>}

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
                  <Search menu={menu.content} />
                </div>
              </div>

              <div className="menu-footer">
                <IDSLink>
                  <a href="javascript:console.log('click')">
                    1177 för vårdpersonal
                  </a>
                  <IDSIconExternal slot="append-icon"></IDSIconExternal>
                </IDSLink>
                <label className="toggle-sidebar">
                  <input
                    type="checkbox"
                    checked={sidebar}
                    onChange={(e) => setSidebar(e.target.checked)}
                  />
                  <IDSIconChevron size="s" colorpreset={3} />
                </label>
              </div>
            </div>
          </div>
        )}
      </IDSHeader>

      <IDSButton
        className="floating-button"
        onClick={() => setOverlayOpen(true)}
      >
        Innehåll meny
      </IDSButton>

      {overlayOpen && (
        <div className="menu-overlay">
          <div className="settings-menu">
            <div>
              <IDSSelect>
                <label htmlFor="menu-select">Innehåll för meny:</label>
                <select
                  id="menu-select"
                  value={selectedMenu}
                  onChange={handleMenuChange}
                >
                  <option value="private">1177</option>
                  <option value="private-new">1177 (Ny)</option>
                  <option value="inera">Inera.se</option>
                  <option value="personal">Administrera e-tjänster</option>
                  <option value="profession">
                    Nationellt kliniskt kunskapsstöd
                  </option>
                  <option value="umo">UMO</option>
                </select>
              </IDSSelect>
            </div>
            <IDSButton onClick={() => setOverlayOpen(false)} block>
              Stäng
            </IDSButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
