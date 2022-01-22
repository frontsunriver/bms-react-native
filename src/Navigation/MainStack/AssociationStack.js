import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabStack from './BottomStack';
import Routes from '../Routes';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import NavigationStyles from '../../Styles/NavigationStyles';
import HeaderScreen from '../../Components/HeaderScreen';

import AssociationAnnounce from '../../Screens/Association_announce/dashboard';
import AssociationAnnounceDetail from '../../Screens/Association_announce/Detail';
import AssociationAnnounceSendOffer from '../../Screens/Association_announce/SendAnnounce';
import AssociationRequest from '../../Screens/Association_home/dashboard';
import AssociationRequestDetail from '../../Screens/Association_home/Detail';
import AssociationSendOut from '../../Screens/Association_sendout/dashboard';
import AssociationSendOutDetail from '../../Screens/Association_sendout/SendoutContact';
import AssociationSettings from '../../Screens/Association_settings';
import GetAllBuildings from '../../Screens/Association_settings/GetAllBuildings';
import GetAllUnits from '../../Screens/Association_settings/GetAllUnits';
import AddBuilding from '../../Screens/Association_settings/AddBuilding';
import AddUnit from '../../Screens/Association_settings/AddUnit';
import OwnerDetail from '../../Screens/Association_settings/OwnerDetail';
import OnwerBuildingUnit from '../../Screens/Association_settings/UserOwnerBuilding';
import AddBuildingAndUnit from '../../Screens/Association_settings/AddUnitAndBuilding';
import ManageOwners from '../../Screens/Association_settings/ManageOwners';
import Report from '../../Screens/Association_Report';
import Search from '../../Screens/Association_Search';
import AsyncStorage from '@react-native-community/async-storage';

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
    initialRouteName={Routes.ASSOCIATION_REQUEST_SCREEN}>
      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="home" title1={t('view_request')} title2={user.first_name + " " + user.last_name}/>)}}
        name={Routes.ASSOCIATION_REQUEST_SCREEN}
        component={AssociationRequest}
      />

      <Stack.Screen
        options={{ header: () => (<HeaderScreen association="true" type="back" title1={t('view_any_request_detail')}/>)}}
        name={Routes.ASSOCIATION_REQUEST_DETAIL}
        component={AssociationRequestDetail}
      />
      
      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="SEND ANNOUNCE TO OWNERS"/>)}}
        name={Routes.ASSOCIATION_ANNOUNCE_SCREEN}
        component={AssociationAnnounce}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="BUILDING GROUP USERS"/>)}}
        name={Routes.ASSOCIATION_ANNOUNCE_DETAIL_SCREEN}
        component={AssociationAnnounceDetail}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="SEND OFFER"/>)}}
        name={Routes.ASSOCIATION_ANNOUNCE_SEND_OFFER}
        component={AssociationAnnounceSendOffer}
      />

      <Stack.Screen
        options={{ header: () => (<HeaderScreen association="true" type="back" title1="SEND OUT UPDATE CONTACT DETAIL"/>)}}
        name={Routes.ASSOCIATION_SENDOUT_SCREEN}
        component={AssociationSendOut}
      />

      <Stack.Screen
        options={{ header: () => (<HeaderScreen association="true" type="back" title1={t('SEND OUT MESSAGES')}/>)}}
        name={Routes.ASSOCIATION_SENDOUT_DETAIL_SCREEN}
        component={AssociationSendOutDetail}
      />

      <Stack.Screen
        options={{header: () => ( <HeaderScreen association="true" type="back" title1={t('settings')}/> )}}
        name={Routes.ASSOCIATION_SETTINGS_SCREEN}
        component={AssociationSettings}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="ALL BUILDINGS"/> )}}
        name={Routes.ASSOCIATION_GET_ALL_BUILDINGS}
        component={GetAllBuildings}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="ALL UNITS"/> )}}
        name={Routes.ASSOCIATION_GET_UNIT_LIST}
        component={GetAllUnits}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="ADD BUILDING"/> )}}
        name={Routes.ASSOCIATION_ADD_BUILDINGS}
        component={AddBuilding}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="ADD UNIT"/> )}}
        name={Routes.ASSOCIATION_ADD_UNITS}
        component={AddUnit}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="MANAGE OWNERS"/> )}}
        name={Routes.ASSOCIATION_MANAGE_OWNERS}
        component={ManageOwners}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="OWNER DETAIL"/> )}}
        name={Routes.ASSOCIATION_OWNER_DETAIL}
        component={OwnerDetail}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="BUILDINGS AND UNITS"/> )}}
        name={Routes.ASSOCIATION_OWNER_BUILDINGS_UNITS}
        component={OnwerBuildingUnit}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1="ADD BUILDINGS AND UNITS"/> )}}
        name={Routes.ASSOCIATION_ADD_BUILDINGS_UNITS}
        component={AddBuildingAndUnit}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen association="true" type="back" title1='REPORT'/> )}}
        name={Routes.ASSOCIATION_REPORT_SCREEN}
        component={Report}
      />

      <Stack.Screen
        options={{ header: () => ( <HeaderScreen  association="true" type="back" title1="SEARCH"/> )}}
        name={Routes.ASSOCIATION_SEARCH_SCREEN}
        component={Search}
      />

    </Stack.Navigator>
  );
};
