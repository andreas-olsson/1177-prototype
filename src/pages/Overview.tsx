import { useNavigate } from "react-router-dom";
import messageData from "../assets/messages.json";
import appointmentData from "../assets/appointments.json";
import resultData from "../assets/results.json";
import journalData from "../assets/journal.json";

import {
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBadge,
  IDSButton,
  IDSIconDocument,
  IDSCard,
  IDSLink,
} from "@inera/ids-react";

function Overview() {
  const navigate = useNavigate(); // Använd useNavigate-hook

  // Funktion för att hantera navigation på knappklick
  const handleMessageNavigate = (index: any) => {
    navigate(`/inbox/entity/?index=${index}`);
  };

  // Funktion för att hantera navigation på knappklick
  const handleAppointmentNavigate = (index: any) => {
    navigate(`/appointments/entity/?index=${index}`);
  };

  const handleResultNavigate = (index: any) => {
    navigate(`/results/entity/?index=${index}`);
  };

  const handleJournalNavigate = (index: any) => {
    navigate(`/journal/entity/?index=${index}`);
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
            <a href="/services">Start</a>
          </IDSCrumb>

          <IDSCrumb mobile>
            <a href="/services">Start</a>
          </IDSCrumb>
        </IDSBreadcrumbs>

        <h1 className="ids-heading-1 ids-mt-12">Aktuellt</h1>

        <IDSContainer>
          <IDSRow className="ids-mt-8">
            <IDSCol cols="8" m="12" className="col-padding-right">
              <div style={{ overflow: "hidden" }} className="ids-mb-4">
                <h2 className="ids-heading-5" style={{ float: "left" }}>
                  Bokade tider
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="appointments/">Fler tider</a>
                </IDSLink>
              </div>
              {appointmentData.appointments.map((appointment, index) => (
                <IDSCard
                  key={index}
                  style={{ display: "block" }}
                  className="ids-mb-4"
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
                      <h2 className="ids-heading-2 ids-mt-2">
                        {appointment.date}
                      </h2>
                    </IDSCol>
                    <IDSCol cols="3">
                      <IDSButton
                        block={true}
                        secondary
                        onClick={() => handleAppointmentNavigate(index)}
                      >
                        Visa detaljer
                      </IDSButton>
                    </IDSCol>
                  </IDSRow>
                  <IDSRow>
                    <IDSCol>
                      <p>
                        Plats: <b>{appointment.location}</b>
                      </p>
                      <p>
                        Typ: <b>{appointment.type}</b>
                      </p>
                      <p>
                        Anledning: <b>{appointment.reason}</b>
                      </p>
                    </IDSCol>
                  </IDSRow>
                </IDSCard>
              ))}
              <div
                style={{ overflow: "hidden" }}
                className="ids-mb-4 ids-mt-12"
              >
                <h2 className="ids-heading-5" style={{ float: "left" }}>
                  Tidigare händelser
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="journal/">Fler händelser</a>
                </IDSLink>
              </div>
              {journalData.notes.map((note, index) => (
                <IDSCard
                  key={index}
                  style={{ display: "block" }}
                  className="ids-mb-4"
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
                      <h2 className="ids-heading-2 ids-mt-2">{note.date}</h2>
                    </IDSCol>
                    <IDSCol cols="3">
                      <IDSButton
                        block={true}
                        secondary
                        onClick={() => handleJournalNavigate(index)}
                      >
                        Visa detaljer
                      </IDSButton>
                    </IDSCol>
                  </IDSRow>
                  <IDSRow>
                    <IDSCol>
                      <p>
                        Plats: <b>{note.location}</b>
                      </p>
                      <p>
                        Datum: <b>{note.date}</b>
                      </p>
                      <p>
                        Antecknad av: <b>{note.author}</b>
                      </p>
                    </IDSCol>
                  </IDSRow>
                </IDSCard>
              ))}
            </IDSCol>
            <IDSCol>
              <div style={{ overflow: "hidden" }} className="ids-mb-4">
                <h2 className="ids-heading-5" style={{ float: "left" }}>
                  Meddelanden
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="inbox/">inkorg</a>
                </IDSLink>
              </div>
              {messageData.messages.map((message, index) => (
                <div key={index}>
                  {message.unread && (
                    <IDSCard className="ids-mb-2" style={{ display: "block" }}>
                      <IDSRow>
                        <IDSCol cols="8">
                          <>
                            <h3 className="ids-heading-3 ids-mt-3">
                              {message.title}
                            </h3>
                          </>
                        </IDSCol>
                        <IDSCol cols="4">
                          <IDSButton
                            secondary
                            block={true}
                            onClick={() => handleMessageNavigate(index)}
                          >
                            Öppna
                          </IDSButton>
                        </IDSCol>
                      </IDSRow>
                      <IDSRow className="ids-mb-2">
                        <IDSCol cols="12">
                          <p className="ids-body">
                            {message.date} {message.author}
                          </p>
                        </IDSCol>
                      </IDSRow>
                    </IDSCard>
                  )}
                </div>
              ))}

              <div
                style={{ overflow: "hidden" }}
                className="ids-mb-4 ids-mt-12"
              >
                <h2 className="ids-heading-5" style={{ float: "left" }}>
                  Provsvasr
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="results/">Egen provhantering</a>
                </IDSLink>
              </div>
              {resultData.results.map((result, index) => (
                <div key={index}>
                  <IDSCard className="ids-mb-2" style={{ display: "block" }}>
                    <IDSRow>
                      <IDSCol cols="8">
                        <>
                          <h3 className="ids-heading-3 ids-mt-3">
                            {result.title}
                          </h3>
                        </>
                      </IDSCol>
                      <IDSCol cols="4">
                        <IDSButton
                          secondary
                          block={true}
                          onClick={() => handleResultNavigate(index)}
                        >
                          Öppna
                        </IDSButton>
                      </IDSCol>
                    </IDSRow>
                    <IDSRow className="ids-mb-2">
                      <IDSCol cols="12"></IDSCol>
                    </IDSRow>
                  </IDSCard>
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
