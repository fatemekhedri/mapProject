

// Material Dashboard 2 React Base Styles
import typography from "../../base/typography";
import borders from "../../base/borders";

// Material Dashboard 2 React Helper Functions
import pxToRem from "../../functions/pxToRem";

const { fontWeightMedium, size } = typography;
const { borderRadius } = borders;

const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.sm,
  fontWeight: fontWeightMedium,
  borderRadius: borderRadius.md,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.3,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;