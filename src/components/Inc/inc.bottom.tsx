import React from 'react';
import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/src/utils/hooks/useClientOnlyValue';
import { DARK_SLATE_800, GRAY_100 } from '@/src/types/constant';
import { Foundation, Octicons, EvilIcons, Ionicons, Fontisto , FontAwesome, MaterialIcons} from '@expo/vector-icons';

const iconComponents = {
  foundationIcon: Foundation,
  octiconsIcon: Octicons,
  evilIcons: EvilIcons,
  ionicons: Ionicons,
  fontisto: Fontisto,
  fontAwesomeIcon: FontAwesome,
  mauiIcon: MaterialIcons,
};
type IconKeyType = keyof typeof iconComponents;

const IconComponent = ({ name, component, style }: any) => {
  const MyComponent = iconComponents[component as IconKeyType];
  return <MyComponent name={name} style={style} />;
};

interface IIconProps {
  focused: boolean;
  focusedIcon: string;
  unfocusedIcon: string;
  focusedComponent: string;
  unfocusedComponent: string;
}

const isIconFocused = ({ focused, focusedIcon, unfocusedIcon, focusedComponent, unfocusedComponent }: IIconProps) => {
  const iconProps = {
    name: focused ? focusedIcon : unfocusedIcon,
    component: focused ? focusedComponent : unfocusedComponent,
    style: focused ? styles.focusedIconStyle : styles.unfocusedIconStyle,
  };
  return <IconComponent {...iconProps} />;
};

const BottomNavigation = () => {
  const showHeader = useClientOnlyValue(false, true);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerShown: showHeader,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            isIconFocused({
              focused,
              focusedIcon: 'home',
              unfocusedIcon: 'home',
              focusedComponent: 'foundationIcon',
              unfocusedComponent: 'octiconsIcon',
            }),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'QR Scan',
          tabBarIcon: ({ focused }) =>
            isIconFocused({
              focused,
              focusedIcon: 'qrcode',
              unfocusedIcon: 'qr-code',
              focusedComponent: 'fontAwesomeIcon',
              unfocusedComponent: 'mauiIcon',
            }),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ focused }) =>
            isIconFocused({
              focused,
              focusedIcon: 'settings',
              unfocusedIcon: 'gear',
              focusedComponent: 'mauiIcon',
              unfocusedComponent: 'octiconsIcon',
            }),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: DARK_SLATE_800,
  },
  focusedIconStyle: {
    fontSize: 24,
    color: GRAY_100,
  },
  unfocusedIconStyle: {
    fontSize: 21,
    color: GRAY_100,
  },
});

export default BottomNavigation;
