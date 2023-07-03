import {
    Center,
    Text,
    Input,
    Button,
    View,
    Image,
    StatusBar,
    ScrollView,
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
  import MonthReportDetails from "./monthreportdetails";

  const renderScene = SceneMap({
    lastmonth0: MonthReportDetails ,
    lastmonth1: MonthReportDetails ,
    lastmonth2: MonthReportDetails ,
    lastmonth3: MonthReportDetails ,
    lastmonth4: MonthReportDetails ,
    lastmonth5: MonthReportDetails ,
    lastmonth6: MonthReportDetails ,
    lastmonth7: MonthReportDetails ,
    lastmonth8: MonthReportDetails ,
    lastmonth9: MonthReportDetails ,
    lastmonth10: MonthReportDetails ,
    lastmonth11: MonthReportDetails ,


  });
  
 
    
  
function ReportScreen() {
    var date = new Date();
    console.log(date);

    var lastMonths = [],
        monthNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    for (var i = 0; i < 12; i++) {
        lastMonths.unshift(monthNames[date.getMonth()] +'/'+ date.getFullYear());
        console.log(lastMonths);
        date.setMonth(date.getMonth() - 1);
    }
    const [index, setIndex] = useState(11);
    var currentDate=new Date();
    const [routes] = useState([
        { key: "lastmonth0", title: lastMonths[0] },
        { key: "lastmonth1", title: lastMonths[1] },
        { key: "lastmonth2", title: lastMonths[2] },
        { key: "lastmonth3", title: lastMonths[3]},
        { key: "lastmonth4", title: lastMonths[4] },
        { key: "lastmonth5", title: lastMonths[5] },
        { key: "lastmonth6", title: lastMonths[6] },
        { key: "lastmonth7", title: lastMonths[7] },
        { key: "lastmonth8", title: lastMonths[8] },
        { key: "lastmonth9", title: lastMonths[9] },
        { key: "lastmonth10", title: 'Tháng trước' },
        { key: "lastmonth11", title: 'Tháng này' },
    ]);
    
    return <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    renderTabBar={(props) => (
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={{ backgroundColor: "green" }}
        style={{ padding: 0, backgroundColor: "transparent" }}
        tabStyle={{ maxHeight: 50 ,width:120 }} // here
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
}

export default ReportScreen;