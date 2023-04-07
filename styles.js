import { StyleSheet } from "react-native";
import colors from "./assets/colors/colors";
import useFonts from "./useFonts";

const LoadFonts = async () => {
    await useFonts();
  }

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 360,
      height: 800,
      paddingLeft: 10,
      paddingRight: 13,
      paddingTop: 13,
      paddingBottom: 88,
      boxSizing: "border-box",
    },

    background1: {
      backgroundColor: colors.background_white,
    },

    background2: {
      backgroundColor: colors.background_grey,
    },

    introductionContainerTop: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      boxSizing: "border-box",
    },

    companyName: {
      width: 170,
      height: 38,
    },

    introductionContainerBottom: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      boxSizing: "border-box",
    },

    vector1: {
      width: "100%",
      height: 235,
    },

    heading2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: colors.black,
      fontSize: "22px",
      lineHeight: "22px",
      fontFamily: 'Inter-Medium',
      textAlign: "center",
    },

    introductionShiftMenuIcon: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      boxSizing: "border-box",
    },

    Ellipse2: {
      width: 10,
      height: "100%",
      borderRadius: 5,
      backgroundColor: colors.light_grey,
    },

    Ellipse1: {
      width: 10,
      height: "100%",
      borderRadius: 5,
      backgroundColor: colors.primary,
    },

    Ellipse3: {
      width: 10,
      height: "100%",
      borderRadius: 5,
      backgroundColor: colors.light_grey,
    },

    introductionRegButton: {
      width: "100%",
      height: 43,
      paddingLeft: 92,
      paddingRight: 92,
      paddingTop: 13,
      paddingBottom: 16,
      borderRadius: 25,
      boxSizing: "border-box",
      backgroundColor: colors.primary,
    },

    introductionRegName: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: colors.background_white,
      fontSize: "14px",
      lineHeight: "14px",
      fontFamily: "Inter-Regular",
      textAlign: "center",
    },

    introductionLoginButton: {
      width: "100%",
      height: 43,
      paddingLeft: 112,
      paddingRight: 112,
      paddingTop: 13,
      paddingBottom: 16,
      borderRadius: 25,
      boxSizing: "border-box",
      backgroundColor: colors.light_grey,
    },

    introductionLoginName: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: colors.primary,
      fontSize: "14px",
      lineHeight: "14px",
      fontFamily: "Inter-Regular",
      textAlign: "center",
    },
  });

export default styles;