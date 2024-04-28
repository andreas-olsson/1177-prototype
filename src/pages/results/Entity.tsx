import { useLocation } from "react-router-dom";
import resultData from "../../assets/results.json";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSBadge,
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
  const resultLength = resultData.results.length;
  const validIndex = isNaN(index) ? 0 : Math.min(index, resultLength - 1);
  const result = resultData.results[validIndex];

  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Provsvar"
              lead="Du är här:"
              srlabel="Du är här"
            >
              <IDSCrumb>
                <a href="/">Start</a>
              </IDSCrumb>
              <IDSCrumb>
                <a href="/results/">Egen provhantering</a>
              </IDSCrumb>
              <IDSCrumb mobile>
                <a href="/results/">Egen provhantering</a>
              </IDSCrumb>
            </IDSBreadcrumbs>
          </IDSRow>
          <IDSRow>
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Provsvar</h1>
          </IDSRow>

          <IDSRow justify="space-between">
            <IDSCol cols="8" m="12">
              <h2 className="ids-heading-2">{result.title}</h2>

              {result.answered && <IDSBadge type="success">Besvarad</IDSBadge>}

              <p>{result.date}</p>

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
                    Datum och tid: <b>{result.date}</b>
                  </p>
                </div>
                <div className="ids-content ids-mt-12">
                  <h2 className="ids-heading-2">Om din bokning</h2>
                  {/* Lägg till detta för att loopa igenom och visa innehållet under "content" */}
                  {result.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} style={{ marginTop: "10px" }}>
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
