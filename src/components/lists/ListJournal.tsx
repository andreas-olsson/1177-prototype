import {
  IDSLink,
  IDSCard,
  IDSRow,
  IDSCol,
  IDSButton,
  IDSIconChevron,
  IDSIconEdit,
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
              <IDSIconChevron />
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
                <IDSRow
                  key={index}
                  justify="end"
                  className={`ids-mb-8 ${index !== 0 ? "list-item" : ""}`}
                >
                  <IDSCol cols="10" m="12">
                    {!isSameDay ? (
                      // Markup när uttrycket är sant (isSameDay är falskt)
                      <div className="calendar-icon">
                        <div className="day">{formatDate(note.date).day}</div>
                        <div className="month">
                          {formatDate(note.date).month}
                        </div>
                        <div className="year">{formatDate(note.date).year}</div>
                      </div>
                    ) : (
                      // Alternativ markup när uttrycket är falskt (isSameDay är sant)
                      <div className="same-day-icon"></div>
                    )}

                    <div className="list-content">
                      <h2 className="ids-heading-2 ids-mt-2">
                        <span
                          style={{
                            color: "#4b4d4f",
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
                        <IDSIconEdit
                          colorpreset={2}
                          size="s"
                          style={{ float: "left", margin: "2px 4px 0 0" }}
                        />
                        <b style={{ color: "#6a0032" }}>{note.title}</b>
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
                  </IDSCol>
                  <IDSCol cols="2" m="12" className="ids-mt-2">
                    <IDSButton
                      block={true}
                      secondary
                      onClick={() => handleNavigate("journal", index)}
                    >
                      Visa
                    </IDSButton>
                  </IDSCol>
                </IDSRow>
              </>
            );
          })}
      </IDSCard>
    </>
  );
}

export default ListJournal;
