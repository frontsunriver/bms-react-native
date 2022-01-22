import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Keyboard, PermissionsAndroid } from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Container} from '../../Components';
import axios from 'axios';
import { BASE_URL, DOWNLOAD_URL } from '../../Config';
import Toast from 'react-native-tiny-toast';
import { Button } from 'react-native-paper'
import { showErrorToast, showSuccessToast } from '../../Lib/Toast';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Detail = ({route, navigation}) => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  const {data} = route.params;

  const approvedHandle = (e) => {
    axios.post(`${BASE_URL}/move/update`, {id: data.id, status: 2}).then( res => {
        if(res.data.success) {
          showSuccessToast('This movement is approved');
          navigation.goBack();
        }else {
          showErrorToast(res.data.message);
        }
      }).catch( err => {
        showErrorToast('Server Error. Please try again.');
    });
  }

  const cancelHandle = (e) => {
    axios.post(`${BASE_URL}/move/update`, {id: data.id, status: 3}).then( res => {
        if(res.data.success) {
          showSuccessToast('This movement is rejected');
          navigation.goBack();
        }else {
          showErrorToast(res.data.message);
        }
      }).catch( err => {
        showErrorToast('Server Error. Please try again.');
    });
  }

  const renderData = () => {
    if(data.move_type == 1) {
        return (
            <View style={{flexDirection: 'column', marginTop: 5}}>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Request User: </Text>
                    <View style={{flexDirection: 'row', flex: 3}}>
                        <Text>{data.first_name} </Text>
                        <Text>{data.last_name}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Building Name :</Text>
                    <Text style={{flex: 3}}>{data.building_name}</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Tenant Name :</Text>
                    <Text style={{flex: 3}}>{data.tenants_name}</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Tenant Email :</Text>
                    <Text style={{flex: 3}}>{data.tenants_email}</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Tenant mobile :</Text>
                    <Text style={{flex: 3}}>{data.tenants_mobile}</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Tenant Email :</Text>
                    <Text style={{flex: 3}}>{data.tenants_email}</Text>
                </View>
            </View>
        )
    }else {
        return (
            <View style={{flexDirection: 'column', marginTop: 5}}>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Request User: </Text>
                    <View style={{flexDirection: 'row', flex: 3}}>
                        <Text>{data.first_name} </Text>
                        <Text>{data.first_name}</Text>
                    </View>
                    
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={{flex: 2}}>Building Name :</Text>
                    <Text style={{flex: 3}}>{data.building_name}</Text>
                </View>
            </View>
        )
    }
  }

  const renderTitle = () => {
    if (data.move_type == 1) { 
        return 'Move In' 
    } else if(data.move_type == 2) {
        return 'Move out'
    } else {
        return 'Maintenance Carried out'
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
                    <View style={{flexDirection: 'row', borderBottomColor: theme.colors.backgroundColor, borderBottomWidth: 0.8, paddingBottom: 5, justifyContent: 'space-between', alignItems: 'flex-start'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text>{ renderTitle() }</Text>
                        </View>
                        <View>
                            <Text>{data.move_date}</Text>
                        </View>
                    </View>
                    {renderData()}
                    <View style={{flexDirection: 'row', alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 20}}>
                        <View style={{flexDirection: 'row'}}>
                            <Button
                                mode="contained"
                                style={{borderRadius: 5, padding: 2, marginLeft: 5, marginRight: 5}}
                                color={theme.colors.background}
                                onPress={approvedHandle}
                            >
                                <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: 'center',
                                    color: theme.colors.primary
                                }}>
                                Approved
                                </Text>
                            </Button>

                            <Button
                                onPress={cancelHandle}
                                mode="contained"
                                style={{borderRadius: 5, padding: 2, backgroundColor: '#39b148'}}
                            >
                                <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: 'center',
                                    color: theme.colors.primary
                                }}>
                                Reject
                                </Text>
                            </Button>
                        </View>
                    </View>
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
