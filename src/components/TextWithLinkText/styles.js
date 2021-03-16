import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  register: {
    marginTop: Dimensions.get('window').height * 0.04,
    color: '#FFF',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
