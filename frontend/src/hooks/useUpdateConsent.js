import { useState } from 'react';
import { apiService } from '../services/apiService';

export const useUpdateConsent = (refresh) => {
  const [error, setError] = useState(null);

  const updateStatus = async (consentId, status) => {
    setError(null);

    try {
      // TODO: Call apiService.updateConsent to update the status
      await apiService.updateConsent(consentId, { status });
      // TODO: Refresh consents list
      await refresh();
    } catch (err) {
      setError(err.message || 'Failed to update consent');
      throw err;
    }
  };

  return { updateStatus, error };
};