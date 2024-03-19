import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/utils/hooks/useColorScheme';
import { useClientOnlyValue } from '@/src/utils/hooks/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StickyComponent />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black'
          },
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} style={styles.icon} />,
          }}
        />
        <Tabs.Screen
          name='scan'
          options={{
            title: 'QR Scan',
            tabBarIcon: ({ color }) => <FontAwesome name='qrcode' size={28} color={color} style={styles.icon} />
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: 'Setting',
            tabBarIcon: ({ color }) => <FontAwesome name="gear"  size={28} color={color} style={styles.icon} />,
          }}
        />
      </Tabs>
    </>
  );
}

const StickyComponent = () => {
  return (
    <View className='p-2'
      style={{ position: 'absolute', bottom: 80, left: 0, right: 0, zIndex: 1}}>
      <View className='bg-slate-700 p-2 rounded-md'>
        <View className="flex flex-row w-full">
          <Image
            className="w-16 h-16 rounded-lg"
            source={{ uri: `https://picsum.photos/200/300?random=1` }}
          />
          <View className="flex-1 flex-row justify-between items-center w-full ml-3">
            <View>
              <Text className="text-lg font-semibold dark:text-gray-100 truncate max-w-xs">
                {'Title'}
              </Text>
              <Text className="text-sm font-light dark:text-gray-500">
                {'Single'}
              </Text>
            </View>
            <View className="pr-4">
              <TouchableHighlight onPress={() => { }}>
                <FontAwesome name={"play"} size={20} color={'white'} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3
  }
})
