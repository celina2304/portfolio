// interfaces for components 

export interface UseScrollToNextSectionProps {
    scrollStart: number | undefined;
    scrollEnd: number | undefined;
}

export interface SectionObj{
    sectionName: string;
    sectionId: string;
}

export interface Skill {
    name: string;
    icon: string;
    category: string;
}

export interface Page {
    sectionName: string;
    sectionId: string;
}

export interface FunctionalComponentProps {
    id: string;
}