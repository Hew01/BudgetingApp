import React, { useState } from 'react';
import {Image ,Alert ,Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from '../styles';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    if (username === 'user' && password === '123456') {
      // TODO: handle successful login
        Alert.alert('Đăng nhập thành công');
    } else {
        Alert.alert('Lỗi', 'Vui lòng kiểm tra lại thông tin');
    }
  };

  const handleSignup = () => {
  };

  const clearError = () => {
    setError('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tbLogin}>Đăng nhập</Text>
      <TextInput
        style={styles.textip}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Email"
        onFocus={() => setUsername('')}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textip}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <TouchableHighlight style={styles.introductionRegButton} onPress={handleLogin}>
        <Text>Đăng nhập</Text>
      </TouchableHighlight>
      {error ? (
        <TouchableHighlight onPress={clearError}>
          <Text style={styles.error}>{error}</Text>
        </TouchableHighlight>
      ) : null}
       <TouchableHighlight style={styles.introductionLoginButton} onPress={handleSignup}>
        <Text>Đăng ký</Text>
      </TouchableHighlight>   

    <Text style={styles.txtword}>HOẶC ĐĂNG NHẬP VỚI:</Text>
      

    <View style={styles.logosContainer}>
        <Image source={require('../assets/images/facebook.png')} style={styles.logo} />
        <Image source={require('../assets/images/apple.png')} style={styles.logo} />
        <Image source={require('../assets/images/Google.png')} style={styles.logo} />
    </View>
    </View>
  );
};

export default LoginPage;