export interface projectCardDetails {
    id: string;
    images: string[];
    heading: string;
    description: string;
    points: string[];
    skills: string[];
    link: string;
}

export interface projectCardProps {
    projectDetails: projectCardDetails;
    index?: number;
}