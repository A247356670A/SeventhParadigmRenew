import * as React from 'react';
import Dialog from "react-native-dialog";
import {
    StyleSheet, Button,
    Image,
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import firebase from "firebase";
import {List} from "react-native-paper";
import {useState} from "react";

export default function HomeScreen() {
    const [isInputPopup, setInputPopup] = useState(false);
    const [userScore, setUserScores] = useState(2);

    const database = firebase.database();
    // async function getUserScore() {
    //     const snapshot = await database.ref('starsLevel/' + 0 + '/level').once('value');
    //     return snapshot.val()
    // }
    //
    // const userScore = await getUserScore();


    let imagePath: any;
    let imageStyle: any;


    // userScore.on("child_added", function(snapshot){
    //     console.log(snapshot.val().word);
    //     console.log(snapshot.val().definition);
    // });
    function updateUserScore() {
        // let userScore: number;
        let ref = database.ref('starsLevel/' + 0 + '/level')
        ref.on("value", function (snapshot) {
            setUserScores(snapshot.val());
            // updateUserScore(snapshot.val());
            console.log("data pulled" + userScore);
            // HomeScreen();


        });
    }

    function setUserScore(levelId:number, Score:number) {
        database.ref('starsLevel/' + levelId).set({
            level: Score

        }).then(function () {
            updateUserScore();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }

    function writeUserData(userId: number, name: string, email: string) {
        database.ref('users/' + userId).set({
            username: name,
            email: email,
        }).then(function () {
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }

    function handleScore(score:number){
        setUserScores(score);
        console.log(userScore)
    }

    // @ts-ignore
    if (userScore == 0 || userScore == 1) {
        imagePath = require('../assets/images/one_star.png');
        imageStyle = styles.oneStar;
    } else { // @ts-ignore
        if (userScore == 2) {
            imagePath = require('../assets/images/two_star.png');
            imageStyle = styles.twoStars;

        } else { // @ts-ignore
            if (userScore == 3) {
                imagePath = require('../assets/images/three_star.png');
                imageStyle = styles.threeStars;
            } else { // @ts-ignore
                if (userScore == 4) {
                    imagePath = require('../assets/images/five_star.png');
                    imageStyle = styles.fiveStars;
                } else {
                    imagePath = require('../assets/images/unhappy-face.png');
                    imageStyle = styles.unhappyFace;
                }
            }
        }
    }

    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskContainer}>
                <Text style={{
                    fontFamily: "Montserrat",
                    marginTop: "28%",
                    marginBottom: "1%",
                    color: 'black',
                    fontSize: 21,
                    fontWeight: 'bold',
                }}>Welcome to
                </Text>
                <Text style={{
                    paddingBottom: "1%",
                    marginBottom: "1%",
                    color: 'black',
                    fontSize: 21,
                    fontWeight: 'bold',
                }}>CO2 emission control system
                </Text>
                <Text style={{
                    marginBottom: "1%",
                    color: 'black',
                    fontSize: 17,
                }}>Today your level is
                </Text>

            </View>
            <View style={{
                zIndex: 10,
                marginTop: "25%",
                backgroundColor: "#009966",
                alignItems: 'center',
                justifyContent: 'center',
                width: 225,
                height: 225,
                borderRadius: 225 / 2,
            }}>
                <View style={{
                    zIndex: 99,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#8ee6b6",
                    // backgroundGradientFrom: "#8ee6b6",
                    // backgroundGradientFromOpacity: 0.5,
                    // backgroundGradientTo: "#5fd393",
                    // backgroundGradientToOpacity: 0.5,
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                }}>
                    <Image style={imageStyle}
                           source={imagePath}/>
                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text style={{
                    marginTop: "15%",
                    paddingBottom: "2%",
                    color: 'black',
                    fontSize: 21,
                    fontWeight: 'bold',
                }}>Congratulations!</Text>
                <Text style={{
                    paddingBottom: "2%",
                    color: 'black',
                    fontSize: 21,
                    fontWeight: 'bold',
                }}>Please keep it up</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: "15%",
            }}>

                <Button
                    title="scan"
                    onPress={() => updateUserScore()}
                    //writeUserData(1,'1Home_Details',"1247556670@qq.com")
                />
                <View>
                    <Dialog.Container visible={isInputPopup}>
                        <Dialog.Title>Account delete</Dialog.Title>
                        <Dialog.Description>
                            Do you want to delete this account? You cannot undo this action.
                        </Dialog.Description>
                        {/*<Dialog.Input label={"input number"} onChangeText={(score: string) => handleScore(score)}/>*/}

                        <Dialog.Button label="Cancel" onPress={() => setInputPopup(!isInputPopup)}/>
                        {/*<Dialog.Button label="Delete"  onPress={}/>*/}
                    </Dialog.Container>
                </View>
                <Button
                    title="update"
                    onPress={() => console.log(setUserScore(0,6))}
                />
                <Button
                    title="test"
                    onPress={() => console.log(setInputPopup(!isInputPopup))}
                />

            </View>
            <View style={styles.taskContainer}></View>
            {/*<View style={styles.taskContainer}></View>*/}
            {/*<Text style={styles.red}>Home Screen</Text>*/}

        </View>
    );

}
const styles = StyleSheet.create({
    taskContainer: {
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
    oneStar: {
        marginBottom: "5%",
        width: "45%",
        height: "40%",
    },
    twoStars: {
        marginBottom: "5%",
        width: "65%",
        height: "40%",
    },
    threeStars: {
        marginBottom: "5%",
        width: "75%",
        height: "40%",
    },
    fiveStars: {
        marginBottom: "5%",
        width: "80%",
        height: "40%",
    },
    unhappyFace: {
        marginBottom: "10%",
        width: "85%",
        height: "40%",
    },
});
