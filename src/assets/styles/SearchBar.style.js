import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      backgroundColor: "#ffffff",
      flexDirection: "row",
      alignItems: "center",
      height: 55,
      borderRadius: 7,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 15
    },
    iconContainer: {
      height: "100%",
      width: 50,
      borderColor: "red",
      alignItems: "center",
      justifyContent: "center"
    },
    input: {
      flex: 1,
      height: "100%",
      paddingHorizontal: 8,
      fontSize: 16
    }
  })