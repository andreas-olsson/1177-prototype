import { useLocation } from "react-router-dom";
import {
  IDSLink,
  IDSNotificationBadge,
  IDSIconPlus,
  IDSIconReload,
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSCard,
} from "@inera/ids-react";

function Start() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <IDSContainer gutterless={true} className="ids-content">
          <IDSRow justify="start" gap="2rem">
            <IDSCol m="12" s="12">
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Inkorg</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Se inkorg</a>
                      <IDSNotificationBadge Size="s">2</IDSNotificationBadge>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Bokade tider</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Se bokade tider</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Genvägar</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Sök vård digitalt i 1177 direkt</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Agera ombud</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Ellen Persson</a>
                      <IDSNotificationBadge size="s">2</IDSNotificationBadge>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
            </IDSCol>
            <IDSCol m="12" s="12">
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Hälso- och vårdval</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Vårdcentralen tornet</a>
                    </IDSLink>
                  </li>
                </ul>
                <hr />
                <IDSLink className="ids-mb-2" activeicon={true}>
                  <IDSIconReload></IDSIconReload>
                  <a href="javascript:console.log('click')">
                    Ändra hälso- och vårdval
                  </a>
                </IDSLink>
              </IDSCard>

              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Mottagningar</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Arbetsterapimottagningen Sunne</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>Barn- och ungdomsmottagning Kristianstad</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>Barn- och ungdomspsykiatrimottagning Lund</a>
                    </IDSLink>
                  </li>
                </ul>
                <hr />
                <IDSLink className="ids-mb-2" activeicon={true}>
                  <IDSIconPlus></IDSIconPlus>
                  <a href="javascript:console.log('click')">
                    Hitta och lägg till mottagning
                  </a>
                </IDSLink>
              </IDSCard>
            </IDSCol>
            <IDSCol m="12" s="12">
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Digital rådgivning och chatt</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Vårdkontakt direkt</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Journalen</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Journalen QA</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>Journalen SIT</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Egen provhantering</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Beställ provhantering och se svar</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>Registrera prov</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Intyg</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Se intyg</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Läkemedelstjänster</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Se information om recept</a>
                    </IDSLink>
                  </li>
                </ul>
                <hr />
                <IDSLink className="ids-mb-2" activeicon={true}>
                  <IDSIconReload></IDSIconReload>
                  <a href="javascript:console.log('click')">Förnya recept</a>
                </IDSLink>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Synpunkter och klagomål</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Lämna synpunkter och klagomål</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Stöd och behandling</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Att hantera ADHD - Beroendemottagningen Kviberg</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>Hälsolyftet</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>
                        Internetpsykiatri - KBT för depression, hälsoångest,
                        paniksyndrom, social fobi och insomni (sömnb...
                      </a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink underlined={true}>
                      <a>Stöd och behandling</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Övriga tjänster</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink underlined={true}>
                      <a>Alla övriga tjänster</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Start;
