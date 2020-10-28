import * as React from 'react';
import {StyleSheet, Button, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {useState} from "react";
import CheckBox from '@react-native-community/checkbox';

export default function TaskScreen() {
    const [isElev, setElev] = useState(false);
    const [isGym, setGym] = useState(false);
    const [isDri, setDri] = useState(false);
    const [isCup, setCup] = useState(false);
    const [isEx, setEx] = useState(false);
    const [isLight, setLight] = useState(false);
    return (

        <ScrollView style={styles.scrollViewStyle}>

        <View style={styles.container}>
            <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>

            <Text style={styles.title}>Finish Tasks to Boost Your Score!</Text>

            <View style={styles.separator} lightColor="#eee" darkColor="#78d9a4"/>

            <View style={styles.checkboxContainer}>
                <CheckBox value={isElev} onValueChange={setElev} style={styles.checkbox}/>

                <Text style={styles.label}>Stairs Not Elevator?     </Text>
                <Text style={styles.label1}>{isElev ? '👍' : '👎'}</Text>

            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="#78d9a4"/>

            <View style={styles.checkboxContainer}>
                <CheckBox value={isGym} onValueChange={setGym} style={styles.checkbox}/>
                <Text style={styles.label}>Going to the Gym?       </Text>
                <Text style={styles.label1}>{isGym ? '👍' : '👎'}</Text>

            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="#78d9a4"/>

            <View style={styles.checkboxContainer}>
                <CheckBox value={isDri} onValueChange={setDri} style={styles.checkbox}/>
                <Text style={styles.label}>Not Driving to Work?  </Text>
                <Text style={styles.label1}>{isDri ? '👍' : '👎'}</Text>

            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="#78d9a4"/>

            <View style={styles.checkboxContainer}>
                <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                <Text style={styles.label}>Using Your Own Cup?    </Text>
                <Text style={styles.label1}>{isCup ? '👍' : '👎'}</Text>

            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="#78d9a4"/>

            <View style={styles.checkboxContainer}>
                <CheckBox value={isEx} onValueChange={setEx} style={styles.checkbox}/>
                <Text style={styles.label}>Have Exercised Today? </Text>
                <Text style={styles.label1}>{isEx ? '👍' : '👎'}</Text>

            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="#78d9a4"/>

            <View style={styles.checkboxContainer}>
                <CheckBox value={isLight} onValueChange={setLight} style={styles.checkbox}/>
                <Text style={styles.label}>Lights out when sleep?</Text>
                <Text style={styles.label1}>{isLight ? '👍' : '👎'}</Text>
            </View>

        </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#F2F2F2",

    },
    scrollViewStyle: {
        flex: 1,

        },
    title: {
        fontSize: 18,
        fontFamily: "Montserrat_700Bold",
    },
    separator0: {
        marginVertical: 20,
        height: 2,
        width: '80%',
        backgroundColor:"#F2F2F2",
    },
    separator: {
        marginVertical: 20,
        height: 2,
        width: '80%',
        backgroundColor:"#d6d6d6",
    },
    checkboxContainer: {
        backgroundColor:"#F2F2F2",
        flexDirection: 'row',
        marginBottom: 15,
        alignSelf: "flex-start",
        paddingLeft: "15%",
        alignItems: "stretch",
    },
    checkbox: {
        alignSelf: 'flex-start',
    },
    label: {
        margin: 8,
        fontFamily: "Montserrat_700Bold",
        color: "#395245"
    },
    label1:{
        margin: 8,

        paddingRight: "1%",
        alignItems: "stretch",
        alignSelf: "flex-end",
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});