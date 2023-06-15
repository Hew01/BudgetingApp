import React from 'react';
import {  Image, TouchableOpacity } from 'react-native';
import { View,Text,Divider } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const UserScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View  borderBottomLeftRadius={35} borderBottomRightRadius={30} style={{ paddingBottom:10,paddingTop: 10, alignItems: 'center' }}>
        <Image
          source={require('../../../assets/images/CompanyName.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          accessibilityLabel="User Avatar"
        />
        <Text fontWeight={'semibold'} style={{ marginTop: 10, fontSize: 20 }}>Nguyễn Văn A</Text>
        <Text style={{ marginTop: 5 }}>nguyenvana@gmail.com</Text>
      </View>

      <View pl={4} pr={4} pt={2} >
      <Text mb={2} fontSize={15} color={'#767676'} fontWeight={'medium'}>Cài đặt</Text>
      <View justifyContent={'space-between'} pr={3} pb={2} pt={2} pl={3} h={420} style={{ backgroundColor: 'white', borderRadius: 10, width: '100%', alignSelf: 'center' }}>
        <TouchableOpacity style={{ width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="account-key-outline" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Tài khoản</Text>
        </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>
        <TouchableOpacity style={{ width:'100%' , justifyContent:'space-between',flexDirection: 'row', alignItems: 'center'  }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="lock-reset" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Đổi mật khẩu</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center'}}>
          <View flexDirection={'row'}>
          <MaterialCommunityIcons name="wallet" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Ví</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center'  }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="cash" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Hạn mức chi tiêu</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="bank" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Khoản tiền cố định</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center'  }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="earth" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Thay đổi ngôn ngữ</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="theme-light-dark" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Chế độ tối</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center'}}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="history" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Lịch sử</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="file-export" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Xuất CSV</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center'}}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="currency-usd" size={24} color="#1FA97C" />
          <Text fontSize={15} style={{ marginLeft: 20 }}>Tỉ giá tiền tệ</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
        <Divider></Divider>

        <TouchableOpacity style={{width:'100%' , justifyContent:'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View flexDirection={'row'}>
          <MaterialCommunityIcons name="information-outline" size={24} color="#1FA97C"/>
          <Text fontSize={15} style={{ marginLeft: 20 }}>Thông tin ứng dụng</Text>
          </View>
          <AntDesign name="right" size={18} color="#767676" />
        </TouchableOpacity>
      </View>
      </View>
      

      
    </View>
  );
};

export default UserScreen;
