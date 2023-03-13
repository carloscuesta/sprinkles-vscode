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
      white: "#FFFFFF",
      teal: "#1DE9B6",
      cyan: "#00E5FF",
      blue: "#40C4FF",
      gray: "#C5C8C6",
      darkGray: "#4D5257",
      softGreen: "#C3E88D",
      softRed: "#FF5370",
      softViolet: "#C792EA",
    },
    git: {
      added: "#DAE56D",
      conflicting: "#67F0FF",
      modified: "#FACC73",
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
