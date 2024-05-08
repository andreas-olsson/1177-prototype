import {
  IDSLink,
  IDSRow,
  IDSCol,
  IDSList,
  IDSListItem,
  IDSIconArrow,
  IDSBadge,
} from "@inera/ids-react";
import resultsData from "../../assets/results.json";
import { useNavigate } from "react-router-dom";

interface ListResultsProps {
  heading?: boolean;
}

function ListResults({ heading }: ListResultsProps) {
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

  return (
    <>
      <IDSRow>
        {heading && (
          <IDSCol cols="12" className="ids-mb-4">
            <h3 className="ids-heading-2" style={{ float: "left" }}>
              Provsvar
            </h3>
            <IDSLink style={{ float: "right" }}>
              <IDSIconArrow />
              <a href="/results">Egen provhantering</a>
            </IDSLink>
          </IDSCol>
        )}

        <IDSCol cols="12">
          {resultsData.results.map((result, index) => (
            <>
              <a
                className="list-item"
                href="#"
                key={index}
                onClick={() => handleNavigate("results", index)}
              >
                <p className="ids-heading-6">
                  {formatDate(result.date).datePart}{" "}
                  <b>Kl. {formatDate(result.date).timePart}</b>
                </p>
                <span
                  className="list-heading ids-heading-3"
                  style={{ color: "#34628F" }}
                >
                  <IDSIconArrow inline size="xs" className="ids-mr-2" />
                  {result.title}
                </span>
                <div className="list-item-content">
                  {result.answered && (
                    <IDSBadge type="success">Besvarad</IDSBadge>
                  )}
                </div>
              </a>
            </>
          ))}
        </IDSCol>
      </IDSRow>
    </>
  );
}

export default ListResults;
