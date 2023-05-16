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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 800,
    paddingTop: 15,
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
      fontSize: 27,
      lineHeight: 22,
      paddingTop: 15,
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
      fontSize: 14,
      lineHeight: 14,
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
      fontSize: 14,
      lineHeight: 14,
      fontFamily: "Inter-Regular",
      textAlign: "center",
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
      fontSize: 27,
      lineHeight: 22,
      paddingTop: 15,
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
    tbLogin:{
    alignSelf:'center',
    fontSize:30,
    marginBottom:80,
    },
    btn:{
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      backgroundColor:'#d9d9d9',
      width:100,
      height:40,
      marginTop:20,
      borderRadius:10,
    },     
    introductionRegName: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: colors.background_white,
      fontSize: 14,
      lineHeight: 14,
      fontFamily: "Inter-Regular",
      textAlign: "center",
    },
    // Cấu trúc
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 900,
    paddingTop: 15,
    paddingBottom: 88,
    boxSizing: "border-box",
  },
  // Word
  txtword:{
    alignSelf:'center',
    fontSize:20,
    marginTop:40,
    marginBottom:40,
    marginLeft:10,
  },
    // Tiêu đề
    tbLogin:{
      alignSelf:'center',
      fontSize:30,
      marginBottom:40,
    },
    // Ô textbox
    textip:{
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: '#d9d9d9',
      marginBottom: 40,
      paddingBottom: 5,
      minWidth: 300,
    },
      // button xanh
    introductionRegButton: {
      width: "90%",
      height: 48,
      paddingLeft: 112,
      paddingRight: 112,
      paddingTop: 13,
      paddingBottom: 16,
      borderRadius: 25,
      boxSizing: "border-box",
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginBottom: 8,
},
// button trắng
    introductionLoginButton: {
      width: "90%",
      height: 48,
      paddingLeft: 112,
      paddingRight: 112,
      paddingTop: 13,
      paddingBottom: 16,
      borderRadius: 25,
      boxSizing: "border-box",
      backgroundColor: colors.light_grey,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginTop: 8,
},  

    introductionLoginName: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: colors.primary,
      fontSize: 14,
      lineHeight: 14,
      fontFamily: "Inter-Regular",
      textAlign: "center",
    },   

    //Logo
    logosContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    logo: {
      width: 50,
      height: 50,
      marginLeft: 30,
      marginRight: 10,
    },
  });