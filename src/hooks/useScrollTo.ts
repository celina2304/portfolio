import { useCallback } from "react";

const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string, offset = 30) => {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  }, []);

  return scrollTo;
}

export default useScrollTo;