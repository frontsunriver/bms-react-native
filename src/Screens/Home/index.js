/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, HeaderButton} from '../../Components';
import useAppTheme from '../../Themes/Context';
import {IconX, ICON_TYPE} from '../../Icons';
import {Image} from 'react-native';
import metrics from '../../Themes/Metrics';
import {useStoreState} from 'easy-peasy';
import Fonts from '../../Themes/Fonts';
import NavigationService from '../../Navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import FooterScreen from '../../Components/FooterScreen';
import ChargeBalanceList from '../../Components/ChargeBalanceList';

const MainScreen = ({routes, navigation}) => {
  const {theme} = useAppTheme();
  const [user, setUser] = useState({});
  // eslint-disable-next-line prettier/prettier
  useEffect( async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('USER_INFO')));
  }, []);
  return (
      <LoadingActionContainer fixed>
        <Container
          style={{
            backgroundColor: theme.colors.primary,
            flex: 1,
          }}>
          <ScrollView>
            <View style={{paddingBottom: 100}}>
              <ChargeBalanceList />
            </View>
          </ScrollView>
          <FooterScreen />
        </Container>
      </LoadingActionContainer>
  );
};

export default MainScreen;
