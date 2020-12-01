import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList180860Navigator from '../features/NotificationList180860/navigator';
import Settings180859Navigator from '../features/Settings180859/navigator';
import Settings180851Navigator from '../features/Settings180851/navigator';
import UserProfile180849Navigator from '../features/UserProfile180849/navigator';
import UserProfile180818Navigator from '../features/UserProfile180818/navigator';
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
NotificationList180860: { screen: NotificationList180860Navigator },
Settings180859: { screen: Settings180859Navigator },
Settings180851: { screen: Settings180851Navigator },
UserProfile180849: { screen: UserProfile180849Navigator },
UserProfile180818: { screen: UserProfile180818Navigator },
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
