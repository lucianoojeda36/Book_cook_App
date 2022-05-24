import React from 'react';
import Dashboard from '../pages/dashboard/dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../pages/details/details';
import Categories from '../pages/categories/categories';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <Stack.Navigator 
       initialRouteName="inicio"   
       screenOptions={{
          headerShown:false,
          detachPreviousScreen: false,
          detachInactiveScreens: false,
          unmountOnBlur: true,
        }}>
        <Stack.Screen name="inicio" component={Dashboard} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="categories" component={Categories} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
