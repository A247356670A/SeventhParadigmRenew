import * as React from 'react';
import {StyleSheet, Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {useState} from "react";
import CheckBox from '@react-native-community/checkbox';

export default function TaskScreen() {
    const [isElev, setElev] = useState(false);
    const [isGym, setGym] = useState(false);
    const [isDri, setDri] = useState(false);
    const [isCup, setCup] = useState(false);
    const userScoreAdd = () => {
        window.location = window.location
        // window.location.reload(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.bigBlue}>Tasks Screen</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isElev} onChange={userScoreAdd} onValueChange={setElev} style={styles.checkbox}/>

                <Text style={styles.label}>Stairs Not Elevator? {isElev ? '👍' : '👎'}</Text>

            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isGym} onValueChange={setGym} style={styles.checkbox}/>
                <Text style={styles.label}>Going to Gym? {isGym ? '👍' : '👎'}</Text>

            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isDri} onValueChange={setDri} style={styles.checkbox}/>
                <Text style={styles.label}>Not Driving to Work? {isDri ? '👍' : '👎'}</Text>

            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                <Text style={styles.label}>Using Your Own Cup? {isCup ? '👍' : '👎'}</Text>

            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                <Text style={styles.label}>Using Your Own Cup? {isCup ? '👍' : '👎'}</Text>

            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                <Text style={styles.label}>userScore {isCup ? '👍' : '👎'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});
