// DEPENDENCIES
import { motion } from "framer-motion";

// ANIMATION SETTINGS
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

// RENDER
export function MenuToggle({ toggle, isOpen }) {
  return (
    <btn onClick={toggle}>
      <svg width="40" height="40" viewBox="0 0 30 30">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsla(0, 0%, 100%, 0.85)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsla(0, 0%, 100%, 0.85)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsla(0, 0%, 100%, 0.85)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsla(0, 0%, 100%, 0.85)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsla(0, 0%, 100%, 0.85)" },
          }}
          transition={transition}
        />
      </svg>
    </btn>
  );
}