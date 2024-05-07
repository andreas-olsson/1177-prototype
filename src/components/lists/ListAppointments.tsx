import {
  IDSLink,
  IDSBadge,
  IDSCard,
  IDSRow,
  IDSCol,
  IDSButton,
  IDSIconChevron,
  IDSIconFindCare,
} from "@inera/ids-react";
import appointmentData from "../../assets/appointments.json";
import { useNavigate } from "react-router-dom";

interface ListAppointmentsProps {
  count?: number; // ? innebär att propen är valfri
  heading?: boolean;
}

function ListAppointments({ count, heading }: ListAppointmentsProps) {
  const navigate = useNavigate(); // Använd useNavigate-hook

  const handleNavigate = (baseURL: string, index: any) => {
    navigate(`/${baseURL}/entity/?index=${index}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate(); // Dag utan inledande nollor
    const monthIndex = date.getMonth();
    const weekdayIndex = date.getDay();
    const year = date.getFullYear();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    const weekdays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];

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
      weekday: weekdays[weekdayIndex],
      day: day.toString(),
      // Dag som en siffra (utan inledande nolla)
      time: `${hours}:${minutes}`, // Klockslag med fyra siffror och kolon
    };
  };

  const describeDate = (dateString: string) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Sätter dagens datum till midnatt

    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0); // Sätter input-datumet till midnatt

    const timeDiff = date.getTime() - now.getTime(); // Skillnad i millisekunder
    const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24)); // Omvandlar till dagar

    if (daysDiff < 0) {
      return null; // Datumet har passerat
    } else if (daysDiff === 0) {
      return (
        <>
          <IDSBadge
            className="ids-ml-2"
            type="attention"
            style={{ position: "relative", top: "-3px" }}
          >
            Idag
          </IDSBadge>
        </>
      );
    } else if (daysDiff === 1) {
      return (
        <>
          <IDSBadge
            className="ids-ml-2"
            type="attention"
            style={{ position: "relative", top: "-3px" }}
          >
            Imorgon
          </IDSBadge>
        </>
      );
    } else if (daysDiff <= 7) {
      return (
        <>
          <IDSBadge
            className="ids-ml-2"
            type="secondary"
            style={{ position: "relative", top: "-3px" }}
          >
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
      {heading && (
        <IDSRow justify="space-between" className="ids-mb-4">
          <IDSCol m="12">
            <h2 className="ids-heading-2">Bokade tider</h2>{" "}
          </IDSCol>
          <IDSCol m="12">
            <IDSLink className="float-right-desktop">
              <IDSIconChevron />
              <a href="/appointments">
                Fler tider ({appointmentData.appointments.length} st)
              </a>
            </IDSLink>
          </IDSCol>
        </IDSRow>
      )}
      <IDSCard>
        {appointmentData.appointments
          .slice(0, count || appointmentData.appointments.length)
          .map((appointment, index) => (
            <>
              <IDSRow
                key={index}
                justify="end"
                className={`ids-mb-8 ${index !== 0 ? "list-item" : ""}`}
              >
                <IDSCol cols="10" m="12" className="ids-mb-4">
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
                    <h2 className="ids-heading-2 ids-mt-1">
                      <span
                        style={{
                          color: "#424242",
                          fontWeight: "300",
                          marginRight: "4px",
                        }}
                      >
                        {formatDate(appointment.date).weekday}{" "}
                        {formatDate(appointment.date).day}{" "}
                        {formatDate(appointment.date).month}{" "}
                      </span>
                      {" kl. "}
                      {formatDate(appointment.date).time}

                      {describeDate(appointment.date)}
                    </h2>
                    <p className="ids-body">
                      <IDSIconFindCare
                        colorpreset={2}
                        size="s"
                        style={{ float: "left", margin: "2px 4px 0 0" }}
                      />
                      <b style={{ color: "#6a0032" }}>{appointment.location}</b>
                    </p>
                    <p className="ids-body">
                      <span style={{ opacity: "0.7" }}>Typ:</span>{" "}
                      {appointment.type}
                    </p>
                    <p className="ids-body">
                      <span style={{ opacity: "0.7" }}>Anledning:</span>{" "}
                      {appointment.reason}
                    </p>
                    <div></div>
                  </div>
                </IDSCol>
                <IDSCol cols="2" m="12">
                  <IDSButton
                    block={true}
                    secondary
                    onClick={() => handleNavigate("appointments", index)}
                  >
                    Visa
                  </IDSButton>
                </IDSCol>
              </IDSRow>
            </>
          ))}
      </IDSCard>
    </>
  );
}

export default ListAppointments;
