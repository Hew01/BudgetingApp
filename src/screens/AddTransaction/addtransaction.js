// Import necessary modules
import React, { useState, useRef , useEffect} from 'react';
import { View, Text, Select, Input, Button } from 'native-base';
import { ScrollView } from 'react-native-virtualized-view';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
function AddTransactionScreen({ navigation }) {
  const [transaction, setTransaction] = useState('chitieu');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [userId, setUserId] = useState(''); // Store the user ID
  const inputRef = useRef(null); // Add a useRef for the input reference

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set the user ID when the user is authenticated
      } else {
        setUserId(''); // Clear the user ID when the user is not authenticated
      }
    });

    return () => {
      unsubscribe(); // Clean up the subscription on component unmount
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
    setDate(selectedDate);
    hideDatePicker();
  };

  
  const saveTransaction = async () => {
    try {
      // Get the data to be saved
      const transactionData = {
        transactionType: transaction,
        category: category,
        amount: amount, // Use the actual variable or state that holds the amount value
        userId: userId, // Include the user ID in the transaction data
        // Add other necessary fields
      };

      // Save the data to Firestore
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
        pl={4}
        pr={4}
        pb={3}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
        h={'88'}
        bg={'white'}
        flexDirection={'row'}
        shadow={2}
      >
        <Text
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
          onPress={() => navigation.goBack()}
          fontWeight={'normal'}
          color={'red.500'}
          fontSize={20}
        >
          Lưu
        </Text>
      </View>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View m={4} h={'150'} p={4} bg={'white'} borderRadius={10}>
          <View>
            <Select
              variant="unstyled"
              w={'50%'}
              fontWeight={'normal'}
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
              height={'12'}
              fontSize={18}
              variant="underlined"
              placeholder="Nhập số tiền"
              value={amount} // Bind the amount value to the input
              onChangeText={(value) => setAmount(value)} // Update the amount state when the input changes
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
          height={420}
          px={4}
          py={6 }
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
              fontWeight={'extrabold'}
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
          <TouchableOpacity>
            <View flexDirection={'row'} justifyContent={'space-between'}>
              <View flexDirection={'row'}>
                <FontAwesome5 name="wallet" size={24} color="#767676" />
                <Text alignSelf={'flex-end'} fontWeight={'medium'} ml={4}>
                  Tiền mặt
                </Text>
              </View>
              <AntDesign name="right" size={24} color="#767676" />
            </View>
          </TouchableOpacity>
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