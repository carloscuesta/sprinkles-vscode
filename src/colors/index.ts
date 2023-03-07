import dark from "./dark";
import light from "./light";

export type Variant = "dark" | "light";

type Colors = typeof dark | typeof light;

const getColors = (theme: Variant): Colors => {
  switch (theme) {
    case "dark":
      return dark;
    case "light":
      return light;
    default:
      throw Error(`Colors missing for variant: ${theme}`);
  }
};

export default getColors;
