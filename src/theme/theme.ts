// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "60px", // Customize default border radius
      },
      variants: {
        //primary
        primary: {
          bg: "primary",
          color: "white",
          _hover: {
            bg: "primaryDark",
          },
        },
        accent: {
          bg: "accent",
          color: "white",
        },
      },
    },
  },
  fonts: {
    heading: `var(--font-poppins), sans-serif`,
    body: `var(--font-poppins), sans-serif`,
  },
  colors: {
    primary: "#2e3191",
    primaryDark: "#0e0f2b",
    accent: "#ddac00",
    backgroundOne: "#e4e5ff",
    backgroundTwo: "#c0c0dd",
  },
});

export default theme;
