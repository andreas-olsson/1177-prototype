import { useNavigate } from "react-router-dom"; // Importera Link från react-router-dom
import testData from "../../assets/results.json";

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
              current="Egen provhantering"
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
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">
              Egen provhantering
            </h1>
          </IDSRow>
          <IDSRow justify="center">
            <IDSButton>Beställ och registrera</IDSButton>
          </IDSRow>
          <IDSRow>
            <h2 className="ids-heading-2 ids-mt-12 ids-mb-6">
              Pågående beställningar
            </h2>
            <p>Du har inga beställningar den senaste veckan</p>
          </IDSRow>
          <IDSRow>
            <h2 className="ids-heading-2 ids-mt-12 ids-mb-6">
              Tidigare beställningar
            </h2>
          </IDSRow>
          <IDSRow>
            <IDSCol>
              {testData.results.map((result, index) => (
                <IDSCard style={{ display: "block" }} className="ids-mb-2">
                  <IDSRow>
                    <IDSCol>
                      {result.answered ? (
                        <IDSIconTestTube
                          style={{ float: "left" }}
                          className="ids-mr-2"
                        />
                      ) : (
                        <IDSIconTestTubeEmpty
                          style={{ float: "left", opacity: "0.5" }}
                          className="ids-mr-2"
                          colorpreset={3}
                        />
                      )}

                      <p className="ids-mt-2">
                        <span className="ids-mr-4">{result.date}</span>
                        <b>{result.title}</b>
                        {result.answered && (
                          <IDSBadge type="success" className="ids-ml-4">
                            Besvarad
                          </IDSBadge>
                        )}
                      </p>
                    </IDSCol>

                    <IDSCol cols="2">
                      <IDSButton
                        secondary
                        onClick={() => handleNavigate(index)}
                      >
                        Visa provsvar
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
