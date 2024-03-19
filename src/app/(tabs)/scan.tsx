import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, BarCodeEvent, PermissionResponse } from 'expo-barcode-scanner';

export default function App() {
  // Define the state with explicit types
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status }: PermissionResponse = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const renderCamera = () => {
    return (
      <View className='w-4/5 aspect-square overflow-hidden rounded-lg mb-10'>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View className='flex-1 items-center justify-start'>
        <Text className='text-base mb-5'>Camera permission not granted</Text>
      </View>
    );
  }
  
  return (
    <View className='flex-1 items-center justify-start'>
      <Text className='text-base my-5 dark:text-gray-100'>Scan a barcode to start.</Text>
      {renderCamera()}
    </View>
  );
}