import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDimensions } from '../redux/window/dimensionsSlice';

const useWindowDimensions = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleResize = () => {
      dispatch(setDimensions({ innerHeight: window.innerHeight, innerWidth: window.innerWidth }));
      // console.log("new height: ",window.innerHeight, ", new width: ",window.innerWidth)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
};

export default useWindowDimensions;
