import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../../assets/colors/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { NativeIconAPI } from '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set';


export default function WalletList({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Inter-Medium': require('../../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Black': require('../../../assets/fonts/Inter-Black.ttf'),
        'Inter-Bold': require('../../../assets/fonts/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('../../../assets/fonts/Inter-ExtraBold.ttf'),
        'Inter-ExtraLight': require('../../../assets/fonts/Inter-ExtraLight.ttf'),
        'Inter-Light': require('../../../assets/fonts/Inter-Light.ttf'),
        'Inter-Regular': require('../../../assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../../../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Thin': require('../../../assets/fonts/Inter-Thin.ttf'),
    });

    const [textChanged, setTextChanged] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.totalcashContainer}>
                    <Text style={styles.totalcashText}>3,000,000 đ</Text>
                    <Text style={styles.subHeading}>Tổng tiền</Text>
                </View>
                <View style={styles.wlContent}>
                    <View style={styles.wlHeaders}>
                        <Text style={styles.wlHeaderText}>Danh sách ví</Text>
                        <Text
                            style={styles.wlSubHeaderText}
                            onPress={() => {
                                if (textChanged === false) {
                                    setTextChanged(true)
                                } else {
                                    setTextChanged(false)
                                }
                            }}>
                                {textChanged ? "Xong" : "Chỉnh sửa"}
                        </Text>
                    </View>
                    <View style={styles.wlContainer}>
                        <TouchableOpacity style={styles.wlSelector}>
                            <View style={styles.wlMoneh}>
                                <Ionicons name="md-cash" size={20} style={[styles.wlIonicons, styles.pd_10]}></Ionicons>
                                <Text style={[styles.wlText, styles.sideL]}>
                                    Tiền mặt
                                </Text>
                            </View>
                            { textChanged ? 
                                <Ionicons name="md-ellipsis-vertical" size={20} style={styles.wlIonicons}></Ionicons> :
                                <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>  
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <View style={styles.wlMoneh}>
                                <Ionicons name="md-cash" size={20} style={[styles.wlIonicons, styles.pd_10]}></Ionicons>
                                <Text style={[styles.wlText, styles.sideL]}>
                                    Tiền mặt
                                </Text>
                            </View>
                            { textChanged ? 
                                <Ionicons name="md-ellipsis-vertical" size={20} style={styles.wlIonicons}></Ionicons> :
                                <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>  
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <View style={styles.wlMoneh}>
                                <Ionicons name="md-cash" size={20} style={[styles.wlIonicons, styles.pd_10]}></Ionicons>
                                <Text style={[styles.wlText, styles.sideL]}>
                                    Tiền mặt
                                </Text>
                            </View>
                            { textChanged ? 
                                <Ionicons name="md-ellipsis-vertical" size={20} style={styles.wlIonicons}></Ionicons> :
                                <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>  
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wlSelector}>
                            <View style={styles.wlMoneh}>
                                <Ionicons name="md-cash" size={20} style={[styles.wlIonicons, styles.pd_10]}></Ionicons>
                                <Text style={[styles.wlText, styles.sideL]}>
                                    Tiền mặt
                                </Text>
                            </View>
                            { textChanged ? 
                                <Ionicons name="md-ellipsis-vertical" size={20} style={styles.wlIonicons}></Ionicons> :
                                <Text style={[styles.wlText, styles.sideR]}>3,000,000 đ</Text>  
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_grey,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    totalcashContainer: {
        width: '100%',
        backgroundColor: colors.background_white,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 30,
    },
    totalcashText: {
        fontSize: 35,
        paddingTop: 20,
        paddingHorizontal: 25,
        fontFamily: 'Inter-Medium',
    },
    subHeading: {
        fontSize: 21,
        fontFamily: 'Inter-Medium',
        paddingHorizontal: 25,
        paddingBottom: 20,
        color: colors.dark_grey,
    },
    wlContent: {
        height: 500,
        flex: 1,
        width: '100%',
    },
    wlHeaders: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wlHeaderText: {
        alignItems: 'flex-start',
        fontFamily: 'Inter-Bold',
        fontSize: 19,
        color: colors.dark_grey,
    },
    wlSubHeaderText: {
        alignItems: 'flex-end',
        color: colors.primary,
        fontFamily: 'Inter-Bold',
        fontSize: 16,
    },
    wlContainer: {
        marginTop: 13,
        borderRadius: 10,
        paddingVertical: 10,
        height: '100%',
        backgroundColor: colors.background_white,
    },
    wlSelector: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wlMoneh: {
        flexDirection: 'row',
        width: '40%',
    },
    wlText: {
        fontSize: 19,
        fontFamily: 'Inter-Regular',
    },
    sideL: {
        alignItems: 'flex-start',
    },
    sideR: {
        alignItems: 'flex-end',
    },
    wlIonicons: {
        flexDirection: 'row',
        marginTop: 3,
    },
    pd_10: {
        paddingRight: 10,
    },
});
