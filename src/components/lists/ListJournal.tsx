import {
  IDSLink,
  IDSCard,
  IDSRow,
  IDSCol,
  IDSIconArrow,
} from "@inera/ids-react";
import journalData from "../../assets/journal.json";
import { useNavigate } from "react-router-dom";

interface ListJournalProps {
  count?: number;
  heading?: boolean;
}

function ListJournal({ count, heading }: ListJournalProps) {
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

  return (
    <>
      {heading && (
        <IDSRow justify="space-between" className="ids-mb-4">
          <IDSCol m="12">
            <h2 className="ids-heading-2">Tidigare händelser</h2>{" "}
          </IDSCol>
          <IDSCol m="12">
            <IDSLink className="float-right-desktop">
              <IDSIconArrow />
              <a href="/journal">
                Fler händelser ({journalData.notes.length} st)
              </a>
            </IDSLink>
          </IDSCol>
        </IDSRow>
      )}
      <IDSCard>
        {journalData.notes
          .slice(0, count || journalData.notes.length)
          .map((note, index, notesArray) => {
            // Förbered jämförelse av datum utan tid
            const currentDate = new Date(note.date);
            currentDate.setHours(0, 0, 0, 0); // Nollställ tid
            const previousDate =
              index > 0 ? new Date(notesArray[index - 1].date) : null;
            if (previousDate) previousDate.setHours(0, 0, 0, 0);

            // Kontrollera om det aktuella datumet är samma som det föregående
            const isSameDay =
              previousDate && currentDate.getTime() === previousDate.getTime();

            return (
              <>
                <a
                  href="#"
                  key={index}
                  onClick={() => handleNavigate("journal", index)}
                  className="list-item ids-mb-6"
                >
                  {!isSameDay ? (
                    // Markup när uttrycket är sant (isSameDay är falskt)
                    <div className="calendar-icon">
                      <div className="day">{formatDate(note.date).day}</div>
                      <div className="month">{formatDate(note.date).month}</div>
                      <div className="year">{formatDate(note.date).year}</div>
                    </div>
                  ) : (
                    <>
                      <div className="same-day-icon"></div>
                    </>
                  )}

                  <div className="list-content">
                    <h2
                      className="ids-heading-3 ids-mt-1 list-heading"
                      style={{ color: "#34628F" }}
                    >
                      <IDSIconArrow inline size="xs" className="ids-mr-2" />
                      <span
                        style={{
                          fontWeight: "300",
                          marginRight: "4px",
                        }}
                      >
                        {formatDate(note.date).weekday}{" "}
                        {formatDate(note.date).day}{" "}
                        {formatDate(note.date).month}{" "}
                      </span>
                      {" kl. "}
                      {formatDate(note.date).time}
                    </h2>
                    <p className="ids-body ids-mb-1 ids-mt-1">
                      <b>{note.title}</b>
                    </p>
                    <p className="ids-body">
                      <span style={{ opacity: "0.7" }}>Antecknad av:</span>{" "}
                      {note.author}
                    </p>
                    <p className="ids-body">
                      <span style={{ opacity: "0.7" }}>Mottagning:</span>{" "}
                      {note.location}
                    </p>
                  </div>
                </a>
              </>
            );
          })}
      </IDSCard>
    </>
  );
}

export default ListJournal;
