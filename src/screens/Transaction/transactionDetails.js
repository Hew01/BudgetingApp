import { Center, View, Text, Checkbox } from "native-base";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

function TransactionDetailsScreen() {
  const [edit, setEdit] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View pt={2} pl={4} pr={4} flex={1}>
      <View
        pl={4}
        pr={4}
        pt={2}
        pb={2}
        borderRadius={10}
        background={"white"}
        height={"86"}
      >
        <Text mr={2} fontWeight={"medium"} fontSize={28}>
          3.000.000 đ
        </Text>
        <Text color={"#1FA97C"} mr={2} fontWeight={"normal"} fontSize={14}>
          thứ 3, 7 tháng 3 2030
        </Text>
      </View>
      <View>
        {edit ? (
          <View
            alignItems={"flex-end"}
            mt={4}
            mb={2}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Text mr={2} color={"gray.600"} fontWeight={"medium"} fontSize={14}>
              Đã chọn {0}
            </Text>
            <View             alignItems={"flex-end"}
 flexDirection={"row"}>
              <MaterialCommunityIcons
                onPress={()=>{}}
                name="trash-can-outline"
                size={24}
                color="black"
              />
              <Text
              ml={4}
                onPress={() => setEdit(false)}
                mr={2}
                color={"gray.600"}
                fontWeight={"medium"}
                fontSize={13}
              >
                Xong
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View
              alignItems={"flex-end"}
              mt={4}
              mb={2}
              justifyContent={"space-between"}
              flexDirection={"row"}
            >
              <Text
                mr={2}
                color={"gray.600"}
                fontWeight={"medium"}
                fontSize={14}
              >
                Chi tiết các giao dịch
              </Text>
              <Text
                onPress={() => setEdit(true)}
                mr={2}
                color={"gray.600"}
                fontWeight={"medium"}
                fontSize={13}
              >
                Chỉnh sửa
              </Text>
            </View>
          </View>
        )}
        <View
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {edit ? (
            <View pr={2} pl={0}>
              <Checkbox value="test" accessibilityLabel=" " />
            </View>
          ) : (
            <View></View>
          )}
          <View
            paddingRight={4}
            pl={4}
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
                  color={"#767676"}
                  name="cash"
                  size={26}
                />
                <Text fontWeight={"medium"} ml={4}>
                  Tiền mặt
                </Text>
              </View>
            </View>
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="#767676"
                />
                <Text fontWeight={"medium"} ml={4}>
                  07/03/2020 - 14:00
                </Text>
              </View>
            </View>
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
                <MaterialCommunityIcons
                  name="note-text-outline"
                  size={24}
                  color="#767676"
                />
                <Text fontWeight={"medium"} ml={4}>
                  Đổ xăng đi học :D
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TransactionDetailsScreen;
