import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    height: Dimensions.get('window').height * 0.15,
    marginTop: Dimensions.get('window').height * 0.11,
    marginBottom: Dimensions.get('window').height * 0.04,
    width: Dimensions.get('window').height * 0.15 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  whatsAppClone: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFF',
    marginTop: Dimensions.get('window').height * 0.08,
    fontSize: 16,
    paddingLeft: 32,
    paddingRight: 16,
    color: '#075e54',
    textAlign: 'justify',
  },
});

export default styles;
