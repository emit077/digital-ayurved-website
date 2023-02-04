// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import {createVuetify} from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "theme2",
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
    themes: {
      theme1: {
        colors: {
          surface: "#FFFFFF",
          primary: "#2A3E72",
          secondary: "#0DCCC2",
          heading: "#2A3E72",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",

          "theme-fill-1": "#FFFFFF",
          "theme-fill-2": "#0DCCC2",
          "theme-fill-3": "#0DCCC2",
          "theme-stroke-1": "#2A3E72",
          "theme-stroke-12": "#2A3E72",
          "theme-stroke-2": "#0DCCC2",
          "theme-stroke-3": "#0DCCC2",
          // "theme-stroke-3": "#3AA0B5",
        },
      },
      theme2: {
        colors: {
          surface: "#ffffff",
          primary: "#00fffa",
          secondary: "#03DAC6",
          heading:"#042070",
          error: "#B00020",
          info: "#00fffa",
          success: "#4CAF50",
          warning: "#FB8C00",

          "theme-fill-1": "#042070",
          "theme-fill-2": "#ffffff",
          "theme-fill-3": "#042070",
          "theme-stroke-1": "#FFF",
          "theme-stroke-12": "#042070",
          "theme-stroke-2": "#00fffa",
          // "theme-stroke-2": "#0DCCC2",
          // "theme-stroke-2": "#00B6FF",
          "theme-stroke-3": "#00B6FF",
          // "theme-stroke-3": "#FFFA81",

        },
      },
    },
  },
});
