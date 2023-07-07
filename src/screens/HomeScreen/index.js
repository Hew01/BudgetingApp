import { Button, Center, Text } from 'native-base';
import NAVIGATION_KEY from '../../../constans/NavigationKey';
function HomeScreen({ navigation }) {
    return (
        <Center flex={1}>
            <Text mb={6}>Home Screen 🔥</Text>
            <Button onPress={() => navigation.navigate(NAVIGATION_KEY.SamplePopup)}>Open Popup</Button>
        </Center>
    );
}

<<<<<<< Updated upstream
export default HomeScreen;
=======

export default function HomeScreen({ navigation }) {
  const [index, setindex] = useState(0);
  return (
    <View pl={4} pr={4} flex={1}>
      <ScrollView>
        <View flexDirection={"row"}>
          <Text pt={3} mr={2} fontWeight={"medium"} fontSize={22}>
            3.000.000 đ
          </Text>
        </View>
        <View>
          <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={14}>
            Số dư hiện tại
          </Text>
          <View
            paddingRight={6}
            pl={6}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRadius={10}
            height={"16"}
            backgroundColor={"white"}
            flexDirection={"row"}
          >
            <View alignItems={"center"}>
              <Text color={"#767676"} fontWeight={"medium"} fontSize={18}>
                Thu nhập
              </Text>
              <Text color={"green.700"} fontSize={18}>
                +2.000.000 đ
              </Text>
            </View>
            <View alignItems={"center"}>
              <Text color={"#767676"} fontWeight={"medium"} fontSize={18}>
                Chi tiêu
              </Text>
              <Text color={"red.600"} fontSize={18}>
                -2.000.000 đ
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            alignItems={"flex-end"}
            mt={4}
            mb={0}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={14}>
              {" "}
              Ví của tôi
            </Text>
            <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={12}>
              Xem tất cả
            </Text>
          </View>
          <View
            paddingRight={6}
            pl={6}
            paddingTop={2}
            pb={2}
            borderRadius={10}
            height={"20"}
            backgroundColor={"white"}
            flexDirection={"column"}
          >
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
              <Fontisto name="wallet" size={24} color="#767676" />
              <Text ml={4}>Tiền mặt</Text>
              </View>

              <Text>3.000.000 đ</Text>
            </View>
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
                <FontAwesome name="credit-card-alt" size={16} color="#767676" />
                <Text ml={4}>Vietcombank</Text>
              </View>

              <Text>3.000.000 đ</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            alignItems={"flex-end"}
            mt={4}
            mb={0}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={14}>
              {" "}
              Báo cáo chi tiêu
            </Text>
            <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={12}>
              Xem báo cáo{" "}
            </Text>
          </View>
        </View>
        <View py={5} px={3} borderRadius={10} background={"white"} height={"420"}>
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
                    <Text>Tuần</Text>
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
                    <Text>Tháng</Text>
                  </Button>
                </View>
                <WeekReportScreen/>
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
                    <Text>Tuần</Text>
                  </Button>
                  <Button
                    borderRadius={5}
                    padding={-1}
                    background={"white"}
                    width={"40"}
                    height={7}
                    onPress={() => setindex(1)}
                  >
                    <Text>Tháng</Text>
                  </Button>
                </View>
                <MonthReportScreen/>

              </View>
            )}
          </View>
        </View>
        <View>
          <View
            alignItems={"flex-end"}
            mt={4}
            mb={0}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={14}>
              {" "}
              Giao dịch gần đây
            </Text>
            <Text pb={3} mr={2} color={"gray.600"} fontWeight={"normal"} fontSize={12}>
              Xem tất cả
            </Text>
          </View>
          <View
            paddingRight={6}
            pl={6}
            paddingTop={2}
            pb={2}
            borderRadius={10}
            height={"20"}
            backgroundColor={"white"}
            flexDirection={"column"}
          >
            <View
              flex={"1"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <View alignItems={"center"} flexDirection={"row"}>
              <MaterialCommunityIcons name="wallet-plus" size={24} color="#767676" />                
              <Text ml={4}>Thêm vào ví</Text>
              </View>

              <Text>3.000.000 đ</Text>
            </View>
            <View
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <View mt={1} alignItems={"center"} flexDirection={"row"}>
              <MaterialCommunityIcons name="fuel" size={24} color="#767676" />
              <Text ml={4}>Xăng</Text>
            </View>
            <Text color={'red.600'}>400.000 đ</Text>
          </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
>>>>>>> Stashed changes
