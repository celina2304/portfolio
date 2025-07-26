import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollDirection } from '../redux/window/scrollSlice';
import { RootState } from '../redux/store';
import { setSectionTranslate } from '../redux/window/sectionScrollSlice';
// import { RootState } from '../redux/store';

const useScrollTracking = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state: RootState) => state.sectionScroll.sections);
  const previousScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // scrollDirection
      const direction = window.scrollY > previousScrollY.current ? 'down' : 'up';
      dispatch(setScrollDirection(direction));

      previousScrollY.current = window.scrollY;
      // section translate
      sections.forEach(section => {
        if (window.scrollY >= section.startPosition - section.sectionHeight && window.scrollY <= section.endPosition + section.sectionHeight) {
          const translateVal = (window.scrollY - section.startPosition) / 6;
          if (section.sectionTranslate !== translateVal) {
            dispatch(setSectionTranslate({ sectionId: section.sectionId, sectionTranslate: translateVal }));
          }
        }
      })
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, sections]);
};

export default useScrollTracking;
