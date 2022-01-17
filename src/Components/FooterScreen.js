import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import useAppTheme from '../Themes/Context';
import useTranslation from '../i18n';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../Navigation/index';
import Routes from '../Navigation/Routes';
const FooterScreen = () => {
    const {theme} = useAppTheme();
    const {t} = useTranslation();

    const goMoveIn = () => {
        NavigationService.navigate(Routes.NOC_MOVE_IN_DASHBOARD_SCREEN);
    }

    const goMoveOut = () => {
        NavigationService.navigate(Routes.NOC_MOVE_OUT_DASHBOARD_SCREEN);
    }

    const goMaintenance = () => {
        NavigationService.navigate(Routes.NOC_MAINTENANCE_DASHBOARD_SCREEN);
    }

    const goReportIssues = () => {
        NavigationService.navigate(Routes.REPORT_ISSUES_SCREEN);
    }

    const goMessages = () => {
        NavigationService.navigate(Routes.MESSAGES_SCREEN);
    }

    const goSettings = () => {
        NavigationService.navigate(Routes.SETTINGS_SCREEN);
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
                    {t('NOC')}
                    </Text>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    {t('MOVE IN')}
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
                    {t('NOC')}
                    </Text>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    {t('MAINTENANCE')}
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
                    {t('MESSAGES')}
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
                    {t('NOC')}
                    </Text>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    {t('MOVE OUT')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={goReportIssues}
                style={{
                    borderRadius: 5, padding: 3, marginLeft: 2, marginRight: 2, width: 100, backgroundColor: theme.colors.background
                }}>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    {t('REPORT')}
                    </Text>
                    <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: theme.colors.primary
                    }}>
                    {t('ISSUES')}
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
                    {t('settings')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FooterScreen;