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
import Navbar from './components/Navbar'



const App = () => {
  return (
    <View style={{flex: 1}}>
    <Header />
    <Navbar/>
    </View>
  );
};


export default App;
