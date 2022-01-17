import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useAppTheme from '../../Themes/Context';
import {useStoreState} from 'easy-peasy';
import { ScrollView } from 'react-native-gesture-handler';
import ActionButton from '../../Components/ActionButton';
import FooterScreen from '../../Components/FooterScreen';
import useTranslation from '../../i18n';
import NumberFormat from 'react-number-format'
import {Container} from '../../Components';
import Routes from '../../Navigation/Routes';
import theme from '../../Themes/configs/default';
import DashboardItem from '../../Components/DashboardItem';

const Settings = ({routes, navigation}) => {
  const {theme} = useAppTheme();
  const { t } = useTranslation();
  const submitHandle = () => {

  }
  return (
      <LoadingActionContainer fixed>
        <Container
          style={{
            backgroundColor: theme.colors.primary,
            flex: 1,
          }}>
          <ScrollView>
            <View style={{paddingBottom: 100}}>
              <View
              style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
                <View style={[styles.card, styles.shadowProp]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{width: '50%', marginTop: 15}}>{t('Ownner passport')}</Text>
                    <TextInput style={styles.textfield} />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{width: '50%', marginTop: 15}}>{t('Title Deed/Oquood')}</Text>
                    <TextInput style={styles.textfield} />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{width: '50%', marginTop: 15}}>{t('Tenancy Contract')}</Text>
                    <TextInput style={styles.textfield} />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{width: '50%', marginTop: 15}}>{t('Tenant Passport')}</Text>
                    <TextInput style={styles.textfield} />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{width: '50%', marginTop: 15}}>{t('Tenant Visa')}</Text>
                    <TextInput style={styles.textfield} />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{width: '50%', marginTop: 15}}>{t('Tenant Emirates ID')}</Text>
                    <TextInput style={styles.textfield} />
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                    <Button
                      mode="contained"
                      style={{borderRadius: 30, marginLeft: 30, marginRight: 30, padding: 5}}
                      color={theme.colors.background}
                      onPress={submitHandle}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          textAlign: 'center',
                          color: theme.colors.primary
                        }}>
                        {t('submit')}
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </View>
            <FooterScreen />
          </ScrollView>
        </Container>
      </LoadingActionContainer>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 5, height: -5},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
  },
  card: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    marginVertical: 10,
  },
  textfield: {
    backgroundColor: 'white',
    borderColor: '#505252',
    borderWidth: 0.8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    borderRadius: 5,
    width: '50%'
  }
});

export default Settings;
