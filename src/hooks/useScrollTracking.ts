import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setScrollY, setScrollDirection } from '../redux/window/scrollSlice';
// import { RootState } from '../redux/store';

const useScrollTracking = () => {
  const dispatch = useDispatch();
  // const scrollY = useSelector((state: RootState) => state.scroll.scrollY);
  const previousScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      dispatch(setScrollY(currentScrollY));

      const direction = currentScrollY > previousScrollY.current ? 'down' : 'up';
      dispatch(setScrollDirection(direction));

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  // useEffect(() => {
  //   // console.log("Current Scroll Y Position: ", scrollY);
  // }, [scrollY]);
};

export default useScrollTracking;
