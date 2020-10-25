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
            {userScore == 0 || userScore == 1 &&

            <View style={styles.container}>

                <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
                <Text style={styles.title}>Suggestions for one star</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REDUCE: </Text> Downsize what
                        you
                        purchase, opting to be mindful of what you need.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REUSE: </Text> Always find a way
                        to keep an item out of the landfill by keeping it.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>ROT: </Text> Set up a compost
                        system for your food scraps, or find a food scrap.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>RECYCLE: </Text> Properly
                        recycle
                        any plastic, paper, glass or metal that comes.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REFUSE: </Text> Avoid single use
                        plastics and paper products by saying no thanks.</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            </View>}
            {userScore == 3 &&
            <View style={styles.container}>
                <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
                <Text style={styles.title}>Suggestions for three star</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REDUCE: </Text> Downsize what
                        you
                        purchase, opting to be mindful of what you need.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REUSE: </Text> Always find a way
                        to keep an item out of the landfill by keeping it.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>ROT: </Text> Set up a compost
                        system for your food scraps, or find a food scrap.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>RECYCLE: </Text> Properly
                        recycle
                        any plastic, paper, glass or metal that comes.</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REFUSE: </Text> Avoid single use
                        plastics and paper products by saying no thanks.</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            </View>}
            {userScore == 4 &&
            <View style={styles.container}>
                <View style={styles.separator0} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
                <Text style={styles.title}>Suggestions for five star</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REDUCE:</Text> Downsize what you
                        purchase, opting to be mindful of what you need</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REUSE:</Text> Always find a way
                        to keep an item out of the landfill by keeping it</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>ROT:</Text> Set up a compost
                        system for your food scraps, or find a food scrap</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>RECYCLE:</Text> Properly recycle
                        any plastic, paper, glass or metal that comes</Text>
                </View>

                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                <View style={styles.advice}>
                    <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REFUSE:</Text> Avoid single use
                        plastics and paper products by saying no thanks</Text>
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
    adviceTextBold: {
        fontFamily: "Montserrat_700Bold",
        color: '#30d080'
    },
    scrollViewStyle: {
        flex: 1,
    }
});
