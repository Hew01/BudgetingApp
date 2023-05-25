import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors/colors'
import { TouchableOpacity } from 'react-native-web'

export default function WalletList({ navigation }) {
    return (
        <View> styles={styles.container}
            <View style={styles.content}>
                <View style={styles.totalMoneyContainer}>
                    <Text style={styles.totalMoneyText}>3,000,000 đ</Text>
                    <Text style={styles.subHeading}>Tổng tiền</Text>
                </View>
                <View style={styles.wlContent}>
                    <Text style={styles.wlHeaders}>Danh sách ví</Text>
                    <Text style={[styles.wlHeaders, styles.wlSubHeaders]}>Chỉnh sửa</Text>
                    <View style={styles.wlContainer}>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={wlText}>
                                <Icon style={wlIcon}></Icon>
                                Tiền mặt
                            </Text>
                            <Text style={wlText}>3,000,000 đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={wlText}>
                                <Icon style={wlIcon}></Icon>
                                Tiền mặt
                            </Text>
                            <Text style={wlText}>3,000,000 đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={wlText}>
                                <Icon style={wlIcon}></Icon>
                                Tiền mặt
                            </Text>
                            <Text style={wlText}>3,000,000 đ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_grey,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 55,
    },
    totalMoneyContainer: {
        flex: 1,
        backgroundColor: colors.background_white,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 30,
    },
    totalMoneyText: {
        fontSize: 30,
        fontWeight: 500,
        paddingTop: 20,
        paddingHorizontal: 17,
        paddingBottom: 5,
    },
    subHeading: {
        fontSize: 16,
        fontWeight: 500,
        paddingTop: 5,
        paddingHorizontal: 17,
        paddingBottom: 20,
        color: colors.dark_grey,
    }

})