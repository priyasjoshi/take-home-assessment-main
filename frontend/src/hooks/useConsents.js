import { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';

export const useConsents = (filterStatus) => {
  const [consents, setConsents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConsents = async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Call apiService.getConsents with appropriate filters
      const filters = filterStatus !== 'all' ? filterStatus : null;
      const response = await apiService.getConsents(null, filters);
      // TODO: Update consents state
      setConsents(response.consents || []);
    } catch (err) {
      setError(err.message || 'Failed to load consents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsents();
  }, [filterStatus]);

  return { consents, loading, error, fetchConsents };
};
