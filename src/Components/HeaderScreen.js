import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import FontAwesome, { parseIconFromClassName, Icons } from 'react-native-fontawesome'
import useAppTheme from '../Themes/Context';
import useTranslation from '../i18n';
import NavigationService from '../Navigation';
import Routes from '../Navigation/Routes';

const HeaderScreen = (props) => {
    const {t} = useTranslation();
    const {theme} = useAppTheme();
    const {title1, title2, type} = props;
    const [height, setHeight] = useState(0);
    const [double, setDouble] = useState(false);
    const [iconType, setIconType] = useState('back');
    const drawIcon = parseIconFromClassName('fas fa-bars')
    const leftIcon = parseIconFromClassName('fas fa-chevron-left')
    useEffect(() => {
        console.log(props);
        if(title2) {
            setHeight(170);
            setDouble(true);
        }else {
            setHeight(130);
            setDouble(false);
        }
        if(type == 'home'){
          setIconType('home');
        }else {
          setIconType('back');
        }
    }, []);

    useEffect(() => {
      if(title2) {
          setHeight(170);
          setDouble(true);
      }else {
          setHeight(130);
          setDouble(false);
      }
    }, [title2])

    useEffect( () => {
      if(type == 'home'){
        setIconType('home');
      }else {
        setIconType('back');
      }
    }, [type] )
    const renderHeaderString = () => {
        if(double) {
          return (
            <View style={{flexDirection: "column", justifyContent: 'space-between', textAlign:'center', alignItems: 'center'}}>
                <Text
                  style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: theme.colors.defaultText,
                  }}>
                  {title1}
                </Text>
                <Text
                  style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginTop: 10,
                      color: theme.colors.defaultText,
                  }}>
                  {title2}
                </Text>
            </View>
          )
        } else {
          return (
            <View style={{flexDirection: "column", justifyContent: 'center', textAlign:'center', alignItems: 'center'}}>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: theme.colors.defaultText,
                    }}>
                    {title1}
                </Text>
            </View>
          )
        }
    }

    const showIconRender = () => {
      if (iconType == 'home') {
        return (
          <TouchableOpacity onPress={() => {
            NavigationService.toggleDrawer();
          }}>
            <FontAwesome icon={drawIcon} style={{color: theme.colors.primary, fontSize: 20}} />
          </TouchableOpacity>
        )
      }else {
        return (
          <TouchableOpacity onPress={() => {
            NavigationService.navigate(Routes.HOME_SCREEN)
          }}>
            <FontAwesome icon={leftIcon} style={{color: theme.colors.primary, fontSize: 20}} />
          </TouchableOpacity>
        )
      }
    }
    
    return (
        <View
            style={{
              backgroundColor: theme.colors.primary,
              height: height,
            }}>
            <View style={{
                backgroundColor: theme.colors.background,
                height: height,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
            }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 40,
                  paddingLeft: 20,
                  paddingRight: 20
                }}
              >
                {showIconRender()}
                <TouchableOpacity>
                  <Image
                    source={require('../../hero/ellipse.png')}
                    style={{
                      aspectRatio: 1,
                      resizeMode: 'contain',
                      width: 20,
                      height: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20
              }}>
                {renderHeaderString()}
              </View>
            </View>
        </View>
    )
}

export default HeaderScreen