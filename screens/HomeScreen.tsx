import * as React from 'react';
import Dialog from "react-native-dialog";
import {
    StyleSheet, Button,
    Image, Dimensions, TouchableOpacity
} from 'react-native';
import * as Font from 'expo-font';


import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import firebase from "firebase";
import {Colors, List} from "react-native-paper";
import {useEffect, useState} from "react";
import Modal from "react-native-modal";
import {BarCodeScanner, BarCodeScannerResult} from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import Icon from "react-native-vector-icons/FontAwesome";
import App from "../App";
import {Montserrat_400Regular} from "@expo-google-fonts/montserrat";

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

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back);
    const [scanned, setScanned] = useState<boolean>(false);

    let imagePath: any;
    let imageStyle: any;

    useEffect(() => {

        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
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

    function updateUserScore(levelId: number, Score: number) {
        database.ref('starsLevel/' + levelId).set({
            level: Score

        }).then(function () {
            checkUserScore();
            console.log('Synchronization succeeded');
        })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
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

    // @ts-ignore
    const handleBarCodeScanned = ({type: type, data: data}) => {
        setScanned(true);
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
        if (data == 0 || data == 1) {
            updateUserScore(0, 1);
            setScanOn(false);
        } else if (data == 2) {
            updateUserScore(0, 2);
            setScanOn(false);

        } else if (data == 3) {
            updateUserScore(0, 3);
            setScanOn(false);

        } else if (data == 4) {
            updateUserScore(0, 4);
            setScanOn(false);

        } else {
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
                    fontFamily: "Montserrat_700Bold",
                    marginTop: "28%",
                    marginBottom: "1%",
                    color: 'black',
                    fontSize: 21,
                    // fontWeight: 'bold',
                }}>Welcome to
                </Text>
                <Text style={{
                    paddingBottom: "1%",
                    marginBottom: "1%",
                    color: 'black',
                    fontSize: 21,
                    fontFamily: "Montserrat_700Bold",
                }}>CO2 emission control system
                </Text>
                <Text style={{
                    marginBottom: "1%",
                    color: 'black',
                    fontSize: 17,
                    fontFamily: "Montserrat_400Regular",

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
                    fontFamily: "Montserrat_700Bold",
                }}>Congratulations!</Text>
                <Text style={{
                    paddingBottom: "2%",
                    color: 'black',
                    fontSize: 21,
                    fontFamily: "Montserrat_700Bold",
                }}>Please keep it up</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: "15%",
            }}>

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
                <TouchableOpacity onPress={() => setScanOn(true)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Scan</Text>
                </TouchableOpacity>
                {/*<Button*/}
                {/*    title="Scan"*/}
                {/*    onPress={() => setScanOn(true)}*/}
                {/*/>*/}
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
                                name={'arrow-left'}
                                onPress={() => setScanOn(false)}
                                color={Colors.white}
                                size={30}
                                style={{
                                    paddingLeft: "3%",
                                    paddingTop: "2%"
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
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontFamily: "Montserrat_700Bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#78d9a4",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },

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
        height: "47%",
    },
    twoStars: {
        marginBottom: "5%",
        width: "65%",
        height: "40%",
    },
    threeStars: {
        marginBottom: "5%",
        width: "90%",
        height: "40%",
    },
    fiveStars: {
        marginBottom: "5%",
        width: "90%",
        height: "40%",
    },
    unhappyFace: {
        marginBottom: "10%",
        width: "85%",
        height: "40%",
    },
});
