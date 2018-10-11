import Typography from "typography";
import theme from "typography-theme-lincoln";

theme.baseFontSize = "22px";

console.log(theme.overrideStyles);

theme.overrideThemeStyles = () => ({
  a: {
    color: "currentColor",
    textDecoration: "none",
    textShadow: "none",
    backgroundImage: "none",
    boxShadow: `0 2px 0 currentColor`
  }
});

const typography = new Typography(theme);

export default typography;
