import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabStack from './BottomStack';
import Routes from '../Routes';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import NavigationStyles from '../../Styles/NavigationStyles';
import HeaderScreen from '../../Components/HeaderScreen';

import Home from '../../Screens/Home';
import ChargeDetail from '../../Screens/ChargeDetail';
import NocMoveIn from '../../Screens/Noc_move_in';
import NocMoveInDashboard from '../../Screens/Noc_move_in/dashboard';
import NocMoveOutDashboard from '../../Screens/Noc_move_out/dashboard';
import NocMaintenanceDashboard from '../../Screens/Noc_maintenance/dashboard';
import NocMoveOut from '../../Screens/Noc_move_out';
import NocMaintenance from '../../Screens/Noc_maintenance';
import ReportIssues from '../../Screens/Report_issue';
import Messages from '../../Screens/Messages';
import Settings from '../../Screens/Settings';
import AsyncStorage from '@react-native-community/async-storage';

const HomeStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        // options={{
        //   title: t('home'),
        //   headerStyle: [
        //     {backgroundColor: theme.colors.header},
        //   ],
        //   headerTitleStyle: [
        //     NavigationStyles.headerTitle,
        //     {color: theme.colors.headerTitle},
        //   ],
        // }}
        options={{
          header: () => (
          <HeaderScreen title1={t('dashboard')} title2={t('rafic')}/>
        ),
        }}
        name='home'
        component={Home}
      />
    </Stack.Navigator>
  );
};

const ChargeDetailScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen title1={t('dashboard')} title2={t('rafic')}/>
        ),
        }}
        name='charge_detail'
        component={ChargeDetail}
      />
    </Stack.Navigator>
  );
};


const Stack = createStackNavigator();

export default props => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  const [user, setUser] = useState({});
  useEffect( async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('USER_INFO')));
  }, []);
  return (
    <Stack.Navigator
    initialRouteName={Routes.HOME_SCREEN}>
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="home" title1={t('dashboard')} title2={user.first_name + " " + user.last_name}/>
        ),
        }}
        name={Routes.HOME_SCREEN}
        component={Home}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('dashboard_detail')}/>
        ),
        }}
        name={Routes.CHARGE_DETAIL_SCREEN}
        component={ChargeDetail}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('noc_move_in')}/>
        ),
        }}
        name={Routes.NOC_MOVE_IN_SCREEN}
        component={NocMoveIn}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('noc_move_in_dashboard')}/>
        ),
        }}
        name={Routes.NOC_MOVE_IN_DASHBOARD_SCREEN}
        component={NocMoveInDashboard}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('noc_move_out')}/>
        ),
        }}
        name={Routes.NOC_MOVE_OUT_SCREEN}
        component={NocMoveOut}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('noc_move_out_dashboard')}/>
        ),
        }}
        name={Routes.NOC_MOVE_OUT_DASHBOARD_SCREEN}
        component={NocMoveOutDashboard}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('noc_maintenance')}/>
        ),
        }}
        name={Routes.NOC_MAINTENANCE_SCREEN}
        component={NocMaintenance}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('noc_maintenance_dashboard')}/>
        ),
        }}
        name={Routes.NOC_MAINTENANCE_DASHBOARD_SCREEN}
        component={NocMaintenanceDashboard}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('report_issue')}/>
        ),
        }}
        name={Routes.REPORT_ISSUES_SCREEN}
        component={ReportIssues}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('btn_messages')}/>
        ),
        }}
        name={Routes.MESSAGES_SCREEN}
        component={Messages}
      />
      <Stack.Screen
        options={{
          header: () => (
          <HeaderScreen type="back" title1={t('settings')}/>
        ),
        }}
        name={Routes.SETTINGS_SCREEN}
        component={Settings}
      />
    </Stack.Navigator>
  );
};
