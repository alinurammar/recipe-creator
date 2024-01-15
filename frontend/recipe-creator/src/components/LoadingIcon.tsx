import { RotatingLines } from 'react-loader-spinner';
import './LoadingIcon.css';

const LoadingIcon  = () => {
  return (
    <div className="loading">
    <RotatingLines
    visible={true}
    width="96"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    />
    </div>
  );
};

export default LoadingIcon;
