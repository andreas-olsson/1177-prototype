import "../styles/shortcuts.css";

import {
  IDSIconEmail,
  IDSIconReload,
  IDSIconLog,
  IDSIconCalendar,
  IDSIconClipboardCross,
  IDSIconAlarmClockNeutral,
  IDSCol,
  IDSRow,
} from "@inera/ids-react";

function Shortcuts() {
  return (
    <>
      <IDSRow justify="space-between">
        <IDSCol cols="4" m="6" s="12" className="ctac-l-left ctac-m-left">
          <a className="cta" href="/login?location=inbox">
            <div className="cta-icon">
              <IDSIconEmail />
            </div>
            <span className="cta-title">Inkorg</span>
            <span className="cta-desc">Läs och skicka meddelanden</span>
          </a>
        </IDSCol>
        <IDSCol cols="4" m="6" s="12" className="ctac-l-middle ctac-m-right">
          <a className="cta" href="#">
            <div className="cta-icon">
              <IDSIconReload />
            </div>
            <span className="cta-title">Förnya recept</span>
            <span className="cta-desc">Förnya via dina mottagningar</span>
          </a>
        </IDSCol>
        <IDSCol cols="4" m="6" s="12" className="ctac-l-right ctac-m-left">
          <a className="cta" href="/login?location=journal">
            <div className="cta-icon">
              <IDSIconLog />
            </div>
            <span className="cta-title">Journal</span>
            <span className="cta-desc">Visa händelser i din journal</span>
          </a>
        </IDSCol>
        <IDSCol cols="4" m="6" s="12" className="ctac-l-left ctac-m-right">
          <a className="cta" href="#">
            <div className="cta-icon">
              <IDSIconCalendar />
            </div>
            <span className="cta-title">Boka tid</span>
            <span className="cta-desc">Boka ny tid eller ändra en bokning</span>
          </a>
        </IDSCol>
        <IDSCol cols="4" m="6" s="12" className="ctac-l-middle ctac-m-left">
          <a className="cta" href="#">
            <div className="cta-icon">
              <IDSIconClipboardCross />
            </div>
            <span className="cta-title">Intyg</span>
            <span className="cta-desc">Visa eller beställ intyg</span>
          </a>
        </IDSCol>
        <IDSCol cols="4" m="6" s="12" className="ctac-l-right ctac-m-right">
          <a className="cta" href="/login?location=overview">
            <div className="cta-icon">
              <IDSIconAlarmClockNeutral />
            </div>
            <span className="cta-title">Aktuellt</span>
            <span className="cta-desc">Vad ska du ha koll på?</span>
          </a>
        </IDSCol>
      </IDSRow>
    </>
  );
}

export default Shortcuts;
