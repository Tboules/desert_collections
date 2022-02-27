import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: "24px",
        backgroundColor: "blue.200",
      },
    },
  },
});

export default theme;
