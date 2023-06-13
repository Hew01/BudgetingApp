import { View, Text, Select, Input } from "native-base";
import { useState } from "react";
import { SafeAreaView } from "react-native";

function AddTranSactionScreen({ navigation }) {
  const [category, setCategory] = useState("chitieu");
  return (
    <View flex={1}>
      <View
        pl={4}
        pr={4}
        pb={2}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        h={"88"}
        bg={"white"}
        flexDirection={"row"}
        shadow={2}
      >
        <Text
          onPress={() => navigation.goBack()}
          fontWeight={"semibold"}
          color={"red.500"}
          fontSize={18}
        >
          Hủy
        </Text>
        <Text fontWeight={"semibold"} fontSize={17}>
          Thêm giao dịch
        </Text>
        <Text
          onPress={() => navigation.goBack()}
          fontWeight={"semibold"}
          color={"red.500"}
          fontSize={20}
        >
          Lưu
        </Text>
      </View>
      <View m={4} h={"120"} p={4} bg={"white"} borderRadius={10}>
        <View>
          <Select
            fontWeight={"extrabold"}
            color={"#767676"}
            fontSize={16}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            width={"50%"}
          >
            <Select.Item label="Chi tiêu" value="chitieu" />
            <Select.Item label="Thu nhập" value="thunhap" />
          </Select>
          <Input keyboardType="numeric"
            fontWeight={"medium"}
            height={"12"}
            fontSize={24}
            variant="underlined"
            placeholder="Nhập số tiền"
            InputRightElement={<Text color={"#767676"} fontSize={20}>VNĐ</Text>}
          />
        </View>

      </View>
      <View m={4} h={"120"} p={4} bg={"white"} borderRadius={10}>
        <View>
          <Select
            fontWeight={"extrabold"}
            color={"#767676"}
            fontSize={16}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            width={"50%"}
          >
            <Select.Item label="Chi tiêu" value="chitieu" />
            <Select.Item label="Thu nhập" value="thunhap" />
          </Select>
          <Input keyboardType="numeric"
            fontWeight={"medium"}
            height={"12"}
            fontSize={24}
            variant="underlined"
            placeholder="Nhập số tiền"
            InputRightElement={<Text color={"#767676"} fontSize={20}>VNĐ</Text>}
          />
        </View>
        
      </View>
      
    </View>
  );
}

export default AddTranSactionScreen;
