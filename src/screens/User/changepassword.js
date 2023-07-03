import React, { useState } from 'react';
import { View, Text, Input, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { updatePassword } from '../../../firebase';

export default function ChangeAccountScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = async () => {
    if (currentPassword.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin');
    } else if (newPassword !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp');
    } else {
      try {
        await updatePassword(currentPassword, newPassword);
        alert('Mật khẩu đã được thay đổi thành công');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
      } catch (error) {
        console.log('Error changing password:', error);
        setErrorMessage('Có lỗi xảy ra khi thay đổi mật khẩu');
      }
    }
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={22} marginBottom={10} fontWeight="medium">
        Thay đổi mật khẩu
      </Text>
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Mật khẩu hiện tại"
        type="password"
        onChangeText={setCurrentPassword}
        value={currentPassword}
      />
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Mật khẩu mới"
        type="password"
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <Input
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder="Xác nhận mật khẩu mới"
        type="password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      {errorMessage ? (
        <Text color="red.500" fontSize={14} marginBottom={10}>
          {errorMessage}
        </Text>
      ) : null}

      <Button fontSize={16} margin={10} borderRadius={30} width={300} onPress={handleChangePassword}>
        Thay đổi mật khẩu
      </Button>
    </View>
  );
}
