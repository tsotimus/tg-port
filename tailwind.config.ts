import { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#0ea5e9",
        destructive: "#ff4d4d",
        altDark: "#0F172A",
      },
      inset: {
        "4/5": "80%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme: any) => ({
        css: {
          color: theme("colors.slate.400"),
          "--tw-prose-lead": theme("colors.slate.400"),
          "h2, h3, h4, thead th": {
            color: theme("colors.slate.200"),
          },
          "h2 small, h3 small, h4 small": {
            color: theme("colors.slate.400"),
          },
          kbd: {
            background: theme("colors.slate.700"),
            borderColor: theme("colors.slate.600"),
            color: theme("colors.slate.200"),
          },
          code: {
            color: theme("colors.slate.200"),
          },
          hr: {
            borderColor: theme("colors.slate.200"),
            opacity: "0.05",
          },
          pre: {
            boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
          },
          "--tw-prose-bullets": theme("colors.slate.500"),
          a: {
            color: theme("colors.white"),
            borderBottomColor: theme("colors.sky.400"),
          },
          strong: {
            color: theme("colors.slate.200"),
          },
          thead: {
            color: theme("colors.slate.300"),
            borderBottomColor: "rgb(148 163 184 / 0.2)",
          },
          "tbody tr": {
            borderBottomColor: "rgb(148 163 184 / 0.1)",
          },
          blockQuote: {
            color: theme("colors.white"),
          },
        },
      }),
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
  ],
} satisfies Config;

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
