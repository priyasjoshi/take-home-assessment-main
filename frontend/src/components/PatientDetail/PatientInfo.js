import './PatientDetail.css';

export const PatientInfo = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="patient-info-section">
      <h2>Patient Information</h2>
      <div className="info-grid">
        <div><strong>Name:</strong> {patient.name}</div>
        <div><strong>Email:</strong> {patient.email}</div>
        <div><strong>Date of Birth:</strong> {patient.dateOfBirth}</div>
        <div><strong>Gender:</strong> {patient.gender}</div>
        <div><strong>Phone:</strong> {patient.phone}</div>
        <div><strong>Address:</strong> {patient.address}</div>
        <div>
          <strong>Wallet Address:</strong> 
          <span className="wallet-address-row">{patient.walletAddress}</span>
        </div>
      </div>
    </div>
  );
};
