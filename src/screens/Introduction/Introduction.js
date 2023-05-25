import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';


export default function IntroductionScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const showClick = () => setShow(!show);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/CompanyName.png')}
          style={styles.logo}        
        />
        <Image
          source={require('../../../assets/images/vector1.png')}
          style={styles.backgroundImage}
        />
        <Text style={styles.title}>Đơn giản hóa chi tiêu của bạn</Text>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.buttonReg]} 
          onPress={() => navigation.navigate('signup')}>
            <Text style={styles.regText}>ĐĂNG KÍ MIỄN PHÍ</Text>
        </TouchableOpacity>
        <View style={[styles.buttonContainer, styles.buttonLog]}>
          <Text style={styles.loginText}>
            ĐĂNG NHẬP
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 55,
  },
  logo: {
    width: 170,
    height: 38,
    position: 'absolute',
    top: 13,
    left: 0,
  },
  backgroundImage: {
    width: 380,
    height: 250,
    top: 130,
    marginBottom: 150,
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 23,
    width: 300,
    height: 40, 
    justifyContent: 'center',
  },
  buttonReg: {
    backgroundColor: colors.primary,
  },
  buttonLog: {
    backgroundColor: colors.light_grey,
  },
  regText: {
    color: colors.background_white
  },
  loginText: {
    color: colors.primary,
  },
});
