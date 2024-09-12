import "./App.css";
import { LeadCard } from "./components/LeadCard";
import { Spinner } from "./components/spinner/Spinner";
import { useLeads } from "./hooks/useLeads";

function App() {
  const limit = 3;
  const token = process.env.REACT_APP_ACCESS_TOKEN;
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
