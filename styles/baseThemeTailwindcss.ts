/**
 * Cortex Design System: Layout
 * https://www.figma.com/file/JGUwgAVcmNelG2Bhjgh91g/%F0%9F%AA%90-Cortex-Design-System?node-id=706%3A18870
 */

const screens = {
  xs: "0px",
  // For 400% Zoom, the “small” layout size applies for viewports/breakpoints for screen width of 320px to 679px.
  sm: "320px",
  // For 200% Zoom, the “medium” layout size applies for viewports/breakpoints for screen width of 680px to 1023px.
  md: "680px",
  lg: "1024px",
  xl: "1600px",
};

/**
 * Cortex Design System: Colors
 * https://www.figma.com/file/JGUwgAVcmNelG2Bhjgh91g/%F0%9F%AA%90-Cortex-Design-System?node-id=705%3A18067
 */

const colors = {
  // Brand colors
  pr: {
    10: "#E9F7FB",
    20: "#DAF3F6",
    40: "#BFE6EB",
    60: "#ABD5D8",
    80: "#A0C5C2",
    100: "#96B5AD" /* previous primary.100 color */,
    120: "#7CA3A1" /* previous primary.120 color */,
    140: "#649295" /* previous primary.140 color */,
    base: "#407177" /* previous primary.base.0 color */,
    170: "#355F64" /* previous primary.170 color */,
    180: "#2C4E53" /* previous primary.180 color */,
  },
  beige: {
    20: "#FAFBF9",
    40: "#F6F7F3",
    60: "#F2F4ED",
    80: "#EEF0E7",
    100: "#EAEDE1",
    120: "#DDDFCA",
    140: "#C4C2AA",
    160: "#9D9880",
    180: "#706C5C",
  },
  khaki: {
    20: "#FCFBF8",
    40: "#F6F3EA",
    60: "#EEE8D5",
    80: "#E8E1C7",
    100: "#E3DABA",
    120: "#D3C491",
    140: "#C4B069",
    160: "#A38E44",
    180: "#877329",
  },
  olive: {
    20: "#EBF5CD",
    40: "#D9EBA0",
    60: "#C7E07D",
    80: "#BFD374",
    100: "#B7C378",
    120: "#A4B366",
    140: "#7F8F4A",
    160: "#606D37",
    180: "#424D25",
  },
  terracotta: {
    20: "#FFECDB",
    40: "#FFC898",
    60: "#FFB474",
    80: "#F1985A",
    100: "#E4844F",
    120: "#D16D37",
    140: "#C05920",
    160: "#9C4719",
    180: "#793714",
  },

  // Neutral colors
  n: {
    "01": "#FCFCFC" /* previous color neutral['light-20'] */,
    "04": "#F5F5F5",
    10: "#E5E5E5",
    20: "#CCCCCC",
    30: "#B3B3B3",
    40: "#999999",
    50: "#7F7F7F",
    60: "#666666",
    80: "#333333",
    85: "#252525",
    90: "#181818",
    100: "#000000" /* previous color black outside neutral colors */,
    white: "#FFFFFF",
  },

  // Neutral Alpha colors
  neutralAlpha: {
    n100Alpha40: "rgba(0, 0, 0, 0.4)",
    n100Alpha15: "rgba(0, 0, 0, 0.15)",
    whiteAlpha40: "rgba(255, 255, 255, 0.4)",
    whiteAlpha15: "rgba(255, 255, 255, 0.15)",
  },

  // Curriculum colors
  em1: {
    20: "#DBEECD",
    40: "#B9E29C",
    base: "#7EBB52",
    60: "#498A28",
    80: "#1A661A",
  },
  em2: {
    20: "#FCDECF",
    40: "#F78C64",
    base: "#FF5B35",
    60: "#E65427",
    80: "#D93D1A",
  },
  phD: {
    20: "#E7DBF0",
    40: "#B798CD",
    base: "#845AA2",
    60: "#724494",
    80: "#65328A",
  },
  witWisdom: {
    20: "#D1EBFA",
    40: "#8FCFF3",
    base: "#7CC7F1",
    60: "#64B8E9",
    80: "#46A6DE",
  },

  // Status colors
  status: {
    error: {
      20: "#EECFCF",
      100: "#C42A2A",
    },
    warning: {
      20: "#F7ECC9",
      100: "#E07000",
    },
    success: {
      20: "#D6F6E3",
      100: "#018939",
    },
  },

  // Auxiliar colors
  aux: {
    pBlue: {
      100: "#CAE4F3",
      200: "#9ED4FF",
    },
    pOrange: {
      100: "#FFD4A6",
      200: "#FF9A48",
    },
    pYellow: {
      100: "#FAEC8F",
      200: "#F9CD19",
    },
    pGreen: {
      100: "#BEF3B3",
      200: "#7DE071",
    },
    pPurple: {
      100: "#D6C8FF",
      200: "#C37EDA",
    },
  },

  // Highlight colors
  highlight: {
    yellow: "#FADE7D",
    pink: "#F6C5D3",
    green: "#DCE9A8",
    blue: "#C7E5EA",
  },
};

/**
 * Cortex Design System: Spacing
 * https://www.figma.com/file/JGUwgAVcmNelG2Bhjgh91g/%F0%9F%AA%90-Cortex-Design-System?node-id=705%3A18067
 *  By default the spacing scale is inherited by the:
    padding, margin, width, height, maxHeight, gap, inset, space, and translate core plugins.
 *  Note: rem units are based on rootFontSize = 16px
*/
const spacing = {
  zero: "0px",
  xxxSmall: "0.125rem", // 2px
  xxSmall: "0.25rem", // 4px
  xSmall: "0.5rem", // 8px
  small: "0.75rem", // 12px
  medium: "1rem", // 16px
  large: "1.5rem", // 24px
  xLarge: "2rem", // 32px
  xxLarge: "3rem", // 48px
  xxxLarge: "3.5rem", // 56px
  xxxxLarge: "5rem", // 80px
};

/**
 * Cortex Design System: Border Radius
 * https://www.figma.com/file/JGUwgAVcmNelG2Bhjgh91g/%F0%9F%AA%90-Cortex-Design-System?node-id=5795%3A79495
 */
const borderRadius = {
  none: "0",
  small: "0.125rem", // 2px
  medium: "0.25rem", // 4px
  large: "1rem", // 16px
  xLarge: "3.5rem", // 56px
  circle: "25rem", // 400px
};

/**
 * Cortex Design System: Typography
 * https://www.figma.com/file/JGUwgAVcmNelG2Bhjgh91g/%F0%9F%AA%90-Cortex-Design-System?node-id=705%3A18068
 */
const fontFamily = {
  primary: "Circular Std",
  studentExp: "Circular Std",
  teacherExp: "Circular Std",
};

const fontSize = {
  rootFontSize: "16px",
  extraSmall: "0.75rem", // 12px
  small: "0.875rem", // 14px
  medium: "1rem", // 16px
  large: "1.125rem", // 18px
  extraLarge: "1.375rem", // 22px
  extraExtraLarge: "1.625rem", // 26px
  huge: "2.25rem", // 36px
  extraHuge: "3.25rem", // 52px
  extraExtraHuge: "3.5rem", // 56px
};

const fontWeight = {
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900",
};

// Updated typography styles based on our Design System
const typography = {
  headings: {
    h1: "1rem", // 16px
    h2: "1.375rem", // 22px
    h3: "1.125rem", // 18px
    h4: "0.875rem", // 14px
  },
  titles: {
    huge: "3.5rem", // 56px
    page: "2.75rem", // 44px
    main: "2.25rem", // 36px
    subtitle: "1.625rem", // 26px
    minor: "0.75rem", // 12px
  },
  textStyles: {
    textBase: "1rem", // 16px
    textSmall: "0.875rem", // 14px
    textLink: "0.875rem", // 14px
  },
};

/**
 * Cortex Design System: Shadows
 * https://www.figma.com/file/JGUwgAVcmNelG2Bhjgh91g/%F0%9F%AA%90-Cortex-Design-System?node-id=12710%3A240319
 */
const boxShadow = {
  "elevation-inset":
    "inset 0px 0px 2px rgba(0, 0, 0, 0.06), inset 0px -2px 4px rgba(96, 96, 108, 0.1)", // Pending use.
  "elevation-1":
    "0px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 2px rgba(96, 96, 108, 0.04)", // Used on e.g on Floating Button
  "elevation-2":
    "0px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(96, 96, 108, 0.1)", // Used on e.g on Toolbox Open, Tooltip.
  "elevation-3":
    "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(96, 96, 108, 0.1)", // Used on e.g on Notification Toast.
  "elevation-4":
    "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 6px 8px rgba(96, 96, 108, 0.12)", // Used on e.g on Listbox, Menu List, Overflow Menu.
  "elevation-5":
    "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(96, 96, 108, 0.16)", // Used on e.g on Popover.
  "elevation-6":
    "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 10px 16px rgba(96, 96, 108, 0.24)", // Used on e.g on Modals.
  "elevation-0": "none",
};

const baseThemeTailwindcss = {
  screens,
  colors,
  spacing,
  borderRadius,
  fontFamily,
  fontSize,
  fontWeight,
  typography,
  boxShadow,
};

module.exports = {
  BaseThemeTailwindCSS: typeof baseThemeTailwindcss,
  baseThemeTailwindcss,
};
