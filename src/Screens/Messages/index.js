import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useAppTheme from '../../Themes/Context';
import {useStoreState} from 'easy-peasy';
import { ScrollView } from 'react-native-gesture-handler';
import FooterScreen from '../../Components/FooterScreen';
import NumberFormat from 'react-number-format'
import {Container} from '../../Components';

const Messages = ({routes, navigation}) => {
  const {theme} = useAppTheme();

  return (
      <LoadingActionContainer fixed>
        <Container
          style={{
            backgroundColor: theme.colors.primary,
            flex: 1,
          }}>
          <ScrollView>
            <View style={{paddingBottom: 100, flex: 1, flexDirection:'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
              <View style={{padding: 20}}>
                <Text>No messages</Text>
              </View>
            </View>
          </ScrollView>
          <FooterScreen />
        </Container>
      </LoadingActionContainer>
  );
};

export default Messages;
