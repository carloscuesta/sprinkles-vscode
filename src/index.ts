import { writeFile, mkdir } from "fs/promises";

import theme from "./theme";

(async () => {
  const darkTheme = theme("Sprinkles Dark", "dark");

  const writeTheme = async <Theme>(fileName: string, theme: Theme) => {
    try {
      console.log(`ℹ️  Writing theme: ${fileName}`);

      await writeFile(
        `./themes/${fileName}.json`,
        JSON.stringify(theme, null, 2)
      );

      console.log(`✅ Created theme: ${fileName}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`❌ Error theme: ${fileName}, reason: ${error.message}`);
      }
    }
  };

  try {
    await mkdir("./themes", { recursive: true });

    await writeTheme("sprinkles-dark", darkTheme);
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }
})();
