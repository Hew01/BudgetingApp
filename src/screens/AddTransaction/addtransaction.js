// Import necessary modules
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Select, Input, Button } from 'native-base';
import { ScrollView } from 'react-native-virtualized-view';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';

function AddTransactionScreen({ navigation }) {
  const [transaction, setTransaction] = useState('chitieu');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [userId, setUserId] = useState('');
  const [paymentWallet, setPaymentWallet] = useState('');
  const [note, setNote] = useState('');
  const [day, setDay] = useState('');
const [month, setMonth] = useState('');
const [year, setYear] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = (selectedDate) => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; // Adding 1 because months are zero-based
    const year = selectedDate.getFullYear();

    setDate(selectedDate);
    setDay(day); // Set the day value
    setMonth(month); // Set the month value
    setYear(year); // Set the year value
    hideDatePicker();
  };

  const saveTransaction = async () => {
    try {
      const transactionData = {
        transactionType: transaction,
        category: category,
        amount: amount,
        userId: userId,
        note: note,
        day: day, // Include the day value
        month: month, // Include the month value
        year: year, // Include the year value
        // Add other necessary fields
      };

      const db = getFirestore();
      const docRef = await addDoc(collection(db, 'transaction'), transactionData);
      console.log('Transaction saved with ID: ', docRef.id);

      // Add any additional logic after saving the transaction
      // For example, navigate to another screen
      // navigation.navigate('OtherScreen');
    } catch (error) {
      console.log('Error saving transaction: ', error);
    }
  };

  return (
    <View flex={1}>
      <View
        py={4}
        pb={2}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
        h={'88'}
        bg={'white'}
        flexDirection={'row'}
        shadow={2}
      >
        <Text
          px={4}
          onPress={() => navigation.goBack()}
          fontWeight={'normal'}
          color={'red.500'}
          fontSize={18}
        >
          Hủy
        </Text>
        <Text fontWeight={'semibold'} fontSize={17}>
          Thêm giao dịch
        </Text>
        <Text
          px={4}
          onPress={() => navigation.goBack()}
          fontWeight={'normal'}
          color={'red.500'}
          fontSize={20}
        >
          Lưu
        </Text>
      </View>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View m={4} p={4} bg={'white'} borderRadius={10}>
          <View>
            <Select
              variant="unstyled"
              w={'50%'}
              fontWeight={'semibold'}
              color={'#767676'}
              fontSize={20}
              selectedValue={transaction}
              onValueChange={(itemValue) => setTransaction(itemValue)}
            >
              <Select.Item label="Chi tiêu" value="chitieu" />
              <Select.Item label="Thu nhập" value="thunhap" />
            </Select>
            <Input
              ref={inputRef}
              keyboardType="numeric"
              fontWeight={'medium'}
              fontSize={24}
              variant="underlined"
              placeholder="Nhập số tiền"
              value={amount}
              onChangeText={(value) => setAmount(value)}
              InputRightElement={
                <Text color={'#767676'} fontSize={20}>
                  VNĐ
                </Text>
              }
            />
          </View>
        </View>

        <View
          flex={1}
          flexDirection={'column'}
          m={4}
          p={4}
          bg={'white'}
          borderRadius={10}
        >
          {transaction == 'chitieu' ? (
            <Select
              variant="rounded"
              placeholder="Chọn danh mục"
              fontWeight={'normal'}
              color={'#767676'}
              fontSize={16}
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Select.Item label="Ăn uống" value="anuong" />
              <Select.Item label="Đi lại" value="dilai" />
              <Select.Item label="Tiền nhà" value="tiennha" />
              <Select.Item label="Hóa đơn" value="hoadon" />
              <Select.Item label="Y tế" value="yte" />
              <Select.Item label="Liên lạc" value="lienlac" />
            </Select>
          ) : (
            <Select
              variant="rounded"
              placeholder="Chọn danh mục"
              fontWeight={'normal'}
              color={'#767676'}
              fontSize={16}
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Select.Item label="Tiền lương" value="tienluong" />
              <Select.Item label="Tiền thưởng" value="tienthuong" />
              <Select.Item label="Trợ cấp" value="trocap" />
              <Select.Item label="Đầu tư" value="dautu" />
            </Select>
          )}

          <Text mt={4} mb={2} fontSize={16} color={'#767676'} fontWeight={'medium'}>
            Ví thanh toán
          </Text>
          <Select
            variant="rounded"
            placeholder="Chọn ví thanh toán"
            fontWeight={'normal'}
            color={'#767676'}
            fontSize={16}
            selectedValue={paymentWallet}
            onValueChange={(itemValue) => setPaymentWallet(itemValue)}
          >
            <Select.Item label="Tiền mặt" value="tienmat" />
            <Select.Item label="Sacombank" value="sacombank" />
          </Select>

          <Text mt={4} mb={2} fontSize={16} color={'#767676'} fontWeight={'medium'}>
            Thời gian
          </Text>
          <TouchableOpacity onPress={showDatePicker}>
            <View flexDirection={'row'} justifyContent={'space-between'}>
              <View flexDirection={'row'}>
                <FontAwesome5 name="calendar-alt" size={24} color="#767676" />
                <Text alignSelf={'flex-end'} fontWeight={'medium'} ml={4}>
                  {date.toLocaleDateString('vi', options)}
                </Text>
              </View>
              <AntDesign name="right" size={24} color="#767676" />
            </View>
          </TouchableOpacity>
          <Text mt={4} mb={2} fontSize={16} color={'#767676'} fontWeight={'medium'}>
            Ghi chú
          </Text>
          <Input
            numberOfLines={3}
            minHeight={60}
            maxHeight={60}
            multiline={true}
            fontSize={18}
            fontWeight={'medium'}
            variant="outline"
            value={note}
            onChangeText={(value) => setNote(value)}
          />
          <Button mt={4} mb={2} borderRadius={50} alignSelf={'center'} width={200} h={46} onPress={saveTransaction}>
            {transaction == 'chitieu' ? 'Nhập khoản chi' : 'Nhập khoản thu'}
          </Button>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default AddTransactionScreen;
