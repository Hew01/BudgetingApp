import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function LastMonth() {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);
  const [totalThuNhap, setTotalThuNhap] = useState(0);
  const [totalChiTieu, setTotalChiTieu] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const db = getFirestore();
        const transactionsRef = collection(db, 'transaction');

        // Fetch transactions for the month of July 2023
        const transactionsQuery = query(
          transactionsRef,
          where('userId', '==', getCurrentUserId()),
          where('month', '==', 7),
          where('year', '==', 2023)
        );
        const transactionsQuerySnapshot = await getDocs(transactionsQuery);
        const transactionsData = transactionsQuerySnapshot.docs.map((doc) => doc.data());
        setTransactions(transactionsData);

        // Calculate total Thu nhập and total Chi tiêu
        let totalThuNhap = 0;
        let totalChiTieu = 0;
        transactionsData.forEach((transaction) => {
          const amount = parseFloat(transaction.amount);
          if (transaction.transactionType === 'thunhap') {
            totalThuNhap += amount;
          } else if (transaction.transactionType === 'chitieu') {
            totalChiTieu += amount;
          }
        });
        setTotalThuNhap(totalThuNhap);
        setTotalChiTieu(totalChiTieu);
      } catch (error) {
        console.log('Error retrieving transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const getCurrentUserId = () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    return currentUser ? currentUser.uid : '';
  };

  return (
    <ScrollView>
      <View pt={2} pl={4} pr={4} flex={1}>
        <View p={4} borderRadius={10} backgroundColor="white" height={120 }>
          <View flex={1} flexDirection="row" justifyContent="space-between">
            <Text fontWeight="medium" color="#1FA97C">
              Thu nhập
            </Text>
            <Text fontWeight="medium" color="#1FA97C">
              + {totalThuNhap} đ
            </Text>
          </View>
          <View flex={1} flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium" color="red.500">
              Chi tiêu
            </Text>
            <Text fontWeight="medium" color="red.500">
              - {totalChiTieu} đ
            </Text>
          </View>
          <View alignSelf="flex-end">
            <Text margin={-2}>────────</Text>
            <Text fontWeight="medium" alignSelf="flex-end">
              {totalThuNhap - totalChiTieu} đ
            </Text>
          </View>
        </View>
        <View>
          <View alignItems="flex-end" mt={4} justifyContent="space-between" flexDirection="row">
            <Text mr={2} color="gray.600" fontWeight="medium" fontSize={14}>
              Danh sách giao dịch
            </Text>
            <Text mr={2} color="gray.600" fontWeight="medium" fontSize={12}>
              Tìm kiếm
            </Text>
          </View>
          {transactions.map((transaction, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('transactiondetails', { transaction })}
              style={{ marginBottom: 15 }}
            >
              {index !== 0 && (
                <View
                  paddingRight={6}
                  pl={6}
                  paddingTop={2}
                  
                  pb={2}
                  borderRadius={10}
                  minHeight={150}
                  backgroundColor="white"
                  flexDirection="column"
                >
                  <View flex={1} flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                    <View alignItems="center" flexDirection="row">
                      <Text mr={2} fontWeight="semibold" fontSize={20}>
                        Ngày {transaction.day}
                      </Text>
                      <View alignSelf="flex-end">
                        <Text mb={-1} fontSize={12}>
                          Tháng {transaction.month}, {transaction.year}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text alignSelf="center" margin={0}>
                    ─────────────────────
                  </Text>
                  <View
                    flex={1}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <View alignItems="center" flexDirection="row">
                      <Text color={transaction.transactionType === 'thunhap' ? '#1FA97C' : 'red.500'} fontWeight="medium" ml={4}>
                        Loại: {transaction.category}
                      </Text>
                    </View>
                    <Text color={transaction.transactionType === 'thunhap' ? '#1FA97C' : 'red.500'} fontWeight="medium">
                      Số tiền: {transaction.amount} đ
                    </Text>
                  </View>
                  <View
                    flex={1}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <View alignItems="center" flexDirection="row">
                      <Text fontWeight="medium" color="black" ml={4}>
                        Ghi chú: "{transaction.note}"
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}