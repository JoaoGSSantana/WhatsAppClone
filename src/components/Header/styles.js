import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
    height: Dimensions.get('window').height * 0.08,
  },
  touchable: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 64,
    height: Dimensions.get('screen').height * 0.05,
    alignItems: 'center',
    backgroundColor: '#FFFF',
    borderColor: '#FFFF',
    borderWidth: 2,
    borderRadius: 500,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#FFFF',
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width * 0.3,
  },
});

export default styles;
