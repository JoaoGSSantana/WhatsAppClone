import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.04,
    height: 50,
    borderRadius: 22,
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.8,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
