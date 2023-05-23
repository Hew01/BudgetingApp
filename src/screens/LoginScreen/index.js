import { Center, Text, Input, Button, View, Image } from 'native-base';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function LoginScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const showClick = () => setShow(!show);
  const forgetPassword = () => {};
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
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
      />
      <Input
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Mật khẩu"
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Button pb={0} backgroundColor="transparent" justifyContent="center" ml={1} roundedLeft={0} roundedRight="md" onPress={showClick}>
            {show ? (
              <Ionicons name="eye-outline" size={24} color="black" />
            ) : (
              <Ionicons name="eye-off-outline" size={24} color="black" />
            )}
          </Button>
        }
      />
      <Text onPress={forgetPassword} fontSize={12} marginTop={2} fontStyle="italic" alignSelf="flex-end" marginRight={10} fontWeight="light">
        Quên mật khẩu?
      </Text>
      <Button fontSize={16} margin={10} borderRadius={30} width={300}>
        ĐĂNG NHẬP
      </Button>
      <View marginBottom={10} flexDirection="row">
        <Text>Chưa có tài khoản? </Text>
        <Text color="darkBlue.500" onPress={() => navigation.navigate('signup')}>
          Đăng kí ngay
        </Text>
      </View>
    </Center>
  );
}