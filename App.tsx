/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Providers from '@/context';
import Navigator from '@navigator/root';
import {Platform, UIManager} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function App(): React.JSX.Element {
  return (
    <Providers>
      <Navigator />
    </Providers>
  );
}

export default App;
