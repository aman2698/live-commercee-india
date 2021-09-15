module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      transparent: 'transparent',
      primary:  '#2f435b',
      subtitle:"#2f435b",
      secondary:"#f6f6f6"
      
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  variants: {
    extend: {
      inset: ["group-hover"],
      animation: ["motion-safe"]
    },
  },
  plugins: [],
}
