import "../styles/overview.css";
import { useNavigate } from "react-router-dom";
import messageData from "../assets/messages.json";

import resultData from "../assets/results.json";

import ListAppointments from "../components/lists/ListAppointments";
import ListJournal from "../components/lists/ListJournal";

import {
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSLink,
  IDSList,
  IDSListItem,
} from "@inera/ids-react";

function Overview() {
  const navigate = useNavigate(); // Använd useNavigate-hook

  const handleNavigate = (baseURL: string, index: any) => {
    navigate(`/${baseURL}/entity/?index=${index}`);
  };

  return (
    <>
      <div className="ids">
        <IDSBreadcrumbs
          current="Aktuellt"
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

        <h1 className="ids-heading-1 ids-mt-12">Aktuellt</h1>

        <IDSContainer>
          <IDSRow className="ids-mt-8">
            <IDSCol cols="8" m="12" className="col-padding-right">
              <ListAppointments amount={3} heading />
              <ListJournal amount={2} heading />
            </IDSCol>
            <IDSCol>
              <div style={{ overflow: "hidden" }} className="ids-mb-4">
                <h2 className="ids-heading-2" style={{ float: "left" }}>
                  Meddelanden
                </h2>

                <IDSLink style={{ float: "right" }}>
                  <a href="inbox/">inkorg</a>
                </IDSLink>
              </div>
              {messageData.messages.map((message, index) => (
                <div key={index}>
                  {message.unread && (
                    <>
                      <IDSRow>
                        <IDSCol>
                          <IDSList>
                            <IDSListItem
                              interactive={true}
                              headline={message.title}
                              onClick={() => handleNavigate("inbox", index)}
                            >
                              <a href="#" slot="interactive"></a>
                              <p className="ids-body">
                                Datum: <b>{message.date}</b>
                              </p>
                              <p className="ids-body">
                                Avsändare: <b>{message.author}</b>
                              </p>
                            </IDSListItem>
                          </IDSList>
                        </IDSCol>
                      </IDSRow>
                    </>
                  )}
                </div>
              ))}

              <div
                style={{ overflow: "hidden" }}
                className="ids-mb-4 ids-mt-12"
              >
                <h2 className="ids-heading-2" style={{ float: "left" }}>
                  Provsvar
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="results/">Egen provhantering</a>
                </IDSLink>
              </div>
              {resultData.results.map((result, index) => (
                <div key={index}>
                  <>
                    <IDSRow>
                      <IDSCol>
                        <IDSList>
                          <IDSListItem
                            interactive={true}
                            headline={result.title}
                            onClick={() => handleNavigate("inbox", index)}
                          >
                            <a href="#" slot="interactive"></a>
                            <p className="ids-body">
                              Datum: <b>{result.date}</b>
                            </p>
                          </IDSListItem>
                        </IDSList>
                      </IDSCol>
                    </IDSRow>
                  </>
                </div>
              ))}
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Overview;
