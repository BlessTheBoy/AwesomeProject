import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '@root/types';
import BottomTabNavigator from './bottomTab';
import AddressScreen from '@screens/AddressScreen';
import {NavigationContainer} from '@react-navigation/native';
import NewAddressScreen from '@screens/NewAddressScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Manage Address" component={AddressScreen} />
        <Stack.Screen
          name="Address"
          component={NewAddressScreen}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
