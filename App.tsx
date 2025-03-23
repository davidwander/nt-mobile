import { StatusBar } from 'react-native';
import { 
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import { GluestackUIProvider, useTheme } from '@gluestack-ui/themed';

import { config } from './config/gluestack-ui.config';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';

const statusBarColor = config.tokens.colors?.violet500 || "#8b5cf6";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular});

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={statusBarColor}  
      />

      {fontsLoaded ? <SignIn /> : <Loading />}

    </GluestackUIProvider>
  );
}
