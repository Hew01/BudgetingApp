import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors/colors'

export default function FirstPage() {
    return (
        <View> styles={styles.container}
            <View styles={styles.content}>
                <Text styles={styles.subHeading}>Trước khi vào ứng dụng...</Text>
                <Text styles={styles.mainHeading}>Mục tiêu tài chính của bạn là gì?</Text>
                <View styles={styles.sectionContainer}>
                    <TouchableOpacity styles={styles.sectionSelector}>
                        <Icon></Icon>
                        <Text styles={styles.sectionText}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_white,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 55,
    },

})