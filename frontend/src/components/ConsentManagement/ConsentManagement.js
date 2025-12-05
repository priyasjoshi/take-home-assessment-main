import { useState } from 'react';
import './ConsentManagement.css';
import { useWeb3 } from '../../hooks/useWeb3';
import { useConsents } from '../../hooks/useConsents';
import { useCreateConsent } from '../../hooks/useCreateConsent';
import { useUpdateConsent } from '../../hooks/useUpdateConsent';
import ConsentFilters from './ConsentFilters';
import ConsentCreateForm from './ConsentCreateForm';
import ConsentList from './ConsentList';

const ConsentManagement = ({ account }) => {
  const { signMessage } = useWeb3();
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);
  // TODO: Implement fetchConsents function
  const { consents, loading, error, fetchConsents } = useConsents(filterStatus);

  // TODO: Implement createConsent function
  // This should:
  // 1. Sign a message using signMessage from useWeb3 hook
  // 2. Call apiService.createConsent with the consent data and signature
  // 3. Refresh the consents list
  const { createConsent, error: createErr } = useCreateConsent(signMessage, account, fetchConsents);

  // TODO: Implement updateConsentStatus function
  // This should update a consent's status (e.g., from pending to active)
  const { updateStatus, error: updateErr } = useUpdateConsent(fetchConsents);

  const combinedError = error || createErr || updateErr;

  if (loading) {
    return (
      <div className="consent-management-container">
        <div className="loading">Loading consents...</div>
      </div>
    );
  }

  return (
    <div className="consent-management-container">
      <div className="consent-header">
        <h2>Consent Management</h2>
        <button
          className="create-btn"
          onClick={() => setShowCreateForm(!showCreateForm)}
          disabled={!account}
        >
          {showCreateForm ? 'Cancel' : 'Create New Consent'}
        </button>
      </div>

      {combinedError && <p className="error">Error: {error}</p>}

      {!account && (
        <div className="warning">
          Please connect your MetaMask wallet to manage consents
        </div>
      )}

      {showCreateForm && account && (
        <ConsentCreateForm onSubmit={createConsent} />
      )}

      <ConsentFilters filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

      {/* TODO: Display consents list */}
      {loading ? (
        <div className="loading">Loading consents...</div>
      ) : (
        <ConsentList consents={consents} onUpdateStatus={updateStatus} />
      )}
    </div>
  );
};

export default ConsentManagement;