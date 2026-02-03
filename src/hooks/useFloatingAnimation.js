const useFloatingAnimation = (duration = 3, yOffset = 10) => {
  return {
    animate: {
      y: [0, -yOffset, 0],
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse"
    }
  };
};

export default useFloatingAnimation;