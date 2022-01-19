import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Container} from '../../Components';
import axios from 'axios';
import { BASE_URL } from '../../Config';
import AsyncStorage from '@react-native-community/async-storage';
import AssociationFooterScreen from '../../Components/AssociationFooterScreen';
import {showInfoToast, showErrorToast, showSuccessToast} from '../../Lib/Toast';
import { Searchbar } from 'react-native-paper';
import Toast from 'react-native-tiny-toast';
import NavigationService from '../../Navigation';
import Routes from '../../Navigation/Routes';


const A_Report = ({route, navigation}) => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect( async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('USER_INFO')));
  }, []);

  const submitHandle = async (e) => {
    Keyboard.dismiss();
    if(!formValidation().success){
      showErrorToast(formValidation().message);
      return;
    }
    
    var formData = new FormData();
    formData.append('unit_name', name);

    await axios.post(`${BASE_URL}unit/add`, formData,
    { headers: { 'Content-Type': 'multipart/form-data', 'X-Requested-With': 'XMLHttpRequest', }}).then(res => { 
      console.log(res.data);
      setName('');
      showSuccessToast('Your request is sent successfully. Please wait for the reply.');
    }).catch(err => {
      showErrorToast('Something went wrong! Please try again.');
    });
  }

  const formValidation = () => {
    var result = true;
    var message = "";
    var res = {};
    if(!name || name == ''){
      message = "Please insert the Unit name";
      result = false;
      res['success'] = result;
      res['message'] = message;
      return res;
    }

    res['success'] = result;
    res['message'] = message;
    return res;
  }

  const onChangeSearch = (t) => {
    setSearchQuery(t);
  }

  return (
      <LoadingActionContainer fixed>
        <Container
          style={{
            backgroundColor: theme.colors.primary,
            flex: 1,
          }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            inputStyle={theme.colors.background}
            style={{backgroundColor: '#e2e2e2', marginRight: 20, marginLeft: 20, marginTop: 10}}
            iconColor='#000'
            value={searchQuery}
          />
          <ScrollView>
            <View style={{paddingBottom: 100}}>
              <View style={{flexDirection: 'column', justifyContent: 'center', padding: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Text style={{width: '50%', marginTop: 15}}>{t('Unit Name')}</Text>
                  <TextInput style={styles.textfield} value={name} name="name" onChangeText={text => setName(text)}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15}}>
                  <Button
                    mode="contained"
                    style={{borderRadius: 5, padding: 5}}
                    color={theme.colors.background}
                    onPress={submitHandle}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: theme.colors.primary
                      }}>
                      ADD
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
            <Toast />
          </ScrollView>
          <AssociationFooterScreen />
        </Container>
      </LoadingActionContainer>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 40,
  },
  dropdown: {
      backgroundColor: 'white',
      borderColor: '#505252',
      borderWidth: 0.8,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10,
      width: '50%',
      borderRadius: 5
  },
  icon: {
      marginRight: 5,
      width: 18,
      height: 18,
  },
  item: {
      paddingVertical: 17,
      paddingHorizontal: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  textItem: {
      flex: 1,
      fontSize: 16,
  },
  shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      marginTop: -25
  },
  dateTouchable: {
    backgroundColor: 'white',
    borderColor: '#505252',
    borderWidth: 0.8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 10,
    borderRadius: 5,
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

export default A_Report;
