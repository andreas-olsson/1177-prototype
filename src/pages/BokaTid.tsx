import { useLocation } from "react-router-dom";
import {
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSCard,
  IDSExpandable,
  IDSLink,
  IDSIconChevron,
  IDSIconCalendar,
} from "@inera/ids-react";

function BokaTid() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <IDSContainer gutterless={true} className="ids-content">
          <IDSRow className="ids-content">
            <IDSCol cols="8" m="12" s="12" className="ids-content">
              <h1 className="ids-heading-1">Boka tid hos mottagning NU!!!</h1>
              <p>
                Här väljer du den mottagning där du önskar att boka tider. De
                mottagningar som visas erbjuder möjligheten att boka tid.
              </p>
              <IDSCard fill={true} className="card ids-block">
                <h2 className="ids-heading-5">Regionen rekommenderar</h2>

                <IDSLink className="ids-mb-2 block primary" activeicon={true}>
                  <IDSIconCalendar></IDSIconCalendar>
                  <a href="javascript:console.log('click')">
                    Boka tid hos Folktandvården
                  </a>
                </IDSLink>
              </IDSCard>
              <h2 className="ids-heading-2">Boka hos mitt vårdval</h2>
              <p>
                Här visas den mottagning där du är listad på. Om du vill ändra
                ditt vårdval kan du göra det på Välj/ändra vårdval.
              </p>
              <IDSCard fill={false} className="card ids-block">
                <h3 className="ids-heading-5">Gimo vårdcentral, Gimo</h3>
                <IDSLink className="ids-mb-2 block" activeicon={true}>
                  <a href="javascript:console.log('click')">Boka tid</a>
                </IDSLink>
                <IDSLink className="ids-mb-2 block" activeicon={true}>
                  <a href="javascript:console.log('click')">
                    Ändra eller omboka tid
                  </a>
                </IDSLink>
                <IDSLink className="ids-mb-2 block" activeicon={true}>
                  <a href="javascript:console.log('click')">Av-/omboka tid</a>
                </IDSLink>
              </IDSCard>
              <h2 className="ids-heading-2">Boka via andra mottagningar</h2>
              <div className="ids-content">
                <p>
                  Här visas de mottagningar som du själv har lagt till eller som
                  kan ha lagts till åt dig efter kontakt med vården. Under varje
                  mottagning finns respektive alternativ för tidbokning.
                </p>
                <p>
                  Om du saknar en mottagning kan du gå till Hitta och lägg till
                  mottagning.
                </p>
              </div>

              <IDSCard fill={false} className="card ids-block ids-heading-fix">
                <IDSExpandable
                  borderless={true}
                  headline="Folktandvården Östhammar"
                  variation={2}
                >
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                </IDSExpandable>
                <IDSExpandable
                  borderless={true}
                  headline="Gimo Vaccination"
                  variation={2}
                >
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                </IDSExpandable>
                <IDSExpandable
                  borderless={true}
                  headline="Folktandvården Östhammar"
                  variation={2}
                >
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                  <IDSLink className="ids-mb-2 block" activeicon={true}>
                    <IDSIconChevron></IDSIconChevron>
                    <a href="javascript:console.log('click')">
                      Ändra eller omboka tid
                    </a>
                  </IDSLink>
                </IDSExpandable>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default BokaTid;
