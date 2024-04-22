import { useNavigate } from "react-router-dom";
import messageData from "../assets/messages.json";
import appointmentData from "../assets/appointments.json";
import resultData from "../assets/results.json";

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
            <IDSCol cols="8" m="12">
              <h2 className="ids-heading-2">Bokade tider</h2>
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
            </IDSCol>
            <IDSCol>
              <h2 className="ids-heading-2">Meddelanden</h2>
              {messageData.messages.map((message, index) => (
                <div key={index}>
                  {message.unread && (
                    <IDSCard>
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

              <h2 className="ids-heading-2 ids-mt-4">Provsvar</h2>
              {resultData.results.map((result, index) => (
                <div key={index}>
                  <IDSCard>
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
