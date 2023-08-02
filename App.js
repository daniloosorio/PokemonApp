import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Navigation from './src/navigation/navigation';
import {NativeModules} from 'react-native';
import { AuthProvider } from './src/context/AuthContext';

const {StatusBarManager} = NativeModules;
const height = StatusBarManager.HEIGHT;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <NavigationContainer>
          <AuthProvider>
          <Navigation />
          </AuthProvider>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: height
  },
  content: {
    flex: 1,
  }
});
