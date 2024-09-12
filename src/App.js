import "./App.css";
import { LeadCard } from "./components/LeadCard";
import { Spinner } from "./components/spinner/Spinner";
import { useLeads } from "./hooks/useLeads";

function App() {
  const limit = 3;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmOTAyNmU1ODE4NzA3OWE0NTdlMjBjMTdmZTc5ODQ1ZTY5Mzg3ZmExOWZiMjQwMzkxMWYxMzk2YTAwYTAxNzYxN2UyOTA2YTk2MDU3ZjY5In0.eyJhdWQiOiIxODE5MjZiMS04NTllLTQ4YzMtOTA5ZS1jODA4YmNhNzAyYjYiLCJqdGkiOiIyZjkwMjZlNTgxODcwNzlhNDU3ZTIwYzE3ZmU3OTg0NWU2OTM4N2ZhMTlmYjI0MDM5MTFmMTM5NmEwMGEwMTc2MTdlMjkwNmE5NjA1N2Y2OSIsImlhdCI6MTcyNjEzNjA2NywibmJmIjoxNzI2MTM2MDY3LCJleHAiOjE3MjYyMjI0NjcsInN1YiI6IjExNTA3NTM0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTQ1ODc4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZGExZmQxZGEtMDE0Yy00MjFkLWIwNzItMjk3NDliZDVjZTkxIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.PsDES1zIqaBY4qwfHhhlfrDJ5CQaptrOlNAwwOfQ6x8UyQ332sep_qfagmkx8aKTREBlJZnY8s_jpNToHK0sloegjQThcS1W8h79v4_tLXEZYYeSCR6WlxNuLbHPK0FqmsPJPB8K4TdJmeq8VUisj6PdaJjSUB9lWx0oEZ6a_ZwPU_14o7NRiXXmTllROs8WiiD7HWEAILRWJ0-qVnv_L6vYLApwEz2FnZglcaMNmd3sLArdg3vbGL8sjjpp7vgVoCUv7uTNgJWFhocOPIMb-a5Dfgi66mrZ6zdgdd1IBFd4OWayurPj3gx_xly87rBPxb5xzoxGDFSksc9T-IE-Ew";
  const { leads, isLoading, selectedLeadId, handleLeadClick } = useLeads(
    token,
    limit
  );

  return (
    <div className="app">
      <h1>Leads</h1>
      {isLoading && <Spinner />}
      <div className="grid-container">
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            isSelected={selectedLeadId === lead.id}
            onClick={() => handleLeadClick(lead.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
