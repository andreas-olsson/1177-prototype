import {
  IDSFooter,
  IDSLink,
  IDSIconChevronBold,
  IDSMobileMenuItem,
  IDSMobileMenu,
  IDSIconExternal,
} from "@inera/ids-react";

function Footer() {
  return (
    <>
      <div>
        <IDSFooter
          className="ids-hide ids-hide ids-show-1177"
          headline="1177"
          subheadline=" - tryggt om din hälsa och vård"
          type="1177"
        >
          <p>
            Läs om hälsa och sjukdomar och var du kan hitta vård. Logga in för
            att läsa din journal och göra dina vårdärenden. Ring telefonnummer
            1177 för sjukvårdsrådgivning dygnet runt.
            <br />
            <br />
            1177 Vårdguiden är en tjänst från Sveriges regioner. Vi finns alltid
            med dig när du vill må bättre.
          </p>
          <IDSLink slot="link-col-1">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 1')">
              Other Languages
            </a>
          </IDSLink>
          <IDSLink slot="link-col-1">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 2')">Lätt svenska</a>
          </IDSLink>

          <IDSLink slot="link-col-2">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 4')">Om 1177</a>
          </IDSLink>
          <IDSLink slot="link-col-2">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 5')">E-tjänster</a>
          </IDSLink>
          <IDSLink slot="link-col-2">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 6')">Aktuellt</a>
          </IDSLink>
          <IDSLink slot="link-col-3">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 7')">Kontakt</a>
          </IDSLink>
          <IDSLink slot="link-col-3">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 8')">Press</a>
          </IDSLink>
          <IDSLink slot="sub-footer-right">
            <a href="javascript:console.log('click: Link 9')">
              Digital tillgänglighet
            </a>
          </IDSLink>

          <IDSMobileMenu>
            <IDSMobileMenuItem headline="Headline 1">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:1')">
                  headline 1:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:2')">
                  headline 1:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 2">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:1')">
                  headline 2:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:2')">
                  headline 2:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 3">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:1')">
                  headline 3:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:2')">
                  headline 3:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
          </IDSMobileMenu>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 10')">Link 13</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 11')">Link 13</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 12')">Link 14</a>
          </IDSLink>
        </IDSFooter>
        {/** Note that this code example shows every theme variation.
  Friendly reminder: Don't forget to delete the className="ids-show-THEME" */}
        <IDSFooter
          className="ids-hide ids-show-1177-pro"
          servicename="[Tjänstens namn]"
          type="1177-pro"
          headline="Headline"
        >
          <p>
            Läs om hälsa och sjukdomar och var du kan hitta vård. Logga in för
            att läsa din journal och göra dina vårdärenden. Ring telefonnummer
            1177 för sjukvårdsrådgivning dygnet runt.
            <br />
            <br />
            1177 Vårdguiden är en tjänst från Sveriges regioner. Vi finns alltid
            med dig när du vill må bättre.
          </p>
          <IDSLink slot="link-col-1">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 1')">Link 1</a>
          </IDSLink>
          <IDSLink slot="link-col-1">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 2')">Link 1</a>
          </IDSLink>
          <IDSLink slot="link-col-1">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 3')">Link 3</a>
          </IDSLink>
          <IDSLink slot="link-col-2">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 4')">Link 4</a>
          </IDSLink>
          <IDSLink slot="link-col-2">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 5')">Link 5</a>
          </IDSLink>
          <IDSLink slot="link-col-2">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 6')">Link 6</a>
          </IDSLink>
          <IDSLink slot="link-col-3">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 7')">Link 7</a>
          </IDSLink>
          <IDSLink slot="link-col-3">
            <IDSIconChevronBold color="var(--footer-link_color)"></IDSIconChevronBold>
            <a href="javascript:console.log('click: Link 8')">Link 8</a>
          </IDSLink>
          <IDSLink slot="sub-footer-right">
            <a href="javascript:console.log('click: Link 9')">Link 10</a>
          </IDSLink>
          <IDSLink slot="sub-footer-right">
            <a href="javascript:console.log('click: Link 10')">Link 11</a>
          </IDSLink>
          <IDSLink slot="sub-footer-right">
            <a href="javascript:console.log('click: Link 11')">Link 12</a>
          </IDSLink>
          <p
            style={{
              position: "relative",
            }}
            slot="sub-footer-left"
          >
            [Tjänstens namn] drivs av{" "}
            <a
              style={{
                color: "white",
                outline: "white",
              }}
              href="https://www.inera.se"
            >
              Inera AB
            </a>
            <IDSIconExternal
              style={{
                position: "relative",
                bottom: "-2px",
              }}
              width="14"
              height="14"
              color="white"
              inline={true}
            ></IDSIconExternal>{" "}
            på uppdrav av Sveriges regioner.
          </p>
          <p
            style={{
              position: "relative",
            }}
            slot="sub-footer-mobile"
          >
            [Tjänstens namn] drivs av{" "}
            <a
              style={{
                color: "#636466",
                outline: "#636466",
              }}
              href="https://www.inera.se"
            >
              Inera AB
            </a>
            <IDSIconExternal
              style={{
                position: "relative",
                bottom: "-2px",
              }}
              width="14"
              height="14"
              color="#636466"
              inline={true}
            ></IDSIconExternal>{" "}
            på uppdrav av Sveriges regioner.
          </p>
          <IDSMobileMenu>
            <IDSMobileMenuItem headline="Headline 1">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:1')">
                  headline 1:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:2')">
                  headline 1:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 2">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:1')">
                  headline 2:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:2')">
                  headline 2:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 3">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:1')">
                  headline 3:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:2')">
                  headline 3:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
          </IDSMobileMenu>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 10')">Link 13</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 11')">Link 13</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 12')">Link 14</a>
          </IDSLink>
        </IDSFooter>
        {/** Note that this code example shows every theme variation.
  Friendly reminder: Don't forget to delete the className="ids-show-THEME" */}
        <IDSFooter
          className="ids-hide ids-show-inera"
          type="inera"
          headline="Headline"
        >
          <p>
            Inera ägs av SKL Företag, regioner och kommuner. Genom att erbjuda
            kompetens inom digitalisering stödjer Inera ägarnas
            verksamhets-utveckling. Inera koordinerar och utvecklar gemensamma
            digitala lösningar till nytta för invånare, medarbetare och
            beslutsfattare.
          </p>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-1"
          >
            <a href="javascript:console.log('click: Link 1')">Link 1</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-1"
          >
            <a href="javascript:console.log('click: Link 2')">Link 1</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-1"
          >
            <a href="javascript:console.log('click: Link 3')">Link 3</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-2"
          >
            <a href="javascript:console.log('click: Link 4')">Link 4</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-2"
          >
            <a href="javascript:console.log('click: Link 5')">Link 5</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-2"
          >
            <a href="javascript:console.log('click: Link 6')">Link 6</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-3"
          >
            <a href="javascript:console.log('click: Link 7')">Link 7</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="link-col-3"
          >
            <a href="javascript:console.log('click: Link 8')">Link 8</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="sub-footer-right"
          >
            <a href="javascript:console.log('click: Link 9')">Link 9</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="sub-footer-right"
          >
            <a href="javascript:console.log('click: Link 10')">Link 10</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="sub-footer-right"
          >
            <a href="javascript:console.log('click: Link 11')">Link 11</a>
          </IDSLink>
          <p slot="sub-footer-left">
            Inera AB ägs av SKR, regioner och kommuner.
          </p>
          <IDSMobileMenu>
            <IDSMobileMenuItem headline="Headline 1">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:1')">
                  headline 1:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:2')">
                  headline 1:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 2">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:1')">
                  headline 2:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:2')">
                  headline 2:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 3">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:1')">
                  headline 3:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:2')">
                  headline 3:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
          </IDSMobileMenu>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 10')">Link 13</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 11')">Link 13</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 12')">Link 14</a>
          </IDSLink>
        </IDSFooter>
        {/** Note that this code example shows every theme variation.
  Friendly reminder: Don't forget to delete the className="ids-show-THEME" */}
        <IDSFooter
          className="ids-hide ids-show-inera-admin"
          servicename="[Service name]"
          type="inera-admin"
          headline="Headline"
        >
          <p>
            Inera skapar förutsättningar för att digitalisera välfärden genom
            att tillhandahålla en gemensam digital infrastruktur och arkitektur.
          </p>
          <IDSLink color="var(--footer-link_color)" slot="link-col-1">
            <a href="javascript:console.log('click: Link 1')">Link 1</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-1">
            <a href="javascript:console.log('click: Link 2')">Link 1</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-1">
            <a href="javascript:console.log('click: Link 3')">Link 3</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-2">
            <a href="javascript:console.log('click: Link 4')">Link 4</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-2">
            <a href="javascript:console.log('click: Link 5')">Link 5</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-2">
            <a href="javascript:console.log('click: Link 6')">Link 6</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-3">
            <a href="javascript:console.log('click: Link 7')">Link 7</a>
          </IDSLink>
          <IDSLink color="var(--footer-link_color)" slot="link-col-3">
            <a href="javascript:console.log('click: Link 8')">Link 8</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="sub-footer-right"
          >
            <a href="javascript:console.log('click: Link 9')">Link 9</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="sub-footer-right"
          >
            <a href="javascript:console.log('click: Link 10')">Link 10</a>
          </IDSLink>
          <IDSLink
            outline="var(--focus-outline-bright_color)"
            slot="sub-footer-right"
          >
            <a href="javascript:console.log('click: Link 11')">Link 11</a>
          </IDSLink>
          <p
            style={{
              position: "relative",
            }}
            slot="sub-footer-left"
          >
            [Tjänstens namn] drivs av{" "}
            <a
              style={{
                color: "white",
                outline: "white",
              }}
              href="https://www.inera.se"
            >
              Inera AB
            </a>
            <IDSIconExternal
              style={{
                position: "relative",
                bottom: "-2px",
              }}
              width="14"
              height="14"
              color="white"
              inline={true}
            ></IDSIconExternal>
          </p>
          <p
            style={{
              position: "relative",
            }}
            slot="sub-footer-mobile"
          >
            [Tjänstens namn] drivs av{" "}
            <a
              style={{
                color: "white",
                outline: "white",
              }}
              href="https://www.inera.se"
            >
              Inera AB
            </a>
            <IDSIconExternal
              style={{
                position: "relative",
                bottom: "-2px",
              }}
              width="14"
              height="14"
              color="white"
              inline={true}
            ></IDSIconExternal>
          </p>
          <IDSMobileMenu>
            <IDSMobileMenuItem headline="Headline 1">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:1')">
                  headline 1:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 1:2')">
                  headline 1:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 2">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:1')">
                  headline 2:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 2:2')">
                  headline 2:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
            <IDSMobileMenuItem headline="Headline 3">
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:1')">
                  headline 3:1
                </a>
              </IDSMobileMenuItem>
              <IDSMobileMenuItem>
                <a href="javascript:console.log('headline 3:2')">
                  headline 3:2
                </a>
              </IDSMobileMenuItem>
            </IDSMobileMenuItem>
          </IDSMobileMenu>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 10')">Link 10</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 11')">Link 11</a>
          </IDSLink>
          <IDSLink slot="sub-footer-links">
            <a href="javascript:console.log('click: Link 12')">Link 12</a>
          </IDSLink>
        </IDSFooter>
      </div>
    </>
  );
}

export default Footer;
