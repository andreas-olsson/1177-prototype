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
  IDSIconChevron,
} from "@inera/ids-react";

function Start() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <IDSContainer gutterless={true} className="ids-content ids-mt-6">
          <IDSRow justify="start" gap="2rem">
            <IDSCol m="12" s="12">
              <h2 className="ids-heading-2">Inkorg</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Se inkorg</a>
                      <IDSNotificationBadge className="ids-ml-2" size="s">
                        2
                      </IDSNotificationBadge>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Tidbokning</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink className="ids-mb-2">
                      <IDSIconChevron></IDSIconChevron>
                      <a href="/bokadetider">Bokade tider</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink className="ids-mb-2">
                      <IDSIconChevron></IDSIconChevron>
                      <a href="/bokatid">Boka tid</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Genvägar</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Sök vård digitalt i 1177 direkt</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Agera ombud</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <a>Ellen Persson</a>
                      <IDSNotificationBadge className="ids-ml-2" size="s">
                        2
                      </IDSNotificationBadge>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
            </IDSCol>
            <IDSCol m="12" s="12">
              <h2 className="ids-heading-2">Hälso- och vårdval</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Vårdcentralen tornet</a>
                    </IDSLink>
                  </li>
                </ul>
                <hr />
                <IDSLink className="ids-mb-2">
                  <IDSIconReload></IDSIconReload>
                  <a href="javascript:console.log('click')">
                    Ändra hälso- och vårdval
                  </a>
                </IDSLink>
              </IDSCard>
              <h2 className="ids-heading-2">Mottagningar</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Arbetsterapimottagningen Sunne</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Barn- och ungdomsmottagning Kristianstad</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Barn- och ungdomspsykiatrimottagning Lund</a>
                    </IDSLink>
                  </li>
                </ul>
                <hr />
                <IDSLink className="ids-mb-2">
                  <IDSIconPlus></IDSIconPlus>
                  <a href="javascript:console.log('click')">
                    Hitta och lägg till mottagning
                  </a>
                </IDSLink>
              </IDSCard>
            </IDSCol>
            <IDSCol m="12" s="12">
              <h2 className="ids-heading-2">Digital rådgivning och chatt</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Vårdkontakt direkt</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Journalen</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Journalen QA</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Journalen SIT</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Egen provhantering</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Beställ provhantering och se svar</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Registrera prov</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Intyg</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Se intyg</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Läkemedelstjänster</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Se information om recept</a>
                    </IDSLink>
                  </li>
                </ul>
                <hr />
                <IDSLink className="ids-mb-2">
                  <IDSIconReload></IDSIconReload>
                  <a href="javascript:console.log('click')">Förnya recept</a>
                </IDSLink>
              </IDSCard>
              <IDSCard fill={false} className="card">
                <h2 className="ids-heading-2">Synpunkter och klagomål</h2>
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Lämna synpunkter och klagomål</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Stöd och behandling</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Att hantera ADHD - Beroendemottagningen Kviberg</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Hälsolyftet</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>
                        Internetpsykiatri - KBT för depression, hälsoångest,
                        paniksyndrom, social fobi och insomni (sömnb...
                      </a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
                      <a>Stöd och behandling</a>
                    </IDSLink>
                  </li>
                </ul>
              </IDSCard>
              <h2 className="ids-heading-2">Övriga tjänster</h2>
              <IDSCard fill={false} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink>
                      <IDSIconChevron></IDSIconChevron>
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
