import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import useAppTheme from '../Themes/Context';
import useTranslation from '../i18n';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../Navigation/index';
import Routes from '../Navigation/Routes';
const AssociationFooterScreen = () => {
    const {theme} = useAppTheme();
    const {t} = useTranslation();

    const goMoveIn = () => {
        NavigationService.navigate(Routes.NOC_MOVE_IN_DASHBOARD_SCREEN);
    }

    const goMoveOut = () => {
        NavigationService.navigate(Routes.ASSOCIATION_ANNOUNCE_SCREEN);
    }

    const goMaintenance = () => {
        NavigationService.navigate(Routes.ASSOCIATION_SENDOUT_SCREEN);
    }

    const goReportIssues = () => {
        NavigationService.navigate(Routes.ASSOCIATION_SETTINGS_SCREEN);
    }

    const goMessages = () => {
        NavigationService.navigate(Routes.ASSOCIATION_REPORT_SCREEN);
    }

    const goSettings = () => {
        NavigationService.navigate(Routes.ASSOCIATION_SEARCH_SCREEN);
    }

    return (
        <View style={{
            width: '100%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', //Here is the trick
            bottom: 0, //Here is the trick
          }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity 
                onPress={goMoveIn}
                style={{
                    borderRadius: 5, padding: 3, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    VIEW
                    </Text>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    ANY REQUEST
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={goMaintenance}
                style={{
                    borderRadius: 5, padding: 3, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    SEND OUT
                    </Text>
                    <Text
                    style={{
                        fontSize: 11,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    CONTACT DETAIL
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={goMessages}
                style={{
                    borderRadius: 5, padding: 11, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    REPORTS
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10
            }}>
                 <TouchableOpacity 
                 onPress={goMoveOut}
                style={{
                    borderRadius: 5, padding: 3, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    ANNOUNCE
                    </Text>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    TO OWNERS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={goReportIssues}
                style={{
                    borderRadius: 5, padding: 11, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    {t('settings')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={goSettings}
                style={{
                    borderRadius: 5, padding: 11, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    SEARCH
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AssociationFooterScreen;