import React from "react";
import { useNavigate } from "react-router-dom"; // Importera Link från react-router-dom
import AppointmentsData from "../../assets/appointments.json";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSButton,
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
              current="Bokade tider"
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
          </IDSRow>
          <IDSRow>
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Bokade tider</h1>
          </IDSRow>
          <IDSRow>
            <IDSCol cols="8" m="12" className="col-padding-right">
              {AppointmentsData.appointments.map((appointment, index) => (
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
                        onClick={() => handleNavigate(index)}
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
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default List;
