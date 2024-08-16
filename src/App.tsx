import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './pages/Welcome.js';
import MemberSign from './pages/MemberSign.js';
import MemberResult from './pages/MemberResult.js';

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false, //tepede sayfa adı gözükmesin optionu ayarlandı.
         }}>
        <Stack.Screen name="Welcome Screen" component={Welcome} />

        <Stack.Screen name="MemberSignScreen" component={MemberSign} />

        <Stack.Screen name="MemberResultScreen" component={MemberResult} />

        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
