import ListMessages from "../../components/lists/ListMessages";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCard,
  IDSTabs,
  IDSTab,
  IDSTabPanel,
} from "@inera/ids-react";

function List() {
  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Inkorg"
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
            <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">Inkorg</h1>
          </IDSRow>
          <IDSRow>
            <IDSCol cols="8" m="12">
              <IDSTabs>
                <IDSTab label="Olästa" selected={true}></IDSTab>
                <IDSTab label="Alla meddelanden"></IDSTab>
                <IDSTab label="Meddelanden med bilagor"></IDSTab>
                <IDSTab label="Stjärnmärkta"></IDSTab>
                <IDSTabPanel>
                  <IDSCard>
                    <ListMessages filter="unread" />z
                  </IDSCard>
                </IDSTabPanel>
                <IDSTabPanel>
                  <IDSCard>
                    <ListMessages />
                  </IDSCard>
                </IDSTabPanel>
                <IDSTabPanel>
                  <IDSCard>
                    <ListMessages filter="attachment" />
                  </IDSCard>
                </IDSTabPanel>
                <IDSTabPanel>
                  <IDSCard>
                    <ListMessages filter="starred" />
                  </IDSCard>
                </IDSTabPanel>
              </IDSTabs>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default List;
