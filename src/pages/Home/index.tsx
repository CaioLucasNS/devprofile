import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export const Home: React.FunctionComponent = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View>
        <Text>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};
