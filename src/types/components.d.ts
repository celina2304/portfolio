// interfaces for components 

export interface UseScrollToNextSectionProps {
    scrollStart: number | undefined;
    scrollEnd: number |undefined;
  }

export interface Page {
    path: string;
    title: string;
    description: string;
    scroll?: string;
}

export interface FunctionalComponentProps {
    id: string;
}