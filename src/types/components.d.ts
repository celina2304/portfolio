// interfaces for components 

export interface Page {
    path: string;
    title: string;
    description: string;
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
    variant?: 'primary' | 'secondary' | 'dark_primary' | "dark_secondary";
  }

// project car props
export interface projectCardProps {
    height?: string;
    width?: string;
    bg?: string;
}

export interface chevronProps {
    cls?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
}

export interface ballProps {
    active: { row: number, col: number },
    setActive: function,
    colIndex: number, 
    rowIndex: number,
    x: MotionValue<number>,
    y: MotionValue<number>
}