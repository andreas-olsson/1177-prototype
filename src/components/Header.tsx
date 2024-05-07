import { useState, useEffect, useRef } from "react";
import "../styles/header.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  IDSHeader,
  IDSHeaderNav,
  IDSHeaderNavItem,
  IDSIconUser,
  IDSIconExpand,
  IDSIconClose,
  IDSAgent,
  IDSHeaderItem,
  IDSIconEarHearing,
  IDSIconFindCare,
  IDSIconSearch,
  IDSHeaderMobileItem,
  IDSIconStockholm,
} from "@inera/ids-react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const [loggedin] = useLocalStorage("loggedin", false);
  const [isAgent, setAgent] = useLocalStorage("isAgent", false);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [agentName, setAgentName] = useState("");

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedSelectedAgent = localStorage.getItem("selectedAgent");
    if (storedSelectedAgent) {
      setSelectedAgent(storedSelectedAgent);
      setAgentName(storedSelectedAgent.toString()); // Se till att det sparade värdet är en sträng
      setAgent(true);
    }
  }, [selectedAgent]);

  const handleKillAgent = () => {
    localStorage.removeItem("isAgent");
    localStorage.removeItem("selectedAgent");
    setAgent(false);
  };

  const handleAvatarClick = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleCloseOverlay = (event: MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      setOverlayVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOverlay);
    return () => {
      document.removeEventListener("mousedown", handleCloseOverlay);
    };
  }, []);

  const menuItems = [
    ["Start", "/"],
    ["E-tjänster", "/login"],
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
      <IDSHeader className="ids-hide ids-show-1177" type="1177">
        <IDSIconStockholm slot="region" title="Region Stockholm logotyp" />
        {loggedin ? (
          <div
            className="header-avatar"
            onClick={handleAvatarClick}
            ref={overlayRef}
          >
            <span
              className={`login-button ${isOverlayVisible ? "active" : ""}`}
            >
              <span
                className="icon left"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "20px",
                  background: "#ddd",
                }}
              >
                AO
              </span>
              <div className="label">Inloggad</div>
              <span className="icon right">
                {isOverlayVisible ? (
                  <IDSIconClose colorpreset={2} />
                ) : (
                  <IDSIconExpand colorpreset={2} />
                )}
              </span>
            </span>
            {isOverlayVisible && (
              <>
                <div className="overlay-menu">
                  <iframe
                    src="http://andreas.uxd.nu/user-menu.html"
                    title="meny"
                    className="overlay-iframe"
                  />
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <IDSHeaderItem>
              <IDSIconEarHearing />
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
            <IDSHeaderItem>
              <IDSIconUser />
              <a href="/login">Logga in</a>
            </IDSHeaderItem>
          </>
        )}
        <IDSHeaderNav>
          <IDSHeaderMobileItem>
            <IDSIconUser />
            <a href="#">Logga in</a>
          </IDSHeaderMobileItem>
          <IDSHeaderMobileItem>
            <IDSIconFindCare />
            <a href="#">Hitta vård</a>
          </IDSHeaderMobileItem>
          <IDSHeaderMobileItem>
            <IDSIconSearch />
            <a href="#">Sök</a>
          </IDSHeaderMobileItem>

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
      {isAgent && (
        <IDSAgent
          className="ids-hide ids-show-1177"
          expanded
          headline={`Ombud för ${agentName}`} // Dynamiskt visar ombudsnamnet
          hidetext="Visa mindre"
          onDidToggleExpansion={function noRefCheck() {}}
          showtext="Visa mer"
        >
          Du agerar just nu ombud och utför därmed ärenden åt <b>{agentName}</b>
          . Den vårdgivare du har kontakt med som ombud kommer att se vem som
          har utfört ärendet.
          <br />
          <a
            className="ids-inline-block ids-anchor"
            href="javascript:void(0)"
            slot="actions"
            onClick={handleKillAgent}
          >
            Avbryt ombudsläget
          </a>
        </IDSAgent>
      )}
    </>
  );
}

export default Header;
