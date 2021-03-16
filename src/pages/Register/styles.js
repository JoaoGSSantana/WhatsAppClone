import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scrollview: {
    paddingTop: 16,
    backgroundColor: '#FFF',
    height: Dimensions.get('window').height,
  },
  background: {
    alignItems: 'center',
    paddingTop: 16,
    height: Dimensions.get('window').height,
  },
  title: {
    marginTop: 12,
    fontSize: 28,
    color: '#128C7E',
  },
  titleTwo: {
    fontSize: 32,
    alignSelf: 'center',
    color: '#075E54',
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    textAlign: 'center',
    padding: 12,
    color: 'grey',
  },
});

export default styles;
