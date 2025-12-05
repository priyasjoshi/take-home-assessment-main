import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

export const usePatientDetail = (patientId) => {
  const [patient, setPatient] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      setLoading(true);
      setError(null);

      try {
        const patientRes = await apiService.getPatient(patientId);
        setPatient(patientRes.patient || patientRes);

        const recordsRes = await apiService.getPatientRecords(patientId);
        setRecords(recordsRes.records || recordsRes);
      } catch (err) {
        console.error('Error loading patient detail:', err);
        setError(err.message || 'Failed to load patient information');
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchPatientData();
    }
  }, [patientId]);

  return { patient, records, loading, error };
};
