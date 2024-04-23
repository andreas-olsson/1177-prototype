import React from "react";
import { useNavigate } from "react-router-dom"; // Importera Link från react-router-dom
import messageData from "../../assets/messages.json";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSBadge,
  IDSButton,
  IDSTag,
  IDSIconDocument,
  IDSIconCheck,
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
              {messageData.messages.map((message, index) => (
                <IDSCard
                  key={index}
                  style={{ display: "block" }}
                  className="ids-mb-2"
                >
                  <IDSRow
                    justify="end"
                    style={{
                      borderBottom: "1px solid #eee",
                      paddingBottom: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <IDSCol>
                      {message.unread ? (
                        <>
                          <h2 className="ids-heading-2 ids-mt-2">
                            <span className="ids-heading-2 ids-mr-1">
                              &#8226;
                            </span>
                            {message.title}
                          </h2>
                        </>
                      ) : (
                        <h2
                          className="ids-mt-2"
                          style={{ fontWeight: "500", color: "#666" }}
                        >
                          {message.title}
                        </h2>
                      )}
                    </IDSCol>
                    <IDSCol cols="2">
                      <IDSButton
                        secondary
                        block={true}
                        onClick={() => handleNavigate(index)}
                      >
                        Öppna
                      </IDSButton>
                    </IDSCol>
                  </IDSRow>
                  <IDSRow className="ids-mb-2">
                    <IDSCol>
                      <p className="ids-body">
                        Datum: <b>{message.date}</b>
                      </p>
                      <p className="ids-body">
                        Från: <b>{message.author}</b>
                      </p>
                    </IDSCol>
                  </IDSRow>
                  <IDSRow>
                    {message.completed && (
                      <IDSBadge className="ids-mr-2" type="success">
                        Ärende avslutat
                      </IDSBadge>
                    )}
                    {message.attachment && (
                      <IDSBadge type="info">
                        <IDSIconDocument
                          size="s"
                          className="ids-mr-2"
                          colorpreset={3}
                        />
                        Bifogad fil
                      </IDSBadge>
                    )}
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
