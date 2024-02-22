import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

import ChatRoom from '../pages/ChatRoom';
import ChatTag from '../pages/ChatTag';
import Header from './Header';

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatTagScreen"
        component={ChatTag}
        options={{
          header: () => <Header headerName="Chat" navBtn={false} />
        }}
      />
      <Stack.Screen 
        name="ChatRoomScreen"
        component={ChatRoom}
        options={{
          header: () => <Header headerName="Platypus Talk" profileImg="https://sdzwildlifeexplorers.org/sites/default/files/2019-11/platypus-bill.jpg" />
        }}
      />
    </Stack.Navigator>
  );
}