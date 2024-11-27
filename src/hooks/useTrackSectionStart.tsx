import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSectionDetails } from "../redux/window/sectionScrollSlice";
import { RootState } from "../redux/store";

const useTrackSectionDetails = (sectionId: string) => {
  const dispatch = useDispatch();
  const innerHeight = useSelector(
    (state: RootState) => state.dimensions.innerHeight
  );

  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (section) {
      const calculateStartPosition = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const scrollPosition = window.scrollY > 0 ? window.scrollY : 0;
        const sectionStartScrollValue = sectionTop + scrollPosition;

        dispatch(
          setSectionDetails({
            sectionId,
            startPosition: sectionStartScrollValue,
            endPosition: sectionStartScrollValue + section.offsetHeight,
            sectionHeight: section.offsetHeight,
          })
        );
      };

      calculateStartPosition();
    }
  }, [dispatch, innerHeight, sectionId]);
};

export default useTrackSectionDetails;
