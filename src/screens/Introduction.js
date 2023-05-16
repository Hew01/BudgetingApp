import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../../styles';

export default function Introduction() {

  const handleRegisterClick = () => {
    console.log('Register button clicked');
    // perform actions on register button click
  }

  const handleLoginClick = () => {
    console.log('Login button clicked');
    // perform actions on login button click
  }
  
  return (
    <View style={[styles.container, styles.background1]}>
      <View style={styles.introductionContainerTop}>
        <Image
          style={styles.companyName}
          source={require('../../assets/images/CompanyName.png')}
           // picture moneymate
        />
         <Image
            source={require('../../assets/images/vector1.png')}
               // picture vector1
          />
          <Text style={styles.heading2}>
            Đơn giản hoá quản lí chi tiêu của bạn
          </Text>
          <View style={styles.introductionShiftMenuIcon}>
            <View style={styles.Ellipse2} />
            <View style={styles.Ellipse1} />
            <View style={styles.Ellipse3} />
          </View>      
          <View style={{marginBottom: 20}}>
           <TouchableOpacity style={styles.introductionRegButton} onPress={handleRegisterClick}>
             <Text style={styles.introductionRegName}>Đăng kí miễn phí</Text>
           </TouchableOpacity>
            <TouchableOpacity style={styles.introductionLoginButton} onPress={handleLoginClick}>
              <Text style={styles.introductionLoginName}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

      </View>

    </View>
  )
}