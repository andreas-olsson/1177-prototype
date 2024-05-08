import "../styles/overview.css";

import ListMessages from "../components/lists/ListMessages";
import ListAppointments from "../components/lists/ListAppointments";
import ListJournal from "../components/lists/ListJournal";
import ListResults from "../components/lists/ListResults";

import {
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCol,
  IDSRow,
  IDSContainer,
} from "@inera/ids-react";

function Overview() {
  return (
    <>
      <div className="ids">
        <IDSBreadcrumbs
          current="Aktuellt"
          lead="Du är här:"
          srlabel="Du är här"
        >
          <IDSCrumb>
            <a href="/">Start</a>
          </IDSCrumb>

          <IDSCrumb mobile>
            <a href="/">Start</a>
          </IDSCrumb>
        </IDSBreadcrumbs>

        <h1 className="ids-heading-1 ids-mt-12">Aktuellt</h1>

        <IDSContainer>
          <IDSRow className="ids-mt-8">
            <IDSCol cols="8" m="12" className="col-padding-right">
              <div className="ids-mb-12">
                <ListAppointments count={3} heading />
              </div>
              <div className="ids-mb-12">
                <ListJournal count={3} heading />
              </div>
            </IDSCol>
            <IDSCol>
              <div className="ids-mb-12">
                <ListMessages heading filter="unread" count={3} />
              </div>
              <div className="ids-mb-12">
                <ListResults heading />
              </div>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Overview;
