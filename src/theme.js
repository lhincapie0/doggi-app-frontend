import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  black: "black",
  white: "white",
  primary: "rgb(80, 200, 220)",
  primaryLighten30: "#A060DD",
  primaryDark: "#431973",

  secondary: "#F38F20",
  greyInputBorder: "#E4E4E4",
  greyFormLabel: "#C4C4C4",
  purpleButtonHover: "#D5CADF",
  greyDisabledIcon: "#a0a0a0",

  pink700: "rgb(194,24,91)",
  pink200: "rgb(255,64,129)",

  orange800: "rgb(239,108,0)",

  red500: "rgb(244,67,54)",
  redO2500: "rgb(244,67,54, .2)",
};

const themeOptions = {
  palette: {
    // text: {
    //   primary: colors.grey850,
    //   secondary: colors.grey600,
    // },
    primary: {
      main: colors.primary,
      white: colors.white,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.red500,
    },
  },
  typography: {
    // ...defaultFont,
    "&.MuiTypography-h6": {
      fontSize: "20px!important",
      // fontWeight: fontWeight.medium,
      letterSpacing: 0.4,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        colorPrimary: {
          backgroundColor: "red",
        },
      },
    },
    //   MuiInput: {
    //     input: {
    //       color: colors.grey850,
    //       fontSize: fontSize.large,
    //       '&.center-number-input': {
    //         '&::-webkit-outer-spin-button': {
    //           opacity: 1,
    //         },
    //         '&::-webkit-inner-spin-button': {
    //           opacity: 1,
    //         },
    //         textAlign: 'center',
    //       },
    //     },
    //     underline: {
    //       '&:before': {
    //         borderBottom: `1px solid ${colors.greyInputBorder} !important`,
    //       },
    //       '&.WithIcon': {
    //         '&:before': {
    //           marginLeft: '60px',
    //         },
    //         '&:after': {
    //           marginLeft: '60px',
    //         },
    //       },
    //       '&.Disabled': {
    //         '&:before': {
    //           borderBottom: `1px dotted ${colors.greyInputBorder} !important`,
    //         },
    //         '&:after': {
    //           borderBottom: `1px dotted ${colors.greyInputBorder} !important`,
    //         },
    //       },
    //     },
    //     root: {
    //       margin: 0,
    //     },
    //     inputMultiline: {
    //       lineHeight: 1.3875,
    //       overflowY: 'auto',
    //     },
    //   },
    //   MuiFormLabel: {
    //     root: {
    //       fontSize: fontSize.large,
    //       margin: 1,
    //       '&:not(.Mui-focused) &:not(.Mui.error)': {
    //         color: `${colors.greyFormLabel}`,
    //       },
    //       '&.Mui.error': {
    //         color: `${colors.red500}!important`,
    //       },
    //     },
    //   },
  },
};

const theme = createMuiTheme(themeOptions);
export default theme;
