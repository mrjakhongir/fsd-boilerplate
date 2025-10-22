import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { borders } from "./borders";
import { colors } from "./colors";
import { fontSizes } from "./font-sizes";
import { fonts } from "./fonts";
import { lineHeights } from "./line-heights";
import { shadows } from "./shadow";
import { sizes } from "./sizes";

const config = defineConfig({
  strictTokens: true,
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: colors,
      fonts: fonts,
      sizes: sizes,
      fontSizes: fontSizes,
      lineHeights: lineHeights,
      borders: borders,
      shadows: shadows,
    },

    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});

export default createSystem(defaultConfig, config);

// use this command to generate types after completing the theme config
// npx @chakra-ui/cli typegen ./src/shared/theme/index.ts
