import React from 'react';
import { View } from 'react-native';
import { colors } from '../../styles';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

interface CustomTabIconProps {
  IconComponent: React.FC<IconProps> | (() => React.JSX.Element);
  focused: boolean;
  size: number;
}

const CustomTabIcon: React.FC<CustomTabIconProps> = ({
  IconComponent,
  focused,
  size,
}) => (
  <>
    <IconComponent
      width={size}
      height={size}
      color={focused ? colors.skyBlue : colors.blueGray}
    />
    {focused && (
      <View
        style={{
          backgroundColor: colors.skyBlue,
          width: 4,
          height: 4,
          marginTop: 2,
          borderRadius: 2,
        }}
      />
    )}
  </>
);

export default CustomTabIcon;