import { useSelector } from 'react-redux';
import './progress-indicator.css'

const ProgressIndicator = () => {
  const loading = useSelector((state) => state.loading);

  return loading && (<div className='progress-indicator-container'>Loading...</div>);
};

export default ProgressIndicator;
