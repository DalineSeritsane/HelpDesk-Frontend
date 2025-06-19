import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Entry from "./pages/entry/Entry";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketList from "./pages/ticket-list/TicketList";
import Ticket from "./pages/ticket/Ticket";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Entry />} />
        {/* Protected routes with layout */}
        <Route  element={<DefaultLayout />} >
         <Route  path="/dashboard" element={<Dashboard />} />
         <Route  path="/add-ticket" element={<AddTicket />} />
         <Route  path="/tickets" element={<TicketList />} />
         <Route path="ticket/:id" element={<Ticket />} />
       </Route>
      </Routes>
      </Router>
    </div>
  );
}


export default App;
