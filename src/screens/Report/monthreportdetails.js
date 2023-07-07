import {
  Button,
  Center,
  View,
  ScrollView,
  Text,
  Select,
  HStack,
} from "native-base";
import { useEffect, useState } from "react";
import ExpenReportScreen from "./expenreport";
import IncomeReportScreen from "./incomereport";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

function MonthReportDetails() {
  const [transactions, setTransactions] = useState([]);
  const [index, setindex] = useState(0);
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
    <View pl={4} pr={4} pt={2} flex={1}>
      <View
        p={2}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        borderRadius={10}
        height={"40"}
        backgroundColor={"white"}
        flexDirection={"column"}
      >
        <Select
          variant="rounded"
          fontWeight={"bold"}
          color={"#767676"}
          w={"100%"}
          h={10}
          fontSize={20}
          selectedValue={transactions}
          onValueChange={(itemValue) => setTransactions(itemValue)}
        >
          <Select.Item label="Tất cả" value="tatca" />
          <Select.Item label="Agribank" value="nganhang1" />
          <Select.Item label="Momo" value="nganhang2" />
        </Select>
        <View w={"100%"} justifyContent={"space-between"} flexDirection={"row"}>
          <HStack
            pl={1}
            borderColor={"#767676"}
            borderRadius={5}
            borderWidth={1}
            alignItems={"center"}
            w={"49%"}
          >
            <Text color={"#767676"} fontWeight={"medium"} fontSize={12}>
              Thu nhập :
            </Text>
            <Text lab color={"green.700"} fontSize={16}>
              {totalThuNhap} đ
            </Text>
          </HStack>
          <HStack
            pl={1}
            borderColor={"#767676"}
            borderRadius={5}
            borderWidth={1}
            w={"49%"}
            alignItems={"center"}
          >
            <Text color={"#767676"} fontWeight={"medium"} fontSize={12}>
              Chi tiêu :
            </Text>
            <Text color={"red.600"} fontSize={16}>
              {totalChiTieu} đ
            </Text>
          </HStack>
        </View>
        <HStack
          w={"100%"}
          borderColor={"#767676"}
          borderRadius={5}
          borderWidth={1}
          pl={1}
          alignItems={"center"}
        >
          <Text color={"#767676"} fontWeight={"medium"} fontSize={14}>
            Thu chi :
          </Text>
          <Text ml={4} fontSize={16}>
          {totalThuNhap-totalChiTieu} đ
          </Text>
        </HStack>
        
      </View>
      <ScrollView pt={2}>
        <View
          p={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={10}
          height={"400"}
          backgroundColor={"white"}
          flexDirection={"column"}
        >
          <View borderRadius={10} height={"400"}>
            <View
              borderRadius={8}
              background={"rgba(231, 231, 231, 1)"}
              height={8}
            >
              {index == 0 ? (
                <View>
                  <View
                    padding={0.5}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Button
                      borderRadius={7}
                      padding={-1}
                      background={"white"}
                      width={"40"}
                      height={7}
                      onPress={() => setindex(0)}
                    >
                      <Text>Chi tiêu</Text>
                    </Button>
                    <Button
                      borderRadius={5}
                      mr={2}
                      padding={-1}
                      background={"rgba(231, 231, 231, 1)"}
                      width={"32"}
                      height={7}
                      onPress={() => setindex(1)}
                    >
                      <Text>Thu nhập</Text>
                    </Button>
                  </View>
                  <ExpenReportScreen></ExpenReportScreen>
                </View>
              ) : (
                <View>
                  <View
                    padding={0.5}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Button
                      borderRadius={5}
                      ml={2}
                      padding={-1}
                      background={"rgba(231, 231, 231, 1)"}
                      width={"32"}
                      height={7}
                      onPress={() => setindex(0)}
                    >
                      <Text>Chi tiêu</Text>
                    </Button>
                    <Button
                      borderRadius={5}
                      padding={-1}
                      background={"white"}
                      width={"40"}
                      height={7}
                      onPress={() => setindex(1)}
                    >
                      <Text>Thu nhập</Text>
                    </Button>
                  </View>
                  <IncomeReportScreen></IncomeReportScreen>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MonthReportDetails;