import './PatientDetail.css';

export const RecordCard = ({ record }) => (
  <div className="record-card">
    <h3>{record.title}</h3>
    <p><strong>Type:</strong> {record.type}</p>
    <p><strong>Date:</strong> {record.date}</p>
    <p><strong>Doctor:</strong> {record.doctor}</p>
    <p><strong>Hospital:</strong> {record.hospital}</p>
    <p><strong>Status:</strong> {record.status}</p>
  </div>
);
