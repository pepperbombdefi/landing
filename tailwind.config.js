module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'], // Aggiunta del font Manrope
      },
      scale: {
        250: '2.5',
      },
      zIndex: {
        '-10': '-10',
        '-5': '-5',
        '-1': '-1',
        1: 1,
        2: 2,
        5: 5,
        60: 60,
        75: 75,
        100: 100
      },
      keyframes: {
        'fade-in-slow': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-in-up-slow': {
          from: { opacity: 0, transform: 'translateY(25%);' },
          to: { opacity: 1, transform: 'translateY(0);' },
        },
        'fade-zoom-in': {
          from: { transform: 'scale(1.2)' },
          to: { transform: 'scale(1)' },
        },
        'fade-zoom-in-slow': {
          from: { transform: 'scale(1.05)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
        'line-height': {
          from: { height: '0' },
          to: { height: '100%' },
        },
        'line-width': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'height-full': {
          from: { height: '0' },
          to: { height: '100%' },
        },
        height: {
          from: { height: '0' },
          to: { height: '50%' },
        },
        width: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },

      animation: {
        'fade-in-slow': 'fade-in-slow 1.5s ease forwards',
        'fade-in-up-slow': 'fade-in-up-slow 1.5s ease forwards',
        'fade-zoom-in': 'fade-zoom-in 1.5s ease forwards',
        'fade-zoom-in-slow': 'fade-zoom-in-slow 1.5s ease forwards',
        'line-height': 'line-height 4s ease forwards',
        'line-width': 'line-width 4s ease forwards',
        'height-full': 'height 1s ease forwards',
        height: 'height 1s ease forwards',
        width: 'width 1s ease forwards',
      },
    },
  },
  // plugins: [],
};
