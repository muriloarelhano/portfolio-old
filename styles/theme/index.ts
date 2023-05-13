import { extendTheme } from "@chakra-ui/react";
import { ComponentThemes } from "./components";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        bg: "#121214",
      },
    }),
  },
  components: {
    ...ComponentThemes,
  },
});
