import * as React from 'react';
import {StyleSheet, ScrollView, Button, Dimensions, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import {useEffect, useState} from 'react';
import {Text, View} from '../components/Themed';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import {Montserrat_700Bold} from "@expo-google-fonts/montserrat";
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import firebase from "firebase";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RecordScreen() {
    const [userScore, setUserScore] = useState(0);
    const database = firebase.database();

    function checkUserScore() {
        let ref = database.ref('starsLevel/' + 0 + '/level')
        ref.on("value", function (snapshot) {
            setUserScore(snapshot.val());
            console.log("data pulled" + userScore);
        });
    }

    useEffect(() => {

        (async () => {
            checkUserScore();
        })();
    }, []);
    const chartConfig = {

        backgroundGradientFrom: "#f2f2f2",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#f2f2f2",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(5, 101, 52, ${opacity})`,
        barPercentage: 0.5,
        decimalPlaces: 0, // optional, defaults to 2dp
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };


    return (
        <ScrollableTabView
            initialPage={0}
            tabBarTextStyle={{
                fontFamily: "Montserrat_700Bold",
            }}
            tabBarInactiveTextColor={'white'}
            tabBarActiveTextColor={'#489145'}
            tabBarUnderlineStyle={styles.underlineStyle}
            renderTabBar={() => <ScrollableTabBar
                style={{
                    backgroundColor: '#78d9a4',
                    borderBottomLeftRadius: 70,
                    paddingBottom: "5%",
                    height: "10%",
                }}/>}
        >
            <ScrollView
                style={styles.scrollViewStyle}
                tabLabel='Shopping'
                // horizontal={true}
                // pagingEnabled={true}
            >
                {userScore == 2 &&
                <View style={{backgroundColor: '#f2f2f2',}}>
                    <View style={styles.record01}>
                    <Text style={styles.bigText}>Shopping record</Text>

                    <BarChart
                        yAxisSuffix="k"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {// @ts-ignore
                                    data: [20, 45, 28, 80, 0, 0, 0],
                                },
                            ],
                        }}
                        style={{
                            padding: '1%',
                            backgroundColor: '#f2f2f2',
                        }}
                        width={width * 0.8}
                        height={height * 0.4}
                        yAxisLabel="Co2:  "
                        chartConfig={chartConfig}
                    />
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Co2 Consumption Today</Text>
                        <Text style={styles.bigText}>0 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Last Co2 Consumption</Text>
                        <Text style={styles.bigText}>25 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Changes to last shopping</Text>
                        <Text style={styles.bigText}>-45%</Text>
                    </View>
                </View>
                }
                {(userScore == 1 || userScore == 0) &&
                <View style={{backgroundColor: '#f2f2f2',}}>
                    <View style={styles.record01}>
                    <Text style={styles.bigText}>Shopping record</Text>

                    <BarChart
                        yAxisSuffix="k"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {// @ts-ignore
                                    data: [20, 45, 28, 80, 33, 0, 0],
                                },
                            ],
                        }}
                        style={{
                            padding: '1%',
                            backgroundColor: '#f2f2f2',
                        }}
                        width={width * 0.8}
                        height={height * 0.4}
                        yAxisLabel="Co2:  "
                        chartConfig={chartConfig}
                    />
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Co2 today</Text>
                        <Text style={styles.bigText}>33 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Last Co2 Consumption</Text>
                        <Text style={styles.bigText}>33 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Changes to last shopping</Text>
                        <Text style={styles.bigText}>+33%</Text>
                    </View>
                </View>
                }
                {userScore == 3 &&
                <View style={{backgroundColor: '#f2f2f2',}}>
                    <View style={styles.record01}>
                    <Text style={styles.bigText}>Shopping record</Text>

                    <BarChart
                        yAxisSuffix="k"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {// @ts-ignore
                                    data: [20, 45, 28, 80, 54, 0, 0],
                                },
                            ],
                        }}
                        style={{
                            padding: '1%',
                            backgroundColor: '#f2f2f2',
                        }}
                        width={width * 0.8}
                        height={height * 0.4}
                        yAxisLabel="Co2:  "
                        chartConfig={chartConfig}
                    />
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Co2 today</Text>
                        <Text style={styles.bigText}>54 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Last Co2 Consumption</Text>
                        <Text style={styles.bigText}>21 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Changes to last shopping</Text>
                        <Text style={styles.bigText}>-36%</Text>
                    </View>
                </View>
                }
                {userScore == 4 &&
                <View style={{backgroundColor: '#f2f2f2',}}>
                    <View style={styles.record01}>
                    <Text style={styles.bigText}>Shopping record</Text>

                    <BarChart
                        yAxisSuffix="k"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {// @ts-ignore
                                    data: [20, 45, 28, 80, 64, 0, 0],
                                },
                            ],
                        }}
                        style={{
                            padding: '1%',
                            backgroundColor: '#f2f2f2',
                        }}
                        width={width * 0.8}
                        height={height * 0.4}
                        yAxisLabel="Co2:  "
                        chartConfig={chartConfig}
                    />
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Co2 today</Text>
                        <Text style={styles.bigText}>64 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Last Co2 Consumption</Text>
                        <Text style={styles.bigText}>10 Kg</Text>
                    </View>
                    <View style={styles.record02}>
                        <Text style={styles.smallText}>Changes to last shopping</Text>
                        <Text style={styles.bigText}>-52%</Text>
                    </View>
                </View>
                }

            </ScrollView>
            <ScrollView
                style={styles.scrollViewStyle}
                tabLabel='Suggestion'
                // horizontal={true}
                // pagingEnabled={true}
            >
                <View style={styles.record01}>
                    <Text style={styles.bigText}>Suggestion record</Text>

                    <BarChart
                        yAxisSuffix="k"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43, 50],
                                },
                            ],
                        }}
                        style={{
                            padding: '1%',
                        }}
                        width={width * 0.8}
                        height={height * 0.4}
                        yAxisLabel="Co2: "
                        chartConfig={chartConfig}
                        horizontalLabelRotation={10}
                        // verticalLabelRotation={30}
                    />
                </View>
                <View style={styles.record01}>
                    <Text style={styles.smallText}>Co2</Text>
                    <Text style={styles.bigText}>25K</Text>
                </View>
                <View style={styles.record02}>
                    <Text style={styles.smallText}>Changes</Text>
                    <Text style={styles.bigText}>45%</Text>
                </View>
            </ScrollView>
            <ScrollView
                style={styles.scrollViewStyle}
                tabLabel='Task'
                // horizontal={true}
                // pagingEnabled={true}
            >
                <View style={styles.record01}>
                    <Text style={styles.bigText}>Task record</Text>

                    <BarChart
                        yAxisSuffix="k"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43, 50],
                                },
                            ],
                        }}
                        style={{
                            padding: '1%',
                        }}
                        width={width * 0.8}
                        height={height * 0.4}
                        // yAxisLabel="Co2: "
                        chartConfig={chartConfig}
                        horizontalLabelRotation={10}
                        // verticalLabelRotation={30}
                    />
                </View>
                <View style={styles.record01}>
                    <Text style={styles.smallText}>Co2 today</Text>
                    <Text style={styles.bigText}>25 Kg</Text>
                </View>
                <View style={styles.record02}>
                    <Text style={styles.smallText}>Changes</Text>
                    <Text style={styles.bigText}>45%</Text>
                </View>
            </ScrollView>
        </ScrollableTabView>

    );
}

const styles = StyleSheet.create({
    underlineStyle: {
        height: 3,
        backgroundColor: 'red',
        width: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bigText: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 25,
        //fontWeight: 'bold',
        left: '15%',
        paddingTop: '3%',
    },
    smallText: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 13,
        color: "#489145",
        //fontWeight: 'bold',
        left: '5%',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    graphStyle: {},
    record01: {
        paddingTop: '5%',
        paddingLeft: '8%',
        marginTop: '5%',
        // borderTopRightRadius: 25,
        // borderBottomRightRadius: 25,
        backgroundColor: '#f2f2f2',
        left: 0,
        // width: '90%',
        // height:"60%",
        // minHeight:"60%",
        // maxHeight:"70%",

    },
    record02: {
        paddingTop: '3%',
        paddingBottom: '3%',
        paddingLeft: '8%',
        marginTop: '2%',
        // borderTopRightRadius: 25,
        // borderBottomRightRadius: 25,
        backgroundColor: '#f2f2f2',
        left: 0,
        // width: '90%',
        // height:"60%",
        // minHeight:"60%",
        // maxHeight:"70%",

    },
    scrollViewStyle: {
        flex: 1,

    },


});
