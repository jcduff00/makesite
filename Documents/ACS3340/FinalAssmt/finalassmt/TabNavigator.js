import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import BandTab from './BandTab';
import StatsTab from './StatsTab';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bands" component={BandTab} />
      <Tab.Screen name="Stats" component={StatsTab} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;