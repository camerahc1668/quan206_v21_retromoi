import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cafe.pos206',
  appName: 'POS Cafe 206',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#F5F0E8'
  },
  ios: {
    backgroundColor: '#F5F0E8'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#8B4513',
      androidSplashResourceName: 'splash',
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#8B4513'
    }
  }
};

export default config;
