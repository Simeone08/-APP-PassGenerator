import React from "react";
import { View, Text } from 'react-native';
import styles from './Style';

import { StatusBar } from 'expo-status-bar';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home(){
    return(
        <View style={styles.appContainer}>
            
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            
            <View style={styles.buttonContainer}>
                <BatButton />
            </View>

            <StatusBar style='inverted' />
        </View>
    );
}
