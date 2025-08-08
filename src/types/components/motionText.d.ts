export interface MotionTextProps {
  delay: number;
  text: string;
  type: "solid" | "outline";
}

export interface MainMotionTextProps {
  delay: number;
  text: string;
}

export interface ColorSwitchTextProps {
  cls?: string;
  variant?: "1" | "2";
  text?: string;
} 