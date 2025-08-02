import { motion, useViewportScroll, useTransform } from 'framer-motion';
import avatar from '../assets/avatar_dahiana_transparent.png';

export default function Avatar() {
  // Desplaza el avatar un poco mientras hacemos scroll (parallax ligero)
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '50%']);


  return (
    <motion.img
      src={avatar}
      alt="Dahiana walking"
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '180px',
        y,
        zIndex: 5,
        pointerEvents: 'none',
      }}
    />
  );
}
