import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

const {height, width} = Dimensions.get('window');
const Header = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={{height: '18%', width, backgroundColor: 'blue'}}>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            width: 250,
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../img/walmart_logo2.png')}
            style={{alignSelf: 'flex-start'}}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
              paddingLeft: 5
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#fff',
                fontSize: 20,
                fontWeight: 500,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '97%',
          height: 47,
          alignSelf: 'center'
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            marginBottom: 5,
            borderRadius: 7
          }}>
          <Icon
            name="ios-search"
            style={{fontSize: 22, paddingRight: 10, paddingLeft: 10}}
          />
         <TouchableOpacity style={{width: '70%'}}>
             <Text style={{fontSize:20, color: "#7a818c"}}>Search stores & online</Text>
         </TouchableOpacity>
         <TouchableOpacity>
          <Icon2
            name="microphone"
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: 200,
              paddingRight: 10,
            }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon
            name="ios-barcode"
            style={{color: '#000', fontSize: 20, paddingRight: 6}}
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 20,
  },
  input: {
    height: 35,
    width: '95%',
    backgroundColor: '#fff',
    marginBottom: '2%',
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center'
  },
});
