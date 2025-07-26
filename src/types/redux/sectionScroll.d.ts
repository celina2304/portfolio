export interface SectionDetails {
    sectionId: string;
    startPosition: number;
    endPosition: number;
    sectionHeight: number;
    sectionTranslate: number;
}

export interface SectionTranslateDetails {
    sectionId: string;
    sectionTranslate: number;
}

export interface SectionScrollState {
    sections: SectionDetails[];
}