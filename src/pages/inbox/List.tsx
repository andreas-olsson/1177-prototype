import React from "react";
import { useNavigate } from "react-router-dom"; // Importera Link från react-router-dom
import messageData from "../../assets/messages.json";
import ListMessages from "../../components/lists/ListMessages";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSTabs,
  IDSTab,
  IDSTabPanel,
} from "@inera/ids-react";

function List() {
  const navigate = useNavigate(); // Använd useNavigate-hook

  // Funktion för att hantera navigation på knappklick
  const handleNavigate = (index: any) => {
    navigate(`entity/?index=${index}`);
  };

  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Inkorg"
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
          <IDSRow>
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Inkorg</h1>
          </IDSRow>
          <IDSRow>
            <IDSCol cols="8" m="12">
              <IDSCard>
                <IDSTabs>
                  <IDSTab label="Olästa" selected={true}></IDSTab>
                  <IDSTab label="Alla meddelanden"></IDSTab>
                  <IDSTab label="Meddelanden med bilagor"></IDSTab>
                  <IDSTab label="Stjärnmärkta"></IDSTab>
                  <IDSTabPanel>
                    <ListMessages filter="unread" />
                  </IDSTabPanel>
                  <IDSTabPanel>
                    <ListMessages />
                  </IDSTabPanel>
                  <IDSTabPanel>
                    <ListMessages filter="attachment" />
                  </IDSTabPanel>
                  <IDSTabPanel>
                    <ListMessages filter="starred" />
                  </IDSTabPanel>
                </IDSTabs>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default List;
