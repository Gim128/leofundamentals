/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/home';
import Result from './screens/result';
import Quiz from './screens/quiz';






const App = () => {
  return (
    <View  style={styles.container}>
      {/* <Home />  */}
      <Quiz />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8,
  },
});
