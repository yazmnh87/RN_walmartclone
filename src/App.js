import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header'



const App = () => {
  return (
    <View style={{flex: 1}}>
    <Header />
    </View>
  );
};


export default App;
