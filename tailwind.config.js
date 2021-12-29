module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: { 
   
    opacity: {
      "0": "0",
      "10": "0.1",
      "20": "0.2",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "100": "1",
    },
    extend: {
      colors: {
        "primary-blue" : '#1992d4',
      },
      spacing: {
        '72' : '18rem',
      },
      translate: {
        "3x": "300%",
      },
      cursor:{
        grab: "grab",
        pointer: "pointer",
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    display: [ 'responsive', 'group-hover'],
  },
  plugins: [],
}
