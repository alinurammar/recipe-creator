import { RotatingLines } from 'react-loader-spinner';

const LoadingIcon  = () => {
  return (
    <RotatingLines
    visible={true}
    width="96"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    />
  );
};

export default LoadingIcon;
