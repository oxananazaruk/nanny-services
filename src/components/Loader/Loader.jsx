import { BallTriangle } from 'react-loader-spinner';
import { Preloader } from './Loader.styled';

export const Loader = () => {
  return (
    <Preloader>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#103931"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Preloader>
  );
};
