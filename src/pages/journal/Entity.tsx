import { useLocation } from "react-router-dom";
import journalData from "../../assets/journal.json";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
} from "@inera/ids-react";

function Entity() {
  const location = useLocation();

  // Funktion för att hämta query parametern 'index' från URL:en
  const getIndexFromLocation = () => {
    const query = new URLSearchParams(location.search);
    const index = query.get("index");
    return index ? parseInt(index, 10) : 0; // Returnerar 0 som standard om 'index' inte finns
  };

  // Hämta index från URL och kontrollera att det är ett giltigt nummer
  const index = getIndexFromLocation();
  // Bestäm vilken uppsättning data som ska användas baserat på index
  const journalLength = journalData.notes.length;
  const validIndex = isNaN(index) ? 0 : Math.min(index, journalLength - 1);
  const note = journalData.notes[validIndex];

  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Journalanteckning"
              lead="Du är här:"
              srlabel="Du är här"
            >
              <IDSCrumb>
                <a href="/">Start</a>
              </IDSCrumb>
              <IDSCrumb>
                <a href="/journal/">Journalöversikt</a>
              </IDSCrumb>
              <IDSCrumb mobile>
                <a href="/journal/">Journalöversikt</a>
              </IDSCrumb>
            </IDSBreadcrumbs>
          </IDSRow>
          <IDSRow>
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">
              Journalanteckning
            </h1>
          </IDSRow>

          <IDSRow justify="space-between">
            <IDSCol cols="8" m="12">
              <IDSCard
                className="ids-content ids-mb-4"
                style={{ display: "block" }}
              >
                <div
                  style={{
                    background: "#f1f1f1",
                    borderRadius: "4px",
                    padding: "1rem",
                  }}
                >
                  <p className="ids-mb-2">
                    Datum och tid: <b>{note.date}</b>
                  </p>
                  <p className="ids-mb-2">
                    Plats: <b>{note.location}</b>
                  </p>
                  <p className="ids-mb-2">
                    Antecknad av: <b>{note.author}</b>
                  </p>
                </div>
                <div className="ids-content ids-mt-12">
                  <h2 className="ids-heading-2 ">{note.title}</h2>
                  {/* Lägg till detta för att loopa igenom och visa innehållet under "content" */}
                  {note.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} style={{ marginTop: "2rem" }}>
                      <h3 className="ids-heading-3">{contentItem.heading}</h3>
                      <p>{contentItem.text}</p>
                    </div>
                  ))}
                </div>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Entity;
