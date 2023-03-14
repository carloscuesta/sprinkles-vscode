export default {
  canvas: {
    background: {
      default: "#161719",
      defaultHover: "#35383C4F",
      overlay: "#111213",
    },
    foreground: {
      default: "#A3A8AE",
      muted: "#A3A8AEB8",
      opacity: "#A3A8AE46",
      highlight: "#DED9D9",
    },
    invisible: "#FFFFFF00",
    border: {
      default: "#8C929A",
      inset: "#35383CE8",
      overlay: "#222327",
    },
    badge: {
      background: "#FF5252",
      foreground: "#FFFFFF",
    },
    input: {
      background: "#0F1011",
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
    activeLineBackground: "#17191A",
    background: "#1D1F21",
    foreground: "#FFFFFF",
    cursor: "#1DE9B6",
    error: "#FB8181",
    lineNumbers: "#FFFFFF20",
    ruler: "#25292C",
    warning: "#FACC73",
    tokens: {
      red: "#FF5252",
      pink: "#FF4081",
      green: "#D4E157",
      amber: "#FFCB6B",
      default: "#FFFFFF",
      teal: "#1DE9B6",
      cyan: "#00E5FF",
      blue: "#40C4FF",
      gray: "#C5C8C6",
      darkGray: "#4D5257",
      softGreen: "#C3E88D",
      softRed: "#FF5370",
      softViolet: "#C792EA",
    },
    gutter: {
      added: "#d4e157",
      deleted: "#FF5252",
      modified: "#FFCB6B",
    },
  },
  terminal: {
    background: "#161719",
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
