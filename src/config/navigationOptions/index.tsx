import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { MenuTabs } from '../tabs';
import { colors } from '../../styles';
import CustomTabIcon from '../../components/customTabIcon';

type ScreenOptionsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
};

export const getScreenOptions = ({
  route,
}: ScreenOptionsProps): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarStyle: { backgroundColor: colors.white },
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    const tabInfo = MenuTabs.find(tab => tab.Name === route.name);
    const IconComponent = tabInfo?.Icon || (() => <></>);
    const size = tabInfo?.size || 24;

    return (
      <CustomTabIcon
        IconComponent={IconComponent}
        focused={focused}
        size={size}
      />
    );
  },
  tabBarActiveTintColor: colors.skyBlue,
  tabBarInactiveTintColor: colors.lightGray,
});