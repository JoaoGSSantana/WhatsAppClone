import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#128c7e',
    marginTop: 12,
    marginBottom: 8,
    fontSize: 16,
    color: '#075e54',
    textAlign: 'justify',
    paddingLeft: 32,
  },
  title: {
    color: '#075E54',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
