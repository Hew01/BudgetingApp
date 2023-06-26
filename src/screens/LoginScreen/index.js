import { Center, Text, Input, Button, View } from 'native-base';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { login } from '../../../firebase';
import NAVIGATION_KEY from '../../../constans/NavigationKey';
export default function LoginScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showClick = () => setShow(!show);

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert('Đăng nhập thành công');
      //navigation.navigate({ name: NAVIGATION_KEY.AppTabs, params: { screen: NAVIGATION_KEY.Home } });
      // Navigate to the AppTabs screen within the AuthTabs navigator
      // Thực hiện hành động sau khi đăng nhập thành công
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  return (
    <Center flex={1}>
      <Text fontSize={22} marginBottom={10} fontWeight="medium">
        Đăng nhập
      </Text>
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Email"
        onChangeText={setEmail}
      />
      <Input
        width={300}
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
      />
      <Button fontSize={16} margin={10} borderRadius={30} width={300} onPress={handleLogin}>
        ĐĂNG NHẬP
      </Button>
      <View marginBottom={10} flexDirection="row">
        <Text>Chưa có tài khoản? </Text>
        <Text color="darkBlue.500" onPress={() => navigation.navigate('signup')}>
          Đăng ký
        </Text>
      </View>
    </Center>
  );
}