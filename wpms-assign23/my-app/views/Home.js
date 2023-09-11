import {StatusBar} from 'expo-status-bar';
import {Platform} from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from './components/List';

const Home = (props) => {
    const {navigation} = props;
    return (
      <SafeAreaView style={styles.container}>
         <List navigation={navigation}></List>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;