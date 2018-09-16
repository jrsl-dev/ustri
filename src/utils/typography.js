import Typography from "typography";
import theme from "typography-theme-lincoln";

theme.baseFontSize = "22px";

console.log(theme.overrideStyles);

theme.overrideThemeStyles = () => {
  const linkColor = "#1a1a1a";
  return {
    a: {
      color: linkColor,
      textDecoration: "none",
      textShadow: "none",
      backgroundImage: "none",
      boxShadow: `0 2px 0 ${linkColor}`
      //   textShadow:
      // ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
      //   backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      //   paddingBottom: "0.25em"
    }
  };
};

const typography = new Typography(theme);

export default typography;
