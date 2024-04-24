import "../styles/overview.css";
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
  IDSList,
  IDSListItem,
} from "@inera/ids-react";

function Overview() {
  const navigate = useNavigate(); // Använd useNavigate-hook

  const handleNavigate = (baseURL: string, index: any) => {
    navigate(`/${baseURL}/entity/?index=${index}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate(); // Dag utan inledande nollor
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ];

    return {
      year: year.toString(), // År med fyra siffror
      month: months[monthIndex], // Månad med tre bokstäver
      day: day.toString(), // Dag som en siffra (utan inledande nolla)
      time: `${hours}:${minutes}`, // Klockslag med fyra siffror och kolon
    };
  };

  const describeDate = (dateString) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Sätter dagens datum till midnatt

    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0); // Sätter input-datumet till midnatt

    const timeDiff = date - now; // Skillnad i millisekunder
    const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24)); // Omvandlar till dagar

    console.log(
      `Now: ${now.toISOString()}, Date: ${date.toISOString()}, TimeDiff: ${timeDiff}, DaysDiff: ${daysDiff}`
    );

    if (daysDiff < 0) {
      return null; // Datumet har passerat
    } else if (daysDiff === 0) {
      return (
        <>
          <IDSBadge className="ids-ml-2" type="info">
            Idag
          </IDSBadge>
        </>
      );
    } else if (daysDiff === 1) {
      return (
        <>
          <IDSBadge className="ids-ml-2" type="info">
            Idag
          </IDSBadge>
        </>
      );
    } else if (daysDiff <= 7) {
      return (
        <>
          <IDSBadge className="ids-ml-2" type="info">
            om {daysDiff} dagar
          </IDSBadge>
        </>
      );
    } else {
      return null; // Datumet är mer än 7 dagar bort
    }
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
              <div style={{ overflow: "hidden" }} className="ids-mb-4">
                <h2 className="ids-heading-2" style={{ float: "left" }}>
                  Bokade tider
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="appointments/">Fler tider</a>
                </IDSLink>
              </div>
              <IDSCard>
                {appointmentData.appointments.map((appointment, index) => (
                  <>
                    <IDSRow key={index} justify="end" className="ids-mb-6">
                      <IDSCol cols="9">
                        <div className="calendar-icon">
                          <div className="day">
                            {formatDate(appointment.date).day}
                          </div>
                          <div className="month">
                            {formatDate(appointment.date).month}
                          </div>
                          <div className="year">
                            {formatDate(appointment.date).year}
                          </div>
                        </div>

                        <div className="list-content">
                          <h2 className="ids-heading-2 ids-mt-2">
                            <span
                              style={{
                                color: "#4b4d4f",
                                fontWeight: "300",
                                marginRight: "4px",
                              }}
                            >
                              {formatDate(appointment.date).day}{" "}
                              {formatDate(appointment.date).month}{" "}
                            </span>
                            {" kl. "}
                            {formatDate(appointment.date).time}

                            {describeDate(appointment.date)}
                          </h2>
                          <p className="ids-body">
                            Plats: <b>{appointment.location}</b>
                          </p>
                          <p className="ids-body">
                            Typ: <b>{appointment.type}</b>
                          </p>
                          <p className="ids-body">
                            Anledning: <b>{appointment.reason}</b>
                          </p>
                          <div></div>
                        </div>
                      </IDSCol>
                      <IDSCol cols="3">
                        <IDSButton
                          block={true}
                          secondary
                          onClick={() => handleNavigate("appointments", index)}
                        >
                          Visa bokning
                        </IDSButton>
                      </IDSCol>
                    </IDSRow>
                  </>
                ))}
              </IDSCard>
              <div
                style={{ overflow: "hidden" }}
                className="ids-mb-4 ids-mt-12"
              >
                <h2 className="ids-heading-2" style={{ float: "left" }}>
                  Tidigare händelser
                </h2>
                <IDSLink style={{ float: "right" }}>
                  <a href="journal/">Fler händelser</a>
                </IDSLink>
              </div>

              <IDSCard>
                {journalData.notes.map((note, index) => (
                  <>
                    <IDSRow key={index} justify="end" className="ids-mb-6">
                      <IDSCol cols="9">
                        <div className="calendar-icon">
                          <div className="day">{formatDate(note.date).day}</div>
                          <div className="month">
                            {formatDate(note.date).month}
                          </div>
                          <div className="year">
                            {formatDate(note.date).year}
                          </div>
                        </div>

                        <div className="list-content">
                          <h2 className="ids-heading-2 ids-mt-2">
                            <span
                              style={{
                                color: "#4b4d4f",
                                fontWeight: "300",
                                marginRight: "4px",
                              }}
                            >
                              {formatDate(note.date).day}{" "}
                              {formatDate(note.date).month}{" "}
                              {formatDate(note.date).year}
                              {" kl. "}
                              {formatDate(note.date).time}
                            </span>
                          </h2>
                          <p className="ids-body">
                            Plats: <b>{note.location}</b>
                          </p>
                          <p className="ids-body">
                            Antecknad av: <b>{note.author}</b>
                          </p>
                        </div>
                      </IDSCol>
                      <IDSCol cols="3">
                        <IDSButton
                          block={true}
                          secondary
                          onClick={() => handleNavigate("journal", index)}
                        >
                          Läs mer
                        </IDSButton>
                      </IDSCol>
                    </IDSRow>
                  </>
                ))}
              </IDSCard>
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
