import { useEffect, useState } from "react";
import { startFetching } from "../api";

export function useLeads(token, limit) {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const page = 1;

  useEffect(() => {
    startFetching(
      page,
      limit,
      token,
      (newLeads) => setLeads((prevLeads) => [...prevLeads, ...newLeads]),
      () => setIsLoading(false)
    );
  }, [page, limit, token]);

  const handleLeadClick = async (id) => {
    if (selectedLeadId === id) {
      setSelectedLeadId(null);
      return;
    }

    setSelectedLeadId(id);
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, isLoading: true } : lead
      )
    );

    const response = await fetch(`/api/v4/leads/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const leadDetails = await response.json();

    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              isLoading: false,
              ...leadDetails,
              dueDate: new Date(leadDetails.closest_task_at * 1000),
              status: leadDetails.taskStatus,
            }
          : lead
      )
    );
  };

  return {
    leads,
    isLoading,
    selectedLeadId,
    handleLeadClick,
  };
}
