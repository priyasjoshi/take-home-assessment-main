import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import {useDebounce} from './useDebounce';

/**
 * Custom hook to fetch and manage a list of patients.
 * @param {string} searchTerm - The search query for patients
 * @param {number} initialPage - The initial page number (default: 1)
 * @param {number} pageSize - Number of patients per page (default: 10)
 */
const usePatientList = (searchTerm = '', initialPage = 1, pageSize = 10) => {
  const [patients, setPatients] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounced search term
  const debouncedSearch = useDebounce(searchTerm, 400);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiService.getPatients(currentPage, pageSize, debouncedSearch);
        setPatients(response.patients || []);
        setPagination({ totalPages: response.pagination?.totalPages || 1 });
      } catch (err) {
        setError(err.message || 'Failed to fetch patients');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [debouncedSearch, currentPage, pageSize]);

  const goToPage = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    patients,
    pagination,
    loading,
    error,
    currentPage,
    goToPage,
    setCurrentPage,
  };
};

export default usePatientList;
