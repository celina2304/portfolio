// interfaces for components 

export interface Page {
    path: string;
    title: string;
    description: string;
    scroll?: string;
}

export interface Link {
    name: string;
    path: string;
}

// button interface
export interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    variant?: 'primary' |  'light_primary'  | 'dark_primary' | "dark_secondary";
  }

// project card props
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

export interface chevronProps {
    cls?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
}

export interface CirclePathTextProps {
    text?: string;
    color?: string;
    cls?: string;
    direction?: string;
}

export interface ballProps {
    active: { row: number, col: number },
    setActive: function,
    colIndex: number, 
    rowIndex: number,
    x: MotionValue<number>,
    y: MotionValue<number>
}

export interface FunctionalComponentProps {
    id: string;
}