import { Center,View,ScrollView,Text,Select } from 'native-base';
import { useState } from 'react';
function MonthReportDetails() {
  const [transaction, setTransaction] = useState("tatca");

    return (
    <View pl={4} pr={4} pt={2} flex={1}>
      <Select
            variant="rounded"
            fontWeight={"bold"}
            color={"#767676"}
            fontSize={20}
            selectedValue={transaction}
            onValueChange={(itemValue) => setTransaction(itemValue)}
          >
            <Select.Item label="Tất cả" value="tatca" />
            <Select.Item label="Agribank" value="nganhang1" />
            <Select.Item label="Momo" value="nganhang2" />

          </Select>
          <Text ml={4} fontWeight={"bold"} fontSize={22}>
            3.000.000 đ
          </Text>
      <ScrollView>
        
      <View
            paddingRight={4}
            pl={4}
            pb={2}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            borderRadius={10}
            height={"24"}
            backgroundColor={"white"}
            flexDirection={"column"}
          >
             <Text  fontWeight={"bold"} fontSize={22}>
           Tiền dư
          </Text>
          <View  justifyContent={'space-between'} flexDirection={'row'}> 

            <View w={'60%'} alignItems={"flex-start"}>
              <Text color={"#767676"} fontWeight={"medium"} fontSize={18}>
                Ban đầu
              </Text>
              <Text color={"green.700"} fontSize={18}>
                2.000.000 đ
              </Text>
            </View>
            <View  w={'40%'} alignItems={"flex-start"}>
              <Text color={"#767676"} fontWeight={"medium"} fontSize={18}>
                Kết thúc
              </Text>
              <Text color={"red.600"} fontSize={18}>
              0 đ
              </Text>
            </View>
            </View>

          </View>

      </ScrollView>
    </View>
    );
}

export default MonthReportDetails;