import ListAppointments from "../../components/lists/ListAppointments";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSLink,
  IDSIconArrow,
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
            <IDSCol cols="8">
              <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Bokade tider</h1>
              <p className="ids-body ids-mt-4">Vill du boka en ny tid? </p>
              <IDSLink className="ids-mb-6" style={{ display: "block" }}>
                <IDSIconArrow />
                <a href="/bokatid">Boka tid</a>
              </IDSLink>
            </IDSCol>
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
