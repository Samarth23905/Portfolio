import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import useInView from '@/hooks/useInView';

const useStaggerAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useStaggerAnimation;