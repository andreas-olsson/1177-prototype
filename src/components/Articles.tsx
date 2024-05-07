import { IDSList, IDSListItem, IDSCol, IDSRow } from "@inera/ids-react";

function Articles() {
  return (
    <>
      <IDSRow justify="center" className="ids-mt-12">
        <h2 className="ids-heading-5">Aktuellt i din region</h2>
      </IDSRow>
      <IDSRow justify="space-around" gap="1rem" className="ids-mt-4">
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem interactive={true} headline="Söka vård under resan">
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/regional/stockholm/media/puffbilder-till-startsidan/familj_i_skidlift.jpg"
              />
              Här finns information om vilka mottagningar du kan kontakta om du
              eller någon i din familj behöver söka vård under resan. Välj den
              region du befinner dig i överst på sidan.
            </IDSListItem>
          </IDSList>
        </IDSCol>
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem interactive={true} headline="Magsjuketider">
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/regional/stockholm/media/puffbilder-till-startsidan/glasman.jpg"
              />
              Det är många som söker information om magsjuka just nu. Trots att
              du kan må mycket dåligt brukar magsjuka sällan vara allvarligt.
              Oftast räcker det med att vila och dricka mycket.
            </IDSListItem>
          </IDSList>
        </IDSCol>
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem interactive={true} headline="Vilka vaccin bör man ta?">
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/regional/stockholm/media/puffbilder-till-startsidan/aldre-kvinna-barn.jpg"
              />
              Vilka vaccinationer som du rekommenderas att ta beror på din ålder
              och hälsotillstånd. Vissa vaccin är kostnadsfria, andra kostar.
              Här beskriver vi vilka olika vaccin som rekommenderas till dig som
              är vuxen.
            </IDSListItem>
          </IDSList>
        </IDSCol>
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem interactive={true} headline="Other languages">
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/regional/stockholm/media/puffbilder-till-startsidan/sprak-startsidan-23.jpg"
              />{" "}
              Here you will find a selection of information about health and
              healthcare from 1177.se translated to several other languages.
            </IDSListItem>
          </IDSList>
        </IDSCol>
      </IDSRow>
      <IDSRow justify="space-around" gap="2rem" className="ids-mt-12">
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem
              interactive={true}
              headline="Hjälp och stöd om du är nedstämd"
            >
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/nationell/media/fotografier/behandlingar-och-hjalpmedel/behandlingar/psykolog_mottagning_puff.jpg?"
              />
              Det finns många olika anledningar till att känna sig ledsen,
              orolig eller stressad. Läs om vad du kan göra själv för att må
              bättre och när du ska söka vård.
            </IDSListItem>
          </IDSList>
        </IDSCol>
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem interactive={true} headline="Borsta tänder på barn">
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/nationell/media/fotografier/barn-och-gravid/att-ta-hand-om-barn/praktiska-rad/borsta_tander_barn.jpg"
              />
              En gnutta tålamod kan vara bra att ta med in i badrummet. Här
              hittar du fler tips för att hålla tänderna rena.
            </IDSListItem>
          </IDSList>
        </IDSCol>
        <IDSCol m="5" s="12">
          <IDSList>
            <IDSListItem interactive={true} headline="Är du förkyld?">
              <a href="#" slot="interactive"></a>
              <img
                className="ids-img ids-mb-2"
                src="https://www.1177.se/globalassets/1177/nationell/media/fotografier/sjukdomar-och-besvar/infektioner/hosta.jpg"
              />
              En förkylning brukar gå över av sig själv, men det finns saker du
              kan göra för att lindra symtomen.
            </IDSListItem>
          </IDSList>
        </IDSCol>
      </IDSRow>
    </>
  );
}

export default Articles;
