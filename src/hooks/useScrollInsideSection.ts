import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollPosition, setScrollY } from '../redux/window/scrollSlice';
import { RootState } from '../redux/store';


const useScrollTracking = (section:string) => {
    const dispatch = useDispatch();
    const scrollPosition = useSelector((state: RootState) => state.scroll.scrollPosition);
    const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isAnimating) return;
    
      let start = 0, end = 0;
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      if(section === "hero"){
        start=0;
        end = windowHeight*2;
      }

      if (currentScroll > start && currentScroll < end) {
        if (currentScroll > scrollPosition) {
          scrollToSection(end);
        } else {
          scrollToSection(start);
        }
      }

      // console.log("current scroll is ", currentScroll);
      dispatch(setScrollPosition(currentScroll))
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isAnimating, dispatch, section]);

  const scrollToSection = (position: number) => {
    setIsAnimating(true);
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Set a delay matching the smooth scrolling duration
  };

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
