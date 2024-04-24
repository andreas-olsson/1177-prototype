import React from "react";
import { useNavigate } from "react-router-dom"; // Importera Link från react-router-dom

import ListAppointments from "../../components/lists/ListAppointments";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
} from "@inera/ids-react";

function List() {
  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Bokade tider"
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
          </IDSRow>
          <IDSRow>
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Bokade tider</h1>
          </IDSRow>
          <IDSRow>
            <IDSCol cols="8">
              <ListAppointments />
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default List;
