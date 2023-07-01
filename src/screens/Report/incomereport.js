import { Center, Text, Input, Button, View, Image } from 'native-base';
import { BarChart } from "react-native-chart-kit";
import { MaterialIcons ,MaterialCommunityIcons} from "@expo/vector-icons";

const data = {
  labels: ["Mon", " Tues", "Wed", "Thurs"],
  datasets: [
    {
      data: [200, 280,  199, 230],
    },
  ],
};
export default function IncomeReportScreen() {
  
  return (
    <View mt={2}>
                  <Text fontWeight={"medium"} fontSize={22}>
                    2.700.000 đ
                  </Text>
                  <Text color={"gray.600"} fontWeight={"normal"} fontSize={14}>
                    Số dư hiện tại
                  </Text>
                  <View ml={-2} height={180} width={"full"}>
                    <BarChart
                      data={data}
                      width={"300"}
                      height={180}
                      yAxisLabel={""}
                      chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        barPercentage: 1,
                        height: 5000,
                        fillShadowGradient: `rgba(217, 217, 217, 1)`,
                        fillShadowGradientOpacity: 1,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(217, 217, 217, 1)`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

                        style: {
                          borderRadius: 16,
                          fontFamily: "Bogle-Regular",
                        },

                        propsForBackgroundLines: {
                          strokeWidth: 0,
                          stroke: "#e3e3e3",
                          strokeDasharray: "0",
                        },
                      }}
                    />
                  </View>
                  <View>
        <Text mt={2} fontWeight={"medium"} fontSize={20}>
          Chi tiêu nhiều nhất
        </Text>
        <View>
          <View
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <View mt={1} alignItems={"center"} flexDirection={"row"}>
              <MaterialCommunityIcons name="fuel" size={24} color="#767676" />
              <Text ml={4}>Xăng</Text>
            </View>
            <Text>400.000 đ</Text>
          </View>
          <View
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <View mt={1} alignItems={"center"} flexDirection={"row"}>
              <MaterialIcons name="power" size={24} color="#767676" />
              <Text ml={4}>Điện</Text>
            </View>
            <Text>300.000 đ</Text>
          </View>
        </View>
      </View>
                </View>
  );
}