import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const useSectionTranslate = (sectionId: string) => {
    const sections = useSelector((state: RootState) => state.sectionScroll.sections);  
    
    const translateVal = sections.find(s => s.sectionId === sectionId)?.sectionTranslate;

    return translateVal;
}
export default useSectionTranslate;