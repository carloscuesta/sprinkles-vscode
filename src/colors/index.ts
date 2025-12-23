import dark from "./dark";
import light from "./light";
import cream from "./cream";

export type Variant = "dark" | "light" | "cream";

type Colors = typeof dark | typeof light | typeof cream;

const getColors = (theme: Variant): Colors => {
  switch (theme) {
    case "dark":
      return dark;
    case "light":
      return light;
    case "cream":
      return cream;
    default:
      throw Error(`Colors missing for variant: ${theme}`);
  }
};

export default getColors;
