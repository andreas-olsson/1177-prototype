import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSCard,
  IDSLink,
  IDSIconArrow,
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

        <h1 className="ids-heading-1 ids-mt-6">Boka tid</h1>

        <p className="ids-body ids-mt-4">Vill du visa dina bokningar? </p>
        <IDSLink className="ids-mb-2">
          <IDSIconArrow></IDSIconArrow>
          <a href="/bokadetider">Bokade tider</a>
        </IDSLink>
        <IDSContainer gutterless={true} className="ids-content">
          <IDSRow gap="2rem" justify={"space-between"}>
            <IDSCol cols="8" m="12" s="12" className="ids-content ids-mt-6">
              <IDSCard className="ids-mb-4">
                <h3 className="ids-heading-2">Regionen rekommenderar </h3>

                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">
                    Boka tid för provtagning
                  </a>
                </IDSLink>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">Där du är listad</h3>
                <h4 className="ids-heading-3">Gimo vårdcentral, Gimo</h4>

                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h4 className="ids-heading-3 ids-mt-4">
                  Folktandvården, Uppsala
                </h4>

                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">Hos andra mottagningar</h3>
                {/* <p className="ids-mb-4">
                  Här kan du se mottagningar som du själv har lagt till eller
                  som kan ha lagts till åt dig efter kontakt med vården.
                </p> */}

                <h3 className="ids-heading-3">Alby VC</h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Bra Liv Habo vårdcentral
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Folktandvården Hertig Karl, Örebro
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">
                    Ändra eller omboka tid
                  </a>
                </IDSLink>
                <hr />
                <p className="ids-body ids-mt-8">
                  Mottagningarna som visas har du själv har lagt till eller så
                  har de lagts till åt dig efter kontakt med vården.
                  <br />
                  För att lägga till fler mottagningar kan du gå till{" "}
                  <a style={{ color: "#43618D" }} href="#">
                    Hitta och lägg till mottagning
                  </a>
                  .
                </p>
              </IDSCard>
              <IDSCard className="ids-mt-8" style={{ display: "block" }}>
                <h3 className="ids-heading-2">Övriga tjänster</h3>
                {/* <p className="ids-mb-4">
                  Här kan du se mottagningar som du själv har lagt till eller
                  som kan ha lagts till åt dig efter kontakt med vården.
                </p> */}

                <h3 className="ids-heading-3">Boka tid hos Folktandvården</h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Boka tid hos Folktandvården
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>

                <h3 className="ids-heading-3 ids-mt-4">
                  Boka tid hos Folktandvården
                </h3>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
                <IDSLink className="ids-mb-2 block">
                  <IDSIconArrow></IDSIconArrow>
                  <a href="javascript:console.log('click')">
                    Ändra eller omboka tid
                  </a>
                </IDSLink>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default BokaTid;
