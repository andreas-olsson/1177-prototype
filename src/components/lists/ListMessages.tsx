import {
  IDSLink,
  IDSRow,
  IDSCol,
  IDSIconArrow,
  IDSBadge,
  IDSIconDocument,
  IDSIconStarFilled,
} from "@inera/ids-react";
import messageData from "../../assets/messages.json";
import "../../styles/lists.css";
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

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const datePart = date.toLocaleString("sv-SE", {
      day: "2-digit",
      month: "short",
    });
    const timePart = date.toLocaleString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { datePart, timePart };
  };

  const filterMessage = (message: any) => {
    if (!filter) return true;
    if (filter === "attachment") return message.attachment;
    if (filter === "archived") return message.archived;
    if (filter === "unread") return message.unread;
    if (filter === "starred") return message.starred;
    return message[filter];
  };

  return (
    <>
      <IDSRow>
        {heading && (
          <IDSCol cols="12" className="ids-mb-4">
            <h3 className="ids-heading-2" style={{ float: "left" }}>
              Olästa meddelanden
            </h3>
            <IDSLink style={{ float: "right" }}>
              <IDSIconArrow />
              <a href="/inbox">Inkorgen</a>
            </IDSLink>
          </IDSCol>
        )}

        <IDSCol cols="12">
          {messageData.messages
            .slice(0, count || messageData.messages.length)
            .map((message, index) => (
              <>
                {filterMessage(message) && (
                  <>
                    <a
                      className="list-item"
                      href="#"
                      key={index}
                      onClick={() => handleNavigate("inbox", index)}
                    >
                      <p className="ids-heading-6">
                        {formatDate(message.date).datePart}{" "}
                        <b>Kl. {formatDate(message.date).timePart}</b>
                      </p>

                      <span
                        className="list-heading ids-heading-3"
                        style={{ color: "#34628F" }}
                      >
                        <IDSIconArrow inline size="xs" className="ids-mr-2" />
                        {message.title}
                      </span>

                      <div className="list-item-content">
                        <p className="ids-body ids-mb-2">{message.author}</p>
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
                          <div className="list-item-star">
                            <IDSIconStarFilled size="s" />
                          </div>
                        </>
                      )}
                    </a>
                  </>
                )}
              </>
            ))}
        </IDSCol>
      </IDSRow>
    </>
  );
}

export default ListMessages;
