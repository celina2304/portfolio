import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top
      });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
