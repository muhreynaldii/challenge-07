module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1168px",
        },
      },
      colors: {
        "dark-blue-01": "#CFD4ED",
        "dark-blue-02": "#AEB7E1",
        "dark-blue-04": "#0D28A6",
        "lime-green-04": "#5CB85F",
      },
    },
  },
  plugins: [],
};
