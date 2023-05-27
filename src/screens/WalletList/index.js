import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors/colors'
import Ionicons from '@expo/vector-icons/Ionicons';

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
                    <Text style={styles.wlSubHeaders}>Chỉnh sửa</Text>
                    <View style={styles.wlContainer}>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={[styles.wlText, styles.sideL]}>
                                <Ionicons name="md-checkmark-circle" style={styles.wlIonicons}></Ionicons>
                                Tiền mặt
                            </Text>
                            <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={[styles.wlText, styles.sideL]}>
                                <Ionicons name="md-checkmark-circle" style={styles.wlIonicons}></Ionicons>
                                Tiền mặt
                            </Text>
                            <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={[styles.wlText, styles.sideL]}>
                                <Ionicons name="md-checkmark-circle" style={styles.wlIonicons}></Ionicons>
                                Tiền mặt
                            </Text>
                            <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <Text style={[styles.wlText, styles.sideL]}>
                                <Ionicons name="md-checkmark-circle" style={styles.wlIonicons}></Ionicons>
                                Tiền mặt
                            </Text>
                            <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>
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
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 55,
    },
    totalMoneyContainer: {
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
    },
    wlContent: {
        height: 500,
        flex: 1,
    },
    wlHeaders: {
        alignItems: 'flex-start',
        fontWeight: 600,
        fontSize: 14,
        color: colors.dark_grey,
    },
    wlSubHeaders: {
        alignItems: 'flex-end',
        color: colors.primary,
        fontWeight: 600,
        fontSize: 13,
    },
    wlContainer: {
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: colors.background_white,
    },
    wlSelector: {
        paddingVertical: 15,
        paddingHorizontal: 40,
    },
    wlText: {
        fontSize: 13,
        fontWeight: 400,
    },
    sideL: {
        alignItems: 'flex-start',
    },
    sideR: {
        alignItems: 'flex-end',
    }
})