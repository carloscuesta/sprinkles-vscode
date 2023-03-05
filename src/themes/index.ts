import dark from "./dark";

type Variant = "light" | "dark";

type Themes = typeof dark;

const getTheme = (theme: Variant): Themes => {
  switch (theme) {
    case "dark":
      return dark;
    default:
      throw Error(`Theme is missing for variant: ${theme}`);
  }
};

export default getTheme;
