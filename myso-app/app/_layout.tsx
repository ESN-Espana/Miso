import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    KelsonSansRegular: require('../assets/fonts/Kelson Sans Regular.otf'),
    KelsonSansBold: require('../assets/fonts/Kelson Sans Bold.otf'),
    KelsonSansLight: require('../assets/fonts/Kelson Sans Light.otf'),
    LatoBlack: require('../assets/fonts/Lato-Black.ttf'),
    LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
    LatoLight: require('../assets/fonts/Lato-Light.ttf'),
    LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    LatoThin: require('../assets/fonts/Lato-Thin.ttf'),
    LatoHeavy: require('../assets/fonts/Lato-Heavy.ttf'),
    LatoHairline: require('../assets/fonts/Lato-Hairline.ttf'),
    LatoMedium: require('../assets/fonts/Lato-Medium.ttf'),
    LatoSemibold: require('../assets/fonts/Lato-Semibold.ttf'),
  
    LatoMediumItalic: require('../assets/fonts/Lato-MediumItalic.ttf'),
    LatoBlackItalic: require('../assets/fonts/Lato-BlackItalic.ttf'),
    LatoBoldItalic: require('../assets/fonts/Lato-BoldItalic.ttf'),
    LatoLightItalic: require('../assets/fonts/Lato-LightItalic.ttf'),
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
    LatoThinItalic: require('../assets/fonts/Lato-ThinItalic.ttf'),
    LatoHairlineItalic: require('../assets/fonts/Lato-HairlineItalic.ttf'),
    LatoHeavyItalic: require('../assets/fonts/Lato-HeavyItalic.ttf'),
    LatoSemiboldItalic: require('../assets/fonts/Lato-SemiboldItalic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
