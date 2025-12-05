import { calculateAge } from '../../utils/calculateAge';

export const PatientTable = ({ patients, onSelectPatient }) => {
  if (patients.length === 0) {
    return <div className="no-patients">No patients found.</div>;
  }

  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{calculateAge(patient.dateOfBirth)}</td>
            <td>
              <button onClick={() => onSelectPatient(patient.id)}>
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
