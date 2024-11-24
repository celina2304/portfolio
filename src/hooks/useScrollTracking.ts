import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '../redux/window/scrollSlice';
import { RootState } from '../redux/store';

const useScrollTracking = () => {
  const dispatch = useDispatch();
  const scrollY = useSelector((state: RootState) => state.scroll.scrollY);

  useEffect(() => {
    // console.log("Current Scroll Y Position: ", scrollY);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollY(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);
};

export default useScrollTracking;
