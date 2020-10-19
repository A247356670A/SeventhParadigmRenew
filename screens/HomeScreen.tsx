import * as React from 'react';
import Dialog from "react-native-dialog";
import {
    StyleSheet, Button,
    Image, Dimensions, TouchableOpacity
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import firebase from "firebase";
import {Colors, List} from "react-native-paper";
import {useEffect, useState} from "react";
import Modal from "react-native-modal";
import {BarCodeScanner, BarCodeScannerResult} from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import Icon from "react-native-vector-icons/FontAwesome";

const finderWidth: number = 280;
const finderHeight: number = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

export default function HomeScreen() {
    const [isInputPopup, setInputPopup] = useState(false);
    const [userScore, setUserScore] = useState(0);
    const [isScanOn, setScanOn] = useState(false);

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

    function updateUserScore(levelId: number, Score: number) {
        database.ref('starsLevel/' + levelId).set({
            level: Score

        }).then(function () {
            // let userScore: number;
            let ref = database.ref('starsLevel/' + 0 + '/level')
            ref.on("value", function (snapshot) {
                setUserScore(snapshot.val());
                // updateUserScore(snapshot.val());
                console.log("data pulled" + userScore);
                // HomeScreen();
            });
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }

    // function writeUserData(userId: number, name: string, email: string) {
    //     database.ref('users/' + userId).set({
    //         username: name,
    //         email: email,
    //     }).then(function () {
    //         console.log('Synchronization succeeded');
    //     })
    //         .catch(function (error) {
    //             console.log('Synchronization failed');
    //         });
    // }

    // function handleScore(score:number){
    //     setUserScore(score);
    //     console.log(userScore)
    // }

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


    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back);
    const [scanned, setScanned] = useState<boolean>(false);


    useEffect(() => {

        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    //     if (!scanned) {
    //         const {type, data, bounds: {origin} = {}} = scanningResult;
    //         // @ts-ignore
    //         const {x, y} = origin;
    //         if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
    //             setScanned(true);
    //             alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    //         }
    //     }
    // };
    // @ts-ignore
    const handleBarCodeScanned = ({type: type, data: data}) => {
        setScanned(true);
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
        if (data == 0 || data == 1) {
            updateUserScore(0,1);
            setScanOn(false);
        } else if (data == 2) {
            updateUserScore(0,2);
            setScanOn(false);

        } else if (data == 3) {
            updateUserScore(0,3);
            setScanOn(false);

        } else if (data == 4){
            updateUserScore(0,4);
            setScanOn(false);

        }else {
            alert('undefined code scanned');
            setScanOn(false);
            console.log("undefined code scanned");
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskContainer}>
                <Text style={{
                    // fontFamily: "Montserrat",
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
                backgroundColor: "#d8f5e3",
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
                    backgroundColor: "#baedcf",
                    // backgroundGradientFrom: "#8ee6b6",
                    // backgroundGradientFromOpacity: 0.5,
                    // backgroundGradientTo: "#5fd393",
                    // backgroundGradientToOpacity: 0.5,
                    width: 190,
                    height: 190,
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

                {/*<Button*/}
                {/*    title="scan"*/}
                {/*    onPress={() => updateUserScore()}*/}
                {/*    //writeUserData(1,'1Home_Details',"1247556670@qq.com")*/}
                {/*/>*/}
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
                    title="scan"
                    onPress={() => console.log(updateUserScore(0, userScore))}
                />
                <Button
                    title="test"
                    onPress={() => console.log(setInputPopup(!isInputPopup))}
                />
                <Button
                    title="testScan"
                    onPress={() => setScanOn(true)}
                />
                <Modal style={styles.login} isVisible={isScanOn}>
                    <BarCodeScanner onBarCodeScanned={handleBarCodeScanned}
                                    type={type}
                                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                                    style={[StyleSheet.absoluteFillObject, styles.barCodeContainer]}>

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <Icon
                                name={'user'}
                                onPress={() => setScanOn(false)}
                                color={Colors.white}
                                size={30}
                                style={{
                                    paddingLeft: "3%",
                                    paddingTop: "1%"
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                }}

                                onPress={() => {
                                    setType(
                                        type === BarCodeScanner.Constants.Type.back
                                            ? BarCodeScanner.Constants.Type.front : BarCodeScanner.Constants.Type.back
                                    );
                                }}>
                                <Text style={{fontSize: 18, margin: 5, color: 'white'}}> Flip </Text>
                            </TouchableOpacity>
                        </View>

                        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
                        {scanned && <Button title="Scan Again" onPress={() => setScanned(false)}/>}

                    </BarCodeScanner>
                </Modal>


            </View>
            <View style={styles.taskContainer}></View>
            {/*<View style={styles.taskContainer}></View>*/}
            {/*<Text style={styles.red}>Home Screen</Text>*/}

        </View>
    );

}
const styles = StyleSheet.create({
    login: {
        display: 'flex',
        position: 'absolute',
        borderRadius: 20,
        padding: '10%',
        width: '80%',
        height: '85%',
        left: '5%',
        top: '5%',
        backgroundColor: 'transparent',

    },
    barCodeContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
