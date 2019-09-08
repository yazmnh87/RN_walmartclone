import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'

const Navbar = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View
        style={{
          height: '10%',
          width: '100%',
          backgroundColor: '#fff',
          borderTopColor: 'black',
          borderWidth: 1,
          flexDirection:'row',
          justifyContent:'space-evenly'
        }}>
        <TouchableOpacity style={styles.touchable}>
          <Icon name="home" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon name="download" style={styles.icon}/>
        </TouchableOpacity >
        <TouchableOpacity style={styles.touchable}>
          <Icon2 name="menu" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon2 name="cart"  style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon name="user" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;


const styles = StyleSheet.create({
    touchable:{
        height:'100%',
        justifyContent: 'center',
        width:'20%'
    },
    icon:{
        alignSelf:'center',
        fontSize:18,
      
    }
}) 
