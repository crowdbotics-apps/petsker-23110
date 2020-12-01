import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial180817Navigator from '../features/Tutorial180817/navigator';
import NotificationList180789Navigator from '../features/NotificationList180789/navigator';
import Settings180788Navigator from '../features/Settings180788/navigator';
import Settings180780Navigator from '../features/Settings180780/navigator';
import UserProfile180778Navigator from '../features/UserProfile180778/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial180817: { screen: Tutorial180817Navigator },
NotificationList180789: { screen: NotificationList180789Navigator },
Settings180788: { screen: Settings180788Navigator },
Settings180780: { screen: Settings180780Navigator },
UserProfile180778: { screen: UserProfile180778Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
