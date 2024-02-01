// npx expo start --tunnel

import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Home() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Hello World!</Text>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
