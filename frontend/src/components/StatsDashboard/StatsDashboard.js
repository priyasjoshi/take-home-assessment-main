import { useStats } from '../../hooks/useStats';
import './StatsDashboard.css';
import StatsGrid from './StatsGrid';
import ConsentPieChart from './ConsentPieChart';

const StatsDashboard = () => {
  const { stats, loading, error } = useStats();

  if (loading) {
    return (
      <div className="stats-dashboard-container">
        <div className="loading">Loading statistics...</div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="stats-dashboard-container">
        <div className="error">Error loading statistics: {error || 'No data available'}</div>
      </div>
    );
  }
  return (
    <div className="stats-dashboard-container">
      <h2>Platform Statistics</h2>

      {/* TODO: Display statistics in a nice grid layout */}
      {/* Show: totalPatients, totalRecords, totalConsents, activeConsents, pendingConsents, totalTransactions */}
      <StatsGrid stats={stats} />
      <ConsentPieChart stats={stats} />
    </div>
  );
};

export default StatsDashboard;