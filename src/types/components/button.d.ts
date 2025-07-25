export interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    variant?: 'primary' |  'light_primary'  | 'dark_primary' | "dark_secondary";
  }