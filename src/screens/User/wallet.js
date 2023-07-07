// Wallet.js
import React, { useState } from 'react';
import { View, Text, Input, Button } from 'native-base';
import {checkAndSetEmail} from '../../../firebase'; // Import the auth object

export default function Wallet() {
  const [name, setCurrentname] = useState('');
  const [Password, setPassword] = useState('');
  const handleSaveWallet = async () => {
    try {
      const email = await checkAndSetEmail(name, Password);
      if (email) {
        console.log('Email set:', email);
      } else {
        console.log('Card details do not match.');
      }
    } catch (error) {
      console.log('Error saving wallet:', error);
    }
  };
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={22} marginBottom={10} fontWeight="medium">
        Nhập ví của bạn
      </Text>
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Mã ví"
        onChangeText={setCurrentname}
        value={name}
      />
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Mật khẩu ví"
        onChangeText={setPassword}
        value={Password}
      />
      <Button fontSize={16} margin={10} borderRadius={30} width={300} onPress={handleSaveWallet}>
        Lưu ví
      </Button>
    </View>
  );
}
