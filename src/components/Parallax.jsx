import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Parallax({ children, amount = 40, className = '', style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }} data-parallax>
      {children}
    </motion.div>
  );
}

export default Parallax;
