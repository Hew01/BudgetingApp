import {
  Center,
  Text,
  Input,
  Button,
  View,
  Image,
  StatusBar,
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  index,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useState } from "react";
import thisMonth from "./thismonth";
import lastMonth from "./lastmonth";


const renderScene = SceneMap({
  first: lastMonth,
  second: thisMonth,
});

export default function TransactionScreen() {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: "first", title: "Tháng trước" },
    { key: "second", title: "Tháng này" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: "green" }}
          style={{ padding: 0, backgroundColor: "transparent" }}
          tabStyle={{ maxHeight: 50 }} // here
          renderLabel={({ route, focused, color }) => (
            <View>
              {focused ? (
                <View>
                  <Text fontWeight={"medium"} fontSize={16} color={"black"}>
                    {route.title}
                  </Text>
                  <View height={3} width={300} color={"green.700"}></View>
                </View>
              ) : (
                <Text fontSize={16} color={"grey"}>
                  {route.title}
                </Text>
              )}
            </View>
          )}
        ></TabBar>
      )}
    />
  );
}
