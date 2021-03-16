import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/pages/Login';
import Register from '~/pages/Register';

const initialScreens = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
};

const InitialRoute = createStackNavigator(initialScreens, {
  headerMode: 'none',
});

const Routes = createAppContainer(InitialRoute);

export default Routes;
