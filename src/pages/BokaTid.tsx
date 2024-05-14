import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSCard,
  IDSLink,
  IDSBreadcrumbs,
  IDSCrumb,
  IDSIconArrow,
} from "@inera/ids-react";

function BokaTid() {
  return (
    <>
      <div className="ids">
        <IDSBreadcrumbs
          current="Boka tid"
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

        <h1 className="ids-heading-1 ids-mt-12">Boka tid</h1>
        <p className="ids-body ids-mt-4">
          Vill du visa eller ändra dina bokade tider?{" "}
        </p>
        <IDSLink className="ids-mb-2">
          <IDSIconArrow />
          <a href="/appointments">Bokade tider</a>
        </IDSLink>
        <IDSContainer gutterless={true} className="ids-content">
          <IDSRow gap="2rem" justify={"space-between"}>
            <IDSCol cols="8" m="12" s="12" className="ids-content ids-mt-6">
              <IDSCard className="ids-mb-4">
                <h3 className="ids-heading-2">I min region</h3>

                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow />
                  <a href="javascript:console.log('click')">
                    Boka vaccination mot Covid-19
                  </a>
                </IDSLink>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">Där du är listad</h3>
                <p className="ids-mb-4">
                  Här visas den mottagning där du är listad på. Om du vill ändra
                  ditt vårdval kan du göra det på Välj/ändra vårdval.
                </p>
                <h4 className="ids-heading-3">Kungsängskliniken, Uppsala</h4>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow />
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">Andra mottagningar</h3>
                <p className="ids-mb-4">
                  Här kan du se mottagningar som du själv har lagt till eller
                  som kan ha lagts till åt dig efter kontakt med vården.
                </p>

                <h3 className="ids-heading-3 ids-mt-4">Aqua Dental Uppsala</h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow />
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Kungsängskliniken, Uppsala
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow />
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
              </IDSCard>
              <p className="ids-body ids-mt-12">
                För att lägga till fler mottagningar kan du gå till{" "}
                <a style={{ color: "#43618D" }} href="#">
                  Hitta och lägg till mottagning
                </a>
                .
              </p>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default BokaTid;
