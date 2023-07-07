import React, { useState, useEffect } from 'react';
import { View, Text, Input, Button } from 'native-base';
import { checkAndSetTienmat, getC } from '../../../firebase';

export default function Tienmat() {
  const [currentTienmat, setCurrentTienmat] = useState('');
  const [placeholderValue, setPlaceholderValue] = useState('');
  useEffect(() => {
    setPlaceholderValue(currentTienmat);
  }, [currentTienmat]);
  const handleSaveWallet = async () => {
     {
        await checkAndSetTienmat(currentTienmat);      
     };
}

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={22} marginBottom={10} fontWeight="medium">
        Tiền mặt
      </Text>
      <Input
        marginBottom={30}
        width={300}
        height={10}
        fontSize={16}
        variant="underlined"
        placeholder={placeholderValue}
        onChangeText={setCurrentTienmat}
        value={currentTienmat}
      />

      <Button fontSize={16} margin={10} borderRadius={30} width={300} onPress={handleSaveWallet}>
        Cập nhật
      </Button>
    </View>
  );
}
