import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile164428Navigator from '../features/UserProfile164428/navigator';
import Tutorial164427Navigator from '../features/Tutorial164427/navigator';
import NotificationList164399Navigator from '../features/NotificationList164399/navigator';
import Settings164398Navigator from '../features/Settings164398/navigator';
import Settings164390Navigator from '../features/Settings164390/navigator';
import UserProfile164388Navigator from '../features/UserProfile164388/navigator';
import BlankScreen0164366Navigator from '../features/BlankScreen0164366/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile164428: { screen: UserProfile164428Navigator },
Tutorial164427: { screen: Tutorial164427Navigator },
NotificationList164399: { screen: NotificationList164399Navigator },
Settings164398: { screen: Settings164398Navigator },
Settings164390: { screen: Settings164390Navigator },
UserProfile164388: { screen: UserProfile164388Navigator },
BlankScreen0164366: { screen: BlankScreen0164366Navigator },

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
