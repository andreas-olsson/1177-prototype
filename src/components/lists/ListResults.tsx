import {
  IDSLink,
  IDSRow,
  IDSCol,
  IDSList,
  IDSListItem,
  IDSIconChevron,
  IDSBadge,
  IDSIconTestTube,
  IDSIconTestTubeEmpty,
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
  return (
    <>
      <IDSRow>
        {heading && (
          <IDSCol cols="12" className="ids-mb-4">
            <h3 className="ids-heading-3" style={{ float: "left" }}>
              Provsvar
            </h3>
            <IDSLink style={{ float: "right" }}>
              <IDSIconChevron />
              <a href="/results">Egen provhantering</a>
            </IDSLink>
          </IDSCol>
        )}

        <IDSCol>
          <IDSList>
            {resultsData.results.map((result, index) => (
              <>
                <IDSListItem
                  key={index}
                  interactive={true}
                  headline={result.title}
                  date={new Date(result.date)}
                  onClick={() => handleNavigate("results", index)}
                >
                  <a href="#" slot="interactive"></a>

                  {result.answered && (
                    <IDSBadge type="success" className="ids-ml-4">
                      Besvarad
                    </IDSBadge>
                  )}
                </IDSListItem>
              </>
            ))}
          </IDSList>
        </IDSCol>
      </IDSRow>
    </>
  );
}

export default ListResults;
