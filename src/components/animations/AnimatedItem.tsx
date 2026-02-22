import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const AnimatedItem = ({ children, className }: AnimatedItemProps) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
