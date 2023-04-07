import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../styles';

export default function Introduction() {
    return (
      <View style={[styles.container, styles.background1]}>
        <View style={styles.introductionContainerTop}>
          <Image
            style={styles.companyName}
            source={require('../assets/images/CompanyName.png')}
          />
          <View style={styles.introductionContainerBottom}>
            <Image
              style={styles.vector1}
              source={require('../assets/images/vector1.png')}
            />
            <Text style={styles.heading2}>
              Đơn giản hoá quản lí chi tiêu của bạn
            </Text>
            <View style={styles.introductionShiftMenuIcon}>
              <View style={styles.Ellipse2} />
              <View style={styles.Ellipse1} />
              <View style={styles.Ellipse3} />
            </View>
            <View style={styles.introductionRegButton}>
              <Text style={styles.introductionRegName}>ĐĂNG KÍ MIỄN PHÍ</Text>
            </View>
            <View style={styles.introductionLoginButton}>
              <Text style={styles.introductionLoginName}>ĐĂNG NHẬP</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  
  