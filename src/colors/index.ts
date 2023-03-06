import dark from "./dark";

type Variant = "dark";

type Colors = typeof dark;

const getColors = (theme: Variant): Colors => {
  switch (theme) {
    case "dark":
      return dark;
    default:
      throw Error(`Colors missing for variant: ${theme}`);
  }
};

export default getColors;
