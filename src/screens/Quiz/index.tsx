import React from 'react';
import { View, Text, 
    // Button
 } from 'react-native';

const QuizScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Quiz Screen</Text>
      {/* <Button title="Go to Quiz" onPress={() => navigation.navigate('Quiz')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  );
};

export default QuizScreen;