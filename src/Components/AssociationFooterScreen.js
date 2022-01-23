import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Button } from 'react-native-paper';
import useAppTheme from '../Themes/Context';
import useTranslation from '../i18n';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../Navigation';
import Routes from '../Navigation/Routes';
import theme from '../Themes/configs/default';

const AssociationFooterScreen = () => {
    const {theme} = useAppTheme();
    const {t} = useTranslation();

    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-around',
            position: 'absolute', //Here is the trick
            bottom: 0, //Here is the trick
          }}>
            <View style={{flexDirection: 'column', flex: 1,}}>
                <View style={{flexDirection: 'row', flex:1, justifyContent: 'center', backgroundColor: theme.colors.background}}>
                    <TouchableOpacity style={styles.touchableActiveStyle} onPress={() => {
                        NavigationService.navigate(Routes.ASSOCIATION_REQUEST_SCREEN)
                    }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={styles.activeTextColor}>OPEN REQUEST</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStyle} onPress={() => {
                        NavigationService.navigate(Routes.ASSOCIATION_ANNOUNCE_SCREEN)
                    }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={styles.normalTextColor}>CLOSED REQUEST</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStyle} onPress={() => {
                        NavigationService.navigate(Routes.ASSOCIATION_SENDOUT_SCREEN)
                    }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={styles.normalTextColor}>REPORTS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', flex:1, justifyContent: 'center', backgroundColor: theme.colors.background}}>
                    <TouchableOpacity style={styles.touchableActiveStyle} onPress={() => {
                        NavigationService.navigate(Routes.NOC_MOVE_IN_DASHBOARD_SCREEN)
                    }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={styles.activeTextColor}>MESSAGES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStyle} onPress={() => {
                        NavigationService.navigate(Routes.NOC_MOVE_OUT_DASHBOARD_SCREEN)
                    }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={styles.normalTextColor}>ISSUE REPORTED</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStyle} onPress={() => {
                        NavigationService.navigate(Routes.NOC_MOVE_OUT_DASHBOARD_SCREEN)
                    }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={styles.normalTextColor}>SETTINGS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableStyle: {
        padding: 8,
        justifyContent: 'space-between', 
        alignContent: 'center', 
        alignItems: 'center', 
        width: (Dimensions.get('window').width / 3)
    },
    touchableActiveStyle: {
        padding: 8,
        justifyContent: 'space-between', 
        alignContent: 'center', 
        alignItems: 'center', 
        borderBottomColor: '#fff',
        borderBottomWidth: 0.9,
        width: (Dimensions.get('window').width / 3)
    },
    normalTextColor: {
        fontSize: 12, 
        color: '#b9bdbc'
    },
    activeTextColor: {
        fontSize: 12, 
        color: theme.colors.primary
    },
    
})

export default AssociationFooterScreen;