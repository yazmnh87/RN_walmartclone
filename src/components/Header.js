import React from 'react'
import { View, Text, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'



const {height, width} = Dimensions.get('window');const Header = () => {


    return (
        <View style={{height: '17%', width, backgroundColor: '#051E42'}}>
        <View style={{flex:1, marginTop: 30, flexDirection:'row', width:'100%', justifyContent:'flex-end'}}>
        <View style={{flexDirection: 'row',height: 40, width: 250, alignSelf:'center', justifyContent:'space-between', marginLeft:5}}>
        <Image source={require('../img/walmart_logo2.png')} style={{height: '45%', width:'45%', alignSelf:'center'}}/>
        <TouchableOpacity style={{alignSelf: 'center',justifyContent:'center'}}><Text style={{alignSelf:'center',color:'#fff', fontSize:20,fontWeight:500 }}>Sign In</Text></TouchableOpacity>
        </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextInput placeholder="Search stores & online" style={{height: 40, width:"95%", backgroundColor: '#fff', marginBottom: '2%', alignSelf:'center', borderRadius: 7}}></TextInput>
        </View>
        </View>

    )
}

export default Header