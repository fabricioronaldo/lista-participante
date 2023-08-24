import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventName: {
    marginTop: 48,
    color: '#FDFCFE',
    fontWeight: 'bold',
    fontSize: 24,
  },

  eventDate: {
    color: '#606060',
    fontSize: 16
  },

  input: {
    flex: 1,
    marginRight: 12,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    padding: 16,
    color: '#FDFCFE'
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 42
  },

  listEmptyText:{
    color: '#FDFCFE',
    textAlign: 'center'
  }
});
