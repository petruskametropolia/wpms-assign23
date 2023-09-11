import {StatusBar} from 'expo-status-bar';
import {Platform} from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from './components/List';

const App = () => {
  return (
      <>
        <Navigator></Navigator>
        <StatusBar style="auto"/>
      </>
  );
};



export default App;