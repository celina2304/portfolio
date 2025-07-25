import { Page } from "../components";
import { MotionProps } from "framer-motion";

export interface PathProps extends MotionProps {
    d?: string; // Optional `d` attribute for the path
    stroke?: string;
}

export interface MobileNavProps {
    pages: Page[];
}