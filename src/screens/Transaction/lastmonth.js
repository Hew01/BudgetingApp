import { Text, View } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function lastMonth() {
    const navigation=useNavigation();
  return (
    <View pt={2} pl={4} pr={4} flex={1}>
      <View
        px={4}
        py={4}
        borderRadius={10}
        background={"white"}
        height={"120"}
      >
        <View flex={"1"} flexDirection={"row"} justifyContent={"space-between"}>
          <Text fontWeight={"medium"} color={"#1FA97C"}>
            Thu nhập
          </Text>
          <Text fontWeight={"medium"} color={"#1FA97C"}>
            {"+"} 3.000.000 đ
          </Text>
        </View>
        <View
          flex={"1"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text fontWeight={"medium"} color={"red.500"}>
            Chi tiêu
          </Text>
          <Text fontWeight={"medium"} color={"red.500"}>
            {" "}
            {"-"} 2.000.000 đ
          </Text>
        </View>
        <View alignSelf={"flex-end"}>
          <Text margin={-2}>────────</Text>
          <Text fontWeight={"medium"} alignSelf={"flex-end"}>
            1.000.000 đ
          </Text>
        </View>
      </View>
      <View>
        <View
          alignItems={"flex-end"}
          mt={4}
          mb={2}
          justifyContent={"space-between"}
          flexDirection={"row"}
        >
          <Text mr={2} color={"gray.600"} fontWeight={"medium"} fontSize={14}>
            Danh sách giao dịch
          </Text>
          <Text mr={2} color={"gray.600"} fontWeight={"medium"} fontSize={12}>
            Tìm kiếm
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('transactiondetails')}>
          <View
            paddingRight={6}
            pl={6}
            paddingTop={2}
            pb={2}
            borderRadius={10}
            minHeight={"150"}
            backgroundColor={"white"}
            flexDirection={"column"}
          >
            <View
              flex={"1"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"flex-end"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
                <Text mt={-1.5} ml={-1} mr={3} fontWeight={"semibold"} fontSize={32}>
                  07
                </Text>
                <View alignSelf={"flex-end"}>
                  <Text mb={-1} fontSize={12}>
                    Thứ ba
                  </Text>
                  <Text mb={-1} fontSize={12}>
                    Tháng 3, 2023
                  </Text>
                </View>
              </View>
              <Text fontWeight={"medium"}>3.000.000 đ</Text>
            </View>
            <Text alignSelf={"center"} margin={0}>
              ─────────────────────
            </Text>
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
                <MaterialCommunityIcons
                  name="fuel"
                  size={24}
                  color={"rgba(255, 0, 0, 1)"}
                />
                <Text color={"red.500"} fontWeight={"medium"} ml={4}>
                  Đi lại
                </Text>
              </View>

              <Text color={"red.500"} fontWeight={"medium"}>
                3.000.000 đ
              </Text>
            </View>
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
                <MaterialCommunityIcons
                  name="wallet-plus"
                  size={24}
                  color="#767676"
                />
                <Text fontWeight={"medium"} color={"#767676"} ml={4}>
                  Nạp tiền
                </Text>
              </View>

              <Text color={"#767676"} fontWeight={"medium"}>
                3.000.000 đ
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
