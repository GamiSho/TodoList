import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
  type ThemeConfig,
} from "@chakra-ui/react";

const root = createRoot(document.getElementById("root") as Element);

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </StrictMode>
);
