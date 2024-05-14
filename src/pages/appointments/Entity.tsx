import { useLocation } from "react-router-dom";
import AppointmentsData from "../../assets/appointments.json";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSButton,
  IDSDialog,
  IDSLink,
  IDSIconExpand,
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

  const appointmentsLength = AppointmentsData.appointments.length;
  const validIndex = isNaN(index) ? 0 : Math.min(index, appointmentsLength - 1);
  const appointment = AppointmentsData.appointments[validIndex];

  // Funktion för att visa en alert
  const handleRescheduleClick = () => {
    alert("Vi antar att du bokar om en tid. Låt oss gå vidare ...");
  };

  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Din bokning"
              lead="Du är här:"
              srlabel="Du är här"
            >
              <IDSCrumb>
                <a href="/">Start</a>
              </IDSCrumb>
              <IDSCrumb>
                <a href="/appointments/">Bokade tider</a>
              </IDSCrumb>
              <IDSCrumb mobile>
                <a href="/appointments/">Bokade tider</a>
              </IDSCrumb>
            </IDSBreadcrumbs>
          </IDSRow>
          <IDSRow>
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Din bokning</h1>
          </IDSRow>
          <IDSRow justify="space-between" gap="2rem">
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
                    Datum och tid: <b>{appointment.date}</b>
                  </p>

                  <p className="ids-mb-2">
                    Plats: <b>{appointment.location}</b>
                  </p>
                  <p className="ids-mb-2">
                    Typ: <b>{appointment.type}</b>
                  </p>
                  <p className="ids-mb-2">
                    Anledning: <b>{appointment.reason}</b>
                  </p>
                </div>
                <div className="ids-content ids-mt-12">
                  <h2 className="ids-heading-2">Om din bokning</h2>
                  {/* Lägg till detta för att loopa igenom och visa innehållet under "content" */}
                  {appointment.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} style={{ marginTop: "10px" }}>
                      <h3 className="ids-heading-3">{contentItem.heading}</h3>
                      <p>{contentItem.text}</p>
                    </div>
                  ))}
                </div>
              </IDSCard>
            </IDSCol>
            <IDSCol>
              <IDSCard>
                <h2 className="ids-heading-2 ids-mb-6">Hantera din bokning</h2>
                <IDSButton
                  className="ids-mt-4 ids-mb-4"
                  block={true}
                  onClick={handleRescheduleClick}
                >
                  Boka om
                </IDSButton>
                <IDSButton
                  className="ids-mt-4 ids-mb-8"
                  block={true}
                  secondary={true}
                >
                  Avboka tiden
                </IDSButton>
                <IDSDialog width="">
                  <h3 className="ids-heading-1" slot="headline">
                    Villkor för din bokning
                  </h3>
                  <IDSLink>
                    <IDSIconExpand />
                    <a href="javascript:void(0)">
                      Information och villkor för din bokning
                    </a>
                  </IDSLink>
                  <b>Här finns villkor för din bokning</b>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </IDSDialog>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Entity;
