import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSCard,
  IDSLink,
  IDSIconChevron,
  IDSBreadcrumbs,
  IDSCrumb,
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
            <a href="/services">Start</a>
          </IDSCrumb>

          <IDSCrumb mobile>
            <a href="/services">Start</a>
          </IDSCrumb>
        </IDSBreadcrumbs>

        <h1 className="ids-heading-1 ids-mt-12">Boka tid</h1>
        <p className="ids-body ids-mt-4">
          Vill du visa eller hantera dina bokningar?{" "}
        </p>
        <IDSLink className="ids-mb-2">
          <IDSIconChevron></IDSIconChevron>
          <a href="/bokadetider">Bokade tider</a>
        </IDSLink>
        <IDSContainer gutterless={true} className="ids-content">
          <IDSRow gap="2rem" justify={"space-between"}>
            <IDSCol cols="8" m="12" s="12" className="ids-content ids-mt-6">
              <IDSCard className="ids-mb-4">
                <h3 className="ids-heading-2">I min region</h3>

                <IDSLink className="ids-mb-2 block">
                  <IDSIconChevron></IDSIconChevron>
                  <a href="javascript:console.log('click')">
                    Boka vaccination mot Covid-19
                  </a>
                </IDSLink>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">På Gimo vårdcentral, Gimo</h3>
                <p className="ids-mb-4">
                  Här visas den mottagning där du är listad på. Om du vill ändra
                  ditt vårdval kan du göra det på Välj/ändra vårdval.
                </p>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconChevron></IDSIconChevron>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">Andra mottagningar</h3>
                <p className="ids-mb-4">
                  Här finns bokningsmöjligheter för andra mottagingar som du har
                  lagt till, eller varit i kontakt med.
                </p>

                <h3 className="ids-heading-3">Alby VC</h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconChevron></IDSIconChevron>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Bra Liv Habo vårdcentral
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconChevron></IDSIconChevron>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Folktandvården Hertig Karl, Örebro
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconChevron></IDSIconChevron>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconChevron></IDSIconChevron>
                  <a href="javascript:console.log('click')">
                    Ändra eller omboka tid
                  </a>
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
