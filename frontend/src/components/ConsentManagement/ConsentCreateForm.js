import { useState } from 'react';

const ConsentCreateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    patientId: '',
    purpose: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ patientId: '', purpose: '' });
  };

  return (
    <div className="create-consent-form">
      <h3>Create New Consent</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient ID</label>
          <input
            type="text"
            required
            value={formData.patientId}
            onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
            placeholder="e.g., patient-001"
          />
        </div>

        <div className="form-group">
          <label>Purpose</label>
          <select
            required
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
          >
            <option value="">Select purpose...</option>
            <option value="Research Study Participation">Research Study Participation</option>
            <option value="Data Sharing with Research Institution">Data Sharing with Research Institution</option>
            <option value="Third-Party Analytics Access">Third-Party Analytics Access</option>
            <option value="Insurance Provider Access">Insurance Provider Access</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Sign & Create Consent
        </button>
      </form>
    </div>
  );
};

export default ConsentCreateForm;