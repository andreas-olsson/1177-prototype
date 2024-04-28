import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./pages/Login";

import Services from "./components/Services";
import Start from "./pages/Start";
import Inkorg from "./pages/Inkorg";
import BokadeTider from "./pages/BokadeTider";
import BokaTid from "./pages/BokaTid";
import AppointmentsList from "./pages/appointments/List";
import AppointmentsEntity from "./pages/appointments/Entity";
import AppointmentsCreate from "./pages/appointments/Create";
import AppointmentsEdit from "./pages/appointments/Edit";
import InboxList from "./pages/inbox/List";
import InboxEntity from "./pages/inbox/Entity";
import Overview from "./pages/Overview";

import ResultsList from "./pages/results/List";
import ResultsEntity from "./pages/results/Entity";

import JournalList from "./pages/journal/List";
import JournalEntity from "./pages/journal/Entity";

function App() {
  return (
    <BrowserRouter>
      <div className="ids">
        <Header />
        <div id="mainContainer">
          <Routes>
            <Route index element={<Start />} />

            <Route path="/login" element={<Login />} />

            <Route path="/services" element={<Services />} />
            <Route path="/inkorg" element={<Inkorg />} />
            <Route path="/bokadetider" element={<BokadeTider />} />
            <Route path="/bokatid" element={<BokaTid />} />
            <Route path="/appointments" element={<AppointmentsList />} />
            <Route path="/overview" element={<Overview />} />
            <Route
              path="/appointments/entity"
              element={<AppointmentsEntity />}
            />

            <Route
              path="/appointments/entity/create"
              element={<AppointmentsCreate />}
            />
            <Route
              path="/appointments/entity/edit"
              element={<AppointmentsEdit />}
            />
            <Route path="/inbox/" element={<InboxList />} />
            <Route path="/inbox/entity" element={<InboxEntity />} />
            <Route path="/results" element={<ResultsList />} />
            <Route path="/results/entity" element={<ResultsEntity />} />

            <Route path="/journal" element={<JournalList />} />
            <Route path="/journal/entity" element={<JournalEntity />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
