import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CartScreen,
  HomeScreen,
  NotificationScreen,
  OrderHistoryScreen,
  SearchScreen,
} from '../../screens';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {StackParamList} from '../../types/StackTypes';

const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: 'Notifications'}}
      />
    </Stack.Navigator>
  );
};
