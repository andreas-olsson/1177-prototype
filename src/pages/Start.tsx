import { IDSCol, IDSRow, IDSContainer } from "@inera/ids-react";

import Shortcuts from "../components/Shortcuts.tsx";
import Articles from "../components/Articles.tsx";

function Start() {
  return (
    <>
      <div className="ids">
        <IDSContainer className="ids-content">
          <IDSRow justify="start" gap="2rem">
            <IDSCol cols="12" m="12" s="12" className="ids-mt-6">
              <>
                <h1 className="ids-heading-1">
                  Hej! <br />
                  <span style={{ color: "#6F0031" }}>
                    {" "}
                    - Vad vill du göra idag?
                  </span>
                </h1>
              </>
            </IDSCol>
          </IDSRow>

          <Shortcuts />

          <>
            <Articles />
          </>
        </IDSContainer>
      </div>
    </>
  );
}

export default Start;
