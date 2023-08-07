import { writeFile, mkdir } from "fs/promises";

import theme from "./theme";

(async () => {
  const themesDirectory = "./themes";

  const writeTheme = async <Theme>(fileName: string, theme: Theme) => {
    try {
      console.log(`ℹ️  Writing theme: ${fileName}`);

      await writeFile(
        `${themesDirectory}/${fileName}.json`,
        JSON.stringify(theme, null, 2),
      );

      console.log(`✅ Created theme: ${fileName}\n`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`❌ Error theme: ${fileName}, reason: ${error.message}`);
      }
    }
  };

  try {
    await mkdir(themesDirectory, { recursive: true });

    await writeTheme("sprinkles-dark", theme("dark"));
    await writeTheme("sprinkles-light", theme("light"));
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }
})();
