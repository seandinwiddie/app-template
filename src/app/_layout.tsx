import React, { useEffect, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { TamaguiProvider, Theme, YStack } from 'tamagui';
import config from '../../tamagui.config';
import { useFonts } from 'expo-font';
import { SplashScreen, Slot, usePathname } from 'expo-router';
import { StatusBar } from 'react-native';
import { useAppSelector, useAppDispatch } from './hooks';
import { ToastProvider, ToastViewport } from '@tamagui/toast';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { apiSlice } from '../features/api/apiSlice';
import { Text } from 'tamagui';
import ErrorBoundary from '../components/ErrorBoundary';

export const unstable_settings = {
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const bodyState = useAppSelector((state) => state.body);
  const pathname = usePathname();

  const [loaded] = useFonts({
    'Fira Code': require('../../assets/fonts/FiraCode-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(apiSlice.endpoints.getInitialState.initiate());
        console.log('Body state after API call:', bodyState);
      } catch (error) {
        console.error('Error fetching initial state:', error);
      } finally {
        console.log('Initial data fetched');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (!loaded || isLoading) {
    return <Text>Loading... Please wait.</Text>;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <ToastProvider swipeDirection="horizontal" duration={6000} native={[]}>
          <YStack flex={1}>
            <StatusBar />
            {pathname !== '/' && <Nav />}
            <YStack flex={1}>
              <Slot />
            </YStack>
            <Footer />
          </YStack>
          <ToastViewport top="$8" left={0} right={0} />
        </ToastProvider>
      </Theme>
    </TamaguiProvider>
  );
}

export default function Layout() {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <RootLayoutNav />
      </ReduxProvider>
    </ErrorBoundary>
  );
}
