import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Button", "Badge"],
  })
);
