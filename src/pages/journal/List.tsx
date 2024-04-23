import React from "react";
import { useNavigate } from "react-router-dom"; // Importera Link från react-router-dom
import journalData from "../../assets/journal.json";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSBadge,
  IDSButton,
  IDSIconTestTube,
  IDSIconTestTubeEmpty,
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
              current="Journal"
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
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Journal</h1>
          </IDSRow>

          <IDSRow></IDSRow>
          <IDSRow>
            <IDSCol cols="8">
              {journalData.notes.map((note, index) => (
                <IDSCard style={{ display: "block" }} className="ids-mb-2">
                  <IDSRow>
                    <IDSCol>
                      <p className="ids-mt-2">
                        <span className="ids-mr-4">{note.date}</span>
                        <b className="ids-mr-4">{note.title}</b>
                        {note.location}
                      </p>
                    </IDSCol>

                    <IDSCol cols="2">
                      <IDSButton
                        secondary
                        onClick={() => handleNavigate(index)}
                      >
                        Visa
                      </IDSButton>
                    </IDSCol>
                  </IDSRow>
                </IDSCard>
              ))}
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default List;
