import {
  IDSBreadcrumbs,
  IDSCrumb,
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSCard,
  IDSExpandable,
  IDSButton,
  IDSButtonGroup,
  IDSLink,
  IDSIconChevron,
} from "@inera/ids-react";

function BokadeTider() {
  return (
    <>
      <div className="ids">
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

        <h1 className="ids-heading-1 ids-mt-12">Bokade tider</h1>
        <p className="ids-body ids-mt-4">Vill du boka en ny tid? </p>
        <IDSLink className="ids-mb-2">
          <IDSIconChevron></IDSIconChevron>
          <a href="/bokatid">Boka tid</a>
        </IDSLink>

        <IDSContainer>
          <IDSRow className="ids-mt-8">
            <IDSCol cols="8" m="12" s="12">
              <IDSCard fill={true}>
                <IDSExpandable expanded={true}>
                  <h3 className="ids-heading-2" slot="headline">
                    Fredag 31 maj 2024 kl 09.15
                  </h3>
                  <p className="ids-body">
                    <b>Mottagning: </b>Testvårdcentral A
                  </p>
                  <p className="ids-body">
                    <b>Bokningen avser: </b>Hosta
                  </p>
                  <p className="ids-body">
                    <b>Anledning till bokningen: </b>ombokar
                  </p>
                  <IDSRow
                    className="ids-mt-4"
                    style={{
                      borderTop: "1px solid rgb(218, 219, 220)",
                      paddingTop: "20px",
                    }}
                  >
                    <IDSCol m="12" s="12" style={{ lineHeight: "3rem" }}>
                      <IDSLink className="ids-mb-2" style={{ float: "left" }}>
                        <IDSIconChevron></IDSIconChevron>
                        <a href="javascript:console.log('click')">
                          Visa information och villkor för bokning
                        </a>
                      </IDSLink>
                    </IDSCol>
                    <IDSCol m="12" s="12">
                      <IDSButtonGroup rtl={true}>
                        <IDSButton sblock={true} size="l">
                          Avboka
                        </IDSButton>
                        <IDSButton sblock={true} size="l" secondary>
                          Omboka
                        </IDSButton>
                      </IDSButtonGroup>
                    </IDSCol>
                  </IDSRow>
                </IDSExpandable>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default BokadeTider;
