import ListJournal from "../../components/lists/ListJournal";

import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSLink,
  IDSIconSearch,
  IDSNavigationLocal,
} from "@inera/ids-react";

function List() {
  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Journalöversikt"
              lead="Du är här:"
              srlabel="Du är här"
            >
              <IDSCrumb>
                <a href="/">Start</a>
              </IDSCrumb>
              <IDSCrumb>
                <a href="/journal/overview">Journalen</a>
              </IDSCrumb>
              <IDSCrumb mobile>
                <a href="/">Start</a>
              </IDSCrumb>
            </IDSBreadcrumbs>
          </IDSRow>
          <IDSRow justify="space-between">
            <IDSCol cols="8">
              <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">
                Journalöversikt
              </h1>
              <p className="ids-preamble">
                Här finns alla tillgängliga uppgifter ur din journal, i
                tidsordning med de nyaste överst.
              </p>
              <ListJournal />
            </IDSCol>
            <IDSCol cols="3">
              <hr className="ids-mb-6" />

              <IDSLink>
                <IDSIconSearch />
                <a href="javascript:console.log('click')">Sök i din journal</a>
              </IDSLink>
              <hr className="ids-mb-6 ids-mt-6" />

              <h2 className="ids-heading-5 ids-mb-4">Vad vill du se?</h2>
              <div className="ids-content ids-mb-12">
                <p className="ids-body">
                  Du har valt att visa alla uppgifter
                  <br />
                  Du kan ändra dina val från
                  <br />
                  <a href="#" style={{ color: "#396291" }}>
                    Journalens startsida
                  </a>
                </p>
              </div>

              <IDSNavigationLocal headline="Journaluppgifter">
                <IDSLink active={true}>
                  <a href="#">Journalöversikt</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Anteckingar</a>
                </IDSLink>

                <IDSLink>
                  <a href="#">Diagnoser</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Funktionstillstånd & ADL</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Läkemedel</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Provsvar</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Remisser</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Tillväxt</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Uppmärksamhetsinformation</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Vaccinationer</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Vårdplaner</a>
                </IDSLink>
                <IDSLink>
                  <a href="#">Loggar och spärrar</a>
                </IDSLink>
              </IDSNavigationLocal>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default List;
