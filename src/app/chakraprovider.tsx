"use client";
import "@fontsource/inter";
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme/Theme";
import Page from "./Page";

function ChakraWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}

export default ChakraWrapper;
