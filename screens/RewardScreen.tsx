import * as React from 'react';
import {Button, Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import Dialog from "react-native-dialog";
import {useState} from "react";
import { ScrollView, Dimensions, TouchableOpacity} from 'react-native';

// import {Avatar} from "@material-ui/core";

export default function RewardScreen() {


    const [isInputPopup, setInputPopup] = useState(false);

    return (
        <ScrollView
            style={styles.scrollViewStyle}
            // horizontal={true}
            // pagingEnabled={true}
        >
        <View style={styles.container}>

            <View style={{flexDirection:'row',marginTop:20, }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/apple.jpg')}
                />
                <Text style={styles.title}> Apple     </Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
                </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/banana.jpg')}
                />
                <Text style={styles.title}>Banana   </Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/macbook.jpg')}
                />
                <Text style={styles.title}>Macbook</Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/iphone.jpg')}
                />
                <Text style={styles.title}>Iphone    </Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}> $1 </Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}>$5</Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}>$10</Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={{flexDirection:'row', }}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/cash.jpg')}
                />
                <Text style={styles.title}>$20 </Text>
                <View style={{}}>
                    <Button
                        title="Redeem"
                        onPress={() => console.log(setInputPopup(!isInputPopup))}
                    />
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>















            <View>
                <Dialog.Container visible={isInputPopup}>
                    <Dialog.Title>Message</Dialog.Title>
                    <Dialog.Description>
                        Redeem the prize?
                    </Dialog.Description>
                    {/*<Dialog.Input label={"input number"} onChangeText={(score: string) => handleScore(score)}/>*/}

                    <Dialog.Button label="confirm" onPress={() => setInputPopup(!isInputPopup)}/>
                    <Dialog.Button label="cancel" onPress={() => setInputPopup(!isInputPopup)}/>
                    {/*<Dialog.Button label="Delete"  onPress={}/>*/}
                </Dialog.Container>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,

    },
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',



    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width:100,
        marginRight: 50



    },
    separator: {
        marginVertical: 25,
        height: 1,
        width: '80%',


    },
    image:{
        width: 50,
        height: 40,
        marginRight:70,


    }
});
