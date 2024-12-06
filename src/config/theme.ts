import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display_large: React.CSSProperties;
    display_medium: React.CSSProperties;
    display_small: React.CSSProperties;
    headline_large: React.CSSProperties;
    headline_medium: React.CSSProperties;
    headline_small: React.CSSProperties;
    title_large: React.CSSProperties;
    title_medium: React.CSSProperties;
    title_small: React.CSSProperties;
    body_large: React.CSSProperties;
    body_medium: React.CSSProperties;
    body_small: React.CSSProperties;
    label_large: React.CSSProperties;
    label_medium: React.CSSProperties;
    label_small: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display_large?: React.CSSProperties;
    display_medium?: React.CSSProperties;
    display_small?: React.CSSProperties;
    headline_large?: React.CSSProperties;
    headline_medium?: React.CSSProperties;
    headline_small?: React.CSSProperties;
    title_large?: React.CSSProperties;
    title_medium?: React.CSSProperties;
    title_small?: React.CSSProperties;
    body_large?: React.CSSProperties;
    body_medium?: React.CSSProperties;
    body_small?: React.CSSProperties;
    label_large?: React.CSSProperties;
    label_medium?: React.CSSProperties;
    label_small?: React.CSSProperties;
  }

  interface Palette {
    ap_icon?: {
      default: {
        secondary?: string;
      };
    };
    ap_background?: {
      default: {
        default?: string;
        secondary?: string;
      };
    };
    ap_text?: {
      default: {
        default?: string;
        secondary?: string;
      };
    };
  }

  interface PaletteOptions {
    ap_icon?: {
      default: {
        secondary?: string;
      };
    };
    ap_background?: {
      default: {
        default?: string;
        secondary?: string;
      };
    };
    ap_text?: {
      default: {
        default?: string;
        secondary?: string;
      };
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display_large: true;
    display_medium: true;
    display_small: true;
    headline_large: true;
    headline_medium: true;
    headline_small: true;
    title_large: true;
    title_medium: true;
    title_small: true;
    body_large: true;
    body_medium: true;
    body_small: true;
    label_large: true;
    label_medium: true;
    label_small: true;
  }
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      primary: {
        main: "#1976D2",
      },
      secondary: {
        main: "#BAC8DB",
      },
      error: {
        main: "#f44336",
      },
      warning: {
        main: "#f57c00",
      },
      ap_background: {
        default: {
          secondary: "#F5F5F5",
        },
      },
      ap_text: {
        default: {
          default: "#1E1E1E",
          secondary: "#555555",
        },
      },
      ap_icon: {
        default: {
          secondary: "#555555",
        },
      },
    },
    typography: {
      fontFamily: "Montserrat",
      display_large: {},
      display_medium: {},
      display_small: {
        fontFamily: "Righteous",
        fontSize: "36px",
      },
      headline_large: {
        fontFamily: "Righteous",
        fontSize: "32px",
      },
      headline_medium: {
        fontFamily: "Righteous",
        fontSize: "28px",
      },
      headline_small: {},
      title_large: {
        fontFamily: "Montserrat",
        fontSize: "22px",
        fontWeight: "regular",
      },
      title_medium: {
        fontFamily: "Montserrat",
        fontSize: "16px",
        letterSpacing: "0.15px",
        fontWeight: "bold",
      },
      title_small: {
        fontFamily: "Montserrat",
        fontSize: "14px",
        letterSpacing: "0.1px",
        fontWeight: "regular",
      },
      body_large: {},
      body_medium: {
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontWeight: "normal",
        letterSpacing: "0.25px",
      },
      body_small: {},
      label_large: {
        fontFamily: "Montserrat",
        fontWeight: "normal",
        fontSize: "14px",
        letterSpacing: "0.1px",
      },
      label_medium: {
        fontFamily: "Montserrat",
        fontSize: "12px",
        letterSpacing: "0.5px",
      },
      label_small: {
        fontFamily: "Montserrat",
        fontSize: "11px",
        letterSpacing: "0.5px",
      },
      //TODO: hay que ir quitando estas variantes poco a poco
      subtitle1: {
        fontFamily: "Righteous",
      },
      subtitle2: {
        fontFamily: "Righteous",
      },
      body1: {
        fontFamily: "Montserrat",
      },
      body2: {
        fontFamily: "Montserrat",
      },

      button: {
        fontFamily: "Montserrat",
      },
      caption: {
        fontFamily: "Montserrat",
      },
      overline: {
        fontFamily: "Montserrat",
      },
    },
  };
};

export default getDesignTokens;
