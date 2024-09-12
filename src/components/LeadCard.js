import { getStatusColor } from "../utils/getStatusColor";
import { formatDate } from "../utils/formatDate";
import { Spinner } from "./spinner/Spinner";

export function LeadCard({ lead, isSelected, onClick }) {
  if (lead.isLoading) return <Spinner />;

  return (
    <div
      className={`lead-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}>
      <div className="lead-id">ID: {lead.id}</div>
      <div className="lead-name">Name: {lead.name}</div>
      <div className="lead-price">Price: {lead.price} ₽</div>
      {isSelected && !lead.isLoading && (
        <div className="lead-details">
          <p>Date: {formatDate(lead.dueDate)}</p>
          <p>
            Status:
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill={getStatusColor(lead.dueDate)} />
            </svg>
          </p>
        </div>
      )}
    </div>
  );
}
