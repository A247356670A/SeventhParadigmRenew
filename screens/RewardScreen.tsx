import * as React from 'react';
import {Button, Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Dialog from "react-native-dialog";
import {useState} from "react";
import { ScrollView, Dimensions, TouchableOpacity} from 'react-native';

// import {Avatar} from "@material-ui/core";

export default function RewardScreen() {
    function confirm(){
        setInputPopup(!isInputPopup);
        setConfirmPopup(!confirmPopup);
    }
    const [confirmPopup, setConfirmPopup] = useState(false);
    const [isInputPopup, setInputPopup] = useState(false);

    return (
        <ScrollView
            style={styles.scrollViewStyle}
            // horizontal={true}
            // pagingEnabled={true}
        >
        <View style={styles.container}>

            <View style={styles.container0}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/apple.jpg')}
                />
                <Text style={styles.title}> Apple     </Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>

                </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/banana.jpg')}
                />
                <Text style={styles.title}>Banana   </Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/macbook.jpg')}
                />
                <Text style={styles.title}>Macbook</Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/iphone.jpg')}
                />
                <Text style={styles.title}>Iphone    </Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}> $1 </Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}>$5</Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}>$10</Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}>$20 </Text>
                <TouchableOpacity onPress={() => setInputPopup(!isInputPopup)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>















            <View>
                <Dialog.Container visible={isInputPopup}>
                    <Dialog.Title>Message</Dialog.Title>
                    <Dialog.Description>
                        Redeem the prize?
                    </Dialog.Description>
                    {/*<Dialog.Input label={"input number"} onChangeText={(score: string) => handleScore(score)}/>*/}

                    <Dialog.Button label="confirm" onPress={() => confirm()}/>
                    <Dialog.Button label="cancel" onPress={() => setInputPopup(!isInputPopup)}/>
                    {/*<Dialog.Button label="Delete"  onPress={}/>*/}
                </Dialog.Container>
                <Dialog.Container visible={confirmPopup}>
                    <Dialog.Title>Congratulation!</Dialog.Title>
                    <Dialog.Description>
                        You have successfully redeemed your reward.
                    </Dialog.Description>
                    {/*<Dialog.Input label={"input number"} onChangeText={(score: string) => handleScore(score)}/>*/}

                    <Dialog.Button label="OK" onPress={() => setConfirmPopup(!confirmPopup)}/>
                </Dialog.Container>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    appButtonText: {
        fontSize: 13,
        color: "#fff",
        fontFamily: "Montserrat_700Bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#78d9a4",
        borderRadius: 10,
        paddingVertical: "3%",
        paddingHorizontal: "4%"
    },
    scrollViewStyle: {
        flex: 1,

    },
    container: {
        backgroundColor:"#F2F2F2",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        backgroundColor:"#F2F2F2",
        flexDirection:'row',
    },
    container0: {
        marginTop:"5%",
        backgroundColor:"#F2F2F2",
        flexDirection:'row',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width:"25%",
        marginRight: "11%",



    },
    separator: {
        marginVertical: 25,
        height: 1,
        width: '80%',
        backgroundColor:"#d6d6d6",


    },
    image:{
        width: 50,
        height: 40,
        marginRight:70,
        backgroundColor:"#F2F2F2",

    }
});
