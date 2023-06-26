import { Center, Text, Input, Button, View } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAccount } from '../../../firebase';

export default function SignupScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const showClick = () => setShow(!show);

  const handleSignup = async () => {
    if (email.trim() === '' || fullName.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin');
    } else {
      if (password !== confirmPassword) {
        setErrorMessage('Mật khẩu xác nhận không khớp');
      } else {
        try {
          await createAccount(email, password, fullName);
          alert('Tạo tài khoản thành công');
          navigation.navigate('login');
        } catch (error) {
          console.log('Error registering user:', error);
        }
      }
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEmail('');
      setFullName('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Center flex={1}>
      <Text fontSize={22} marginBottom={10} fontWeight="medium">
        Đăng ký
      </Text>
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Họ và tên"
        onChangeText={setFullName}
        value={fullName}
      />
      <Input
        width={300}
        marginBottom={10}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Mật khẩu"
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Button
            pb={0}
            backgroundColor="transparent"
            justifyContent="center"
            ml={1}
            roundedLeft={0}
            roundedRight="md"
            onPress={showClick}
          >
            {show ? (
              <Ionicons name="eye-outline" size={24} color="black" />
            ) : (
              <Ionicons name="eye-off-outline" size={24} color="black" />
            )}
          </Button>
        }
        onChangeText={setPassword}
        value={password}
      />
      <Input
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Xác nhận mật khẩu"
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Button
            pb={0}
            backgroundColor="transparent"
            justifyContent="center"
            ml={1}
            roundedLeft={0}
            roundedRight="md"
            onPress={showClick}
          >
            {show ? (
              <Ionicons name="eye-outline" size={24} color="black" />
            ) : (
              <Ionicons name="eye-off-outline" size={24} color="black" />
            )}
          </Button>
        }
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      {errorMessage ? (
        <Text color="red.500" fontSize={14} marginBottom={10}>
          {errorMessage}
        </Text>
      ) : null}

      <Button fontSize={16} margin={10} borderRadius={30} width={300} onPress={handleSignup}>
        ĐĂNG KÝ
      </Button>
      <View marginBottom={10} flexDirection="row">
        <Text>Đã có tài khoản? </Text>
        <Text color="darkBlue.500" onPress={() => navigation.navigate('login')}>
          Đăng nhập
        </Text>
      </View>
    </Center>
  );
}