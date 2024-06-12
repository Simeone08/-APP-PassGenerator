import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection:'column',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#4D4D4D',
      borderColor: '#FFF',
      borderWidth: 1,
    },
    buttonContainer: {
      width: '80%',
      alignItems: 'center',
    },
});

export default styles;