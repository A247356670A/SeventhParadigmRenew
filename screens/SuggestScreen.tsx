import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import Modal from "react-native-modal";
import {BarCodeScanner} from "expo-barcode-scanner";
import firebase from "firebase";


export default function SuggestScreen() {

    const [userScore, setUserScore] = useState(0);
    const database = firebase.database();
    const ScrollableTabView = require('react-native-scrollable-tab-view');

    useEffect(() => {

        (async () => {
            checkUserScore();
        })();
    }, []);

    function checkUserScore() {
        let ref = database.ref('starsLevel/' + 0 + '/level')
        ref.on("value", function (snapshot) {
            setUserScore(snapshot.val());
            console.log("data pulled" + userScore);
        });
    }


    return (
        <ScrollView style={styles.scrollViewStyle}>
            {userScore == 4 &&

            <View style={styles.container}>

                <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
                <Text style={styles.title}>Suggestions for Low Starer</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>REDUCE: </Text> Downsize what
                        you
                        purchase, opting to be mindful of what you need.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>REUSE: </Text> Always find a way
                        to keep an item out of the landfill by keeping it.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>ROT: </Text> Set up a compost
                        system for your food scraps, or find a food scrap.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>RECYCLE: </Text> Properly
                        recycle
                        any plastic, paper, glass or metal that comes.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText2}>REFUSE: </Text> Avoid single use
                        plastics and paper products by saying no thanks.</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            </View>}

            {userScore == 3 &&
            <View style={styles.container}>
                <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
                <Text style={styles.title}>Suggestions for Medium Starer</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText2}>REDUCE: </Text>
                        Use programmable thermostat that lower or raise the temperature when you’re not home to save electricity</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>REUSE: </Text>
                        Open windows to allow a breeze instead of turning on the air conditioning to save electricity in house</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText2}>ROT: </Text>
                        Use an electric teakettle rather than a stove-top kettle to boil water to save energy in heating water</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>RECYCLE: </Text>
                        Try growing your own food. Simply plant a few seeds in a corner of your yard or in a container on porch</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText1}>REFUSE: </Text>
                        Recycle as much as possible! If your neighborhood or apartment complex doesn’t offer recycling pickup</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            </View>}
            {userScore == 0 || userScore == 1 &&
            <View style={styles.container}>
                <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
                <Text style={styles.title}>Suggestions for High Starer</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText3}>REDUCE:</Text>
                        “Reduce, Reuse, Recycle” may feel retro but it’s just as important today as when the phrase was first coined</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText2}>REUSE:</Text>
                        Not everyone can run out and trade in their old gas-guzzling clunker for the latest planet-friendly hybrid car</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText3}>ROT:</Text>
                        You can start cutting down on your plastic waste in a few simple steps: use reusable bags when you go shopping</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText2}>RECYCLE:</Text>
                        Choose Fair Trade certified goods when possible to support companies dedicated to sustainable production</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceText3}>REFUSE:</Text>
                        Skip the bottled water. Bottled water companies try to give tap water a bad name, even though the water from your faucet</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            </View>}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '8%',
        paddingRight: '8%',
        backgroundColor:"#F2F2F2",
    },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat_700Bold",
        paddingRight: '30%',
        paddingBottom: '3%'
    },
    separator0: {
        marginVertical: "7%",
        flex: 1,
        width: '80%',
    },
    separator: {
        marginVertical: "9%",
        flex: 1,
        height: 1,
        width: '80%',
        backgroundColor:"#d6d6d6",
    },
    advice: {
        backgroundColor:"#F2F2F2",
        paddingTop: '1%',
        paddingBottom: '2%'
    },
    adviceText: {
        fontFamily: "Montserrat_400Regular",
    },
    adviceText1: {
        fontFamily: "Montserrat_700Bold",
        color: '#30d080'
    },
    adviceText2: {
        fontFamily: "Montserrat_700Bold",
        color: '#f69642'
    },
    adviceText3: {
        fontFamily: "Montserrat_700Bold",
        color: '#f53535'
    },
    scrollViewStyle: {
        flex: 1,
    }
});
