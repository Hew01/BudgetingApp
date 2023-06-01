import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Image
          source={require('../../../assets/images/CompanyName.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          accessibilityLabel="User Avatar"
        />
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Nguyễn Văn A</Text>
        <Text style={{ marginTop: 5 }}>nguyenvana@gmail.com</Text>
      </View>

      <View style={{ marginTop: 20, marginBottom: 10, flexDirection: 'row' }}>
        <Text style={{ color: 'black', marginRight: 5, marginLeft: 40 }}>Cài đặt</Text>
        <MaterialCommunityIcons name="chevron-right" size={20} color="#767676" />
      </View>

      <View style={{ backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', width: '80%', alignSelf: 'center' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginLeft: 15  }}>
          <MaterialCommunityIcons name="account-key-outline" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Tài khoản</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="lock-reset" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Đổi mật khẩu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="wallet" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Ví</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="cash" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Hạn mức chi tiêu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="bank" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Khoản tiền cố định</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="earth" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Thay đổi ngôn ngữ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="theme-light-dark" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Chế độ tối</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="history" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Lịch sử</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="file-export" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Xuất CSV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft: 15  }}>
          <MaterialCommunityIcons name="currency-usd" size={24} color="#1FA97C" />
          <Text style={{ marginLeft: 15 }}>Tỉ giá tiền tệ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 ,marginLeft: 15 }}>
          <MaterialCommunityIcons name="information-outline" size={24} color="#1FA97C"/>
          <Text style={{ marginLeft: 15 }}>Thông tin ứng dụng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;
