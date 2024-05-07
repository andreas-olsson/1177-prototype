import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  IDSHeader,
  IDSHeaderNav,
  IDSHeaderNavItem,
  IDSIconUser,
  IDSIconExpand,
  IDSIconClose,
  IDSIconAgent,
  IDSIconChevron,
  IDSLink,
  IDSAgent,
  IDSHeaderItem,
  IDSIconEarHearing,
  IDSIconFindCare,
  IDSIconSearch,
  IDSHeaderMobileItem,
  IDSIconStockholm,
} from "@inera/ids-react";

interface AgentButtonProps {
  agent: {
    name: string;
  };
  selectedAgent: string;
  handleSetAgent: (name: string) => void;
}

const AgentButton: React.FC<AgentButtonProps> = ({
  agent,
  selectedAgent,
  handleSetAgent,
}) => (
  <div
    className={`login-button agent ${
      selectedAgent === agent.name ? "selected" : ""
    }`}
    onClick={() => handleSetAgent(agent.name)}
  >
    {selectedAgent === agent.name && (
      <div className="selected-icon">
        <IDSIconClose colorpreset={1} />
      </div>
    )}
    <span className="icon left">
      <IDSIconAgent />
    </span>
    <span className="label agent">
      {selectedAgent === agent.name && (
        <span className="label-pre">Ombud för</span>
      )}
      {agent.name}
    </span>
  </div>
);

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);
  const [isAgent, setAgent] = useLocalStorage("isAgent", false);
  const [agentName, setAgentName] = useState("");
  const [selectedAgent, setSelectedAgent] = useLocalStorage(
    "selectedAgent",
    ""
  );
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleLogOut = () => {
    setLoggedin(false);
    setAgent(false);
    navigate("/");
  };

  const handleSetAgent = (name: string) => {
    if (selectedAgent === name) {
      setSelectedAgent("");
      setAgent(false);
      setAgentName("");
    } else {
      setSelectedAgent(name);
      setAgent(true);
      setAgentName(name);
    }
  };

  const handleKillAgent = () => {
    setAgent(false);
    setAgentName("");
    setSelectedAgent("");
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

  const agents = [{ name: "Elsa Andersson" }, { name: "Elton Andersson" }];

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
              <span className="icon left">
                {isAgent && (
                  <div className="agent-icon">
                    <IDSIconAgent colorpreset={3} />
                  </div>
                )}
                <IDSIconUser colorpreset={2} />
              </span>
              <div className="label">
                <span className="label-pre">Inloggad som</span>
                Andreas Olsson
              </div>
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
                  <IDSLink block className="ids-mb-2" onClick={handleLogOut}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:void(0)">Inställningar</a>
                  </IDSLink>
                  <IDSLink block className="ids-mb-2" onClick={handleLogOut}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:void(0)">Logga ut</a>
                  </IDSLink>
                  <hr className="ids-mt-6" />
                  <h3 className="ids-heading-3 ids-mb-2 ids-mt-6">
                    Agera ombud
                  </h3>
                  {agents.map((agent) => (
                    <AgentButton
                      key={agent.name}
                      agent={agent}
                      selectedAgent={selectedAgent}
                      handleSetAgent={handleSetAgent}
                    />
                  ))}
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
