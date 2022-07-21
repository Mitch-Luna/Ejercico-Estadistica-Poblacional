import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { Journal } from './estadistica/usingData';


export default function App() {
  const journal = new Journal();

  console.log(journal.Mostrar() === undefined);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to sta!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
  },
});