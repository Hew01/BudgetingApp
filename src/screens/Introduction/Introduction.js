import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
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
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('signup')}>Đăng kí miễn phí</Text>
        </View>
        <Text   
          style={styles.registerText}
        >
          Đăng nhập
        </Text>
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
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    backgroundColor: '#1FA97C',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 23,
    marginBottom: 0,
  },
  registerText: {
    alignSelf: 'center',
    color: '#1FA97C',
    paddingVertical: 10,
  },
});
