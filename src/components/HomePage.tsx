import React from 'react';
import { YStack, Button, H1, Paragraph, AnimatePresence } from 'tamagui';

const HomePage: React.FC = () => {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <AnimatePresence>
        <YStack space="$4" maw={600} animation="quick" enterStyle={{ opacity: 0, scale: 0.9 }} exitStyle={{ opacity: 0, scale: 0.9 }}>
          <H1 ta="center" fontFamily="$heading" fontWeight="bold">Expo, Tamagui, and Redux Toolkit application template</H1>
          <Paragraph ta="center" fontFamily="$body">
            This is a template for web applications using Expo, Tamagui, and Redux Toolkit.
          </Paragraph>
        </YStack>
      </AnimatePresence>
    </YStack>
  );
};

export default HomePage;
