import { useLocation } from "react-router-dom";
import { IDSCol, IDSRow, IDSContainer, IDSCard } from "@inera/ids-react";

function Start() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <IDSContainer gutterless={true} className="ids-content">
          <IDSRow justify="start">
            <IDSCol
              m="12"
              s="12"
              style={{
                padding: "0 20px 0 0",
                // background: "red",
              }}
            >
              <h2 className="ids-heading-2">Jag</h2>

              <IDSCard fill={true} className="card">
                <h3 className="ids-heading-3">Inkorg</h3>
                <p>
                  <b>Filled.</b> Lorem ipsum dolor sit amet.
                </p>
                <hr />
                <h3 className="ids-heading-3">Journal</h3>
                <p>
                  <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <hr />
              </IDSCard>
              <h2 className="ids-heading-2">Inkorg</h2>

              <IDSCard fill={true} className="card">
                <p>
                  <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </IDSCard>
            </IDSCol>
            <IDSCol
              m="12"
              s="12"
              style={{
                padding: "0 10px",
                // background: "green",
              }}
            >
              <h2 className="ids-heading-2">Hälso- och vårdval</h2>
              <IDSCard fill={true} className="card">
                <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </IDSCard>
              <h2 className="ids-heading-2">Mottagningar</h2>
              <IDSCard fill={true} className="card">
                <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </IDSCard>
            </IDSCol>
            <IDSCol
              m="12"
              s="12"
              style={{
                padding: "0 0 0 20px",
                // background: "blue",
              }}
            >
              <h2 className="ids-heading-2">Digital rådgivning och chatt</h2>
              <IDSCard fill={true} className="card">
                <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </IDSCard>
            </IDSCol>
          </IDSRow>
          <IDSRow justify="start">
            <IDSCol
              m="12"
              s="12"
              style={{
                padding: "0 20px",
                // background: "orange",
              }}
            >
              <h2>Inkorg</h2>
              <IDSCard fill={true} className="card">
                <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </IDSCard>
            </IDSCol>
            <IDSCol
              m="12"
              s="12"
              style={{
                padding: "0 20px",
              }}
            >
              <h2>Hälso- och vårdval</h2>
              <IDSCard fill={true} className="card">
                <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </IDSCard>
            </IDSCol>
            <IDSCol
              m="6"
              s="12"
              style={{
                padding: "0 4px;",
                background: "yellow",
              }}
            >
              <h2>Digital rådgivning och chatt</h2>
              <IDSCard fill={true} className="card">
                <b>Filled.</b> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Start;
