import { extendTheme, GlobalStyle } from "@chakra-ui/react";
import { ComponentThemes } from "./components";

export const theme = extendTheme({
  styles: {
    ...GlobalStyle,
    global: {
      svg: { display: "inline" },
      body: {
        bg: "111113",
      },
    },
  },
  components: {
    ...ComponentThemes,
  },
});
