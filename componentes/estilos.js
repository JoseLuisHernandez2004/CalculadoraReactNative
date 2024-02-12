import { StyleSheet } from "react-native";

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 50,
    marginBottom: 12,
    color: '#333333',
    borderWidth: 0,
    borderColor: '#CCCCCC',
    padding: 20,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCCC', 
    padding: 1,
    margin: 4,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2, // Para Android
  },
  buttonText: {
    fontSize: 25,
    color: '#333333', 
  },
});
