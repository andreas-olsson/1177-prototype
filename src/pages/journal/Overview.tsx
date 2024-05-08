import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSButton,
  IDSLink,
  IDSIconSearch,
  IDSRadio,
  IDSRadioGroup,
  IDSCard,
  IDSIconArrow,
  IDSBadge,
  IDSExpandable,
} from "@inera/ids-react";

function Overview() {
  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSBreadcrumbs
              current="Journal"
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
          <IDSRow justify="space-between">
            <IDSCol cols="8" m="12" s="12" className="ids-content">
              <IDSRow>
                <IDSCol>
                  <h1 className="ids-heading-1 ids-mt-12 ids-mb-6">
                    Journalen
                  </h1>
                  <p className="ids-preamble">
                    Välkommen till Journalen. Här kan du läsa dina
                    journaluppgifter från vården. Du kan välja att visa alla
                    dina uppgifter i journalöversikten eller en typ av uppgifter
                    i taget.
                  </p>
                  <IDSButton>Visa Journalöversikt</IDSButton>
                  <hr className="ids-mb-6 ids-mt-8" />
                </IDSCol>
              </IDSRow>
              <IDSRow>
                <IDSCol>
                  <div className="ids-mb-6 ids-mt-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Anteckningar</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Funktionstillstånd & ADL</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Provsvar</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Tillväxt</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Vaccinationer</a>
                    </IDSLink>
                  </div>
                </IDSCol>
                <IDSCol>
                  {" "}
                  <div className="ids-mb-6 ids-mt-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Diagnoser</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Läkemedel</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Remisser</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Uppmärksamhetsinformation</a>
                    </IDSLink>
                  </div>
                  <div className="ids-mb-6">
                    <IDSLink className="ids-heading-2" block>
                      <IDSIconArrow />
                      <a>Vårdplaner</a>
                    </IDSLink>
                  </div>
                </IDSCol>
              </IDSRow>
              <hr className="ids-mb-6 ids-mt-8" />
              <div className="ids-mb-6">
                <IDSLink className="ids-heading-2" block>
                  <IDSIconArrow />
                  <a>Loggar och spärrar</a>
                </IDSLink>
              </div>
              <hr className="ids-mb-6 ids-mt-8" />
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Vad du kan se i journalen
                  </h3>
                </IDSExpandable>
              </IDSCard>
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Nyheter om journalen
                  </h3>
                </IDSExpandable>
              </IDSCard>
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Inställningar för journalen
                  </h3>
                </IDSExpandable>
              </IDSCard>
              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <IDSExpandable>
                  <h3 slot="headline" className="ids-heading-5">
                    Hjälp och support
                  </h3>
                </IDSExpandable>
              </IDSCard>
            </IDSCol>
            <IDSCol cols="3" m="12" s="12">
              <hr className="ids-mb-6" />

              <IDSLink>
                <IDSIconSearch />
                <a href="javascript:console.log('click')">Sök i din journal</a>
              </IDSLink>
              <hr className="ids-mb-6 ids-mt-6" />

              <h2 className="ids-heading-6">Vad vill du se?</h2>
              <IDSRadioGroup>
                <IDSRadio>
                  <input type="radio"></input>
                  <label>Visa alla uppgifter</label>
                </IDSRadio>
                <IDSRadio>
                  <input type="radio"></input>
                  <label>Dölj uppgifter nyare än 14 dagar</label>
                </IDSRadio>
              </IDSRadioGroup>
              <hr className="ids-mb-6 ids-mt-6" />

              <IDSCard
                fill={true}
                className="ids-mb-6"
                style={{ display: "block" }}
              >
                <h2 className="ids-heading-2">Växla journal</h2>
                <hr />
                <ul className="blocklink">
                  <li>
                    <IDSBadge type="secondary" className="ids-mr-2">
                      Visas
                    </IDSBadge>
                    Andreas Olsson
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconArrow />
                      <a>Elsa Andersson</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconArrow />
                      <a>Elton Andersson</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard>
                <div
                  style={{
                    display: "block",
                    width: "900px",
                    height: "4px",
                    marginTop: "-15px",
                    marginLeft: "-20px",
                    marginBottom: "20px",
                    background: "#43618D",
                  }}
                />
                <h2 className="ids-heading-2" style={{ color: "black" }}>
                  Hitta på sidan
                </h2>
                <hr />
                <IDSLink>
                  <IDSIconArrow />
                  <a>Vad du kan se i Journalen</a>
                </IDSLink>
                <hr />
                <IDSLink>
                  <IDSIconArrow />
                  <a>Nyheter om Journalen</a>
                </IDSLink>
                <hr />
                <IDSLink>
                  <IDSIconArrow />
                  <a>Inställningar för Journalen</a>
                </IDSLink>
                <hr />
                <IDSLink>
                  <IDSIconArrow />
                  <a>Hjälp och support Journalen</a>
                </IDSLink>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Overview;
