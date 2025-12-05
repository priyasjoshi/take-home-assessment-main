import { useState } from 'react';
import { apiService } from '../services/apiService';

export const useCreateConsent = (signMessage, account, refresh) => {
  const [error, setError] = useState(null);

  const createConsent = async (formData) => {
    setError(null);

    if (!account) {
      throw new Error('Wallet not connected');
    }

    try {
      // TODO: Implement consent creation with signature
      // 1. Create a message to sign (e.g., "I consent to: {purpose} for patient: {patientId}")
      const message = `Consent request:\nPatient: ${formData.patientId}\nPurpose: ${formData.purpose}\nWallet: ${account}`;
      // 2. Sign the message using signMessage
      const signature = await signMessage(message);
      // 3. Call apiService.createConsent with patientId, purpose, account, and signature
      await apiService.createConsent({
        patientId: formData.patientId,
        purpose: formData.purpose,
        walletAddress: account,
        signature,
      });
      // 4. Refresh consents and reset form
      refresh();
    } catch (err) {
      setError(err.message || 'Failed to create consent');
      throw err;
    }
  };

  return { createConsent, error };
};
