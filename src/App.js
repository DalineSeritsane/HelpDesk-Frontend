import React from "react";
import Entry from "./pages/entry/Entry";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketList from "./pages/ticket-list/TicketList";

function App() {
  return (
    <div className="App">
     {/* <Entry /> */}
     <DefaultLayout >
       {/* <Dashboard /> */}
       {/* <AddTicket /> */}
       <TicketList />
      </DefaultLayout> 
    </div>
  );
}


export default App;
