import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from '../../types/DrawerTypes';
import {StackNavigator} from '../StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator<DrawerParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="RootStack" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
