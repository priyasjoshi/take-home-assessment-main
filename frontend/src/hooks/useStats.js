import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

export const useStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Call apiService.getStats()
      const response = await apiService.getStats();
      // TODO: Update stats state
      setStats(response);
    } catch (err) {
      setError(err.message || 'Failed to fetch statistics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const intervalId = setInterval(fetchStats, 30000); // refresh every 30s
    return () => clearInterval(intervalId);
  }, []);

  return { stats, loading, error };
};