import './PatientDetail.css';
import { usePatientDetail } from '../../hooks/usePatientDetail';
import { PatientInfo } from './PatientInfo';
import { PatientRecords } from './PatientRecords';

const PatientDetail = ({ patientId, onBack }) => {
  // TODO: Implement fetchPatientData function
  // This should fetch both patient details and their records
  const { patient, records, loading, error } = usePatientDetail(patientId);
  
  if (loading) {
    return (
      <div className="patient-detail-container">
        <div className="loading">Loading patient details...</div>
      </div>
    );
  }

  if (error || !patient) {
    return (
      <div className="patient-detail-container">
        <div className="error">Error loading patient: {error || 'Patient not found'}</div>
        <button onClick={onBack} className="back-btn">Back to List</button>
      </div>
    );
  }

  return (
    <div className="patient-detail-container">
      <div className="patient-detail-header">
        <button onClick={onBack} className="back-btn">← Back to List</button>
      </div>

      <div className="patient-detail-content">
        {/* TODO: Display patient information */}
        {/* Show: name, email, dateOfBirth, gender, phone, address, walletAddress */}
        {/* Your implementation here */}
        <PatientInfo patient={patient} />

        {/* TODO: Display patient records */}
        {/* Show list of medical records with: type, title, date, doctor, hospital, status */}
        <PatientRecords records={records} />
      </div>
    </div>
  );
};

export default PatientDetail;


