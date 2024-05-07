import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSButton,
  IDSIconUser,
} from "@inera/ids-react";

import { useLocalStorage } from "@uidotdev/usehooks";

import Shortcuts from "../components/Shortcuts.tsx";
import Articles from "../components/Articles.tsx";
import Services from "../components/Services.tsx";

function Start() {
  const [loggedin] = useLocalStorage("loggedin", false);

  return (
    <>
      <div className="ids">
        <IDSContainer className="ids-content">
          <IDSRow justify="start" gap="2rem">
            <IDSCol cols="12" m="12" s="12" className="ids-mt-6">
              {!loggedin ? (
                <>
                  <h1 className="ids-heading-1">
                    Hej! <br />
                    <span style={{ color: "#6F0031" }}>
                      {" "}
                      - Vad vill du göra idag?
                    </span>
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="ids-heading-2">Genvägar</h1>
                </>
              )}
            </IDSCol>
          </IDSRow>

          <Shortcuts />

          {loggedin ? (
            <div className="ids-mt-12">
              <Services />
            </div>
          ) : (
            <>
              <Articles />
            </>
          )}
        </IDSContainer>
      </div>
    </>
  );
}

export default Start;
