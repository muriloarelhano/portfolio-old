import { extendTheme } from "@chakra-ui/react";
import { ComponentThemes } from "./components";

export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
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
