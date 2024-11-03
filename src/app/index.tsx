import React from 'react';
import { View } from 'tamagui';
import Welcome from '../components/Welcome';

export default function Index() {
  return (
    <View flex={1}>
      <Welcome />
    </View>
  );
}
