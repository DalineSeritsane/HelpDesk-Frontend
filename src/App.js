import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
        <Route exact path="/" element={<DefaultLayout />} />
         <Route exact path="/dashboard" element={<Dashboard />} />
         <Route exact path="/add-ticket" element={<AddTicket />} />
         <Route exact path="/tickets" element={<TicketList />} />
         <Route path="ticket/:id" element={<Ticket />} />
       
      </Routes>
      </Router>
    </div>
  );
}


export default App;
