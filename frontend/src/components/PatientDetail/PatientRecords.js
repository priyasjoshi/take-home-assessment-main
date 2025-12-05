import { RecordCard } from './RecordCard';
import './PatientDetail.css';

export const PatientRecords = ({ records }) => (
  <div className="patient-records-section">
    <h2>Medical Records ({records.length})</h2>
    {records.length === 0 ? (
      <p>No medical records found.</p>
    ) : (
      <div className="records-list">
        {records.map((rec, index) => (
          <RecordCard key={rec._id || index} record={rec} />
        ))}
      </div>
    )}
  </div>
);
