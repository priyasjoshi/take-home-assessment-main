import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

export const useTransactions = (account) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Call apiService.getTransactions with account address if available
      const response = await apiService.getTransactions(account || null);
       // TODO: Update transactions state
      setTransactions(response.transactions || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch transactions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [account]);

  return { transactions, loading, error };
};