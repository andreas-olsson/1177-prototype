import {
  IDSLink,
  IDSRow,
  IDSCol,
  IDSList,
  IDSListItem,
  IDSIconChevron,
  IDSBadge,
  IDSIconDocument,
  IDSIconStarFilled,
} from "@inera/ids-react";
import messageData from "../../assets/messages.json";
import { useNavigate } from "react-router-dom";

interface ListMessagesProps {
  count?: number;
  heading?: boolean;
  filter?: "unread" | "archived" | "starred" | "attachment";
}

function ListMessages({ heading, filter, count }: ListMessagesProps) {
  const handleNavigate = (baseURL: string, index: any) => {
    navigate(`/${baseURL}/entity/?index=${index}`);
  };

  const navigate = useNavigate(); // Använd useNavigate-hook

  const filterMessage = (message: any) => {
    if (!filter) return true; // Om inget filter är satt, visa alla meddelanden.
    if (filter === "attachment") return message.attachment; // Kontrollera om meddelandet har en bifogad fil.
    if (filter === "archived") return message.archived; // Kontrollera om meddelandet är arkiverat.
    if (filter === "unread") return message.unread; // Kontrollera om meddelandet är oläst.
    if (filter === "starred") return message.starred; // Kontrollera om meddelandet är markerat som favorit.
    return message[filter]; // Dynamisk kontroll för eventuella andra filter.
  };

  return (
    <>
      <IDSRow>
        {heading && (
          <IDSCol cols="12" className="ids-mb-4">
            <h3 className="ids-heading-3" style={{ float: "left" }}>
              Olästa meddelanden
            </h3>
            <IDSLink style={{ float: "right" }}>
              <IDSIconChevron />
              <a href="/inbox">Inkorgen</a>
            </IDSLink>
          </IDSCol>
        )}

        <IDSCol cols="12">
          <IDSList>
            {messageData.messages
              .slice(0, count || messageData.messages.length)
              .map((message, index) => (
                <>
                  {filterMessage(message) && (
                    <>
                      <IDSListItem
                        key={index}
                        interactive={true}
                        headline={message.title}
                        date={new Date(message.date)}
                        onClick={() => handleNavigate("inbox", index)}
                      >
                        <a href="#" slot="interactive"></a>
                        <p className="ids-body">{message.author}</p>
                        <div className="ids-mt-2">
                          <IDSBadge type="secondary" className="ids-mr-2">
                            {message.status}
                          </IDSBadge>
                          {message.attachment && (
                            <IDSBadge type="info" className="ids-mt-4">
                              Bifogad fil
                              <IDSIconDocument
                                size="s"
                                className="ids-ml-2"
                                colorpreset={3}
                              />
                            </IDSBadge>
                          )}
                        </div>
                        {message.starred && (
                          <>
                            <div
                              style={{
                                position: "absolute",
                                right: "1rem",
                                top: "2.5rem",
                              }}
                            >
                              <IDSIconStarFilled size="s" />
                            </div>
                          </>
                        )}
                      </IDSListItem>
                    </>
                  )}
                </>
              ))}
          </IDSList>
        </IDSCol>
      </IDSRow>
    </>
  );
}

export default ListMessages;
