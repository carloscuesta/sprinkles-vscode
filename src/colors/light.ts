export default {
  canvas: {
    background: {
      default: "#f6f8fa",
      defaultHover: "#eaeef2",
      overlay: "#ffffff",
    },
    foreground: {
      default: "#24292f",
      muted: "#57606A",
      opacity: "#57606A46",
      highlight: "#097ADA",
    },
    invisible: "#FFFFFF00",
    border: {
      default: "#727D8A",
      inset: "#e8eaec",
      overlay: "#f6f8fa",
    },
    badge: {
      background: "#FF5252",
      foreground: "#FFFFFF",
    },
    input: {
      background: "#FFFFFF",
    },
    inputOption: {
      default: "#42A5F5",
    },
    notifications: {
      error: "#FF443E",
      info: "#42A5F5",
      warning: "#FFC135",
    },
    button: {
      primary: {
        background: "#2B2E31",
        hover: "#35393C",
      },
    },
  },
  editor: {
    activeLineBackground: "#f6f8fa",
    background: "#FFFFFF",
    foreground: "#1B1F23",
    cursor: "#24292f",
    error: "#CF222E",
    lineNumbers: "#1B1F234D",
    ruler: "#EAEEF2",
    warning: "#9A6700",
    tokens: {
      red: "#DC3838",
      pink: "#DE2972",
      green: "#8c9c00",
      amber: "#a66c00",
      default: "#24292f",
      teal: "#637C74",
      cyan: "#009fb1",
      blue: "#107CC0",
      gray: "#69788C",
      darkGray: "#9ea8b4",
      softGreen: "#C3E88D",
      softRed: "#D73B5B",
      softViolet: "#9B59C9",
    },
    git: {
      added: "#1a7f37",
      conflicting: "#8250df",
      modified: "#FACC73",
    },
    gutter: {
      added: "#4ac26b",
      deleted: "#ff8182v",
      modified: "#eac54f",
    },
  },
  terminal: {
    background: "#f6f8fa",
    black: "#252525",
    blue: "#42A5F5",
    cyan: "#00ACC1",
    foreground: "#B0BDC4",
    green: "#C3D82C",
    magenta: "#D81B60",
    red: "#FF443E",
    white: "#F7F7F7",
    yellow: "#FFC135",
  },
} as const;
