import { useState } from 'react';
import './PatientList.css';
import usePatientList from '../../hooks/usePatientList';
import { PatientTable } from './PatientTable';
import { PaginationControls } from './PaginationControls';

const PatientList = ({ onSelectPatient }) => {
  const [searchTerm, setSearchTerm] = useState('');


  // TODO: Implement the fetchPatients function
  // This function should:
  // 1. Call apiService.getPatients with appropriate parameters (page, limit, search)
  // 2. Update the patients state with the response data
  // 3. Update the pagination state
  // 4. Handle loading and error states

  // Use the custom hook for fetching patients
  const {
    patients,
    pagination,
    loading,
    error,
    currentPage,
    goToPage,
  } = usePatientList(searchTerm);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  if (loading) {
    return (
      <div className="patient-list-container">
        <div className="loading">Loading patients...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patient-list-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="patient-list-container">
      <div className="patient-list-header">
        <h2>Patients</h2>
        {/* TODO: Add search input field */}
        <input
          type="text"
          placeholder="Search patients..."
          className="search-input"
          // TODO: Add value, onChange handlers
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* TODO: Implement patient list display */}
      {/* Map through patients and display them */}
      {/* Each patient should be clickable and call onSelectPatient with patient.id */}
      <div className="patient-list">
        <PatientTable patients={patients} onSelectPatient={onSelectPatient} />
      </div>
      {/* TODO: Implement pagination controls */}
      {/* Show pagination buttons if pagination data is available */}
      {pagination.totalPages > 1 && (
         <PaginationControls
            currentPage={currentPage}
            totalPages={pagination.totalPages}
            goToPage={goToPage}
          />
      )}
    </div>
  );
};

export default PatientList;


