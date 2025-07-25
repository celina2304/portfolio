export interface SectionDetails {
    sectionId: string;
    startPosition: number;
    endPosition: number;
    sectionHeight: number;
}

export interface SectionScrollState {
    sections: SectionDetails[];
}