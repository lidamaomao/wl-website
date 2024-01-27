// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: {
    btn: "py-2 px-4 rounded-lg shadow-md b-2 b-[#717CFF] b-solid hover:bg-[#717CFF] hover:text-white",
    circle:
      "bg-[#717CFF] w-100 h-50 rounded-tl-100 rounded-br-50 absolute md:w-200 md:h-100",
    btnPrimary:
      "py-2 px-4 rounded-lg shadow-md hover:b-2 hover:b-[#717CFF] hover:b-solid hover:bg-white hover:text-black bg-[#717CFF] text-white",
  },
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
