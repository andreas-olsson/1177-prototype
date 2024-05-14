import React, { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import "../../styles/journal.css";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSButton,
  IDSLink,
  IDSIconSearch,
  IDSRadio,
  IDSRadioGroup,
  IDSCard,
  IDSIconArrow,
  IDSBadge,
  IDSExpandable,
  IDSNavigationContent,
  IDSIconAgent,
} from "@inera/ids-react";

import { useNavigate } from "react-router-dom";

function Overview() {
  const navigate = useNavigate();

  // Användarnamnslista
  const userNames = ["Kim Johansson", "Birgitta Johansson"];

  const [currentUser, setCurrentUser] = useState(() => {
    // Försök att läsa det aktuella användarnamnet från Local Storage eller använd första namnet i listan.
    return localStorage.getItem("currentUser") || userNames[0];
  });

  const [, setAgent] = useLocalStorage("isAgent", false);
  const [, setAgentName] = useLocalStorage("agentName", "");
  const [, setSelectedAgent] = useLocalStorage("selectedAgent", "");

  // Funktion för att hantera användarväxling.
  const switchUser = (newUser: React.SetStateAction<string>) => {
    setCurrentUser(newUser);
  };

  useEffect(() => {
    // Nollställ agentstatus när komponenten laddas
    setAgent(false);
    setAgentName("");
    setSelectedAgent("");

    // Spara den valda användaren i Local Storage varje gång den ändras
    localStorage.setItem("currentUser", currentUser);
  }, [currentUser, setAgent, setAgentName, setSelectedAgent]);

  return (
    <>
      <div className="ids">
        <IDSContainer>
          {currentUser !== userNames[0] && (
            <div className="journal-user-alert">
              <IDSIconAgent
                className="ids-mr-4"
                colorpreset={3}
                style={{ float: "left" }}
              />
              Du ser uppgifter för <b className="ids-ml-2">{currentUser}</b>
              <a onClick={() => switchUser(userNames[0])} href="#">
                Växla tillbaka
              </a>
            </div>
          )}

          <IDSRow>
            <IDSBreadcrumbs
              current="Journalen"
              lead="Du är här:"
              srlabel="Du är här"
            >
              <IDSCrumb>
                <a href="/">Start</a>
              </IDSCrumb>
              <IDSCrumb mobile>
                <a href="/">Start</a>
              </IDSCrumb>
            </IDSBreadcrumbs>
          </IDSRow>

          <IDSRow justify="space-between">
            <IDSCol cols="8" m="12" s="12" className="ids-content">
              <IDSRow>
                <IDSCol>
                  <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">
                    Journalen
                  </h1>
                  <p className="ids-preamble">
                    Välkommen till Journalen. Här kan du läsa dina
                    journaluppgifter från vården. Du kan välja att visa alla
                    dina uppgifter i journalöversikten eller en typ av uppgifter
                    i taget.
                  </p>
                  <IDSButton onClick={() => navigate("/journal")}>
                    Visa Journalöversikt
                  </IDSButton>
                  <hr className="ids-mb-6 ids-mt-8" />
                </IDSCol>
              </IDSRow>
              <IDSRow>
                <IDSCol>
                  <div className="ids-mb-6 ids-mt-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a href="/journal">Anteckningar</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Funktionstillstånd & ADL</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Provsvar</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Tillväxt</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Vaccinationer</a>
                    </IDSLink>
                  </div>
                </IDSCol>
                <IDSCol>
                  {" "}
                  <div className="ids-mb-6 ids-mt-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Diagnoser</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Läkemedel</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Remisser</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Uppmärksamhetsinformation</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Vårdplaner</a>
                    </IDSLink>
                  </div>
                </IDSCol>
              </IDSRow>
              <hr className="ids-mb-6 ids-mt-8" />
              <div className="ids-mb-6">
                <IDSLink className="ids-heading-2" block>
                  <IDSIconArrow />
                  <a>Loggar och spärrar</a>
                </IDSLink>
              </div>
              <hr className="ids-mb-6 ids-mt-8" />
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Vad du kan se i journalen
                  </h3>
                </IDSExpandable>
              </IDSCard>
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Nyheter om journalen
                  </h3>
                </IDSExpandable>
              </IDSCard>
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Inställningar för journalen
                  </h3>
                </IDSExpandable>
              </IDSCard>
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Hjälp och support
                  </h3>
                </IDSExpandable>
              </IDSCard>
            </IDSCol>
            <IDSCol cols="3" m="12" s="12">
              <hr className="ids-mb-6" />

              <IDSLink>
                <IDSIconSearch />
                <a href="javascript:console.log('click')">Sök i din journal</a>
              </IDSLink>
              <hr className="ids-mb-6 ids-mt-6" />

              <h2 className="ids-heading-6">Vad vill du se?</h2>
              <IDSRadioGroup>
                <IDSRadio>
                  <input type="radio"></input>
                  <label>Visa alla uppgifter</label>
                </IDSRadio>
                <IDSRadio>
                  <input type="radio"></input>
                  <label>Dölj uppgifter nyare än 14 dagar</label>
                </IDSRadio>
              </IDSRadioGroup>
              <hr className="ids-mb-6 ids-mt-6" />

              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <h2 className="ids-heading-2">Växla journal</h2>
                <hr />
                <ul className="blocklink">
                  {userNames.map((name) =>
                    currentUser === name ? (
                      <li key={name}>
                        <IDSBadge type="secondary" className="ids-mr-2">
                          Visas
                        </IDSBadge>
                        {name}
                      </li>
                    ) : (
                      <li key={name}>
                        <IDSLink onClick={() => switchUser(name)}>
                          <IDSIconArrow />
                          <a>{name}</a>
                        </IDSLink>
                      </li>
                    )
                  )}
                </ul>
              </IDSCard>
              <IDSNavigationContent headline="Hitta på sidan">
                <IDSLink>
                  <IDSIconArrow size="s" />
                  <a href="#">Vad du kan se i Journalen </a>
                </IDSLink>
                <IDSLink>
                  <IDSIconArrow size="s" />
                  <a href="#">Nyheter om Journalen </a>
                </IDSLink>
                <IDSLink>
                  <IDSIconArrow size="s" />
                  <a href="#">Inställningar för Journalen</a>
                </IDSLink>
                <IDSLink>
                  <IDSIconArrow size="s" />
                  <a href="#">Hjälp och support Journalen</a>
                </IDSLink>
              </IDSNavigationContent>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Overview;
