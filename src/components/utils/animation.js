import posed from 'react-pose';

export const AnimatedContainer = posed.div({
  visible: {
    x: '0',
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 50,
    transition: {
      duration: 1000,
      easing: 'ease-out',
    },
  },
  invisible: {
    x: '-50%',
    opacity: 0,
    transition: {
      duration: 300,
      easing: 'ease-out',
    },
  },
});

export const LeftAnimate = posed.div({
  visible: {
    x: '0',
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 1000,
    transition: {
      duration: 1000,
      easing: 'ease-out',
    },
  },
  invisible: {
    x: '-100%',
    opacity: 0,
    delay: 500,
    transition: {
      duration: 300,
      easing: 'ease-out',
    },
  },
});

export const RightAnimate = posed.div({
  visible: {
    x: '0',
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 1000,
    transition: {
      duration: 1000,
      easing: 'ease-out',
    },
  },
  invisible: {
    x: '100%',
    opacity: 0,
    delay: 500,
    transition: {
      duration: 300,
      easing: 'ease-out',
    },
  },
});
