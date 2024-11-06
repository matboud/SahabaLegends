import React from 'react';
import { View, Text, 
    // Button
 } from 'react-native';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      {/* <Button title="Go to Quiz" onPress={() => navigation.navigate('Quiz')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  );
};

export default SettingsScreen;