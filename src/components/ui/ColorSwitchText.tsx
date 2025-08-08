import { ColorSwitchTextProps } from "@/types/components/motionText";
import { motion } from "framer-motion";

const variants = {
    "1": "bg-primary-accent text-black inline",
    "2": "bg-primary-accent text-black inline",
}

const ColorSwitchText: React.FC<ColorSwitchTextProps> = (props) => {
    const { cls = "", variant = "1", text="" } = props;
    return (
        <motion.div
            initial={{
                color: "var(--color-primary-accent)",
                backgroundColor: "var(--color-background)",
                opacity: 0,
            }}
            whileInView={{
                color: "var(--color-background)",
                backgroundColor: "var(--color-primary-accent)",
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={`${cls} ${variants[variant]}`}
        >
            {text}
        </motion.div>
    )
}
export default ColorSwitchText;