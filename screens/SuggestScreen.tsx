import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

export default function SuggestScreen() {

return (
    <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.container}>

            <View style={styles.separator} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
            <Text style={styles.title}>Suggestions for Improvement</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REDUCE:</Text> Downsize what you purchase, opting to be mindful of what you need</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REUSE:</Text> Always find a way to keep an item out of the landfill by keeping it</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>ROT:</Text> Set up a compost system for your food scraps, or find a food scrap</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>RECYCLE:</Text> Properly recycle any plastic, paper, glass or metal that comes</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REFUSE:</Text> Avoid single use plastics and paper products by saying no thanks</Text>
            </View>

        </View>
</ScrollView>

    /*<ScrollView style={styles.scrollViewStyle}>
        <View style={styles.container}>

            <View style={styles.separator} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
            <Text style={styles.title}>111111111111111111111111111</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REDUCE:</Text> Downsize what you purchase, opting to be mindful of what you need</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REUSE:</Text> Always find a way to keep an item out of the landfill by keeping it</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>ROT:</Text> Set up a compost system for your food scraps, or find a food scrap</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>RECYCLE:</Text> Properly recycle any plastic, paper, glass or metal that comes</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REFUSE:</Text> Avoid single use plastics and paper products by saying no thanks</Text>
            </View>

        </View>
    </ScrollView>*/

    /*<ScrollView style={styles.scrollViewStyle}>
        <View style={styles.container}>

            <View style={styles.separator} lightColor="#fff" darkColor="rgba(255,255,255,0.1)"/>
            <Text style={styles.title}>222222222222222222222222222</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REDUCE:</Text> Downsize what you purchase, opting to be mindful of what you need</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REUSE:</Text> Always find a way to keep an item out of the landfill by keeping it</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>ROT:</Text> Set up a compost system for your food scraps, or find a food scrap</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>RECYCLE:</Text> Properly recycle any plastic, paper, glass or metal that comes</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <View style={styles.advice}>
                <Text style={styles.adviceText}><Text style={styles.adviceTextBold}>REFUSE:</Text> Avoid single use plastics and paper products by saying no thanks</Text>
            </View>

        </View>
    </ScrollView>*/
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "serif"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    advice: {

    },
    adviceText: {
        fontFamily: "sans-serif",
    },
    adviceTextBold: {
        fontWeight: 'bold',
        color: '#30d080'
    },
    scrollViewStyle: {
        flex: 1,
    }
});
