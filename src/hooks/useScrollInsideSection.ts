import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollPosition } from '../redux/window/scrollSlice';
import { RootState } from '../redux/store';

interface useScrollToNextSectionProps {
  scrollStart: number | undefined;
  scrollEnd: number |undefined;
}

const useScrollToNextSection = ({scrollStart,scrollEnd}:useScrollToNextSectionProps) => {
    const dispatch = useDispatch();
    const scrollPosition = useSelector((state: RootState) => state.scroll.scrollPosition);
    const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if(scrollStart ==undefined || scrollEnd == undefined) return;
    const handleScroll = () => {
      if (isAnimating) return;
    
      let start = 0, end = 0;
      const currentScroll = window.scrollY;
      start = scrollStart;
      end=scrollEnd;

      if (currentScroll > start && currentScroll < end) {
        if (currentScroll > scrollPosition) {
          scrollToSection(end);
        } else {
          scrollToSection(start);
        }
      }
      dispatch(setScrollPosition(currentScroll))
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isAnimating, dispatch, scrollStart,scrollEnd]);

  const scrollToSection = (position: number) => {
    setIsAnimating(true);
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); 
  };
};

export default useScrollToNextSection;
