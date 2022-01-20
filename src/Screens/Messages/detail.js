import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Keyboard, PermissionsAndroid } from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Container} from '../../Components';
import axios from 'axios';
import { BASE_URL, DOWNLOAD_URL } from '../../Config';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-tiny-toast';
import MessageItem from '../../Components/MessageItem';

const Detail = ({route, navigation}) => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  const [user, setUser] = useState({});
  const {data} = route.params;
  const [serverData, setServerData] = useState([]);
  useEffect( async () => {
    let isMounted = true; 
    setUser(JSON.parse(await AsyncStorage.getItem('USER_INFO')));
    await axios.post(`${BASE_URL}/messages/getList`, {notify_id: data.id}).then( res => {
      if (isMounted) {
        if(res.data.success) {
          console.log(res.data);
            setServerData(res.data.data);
          }
      }
    }).catch(err => {
        console.log(err);
    });
    return () => { isMounted = false };
  }, [])

  const renderItem = () => {
    if(serverData) {
        return (
            serverData.map(item => {
                return <MessageItem key={item.id} data={item}></MessageItem>
            })
        )
    }else {
        return (
            <></>
        )
    }
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
            <View style={{flexDirection: 'column', justifyContent: 'center', padding: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={{uri:(DOWNLOAD_URL + data.photofile)}} style={{width: 200, height: 200}}></Image>
                </View>
                {renderItem()}
            </View>
            </View>
            <Toast />
          </ScrollView>
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
    width: '100%'
  }

});

export default Detail;
