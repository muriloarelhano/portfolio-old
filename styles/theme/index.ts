import { extendTheme, GlobalStyle } from "@chakra-ui/react";
import { ComponentThemes } from "./components";

export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      ...GlobalStyle,
      "html, body": {
        bg: "#121214",
        color: "white",
      },
    }),
  },
  components: {
    ...ComponentThemes,
  },
});
