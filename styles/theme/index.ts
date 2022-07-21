import {
  extendTheme,
  GlobalStyle,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { ComponentThemes } from "./components";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  { config },
  {
    styles: {
      ...GlobalStyle,
      global: {
        svg: { display: "inline" },
      },
    },
    components: {
      ...ComponentThemes,
    },
  },
  withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Button", "Badge"],
  })
);
