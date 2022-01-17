/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {Text, Keyboard, View} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {STATUS} from '../../Constants';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {
  Section,
  Container,
  PasswordInputX,
  InputX,
  ButtonX,
  TouchableX,
} from '../../Components';
import NavigationService from '../../Navigation/index';
import Routes from '../../Navigation/Routes/index';

import useAppTheme from '../../Themes/Context';
import useAuth from '../../Services/Auth';
import {showInfoToast} from '../../Lib/Toast';
import BottomPanel from '../../Components/Panel';
import useTranslation from '../../i18n';
import Fonts from '../../Themes/Fonts';

export default () => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(false);

  const onChange = ({key, value}) => {
    console.log(key, value);
    if(key == 'firstname') {
      setFirstName(value);
    }else if(key == 'lastname') {
      setLastName(value);
    }else if(key == 'email') {
      setEmail(value);
    }else if(key == 'password') {
      setPassword(value);
    }
  }

  const registerUser = () => {
    console.log(1);
    if(!firstname || !lastname || !email || !password) {
      return;
    }
    console.log(2);
    setStatus(true);
  }

  const goLogin = () => {
    NavigationService.navigate(Routes.LOGIN_SCREEN);
    // this.props.navigation.navigate('REGISTER_SCREEN');
  }

  const loading = status === STATUS.FETCHING;

  return (
    <Container>
      <LoadingActionContainer>
        <Section>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 70,
              color: theme.colors.defaultText,
              marginTop: 60,
              marginBottom: 20,
            }}>
            {t('welcome')}
          </Text>
        </Section>
        <Section>
          <InputX
            label="FIRST NAME"
            style={{backgroundColor: '#2695F0', borderBottom: '1px solid #fff', color:'#fff'}}
            autoCapitalize="none"
            returnKeyType={'next'}
            underlineColor={theme.colors.primary}
            onChangeText={text =>
              onChange({
                key: 'firstname',
                value: text,
              })
            }
            value={firstname}
          />
          <InputX
            label="LAST NAME"
            style={{backgroundColor: '#2695F0'}}
            underlineColor={theme.colors.primary}
            autoCapitalize="none"
            returnKeyType={'next'}
            onChangeText={text =>
              onChange({
                key: 'lastname',
                value: text,
              })
            }
            value={lastname}
          />
          <InputX
            label="EMAIL"
            // mode="outlined"
            style={{backgroundColor: '#2695F0'}}
            autoCapitalize="none"
            returnKeyType={'next'}
            underlineColor={theme.colors.primary}
            onChangeText={text =>
              onChange({
                key: 'email',
                value: text,
              })
            }
            value={email}
          />
          <PasswordInputX
            value={password}
            // mode="outlined"
            style={{backgroundColor: '#2695F0'}}
            label="PASSWORD"
            returnKeyType={'go'}
            underlineColor={theme.colors.primary}
            onChangeText={text =>
              onChange({
                key: 'password',
                value: text,
              })
            }
          />
        </Section>
        <Section>
          <ButtonX
            loading={loading}
            dark={true}
            style={{borderRadius: 30}}
            color={loading ? theme.colors.accent : theme.colors.primary}
            onPress={registerUser}
            label={t('register')}
          />
          <View style={{alignItems: 'center', marginTop: 10}}>
            <View style={{flexDirection: "row", textAlign:'center', alignContent: "center",}}>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: theme.colors.defaultText,
                }}>
                You have already account?
              </Text>
              <TouchableX onPress={goLogin}>
                <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  color: '#43c0ca',
                  marginLeft: 5,
                }}>{t('login')}</Text>
              </TouchableX>
            </View>
          </View>
          
        </Section>
      </LoadingActionContainer>
      <BottomPanel />
    </Container>
  );
};
